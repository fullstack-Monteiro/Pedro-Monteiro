import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

interface LanguageSwitcherProps {
  className?: string;
  align?: 'left' | 'right';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = '',
  align = 'right'
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const options: { code: Language; label: string; short: string }[] = [
    { code: 'pt', label: 'Português', short: 'PT' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'fr', label: 'Français', short: 'FR' },
  ];

  const currentOption = options.find((o) => o.code === language) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      {/* Compact single trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Idioma atual: ${currentOption.label}. Clique para alterar.`}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-stone-700 bg-stone-100 hover:bg-stone-200/80 border border-stone-200/90 rounded-md transition-colors cursor-pointer select-none active:scale-[0.98]"
      >
        <Globe className="w-3.5 h-3.5 text-stone-500" />
        <span className="font-semibold text-stone-900 uppercase tracking-wide">{currentOption.short}</span>
        <ChevronDown 
          className={`w-3 h-3 text-stone-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-stone-700' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} mt-1.5 w-36 py-1 bg-white border border-stone-200/90 rounded-lg shadow-lg shadow-stone-900/5 z-50 animate-in fade-in zoom-in-95 duration-150`}
          role="menu"
          aria-orientation="vertical"
        >
          {options.map((opt) => {
            const isSelected = language === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                role="menuitem"
                onClick={() => {
                  setLanguage(opt.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer text-left ${
                  isSelected
                    ? 'bg-stone-50 text-stone-950 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50/70'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{opt.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">{opt.short}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-stone-900" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
