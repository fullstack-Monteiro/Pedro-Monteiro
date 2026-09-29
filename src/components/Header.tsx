import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  onOpenResume: () => void;
  onNavigateToContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, onNavigateToContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { label: t.nav.about,    href: '#sobre' },
    { label: t.nav.projects, href: '#projectos' },
    { label: t.nav.services, href: '#servicos' },
    { label: t.nav.skills,   href: '#competencias' },
    { label: t.nav.contact,  href: '#contacto' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-shadow duration-200
        bg-[var(--bg)]/95 border-[var(--border)]
        ${scrolled ? 'shadow-sm' : ''}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-2 select-none shrink-0"
            aria-label={`Início — ${PORTFOLIO_DATA.personal.name}`}
          >
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded flex items-center justify-center font-mono font-bold text-sm tracking-wider border shadow-xs group-hover:scale-105 transition-all active:scale-95
              ${isDark
                ? 'bg-stone-100 text-stone-900 border-stone-200 group-hover:bg-white'
                : 'bg-stone-900 text-stone-50 border-stone-800 group-hover:bg-stone-800'
              }`}
            >
              <span>PM</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-0.5 mt-0.5 shrink-0" />
            </div>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium flex-1 justify-center"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:transition-all hover:after:w-full whitespace-nowrap"
                style={{ '--tw-after-bg': 'var(--text)' } as React.CSSProperties}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md transition-colors cursor-pointer
                ${isDark
                  ? 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
                  : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                }`}
              aria-label={isDark ? 'Activar modo claro' : 'Activar modo escuro'}
              title={isDark ? 'Modo claro' : 'Modo escuro'}
            >
              {isDark
                ? <Sun  className="w-4 h-4" />
                : <Moon className="w-4 h-4" />
              }
            </button>

            {/* Language switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* CV */}
            <button
              onClick={onOpenResume}
              className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer
                ${isDark
                  ? 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                }`}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>{t.nav.resume}</span>
            </button>

            {/* CTA */}
            <button
              onClick={onNavigateToContact}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-xs active:scale-[0.98]
                ${isDark
                  ? 'text-stone-900 bg-stone-100 hover:bg-white'
                  : 'text-white bg-stone-900 hover:bg-stone-800'
                }`}
            >
              <span>{t.nav.contactBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 -mr-1 rounded-md transition-colors cursor-pointer
                ${isDark
                  ? 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
                }`}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-stone-950/30 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed top-14 sm:top-16 left-0 right-0 z-40 md:hidden border-b shadow-lg animate-in slide-in-from-top duration-200"
            style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              <nav className="flex flex-col" aria-label="Navegação mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center py-3 text-base font-medium border-b last:border-0 transition-colors"
                    style={{ color: 'var(--text-muted)', borderColor: 'var(--border-soft)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-3 flex flex-col gap-2.5">
                <div className="flex items-center justify-between py-1 sm:hidden">
                  <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>Idioma</span>
                  <LanguageSwitcher />
                </div>

                {/* Dark mode toggle in drawer */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 py-2 text-sm font-medium cursor-pointer"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {isDark ? <Sun className="w-4 h-4 shrink-0" /> : <Moon className="w-4 h-4 shrink-0" />}
                  <span>{isDark ? 'Modo claro' : 'Modo escuro'}</span>
                </button>

                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                  className="flex items-center gap-2 py-2.5 text-sm font-medium cursor-pointer"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>{t.nav.resume}</span>
                </button>

                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigateToContact(); }}
                  className={`flex items-center justify-center gap-1.5 w-full py-3 text-sm font-semibold rounded-lg transition-colors cursor-pointer
                    ${isDark ? 'text-stone-900 bg-stone-100 hover:bg-white' : 'text-white bg-stone-900 hover:bg-stone-800'}`}
                >
                  <span>{t.nav.contactBtn}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
