import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnimationContextType {
  isPaused: boolean;
  togglePause: () => void;
}

const AnimationContext = createContext<AnimationContextType>({
  isPaused: false,
  togglePause: () => {},
});

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPaused, setIsPaused] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('elvano_animations_paused');
      if (saved !== null) {
        return saved === 'true';
      }
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return false;
    }
  });

  const [tabHidden, setTabHidden] = useState<boolean>(false);

  // Pause when document tab is hidden to save battery & CPU
  useEffect(() => {
    const handleVisibility = () => {
      setTabHidden(document.visibilityState === 'hidden');
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const togglePause = () => {
    setIsPaused((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('elvano_animations_paused', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const effectivelyPaused = isPaused || tabHidden;

  return (
    <AnimationContext.Provider value={{ isPaused: effectivelyPaused, togglePause }}>
      <div className={effectivelyPaused ? 'animations-paused' : ''}>{children}</div>
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);
