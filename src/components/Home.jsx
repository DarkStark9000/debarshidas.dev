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

      <div className="about__container">
        <div className="about__content">
          <div className="background__text">About</div>I just build stuff that I can think of (mostly) - cause other
          times I'm limited by the technology of my time, but one day we will figure this out. <br /> <br /> In other
          stories I main Killjoy, ironically that is exactly what kills my joy after a complete rank downgrade :(
        </div>
        <div className="about__image">
          <img src="/plumage_1.jpg" alt="Debarshi's alt image" />
        </div>
      </div>

      <div className="journey__container">
        <div className="journey__content">
          <div className="background__text">Journey</div>I did stuff - I lived. I'm still living. I'm still doing stuff.
        </div>
        <motion.div
          className="journey__line"
          drag
          dragConstraints={{ top: 10, bottom: 5 }}
          dragSnapToOrigin={true}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        >
          <motion.div
            className="journey__event-dot"
            drag
            dragConstraints={{ left: 0, right: 0 }}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 900 }}
          >
            <span>Born</span>
          </motion.div>

          <motion.div
            className="journey__event-dot"
            drag
            dragConstraints={{ left: 0, right: 0 }}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 900 }}
          >
            <span>went to school (masti only)</span>
          </motion.div>

          <motion.div
            className="journey__event-dot"
            drag
            dragConstraints={{ left: 0, right: 0 }}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 900 }}
          >
            <span>went to college (moye moye)</span>
          </motion.div>

          <motion.div
            className="journey__event-dot"
            drag
            dragConstraints={{ left: 0, right: 0 }}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 900 }}
          >
            <span>designing this page</span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
