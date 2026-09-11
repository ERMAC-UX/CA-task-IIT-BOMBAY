import React, { useState, useEffect } from 'react';
import { FEST_METADATA } from '../data/techfestData';
import { sound } from '../utils/audioSynth';

interface FinalCTAProps {
  onEnter: () => void;
  onExplore: () => void;
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onEnter,
  onExplore,
  onHoverAction,
  onLeaveAction,
}) => {
  // Live Countdown to 16 December 2026
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-12-16T09:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 bg-[#050507] border-b border-gold-500/15 overflow-hidden text-center">
      {/* Background Subtle Radial Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-[#050507] to-[#030304] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        {/* Subtle Manuscript Seal */}
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold-500/40 flex items-center justify-center text-gold-300 font-serif text-sm font-bold tracking-widest bg-charcoal-950/80 shadow-[0_0_20px_rgba(197,168,105,0.15)]">
          XXX
        </div>

        {/* The Epigraph Line */}
        <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-crimson-500 uppercase font-semibold">
          THE CLOSING FOLIO // SEC. 09
        </p>

        {/* Dramatic Headline */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-parchment-100 uppercase">
            THE NEXT CHAPTER <br />
            <span className="text-gold-gradient">IS YOURS.</span>
          </h2>

          <p className="font-manuscript italic text-xl sm:text-2xl text-parchment-300 max-w-2xl mx-auto pt-2">
            “He who can copy can do. He who can invent is divine.” — Codex on Light & Shade
          </p>
        </div>

        {/* Fest Identification */}
        <div className="pt-4 pb-2 font-mono text-xs sm:text-sm text-parchment-400 tracking-[0.25em] space-y-1">
          <p className="text-parchment-100 font-bold uppercase">TECHFEST 2026 • 30TH EDITION</p>
          <p className="text-gold-400">{FEST_METADATA.dates}</p>
          <p>INDIAN INSTITUTE OF TECHNOLOGY BOMBAY</p>
        </div>

        {/* Countdown Ticker to Dec 16, 2026 */}
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto py-6 border-y border-gold-500/20">
          <div className="space-y-1">
            <span className="font-serif text-2xl sm:text-4xl text-parchment-100 font-bold">
              {timeLeft.days}
            </span>
            <span className="block font-mono text-[9px] tracking-widest text-gold-400 uppercase">DAYS</span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-2xl sm:text-4xl text-parchment-100 font-bold">
              {timeLeft.hours}
            </span>
            <span className="block font-mono text-[9px] tracking-widest text-gold-400 uppercase">HOURS</span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-2xl sm:text-4xl text-parchment-100 font-bold">
              {timeLeft.minutes}
            </span>
            <span className="block font-mono text-[9px] tracking-widest text-gold-400 uppercase">MINUTES</span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-2xl sm:text-4xl text-parchment-100 font-bold">
              {timeLeft.seconds}
            </span>
            <span className="block font-mono text-[9px] tracking-widest text-gold-400 uppercase">SECONDS</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              sound.playChord();
              onEnter();
            }}
            onMouseEnter={() => onHoverAction('REGISTER')}
            onMouseLeave={onLeaveAction}
            className="px-8 sm:px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-serif text-xs sm:text-sm tracking-[0.25em] font-black uppercase transition-all duration-300 shadow-[0_0_30px_rgba(197,168,105,0.3)]"
          >
            ENTER THE RENAISSANCE
          </button>

          <button
            onClick={() => {
              sound.playTick();
              onExplore();
            }}
            onMouseEnter={() => onHoverAction('EXPLORE')}
            onMouseLeave={onLeaveAction}
            className="px-8 py-4 border border-gold-500/40 hover:border-gold-300 bg-charcoal-900/60 text-parchment-200 hover:text-gold-300 font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300"
          >
            EXPLORE TECHFEST
          </button>
        </div>
      </div>
    </section>
  );
};
