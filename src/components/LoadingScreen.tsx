import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Phase progression timeline
    const t1 = setTimeout(() => setPhase(1), 600);   // Draw circle & display Techfest IIT Bombay
    const t2 = setTimeout(() => setPhase(2), 1600);  // 30TH EDITION
    const t3 = setTimeout(() => setPhase(3), 2600);  // AN AETHERIAL RENAISSANCE + modern grid
    const t4 = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 700);
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-charcoal-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Central Renaissance Geometry to Modern Circuit Animation */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Outer Golden Compass Circle (Drawing effect) */}
              <motion.circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="#C5A869"
                strokeWidth="1.2"
                strokeDasharray="1005"
                initial={{ strokeDashoffset: 1005 }}
                animate={{ strokeDashoffset: phase >= 1 ? 0 : 1005 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* Inner Astrolabe Inscribed Quadrant */}
              <motion.circle
                cx="200"
                cy="200"
                r="130"
                fill="none"
                stroke="#8C6D46"
                strokeWidth="0.8"
                strokeDasharray="4 8"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: phase >= 2 ? 0.7 : 0, rotate: phase >= 2 ? 90 : 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />

              {/* Classical Vitruvian Square */}
              <motion.rect
                x="108"
                y="108"
                width="184"
                height="184"
                fill="none"
                stroke="#C5A869"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: phase >= 2 ? 0.5 : 0, scale: 1 }}
                transition={{ duration: 1 }}
              />

              {/* Transforming into Modern Laser Reticle Lines */}
              {phase >= 3 && (
                <g stroke="#FAF7F0" strokeWidth="1" opacity="0.85">
                  <motion.line
                    x1="20" y1="200" x2="380" y2="200"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.line
                    x1="200" y1="20" x2="200" y2="380"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <circle cx="200" cy="200" r="6" fill="#8B1E28" />
                </g>
              )}
            </svg>

            {/* Central Monogram */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
              <AnimatePresence>
                {phase >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-1"
                  >
                    <p className="font-serif text-[10px] sm:text-xs tracking-[0.3em] uppercase text-parchment-200">
                      TECHFEST
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.25em] text-gold-400">
                      IIT BOMBAY
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-3 pt-2 border-t border-gold-500/20"
                >
                  <span className="font-serif text-[11px] tracking-[0.35em] text-crimson-500 font-semibold">
                    30TH EDITION • MMXXVI
                  </span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Theme Reveal */}
          <div className="h-12 flex items-center justify-center mt-6">
            <AnimatePresence>
              {phase >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 12, letterSpacing: '0.15em' }}
                  animate={{ opacity: 1, y: 0, letterSpacing: '0.35em' }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <p className="font-serif text-sm sm:text-base md:text-lg text-gold-300 font-bold uppercase">
                    AN AETHERIAL RENAISSANCE
                  </p>
                  <p className="font-manuscript italic text-xs text-parchment-300/80 mt-1">
                    « Scientia • Machina • Humanitas »
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Skip button for immediate entry */}
          <button
            onClick={() => {
              setIsFinished(true);
              onComplete();
            }}
            className="absolute bottom-8 right-8 font-mono text-[10px] tracking-widest text-parchment-400 hover:text-gold-300 transition-colors uppercase border border-gold-500/20 px-3 py-1 rounded"
          >
            Enter Now →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
