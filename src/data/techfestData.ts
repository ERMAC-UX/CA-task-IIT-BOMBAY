export interface Discipline {
  id: string;
  name: string;
  latinName: string;
  symbol: string;
  tagline: string;
  description: string;
  equation: string;
  accent: string;
  renaissanceAnalog: string;
  futureAnalog: string;
}

export interface ExperienceChapter {
  chapter: string;
  title: string;
  subheading: string;
  date: string;
  venue: string;
  description: string;
  highlights: string[];
  renaissanceQuote: string;
  plateNumber: string;
}

export interface Competition {
  id: string;
  title: string;
  category: string;
  prizePool: string;
  teamSize: string;
  difficulty: 'Novice' | 'Adept' | 'Master' | 'Grandmaster';
  renaissanceConcept: string;
  description: string;
  specs: string[];
}

export interface WorkshopStage {
  step: string;
  stageName: string;
  latinStage: string;
  topics: string[];
  description: string;
  tools: string[];
  quote: string;
}

export const FEST_METADATA = {
  edition: '30TH EDITION',
  editionRoman: 'XXX',
  dates: '16—18 DECEMBER 2026',
  year: '2026',
  location: 'IIT BOMBAY, POWAI, MUMBAI',
  coordinates: '19.1334° N, 72.9133° E',
  theme: 'AN AETHERIAL RENAISSANCE',
  themeSubtitle: 'Where Leonardo da Vinci’s Questions Meet Quantum Horizons',
  stats: [
    { label: 'EDITION', value: '30', suffix: 'TH', subtext: 'Decades of Pioneer Inventions' },
    { label: 'FOOTFALL', value: '180', suffix: 'K+', subtext: 'Scholars, Inventors & Observers' },
    { label: 'EVENTS & WORKSHOPS', value: '300', suffix: '+', subtext: 'Across 12 Specialized Arenas' },
    { label: 'PRIZE PURSE', value: '50', prefix: '₹', suffix: 'L+', subtext: 'In Research Grants & Rewards' },
    { label: 'INSTITUTIONS', value: '2500', suffix: '+', subtext: 'Global Universities Represented' },
    { label: 'NATIONS', value: '60', suffix: '+', subtext: 'Worldwide Technological delegations' },
  ]
};

