import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Journey = () => {
  const journeyEvents = [
    { eventName: 'Born', eventDetails: 'Some details about being born' },
    { eventName: 'Went to school', eventDetails: 'Masti only' },
    { eventName: 'Went to college', eventDetails: 'Moye moye' },
    { eventName: 'Designing this page', eventDetails: 'The journey of designing' }
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <div className="journey__container scroll-section">
      <div className="background__text">Journey</div>
      <motion.div
        className="journey__content"
        style={{
          padding: '4rem'
        }}
      >
        I did stuff - I lived. I'm still living. I'm still doing stuff.
      </motion.div>

      <motion.div
        className="journey__timeline"
        ref={ref}
        style={{
          padding: '4rem'
        }}
      >
        {journeyEvents.map((event, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="journey__line"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { delay: 1.35 * index } }
              }}
              style={index > 0 ? { backgroundColor: '#fae2a1', height: '2px' } : { borderTop: '2px dashed #feffed' }}
            />
            <motion.div
              className="journey__event-dot"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 1.2 * index } }
              }}
              drag
              dragConstraints={{ left: 0, right: 0 }}
              dragSnapToOrigin
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.06rem',
                  color: '#b19df7',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter',
                  minWidth: 'max-content',
                  position: 'relative',
                  top: 30,
                  left: 10
                }}
              >
                {event.eventName}
              </span>
            </motion.div>
          </React.Fragment>
        ))}
        <motion.div
          className="journey__line journey__line--final"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { delay: 1.15 * journeyEvents.length } }
          }}
        />
      </motion.div>
    </div>
  );
};

export default Journey;
