import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-950/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full sm:max-w-3xl sm:mx-4 max-h-[92dvh] sm:max-h-[92vh]  border border-[var(--border)] sm:rounded rounded-t-lg shadow-2xl overflow-y-auto overscroll-contain" style={{ background: "var(--bg)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-stone-300 rounded-full sm:hidden" aria-hidden="true" />
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 sm:px-6 py-3.5  border-b border-[var(--border)] mt-2 sm:mt-0">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-faint)]">
            {t.resume.title}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] hover:opacity-80  border border-[var(--border)] rounded-md transition-colors cursor-pointer" style={{ background: "var(--bg)" }}
              title={t.resume.printPdf}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.resume.printPdf}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[var(--text-faint)] hover:text-[var(--text)] rounded-md transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-5 sm:p-8 md:p-12 text-[var(--text)] space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-[var(--border)] pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--text)]">
              {PORTFOLIO_DATA.personal.fullName || PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-lg font-medium text-[var(--text-muted)] mt-1">
              {t.hero.title} & {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-faint)] mt-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {t.resume.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {PORTFOLIO_DATA.personal.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {PORTFOLIO_DATA.personal.whatsappFormatted}
              </span>
              <span>·</span>
              <a 
                href={PORTFOLIO_DATA.personal.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[var(--text)] transition-colors underline"
              >
                github.com/fullstack-Monteiro
              </a>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--text-faint)] mb-2 font-semibold">
              {t.resume.summaryTitle}
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
              {t.resume.summaryContent}
            </p>
          </div>

          {/* Formação Académica */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--text-faint)] mb-3 font-semibold">
              {t.resume.educationTitle}
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-bold text-[var(--text)]">
                  {t.resume.degree}
                </h3>
                <span className="text-xs font-mono text-[var(--text-faint)]">{t.resume.period}</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                {t.resume.educationDesc}
              </p>
            </div>
          </div>

          {/* Competências Técnicas */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--text-faint)] mb-3 font-semibold">
              {t.resume.competenciesTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="p-3  border border-[var(--border)] rounded">
                <span className="font-semibold text-[var(--text)] block mb-1">Frontend:</span>
                <p className="text-[var(--text-muted)]">React, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap</p>
              </div>
              <div className="p-3  border border-[var(--border)] rounded">
                <span className="font-semibold text-[var(--text)] block mb-1">Backend & Frameworks:</span>
                <p className="text-[var(--text-muted)]">Python, Django, Flask, Node.js, RESTful APIs, JWT, Django REST Framework</p>
              </div>
              <div className="p-3  border border-[var(--border)] rounded">
                <span className="font-semibold text-[var(--text)] block mb-1">Databases:</span>
                <p className="text-[var(--text-muted)]">PostgreSQL, MySQL, SQLite, Django ORM, Entity-Relationship Modeling</p>
              </div>
              <div className="p-3  border border-[var(--border)] rounded">
                <span className="font-semibold text-[var(--text)] block mb-1">Languages:</span>
                <p className="text-[var(--text-muted)]">Python, JavaScript, TypeScript, Java, C++, SQL, HTML5, CSS3</p>
              </div>
              <div className="p-3  border border-[var(--border)] rounded sm:col-span-2">
                <span className="font-semibold text-[var(--text)] block mb-1">Tools, UI & Workflow:</span>
                <p className="text-[var(--text-muted)]">Git & GitHub, VS Code, Cursor, Kiro, Figma, Linux, Postman, Clean Code & SOLID</p>
              </div>
            </div>
          </div>

          {/* Projectos Relevantes */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--text-faint)] mb-3 font-semibold">
              {t.projects.title}
            </h2>
            <div className="space-y-4">
              {t.projects.items.map((proj) => {
                const original = PORTFOLIO_DATA.projects.find((p) => p.id === proj.id);
                return (
                  <div key={proj.id} className="border-l-2 border-[var(--border)] pl-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-[var(--text)]">{proj.title}</h3>
                      <span className="text-xs font-mono text-[var(--text-faint)]">{original?.technologies.slice(0, 3).join(' · ')}</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Idiomas */}
          <div className="border-t border-[var(--border)] pt-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--text-faint)] mb-2 font-semibold">
              {t.resume.languagesTitle}
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              {t.resume.languagesList}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
