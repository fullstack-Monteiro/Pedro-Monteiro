import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();

  const handleScrollDown = () => {
    const el = document.getElementById('sobre');
    el ? el.scrollIntoView({ behavior: 'smooth' }) : onExploreProjects();
  };

  const scrollCueText =
    language === 'pt' ? 'Scroll para explorar'
    : language === 'fr' ? 'Défiler pour explorer'
    : 'Scroll to explore';

  const fadeItem = (delay: number) => ({
    initial:    { opacity: 0, y: 16 } as const,
    animate:    { opacity: 1, y: 0  } as const,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay },
  });

  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-4rem)] flex flex-col overflow-hidden"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl py-10 sm:py-14 md:py-16 text-center sm:text-left">

          {/* Availability badge */}
          <motion.div {...fadeItem(0)} className="flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{t.hero.availability}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 {...fadeItem(0.1)} className="tracking-tight leading-[1.08] mb-3 sm:mb-5 text-balance">
            <span className="block font-bold text-[2rem] sm:text-5xl md:text-6xl" style={{ color: 'var(--text)' }}>
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="block font-normal text-[1.35rem] sm:text-3xl md:text-4xl mt-1 sm:mt-2" style={{ color: 'var(--text-muted)' }}>
              {t.hero.title}
            </span>
          </motion.h1>

          {/* Statement */}
          <motion.p {...fadeItem(0.2)} className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 mx-auto sm:mx-0 max-w-xl sm:max-w-2xl" style={{ color: 'var(--text-muted)' }}>
            {t.hero.heroStatement}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeItem(0.3)} className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <button
              onClick={onExploreProjects}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-md transition-all cursor-pointer shadow-xs active:scale-[0.98] ${
                isDark
                  ? 'bg-stone-100 text-stone-900 hover:bg-white'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              <span>{t.hero.viewProjects}</span>
              <ArrowDown className="w-4 h-4 shrink-0" />
            </button>

            <button
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-md transition-all cursor-pointer active:scale-[0.98]"
              style={{
                color: 'var(--text)',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border)',
              }}
            >
              <span>{t.hero.getInTouch}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" style={{ color: 'var(--text-muted)' }} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex justify-center sm:justify-start max-w-6xl mx-auto px-4 sm:px-6 w-full pb-5 sm:pb-6">
        <button
          type="button"
          onClick={handleScrollDown}
          className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer group"
          style={{ color: 'var(--text-faint)' }}
        >
          <span>{scrollCueText}</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform animate-bounce" />
        </button>
      </div>
    </section>
  );
};