export const DISCIPLINES: Discipline[] = [
  {
    id: 'ai',
    name: 'ARTIFICIAL INTELLIGENCE',
    latinName: 'Intellectus Machinalis',
    symbol: 'Ψ',
    tagline: 'Synthetic Cognition & Neural Mandalas',
    description: 'Deconstructing cognition into recursive algorithms. From ancient automata and Cartesian dualism to transformers, autonomous reasoning, and neural plasticity.',
    equation: '∇_θ E_{x~p}[log(D(x))] + E_{z~q}[log(1 - D(G(z)))]',
    accent: '#C5A869',
    renaissanceAnalog: 'da Vinci’s mechanical knight & anatomical study of the human brain ventricles',
    futureAnalog: 'Neuromorphic spiking neural nets & self-evolving synthetic consciousness',
  },
  {
    id: 'robotics',
    name: 'ROBOTICS & KINEMATICS',
    latinName: 'Motus Mechanica',
    symbol: '⚙',
    tagline: 'Gears, Tendons & Autonomous Sinews',
    description: 'The physical embodiment of human intent. Combining multi-axis kinematics, bionic tendon actuation, and micro-precision torque vectors.',
    equation: 'τ = M(q)q̈ + C(q, q̇)q̇ + g(q)',
    accent: '#8B1E28',
    renaissanceAnalog: 'Codex Atlanticus pulleys, escapements, and programmable mechanical drums',
    futureAnalog: 'Full-body hydraulic bipedal chassis & nanoscopic surgical manipulators',
  },
  {
    id: 'coding',
    name: 'COMPUTATIONAL LOGIC',
    latinName: 'Ars Combinatoria',
    symbol: '⌘',
    tagline: 'Algorithmic Ciphers & Infinite Turing Webs',
    description: 'Weaving language into executable reality. From Leibniz’s binary calculus and Llull’s Ars Magna to distributed consensus and quantum compilation.',
    equation: 'O(V + E) ⟺ ⋂_{i=1}^n λ_i(G) ≤ μ',
    accent: '#D4BA85',
    renaissanceAnalog: 'Ramon Llull’s combinatorial thinking wheels and cipher disks',
    futureAnalog: 'Quantum error-corrected circuits & hyper-dimensional vector lattices',
  },
  {
    id: 'engineering',
    name: 'AEROSPACE & STRUCTURES',
    latinName: 'Mechanica Vitruviana',
    symbol: '∿',
    tagline: 'Flight Dynamics & Vitruvian Architecture',
    description: 'Harnessing atmospheric forces and tensile stress. Translating ornithopter feather harmonics into supersonic aerofoils and orbital trajectories.',
    equation: 'L = ½ ρ v² S C_L  |  σ = M y / I',
    accent: '#A08055',
    renaissanceAnalog: 'Codex on the Flight of Birds (1505) & helical air-screw sketches',
    futureAnalog: 'Hypersonic scramjet geometry & carbon-nanotube tensegrity satellites',
  },
  {
    id: 'space',
    name: 'CELESTIAL CARTOGRAPHY',
    latinName: 'Astronomia Speculativa',
    symbol: '☿',
    tagline: 'Orbital Resonance & Deep Void Astrolabes',
    description: 'Mapping the celestial sphere from Copernicus and Galileo to gravitational wave interferometers and deep interplanetary navigation.',
    equation: 'T² = (4π² / G(M₁ + M₂)) · a³',
    accent: '#EBD49B',
    renaissanceAnalog: 'Brass planispheric astrolabes & Galileo’s Sidereus Nuncius sketches',
    futureAnalog: 'Laser-propelled interstellar wafer-craft & lagrange-point telescopes',
  },
  {
    id: 'science',
    name: 'QUANTUM & MATERIALIA',
    latinName: 'Philosophia Naturalis',
    symbol: '⚗',
    tagline: 'The Microcosm, Alchemy & Atom Lattice',
    description: 'The inquiry into matter itself. Alchemy evolved into crystallography, topological insulators, metamaterials, and superconducting flux qubits.',
    equation: 'iħ ∂/∂t |Ψ⟩ = Ĥ |Ψ⟩',
    accent: '#8C6D46',
    renaissanceAnalog: 'Paracelsian distillation furnaces & mineral transmutation codices',
    futureAnalog: 'Room-temperature superconductors & programmable molecular matter',
  },
  {
    id: 'innovation',
    name: 'SUSTAINABLE ENERGY',
    latinName: 'Ignis Solaris',
    symbol: '☼',
    tagline: 'Thermodynamics & Sun-Capture Mirrors',
    description: 'Harnessing the primordial engine of the universe. From Archimedean burning mirrors and watermills to tokamak magnetic confinement fusion.',
    equation: 'E = mc²  |  Q_{plasma} = P_{fusion} / P_{heat} > 1',
    accent: '#C5A869',
    renaissanceAnalog: 'da Vinci’s industrial parabolic mirror for heating tanning boilers',
    futureAnalog: 'Spherical tokamak fusion power & perovskite tandem photovoltaics',
  },
  {
    id: 'design',
    name: 'SACRED PROPORTION',
    latinName: 'Divina Proportione',
    symbol: 'φ',
    tagline: 'Golden Ratio, Harmonics & HMI',
    description: 'The timeless intersection of aesthetics, human anatomy, and ergonomic interaction. Luca Pacioli’s golden ratio meets spatial computing interfaces.',
    equation: 'φ = (1 + √5) / 2 ≈ 1.6180339887...',
    accent: '#FAF7F0',
    renaissanceAnalog: 'De Divina Proportione illustrations drawn by Leonardo da Vinci (1509)',
    futureAnalog: 'Zero-latency neural-optical feedback & bio-harmonic spatial UX',
  }
];

