import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DISCIPLINES, Discipline } from '../data/techfestData';
import { DisciplineBlueprint } from './illustrations/RenaissanceSVGs';
import { sound } from '../utils/audioSynth';

interface DomainsIndexProps {
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
  onSelectDiscipline: (d: Discipline) => void;
}

export const DomainsIndex: React.FC<DomainsIndexProps> = ({
  onHoverAction,
  onLeaveAction,
  onSelectDiscipline,
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>(DISCIPLINES[0]);

  return (
    <section id="domains" className="relative py-28 md:py-36 px-6 md:px-12 border-b border-gold-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gold-500/20 pb-6 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-crimson-500 uppercase mb-3">
              <span>SEC. 02</span>
              <span className="text-gold-500/40">•</span>
              <span className="text-parchment-300">INDEX DISCIPLINARUM</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-parchment-100">
              WHERE IDEAS <span className="text-gold-gradient">COLLIDE.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-parchment-400 max-w-sm text-right">
            Eight canonical pillars of human mastery deconstructed into mechanical blueprints and quantum lattices.
          </p>
        </div>

        {/* Editorial Two-Column Index Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: The Disciplines Typography Index */}
          <div className="lg:col-span-7 space-y-1">
            {DISCIPLINES.map((discipline, idx) => {
              const isActive = selectedDiscipline.id === discipline.id;
              return (
                <div
                  key={discipline.id}
                  onMouseEnter={() => {
                    sound.playTick();
                    setSelectedDiscipline(discipline);
                    onHoverAction(discipline.name.split(' ')[0]);
                  }}
                  onMouseLeave={onLeaveAction}
                  onClick={() => {
                    sound.playChord();
                    onSelectDiscipline(discipline);
                  }}
                  className={`relative py-4 px-4 md:px-6 cursor-pointer transition-all duration-300 border-b border-gold-500/10 group ${
                    isActive ? 'bg-charcoal-900/90 border-gold-500/40' : 'hover:bg-charcoal-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Latin Index & Symbol */}
                      <span className="font-mono text-xs text-gold-400 font-bold">
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-lg text-gold-500 font-semibold w-6 text-center">
                        {discipline.symbol}
                      </span>

                      {/* Discipline Title */}
                      <div>
                        <h3 className={`font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-wide uppercase transition-colors ${
                          isActive ? 'text-gold-300' : 'text-parchment-100 group-hover:text-gold-200'
                        }`}>
                          {discipline.name}
                        </h3>
                        <p className="font-manuscript italic text-xs text-parchment-400">
                          {discipline.latinName}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Arrow Indicator */}
                    <span className={`font-mono text-xs transition-transform duration-300 ${
                      isActive ? 'text-gold-400 translate-x-1' : 'text-parchment-400 opacity-40 group-hover:opacity-100'
                    }`}>
                      VIEW DOSSIER →
                    </span>
                  </div>

                  {/* Animated Gold Underline on Active */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500 via-crimson-500 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              );
            })}
          </div>

          {/* Right: Architectural Folio Display showing the Live Blueprint & Da Vinci-Future Analog */}
          <div className="lg:col-span-5 sticky top-28 bg-charcoal-900/80 border border-gold-500/30 p-6 md:p-8 rounded-sm shadow-2xl">
            <div className="flex items-center justify-between border-b border-gold-500/20 pb-3 mb-6">
              <span className="font-mono text-[10px] tracking-widest text-parchment-400 uppercase">
                FOLIO SCHEMATIC // {selectedDiscipline.latinName}
              </span>
              <span className="font-mono text-[10px] text-crimson-500 font-semibold">
                PLATE NO. {selectedDiscipline.id.toUpperCase()}
              </span>
            </div>

            {/* Live Procedural SVG Technical Drawing */}
            <div className="w-full aspect-square bg-charcoal-950 border border-gold-500/20 p-4 relative overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedDiscipline.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <DisciplineBlueprint id={selectedDiscipline.id} />
                </motion.div>
              </AnimatePresence>

              {/* Blueprint Grid Lines Overlay */}
              <div className="absolute inset-0 fine-dots-pattern opacity-30 pointer-events-none" />
            </div>

            {/* Scientific Callouts & Mathematical Equation */}
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-mono text-xs tracking-widest text-gold-400 uppercase font-semibold">
                  {selectedDiscipline.tagline}
                </p>
                <p className="font-manuscript text-sm text-parchment-200 mt-1 leading-relaxed">
                  {selectedDiscipline.description}
                </p>
              </div>

              {/* Mathematical Formulation */}
              <div className="bg-charcoal-950/80 border border-gold-500/20 px-4 py-2.5 rounded font-mono text-xs text-gold-300 flex items-center justify-between">
                <span className="text-[10px] text-parchment-400">AXIOMA:</span>
                <span className="tracking-wider">{selectedDiscipline.equation}</span>
              </div>

              {/* Classical vs Future Analog */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-[10px] font-mono border-t border-gold-500/15">
                <div className="space-y-1">
                  <span className="text-gold-500/80 uppercase">RENAISSANCE ANCESTRY</span>
                  <p className="text-parchment-300 leading-tight">
                    {selectedDiscipline.renaissanceAnalog}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-crimson-500 uppercase">FUTURE PROJECTION</span>
                  <p className="text-parchment-300 leading-tight">
                    {selectedDiscipline.futureAnalog}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
