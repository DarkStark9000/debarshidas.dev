import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]');

    const moveCursor = (mouseX, mouseY) => {
      const dotTransform = `translate3d(${mouseX - 8}px, ${mouseY - 10}px, 0)`;
      cursorDot.style.transform = dotTransform;
    };

    const onMouseMove = e => {
      requestAnimationFrame(() => moveCursor(e.clientX, e.clientY));
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div className="cursor-dot" data-cursor-dot />;
};

export default Cursor;