export const EXPERIENCE_CHAPTERS: ExperienceChapter[] = [
  {
    chapter: 'FOLIO I',
    plateNumber: 'PLATE XXX-01',
    title: 'INTERNATIONAL ROBOWARS',
    subheading: 'Titanium Gladiators in the Octagon of Fire',
    date: '16—18 DEC 2026',
    venue: 'GYMKHANA AMPHITHEATRE',
    description: 'The heavyweight battleground where 60kg and 15kg combat machines clash with pneumatics, spinning hardened steel teeth at 8,000 RPM, and kinetic devastation.',
    highlights: ['60kg & 15kg Heavyweight Division', 'Teams from 25+ Nations', 'Polycarbonate Bulletproof Arena', 'Real-time Telemetry Readout'],
    renaissanceQuote: '“Instrumental mechanics is the noblest and above all others the most useful of sciences.” — Leonardo da Vinci',
  },
  {
    chapter: 'FOLIO II',
    plateNumber: 'PLATE XXX-02',
    title: 'TECHNOHOLIX',
    subheading: 'Visual Alchemy & Nightfall Symphony',
    date: 'NIGHTLY AT 20:00 HRS',
    venue: 'OPEN AIR THEATRE (OAT)',
    description: 'When twilight envelops Powai, the Open Air Theatre awakens into a cathedral of synchronized light, pyro-acrobatics, laser mapping, and sonic orchestration.',
    highlights: ['10,000 Spectators Capacity', 'Choreographed Drone Constellations', 'Kinetic Cyber-Physical Illusionists', 'Ambient Symphonic Audio'],
    renaissanceQuote: '“Look at the light and admire its beauty. Close your eyes, and then look again: what you saw is no longer there.”',
  },
  {
    chapter: 'FOLIO III',
    plateNumber: 'PLATE XXX-03',
    title: 'KEYNOTE SUMMITS',
    subheading: 'Voices from the Horizon of Human Thought',
    date: '16—18 DEC 2026',
    venue: 'CONVOCATION HALL & LHC',
    description: 'Nobel laureates, Field medalists, aerospace commanders, and pioneering founders present direct inquiries into what humanity must conquer next.',
    highlights: ['Nobel Laureate Keynotes', 'Pioneering Quantum Researchers', 'Unscripted Renaissance Fireside Dialogues', 'Open Audience Inquiries'],
    renaissanceQuote: '“Study the science of art. Study the art of science. Develop your senses — especially learn how to see.”',
  },
  {
    chapter: 'FOLIO IV',
    plateNumber: 'PLATE XXX-04',
    title: 'GLOBAL EXHIBITIONS',
    subheading: 'The World’s Laboratories on Display',
    date: 'CONTINUOUS 10:00 — 18:00 HRS',
    venue: 'EXHIBITION PAVILION A & B',
    description: 'Curated exhibits from defense institutes, space agencies, humanoid robotics labs, and CERN research outposts brought directly to IIT Bombay.',
    highlights: ['Autonomous Quadruped Units', 'Deep-Space Exploration Probes', 'Biomimetic Exoskeletons', 'Interactive Quantum Simulators'],
    renaissanceQuote: '“Experience does not err; only your judgments err by expecting from her what is not in her power.”',
  },
  {
    chapter: 'FOLIO V',
    plateNumber: 'PLATE XXX-05',
    title: 'FLAGSHIP COMPETITIONS',
    subheading: 'Trial by Rigor and Invention',
    date: '16—18 DEC 2026',
    venue: 'VARIOUS LABORATORIES',
    description: 'Over thirty high-stakes competitions where student inventors prove that equations work in physical reality, from drone navigation to algorithmic trading.',
    highlights: ['Over ₹50 Lakhs in Cash & Grants', 'National & International Leaderboards', 'Direct Industry Incubation', 'Evaluated by Senior Scientists'],
    renaissanceQuote: '“Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigors of the mind.”',
  }
];

