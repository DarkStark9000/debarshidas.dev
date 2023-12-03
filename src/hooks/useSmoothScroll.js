import { useEffect, useRef } from 'react';

const useSmoothScroll = () => {
  const containerRef = useRef(null);
  const scrollVelocity = useRef(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleScroll = e => {
      let deltaY = e.deltaY;
      if (e.deltaMode === 1) {
        deltaY *= 40;
      }

      // Adjust sensitivity
      deltaY *= 0.009;

      // Implement a threshold
      const THRESHOLD = 3;
      if (Math.abs(deltaY) < THRESHOLD) return;

      // Implement momentum
      scrollVelocity.current += deltaY;
      const applyMomentum = () => {
        if (Math.abs(scrollVelocity.current) < 1) {
          scrollVelocity.current = 0;
          return;
        }
        element.scrollBy({ top: scrollVelocity.current, behavior: 'smooth' });
        scrollVelocity.current *= 0.95; // Dampen the momentum
        requestAnimationFrame(applyMomentum);
      };
      applyMomentum();

      e.preventDefault();
    };

    element.addEventListener('wheel', handleScroll, { passive: false });

    return () => element.removeEventListener('wheel', handleScroll);
  }, []);

  return containerRef;
};

export default useSmoothScroll;
