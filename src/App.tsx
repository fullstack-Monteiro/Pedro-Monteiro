import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { TermsModal } from './components/TermsModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ScrollProgress } from './components/ScrollProgress';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>('');

  const handleNavigateToContact = (subject?: string) => {
    if (subject) {
      setContactSubject(subject);
    }
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjects = () => {
    const projectsSection = document.getElementById('projectos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactAboutProject = (projectTitle: string) => {
    setSelectedProject(null);
    handleNavigateToContact(`Projeto semelhante a ${projectTitle}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* ── Background layer ── dot grid + breathing blobs */}
      <BackgroundCanvas />

      {/* ── Foreground ── everything sits above z-0 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollProgress />
        <Header
          onOpenResume={() => setResumeOpen(true)}
          onNavigateToContact={() => handleNavigateToContact()}
        />

        <main className="flex-1">
          <Hero
            onExploreProjects={handleExploreProjects}
            onContactClick={() => handleNavigateToContact()}
          />
          <About />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <Services onSelectService={(service) => handleNavigateToContact(`Interesse em ${service}`)} />
          <Skills />
          <Contact
            initialSubject={contactSubject}
            onOpenPrivacy={() => setPrivacyOpen(true)}
          />
        </main>

        <Footer
          onOpenTerms={() => setTermsOpen(true)}
          onOpenPrivacy={() => setPrivacyOpen(true)}
        />
      </div>

      {/* ── Modals ── always on top */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactAboutProject={handleContactAboutProject}
      />
      <ResumeModal  isOpen={resumeOpen}  onClose={() => setResumeOpen(false)}  />
      <TermsModal   isOpen={termsOpen}   onClose={() => setTermsOpen(false)}   />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
}
