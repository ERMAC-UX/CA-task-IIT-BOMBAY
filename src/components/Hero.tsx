import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Compass } from 'lucide-react';
import { AstrolabeHero } from './illustrations/RenaissanceSVGs';
import { FEST_METADATA } from '../data/techfestData';
import { sound } from '../utils/audioSynth';

interface HeroProps {
  onEnter: () => void;
  onExplore: () => void;
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onEnter,
  onExplore,
  onHoverAction,
  onLeaveAction,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 overflow-hidden border-b border-gold-500/15"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

      {/* Atmospheric Radial Shimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-renaissance-radial pointer-events-none" />

      {/* Top Metadata Header Row */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-500/20 pb-4 text-[11px] font-mono tracking-[0.2em] text-parchment-300"
      >
        <div className="flex items-center space-x-3">
          <span className="text-crimson-500 font-bold">◈</span>
          <span>{FEST_METADATA.edition}</span>
          <span className="text-gold-500/50">/</span>
          <span>FOLIO NO. 30</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-gold-400">DATES:</span>
          <span className="text-parchment-100 font-semibold">{FEST_METADATA.dates}</span>
        </div>
        <div className="hidden md:flex items-center space-x-2 text-parchment-400">
          <Compass size={13} className="text-gold-400" />
          <span>INDIAN INSTITUTE OF TECHNOLOGY BOMBAY</span>
        </div>
      </motion.div>

      {/* Central Visual & Enormous Editorial Typography */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Giant Editorial Headline & Supporting Inquiry */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm border border-gold-500/30 bg-gold-500/5 text-gold-300 text-[10px] md:text-xs font-mono tracking-[0.25em] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse" />
            <span>THE 30TH CONVERGENCE OF HUMAN REASON</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="space-y-1"
          >
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.25rem] leading-[0.88] tracking-tight font-black uppercase text-gold-gradient select-none">
              AETHERIAL
            </h1>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.25rem] leading-[0.88] tracking-tight font-black uppercase text-parchment-100 select-none">
              RENAISSANCE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="font-manuscript italic text-lg sm:text-xl md:text-2xl text-parchment-200/90 max-w-xl leading-relaxed border-l-2 border-gold-500/40 pl-5"
          >
            “Where Leonardo da Vinci’s inquiries meet the frontiers of quantum intelligence and autonomous machine creation.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <button
              onClick={() => {
                sound.playChord();
                onEnter();
              }}
              onMouseEnter={() => onHoverAction('ENTER')}
              onMouseLeave={onLeaveAction}
              className="px-7 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-serif text-xs sm:text-sm tracking-[0.2em] font-bold uppercase transition-all duration-300 shadow-[0_0_25px_rgba(197,168,105,0.25)] flex items-center space-x-2 group"
            >
              <span>ENTER THE RENAISSANCE</span>
              <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => {
                sound.playTick();
                onExplore();
              }}
              onMouseEnter={() => onHoverAction('EXPLORE')}
              onMouseLeave={onLeaveAction}
              className="px-6 py-3.5 border border-gold-500/30 hover:border-gold-400 bg-charcoal-900/60 text-parchment-200 hover:text-gold-300 font-mono text-xs tracking-[0.18em] uppercase transition-all duration-300"
            >
              EXPLORE TECHFEST →
            </button>
          </motion.div>
        </div>

        {/* Right Column: Layered Handcrafted Astrolabe & Mechanical Blueprint SVG */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <AstrolabeHero mouseX={mousePos.x} mouseY={mousePos.y} />

          {/* Floating Handwritten Latin Annotation Overlay */}
          <div className="absolute -bottom-4 right-0 bg-charcoal-950/80 backdrop-blur-sm border border-gold-500/20 p-3 max-w-[220px] rounded text-right hidden sm:block">
            <p className="font-manuscript italic text-xs text-gold-300/90 leading-tight">
              « Natura non facit saltus, sed ingenium facit saltus novos. »
            </p>
            <p className="font-mono text-[9px] text-parchment-400 mt-1 uppercase tracking-widest">
              PLATE 00 • CODEX ATLANTE
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Technical Marginalia & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-gold-500/20 flex items-center justify-between text-[10px] font-mono tracking-widest text-parchment-400"
      >
        <div className="hidden sm:flex items-center space-x-4">
          <span>LAT 19° 08' 00" N</span>
          <span className="text-gold-500/30">|</span>
          <span>LON 72° 54' 48" E</span>
          <span className="text-gold-500/30">|</span>
          <span>ALTITUDE 54M MSL</span>
        </div>

        <button
          onClick={() => {
            sound.playTick();
            onExplore();
          }}
          onMouseEnter={() => onHoverAction('SCROLL')}
          onMouseLeave={onLeaveAction}
          className="flex items-center space-x-2 text-gold-300 hover:text-parchment-100 transition-colors mx-auto sm:mx-0 group"
        >
          <span className="animate-bounce">↓</span>
          <span>DESCENT INTO THE CODEX</span>
        </button>

        <div className="hidden sm:block text-right">
          <span>16—18 DECEMBER 2026</span>
        </div>
      </motion.div>
    </section>
  );
};
