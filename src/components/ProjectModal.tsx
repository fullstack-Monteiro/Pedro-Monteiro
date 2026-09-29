import React, { useEffect } from 'react';
import { X, ExternalLink, Check, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Project } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { resolveTechIconByName } from './TechIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactAboutProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactAboutProject }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const loc            = t.projects.items.find((i) => i.id === project.id) || project;
  const activeTitle    = loc.title               || project.title;
  const activeCategory = loc.category            || project.category;
  const activeTagline  = loc.tagline             || project.tagline;
  const activeProblem  = loc.problem             || project.problem;
  const activeSolution = loc.solution            || project.solution;
  const activeRole     = loc.role                || project.role;
  const activeOverview = loc.overview            || project.overview;
  const activeFeatures = loc.features            || project.features;
  const activeArch     = loc.architectureDetails || project.architectureDetails;
  const activeImpact   = loc.metricsOrImpact     || project.metricsOrImpact;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Panel — bottom-sheet on mobile, centred card on sm+ */}
      <div
        className="
          relative w-full shadow-2xl
          overflow-y-auto overscroll-contain
          /* mobile: sheet slides from bottom */
          rounded-t-lg max-h-[92dvh]
          /* sm+: centred card */
          sm:rounded sm:max-w-4xl sm:mx-4 sm:max-h-[90vh]
        "
        style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle — mobile only */}
        <div className="sticky top-0 z-10">
          <div className="flex justify-center pt-2.5 pb-0 sm:hidden">
            <div className="w-10 h-1 rounded-full" style={{ background: 'var(--border)' }} aria-hidden="true" />
          </div>

          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-7 py-3 sm:py-4 backdrop-blur-md" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-mono uppercase tracking-wider shrink-0 hidden xs:block" style={{ color: 'var(--text-muted)' }}>
                {t.projects.viewCaseStudy}
              </span>
              <span className="shrink-0 hidden xs:block" style={{ color: 'var(--border)' }} aria-hidden="true">/</span>
              <span className="text-xs font-medium truncate" style={{ color: 'var(--text)' }}>{activeCategory}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md transition-colors cursor-pointer shrink-0 ml-3"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-subtle)'; e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              aria-label={t.projects.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 md:space-y-10">

          {/* Title + tagline + tech */}
          <div>
            <h2
              id="modal-title"
              className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 text-balance"
              style={{ color: 'var(--text)' }}
            >
              {activeTitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: 'var(--text-muted)' }}>{activeTagline}</p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3 text-xs font-mono" style={{ color: 'var(--text-faint)' }}>
              {project.technologies.map((tech, idx) => {
                const brand = resolveTechIconByName(tech, isDark);
                return (
                  <React.Fragment key={tech}>
                    <span className="inline-flex items-center gap-1.5">
                      {brand && <brand.Icon className="w-3.5 h-3.5 shrink-0" style={{ color: brand.color }} />}
                      {tech}
                    </span>
                    {idx < project.technologies.length - 1 && (
                      <span className="select-none" style={{ color: 'var(--border)' }} aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Preview image */}
          <div
            className="relative w-full rounded overflow-hidden"
            style={{ aspectRatio: '16/9', border: '1px solid var(--border)', background: 'var(--bg-subtle)' }}
          >
            <img
              src={project.image}
              alt={activeTitle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          {/* Problem / Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-500 font-semibold block">
                01 · {t.projects.problemLabel}
              </span>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{activeProblem}</p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-semibold block">
                02 · {t.projects.solutionLabel}
              </span>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{activeSolution}</p>
            </div>
          </div>

          {/* Role + Overview */}
          <div className="p-4 sm:p-5 rounded-md space-y-2 sm:space-y-3" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <span className="text-xs font-mono uppercase tracking-wider block" style={{ color: 'var(--text-faint)' }}>
              {t.projects.roleLabel}
            </span>
            <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--text)' }}>{activeRole}</p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{activeOverview}</p>
          </div>

          {/* Features */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider block mb-3" style={{ color: 'var(--text-faint)' }}>
              {t.projects.featuresLabel}
            </span>
            <ul className="space-y-2.5">
              {activeFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider block mb-3" style={{ color: 'var(--text-faint)' }}>
              {t.projects.archLabel}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeArch.map((detail, idx) => (
                <div key={idx} className="p-3 sm:p-4 rounded" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
            <span className="text-xs font-mono uppercase tracking-wider block mb-2" style={{ color: 'var(--text-faint)' }}>
              {t.projects.impactLabel}
            </span>
            <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--text)' }}>{activeImpact}</p>
          </div>

          {/* Footer actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="flex flex-wrap items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded transition-colors"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  <FaGithub className="w-3.5 h-3.5 shrink-0" />
                  {t.projects.codeOnGithub}
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded transition-colors"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  {t.projects.liveDemo}
                </a>
              )}
            </div>

            <button
              onClick={() => { onClose(); onContactAboutProject(activeTitle); }}
              className={`inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold rounded transition-colors cursor-pointer w-full sm:w-auto ${
                isDark ? 'bg-stone-100 text-stone-900 hover:bg-white' : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              {t.projects.discussSimilar}
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
