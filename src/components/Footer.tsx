import React from 'react';
import { sound } from '../utils/audioSynth';

export const Footer: React.FC<{
  onNavigate: (id: string) => void;
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
}> = ({ onNavigate, onHoverAction, onLeaveAction }) => {
  return (
    <footer className="bg-charcoal-950 border-t border-gold-500/15 py-16 px-6 md:px-12 text-parchment-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gold-500/10">
        {/* Col 1: Identity & Edition */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-full border border-gold-400 flex items-center justify-center text-[10px] font-serif font-bold text-gold-300">
              30
            </div>
            <div>
              <span className="font-serif text-sm font-bold tracking-[0.2em] text-parchment-100 uppercase">
                TECHFEST, IIT BOMBAY
              </span>
              <span className="block text-[9px] tracking-widest text-crimson-500 font-bold">
                16—18 DECEMBER 2026
              </span>
            </div>
          </div>
          <p className="font-manuscript text-sm text-parchment-300/80 leading-relaxed max-w-sm italic">
            “An Aetherial Renaissance: Where the spirit of Leonardo da Vinci’s scientific manuscripts awakens inside the laboratories of tomorrow.”
          </p>
          <div className="text-[10px] text-gold-500/80">
            POWAI, MUMBAI, MAHARASHTRA, INDIA 400076
          </div>
        </div>

        {/* Col 2: Navigation Index */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-[10px] tracking-widest text-gold-400 uppercase font-semibold">
            CODEX NAVIGATION
          </div>
          <ul className="space-y-2 text-xs">
            {['the-idea', 'domains', 'experience', 'competitions', 'workshops', 'campus'].map((id) => (
              <li key={id}>
                <button
                  onClick={() => {
                    sound.playTick();
                    onNavigate(id);
                  }}
                  onMouseEnter={() => onHoverAction(id.toUpperCase())}
                  onMouseLeave={onLeaveAction}
                  className="hover:text-gold-300 transition-colors uppercase tracking-wider"
                >
                  {id.replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Colophon & Scholastic Verification */}
        <div className="md:col-span-4 space-y-3">
          <div className="text-[10px] tracking-widest text-gold-400 uppercase font-semibold">
            SCHOLASTIC COLOPHON
          </div>
          <p className="text-[11px] leading-relaxed text-parchment-400">
            Typeset in <span className="text-parchment-200">Cinzel</span>, <span className="text-parchment-200">Cormorant Garamond</span>, and <span className="text-parchment-200">JetBrains Mono</span>. Visualized via procedural SVG mathematical projections. Zero 3D frameworks used.
          </p>
          <div className="p-3 bg-charcoal-900 border border-gold-500/15 rounded text-[10px] space-y-1">
            <span className="text-gold-400 block font-semibold">PATRONAGE & ENDORSEMENT</span>
            <span>Under the auspices of Indian Institute of Technology Bombay, Students’ Gymkhana Council.</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-parchment-500 tracking-wider">
        <div>
          © 1998—2026 TECHFEST, IIT BOMBAY. AN AETHERIAL RENAISSANCE.
        </div>
        <div className="font-serif italic text-gold-500/80">
          « Omnia vincit veritas et ingenium humanum »
        </div>
      </div>
    </footer>
  );
};
