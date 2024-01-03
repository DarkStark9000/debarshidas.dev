import { motion } from 'framer-motion';
import { useState } from 'react';

const Home = () => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div className="scroll-section" style={{ position: 'relative' }}>
      <motion.div className="name__container">
        <motion.div
          className="name__hover-area"
          whileHover={{ scale: 1.05 }}
          onMouseMove={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
        >
          <motion.div
            className="first__name"
            // animate={{ x: hoverState ? -38 : 0, y: hoverState ? -55 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            DEBARSHI
          </motion.div>
          <motion.div
            className="last__name"
            // animate={{ x: hoverState ? -680 : 0, y: hoverState ? 0 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              textTransform: hoverState ? 'uppercase' : 'none',
              color: hoverState ? '#fff' : 'transparent',
              fontSize: hoverState ? '16rem' : '20rem'
            }}
          >
            das
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll__pointer"
        whileHover={{ scale: 1.35 }}
        whileTap={{
          scale: 0.85,
          y: '150%',
          transition: { duration: 0.5, ease: 'easeInOut' }
        }}
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          opacity: 0.75
        }}
      >
        ↓
      </motion.div>
    </div>
  );
};

export default Home;
