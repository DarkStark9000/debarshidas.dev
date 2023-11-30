import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    const moveCursor = (mouseX, mouseY) => {
      const dotTransform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorDot.style.transform = dotTransform;

      const outlineTransform = `translate3d(${mouseX - 13}px, ${mouseY - 13}px, 0)`;
      cursorOutline.style.transform = outlineTransform;
    };

    const onMouseMove = e => {
      requestAnimationFrame(() => moveCursor(e.clientX, e.clientY));
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default Cursor;
