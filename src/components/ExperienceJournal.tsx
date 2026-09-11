import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_CHAPTERS, ExperienceChapter } from '../data/techfestData';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import { sound } from '../utils/audioSynth';

interface ExperienceJournalProps {
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
  onOpenChapter: (chapter: ExperienceChapter) => void;
}

export const ExperienceJournal: React.FC<ExperienceJournalProps> = ({
  onHoverAction,
  onLeaveAction,
  onOpenChapter,
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const chapter = EXPERIENCE_CHAPTERS[activeChapterIndex];

  const handlePrev = () => {
    sound.playTick();
    setActiveChapterIndex((prev) => (prev > 0 ? prev - 1 : EXPERIENCE_CHAPTERS.length - 1));
  };

  const handleNext = () => {
    sound.playTick();
    setActiveChapterIndex((prev) => (prev < EXPERIENCE_CHAPTERS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 md:px-12 border-b border-gold-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gold-500/20 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-crimson-500 uppercase mb-3">
              <span>SEC. 03</span>
              <span className="text-gold-500/40">•</span>
              <span className="text-parchment-300">ACTA ET SPECTACULA</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-parchment-100">
              NOT A FESTIVAL. <br className="hidden sm:block" />
              <span className="text-gold-gradient">A WORLD IN MOTION.</span>
            </h2>
          </div>

          {/* Chapter Navigation Pagination */}
          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <span className="font-mono text-xs text-parchment-400 tracking-widest">
              FOLIO {activeChapterIndex + 1} OF {EXPERIENCE_CHAPTERS.length}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                onMouseEnter={() => onHoverAction('PREV FOLIO')}
                onMouseLeave={onLeaveAction}
                className="p-2 border border-gold-500/30 hover:border-gold-400 text-parchment-200 hover:text-gold-300 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={() => onHoverAction('NEXT FOLIO')}
                onMouseLeave={onLeaveAction}
                className="p-2 border border-gold-500/30 hover:border-gold-400 text-parchment-200 hover:text-gold-300 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* The Magazine Spread / Archival Scientific Journal Leaf */}
        <div className="relative bg-charcoal-900/90 border-2 border-gold-500/30 rounded-sm shadow-2xl p-6 sm:p-10 md:p-14 overflow-hidden">
          {/* Subtle Archival Watermark */}
          <div className="absolute top-6 right-8 font-serif text-8xl md:text-9xl text-gold-500/5 font-black select-none pointer-events-none">
            {chapter.plateNumber.split(' ')[1]}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={chapter.chapter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10"
            >
              {/* Left Spread: Chapter Monograph & Typography */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/40 text-gold-300 font-mono text-[10px] tracking-widest uppercase">
                    {chapter.chapter}
                  </span>
                  <span className="font-mono text-xs text-crimson-500 tracking-wider">
                    {chapter.plateNumber}
                  </span>
                  <span className="text-gold-500/30">•</span>
                  <span className="font-mono text-xs text-parchment-400">
                    {chapter.venue}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-parchment-100">
                    {chapter.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-gold-400 tracking-wide">
                    {chapter.subheading}
                  </p>
                </div>

                <p className="font-manuscript text-base sm:text-lg text-parchment-200 leading-relaxed max-w-xl">
                  {chapter.description}
                </p>

                {/* Classical Renaissance Philosophical Quote */}
                <blockquote className="border-l-2 border-gold-500/50 pl-4 py-1 italic font-manuscript text-sm md:text-base text-gold-300/85">
                  {chapter.renaissanceQuote}
                </blockquote>

                {/* Inspect Chapter Action */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      sound.playChord();
                      onOpenChapter(chapter);
                    }}
                    onMouseEnter={() => onHoverAction('READ CHAPTER')}
                    onMouseLeave={onLeaveAction}
                    className="inline-flex items-center space-x-3 px-6 py-3 bg-charcoal-950 border border-gold-400 text-gold-300 hover:bg-gold-500/20 font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 group"
                  >
                    <Bookmark size={14} className="text-gold-400" />
                    <span>EXAMINE CHAPTER DOSSIER</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Right Spread: Archival Highlights & Technical Specifications */}
              <div className="lg:col-span-5 bg-charcoal-950/70 border border-gold-500/20 p-6 sm:p-8 space-y-6">
                <div className="border-b border-gold-500/20 pb-3 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-parchment-400 uppercase">
                    CURATED ATTRIBUTES
                  </span>
                  <span className="font-mono text-xs text-gold-400">
                    {chapter.date}
                  </span>
                </div>

                <div className="space-y-4">
                  {chapter.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <span className="text-gold-500 font-serif text-sm">✦</span>
                      <span className="font-mono text-xs sm:text-sm text-parchment-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Archival Stamp */}
                <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-parchment-400 uppercase">
                    VERIFIED CURATOR // TECHFEST COUNCIL
                  </div>
                  <div className="w-12 h-12 rounded-full border border-crimson-500/60 flex items-center justify-center rotate-[-12deg] text-[8px] font-mono text-crimson-400 font-bold uppercase text-center leading-none">
                    SEALED<br />2026
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Thumbnails bar */}
          <div className="mt-10 pt-6 border-t border-gold-500/20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {EXPERIENCE_CHAPTERS.map((chap, i) => (
              <button
                key={chap.chapter}
                onClick={() => {
                  sound.playTick();
                  setActiveChapterIndex(i);
                }}
                onMouseEnter={() => onHoverAction(`FOLIO ${i + 1}`)}
                onMouseLeave={onLeaveAction}
                className={`text-left p-2.5 rounded border transition-all ${
                  i === activeChapterIndex
                    ? 'border-gold-400 bg-gold-500/10 text-gold-300'
                    : 'border-gold-500/10 hover:border-gold-500/30 text-parchment-400'
                }`}
              >
                <div className="font-mono text-[9px] tracking-widest text-gold-500">
                  {chap.chapter}
                </div>
                <div className="font-serif text-xs font-semibold truncate text-parchment-200">
                  {chap.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
