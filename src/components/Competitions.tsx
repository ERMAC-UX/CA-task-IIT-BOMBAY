import React, { useState } from 'react';
import { COMPETITIONS, Competition } from '../data/techfestData';
import { Trophy, Users, ShieldAlert, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audioSynth';

interface CompetitionsProps {
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
  onSelectCompetition: (comp: Competition) => void;
  onRegister: () => void;
}

export const Competitions: React.FC<CompetitionsProps> = ({
  onHoverAction,
  onLeaveAction,
  onSelectCompetition,
  onRegister,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const categories = ['ALL', 'ROBOTICS & COMBAT', 'ARTIFICIAL INTELLIGENCE', 'AEROSPACE', 'COMPUTING & CRYPTO', 'MECHATRONICS'];

  const filteredCompetitions = selectedFilter === 'ALL'
    ? COMPETITIONS
    : COMPETITIONS.filter((c) => c.category === selectedFilter);

  return (
    <section id="competitions" className="relative py-28 md:py-36 px-6 md:px-12 border-b border-gold-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gold-500/20 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-crimson-500 uppercase mb-3">
              <span>SEC. 04</span>
              <span className="text-gold-500/40">•</span>
              <span className="text-parchment-300">AGON & CERTAMINA</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-parchment-100">
              PROVE THE <span className="text-gold-gradient">IMPOSSIBLE.</span>
            </h2>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs text-parchment-400 block uppercase">
              CUMULATIVE RESEARCH PURSE
            </span>
            <span className="font-serif text-3xl sm:text-4xl text-gold-300 font-bold tracking-wider">
              ₹50,00,000+
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playTick();
                setSelectedFilter(cat);
              }}
              onMouseEnter={() => onHoverAction(cat.split(' ')[0])}
              onMouseLeave={onLeaveAction}
              className={`px-4 py-1.5 rounded-sm font-mono text-[11px] tracking-wider whitespace-nowrap uppercase border transition-all ${
                selectedFilter === cat
                  ? 'bg-gold-500/20 border-gold-400 text-gold-300 font-semibold shadow-[0_0_10px_rgba(197,168,105,0.2)]'
                  : 'border-gold-500/15 text-parchment-400 hover:border-gold-500/40 hover:text-parchment-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Competitions Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map((comp) => (
            <div
              key={comp.id}
              onClick={() => {
                sound.playChord();
                onSelectCompetition(comp);
              }}
              onMouseEnter={() => onHoverAction('EXAMINE')}
              onMouseLeave={onLeaveAction}
              className="bg-charcoal-900/80 border border-gold-500/20 hover:border-gold-400 p-6 rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/5 group flex flex-col justify-between relative cursor-pointer"
            >
              {/* Corner brass ticks */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-400 opacity-60" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold-400 opacity-60" />

              <div>
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-parchment-400 mb-3">
                  <span className="text-crimson-500 uppercase font-semibold">{comp.category}</span>
                  <span className="px-2 py-0.5 border border-gold-500/20 bg-charcoal-950 text-gold-300">
                    {comp.difficulty}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-parchment-100 group-hover:text-gold-300 transition-colors leading-snug">
                  {comp.title}
                </h3>

                <p className="font-manuscript italic text-xs text-gold-400/80 mt-1">
                  « {comp.renaissanceConcept} »
                </p>

                <p className="font-mono text-xs text-parchment-300 mt-4 leading-relaxed line-clamp-3">
                  {comp.description}
                </p>

                {/* Technical Specs Tags */}
                <div className="mt-4 pt-4 border-t border-gold-500/10 space-y-1.5">
                  {comp.specs.slice(0, 2).map((s, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[10px] font-mono text-parchment-400">
                      <span className="text-gold-500">✦</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata & Prize */}
              <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <div className="flex items-center space-x-1 text-gold-300">
                    <Trophy size={14} />
                    <span className="font-bold">{comp.prizePool}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-parchment-400">
                    <Users size={14} />
                    <span>{comp.teamSize}</span>
                  </div>
                </div>

                <span className="font-mono text-xs text-gold-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                  BRIEF <ArrowRight size={12} className="ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Competitions Section Action */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              sound.playChord();
              onRegister();
            }}
            onMouseEnter={() => onHoverAction('REGISTER')}
            onMouseLeave={onLeaveAction}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-charcoal-900 border border-gold-400 hover:border-gold-300 text-gold-300 hover:text-charcoal-950 hover:bg-gold-400 font-serif text-xs sm:text-sm tracking-[0.25em] font-bold uppercase transition-all duration-300"
          >
            <span>EXPLORE COMPETITIONS & REGISTER →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
