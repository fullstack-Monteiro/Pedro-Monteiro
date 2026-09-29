import React, { useEffect } from 'react';
import { X, Printer, Lock, Mail, MessageSquare, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => { window.print(); };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-4xl sm:mx-4 max-h-[92dvh] sm:max-h-[90vh]  border border-[var(--border)] sm:rounded rounded-t-lg shadow-2xl overflow-y-auto overscroll-contain flex flex-col" style={{ background: "var(--bg)" }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
      >
        {/* Mobile drag handle */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-stone-300 rounded-full sm:hidden" aria-hidden="true" />
        {/* Sticky Controls Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 sm:px-6 py-3.5  border-b border-[var(--border)] mt-2 sm:mt-0">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <Lock className="w-4 h-4 text-[var(--text)]" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold">
              {language === 'pt' ? 'Política de Privacidade' : language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] hover:opacity-80  border border-[var(--border)] rounded hover: transition-colors cursor-pointer" style={{ background: "var(--bg)" }}
              title={language === 'pt' ? 'Imprimir política' : 'Print'}
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{language === 'pt' ? 'Imprimir' : 'Print'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[var(--text-faint)] hover:text-[var(--text)] rounded hover:opacity-80 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Policy Content */}
        <div className="p-5 sm:p-8 md:p-10 space-y-8 text-[var(--text)] text-sm leading-relaxed">
          
          {/* Header Info */}
          <div className="pb-6 border-b border-[var(--border)]">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-faint)] block mb-1">
              {language === 'pt' ? 'Documento Legal' : 'Legal Document'}
            </span>
            <h1 id="privacy-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)] mb-2">
              {language === 'pt' ? 'Política de Privacidade' : language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </h1>
            <p className="text-xs font-mono text-[var(--text-faint)]">
              {language === 'pt' ? 'Última actualização: Setembro de 2026' : language === 'fr' ? 'Dernière mise à jour : Septembre 2026' : 'Last updated: September 2026'}
            </p>
            <div className="mt-4 p-4  border border-[var(--border)] rounded-lg text-xs text-[var(--text-muted)] leading-relaxed">
              <p>
                {language === 'pt'
                  ? `A presente Política de Privacidade explica como são recolhidos, utilizados e protegidos os dados pessoais fornecidos através do website de ${PORTFOLIO_DATA.personal.name} – Software Engineer & Full-Stack Developer.`
                  : language === 'fr'
                  ? `Cette Politique de Confidentialité explique comment sont collectées, utilisées et protégées les données personnelles fournies via le site web de ${PORTFOLIO_DATA.personal.name} – Software Engineer & Full-Stack Developer.`
                  : `This Privacy Policy explains how personal data provided through the website of ${PORTFOLIO_DATA.personal.name} – Software Engineer & Full-Stack Developer is collected, used, and protected.`}
              </p>
              <p className="mt-2 text-[var(--text-muted)]">
                {language === 'pt'
                  ? 'Ao utilizar o formulário de contacto disponível neste website, o utilizador declara que tomou conhecimento desta Política de Privacidade.'
                  : language === 'fr'
                  ? 'En utilisant le formulaire de contact disponible sur ce site, l\'utilisateur déclare avoir pris connaissance de cette Politique de Confidentialité.'
                  : 'By using the contact form available on this website, the user declares having read and acknowledged this Privacy Policy.'}
              </p>
            </div>
          </div>

          {/* 1. Dados recolhidos */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">01.</span>
              <span>{language === 'pt' ? 'Dados recolhidos' : language === 'fr' ? 'Données collectées' : 'Data Collected'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'Através do formulário de contacto, poderão ser recolhidos os seguintes dados:'
                : language === 'fr'
                ? 'À travers le formulaire de contact, les données suivantes peuvent être collectées :'
                : 'Through the contact form, the following data may be collected:'}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-medium text-xs text-[var(--text)]">
              <li className="p-2.5  border border-[var(--border)] rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                <span>{language === 'pt' ? 'Nome' : language === 'fr' ? 'Nom' : 'Name'}</span>
              </li>
              <li className="p-2.5  border border-[var(--border)] rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                <span>{language === 'pt' ? 'Endereço de email' : language === 'fr' ? 'Adresse email' : 'Email Address'}</span>
              </li>
              <li className="p-2.5  border border-[var(--border)] rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                <span>{language === 'pt' ? 'Tipo de serviço pretendido' : language === 'fr' ? 'Type de service souhaité' : 'Desired Service Type'}</span>
              </li>
              <li className="p-2.5  border border-[var(--border)] rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                <span>{language === 'pt' ? 'Mensagem enviada pelo utilizador' : language === 'fr' ? 'Message envoyé' : 'Message sent by the user'}</span>
              </li>
            </ul>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'pt'
                ? 'Não são solicitados dados pessoais que não sejam estritamente necessários para responder ao pedido de contacto ou compreender o serviço pretendido.'
                : 'No personal data beyond what is strictly necessary to answer contact requests or understand requested services is solicited.'}
            </p>
          </section>

          {/* 2. Finalidade da recolha */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">02.</span>
              <span>{language === 'pt' ? 'Finalidade da recolha' : language === 'fr' ? 'Finalité de la collecte' : 'Purpose of Collection'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'Os dados fornecidos são utilizados exclusivamente para:'
                : 'The provided data is used exclusively to:'}
            </p>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0"></span>
                <span>{language === 'pt' ? 'Responder ao pedido de contacto;' : 'Respond to your contact request;'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0"></span>
                <span>{language === 'pt' ? 'Compreender as necessidades apresentadas;' : 'Understand the specified requirements and technical needs;'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0"></span>
                <span>{language === 'pt' ? 'Esclarecer dúvidas sobre os serviços;' : 'Clarify doubts regarding services and workflows;'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0"></span>
                <span>{language === 'pt' ? 'Contactar o utilizador relativamente ao pedido efectuado;' : 'Contact the user regarding the request made;'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0"></span>
                <span>{language === 'pt' ? 'Preparar uma eventual proposta comercial;' : 'Prepare a potential commercial proposal;'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0"></span>
                <span>{language === 'pt' ? 'Dar continuidade às comunicações relacionadas com o projecto, quando aplicável.' : 'Follow up on project communications where applicable.'}</span>
              </li>
            </ul>
            <p className="text-xs text-[var(--text-muted)]  p-3 rounded border border-[var(--border)]">
              {language === 'pt'
                ? 'Os dados não serão utilizados para finalidades incompatíveis com aquelas para as quais foram fornecidos.'
                : 'Data will not be processed for purposes incompatible with those for which it was originally collected.'}
            </p>
          </section>

          {/* 3. Base e transparência do tratamento */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">03.</span>
              <span>{language === 'pt' ? 'Base e transparência do tratamento' : 'Legal Basis & Transparency'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'Os dados pessoais são tratados de forma adequada à finalidade para a qual foram fornecidos e apenas na medida necessária para responder ao pedido do utilizador.'
                : 'Personal data is processed adequately according to the purpose for which it was supplied and strictly to the extent required to answer the user request.'}
            </p>
            <p className="text-[var(--text-muted)] text-xs">
              {language === 'pt'
                ? 'Antes do envio do formulário, o utilizador terá acesso à presente Política de Privacidade, podendo tomar conhecimento da forma como os seus dados serão tratados.'
                : 'Prior to form submission, the user has clear access to this Privacy Policy, enabling transparent awareness of how their data will be processed.'}
            </p>
          </section>

          {/* 4. Partilha dos dados */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">04.</span>
              <span>{language === 'pt' ? 'Partilha dos dados' : 'Data Sharing'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'Os dados fornecidos através do formulário não serão vendidos ou disponibilizados a terceiros para fins comerciais.'
                : 'Personal data submitted via the form will never be sold or leased to third parties for commercial purposes.'}
            </p>
            <p className="text-[var(--text-muted)] text-xs">
              {language === 'pt'
                ? 'No entanto, para o funcionamento técnico do website e do sistema de contacto, os dados poderão ser processados por prestadores de serviços tecnológicos utilizados na operação do website, tais como serviços de alojamento, envio de correio electrónico ou processamento do formulário. Quando aplicável, esses serviços terão acesso apenas aos dados estritamente necessários para desempenhar as respectivas funções.'
                : 'However, for the operational and technical functioning of the website, data may be processed by hosting and email infrastructure providers strictly as required to perform their functions.'}
            </p>
          </section>

          {/* 5. Conservação dos dados */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">05.</span>
              <span>{language === 'pt' ? 'Conservação dos dados' : 'Data Retention'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'Os dados serão conservados apenas durante o período necessário para responder ao pedido, manter a comunicação relacionada com o mesmo ou cumprir obrigações legais aplicáveis.'
                : 'Data is retained only for the duration necessary to address inquiries, sustain project communication, or fulfill legal obligations.'}
            </p>
            <p className="text-[var(--text-muted)] text-xs">
              {language === 'pt'
                ? 'Quando os dados deixarem de ser necessários, poderão ser eliminados ou deixados de ser utilizados, salvo quando exista uma obrigação legal que determine a sua conservação.'
                : 'When no longer needed, data is deleted or securely archived unless mandatory retention is required by law.'}
            </p>
          </section>

          {/* 6. Segurança */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">06.</span>
              <span>{language === 'pt' ? 'Segurança' : 'Security Measures'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'São adoptadas medidas técnicas e organizativas razoáveis para proteger os dados pessoais contra acesso não autorizado, perda, alteração, divulgação ou utilização indevida.'
                : 'Reasonable technical and organizational measures are adopted to safeguard personal data against unauthorized access, loss, alteration, or misuse.'}
            </p>
            <p className="text-[var(--text-faint)] text-xs italic">
              {language === 'pt'
                ? 'Apesar das medidas adoptadas, nenhum sistema electrónico pode garantir segurança absoluta.'
                : 'Despite all adopted safeguards, no electronic system can guarantee absolute invulnerability.'}
            </p>
          </section>

          {/* 7. Direitos do utilizador */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">07.</span>
              <span>{language === 'pt' ? 'Direitos do utilizador' : 'User Rights'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'O utilizador poderá solicitar informações sobre os dados pessoais que tenham sido fornecidos, bem como solicitar, quando aplicável:'
                : 'Users may request information regarding their submitted personal data, as well as request:'}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-muted)]">
              <li className="p-2.5  border border-[var(--border)] rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                <span>{language === 'pt' ? 'Acesso aos seus dados pessoais' : 'Access to personal data'}</span>
              </li>
              <li className="p-2.5  border border-[var(--border)] rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                <span>{language === 'pt' ? 'Correcção de dados incorrectos ou desatualizados' : 'Correction of inaccurate data'}</span>
              </li>
              <li className="p-2.5  border border-[var(--border)] rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                <span>{language === 'pt' ? 'Eliminação dos dados' : 'Deletion of data'}</span>
              </li>
              <li className="p-2.5  border border-[var(--border)] rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                <span>{language === 'pt' ? 'Limitação do tratamento e oposição' : 'Processing limitation and objection'}</span>
              </li>
            </ul>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'pt'
                ? 'Para exercer estes direitos ou esclarecer qualquer questão relacionada com o tratamento dos seus dados, o utilizador poderá utilizar os meios de contacto disponibilizados neste website.'
                : 'To exercise any of these rights, users may contact us directly through the channels provided on this website.'}
            </p>
          </section>

          {/* 8. Formulário de contacto */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">08.</span>
              <span>{language === 'pt' ? 'Formulário de contacto' : 'Contact Form Guidelines'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'Ao preencher e enviar o formulário de contacto, o utilizador deverá fornecer informações verdadeiras e, sempre que possível, limitar a mensagem aos dados necessários para o pedido apresentado.'
                : 'When filling out and submitting the contact form, users should provide truthful information and limit details to what is necessary for the project inquiry.'}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'pt'
                ? 'Recomenda-se que o utilizador não envie através do formulário informações sensíveis ou desnecessárias.'
                : 'Users are strongly advised not to submit sensitive, financial, or confidential information through public forms.'}
            </p>
          </section>

          {/* 9. Serviços de terceiros */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">09.</span>
              <span>{language === 'pt' ? 'Serviços de terceiros' : 'Third-Party Services'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'O website poderá utilizar serviços de terceiros necessários ao seu funcionamento, nomeadamente serviços de alojamento, envio de correio electrónico, análise técnica ou processamento de formulários.'
                : 'The website may use essential third-party services, such as hosting infrastructure, email delivery services, and technical form processors.'}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'pt'
                ? 'As práticas de tratamento de dados desses serviços são também determinadas pelas respectivas políticas de privacidade dos fornecedores envolvidos.'
                : 'The data handling practices of these external providers are governed by their respective privacy policies.'}
            </p>
          </section>

          {/* 10. Alterações à Política de Privacidade */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">10.</span>
              <span>{language === 'pt' ? 'Alterações à Política de Privacidade' : 'Policy Updates'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'Esta Política de Privacidade poderá ser actualizada sempre que necessário, nomeadamente para reflectir alterações no funcionamento do website, nos serviços utilizados ou na legislação aplicável.'
                : 'This Privacy Policy may be updated periodically to reflect website evolutions, service improvements, or statutory compliance.'}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'pt'
                ? 'A versão mais recente estará sempre disponível nesta página com indicação da data de actualização.'
                : 'The most recent version will always remain accessible on this page with its effective revision date.'}
            </p>
          </section>

          {/* 11. Contacto */}
          <section className="space-y-3 pt-4 border-t border-[var(--border)]">
            <h2 className="text-base font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">11.</span>
              <span>{language === 'pt' ? 'Contacto e Encarregado' : 'Contact Information'}</span>
            </h2>
            <p>
              {language === 'pt'
                ? 'Para questões relacionadas com esta Política de Privacidade ou com o tratamento dos dados pessoais, o utilizador poderá utilizar os seguintes contactos directos:'
                : 'For any inquiries regarding this Privacy Policy or personal data processing, please contact:'}
            </p>

            <div className="p-4  border border-[var(--border)] rounded-lg space-y-2 text-xs">
              <p className="font-semibold text-[var(--text)] text-sm">{PORTFOLIO_DATA.personal.name}</p>
              <p className="text-[var(--text-muted)]">{PORTFOLIO_DATA.personal.title}</p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[var(--text-faint)]" />
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:underline">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <a href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsapp.replace(/\D/g, '')}`} className="hover:underline" target="_blank" rel="noopener noreferrer">
                    {PORTFOLIO_DATA.personal.whatsappFormatted}
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--text-faint)]" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </span>
              </div>
            </div>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-10 flex items-center justify-between px-6 py-4  border-t border-[var(--border)]">
          <span className="text-[11px] font-mono text-[var(--text-faint)]">
            {PORTFOLIO_DATA.personal.name} © 2026
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer"
          >
            {language === 'pt' ? 'Fechar' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
