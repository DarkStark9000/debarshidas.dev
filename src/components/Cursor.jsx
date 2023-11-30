import React from 'react';

const Cursor = () => {
  const cursorDot = document.querySelector('[data-cursor-dot]');
  const cursorOutline = document.querySelector('[data-cursor-outline]');

  window.addEventListener('mousemove', e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

    cursorOutline.animate(
      {
        left: `${mouseX}px`,
        top: `${mouseY}px`
      },
      {
        duration: 500,
        easing: 'ease-out'
      }
    );
  });
  return (
    <>
      <div class="cursor-dot" data-cursor-dot></div>
      <div class="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default Cursor;
