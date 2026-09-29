import React, { useState } from 'react';
import {
  Mail, Copy, Check, Send, ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { resolveSocialIcon } from './TechIcons';

interface ContactProps {
  initialSubject?: string;
  onOpenPrivacy?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '', onOpenPrivacy }) => {
  const { personal } = PORTFOLIO_DATA;
  const { language, t } = useLanguage();
  const { isDark } = useTheme();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    purpose: initialSubject || t.services.items[0]?.title || 'Websites Institucionais',
    message: '',
  });
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [copiedEmail, setCopiedEmail]   = useState(false);
  const [submitted, setSubmitted]       = useState(false);

  React.useEffect(() => {
    if (initialSubject) setFormState((prev) => ({ ...prev, purpose: initialSubject }));
  }, [initialSubject]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message || !agreedPrivacy) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setAgreedPrivacy(false);
    setFormState({ name: '', email: '', purpose: t.services.items[0]?.title || 'Websites', message: '' });
  };

  const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
    `[Contacto] ${formState.purpose} - ${formState.name || 'Mensagem'}`
  )}&body=${encodeURIComponent(
    `Olá Pedro,\n\nNome: ${formState.name}\nEmail: ${formState.email}\nServiço: ${formState.purpose}\n\nMensagem:\n${formState.message}\n`
  )}`;

  const whatsappUrl = `https://wa.me/${personal.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Olá Pedro! Gostaria de falar sobre ${formState.purpose || 'um projeto'}.`
  )}`;

  const inputCls = 'w-full px-3 py-2.5 rounded text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-stone-700/30';
  const labelCls = 'block text-xs font-mono uppercase tracking-wide mb-1.5';

  const social = (key: string, cls: string) => {
    const { Icon, color } = resolveSocialIcon(key, isDark);
    return <Icon className={cls} style={{ color }} aria-hidden="true" />;
  };

  const channels = [
    { href: whatsappUrl,         icon: social('whatsapp',  'w-4 h-4 shrink-0'), label: `WhatsApp (${personal.whatsappFormatted})` },
    { href: personal.github,     icon: social('github',    'w-4 h-4 shrink-0'), label: 'GitHub (fullstack-Monteiro)' },
    { href: personal.linkedin,   icon: social('linkedin',  'w-4 h-4 shrink-0'), label: 'LinkedIn' },
    { href: personal.instagram,  icon: social('instagram', 'w-4 h-4 shrink-0'), label: 'Instagram (@piter_monteiro)' },
    { href: personal.facebook,   icon: social('facebook',  'w-4 h-4 shrink-0'), label: 'Facebook' },
  ];

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-6 sm:mb-8 md:mb-10 pb-4" style={{ borderBottom: '1px solid var(--border-soft)' }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-center sm:text-left" style={{ color: 'var(--text)' }}>
            {t.contact.title}
          </h2>
        </div>

        {/* Layout: stacked mobile → side-by-side lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">

          {/* ── Left: direct channels ── */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">

            {/* Email */}
            <div className="p-4 rounded-md" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <span className="text-xs font-mono uppercase tracking-wide block mb-2" style={{ color: 'var(--text-faint)' }}>
                {t.contact.emailLabel}
              </span>
              <div className="flex items-center justify-between gap-2">
                <a href={`mailto:${personal.email}`} className="text-sm font-semibold hover:underline truncate" style={{ color: 'var(--text)' }}>
                  {personal.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md transition-colors cursor-pointer shrink-0"
                  style={{ background: 'var(--bg-subtle)', color: 'var(--text-muted)' }}
                  aria-label={t.contact.copyEmail}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Social channels */}
            <div className="p-3 sm:p-4 rounded-md" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <span className="text-[11px] font-mono uppercase tracking-wider block px-1 pt-1 mb-1.5" style={{ color: 'var(--text-faint)' }}>
                {t.contact.directChannels}
              </span>
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 sm:p-2.5 rounded transition-colors group"
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-subtle)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  style={{ background: 'transparent' }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {ch.icon}
                    <span className="text-xs font-semibold truncate" style={{ color: 'var(--text)' }}>{ch.label}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-2" style={{ color: 'var(--text-faint)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-5 md:p-6 rounded-md" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>

              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">

                  {/* Name + email — 2 cols on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="c-name" className={labelCls} style={{ color: 'var(--text-muted)' }}>{t.contact.nameLabel} *</label>
                      <input
                        id="c-name" type="text" required autoComplete="name"
                        placeholder={t.contact.namePlaceholder}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={inputCls}
                        style={{
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border)',
                          color: 'var(--text)',
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="c-email" className={labelCls} style={{ color: 'var(--text-muted)' }}>{t.contact.emailInputLabel} *</label>
                      <input
                        id="c-email" type="email" required autoComplete="email"
                        placeholder={t.contact.emailPlaceholder}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={inputCls}
                        style={{
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border)',
                          color: 'var(--text)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Service select */}
                  <div>
                    <label htmlFor="c-service" className={labelCls} style={{ color: 'var(--text-muted)' }}>{t.contact.serviceLabel} *</label>
                    <select
                      id="c-service"
                      value={formState.purpose}
                      onChange={(e) => setFormState({ ...formState, purpose: e.target.value })}
                      className={inputCls}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                    >
                      {t.services.items.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Outro Assunto">Outro / Other / Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="c-msg" className={labelCls} style={{ color: 'var(--text-muted)' }}>{t.contact.messageLabel} *</label>
                    <textarea
                      id="c-msg" required rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`${inputCls} resize-none`}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                    />
                  </div>

                  {/* RGPD */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox" id="c-privacy" required
                      checked={agreedPrivacy}
                      onChange={(e) => setAgreedPrivacy(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded cursor-pointer shrink-0 accent-stone-600"
                      style={{ borderColor: 'var(--border)' }}
                    />
                    <label htmlFor="c-privacy" className="text-xs leading-relaxed cursor-pointer select-none" style={{ color: 'var(--text-muted)' }}>
                      {language === 'pt' ? (
                        <>Li a{' '}
                          <button type="button" onClick={onOpenPrivacy} className="font-semibold underline underline-offset-2 hover:text-blue-500 transition-colors" style={{ color: 'var(--text)' }}>Política de Privacidade</button>
                          {' '}e concordo com o tratamento dos meus dados.
                        </>
                      ) : language === 'fr' ? (
                        <>J'ai lu la{' '}
                          <button type="button" onClick={onOpenPrivacy} className="font-semibold underline underline-offset-2 hover:text-blue-500 transition-colors" style={{ color: 'var(--text)' }}>Politique de Confidentialité</button>
                          {' '}et j'accepte le traitement de mes données.
                        </>
                      ) : (
                        <>I have read the{' '}
                          <button type="button" onClick={onOpenPrivacy} className="font-semibold underline underline-offset-2 hover:text-blue-500 transition-colors" style={{ color: 'var(--text)' }}>Privacy Policy</button>
                          {' '}and agree to the processing of my data.
                        </>
                      )}
                    </label>
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      disabled={!agreedPrivacy}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer active:scale-[0.98] ${
                        isDark ? 'bg-stone-100 text-stone-900 hover:bg-white' : 'bg-stone-900 text-white hover:bg-stone-800'
                      }`}
                    >
                      {t.contact.submitBtn}
                      <Send className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="inline-flex p-3 rounded-full text-emerald-500" style={{ background: 'var(--bg-subtle)' }}>
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-base font-bold" style={{ color: 'var(--text)' }}>{t.contact.successMessage}</p>
                  <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                    <a href={mailtoLink} className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium rounded transition-colors ${
                      isDark ? 'bg-stone-100 text-stone-900 hover:bg-white' : 'bg-stone-900 text-white hover:bg-stone-800'
                    }`}>
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      {t.contact.emailLabel}
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium rounded transition-colors" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                      {social('whatsapp', 'w-3.5 h-3.5 shrink-0')}
                      {t.contact.whatsappDirectBtn}
                    </a>
                  </div>
                  <button type="button" onClick={handleReset} className="text-xs underline underline-offset-2 pt-1 cursor-pointer hover:text-blue-500 transition-colors" style={{ color: 'var(--text-faint)' }}>
                    {t.contact.sendAnother}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
