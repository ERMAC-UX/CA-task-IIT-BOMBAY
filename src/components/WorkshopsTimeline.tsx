import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WORKSHOP_STAGES, WorkshopStage } from '../data/techfestData';
import { Cpu, Hammer, FlaskConical, Crown } from 'lucide-react';
import { sound } from '../utils/audioSynth';

interface WorkshopsTimelineProps {
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
  onExploreWorkshops: () => void;
}

export const WorkshopsTimeline: React.FC<WorkshopsTimelineProps> = ({
  onHoverAction,
  onLeaveAction,
  onExploreWorkshops,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage: WorkshopStage = WORKSHOP_STAGES[activeStepIndex];

  const stageIcons = [
    <Cpu size={16} key="1" />,
    <Hammer size={16} key="2" />,
    <FlaskConical size={16} key="3" />,
    <Crown size={16} key="4" />
  ];

  return (
    <section id="workshops" className="relative py-28 md:py-36 px-6 md:px-12 border-b border-gold-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gold-500/20 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-crimson-500 uppercase mb-3">
              <span>SEC. 05</span>
              <span className="text-gold-500/40">•</span>
              <span className="text-parchment-300">LABORATORIUM ET ARTES</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-parchment-100">
              LEARN BY <span className="text-gold-gradient">BUILDING.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-parchment-400 max-w-sm text-right mt-4 md:mt-0">
            A 4-phase pedagogical crucible. From theoretical inquiry to silicon prototyping, failure calibration, and industrial synthesis.
          </p>
        </div>

        {/* 4-Step Interactive Timeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {WORKSHOP_STAGES.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={stage.step}
                onClick={() => {
                  sound.playTick();
                  setActiveStepIndex(idx);
                }}
                onMouseEnter={() => onHoverAction(stage.stageName.split(' ')[1])}
                onMouseLeave={onLeaveAction}
                className={`p-4 text-left border rounded-sm transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'border-gold-400 bg-charcoal-900 shadow-[0_0_15px_rgba(197,168,105,0.15)]'
                    : 'border-gold-500/20 bg-charcoal-950/60 hover:border-gold-500/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-gold-400' : 'text-parchment-400'}`}>
                    PHASE 0{idx + 1} // {stage.step}
                  </span>
                  <span className={isActive ? 'text-gold-300' : 'text-parchment-500'}>
                    {stageIcons[idx]}
                  </span>
                </div>
                <div className="font-serif text-sm sm:text-base font-bold uppercase text-parchment-100">
                  {stage.stageName.split(' ')[0]}
                </div>
                <div className="font-manuscript italic text-xs text-gold-500/80">
                  {stage.latinStage}
                </div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-crimson-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* The Open Technical Notebook Folio */}
        <div className="bg-charcoal-900/90 border-2 border-gold-500/30 p-8 sm:p-12 md:p-14 rounded-sm shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 mb-8">
            <span className="font-mono text-xs tracking-widest text-parchment-400 uppercase">
              WORKSHOP MANUSCRIPT FOLIO // {currentStage.latinStage}
            </span>
            <span className="font-mono text-xs text-crimson-500 font-semibold uppercase">
              CURRICULUM ARCHIVE
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Notebook Leaf */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-extrabold uppercase text-parchment-100">
                    {currentStage.stageName}
                  </h3>
                  <p className="font-manuscript italic text-gold-400 text-base mt-1">
                    {currentStage.latinStage}
                  </p>
                </div>

                <p className="font-mono text-sm sm:text-base text-parchment-300 leading-relaxed">
                  {currentStage.description}
                </p>

                <blockquote className="border-l-2 border-gold-500 pl-4 py-1 italic font-manuscript text-base text-parchment-300/90">
                  {currentStage.quote}
                </blockquote>

                {/* Topics Covered */}
                <div className="pt-2">
                  <div className="font-mono text-xs tracking-widest text-gold-400 uppercase mb-3 font-semibold">
                    CORE LABORATORY SYLLABI:
                  </div>
                  <div className="space-y-2">
                    {currentStage.topics.map((topic, i) => (
                      <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm font-mono text-parchment-200">
                        <span className="text-crimson-500 font-bold">◈</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Notebook Leaf: Instrumentation & Tools */}
              <div className="lg:col-span-5 bg-charcoal-950/80 border border-gold-500/25 p-6 sm:p-8 space-y-6">
                <div className="font-mono text-xs tracking-widest text-gold-400 uppercase border-b border-gold-500/15 pb-2">
                  APPARATUS & TOOLCHAINS
                </div>

                <div className="space-y-3">
                  {currentStage.tools.map((t, idx) => (
                    <div key={idx} className="p-3 bg-charcoal-900 border border-gold-500/15 rounded flex items-center justify-between text-xs font-mono">
                      <span className="text-parchment-200">{t}</span>
                      <span className="text-gold-500 text-[10px] uppercase">READY</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gold-500/15">
                  <p className="font-mono text-[11px] text-parchment-400 leading-relaxed">
                    All workshops include hardware kits, dedicated server GPU compute allocations, and direct mentorship from IIT Bombay researchers.
                  </p>
                </div>

                <button
                  onClick={() => {
                    sound.playChord();
                    onExploreWorkshops();
                  }}
                  onMouseEnter={() => onHoverAction('EXPLORE WORKSHOPS')}
                  onMouseLeave={onLeaveAction}
                  className="w-full py-3.5 bg-gold-500/15 border border-gold-400 hover:bg-gold-500 hover:text-charcoal-950 text-gold-300 font-serif text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 text-center"
                >
                  EXPLORE WORKSHOPS →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
