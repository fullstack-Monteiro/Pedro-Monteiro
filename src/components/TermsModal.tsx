import React, { useEffect } from 'react';
import { X, Printer, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
        aria-labelledby="terms-title"
      >
        {/* Mobile drag handle */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-stone-300 rounded-full sm:hidden" aria-hidden="true" />
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 sm:px-6 py-3.5  border-b border-[var(--border)] mt-2 sm:mt-0">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <Shield className="w-4 h-4 text-[var(--text)]" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold">
              {language === 'pt' ? 'Termos e Condições de Utilização' : language === 'fr' ? 'Termes et Conditions d\'Utilisation' : 'Terms and Conditions'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] hover:opacity-80  border border-[var(--border)] rounded-md transition-colors cursor-pointer" style={{ background: "var(--bg)" }}
              title="Imprimir ou Guardar em PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
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

        {/* Document Body */}
        <div className="p-5 sm:p-8 md:p-10 space-y-8 text-[var(--text)] text-sm leading-relaxed print:p-0">
          
          {/* Header */}
          <div className="border-b border-[var(--border)] pb-6">
            <h1 id="terms-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)]">
              TERMOS E CONDIÇÕES
            </h1>
            <p className="text-xs font-mono text-[var(--text-faint)] mt-2">
              <strong>Última actualização:</strong> Setembro de 2026
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">01.</span> Identificação
            </h2>
            <p>
              Este website é gerido por <strong>{PORTFOLIO_DATA.personal.name}</strong> ({PORTFOLIO_DATA.personal.fullName}), Software Engineer e Full-Stack Developer com atividade profissional na área de engenharia de software, sistemas e soluções digitais.
            </p>
            <div className="p-4  border border-[var(--border)] rounded-lg space-y-1.5 font-mono text-xs text-[var(--text-muted)]">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[var(--text-faint)]" />
                <strong>Contacto:</strong> 
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-blue-600 hover:underline">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[var(--text-faint)]" />
                <strong>Telefone/WhatsApp:</strong> 
                <a href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {PORTFOLIO_DATA.personal.whatsappFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--text-faint)]" />
                <strong>Localização:</strong> {PORTFOLIO_DATA.personal.location}
              </p>
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              Ao aceder e utilizar este website, o utilizador declara que tomou conhecimento destes Termos e Condições.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">02.</span> Objectivo do website
            </h2>
            <p>
              O website tem como finalidade apresentar o perfil profissional, projectos, competências e serviços de engenharia de software e desenvolvimento de Pedro Monteiro, bem como disponibilizar meios de contacto para potenciais clientes, parceiros e outras pessoas interessadas.
            </p>
            <p>
              As informações apresentadas no website têm carácter informativo e comercial.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">03.</span> Serviços Oferecidos
            </h2>
            <p>
              Os serviços apresentados neste website correspondem às seguintes soluções digitais:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <li className="p-3  border border-[var(--border)] rounded-md">
                <strong className="block text-[var(--text)] text-xs font-semibold mb-1">
                  • Websites Institucionais
                </strong>
                <span className="text-xs text-[var(--text-muted)]">
                  Sites multipáginas elegantes, rápidos e totalmente responsivos, com arquitetura focada na história, autoridade de marca e SEO no Google.
                </span>
              </li>
              <li className="p-3  border border-[var(--border)] rounded-md">
                <strong className="block text-[var(--text)] text-xs font-semibold mb-1">
                  • Landing Pages
                </strong>
                <span className="text-xs text-[var(--text-muted)]">
                  Páginas estratégicas de alta conversão ideais para lançamentos, campanhas de tráfego pago, anúncios e captura imediata de leads.
                </span>
              </li>
              <li className="p-3  border border-[var(--border)] rounded-md">
                <strong className="block text-[var(--text)] text-xs font-semibold mb-1">
                  • Portfólios Profissionais
                </strong>
                <span className="text-xs text-[var(--text-muted)]">
                  Vitrines digitais de projetos otimizadas para freelancers, criativos e profissionais liberais com integração de estudos de caso e CV.
                </span>
              </li>
              <li className="p-3  border border-[var(--border)] rounded-md">
                <strong className="block text-[var(--text)] text-xs font-semibold mb-1">
                  • Manutenção e Suporte Técnico
                </strong>
                <span className="text-xs text-[var(--text-muted)]">
                  Atualizações contínuas de segurança, plugins e conteúdos, backups regulares, correção de bugs e otimizações contínuas de velocidade.
                </span>
              </li>
              <li className="p-3  border border-[var(--border)] rounded-md">
                <strong className="block text-[var(--text)] text-xs font-semibold mb-1">
                  • Design Gráfico & Identidade Visual
                </strong>
                <span className="text-xs text-[var(--text-muted)]">
                  Logotipos profissionais, manuais de marca, cardápios digitais interativos para restauração, cartazes, flyers, convites e criativos.
                </span>
              </li>
              <li className="p-3  border border-[var(--border)] rounded-md">
                <strong className="block text-[var(--text)] text-xs font-semibold mb-1">
                  • Desenvolvimento Full-Stack & Sistemas Web
                </strong>
                <span className="text-xs text-[var(--text-muted)]">
                  Sistemas personalizados, frontend em React, APIs REST em Django (Python) e modelação de bases de dados relacionais em PostgreSQL.
                </span>
              </li>
            </ul>
            <p className="text-xs text-[var(--text-muted)] pt-2">
              A disponibilidade e o âmbito de cada serviço são definidos individualmente com cada cliente. A apresentação de um serviço neste website não constitui, por si só, uma obrigação de contratação.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">04.</span> Projectos apresentados
            </h2>
            <p>
              Os projectos apresentados no portefólio podem corresponder a:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-muted)] pl-2">
              <li>projectos próprios;</li>
              <li>projectos académicos;</li>
              <li>projectos experimentais;</li>
              <li>projectos em desenvolvimento;</li>
              <li>trabalhos realizados para clientes;</li>
              <li>conceitos ou protótipos.</li>
            </ul>
            <p className="text-xs text-[var(--text-muted)]">
              Quando aplicável, será indicada a natureza do projecto. As informações, imagens ou materiais pertencentes a clientes permanecem sujeitos aos respectivos direitos e autorizações.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">05.</span> Propriedade intelectual
            </h2>
            <p>
              Salvo indicação em contrário, os textos, elementos gráficos, identidade visual, código, imagens e outros conteúdos originais deste website pertencem a Pedro Monteiro ou aos respectivos titulares.
            </p>
            <p>
              Não é permitida a reprodução, distribuição, modificação ou utilização comercial dos conteúdos deste website sem autorização prévia, salvo quando permitido pela legislação aplicável.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              A propriedade intelectual dos projectos desenvolvidos para clientes será definida no respectivo contrato ou proposta comercial.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">06.</span> Utilização do website
            </h2>
            <p>
              O utilizador compromete-se a utilizar o website de forma legítima e a não:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-muted)] pl-2">
              <li>tentar obter acesso não autorizado a áreas restritas;</li>
              <li>introduzir código malicioso;</li>
              <li>interferir no funcionamento do website;</li>
              <li>utilizar os formulários para spam ou actividades ilícitas;</li>
              <li>utilizar os conteúdos de forma fraudulenta ou enganosa.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">07.</span> Contacto e pedidos de projecto
            </h2>
            <p>
              Os formulários e canais de contacto disponíveis destinam-se à comunicação profissional. O envio de um pedido não significa que um projecto tenha sido aceite.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              A contratação de serviços depende da análise do pedido, definição do escopo, apresentação de proposta e posterior aceitação das condições acordadas entre as partes.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">08.</span> Propostas e contratos
            </h2>
            <p>
              Os valores, prazos, funcionalidades, condições de pagamento e demais condições específicas de um projecto serão estabelecidos na respectiva proposta comercial e/ou contrato.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Em caso de conflito entre estes Termos e um contrato específico celebrado com um cliente, prevalecerão as condições expressamente acordadas no contrato, na medida permitida pela legislação aplicável.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">09.</span> Disponibilidade do website
            </h2>
            <p>
              Serão realizados esforços razoáveis para manter o website disponível e funcional. Contudo, não é garantido que o website esteja permanentemente disponível ou livre de erros.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Podem ocorrer interrupções decorrentes de manutenção, falhas de alojamento, domínio, serviços externos, conectividade ou outros factores fora do controlo directo do responsável pelo website.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">10.</span> Links externos
            </h2>
            <p>
              O website pode conter ligações para plataformas externas, incluindo GitHub, LinkedIn, Instagram, Facebook ou websites de demonstração de projectos.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Esses websites possuem os seus próprios termos e políticas. Pedro Monteiro não controla necessariamente o conteúdo ou funcionamento dessas plataformas.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">11.</span> Alterações
            </h2>
            <p>
              Estes Termos podem ser actualizados sempre que necessário. A versão publicada nesta página será considerada a versão vigente a partir da data indicada no início do documento.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">12.</span> Legislação aplicável
            </h2>
            <p>
              A utilização deste website e a interpretação destes Termos ficam sujeitas à legislação aplicável na <strong>República de Moçambique</strong>, sem prejuízo das normas imperativas que possam ser aplicáveis.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3 border-t border-[var(--border)] pt-6">
            <h2 className="text-base sm:text-lg font-bold text-[var(--text)] flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-faint)]">13.</span> Contacto
            </h2>
            <p>
              Para questões relacionadas com estes Termos e Condições:
            </p>
            <div className="p-4  border border-[var(--border)] rounded-lg space-y-1 font-mono text-xs">
              <p className="font-bold text-[var(--text)]">{PORTFOLIO_DATA.personal.name}</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-blue-600 hover:underline">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{' '}
                <a href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {PORTFOLIO_DATA.personal.whatsappFormatted}
                </a>
              </p>
              <p>
                <strong>Localização:</strong> {PORTFOLIO_DATA.personal.location}
              </p>
            </div>
          </section>

        </div>

        {/* Modal Footer Bar */}
        <div className="sticky bottom-0 px-6 py-3.5  border-t border-[var(--border)] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-[var(--text)]  hover:bg-[var(--bg-subtle)] border border-[var(--border)] rounded-md transition-colors cursor-pointer" style={{ background: "var(--bg)" }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
