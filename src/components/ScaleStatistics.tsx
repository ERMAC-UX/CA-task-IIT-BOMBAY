import React, { useEffect, useState, useRef } from 'react';
import { FEST_METADATA } from '../data/techfestData';

interface StatItemProps {
  label: string;
  targetNum: number;
  prefix?: string;
  suffix?: string;
  subtext: string;
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
}

const StatCounter: React.FC<StatItemProps> = ({
  label,
  targetNum,
  prefix = '',
  suffix = '',
  subtext,
  onHoverAction,
  onLeaveAction,
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, targetNum]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => onHoverAction(label)}
      onMouseLeave={onLeaveAction}
      className="border-t border-gold-500/20 pt-8 pb-10 space-y-2 group transition-colors duration-300 hover:border-gold-400"
    >
      <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-crimson-500 uppercase">
        <span>DIMENSIO</span>
        <span className="text-gold-500/30">•</span>
        <span className="text-parchment-400">{label}</span>
      </div>

      <div className="flex items-baseline space-x-1">
        {prefix && (
          <span className="font-serif text-3xl sm:text-4xl text-gold-400 font-bold">
            {prefix}
          </span>
        )}
        <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-parchment-100 group-hover:text-gold-gradient transition-all">
          {count.toLocaleString()}
        </span>
        {suffix && (
          <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-300 font-bold ml-1">
            {suffix}
          </span>
        )}
      </div>

      <p className="font-manuscript italic text-sm text-parchment-400 max-w-xs">
        {subtext}
      </p>
    </div>
  );
};

export const ScaleStatistics: React.FC<{
  onHoverAction: (label: string) => void;
  onLeaveAction: () => void;
}> = ({ onHoverAction, onLeaveAction }) => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 border-b border-gold-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 border-b border-gold-500/20 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-crimson-500 uppercase mb-3">
              <span>SEC. 07</span>
              <span className="text-gold-500/40">•</span>
              <span className="text-parchment-300">MAGNITUDO ET SCALA</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-parchment-100">
              ASIA’S LARGEST <br className="hidden sm:block" />
              <span className="text-gold-gradient">SCIENCE & TECH FESTIVAL.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-parchment-400 max-w-xs text-right">
            Three decades of scientific pedigree, bringing together global thinkers, engineers, and laureates at IIT Bombay.
          </p>
        </div>

        {/* Huge Typographic Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          <StatCounter
            label="HISTORIC EDITION"
            targetNum={30}
            suffix="TH"
            subtext="Three continuous decades of pioneering Asian technology."
            onHoverAction={onHoverAction}
            onLeaveAction={onLeaveAction}
          />
          <StatCounter
            label="SCHOLAR FOOTFALL"
            targetNum={180}
            suffix="K+"
            subtext="Attendees converging across 550 acres of academic terrain."
            onHoverAction={onHoverAction}
            onLeaveAction={onLeaveAction}
          />
          <StatCounter
            label="ARENAS & EVENTS"
            targetNum={300}
            suffix="+"
            subtext="Lectures, robowars, exhibitions, masterclasses & hackathons."
            onHoverAction={onHoverAction}
            onLeaveAction={onLeaveAction}
          />
          <StatCounter
            label="RESEARCH GRANTS"
            targetNum={50}
            prefix="₹"
            suffix="L+"
            subtext="In research endowments, venture funding, and prizes."
            onHoverAction={onHoverAction}
            onLeaveAction={onLeaveAction}
          />
          <StatCounter
            label="ACADEMIC INSTITUTIONS"
            targetNum={2500}
            suffix="+"
            subtext="Universities and technical institutes represented worldwide."
            onHoverAction={onHoverAction}
            onLeaveAction={onLeaveAction}
          />
          <StatCounter
            label="GLOBAL DELEGATIONS"
            targetNum={60}
            suffix="+"
            subtext="Countries participating in International Robowars & Summits."
            onHoverAction={onHoverAction}
            onLeaveAction={onLeaveAction}
          />
        </div>
      </div>
    </section>
  );
};
