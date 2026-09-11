import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  cursorLabel?: string;
  isHoveringInteractive?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  cursorLabel = '',
  isHoveringInteractive = false,
}) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[10000] transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Outer Reticle Ring */}
      <div
        className={`relative -top-1/2 -left-1/2 rounded-full border border-gold-500/70 transition-all duration-200 flex items-center justify-center ${
          isHoveringInteractive
            ? 'w-12 h-12 -ml-6 -mt-6 bg-gold-500/10 scale-110'
            : cursorLabel
            ? 'w-20 h-20 -ml-10 -mt-10 bg-charcoal-900/90 border-gold-400'
            : 'w-7 h-7 -ml-3.5 -mt-3.5'
        }`}
      >
        {/* Center dot / Crosshair */}
        <div className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_8px_#C5A869]" />

        {/* Dynamic Label Badge */}
        {cursorLabel && (
          <span className="absolute -bottom-6 px-2 py-0.5 text-[9px] tracking-widest font-mono uppercase text-gold-300 bg-charcoal-950/90 border border-gold-500/30 rounded whitespace-nowrap">
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
};
