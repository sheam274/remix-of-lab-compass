import { useCallback, useEffect, useState } from "react";

export interface UseHeroSliderOptions {
  length: number;
  intervalMs?: number;
}

export function useHeroSlider({ length, intervalMs = 6000 }: UseHeroSliderOptions) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex(((next % length) + length) % length);
  }, [length]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [paused, length, intervalMs]);

  return { index, goTo, next, previous, setPaused };
}
