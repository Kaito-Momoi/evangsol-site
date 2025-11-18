import { motion } from 'framer-motion';
import './SolutionsSection.css';

const strengths = [
  {
    title: '豊富なNetSuite導入・移行実績',
    description: '公式NetSuiteソリューションプロバイダーとして、SAP ECC6.0、OBIC7、スクラッチ基幹システムからの移行を多数支援。製造業、商社、流通、小売、IT、出版、化粧品、食品など幅広い業種で実績を持ち、東証プライム・スタンダード上場企業への導入も多数手がけています。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'グローバル拠点に対応する導入力',
    description: 'NetSuiteの「OneWorld」機能を活用し、シンガポール、中国、香港、オーストラリアなど海外拠点と本社を一元管理。多通貨・多言語・IFRS対応を含むグローバル経営の可視化と統制強化を実現し、多国籍企業のビジネス展開を幅広い言語で支援します。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: '経営・技術の両軸で支える専門チーム',
    description: '経営戦略とシステム基盤の両面から企業の成長を支援。技術面だけでなく、経営視点でのERP導入により、真のビジネス変革を実現します。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: '安心と信頼の運用基盤',
    description: 'ISMS（ISO/IEC 27001:2013）認証を取得し、Oracleサービスプロバイダーとして、国内外でのERP導入・保守実績が多数あります。情報セキュリティと運用信頼性を両立し、安心して任せられるERPパートナーとして企業基盤を支えます。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  }
];

const SolutionsSection = () => {
  const containerAnimation = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2 className="solutions-heading">
            <span className="solutions-eyebrow">OUR STRENGTHS</span>
            <span className="solutions-title">EvangSolの強み</span>
          </h2>
        </div>

        <motion.div
          className="solutions-grid"
          variants={containerAnimation}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {strengths.map((strength, index) => (
            <motion.article
              key={index}
              className="solution-card"
              variants={cardAnimation}
            >
              <div className="solution-icon">
                {strength.icon}
              </div>
              <h3 className="solution-title">{strength.title}</h3>
              <p className="solution-description">
                {strength.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