export const COMPETITIONS: Competition[] = [
  {
    id: 'robowars',
    title: 'INTERNATIONAL ROBOWARS',
    category: 'ROBOTICS & COMBAT',
    prizePool: '₹14,00,000',
    teamSize: '3–6 Engineers',
    difficulty: 'Grandmaster',
    renaissanceConcept: 'Kinetic siege mechanics & hardened steel ballistic defense',
    description: 'Build combat robots capable of withstanding extreme impacts, armed with vertical spinners, pneumatic flippers, and drum crushers.',
    specs: ['60kg & 15kg Weight Classes', 'Wireless Fail-Safe Protocol', 'Max Weapon RPM: 9,000', 'Active Impact Force Testing']
  },
  {
    id: 'meshmerize',
    title: 'MESHMERIZE (AUTONOMOUS NAVIGATION)',
    category: 'AI & ALGORITHMS',
    prizePool: '₹2,50,000',
    teamSize: '2–4 Members',
    difficulty: 'Master',
    renaissanceConcept: 'Daedalus’s labyrinth solved via optical sensor trigonometry',
    description: 'Design an autonomous micro-rover that discovers, maps, and optimizes traversal through a dynamic reconfigurable maze without GPS.',
    specs: ['Zero Remote Control', 'Dynamic Obstacle Recalculation', 'On-board Line & IR Array', 'Fastest Escape Metric']
  },
  {
    id: 'ai-grand-prix',
    title: 'NEURAL HORIZONS: AI GRAND PRIX',
    category: 'ARTIFICIAL INTELLIGENCE',
    prizePool: '₹5,00,000',
    teamSize: '1–4 Researchers',
    difficulty: 'Grandmaster',
    renaissanceConcept: 'Anatomy of thought: training neural perceptrons from first principles',
    description: 'Solve complex multi-agent game-theoretic challenges and autonomous drone navigation using deep reinforcement learning models in simulated wind shear.',
    specs: ['PyTorch / JAX Frameworks', 'Edge TPU Latency Threshold < 12ms', 'Unseen Test Environments', 'Adversarial Robustness Score']
  },
  {
    id: 'boeing-aeromodelling',
    title: 'BOEING NATIONAL AEROMODELLING',
    category: 'AEROSPACE',
    prizePool: '₹3,00,000',
    teamSize: '2–4 Avionicists',
    difficulty: 'Master',
    renaissanceConcept: 'Leonardo’s Codex on Flight of Birds made carbon-fiber real',
    description: 'Design, fabricate, and pilot a fixed-wing remote-controlled aircraft engineered for maximum payload fraction and precision maneuverability.',
    specs: ['Electric Brushless Propulsion', 'Max All-Up-Weight: 1.5kg', 'Precision Drop Zone Score', 'Airframe Structural Rigidity']
  },
  {
    id: 'crypto-ciphers',
    title: 'POST-QUANTUM CIPHER CHALLENGE',
    category: 'COMPUTING & CRYPTO',
    prizePool: '₹3,50,000',
    teamSize: '1–3 Cryptanalysts',
    difficulty: 'Grandmaster',
    renaissanceConcept: 'Alberti’s polyalphabetic cipher wheel upgraded to lattice cryptography',
    description: 'Attack and reinforce lattice-based cryptographic protocols resistant to Shor’s algorithm on simulated quantum hardware.',
    specs: ['Learning with Errors (LWE)', 'Zero-Knowledge Proofs', 'Time-to-Crack Metric', 'Cryptographic Correctness']
  },
  {
    id: 'bionic-arm',
    title: 'COZMO CLENCH & BIONIC DYNAMICS',
    category: 'MECHATRONICS',
    prizePool: '₹2,00,000',
    teamSize: '2–4 Roboticists',
    difficulty: 'Adept',
    renaissanceConcept: 'Vesalius muscular anatomy translated to servo linkages',
    description: 'Construct a micro-dexterous robotic gripping arm capable of delicate tactile manipulation, sorting micro-components under time pressure.',
    specs: ['Sub-millimeter Repeatability', 'Multi-Degree-of-Freedom Gripper', 'Weight Constraint: 3kg', 'Tactile Sensor Integration']
  }
];

