import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code2, Layers, Target, GraduationCap, FolderGit2, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PILLAR_CONFIG = [
  { icon: <Code2  className="w-4 h-4" />, border: 'border-l-blue-500',    iconBg: 'bg-blue-500/10',    iconColor: 'text-blue-500'   },
  { icon: <Layers className="w-4 h-4" />, border: 'border-l-emerald-500', iconBg: 'bg-emerald-500/10', iconColor: 'text-emerald-500' },
  { icon: <Target className="w-4 h-4" />, border: 'border-l-violet-500',  iconBg: 'bg-violet-500/10',  iconColor: 'text-violet-500'  },
];

export const About: React.FC = () => {
  const { language, t } = useLanguage();
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const fadeUp = (delay: number) => ({
    initial:    { opacity: 0, y: 18 } as const,
    animate:    inView ? ({ opacity: 1, y: 0 } as const) : ({ opacity: 0, y: 18 } as const),
    transition: { duration: 0.5, ease: 'easeOut' as const, delay },
  });

  const stats = [
    { icon: <GraduationCap className="w-4 h-4" />, color: 'text-blue-500',    value: '3º Ano', label: language === 'pt' ? 'Ano de Estudo'        : language === 'fr' ? "Année d'études" : 'Study Year'    },
    { icon: <FolderGit2    className="w-4 h-4" />, color: 'text-amber-500',   value: '3+',     label: language === 'pt' ? 'Projectos Concluídos' : language === 'fr' ? 'Projets Réalisés' : 'Projects Done' },
    { icon: <BadgeCheck    className="w-4 h-4" />, color: 'text-emerald-500', value: 'Lic.',   label: language === 'pt' ? 'Eng. Informática'     : language === 'fr' ? 'Ing. Informatique' : 'Computer Eng.' },
  ];

  return (
    <section ref={ref} id="sobre" className="py-12 sm:py-16 md:py-20" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div {...fadeUp(0)} className="mb-6 sm:mb-8 pb-4" style={{ borderBottom: '1px solid var(--border-soft)' }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-center sm:text-left" style={{ color: 'var(--text)' }}>
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          <motion.div {...fadeUp(0.1)} className="lg:col-span-7 space-y-3 sm:space-y-4 text-center sm:text-left">
            <p className="text-base sm:text-lg font-medium text-pretty leading-relaxed" style={{ color: 'var(--text)' }}>
              {t.about.lead}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-pretty" style={{ color: 'var(--text-muted)' }}>
              {t.about.paragraph}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 + i * 0.07 }}
                  className="flex flex-col items-center sm:items-start gap-1 p-3 rounded-md text-center sm:text-left"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <span className={`mx-auto sm:mx-0 ${stat.color}`}>{stat.icon}</span>
                  <span className="text-base sm:text-lg font-bold leading-none" style={{ color: 'var(--text)' }}>{stat.value}</span>
                  <span className="text-[10px] sm:text-xs leading-tight" style={{ color: 'var(--text-faint)' }}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {t.about.pillars.map((pillar, idx) => {
              const cfg = PILLAR_CONFIG[idx] ?? PILLAR_CONFIG[0];
              return (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 + idx * 0.08 }}
                  className={`p-4 border-l-2 ${cfg.border} rounded-md hover:shadow-sm transition-all`}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-6 h-6 rounded flex items-center justify-center ${cfg.iconBg} ${cfg.iconColor}`}>
                      {cfg.icon}
                    </span>
                    <span className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>{pillar.num}</span>
                  </div>
                  <h4 className="text-sm font-semibold mb-1 leading-snug" style={{ color: 'var(--text)' }}>{pillar.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
