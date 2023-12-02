// useSmoothScroll.js
import { useEffect, useRef } from 'react';

const useSmoothScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleScroll = e => {
      // Calculate the deltaY for different types of inputs
      let deltaY = e.deltaY;
      if (e.deltaMode === 1) {
        // Line mode (Firefox)
        deltaY *= 40; // Adjust to match pixel scrolling
      }

      if (deltaY) {
        // Only apply if there's vertical scroll input
        e.preventDefault();
        element.scrollBy({
          top: deltaY * 0.3, // Adjust for desired scroll speed
          behavior: 'smooth'
        });
      }
    };

    element.addEventListener('wheel', handleScroll, { passive: false });
    // Add other event listeners if needed for touch, etc.

    return () => element.removeEventListener('wheel', handleScroll);
  }, []);

  return containerRef;
};

export default useSmoothScroll;
