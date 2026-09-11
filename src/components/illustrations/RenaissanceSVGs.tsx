import React from 'react';

// Elaborate Celestial Astrolabe & Vitruvian-Circuit Hybrid for Hero
export const AstrolabeHero: React.FC<{ mouseX?: number; mouseY?: number }> = ({ mouseX = 0, mouseY = 0 }) => {
  return (
    <div className="relative w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] md:w-[680px] md:h-[680px] select-none pointer-events-none">
      {/* Dynamic Layer 1: Outermost slow rotating astronomical degree ring */}
      <svg
        viewBox="0 0 800 800"
        className="absolute inset-0 w-full h-full animate-astrolabe-slow opacity-60"
        style={{
          transform: `translate(${mouseX * -15}px, ${mouseY * -15}px)`,
          transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        <circle cx="400" cy="400" r="380" fill="none" stroke="#C5A869" strokeWidth="1" strokeDasharray="3, 7" />
        <circle cx="400" cy="400" r="372" fill="none" stroke="#C5A869" strokeWidth="0.75" />
        <circle cx="400" cy="400" r="350" fill="none" stroke="#8C6D46" strokeWidth="1" strokeDasharray="1, 4" />
        
        {/* Astronomical Graduations */}
        {Array.from({ length: 72 }).map((_, i) => {
          const angle = (i * 360) / 72;
          const isMajor = i % 6 === 0;
          return (
            <line
              key={`tick-${i}`}
              x1="400"
              y1={isMajor ? "20" : "28"}
              x2="400"
              y2="36"
              stroke="#C5A869"
              strokeWidth={isMajor ? "1.5" : "0.75"}
              transform={`rotate(${angle} 400 400)`}
            />
          );
        })}

        {/* Cardinal Zodiacal Symbols & Text in Latin */}
        <text x="400" y="55" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle" letterSpacing="4">SEPTENTRIO • NORTH</text>
        <text x="745" y="404" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle" letterSpacing="4">ORIENS</text>
        <text x="400" y="755" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle" letterSpacing="4">MERIDIES • SOUTH</text>
        <text x="55" y="404" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle" letterSpacing="4">OCCIDENS</text>
      </svg>

      {/* Dynamic Layer 2: Middle Astrolabe Rete & Planetary Trajectories */}
      <svg
        viewBox="0 0 800 800"
        className="absolute inset-0 w-full h-full animate-astrolabe-reverse opacity-75"
        style={{
          transform: `translate(${mouseX * 20}px, ${mouseY * 20}px)`,
          transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        <circle cx="400" cy="400" r="310" fill="none" stroke="#C5A869" strokeWidth="1" />
        <circle cx="400" cy="400" r="280" fill="none" stroke="#8B1E28" strokeWidth="1.25" strokeDasharray="6, 12" />
        
        {/* Eccentric Zodiac Circle (Ecliptic Ring) */}
        <ellipse cx="400" cy="360" rx="220" ry="190" fill="none" stroke="#E2CCA1" strokeWidth="1.5" transform="rotate(23.5 400 360)" />

        {/* Keplerian Orbital Curves & Harmonic Chords */}
        <path d="M 120 400 Q 400 180 680 400 T 120 400" fill="none" stroke="#C5A869" strokeWidth="0.8" strokeOpacity="0.4" />
        <path d="M 400 120 Q 620 400 400 680 T 400 120" fill="none" stroke="#8C6D46" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* Star pointer flame tips */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
          <g key={`star-${ang}`} transform={`rotate(${ang} 400 400)`}>
            <polygon points="400,105 404,130 396,130" fill="#C5A869" />
            <circle cx="400" cy="100" r="3" fill="#FAF7F0" />
            <circle cx="400" cy="100" r="6" fill="none" stroke="#C5A869" strokeWidth="0.5" />
          </g>
        ))}
      </svg>

      {/* Dynamic Layer 3: Central Vitruvian Geometry × Cybernetic Silicon Hex-Core */}
      <svg
        viewBox="0 0 800 800"
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translate(${mouseX * -5}px, ${mouseY * -5}px)`,
          transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A869" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#8B1E28" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#08080B" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="400" cy="400" r="230" fill="url(#coreGlow)" />

        {/* Vitruvian Golden Proportion Square & Circle */}
        <rect x="235" y="235" width="330" height="330" fill="none" stroke="#C5A869" strokeWidth="1.2" strokeDasharray="8, 4" strokeOpacity="0.7" />
        <circle cx="400" cy="400" r="215" fill="none" stroke="#FAF7F0" strokeWidth="1" strokeOpacity="0.5" />

        {/* Da Vinci Wing Mechanical Ribs (Left) merging with Circuit Traces (Right) */}
        {/* Classical Wing Feather Tendons */}
        <g stroke="#C5A869" strokeWidth="1.2" fill="none" opacity="0.85">
          <path d="M 400 400 C 350 320, 260 300, 190 320" />
          <path d="M 400 400 C 330 360, 240 370, 170 410" />
          <path d="M 400 400 C 340 430, 260 460, 195 500" />
          <path d="M 400 400 C 360 470, 300 520, 240 550" />
          {/* Feather cross ribs */}
          <line x1="260" y1="300" x2="240" y2="370" strokeDasharray="3, 3" />
          <line x1="240" y1="370" x2="260" y2="460" strokeDasharray="3, 3" />
          <line x1="260" y1="460" x2="300" y2="520" strokeDasharray="3, 3" />
        </g>

        {/* Cybernetic Micro-Trace Lattice & Neural Nodes (Right) */}
        <g stroke="#EBD49B" strokeWidth="1.2" fill="none" opacity="0.85">
          <path d="M 400 400 L 460 350 L 540 350 L 590 310" />
          <path d="M 400 400 L 480 400 L 560 420 L 620 400" />
          <path d="M 400 400 L 450 460 L 520 460 L 580 520" />
          <path d="M 400 400 L 440 500 L 500 560 L 550 560" />
          {/* Integrated Circuit Solder Pads */}
          <circle cx="540" cy="350" r="3" fill="#8B1E28" stroke="#C5A869" strokeWidth="1" />
          <circle cx="590" cy="310" r="4" fill="#FAF7F0" />
          <circle cx="560" cy="420" r="3" fill="#C5A869" />
          <circle cx="620" cy="400" r="4" fill="#FAF7F0" />
          <circle cx="520" cy="460" r="3" fill="#8B1E28" />
          <circle cx="580" cy="520" r="4" fill="#FAF7F0" />
        </g>

        {/* Central Renaissance Golden Compass Rose */}
        <polygon points="400,270 412,388 400,400 388,388" fill="#C5A869" />
        <polygon points="400,530 412,412 400,400 388,412" fill="#7E6631" />
        <polygon points="270,400 388,388 400,400 388,412" fill="#7E6631" />
        <polygon points="530,400 412,388 400,400 412,412" fill="#C5A869" />

        <circle cx="400" cy="400" r="14" fill="#0A0A0D" stroke="#FAF7F0" strokeWidth="1.5" />
        <circle cx="400" cy="400" r="5" fill="#8B1E28" />

        {/* Latin Marginal Inscriptions */}
        <text x="210" y="270" fill="#B8A17E" fontSize="9" fontFamily="Cormorant Garamond" fontStyle="italic" opacity="0.8">
          « Omnia mutantur, nihil interit »
        </text>
        <text x="490" y="580" fill="#B8A17E" fontSize="8" fontFamily="JetBrains Mono" opacity="0.8">
          0x7E26 // Q_ENTANGLE_INIT()
        </text>
        <text x="310" y="195" fill="#FAF7F0" fontSize="10" fontFamily="Cinzel" letterSpacing="3" opacity="0.9">
          ANNO MMXXVI • EDITION XXX
        </text>
      </svg>
    </div>
  );
};

// Interactive Discipline Technical Blueprints
export const DisciplineBlueprint: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'ai':
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Cerebral anatomical profile overlapping neural matrix */}
          <circle cx="250" cy="250" r="200" fill="none" stroke="#C5A869" strokeWidth="0.8" strokeDasharray="4, 4" />
          <circle cx="250" cy="250" r="140" fill="none" stroke="#8C6D46" strokeWidth="1" />
          {/* Da Vinci skull outline curves */}
          <path d="M 160 320 C 130 250, 140 160, 230 130 C 330 100, 380 180, 360 270 C 350 320, 310 370, 250 370 C 200 370, 170 340, 160 320 Z" fill="none" stroke="#FAF7F0" strokeWidth="1.2" opacity="0.6" />
          {/* Synaptic Network & Self-Attention vectors */}
          {[
            { x: 210, y: 190 }, { x: 280, y: 170 }, { x: 330, y: 220 },
            { x: 260, y: 250 }, { x: 190, y: 260 }, { x: 230, y: 310 }, { x: 300, y: 300 }
          ].map((pt, i, arr) => (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="5" fill="#C5A869" />
              <circle cx={pt.x} cy={pt.y} r="9" fill="none" stroke="#8B1E28" strokeWidth="1" />
              {arr.slice(i + 1).map((target, j) => (
                <line key={j} x1={pt.x} y1={pt.y} x2={target.x} y2={target.y} stroke="#D4BA85" strokeWidth="0.75" strokeOpacity="0.4" />
              ))}
            </g>
          ))}
          <text x="250" y="420" fill="#C5A869" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">
            FIG. 01 — SYNAPSE RECIPROCA ET TENSOR ATTENTIO
          </text>
        </svg>
      );
    case 'robotics':
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Mechanical joint, pulley cords, and hydraulic servo linkage */}
          <circle cx="250" cy="250" r="180" fill="none" stroke="#8C6D46" strokeWidth="0.75" strokeDasharray="6, 6" />
          {/* Bionic Arm Skeletal Linkage */}
          <line x1="100" y1="360" x2="220" y2="250" stroke="#FAF7F0" strokeWidth="4" strokeLinecap="round" />
          <line x1="220" y1="250" x2="380" y2="180" stroke="#FAF7F0" strokeWidth="3" strokeLinecap="round" />
          {/* Leonardo Pulley Wheel */}
          <circle cx="220" cy="250" r="32" fill="#0A0A0D" stroke="#C5A869" strokeWidth="2" />
          <circle cx="220" cy="250" r="8" fill="#8B1E28" />
          {/* Gear teeth */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="220"
              y1="214"
              x2="220"
              y2="220"
              stroke="#C5A869"
              strokeWidth="3"
              transform={`rotate(${i * 30} 220 250)`}
            />
          ))}
          {/* Tendon actuation cords */}
          <path d="M 100 340 Q 180 280 220 230 T 360 160" fill="none" stroke="#C5A869" strokeWidth="1.2" strokeDasharray="3, 3" />
          <path d="M 120 380 Q 200 310 230 270 T 390 190" fill="none" stroke="#8B1E28" strokeWidth="1" />
          {/* Torque vectors */}
          <circle cx="380" cy="180" r="18" fill="none" stroke="#FAF7F0" strokeWidth="1" strokeDasharray="4, 2" />
          <polygon points="380,158 385,166 375,166" fill="#FAF7F0" />
          <text x="250" y="430" fill="#C5A869" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">
            FIG. 02 — MOTUS ARTICULORUM ET PNEUMATICA
          </text>
        </svg>
      );
    case 'coding':
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Ramon Llull Concentric Thinking Wheel */}
          <circle cx="250" cy="250" r="190" fill="none" stroke="#C5A869" strokeWidth="1.2" />
          <circle cx="250" cy="250" r="150" fill="none" stroke="#8C6D46" strokeWidth="0.8" strokeDasharray="4, 4" />
          <circle cx="250" cy="250" r="100" fill="none" stroke="#C5A869" strokeWidth="1" />
          <circle cx="250" cy="250" r="50" fill="#0A0A0D" stroke="#8B1E28" strokeWidth="1.5" />
          {/* Radial Partition Rays with Binary & Logic symbols */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <g key={i} transform={`rotate(${angle} 250 250)`}>
                <line x1="250" y1="60" x2="250" y2="150" stroke="#C5A869" strokeWidth="0.75" />
                <circle cx="250" cy="125" r="2" fill="#FAF7F0" />
                <text x="250" y="80" fill="#FAF7F0" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                  {i % 2 === 0 ? '1' : '0'}
                </text>
              </g>
            );
          })}
          {/* Algorithmic Tree Network in center */}
          <line x1="250" y1="200" x2="210" y2="230" stroke="#C5A869" strokeWidth="1" />
          <line x1="250" y1="200" x2="290" y2="230" stroke="#C5A869" strokeWidth="1" />
          <line x1="210" y1="230" x2="190" y2="280" stroke="#8B1E28" strokeWidth="1" />
          <line x1="210" y1="230" x2="230" y2="280" stroke="#8B1E28" strokeWidth="1" />
          <line x1="290" y1="230" x2="270" y2="280" stroke="#8B1E28" strokeWidth="1" />
          <line x1="290" y1="230" x2="310" y2="280" stroke="#8B1E28" strokeWidth="1" />
          <text x="250" y="420" fill="#C5A869" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">
            FIG. 03 — ROTA COMBINATORIA ET COMPILATIO QUANTICA
          </text>
        </svg>
      );
    case 'engineering':
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Leonardo Flapping Wing Blueprint (Codex on Flight of Birds) */}
          <ellipse cx="250" cy="250" rx="190" ry="190" fill="none" stroke="#C5A869" strokeWidth="0.8" strokeDasharray="3, 3" />
          {/* Main spar and articulated joint */}
          <path d="M 80 280 C 140 240, 220 220, 250 250 C 280 220, 360 240, 420 280" fill="none" stroke="#FAF7F0" strokeWidth="2.5" />
          {/* Bat-wing articulated ribs */}
          <path d="M 250 250 L 150 140 M 250 250 L 200 120 M 250 250 L 250 110 M 250 250 L 300 120 M 250 250 L 350 140" stroke="#C5A869" strokeWidth="1.2" />
          {/* Airfoil streamlines & Pressure vectors */}
          <path d="M 60 200 Q 250 100 440 200" fill="none" stroke="#8B1E28" strokeWidth="1" strokeDasharray="6, 4" />
          <path d="M 60 220 Q 250 120 440 220" fill="none" stroke="#D4BA85" strokeWidth="0.75" />
          {/* Supersonic Shockwave Cones */}
          <polygon points="250,80 120,400 380,400" fill="none" stroke="#C5A869" strokeWidth="0.6" strokeDasharray="2, 4" />
          <text x="250" y="430" fill="#C5A869" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">
            FIG. 04 — ALAE VOLANTI ET VORTEX AERODYNAMICA
          </text>
        </svg>
      );
    case 'space':
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Celestial Sphere & Astrolabe Planisphere */}
          <circle cx="250" cy="250" r="190" fill="none" stroke="#C5A869" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="160" fill="none" stroke="#8C6D46" strokeWidth="0.75" strokeDasharray="2, 4" />
          {/* Planetary Elliptical Orbits */}
          <ellipse cx="250" cy="250" rx="140" ry="80" fill="none" stroke="#FAF7F0" strokeWidth="1" transform="rotate(-30 250 250)" />
          <ellipse cx="250" cy="250" rx="180" ry="110" fill="none" stroke="#C5A869" strokeWidth="1.2" transform="rotate(45 250 250)" />
          {/* Central Sun / Black Hole Singularity */}
          <circle cx="250" cy="250" r="16" fill="#0A0A0D" stroke="#C5A869" strokeWidth="2" />
          <circle cx="250" cy="250" r="6" fill="#8B1E28" />
          {/* Orbiting satellites / moons */}
          <circle cx="160" cy="180" r="4" fill="#FAF7F0" />
          <circle cx="360" cy="320" r="5" fill="#C5A869" />
          <circle cx="330" cy="160" r="3" fill="#8B1E28" />
          {/* Declination Meridian Grid */}
          <line x1="250" y1="60" x2="250" y2="440" stroke="#C5A869" strokeWidth="0.8" strokeDasharray="4, 4" />
          <line x1="60" y1="250" x2="440" y2="250" stroke="#C5A869" strokeWidth="0.8" strokeDasharray="4, 4" />
          <text x="250" y="420" fill="#C5A869" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">
            FIG. 05 — CARTOGRAPHIA CELESTIS ET ORBITA GRAVITATIONIS
          </text>
        </svg>
      );
    case 'science':
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Alchemical Alembic Furnace & Quantum Hex Lattice */}
          <circle cx="250" cy="250" r="185" fill="none" stroke="#C5A869" strokeWidth="0.8" strokeDasharray="4, 4" />
          {/* Alchemical Distillation Retort Contour */}
          <path d="M 210 320 C 180 320, 160 270, 200 230 L 250 180 L 320 220 C 370 260, 340 320, 290 320 Z" fill="none" stroke="#FAF7F0" strokeWidth="1.5" />
          <path d="M 250 180 L 250 100 Q 250 80 270 80 L 370 140" fill="none" stroke="#C5A869" strokeWidth="1.2" />
          {/* Graphene Hexagonal Grid Lattice in Center */}
          <polygon points="250,210 275,225 275,255 250,270 225,255 225,225" fill="none" stroke="#8B1E28" strokeWidth="1.5" />
          <polygon points="275,255 300,270 300,300 275,315 250,300 250,270" fill="none" stroke="#C5A869" strokeWidth="1" />
          <polygon points="225,255 250,270 250,300 225,315 200,300 200,270" fill="none" stroke="#C5A869" strokeWidth="1" />
          <text x="250" y="420" fill="#C5A869" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">
            FIG. 06 — TRANSMUTATIO ALCHYMICA ET MATERIA QUANTICA
          </text>
        </svg>
      );
    case 'innovation':
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Parabolic Solar Burning Mirror & Magnetic Confinement Tokamak */}
          <circle cx="250" cy="250" r="190" fill="none" stroke="#8C6D46" strokeWidth="0.8" strokeDasharray="3, 3" />
          {/* Archimedean Parabolic Reflector curve */}
          <path d="M 120 160 Q 250 360 380 160" fill="none" stroke="#C5A869" strokeWidth="2.5" />
          {/* Incident light rays concentrating into focal plasma point */}
          <line x1="160" y1="100" x2="160" y2="225" stroke="#FAF7F0" strokeWidth="1" strokeDasharray="3, 3" />
          <line x1="160" y1="225" x2="250" y2="280" stroke="#8B1E28" strokeWidth="1.5" />
          <line x1="340" y1="100" x2="340" y2="225" stroke="#FAF7F0" strokeWidth="1" strokeDasharray="3, 3" />
          <line x1="340" y1="225" x2="250" y2="280" stroke="#8B1E28" strokeWidth="1.5" />
          {/* Focal Toroidal Magnetic Ring */}
          <ellipse cx="250" cy="280" rx="36" ry="14" fill="#0A0A0D" stroke="#FAF7F0" strokeWidth="1.5" />
          <circle cx="250" cy="280" r="5" fill="#8B1E28" />
          <text x="250" y="420" fill="#C5A869" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">
            FIG. 07 — SPECULUM URENS ET FUSIO PRIMORDIALIS
          </text>
        </svg>
      );
    case 'design':
    default:
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Golden Spiral & Fibonacci Quadrants (De Divina Proportione) */}
          <rect x="100" y="100" width="300" height="185.4" fill="none" stroke="#C5A869" strokeWidth="1.5" />
          <line x1="285.4" y1="100" x2="285.4" y2="285.4" stroke="#C5A869" strokeWidth="1" />
          <line x1="285.4" y1="214.6" x2="400" y2="214.6" stroke="#C5A869" strokeWidth="1" />
          {/* Golden Logarithmic Spiral Arc */}
          <path d="M 100 285.4 A 185.4 185.4 0 0 1 285.4 100 A 114.6 114.6 0 0 1 400 214.6" fill="none" stroke="#FAF7F0" strokeWidth="2" />
          {/* Pentagram harmonic angles */}
          <polygon points="250,80 290,165 385,175 315,240 335,335 250,290 165,335 185,240 115,175 210,165" fill="none" stroke="#8B1E28" strokeWidth="0.8" strokeDasharray="3, 3" />
          <text x="250" y="420" fill="#C5A869" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">
            FIG. 08 — DE DIVINA PROPORTIONE ET GEOMETRIA SACRA
          </text>
        </svg>
      );
  }
};

// Abstract Architectural Cartography of IIT Bombay Powai
export const CampusMapSVG: React.FC<{ activeZone: string; onSelectZone: (id: string) => void }> = ({
  activeZone,
  onSelectZone,
}) => {
  return (
    <svg viewBox="0 0 900 600" className="w-full h-auto select-none">
      <defs>
        <pattern id="campusGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(197, 168, 105, 0.08)" strokeWidth="0.75" />
        </pattern>
        <linearGradient id="lakeWater" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1319" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#07090C" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Background blueprint grid */}
      <rect width="900" height="600" fill="url(#campusGrid)" />

      {/* Powai Lake Shoreline Contours */}
      <path
        d="M 0 380 C 120 370, 200 420, 280 400 C 360 380, 420 460, 520 470 C 620 480, 700 440, 900 520 L 900 600 L 0 600 Z"
        fill="url(#lakeWater)"
        stroke="#8C6D46"
        strokeWidth="1.2"
        strokeDasharray="4, 4"
      />
      <text x="180" y="520" fill="#C5A869" fontSize="12" fontFamily="Cinzel" letterSpacing="4" opacity="0.6">
        POWAI LAKE WATERS • SINUS POWAIENSIS
      </text>

      {/* Meridian Geodetic Lines */}
      <line x1="450" y1="40" x2="450" y2="560" stroke="#C5A869" strokeWidth="0.75" strokeDasharray="6, 6" opacity="0.35" />
      <line x1="50" y1="300" x2="850" y2="300" stroke="#C5A869" strokeWidth="0.75" strokeDasharray="6, 6" opacity="0.35" />
      <circle cx="450" cy="300" r="220" fill="none" stroke="#C5A869" strokeWidth="0.75" strokeDasharray="2, 6" opacity="0.4" />

      {/* Main Avenues & Campus Pathways */}
      <path d="M 120 200 L 450 200 L 780 200" stroke="#FAF7F0" strokeWidth="1.5" opacity="0.25" />
      <path d="M 450 80 L 450 380 L 320 480" stroke="#FAF7F0" strokeWidth="1.5" opacity="0.25" />
      <path d="M 280 140 L 450 200 L 640 280 L 680 380" stroke="#C5A869" strokeWidth="1" strokeDasharray="4, 3" opacity="0.4" />

      {/* ZONE 1: Central Rotunda / Main Building */}
      <g
        className="cursor-pointer transition-all duration-300 group"
        onClick={() => onSelectZone('main-building')}
      >
        <circle
          cx="450"
          cy="200"
          r={activeZone === 'main-building' ? 24 : 18}
          fill={activeZone === 'main-building' ? '#8B1E28' : '#14141B'}
          stroke="#C5A869"
          strokeWidth={activeZone === 'main-building' ? '2.5' : '1.5'}
        />
        <circle cx="450" cy="200" r="34" fill="none" stroke="#C5A869" strokeWidth="0.75" strokeDasharray="3, 3" />
        <rect x="444" y="194" width="12" height="12" fill="#FAF7F0" transform="rotate(45 450 200)" />
        <text x="450" y="160" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle" fontWeight="bold">
          CENTRAL ROTUNDA
        </text>
        <text x="450" y="174" fill="#C5A869" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
          MAIN BUILDING • 19.1334° N
        </text>
      </g>

      {/* ZONE 2: Gymkhana Grounds / Robowars */}
      <g
        className="cursor-pointer transition-all duration-300 group"
        onClick={() => onSelectZone('gymkhana')}
      >
        <circle
          cx="640"
          cy="280"
          r={activeZone === 'gymkhana' ? 24 : 18}
          fill={activeZone === 'gymkhana' ? '#8B1E28' : '#14141B'}
          stroke="#C5A869"
          strokeWidth={activeZone === 'gymkhana' ? '2.5' : '1.5'}
        />
        <circle cx="640" cy="280" r="34" fill="none" stroke="#C5A869" strokeWidth="0.75" strokeDasharray="3, 3" />
        <polygon points="640,270 648,286 632,286" fill="#FAF7F0" />
        <text x="640" y="325" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle" fontWeight="bold">
          GRAND COLOSSEUM
        </text>
        <text x="640" y="339" fill="#C5A869" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
          ROBOWARS • GYMKHANA
        </text>
      </g>

      {/* ZONE 3: Open Air Theatre (OAT) */}
      <g
        className="cursor-pointer transition-all duration-300 group"
        onClick={() => onSelectZone('oat')}
      >
        <circle
          cx="300"
          cy="150"
          r={activeZone === 'oat' ? 24 : 18}
          fill={activeZone === 'oat' ? '#8B1E28' : '#14141B'}
          stroke="#C5A869"
          strokeWidth={activeZone === 'oat' ? '2.5' : '1.5'}
        />
        <circle cx="300" cy="150" r="34" fill="none" stroke="#C5A869" strokeWidth="0.75" strokeDasharray="3, 3" />
        <path d="M 292 144 Q 300 138 308 144 Q 300 156 292 144" fill="#FAF7F0" />
        <text x="300" y="110" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle" fontWeight="bold">
          OAT AMPHITHEATRE
        </text>
        <text x="300" y="124" fill="#C5A869" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
          TECHNOHOLIX ARENA
        </text>
      </g>

      {/* ZONE 4: Lecture Hall Complex (LHC) */}
      <g
        className="cursor-pointer transition-all duration-300 group"
        onClick={() => onSelectZone('lhc')}
      >
        <circle
          cx="310"
          cy="280"
          r={activeZone === 'lhc' ? 24 : 18}
          fill={activeZone === 'lhc' ? '#8B1E28' : '#14141B'}
          stroke="#C5A869"
          strokeWidth={activeZone === 'lhc' ? '2.5' : '1.5'}
        />
        <circle cx="310" cy="280" r="34" fill="none" stroke="#C5A869" strokeWidth="0.75" strokeDasharray="3, 3" />
        <rect x="304" y="274" width="12" height="12" fill="#FAF7F0" />
        <text x="310" y="325" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle" fontWeight="bold">
          THE ATHENAEUM
        </text>
        <text x="310" y="339" fill="#C5A869" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
          KEYNOTE SUMMITS • LHC
        </text>
      </g>

      {/* ZONE 5: Powai Lake Promontory */}
      <g
        className="cursor-pointer transition-all duration-300 group"
        onClick={() => onSelectZone('powai-lake')}
      >
        <circle
          cx="480"
          cy="460"
          r={activeZone === 'powai-lake' ? 24 : 18}
          fill={activeZone === 'powai-lake' ? '#8B1E28' : '#14141B'}
          stroke="#C5A869"
          strokeWidth={activeZone === 'powai-lake' ? '2.5' : '1.5'}
        />
        <circle cx="480" cy="460" r="34" fill="none" stroke="#C5A869" strokeWidth="0.75" strokeDasharray="3, 3" />
        <polygon points="480,452 486,464 474,464" fill="#FAF7F0" />
        <text x="480" y="505" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle" fontWeight="bold">
          LAKE OBSERVATORY
        </text>
        <text x="480" y="519" fill="#C5A869" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
          STARGAZING & DRONES
        </text>
      </g>

      {/* Cartographic Compass Rose in top right corner */}
      <g transform="translate(800, 100)">
        <circle cx="0" cy="0" r="45" fill="none" stroke="#C5A869" strokeWidth="1" />
        <polygon points="0,-42 7,-6 0,0 -7,-6" fill="#C5A869" />
        <polygon points="0,42 7,6 0,0 -7,6" fill="#7E6631" />
        <polygon points="42,0 6,7 0,0 6,-7" fill="#7E6631" />
        <polygon points="-42,0 -6,7 0,0 -6,-7" fill="#C5A869" />
        <text x="0" y="-48" fill="#FAF7F0" fontSize="11" fontFamily="Cinzel" textAnchor="middle">N</text>
      </g>
    </svg>
  );
};
