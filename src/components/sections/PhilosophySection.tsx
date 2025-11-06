import { motion } from 'framer-motion';
import './PhilosophySection.css';

const PhilosophySection = () => {
  return (
    <section className="philosophy-section">
      <div className="philosophy-container">
        <motion.div
          className="philosophy-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="philosophy-heading">
            <span className="philosophy-eyebrow">OUR PHILOSOPHY</span>
            <span className="philosophy-title">お客様の成功が、私たちの成功</span>
          </h2>
          <div className="philosophy-text">
            <p>
              EvangSolは、Oracle NetSuiteの認定パートナーとして、<br />
              日本企業特有のビジネス要件を深く理解し、<br />
              グローバル基準のERPシステムと日本の商習慣を<br />
              シームレスに統合します。
            </p>
            <p>
              単なるシステム導入ではなく、<br />
              お客様のビジネス変革のパートナーとして、<br />
              継続的な成長をサポートいたします。
            </p>
            <img
              src={`${import.meta.env.BASE_URL}solution-provider_black.png`}
              alt="Oracle NetSuite Solution Provider"
              className="philosophy-badge"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
