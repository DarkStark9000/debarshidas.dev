import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
const Home = () => {
  const [hoverState, setHoverState] = useState(false);

  const { scrollYProgress } = useScroll();
  const firstMove = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
  const lastMove = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);

  return (
    <>
      <div className="line__container">
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
      </div>

      <motion.div className="name__container" onViewportLeave={() => setHoverState(false)}>
        <motion.div
          className="name__hover-area"
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
        >
          <motion.div
            className="first__name"
            animate={{ x: hoverState ? -34 : 0, y: hoverState ? -50 : 0 }}
            style={{ x: firstMove }}
          >
            DEBARSHI
          </motion.div>
          <motion.div
            className="last__name"
            animate={{ x: hoverState ? 38 : 0, y: hoverState ? 55 : 0 }}
            style={{ x: lastMove }}
          >
            Das
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="about__container">I am Iron Man</div>
    </>
  );
};

export default Home;
