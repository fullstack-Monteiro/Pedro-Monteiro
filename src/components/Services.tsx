import React from 'react';
import { Layout, Smartphone, Briefcase, Wrench, Palette } from 'lucide-react';
import { PORTFOLIO_DATA, Service } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

/** Distinct accent per service so the grid does not read as "all generic blue". */
const SERVICE_ACCENT: Record<string, string> = {
  'websites-institucionais':  '#3B82F6',
  'landing-pages':            '#8B5CF6',
  'portfolios-profissionais': '#10B981',
  'manutencao-suporte':       '#F59E0B',
  'designer-grafico':         '#F43F5E',
};
const DEFAULT_ACCENT = '#3B82F6';

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { t } = useLanguage();

  const renderIcon = (type: Service['iconType']) => {
    const cls = 'w-5 h-5 shrink-0';
    switch (type) {
      case 'layout':     return <Layout     className={cls} />;
      case 'smartphone': return <Smartphone className={cls} />;
      case 'briefcase':  return <Briefcase  className={cls} />;
      case 'wrench':     return <Wrench     className={cls} />;
      case 'palette':    return <Palette    className={cls} />;
      default:           return <Layout     className={cls} />;
    }
  };

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-6 sm:mb-8 md:mb-10 pb-4" style={{ borderBottom: '1px solid var(--border-soft)' }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-center sm:text-left" style={{ color: 'var(--text)' }}>
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {t.services.items.map((service) => {
            const original  = PORTFOLIO_DATA.services.find((s) => s.id === service.id);
            const iconType  = original?.iconType ?? 'layout';
            const accent    = SERVICE_ACCENT[service.id] ?? DEFAULT_ACCENT;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                onKeyDown={(e) => e.key === 'Enter' && onSelectService(service.title)}
                role="button"
                tabIndex={0}
                aria-label={`Serviço: ${service.title}`}
                className="brand-card p-4 sm:p-5 rounded-md transition-all cursor-pointer flex flex-col gap-3 group focus-visible:ring-2 focus-visible:ring-blue-400"
                style={{ '--brand': accent } as React.CSSProperties}
              >
                <div className="brand-chip w-9 h-9 sm:w-10 sm:h-10 rounded flex items-center justify-center shrink-0 transition-colors">
                  {renderIcon(iconType)}
                </div>

                <h3 className="brand-title text-sm font-bold leading-snug transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
