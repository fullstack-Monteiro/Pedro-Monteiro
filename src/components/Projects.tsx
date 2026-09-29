import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { resolveTechIconByName } from './TechIcons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORY_PILL: Record<string, { bg: string; text: string }> = {
  'Rede Social Académica':        { bg: 'bg-blue-500/10',    text: 'text-blue-500'    },
  'Gestão Tributária Municipal':  { bg: 'bg-emerald-500/10', text: 'text-emerald-500' },
  'Plataforma Agrícola & Viveiro':{ bg: 'bg-amber-500/10',   text: 'text-amber-500'   },
  'Academic Social Platform':     { bg: 'bg-blue-500/10',    text: 'text-blue-500'    },
  'Municipal Tax Management':     { bg: 'bg-emerald-500/10', text: 'text-emerald-500' },
  'AgriTech Nursery Platform':    { bg: 'bg-amber-500/10',   text: 'text-amber-500'   },
};
const getPill = (cat: string) => CATEGORY_PILL[cat] ?? { bg: 'bg-stone-500/10', text: 'text-stone-500' };

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { t }      = useLanguage();
  const { isDark } = useTheme();
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const localizedProjects: Project[] = t.projects.items.map((item) => {
    const original = PORTFOLIO_DATA.projects.find((p) => p.id === item.id) || PORTFOLIO_DATA.projects[0];
    return { ...original, ...item };
  });

  return (
    <section ref={ref} id="projectos" className="py-12 sm:py-16 md:py-20" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 sm:mb-8 md:mb-10 pb-4"
          style={{ borderBottom: '1px solid var(--border-soft)' }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center sm:text-left" style={{ color: 'var(--text)' }}>
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {localizedProjects.map((project, idx) => {
            const pill = getPill(project.category);
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + idx * 0.1 }}
                onClick={() => onSelectProject(project)}
                onKeyDown={(e) => e.key === 'Enter' && onSelectProject(project)}
                role="button"
                tabIndex={0}
                aria-label={`Ver estudo de caso: ${project.title}`}
                className="group flex flex-col rounded-md overflow-hidden hover:shadow-[0_4px_20px_rgba(59,130,246,0.12)] transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10', background: 'var(--bg-subtle)' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3">
                  <div>
                    <span className={`inline-block mb-2 px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full ${pill.bg} ${pill.text}`}>
                      {project.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold mb-1.5 group-hover:text-blue-500 transition-colors leading-snug" style={{ color: 'var(--text)' }}>
                      {project.title}
                    </h3>
                    <p className="text-xs line-clamp-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between gap-2" style={{ borderTop: '1px solid var(--border-soft)' }}>
                    <span className="flex items-center gap-x-2 text-[11px] font-mono min-w-0">
                      {project.technologies.slice(0, 3).map((tech) => {
                        const brand = resolveTechIconByName(tech, isDark);
                        return (
                          <span key={tech} className="inline-flex items-center gap-1 min-w-0" style={{ color: 'var(--text-faint)' }}>
                            {brand && <brand.Icon className="w-3.5 h-3.5 shrink-0" style={{ color: brand.color }} />}
                            <span className="truncate">{tech}</span>
                          </span>
                        );
                      })}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: 'var(--text-faint)' }} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
