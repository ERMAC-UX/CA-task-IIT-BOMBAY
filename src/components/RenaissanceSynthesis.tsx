import React, { useState } from 'react';
import { sound } from '../utils/audioSynth';

interface RenaissanceSynthesisProps {
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
}

export const RenaissanceSynthesis: React.FC<RenaissanceSynthesisProps> = ({
  onHoverAction,
  onLeaveAction,
}) => {
  const [splitPos, setSplitPos] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSplitPos(Number(e.target.value));
  };

  return (
    <section className="relative py-28 md:py-40 px-6 md:px-12 border-b border-gold-500/15 overflow-hidden bg-charcoal-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-crimson-500 uppercase">
            <span>SEC. 06</span>
            <span className="text-gold-500/40">•</span>
            <span>THE METAMORPHOSIS</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-parchment-100 leading-none">
            THE RENAISSANCE <br />
            <span className="text-parchment-400 font-light italic font-manuscript text-3xl sm:text-5xl">IS NOT IN THE PAST.</span>
          </h2>

          <p className="font-serif text-2xl sm:text-3xl text-gold-300 font-bold uppercase tracking-widest pt-2">
            IT IS HAPPENING NOW.
          </p>

          <p className="font-mono text-xs sm:text-sm text-parchment-400 max-w-xl mx-auto leading-relaxed pt-2">
            Curiosity has not changed across six centuries. Only our instruments have evolved from sepia ink and brass gears to silicon semiconductors and qubits.
          </p>
        </div>

        {/* Interactive Split Transformation Canvas */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] min-h-[380px] sm:min-h-[500px] border-2 border-gold-500/30 rounded-sm overflow-hidden select-none shadow-2xl bg-charcoal-900">
          {/* Layer 1: Left - Ancient Renaissance Manuscript (Ink & Parchment) */}
          <div className="absolute inset-0 bg-[#0C0B0A] flex items-center justify-center p-8">
            <svg viewBox="0 0 800 500" className="w-full h-full">
              {/* Parchment Grid & Geometrical Radians */}
              <circle cx="400" cy="250" r="210" fill="none" stroke="#C5A869" strokeWidth="1" strokeDasharray="3, 6" opacity="0.6" />
              <rect x="250" y="100" width="300" height="300" fill="none" stroke="#8C6D46" strokeWidth="1" opacity="0.5" />
              <ellipse cx="400" cy="250" rx="350" ry="180" fill="none" stroke="#C5A869" strokeWidth="0.75" strokeDasharray="6, 12" opacity="0.4" />

              {/* Da Vinci Anatomical Ribs & Muscular Tendons */}
              <path d="M 120 180 C 240 120, 340 140, 400 250 C 340 360, 240 380, 120 320" fill="none" stroke="#E8DECD" strokeWidth="2.5" opacity="0.8" />
              <path d="M 180 200 C 260 160, 340 180, 400 250 C 340 320, 260 340, 180 300" fill="none" stroke="#C5A869" strokeWidth="1.2" opacity="0.7" />
              <line x1="200" y1="180" x2="200" y2="320" stroke="#8B1E28" strokeWidth="1" strokeDasharray="4, 4" />
              <line x1="280" y1="160" x2="280" y2="340" stroke="#8B1E28" strokeWidth="1" strokeDasharray="4, 4" />

              {/* Latin Manuscript Script & Da Vinci Mirror Writing */}
              <text x="80" y="90" fill="#FAF7F0" fontSize="13" fontFamily="Cormorant Garamond" fontStyle="italic" opacity="0.85">
                « La semplicità è l'ultima sofisticazione » — Codex Atlanticus
              </text>
              <text x="80" y="120" fill="#C5A869" fontSize="10" fontFamily="Cinzel" letterSpacing="3" opacity="0.7">
                FIG. ANATOMIA MECHANICA • ANNO DOMINI MCCCCXC
              </text>
              <text x="80" y="440" fill="#B8A17E" fontSize="9" fontFamily="Cormorant Garamond" fontStyle="italic" opacity="0.75">
                « Dimmi se mai fu fatta alcuna cosa » (Tell me if ever anything was made)
              </text>

              {/* Hand-drawn mechanical water screw / helical gear */}
              <circle cx="200" cy="380" r="30" fill="none" stroke="#C5A869" strokeWidth="1.5" />
              <circle cx="200" cy="380" r="10" fill="#8B1E28" />
              <line x1="170" y1="380" x2="230" y2="380" stroke="#FAF7F0" strokeWidth="1" />
              <line x1="200" y1="350" x2="200" y2="410" stroke="#FAF7F0" strokeWidth="1" />
            </svg>
          </div>

          {/* Layer 2: Right - Modern Futuristic Silicon & Quantum Schematic (Clipped by slider) */}
          <div
            className="absolute inset-0 bg-[#070709] flex items-center justify-center p-8 overflow-hidden"
            style={{
              clipPath: `polygon(${splitPos}% 0, 100% 0, 100% 100%, ${splitPos}% 100%)`,
            }}
          >
            <svg viewBox="0 0 800 500" className="w-full h-full">
              {/* Laser Reticle & Fiber Matrix */}
              <rect width="800" height="500" fill="none" stroke="rgba(197, 168, 105, 0.1)" strokeWidth="1" />
              <circle cx="400" cy="250" r="210" fill="none" stroke="#FAF7F0" strokeWidth="1" strokeDasharray="8, 8" opacity="0.6" />
              
              {/* Microchip Silicon Core & Bus Channels */}
              <rect x="250" y="100" width="300" height="300" fill="none" stroke="#C5A869" strokeWidth="1.5" />
              <line x1="400" y1="50" x2="400" y2="450" stroke="#8B1E28" strokeWidth="1.5" />
              <line x1="50" y1="250" x2="750" y2="250" stroke="#8B1E28" strokeWidth="1.5" />

              {/* Quantum Node Neural Mesh */}
              {[
                { x: 400, y: 250 }, { x: 480, y: 190 }, { x: 580, y: 160 }, { x: 670, y: 200 },
                { x: 500, y: 310 }, { x: 620, y: 340 }, { x: 720, y: 310 }
              ].map((pt, i, arr) => (
                <g key={i}>
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#C5A869" />
                  <circle cx={pt.x} cy={pt.y} r="9" fill="none" stroke="#FAF7F0" strokeWidth="1" />
                  {arr.slice(i + 1).map((next, j) => (
                    <line key={j} x1={pt.x} y1={pt.y} x2={next.x} y2={next.y} stroke="#C5A869" strokeWidth="1" strokeOpacity="0.45" />
                  ))}
                </g>
              ))}

              {/* Modern Quantum Code Annotations */}
              <text x="460" y="90" fill="#FAF7F0" fontSize="11" fontFamily="JetBrains Mono" opacity="0.9">
                EXEC_SYS::QUANTUM_TENSOR_STATE(0x7F26)
              </text>
              <text x="460" y="120" fill="#C5A869" fontSize="10" fontFamily="Space Grotesk" letterSpacing="3" opacity="0.8">
                TECHFEST 2026 // IIT BOMBAY CORE
              </text>
              <text x="460" y="440" fill="#FAF7F0" fontSize="10" fontFamily="JetBrains Mono" opacity="0.8">
                |Ψ(t)⟩ = exp(-iĤt/ħ) |Ψ(0)⟩
              </text>
            </svg>
          </div>

          {/* Visual Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-300 via-crimson-500 to-gold-400 shadow-[0_0_12px_#C5A869] pointer-events-none"
            style={{ left: `${splitPos}%` }}
          >
            {/* Center Draggable Dial Button */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-charcoal-950 border-2 border-gold-400 flex items-center justify-center text-[10px] text-gold-300 font-mono shadow-xl">
              ⟷
            </div>
          </div>

          {/* Labels on each side */}
          <div className="absolute top-4 left-6 font-mono text-[10px] tracking-widest text-parchment-400 uppercase pointer-events-none">
            PAST: FLORENCE 1500
          </div>
          <div className="absolute top-4 right-6 font-mono text-[10px] tracking-widest text-gold-400 uppercase pointer-events-none">
            FUTURE: IIT BOMBAY 2026
          </div>
        </div>

        {/* Drag Control Slider */}
        <div className="max-w-md mx-auto mt-8 flex flex-col items-center space-y-3">
          <input
            type="range"
            min="0"
            max="100"
            value={splitPos}
            onChange={handleSliderChange}
            onMouseEnter={() => onHoverAction('SLIDE TIMELINE')}
            onMouseLeave={onLeaveAction}
            className="w-full accent-gold-500 cursor-ew-resize"
          />
          <div className="flex justify-between w-full text-[10px] font-mono text-parchment-400 tracking-wider">
            <span>« 15th CENTURY CODEX</span>
            <span className="text-gold-300 font-semibold">{splitPos}% SYNTHESIS</span>
            <span>21st CENTURY QUANTUM »</span>
          </div>
        </div>
      </div>
    </section>
  );
};
