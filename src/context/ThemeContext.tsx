import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

// ── CSS custom-property palettes ────────────────────────────────────────────

const LIGHT_VARS: Record<string, string> = {
  '--bg':          '#FAF9F5',
  '--bg-card':     '#FFFFFF',
  '--bg-subtle':   '#F5F4F0',
  '--text':        '#1c1917',
  '--text-muted':  '#57534e',
  '--text-faint':  '#a8a29e',
  '--border':      '#e7e5e4',
  '--border-soft': '#f0efeb',
};

const DARK_VARS: Record<string, string> = {
  '--bg':          '#131211',
  '--bg-card':     '#1c1a19',
  '--bg-subtle':   '#232120',
  '--text':        '#f5f4f0',
  '--text-muted':  '#a8a29e',
  '--text-faint':  '#57534e',
  '--border':      '#2c2a29',
  '--border-soft': '#242220',
};

function applyVars(vars: Record<string, string>) {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

// ── Context ──────────────────────────────────────────────────────────────────

interface ThemeContextValue {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Respect explicit user preference stored in localStorage
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    // Otherwise, fall back to OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply CSS variables whenever the theme changes
  useEffect(() => {
    applyVars(isDark ? DARK_VARS : LIGHT_VARS);
    document.documentElement.classList.toggle('dark', isDark);
    document.body.style.backgroundColor = isDark ? DARK_VARS['--bg'] : LIGHT_VARS['--bg'];
    document.body.style.color = isDark ? DARK_VARS['--text'] : LIGHT_VARS['--text'];
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
