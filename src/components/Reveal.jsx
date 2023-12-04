import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const Reveal = ({ children, width = 'fit-content' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.58, delay: 0.08 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.38, ease: 'easeIn' }}
        style={{ position: 'absolute', top: 4, bottom: 4, left: 0, right: 0, background: '#000', zIndex: 20 }}
      />
    </div>
  );
};
