import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div className="about__container scroll-section">
      <div className="background__text">About</div>
      <motion.div className="about__imageContent">
        <motion.img
          src="/aboutBack.png"
          alt="Debarshi's Cover image"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.15, eaae: 'ease' }}
        />
      </motion.div>
      <motion.div
        className="about__textContent"
        style={{
          textAlign: 'center',
          background: 'rgba(0,0,0,0.5)',
          padding: '1rem',
          borderRadius: '0.618rem'
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transform: 'translate(-50%,-50%)' }}
        transition={{ duration: 1.65, delay: 0.25, eaae: 'ease' }}
      >
        Its about Singularity
      </motion.div>
    </motion.div>
  );
};

export default About;
