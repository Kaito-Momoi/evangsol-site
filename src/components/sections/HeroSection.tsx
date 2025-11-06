import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const heroAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="hero-heading" variants={heroAnimation}>
            <span className="hero-heading-main">Transform Your Business</span>
            <span className="hero-heading-sub">
              Oracle NetSuiteで実現する、<br />真のデジタル変革
            </span>
          </motion.h1>
          <motion.p className="hero-description" variants={heroAnimation}>
            日本企業のビジネス慣習を理解し、<br />
            グローバル基準のERPで成長を加速させます
          </motion.p>
        </motion.div>

        <div className="hero-visual">
          <div className="hero-visual-element"></div>
        </div>
      </div>

      <div className="scroll-hint">
        <span className="scroll-text">SCROLL</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  );
};

export default HeroSection;