export const WORKSHOP_STAGES: WorkshopStage[] = [
  {
    step: 'I',
    stageName: 'THE INQUIRY (LEARN)',
    latinStage: 'Investigatio Prima',
    topics: ['Quantum Circuits & Qubit States', 'Neuromorphic Architecture Principles', 'Advanced Orbital Mechanics', 'Spatial Computing Systems'],
    description: 'Strip away preconceptions. Unpack first principles guided by master researchers in intensive lecture salons.',
    tools: ['Qiskit & QuTiP', 'BrainScaleS & Lava', 'Orbital Astrodynamics Simulators'],
    quote: '“He who loves practice without theory is like the sailor who boards ship without a rudder and compass.”'
  },
  {
    step: 'II',
    stageName: 'THE WORKSHOP (BUILD)',
    latinStage: 'Fabrica Mechanica',
    topics: ['Edge TPU Soldering & Pinouts', 'Carbon-Fiber Layups & Wind Tunnel Calibration', 'FPGA Verilog Pipeline Synthesis'],
    description: 'Hands into the material. Assembling hardware on breadboards, laser cutters, and silicon logic gates.',
    tools: ['Logic Analyzers', 'Oscilloscopes', 'Resin 3D Formers', 'CNC Milling Tables'],
    quote: '“Knowing is not enough; we must apply. Being willing is not enough; we must do.”'
  },
  {
    step: 'III',
    stageName: 'THE TRIAL (EXPERIMENT)',
    latinStage: 'Experimentum Crucis',
    topics: ['High-Frequency Stress Testing', 'Model Drift & Edge Quantization', 'Aerodynamic Stall Threshold Validation'],
    description: 'Subjecting the prototype to the unforgiving physics of nature. Measure failure modes with scientific instrumentation.',
    tools: ['High-Speed Photogrammetry', 'Thermal Imaging Arrays', 'Spectrum Analyzers'],
    quote: '“My intention is to consult experience first, and then with reasoning show why that experience is bound to operate in such a way.”'
  },
  {
    step: 'IV',
    stageName: 'THE TRANSMUTATION (MASTER)',
    latinStage: 'Magisterium Artis',
    topics: ['Production Deployment at Scale', 'Patent Drafting & Open Research', 'Venture Translation & Industry Deployment'],
    description: 'Bringing the invention out of the notebook and into humanity’s permanent technological canon.',
    tools: ['Global Git Repositories', 'Research Papers', 'Foundry Production Toolchains'],
    quote: '“Simplicity is the ultimate sophistication.”'
  }
];

export const CAMPUS_ZONES = [
  {
    id: 'main-building',
    name: 'THE CENTRAL ROTUNDA (MAIN BUILDING)',
    role: 'Scholastic Axis & Information Cloister',
    coords: '19.1334° N, 72.9133° E',
    landmark: 'Iconic Neoclassical facade with grand colonnades',
    activities: 'Central Accreditation, Delegations, VIP Salon, Curators Desk'
  },
  {
    id: 'gymkhana',
    name: 'THE GRAND COLOSSEUM (GYMKHANA GROUNDS)',
    role: 'Kinetic Combat & Flight Trials',
    coords: '19.1309° N, 72.9161° E',
    landmark: 'Sprawling athletic arena converted into battle enclosures',
    activities: 'International Robowars, Drone Racing, Aeromodelling Launch Strip'
  },
  {
    id: 'oat',
    name: 'THE AMPHITHEATRE OF SHADOWS (OPEN AIR THEATRE)',
    role: 'Evening Luminaria & Technoholix',
    coords: '19.1352° N, 72.9144° E',
    landmark: 'Tiered stone amphitheatre overlooking Powai hills',
    activities: 'Technoholix Pyro-Laser Spectacle, EDM Symphony, Visual Illusions'
  },
  {
    id: 'lhc',
    name: 'THE ATHENAEUM (LECTURE HALL COMPLEX)',
    role: 'Symposia, Masterclasses & Debates',
    coords: '19.1321° N, 72.9150° E',
    landmark: 'Ultra-modern multi-tiered lecture auditoriums',
    activities: 'Nobel Keynote Lectures, World Technology Summits, Workshops'
  },
  {
    id: 'powai-lake',
    name: 'THE LAKE OBSERVATORY (POWAI PROMONTORY)',
    role: 'Astronomical & Atmospheric Inquiries',
    coords: '19.1278° N, 72.9095° E',
    landmark: 'Waterfront promenade against the tranquil Powai waters',
    activities: 'Night Sky Star Observations, Environmental Sensor Demos, Drone Sky Displays'
  }
];
