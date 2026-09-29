import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  const { language, t } = useLanguage();

  const privacyText =
    language === 'pt' ? 'Política de Privacidade' :
    language === 'fr' ? 'Confidentialité' : 'Privacy Policy';

  const socialLinks = [
    { label: 'GitHub',    href: PORTFOLIO_DATA.personal.github },
    { label: 'LinkedIn',  href: PORTFOLIO_DATA.personal.linkedin },
    { label: 'Instagram', href: PORTFOLIO_DATA.personal.instagram },
    { label: 'Facebook',  href: PORTFOLIO_DATA.personal.facebook },
    { label: 'WhatsApp',  href: `https://wa.me/${PORTFOLIO_DATA.personal.whatsapp.replace(/\D/g, '')}` },
    { label: 'Email',     href: `mailto:${PORTFOLIO_DATA.personal.email}` },
  ];

  return (
    <footer className="py-8 sm:py-10 md:py-12" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-xs">

          {/* Identity + legal */}
          <div className="text-center sm:text-left">
            <p className="font-semibold mb-1" style={{ color: 'var(--text)' }}>
              {PORTFOLIO_DATA.personal.name} — {t.hero.title}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-0.5" style={{ color: 'var(--text-faint)' }}>
              <span>{t.footer.rights}</span>
              <span aria-hidden="true">·</span>
              <button type="button" onClick={onOpenTerms} className="underline underline-offset-2 transition-colors cursor-pointer hover:opacity-80">
                {t.footer.terms}
              </button>
              <span aria-hidden="true">·</span>
              <button type="button" onClick={onOpenPrivacy} className="underline underline-offset-2 transition-colors cursor-pointer hover:opacity-80">
                {privacyText}
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 md:gap-5" style={{ color: 'var(--text-muted)' }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="transition-colors hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-1.5 rounded-md transition-colors cursor-pointer hover:opacity-80"
              style={{ color: 'var(--text-faint)' }}
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
