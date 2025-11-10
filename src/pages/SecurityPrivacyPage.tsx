import { motion } from 'framer-motion';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import './SecurityPrivacyPage.css';

const SecurityPrivacyPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="security-privacy-page">
      <Header />

      {/* Hero Section */}
      <section className="security-hero">
        <div className="security-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="security-hero-title">情報セキュリティ・個人情報保護について</h1>
            <p className="security-hero-subtitle">
              お客様の情報を守り、信頼に応える<br />
              セキュリティ管理体制
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="security-content-section">
        <div className="security-container">
          {/* 基本方針 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">基本方針</h2>
            <div className="content-box primary">
              <p className="content-text">
                株式会社EvangSol（以下「当社」といいます）は、お客様の個人情報および企業情報の重要性を認識し、
                情報セキュリティの確保と個人情報の適切な保護を経営の最重要課題の一つとして位置づけています。
              </p>
              <p className="content-text">
                当社は、情報セキュリティマネジメントシステム（ISMS）を構築・運用し、ISO/IEC 27001:2022の認証を取得することで、
                国際基準に準拠した情報管理体制を維持しています。
              </p>
            </div>
          </motion.div>

          {/* 情報セキュリティ方針 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">情報セキュリティ方針</h2>
            <div className="policy-list">
              <div className="policy-item">
                <h3 className="policy-heading">1. 情報セキュリティ管理体制</h3>
                <p className="policy-text">
                  代表取締役 小山利之を最高責任者として、情報セキュリティマネジメントシステムを確立し、
                  継続的な改善活動を実施しています。
                </p>
              </div>

              <div className="policy-item">
                <h3 className="policy-heading">2. リスク管理</h3>
                <p className="policy-text">
                  情報資産に対するリスクアセスメントを定期的に実施し、識別されたリスクに対して
                  適切な管理策を講じることで、セキュリティインシデントの予防に努めています。
                </p>
              </div>

              <div className="policy-item">
                <h3 className="policy-heading">3. 法令遵守</h3>
                <p className="policy-text">
                  情報セキュリティに関する法令、規制、契約上のセキュリティ義務を遵守し、
                  コンプライアンス体制を維持します。
                </p>
              </div>

              <div className="policy-item">
                <h3 className="policy-heading">4. 教育・訓練</h3>
                <p className="policy-text">
                  全従業員に対して定期的な情報セキュリティ教育を実施し、
                  セキュリティ意識の向上と知識の習得を図っています。
                </p>
              </div>

              <div className="policy-item">
                <h3 className="policy-heading">5. 事業継続管理</h3>
                <p className="policy-text">
                  重大なセキュリティインシデント発生時においても、事業を継続できる体制を構築し、
                  定期的な訓練と見直しを実施しています。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 個人情報保護方針 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">個人情報保護方針</h2>
            <div className="policy-list">
              <div className="policy-item">
                <h3 className="policy-heading">1. 個人情報の収集</h3>
                <p className="policy-text">
                  個人情報の収集にあたっては、利用目的を明確にし、その目的の達成に必要な範囲内で、
                  適法かつ公正な手段により収集します。
                </p>
              </div>

              <div className="policy-item">
                <h3 className="policy-heading">2. 個人情報の利用</h3>
                <p className="policy-text">
                  収集した個人情報は、あらかじめ明示した利用目的の範囲内でのみ利用し、
                  目的外利用が生じないよう適切な管理を実施します。
                </p>
              </div>

              <div className="policy-item">
                <h3 className="policy-heading">3. 個人情報の提供</h3>
                <p className="policy-text">
                  法令に基づく場合を除き、ご本人の同意を得ることなく、
                  個人情報を第三者に提供することはありません。
                </p>
              </div>

              <div className="policy-item">
                <h3 className="policy-heading">4. 個人情報の管理</h3>
                <p className="policy-text">
                  個人情報の正確性を保ち、安全に管理するために、不正アクセス、紛失、破壊、
                  改ざん及び漏洩などのリスクに対して、適切な予防措置を講じます。
                </p>
              </div>

              <div className="policy-item">
                <h3 className="policy-heading">5. 個人情報の開示・訂正・削除</h3>
                <p className="policy-text">
                  ご本人から個人情報の開示、訂正、削除等のご請求があった場合は、
                  法令に基づき適切に対応いたします。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 個人情報の取り扱いについて */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">個人情報の取り扱いについて</h2>

            <div className="handling-section">
              <h3 className="handling-heading">利用目的</h3>
              <p className="handling-text">当社は、以下の目的で個人情報を利用いたします：</p>
              <ul className="handling-list">
                <li>Oracle NetSuite導入支援サービスの提供および運用サポート</li>
                <li>お客様からのお問い合わせへの対応</li>
                <li>セミナー、イベントのご案内</li>
                <li>新サービスや有益な情報のご提供</li>
                <li>サービス改善のための分析・統計処理</li>
                <li>契約の履行および契約後のサポート</li>
              </ul>
            </div>

            <div className="handling-section">
              <h3 className="handling-heading">収集する情報</h3>
              <p className="handling-text">当社が収集する個人情報には以下が含まれます：</p>
              <ul className="handling-list">
                <li>氏名、会社名、部署名、役職</li>
                <li>メールアドレス、電話番号</li>
                <li>住所（会社所在地）</li>
                <li>お問い合わせ内容、ご相談内容</li>
                <li>セミナー参加履歴</li>
                <li>サービス利用履歴</li>
              </ul>
            </div>

            <div className="handling-section">
              <h3 className="handling-heading">保管期間</h3>
              <p className="handling-text">
                収集した個人情報は、利用目的の達成に必要な期間に限り保管し、
                保管の必要がなくなった場合は、速やかに消去または廃棄します。
                ただし、法令により保管が義務付けられている場合は、法令で定められた期間保管します。
              </p>
            </div>

            <div className="handling-section">
              <h3 className="handling-heading">安全管理措置</h3>
              <p className="handling-text">
                当社は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために、
                以下の措置を実施しています：
              </p>
              <ul className="handling-list">
                <li>組織的安全管理措置（情報セキュリティ管理体制の構築）</li>
                <li>人的安全管理措置（従業員への教育・訓練）</li>
                <li>物理的安全管理措置（施設への入退室管理）</li>
                <li>技術的安全管理措置（アクセス制御、暗号化）</li>
              </ul>
            </div>

            <div className="handling-section">
              <h3 className="handling-heading">Cookie（クッキー）の使用について</h3>
              <p className="handling-text">
                当社ウェブサイトでは、お客様により良いサービスを提供するため、Cookieを使用することがあります。
                Cookieの使用を望まれない場合は、お使いのブラウザの設定によりCookieを無効にすることができます。
                ただし、Cookieを無効にした場合、一部のサービスがご利用いただけなくなる場合があります。
              </p>
            </div>
          </motion.div>

          {/* ISMS認証 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">ISO/IEC 27001:2022 認証取得</h2>
            <div className="content-box certification">
              <div className="cert-grid">
                <div className="cert-item">
                  <p className="cert-label">認証番号</p>
                  <p className="cert-value">MSA-IS-455</p>
                </div>
                <div className="cert-item">
                  <p className="cert-label">認証機関</p>
                  <p className="cert-value">情報セキュリティマネジメントシステム評価センター（ISR016）</p>
                </div>
                <div className="cert-item">
                  <p className="cert-label">認証範囲</p>
                  <p className="cert-value">
                    情報システムの企画、設計、開発、保守運用サービスおよびクラウドサービス（企業向けSaaS等）の提供
                  </p>
                </div>
                <div className="cert-item">
                  <p className="cert-label">有効期限</p>
                  <p className="cert-value">2027年3月28日</p>
                </div>
              </div>
              <p className="cert-description">
                当社は国際標準規格であるISO/IEC 27001:2022の認証を取得し、
                情報セキュリティマネジメントシステムの継続的な改善に取り組んでいます。
              </p>
            </div>
          </motion.div>

          {/* お問い合わせ窓口 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">お問い合わせ窓口</h2>
            <div className="content-box">
              <p className="content-text">
                当社の情報セキュリティ・個人情報保護に関するお問い合わせは、
                下記の窓口にて承っております。
              </p>

              <div className="contact-info">
                <div className="contact-row">
                  <span className="contact-label">会社名：</span>
                  <span className="contact-value">株式会社EvangSol</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">所在地：</span>
                  <span className="contact-value">〒103-0023 東京都中央区日本橋本町4-15-11</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">担当部署：</span>
                  <span className="contact-value">情報セキュリティ管理責任者</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">メール：</span>
                  <a href="mailto:info@evangsol.co.jp" className="contact-link">info@evangsol.co.jp</a>
                </div>
                <div className="contact-row">
                  <span className="contact-label">営業時間：</span>
                  <span className="contact-value">平日 9:00～18:00（土日祝日を除く）</span>
                </div>
              </div>

              <div className="notice-box">
                <p className="notice-text">
                  <strong>個人情報の開示等のご請求について：</strong><br />
                  ご本人様からの個人情報の開示、訂正、削除等のご請求については、
                  ご本人様確認をさせていただいた上で、適切に対応させていただきます。
                  詳細は上記お問い合わせ窓口までご連絡ください。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 最終更新日 */}
          <motion.div className="update-info" {...fadeInUp}>
            <p className="update-text">
              <strong>制定日：</strong> 2021年2月18日<br />
              <strong>最終改訂日：</strong> 2024年12月1日<br />
              <strong>次回見直し予定：</strong> 2025年12月
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityPrivacyPage;
