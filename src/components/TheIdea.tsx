import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  { text: 'WHAT IF?', latin: '« Quid si? »', context: 'What if machines could reflect upon their own reasoning?' },
  { text: 'WHY NOT?', latin: '« Cur non? »', context: 'Why not cross the atmospheric boundary with wings of light?' },
  { text: 'CAN WE?', latin: '« Possumusne? »', context: 'Can we assemble matter atom by single atom into thinking lattices?' },
  { text: 'WHAT COMES NEXT?', latin: '« Quid sequitur? »', context: 'What lies beyond the boundary of human biological cognition?' },
];

export const TheIdea: React.FC<{ onHoverAction: (label: string) => void; onLeaveAction: () => void }> = ({
  onHoverAction,
  onLeaveAction,
}) => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuestion((prev) => (prev + 1) % QUESTIONS.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="the-idea" className="relative py-28 md:py-40 px-6 md:px-12 border-b border-gold-500/15 overflow-hidden">
      {/* Delicate Archival Lines & Margin Marks */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center space-x-3 text-xs font-mono tracking-[0.25em] text-crimson-500 uppercase mb-4">
          <span>FOLIO PRIMA • SEC. 01</span>
          <span className="text-gold-500/30">—</span>
          <span className="text-parchment-400">THE INQUIRY OF REASON</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-parchment-100 max-w-4xl leading-[1.05]">
          EVERY RENAISSANCE <br className="hidden sm:block" />
          <span className="text-gold-gradient">BEGINS WITH A QUESTION.</span>
        </h2>

        {/* Editorial Manuscript Folio Layout */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive Sequential Question Card */}
          <div className="lg:col-span-7 bg-charcoal-900/60 border border-gold-500/30 p-8 md:p-12 relative rounded-sm shadow-xl">
            {/* Corner Florentine marks */}
            <span className="absolute top-2 left-2 text-[10px] text-gold-400 font-serif">✦</span>
            <span className="absolute top-2 right-2 text-[10px] text-gold-400 font-serif">✦</span>
            <span className="absolute bottom-2 left-2 text-[10px] text-gold-400 font-serif">✦</span>
            <span className="absolute bottom-2 right-2 text-[10px] text-gold-400 font-serif">✦</span>

            <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 mb-8">
              <span className="font-mono text-xs tracking-widest text-parchment-400">
                PROPOSITIO [0{activeQuestion + 1} / 04]
              </span>
              <div className="flex space-x-2">
                {QUESTIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveQuestion(i)}
                    onMouseEnter={() => onHoverAction(`QUESTION 0${i + 1}`)}
                    onMouseLeave={onLeaveAction}
                    className={`w-3 h-3 rounded-full border transition-all ${
                      i === activeQuestion
                        ? 'bg-gold-400 border-gold-400 scale-110'
                        : 'border-gold-500/30 hover:border-gold-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="min-h-[190px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuestion}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <div className="flex items-baseline space-x-4">
                    <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black tracking-wide text-parchment-100">
                      {QUESTIONS[activeQuestion].text}
                    </h3>
                    <span className="font-manuscript italic text-lg text-gold-400">
                      {QUESTIONS[activeQuestion].latin}
                    </span>
                  </div>

                  <p className="font-mono text-sm sm:text-base text-parchment-300/90 leading-relaxed pt-2">
                    {QUESTIONS[activeQuestion].context}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-500/15 flex items-center justify-between text-[11px] font-mono text-parchment-400">
              <span>LEONARDO DA VINCI CODICES // TRANSLATION REV. 30.0</span>
              <span className="text-crimson-500 font-semibold">IIT BOMBAY 2026</span>
            </div>
          </div>

          {/* Right: The Philosophical Axiom */}
          <div className="lg:col-span-5 space-y-8 pl-0 lg:pl-6">
            <div className="border-l-2 border-gold-500/40 pl-6 space-y-4">
              <p className="font-serif text-xl sm:text-2xl text-parchment-100 leading-snug">
                “Techfest exists somewhere between the question and the answer.”
              </p>
              <p className="font-manuscript italic text-base sm:text-lg text-parchment-300 leading-relaxed">
                The Renaissance was not merely an artistic period; it was an epistemological rupture. Humans refused to inherit the universe as given. They dissected muscles, calculated planetary parabolas, and built automata.
              </p>
            </div>

            <div className="bg-charcoal-900/40 border border-gold-500/20 p-6 rounded-sm space-y-3">
              <div className="font-mono text-xs tracking-widest text-gold-400 uppercase">
                THE TRANSFORMATION CYCLE:
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-parchment-200">
                <span className="px-2 py-1 bg-charcoal-800 border border-gold-500/20">IDEAS</span>
                <span className="text-gold-400">→</span>
                <span className="px-2 py-1 bg-charcoal-800 border border-gold-500/20">EXPERIMENTS</span>
                <span className="text-gold-400">→</span>
                <span className="px-2 py-1 bg-charcoal-800 border border-gold-500/20">INVENTIONS</span>
                <span className="text-gold-400">→</span>
                <span className="px-2 py-1 bg-crimson-700/60 border border-crimson-500/40 text-gold-300">DISCOVERIES</span>
              </div>
              <p className="text-[11px] font-mono text-parchment-400 pt-2">
                Techfest 2026 reawakens this ethos over three days across the 550-acre Powai sanctuary of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
