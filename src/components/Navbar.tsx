import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/audioSynth';

interface NavbarProps {
  onOpenRegister: () => void;
  onNavigate: (sectionId: string) => void;
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegister,
  onNavigate,
  onHoverAction,
  onLeaveAction,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const navItems = [
    { label: 'EXPLORE', id: 'the-idea' },
    { label: 'DOMAINS', id: 'domains' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'COMPETITIONS', id: 'competitions' },
    { label: 'WORKSHOPS', id: 'workshops' },
    { label: 'CAMPUS', id: 'campus' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-charcoal-950/85 backdrop-blur-md border-b border-gold-500/20 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div
          onClick={() => {
            sound.playTick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onMouseEnter={() => onHoverAction('ORIGIN')}
          onMouseLeave={onLeaveAction}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center relative overflow-hidden group-hover:border-gold-400 transition-colors">
            <span className="font-serif text-xs text-gold-300 font-bold">XXX</span>
            <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif tracking-[0.25em] text-xs md:text-sm font-semibold text-parchment-100 group-hover:text-gold-300 transition-colors">
                TECHFEST
              </span>
              <span className="text-[10px] tracking-widest text-crimson-500 font-mono font-bold">
                ’26
              </span>
            </div>
            <div className="text-[9px] tracking-[0.2em] font-mono text-parchment-400 uppercase">
              IIT BOMBAY • 30TH ED.
            </div>
          </div>
        </div>

        {/* Center: Geographic Coordinates & Meridian (Desktop) */}
        <div className="hidden lg:flex items-center space-x-2 text-[10px] font-mono tracking-widest text-parchment-400/80 px-3 py-1 rounded-full border border-gold-500/10">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span>19.1334° N, 72.9133° E</span>
          <span className="text-gold-500/40">|</span>
          <span>POWAI CAMPUS</span>
        </div>

        {/* Right: Navigation Links, Audio Toggle & CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-5 text-xs font-mono tracking-[0.15em] text-parchment-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  sound.playTick();
                  onNavigate(item.id);
                }}
                onMouseEnter={() => onHoverAction(item.label)}
                onMouseLeave={onLeaveAction}
                className="hover:text-gold-300 transition-colors relative py-1 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Procedural Audio Atmosphere Toggle */}
          <button
            onClick={() => {
              toggleSound();
            }}
            onMouseEnter={() => onHoverAction(isMuted ? 'UNMUTE' : 'MUTE')}
            onMouseLeave={onLeaveAction}
            className="p-2 text-parchment-300 hover:text-gold-300 rounded-full border border-gold-500/20 hover:border-gold-400 transition-all"
            title={isMuted ? 'Enable procedural audio' : 'Mute procedural audio'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-gold-400 animate-pulse" />}
          </button>

          {/* Primary CTA: Register Folio */}
          <button
            onClick={() => {
              sound.playChord();
              onOpenRegister();
            }}
            onMouseEnter={() => onHoverAction('REGISTER')}
            onMouseLeave={onLeaveAction}
            className="relative px-5 py-2 overflow-hidden border border-gold-500/60 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 font-serif text-xs tracking-[0.2em] font-semibold transition-all duration-300 group"
          >
            <span className="relative z-10">REGISTER</span>
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-gold-400" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-gold-400" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleSound}
            className="p-2 text-parchment-300 border border-gold-500/20 rounded"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-gold-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="font-mono text-xs text-gold-300 px-3 py-1.5 border border-gold-500/40 uppercase"
          >
            {mobileMenuOpen ? 'CLOSE' : 'INDEX'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-950/95 border-b border-gold-500/20 px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs font-mono tracking-widest text-parchment-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  sound.playTick();
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 border border-gold-500/10 rounded hover:border-gold-500/40"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              sound.playChord();
              onOpenRegister();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 text-center border border-gold-400 bg-gold-500/15 text-gold-300 font-serif text-xs tracking-[0.25em] font-semibold"
          >
            ENTER THE RENAISSANCE • REGISTER
          </button>
        </div>
      )}
    </header>
  );
};
