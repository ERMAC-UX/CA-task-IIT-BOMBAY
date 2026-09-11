import React, { useState } from 'react';
import { CAMPUS_ZONES } from '../data/techfestData';
import { CampusMapSVG } from './illustrations/RenaissanceSVGs';
import { MapPin, Navigation } from 'lucide-react';
import { sound } from '../utils/audioSynth';

interface CampusBlueprintProps {
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
}

export const CampusBlueprint: React.FC<CampusBlueprintProps> = ({
  onHoverAction,
  onLeaveAction,
}) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('main-building');
  const activeZone = CAMPUS_ZONES.find((z) => z.id === selectedZoneId) || CAMPUS_ZONES[0];

  const handleSelect = (id: string) => {
    sound.playTick();
    setSelectedZoneId(id);
  };

  return (
    <section id="campus" className="relative py-28 md:py-36 px-6 md:px-12 border-b border-gold-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gold-500/20 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-crimson-500 uppercase mb-3">
              <span>SEC. 08</span>
              <span className="text-gold-500/40">•</span>
              <span className="text-parchment-300">TOPOGRAPHIA ACADEMICA</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-parchment-100">
              THE CAMPUS <br className="hidden sm:block" />
              <span className="text-gold-gradient">BECOMES THE ARENA.</span>
            </h2>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs text-parchment-400 block uppercase">
              INDIAN INSTITUTE OF TECHNOLOGY BOMBAY
            </span>
            <span className="font-mono text-sm text-gold-300">
              POWAI, MUMBAI 400076 • 550 ACRES
            </span>
          </div>
        </div>

        {/* Blueprint Cartography & Active Zone Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 2D Flat Architectural Cartography SVG */}
          <div className="lg:col-span-8 bg-charcoal-900/90 border-2 border-gold-500/30 p-4 sm:p-6 rounded-sm shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-gold-500/15 pb-3 mb-4 text-[10px] font-mono text-parchment-400">
              <div className="flex items-center space-x-2">
                <Navigation size={12} className="text-gold-400" />
                <span>CARTOGRAPHIC PROJECTION // FLORENTINE BLUEPRINT REV. 30</span>
              </div>
              <span className="text-crimson-500 font-bold uppercase">LIVE NAVIGATION GRID</span>
            </div>

            <CampusMapSVG activeZone={selectedZoneId} onSelectZone={handleSelect} />

            <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center justify-between text-[10px] font-mono text-parchment-400">
              <span>CLICK ANY NODE TO INSPECT VENUE ATTRIBUTES</span>
              <span className="text-gold-400">COORDINATE REF: WGS84 DATUM</span>
            </div>
          </div>

          {/* Right: Selected Zone Dossier */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-charcoal-900/90 border border-gold-500/30 p-6 rounded-sm space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-gold-500/20 pb-3">
                <span className="font-mono text-[10px] tracking-widest text-parchment-400 uppercase">
                  LOCUS SELECTED
                </span>
                <span className="font-mono text-xs text-crimson-500 font-semibold">
                  ACTIVE ARENA
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-parchment-100 leading-snug">
                  {activeZone.name}
                </h3>
                <div className="flex items-center space-x-2 text-xs font-mono text-gold-400 mt-1">
                  <MapPin size={12} />
                  <span>{activeZone.coords}</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-gold-500/15 pt-3">
                <span className="font-mono text-[10px] tracking-widest text-gold-500 uppercase">
                  PRIMARY DESIGNATION:
                </span>
                <p className="font-mono text-xs text-parchment-200">
                  {activeZone.role}
                </p>
              </div>

              <div className="space-y-2 border-t border-gold-500/15 pt-3">
                <span className="font-mono text-[10px] tracking-widest text-gold-500 uppercase">
                  ARCHITECTURAL CHARACTER:
                </span>
                <p className="font-manuscript text-sm text-parchment-300 italic leading-relaxed">
                  {activeZone.landmark}
                </p>
              </div>

              <div className="space-y-2 border-t border-gold-500/15 pt-3">
                <span className="font-mono text-[10px] tracking-widest text-gold-500 uppercase">
                  FEATURED MANIFESTATIONS:
                </span>
                <p className="font-mono text-xs text-gold-300">
                  {activeZone.activities}
                </p>
              </div>
            </div>

            {/* Zone Select List buttons */}
            <div className="space-y-1.5">
              {CAMPUS_ZONES.map((zone) => {
                const isSelected = zone.id === selectedZoneId;
                return (
                  <button
                    key={zone.id}
                    onClick={() => handleSelect(zone.id)}
                    onMouseEnter={() => onHoverAction(zone.id.split('-')[0])}
                    onMouseLeave={onLeaveAction}
                    className={`w-full p-3 text-left border rounded-sm transition-all flex items-center justify-between text-xs font-mono ${
                      isSelected
                        ? 'border-gold-400 bg-gold-500/10 text-gold-300 font-semibold'
                        : 'border-gold-500/15 bg-charcoal-950/60 hover:border-gold-500/30 text-parchment-400'
                    }`}
                  >
                    <span>{zone.name.split(' (')[0]}</span>
                    <span className="text-[10px] opacity-70">
                      {isSelected ? '● ACTIVE' : '○'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
