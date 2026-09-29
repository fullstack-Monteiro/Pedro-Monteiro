import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { resolveSkillIcon } from './TechIcons';

type Category = 'FRONTEND' | 'BACKEND' | 'LANGUAGES' | 'TOOLS';

const LEVEL_STYLE: Record<string, string> = {
  'Avançado':   'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  'Sólido':     'bg-blue-500/10    text-blue-500    border-blue-500/20',
  'Intermédio': 'bg-amber-500/10   text-amber-500   border-amber-500/20',
};

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState<Category>('FRONTEND');
  const { skillCards } = PORTFOLIO_DATA;
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const categories: { id: Category; label: string }[] = [
    { id: 'FRONTEND',  label: 'Frontend' },
    { id: 'BACKEND',   label: 'Backend' },
    { id: 'LANGUAGES', label: language === 'pt' ? 'Linguagens' : language === 'fr' ? 'Langages' : 'Languages' },
    { id: 'TOOLS',     label: language === 'pt' ? 'Ferramentas' : language === 'fr' ? 'Outils' : 'Tools' },
  ];

  const filteredSkills = skillCards.filter((s) => s.category === activeCategory);

  return (
    <section ref={ref} id="competencias" className="py-12 sm:py-16 md:py-20" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4"
          style={{ borderBottom: '1px solid var(--border-soft)' }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight shrink-0 text-center sm:text-left" style={{ color: 'var(--text)' }}>
            {t.skills.title}
          </h2>

          {/* Filter tabs */}
          <div
            className="flex items-center gap-1 p-1 rounded overflow-x-auto scrollbar-none self-start sm:self-auto w-full sm:w-auto"
            style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}
            role="tablist"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex-1 sm:flex-none px-3 py-1.5 text-xs font-medium rounded whitespace-nowrap transition-all cursor-pointer"
                  style={isActive
                    ? { background: 'var(--bg-card)', color: 'var(--text)', fontWeight: 600, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }
                    : { color: 'var(--text-muted)' }
                  }
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {filteredSkills.map((skill, idx) => {
            const levelStyle = LEVEL_STYLE[skill.level ?? ''] ?? 'bg-stone-500/10 text-stone-500 border-stone-500/20';
            const { Icon, color } = resolveSkillIcon(skill.id, isDark);
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.05 }}
                className="brand-card p-3 sm:p-4 md:p-5 rounded-md flex flex-col items-center justify-center text-center transition-all group select-none cursor-default"
                style={{ '--brand': color } as React.CSSProperties}
              >
                <div className="brand-chip w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-all">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="brand-title text-xs sm:text-sm font-bold mb-1 leading-tight transition-colors">
                  {skill.name}
                </h3>
                {skill.level && (
                  <span className={`text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-full border ${levelStyle}`}>
                    {skill.level}
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
