import { motion } from 'framer-motion';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import './CompanyPage.css';

const CompanyPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="company-page">
      <Header />

      {/* Hero Section */}
      <section className="company-hero">
        <div className="company-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="company-hero-title">会社情報</h1>
            <p className="company-hero-subtitle">
              経営とテクノロジーの融合で、<br />
              お客様のビジネス変革を支援します
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="company-container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">
              <span className="section-eyebrow">ABOUT US</span>
              <span className="section-heading">会社概要</span>
            </h2>
          </motion.div>

          <motion.div className="overview-table" {...fadeInUp}>
            <div className="overview-row">
              <div className="overview-label">社名</div>
              <div className="overview-value">株式会社EvangSol（エバンソル）</div>
            </div>
            <div className="overview-row">
              <div className="overview-label">資本金</div>
              <div className="overview-value">4,000万円</div>
            </div>
            <div className="overview-row">
              <div className="overview-label">事業内容</div>
              <div className="overview-value">ERP導入支援・アドオン開発・保守サポート</div>
            </div>
            <div className="overview-row">
              <div className="overview-label">加入団体</div>
              <div className="overview-value">
                東京商工会議所<br />
                関東ITソフトウェア健康保険組合
              </div>
            </div>
            <div className="overview-row">
              <div className="overview-label">代表取締役</div>
              <div className="overview-value">小山 敏幸</div>
            </div>
            <div className="overview-row">
              <div className="overview-label">Tel / Fax</div>
              <div className="overview-value">
                Tel: 03-6231-1328<br />
                Fax: 03-6231-1348
              </div>
            </div>
            <div className="overview-row">
              <div className="overview-label">グループ会社</div>
              <div className="overview-value">
                株式会社EvangTech<br />
                2005年5月創業、システムコンサルティング、ソリューションSIサービス、保守運用サービスの事業を展開しております。
              </div>
            </div>
            <div className="overview-row">
              <div className="overview-label">認定・パートナー</div>
              <div className="overview-value">
                Oracle NetSuite Solution Provider<br />
                AWSテクノロジーパートナー<br />
                ISMS（ISO/IEC 27001:2013）認証取得
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Access Section */}
      <section className="company-access">
        <div className="company-container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">
              <span className="section-eyebrow">ACCESS</span>
              <span className="section-heading">アクセス</span>
            </h2>
          </motion.div>

          <div className="access-content">
            <motion.div className="access-info" {...fadeInUp}>
              <div className="access-item">
                <h3 className="access-item-title">所在地</h3>
                <p className="access-item-text">
                  〒103-0023<br />
                  東京都中央区日本橋本町4-15-11　市橋ビル６階
                </p>
              </div>

              <div className="access-item">
                <h3 className="access-item-title">最寄り駅</h3>
                <p className="access-item-text">
                  東京メトロ銀座線・半蔵門線「三越前駅」A8出口より徒歩3分<br />
                  JR総武線快速「新日本橋駅」5番出口より徒歩5分<br />
                  東京メトロ日比谷線「小伝馬町駅」4番出口より徒歩7分
                </p>
              </div>
            </motion.div>

            <motion.div className="access-map" {...fadeInUp}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2654986447697!2d139.77338031525846!3d35.68629998019421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188944fcdb5b73%3A0x3c8e7d7f1f2e7e7e!2z5p2x5Lqs6YO95Lit5aSu5Yy65pel5pys5qmL5pys55S677yU5LiB55uu77yR77yV4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EvangSol Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyPage;
