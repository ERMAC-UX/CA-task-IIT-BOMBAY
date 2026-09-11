import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheIdea } from './components/TheIdea';
import { DomainsIndex } from './components/DomainsIndex';
import { ExperienceJournal } from './components/ExperienceJournal';
import { Competitions } from './components/Competitions';
import { WorkshopsTimeline } from './components/WorkshopsTimeline';
import { RenaissanceSynthesis } from './components/RenaissanceSynthesis';
import { ScaleStatistics } from './components/ScaleStatistics';
import { CampusBlueprint } from './components/CampusBlueprint';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { Discipline, Competition, ExperienceChapter } from './data/techfestData';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<ExperienceChapter | null>(null);

  const handleHoverAction = (label: string) => {
    setCursorLabel(label);
    setIsHovering(true);
  };

  const handleLeaveAction = () => {
    setCursorLabel('');
    setIsHovering(false);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openRegistration = () => {
    setSelectedDiscipline(null);
    setSelectedCompetition(null);
    setSelectedChapter(null);
    setIsModalOpen(true);
  };

  const handleSelectDiscipline = (d: Discipline) => {
    setSelectedDiscipline(d);
    setSelectedCompetition(null);
    setSelectedChapter(null);
    setIsModalOpen(true);
  };

  const handleSelectCompetition = (c: Competition) => {
    setSelectedCompetition(c);
    setSelectedDiscipline(null);
    setSelectedChapter(null);
    setIsModalOpen(true);
  };

  const handleOpenChapter = (chap: ExperienceChapter) => {
    setSelectedChapter(chap);
    setSelectedDiscipline(null);
    setSelectedCompetition(null);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-charcoal-950 text-parchment-100 selection:bg-gold-500/30 selection:text-gold-300 font-sans">
      {/* Archival Paper Noise Filter */}
      <div className="noise-overlay" />

      {/* Interactive Custom Brass Reticle Cursor */}
      <CustomCursor cursorLabel={cursorLabel} isHoveringInteractive={isHovering} />

      {/* Manuscript Loading Animation */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Floating Editorial Navigation */}
      <Navbar
        onOpenRegister={openRegistration}
        onNavigate={scrollToSection}
        onHoverAction={handleHoverAction}
        onLeaveAction={handleLeaveAction}
      />

      {/* Main Experience Flow: Past to Future Renaissance Journey */}
      <main>
        {/* Full-Screen Hero Composition */}
        <Hero
          onEnter={openRegistration}
          onExplore={() => scrollToSection('the-idea')}
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
        />

        {/* Section 01: The Inquiry / The Idea */}
        <TheIdea
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
        />

        {/* Section 02: Domains Index */}
        <DomainsIndex
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
          onSelectDiscipline={handleSelectDiscipline}
        />

        {/* Section 03: Experience Folio Journal */}
        <ExperienceJournal
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
          onOpenChapter={handleOpenChapter}
        />

        {/* Section 04: Flagship Competitions Ledger */}
        <Competitions
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
          onSelectCompetition={handleSelectCompetition}
          onRegister={openRegistration}
        />

        {/* Section 05: Workshops Laboratory Notebook */}
        <WorkshopsTimeline
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
          onExploreWorkshops={openRegistration}
        />

        {/* Section 06: The Renaissance Split Synthesis */}
        <RenaissanceSynthesis
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
        />

        {/* Section 07: Massive Scale Statistics */}
        <ScaleStatistics
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
        />

        {/* Section 08: IIT Bombay Campus Cartography */}
        <CampusBlueprint
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
        />

        {/* Section 09: Final Closing Folio CTA & Countdown */}
        <FinalCTA
          onEnter={openRegistration}
          onExplore={() => scrollToSection('the-idea')}
          onHoverAction={handleHoverAction}
          onLeaveAction={handleLeaveAction}
        />
      </main>

      {/* Minimalist Editorial Footer & Colophon */}
      <Footer
        onNavigate={scrollToSection}
        onHoverAction={handleHoverAction}
        onLeaveAction={handleLeaveAction}
      />

      {/* Modal Dossier & Registration Folio */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDiscipline={selectedDiscipline}
        selectedCompetition={selectedCompetition}
        selectedChapter={selectedChapter}
      />
    </div>
  );
};

export default App;
