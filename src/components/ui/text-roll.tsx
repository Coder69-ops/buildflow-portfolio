'use client';
import React from 'react';

export type TextRollProps = {
  children: string;
  duration?: number;
  getEnterDelay?: (index: number) => number;
  getExitDelay?: (index: number) => number;
  className?: string;
  onAnimationComplete?: () => void;
};

export function TextRoll({
  children,
  duration = 0.5,
  getEnterDelay = (i) => i * 0.1,
  getExitDelay = (i) => i * 0.1 + 0.2,
  className,
  onAnimationComplete,
}: TextRollProps) {
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete?.();
    }, duration * 1000 + children.length * 100);

    return () => clearTimeout(timer);
  }, [children, duration, onAnimationComplete]);

  const letters = children.split('');

  return (
    <span className={className}>
      {letters.map((letter, i) => {
        return (
          <span
            key={i}
            className={`relative inline-block transition-all duration-500 ${
              isAnimating 
                ? 'animate-pulse transform hover:scale-110' 
                : ''
            }`}
            style={{ 
              animationDelay: `${getEnterDelay(i)}s`,
              transitionDelay: `${getExitDelay(i)}s`
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        );
      })}
      <span className='sr-only'>{children}</span>
    </span>
  );
}
