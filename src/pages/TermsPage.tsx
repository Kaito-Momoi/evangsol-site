import { motion } from 'framer-motion';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import './TermsPage.css';

const TermsPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="terms-page">
      <Header />

      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="terms-hero-title">ご利用規約</h1>
            <p className="terms-hero-subtitle">
              当ウェブサイトのご利用にあたり、<br />
              以下の規約をご確認ください
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="terms-content-section">
        <div className="terms-container">
          {/* 基本事項 */}
          <motion.div className="terms-intro" {...fadeInUp}>
            <p className="intro-text">
              株式会社EvangSol（以下「当社」といいます）のウェブサイトをご利用いただく際には、
              以下の利用規約（以下「本規約」といいます）にご同意いただく必要があります。
              本ウェブサイトにアクセスまたは利用された時点で、本規約に同意したものとみなされます。
            </p>
          </motion.div>

          {/* 著作権 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">著作権について</h2>
            <div className="content-box">
              <p className="content-text">
                当ウェブサイトに掲載されているすべてのコンテンツ（テキスト、画像、ロゴ、デザイン、プログラムなど）は、
                日本国著作権法および国際条約により保護されています。
              </p>
              <p className="content-text">
                当ウェブサイトのコンテンツの著作権は、当社または原著作者に帰属します。
                私的使用その他法律によって明示的に認められる範囲を超えて、
                これらのコンテンツを使用（複製、変更、アップロード、掲載、送信、配布、ライセンシング、販売、出版を含みます）
                することは、事前の書面による許可なく禁止されています。
              </p>
            </div>
          </motion.div>

          {/* 商標 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">商標について</h2>
            <div className="content-box">
              <p className="content-text">
                当ウェブサイトに記載されている会社名、製品名、サービス名などは、
                当社または各社の商標または登録商標です。
              </p>
              <p className="content-text">
                これらの商標を、当社の事前の書面による許可なく使用することはできません。
              </p>
            </div>
          </motion.div>

          {/* リンク */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">リンクについて</h2>
            <div className="content-box">
              <h3 className="subsection-title">当ウェブサイトへのリンク</h3>
              <p className="content-text">
                当ウェブサイトへのリンクは、原則として自由です。
                ただし、リンクを設定された場合は、リンク元のURLと担当者の連絡先を
                info@evangsol.co.jp までお知らせください。
              </p>
              <p className="content-text">
                以下の場合には、リンクをお断りする場合があります：
              </p>
              <ul className="terms-list">
                <li>当社または当社の事業に対して誹謗中傷する内容を含むウェブサイト</li>
                <li>法令または公序良俗に反する内容を含むウェブサイト</li>
                <li>当社の信用を毀損するおそれのあるウェブサイト</li>
                <li>フレーム内で当ウェブサイトを表示するリンク</li>
              </ul>

              <h3 className="subsection-title">外部サイトへのリンク</h3>
              <p className="content-text">
                当ウェブサイトから外部サイトへのリンクは、お客様の便宜のために提供しているものです。
                リンク先サイトの内容については、各サイトの運営者が責任を負っており、
                当社はリンク先サイトの内容や利用により生じた損害について、一切の責任を負いません。
              </p>
              <p className="content-text">
                また、リンクの存在は、当社による推奨やパートナーシップなどの
                特別な関係を意味するものではありません。
              </p>
            </div>
          </motion.div>

          {/* 免責事項 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">免責事項</h2>
            <div className="content-box warning">
              <h3 className="subsection-title">情報の正確性</h3>
              <p className="content-text">
                当社は、当ウェブサイトに掲載する情報について、正確性、完全性、有用性を保証するものではありません。
                当ウェブサイトの情報は予告なく変更される場合があります。
              </p>

              <h3 className="subsection-title">サービスの中断・変更</h3>
              <p className="content-text">
                当社は、事前の予告なく、当ウェブサイトの運営を中断または中止する場合があります。
                また、当ウェブサイトの内容を変更、追加、削除する場合があります。
                これらの変更、中断、中止によって生じた損害について、当社は一切の責任を負いません。
              </p>

              <h3 className="subsection-title">損害賠償の制限</h3>
              <p className="content-text">
                当ウェブサイトの利用により生じた損害（直接的、間接的、特別、付随的、派生的損害を含みます）について、
                当社は理由の如何を問わず一切の責任を負いません。
              </p>
            </div>
          </motion.div>

          {/* 禁止事項 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">禁止事項</h2>
            <div className="content-box">
              <p className="content-text">
                当ウェブサイトのご利用にあたり、以下の行為を禁止します：
              </p>
              <ul className="terms-list">
                <li>法令または公序良俗に反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社または第三者の知的財産権を侵害する行為</li>
                <li>当社または第三者の財産、プライバシーを侵害する行為</li>
                <li>当社または第三者に不利益もしくは損害を与える行為</li>
                <li>当ウェブサイトの運営を妨げる行為</li>
                <li>不正アクセス行為またはこれを試みる行為</li>
                <li>コンピューターウイルス等の有害なプログラムを使用または提供する行為</li>
                <li>当社の信用を毀損する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </div>
          </motion.div>

          {/* 準拠法 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">準拠法および管轄裁判所</h2>
            <div className="content-box">
              <p className="content-text">
                本規約の解釈および適用は、日本国法に準拠するものとします。
              </p>
              <p className="content-text">
                当ウェブサイトの利用に関して紛争が生じた場合は、
                東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </div>
          </motion.div>

          {/* 規約の変更 */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">規約の変更</h2>
            <div className="content-box">
              <p className="content-text">
                当社は、必要に応じて本規約を変更することがあります。
                本規約を変更した場合は、当ウェブサイト上に掲載することにより、
                変更後の規約が有効になるものとします。
              </p>
              <p className="content-text">
                本規約の変更後に当ウェブサイトを継続してご利用いただいた場合は、
                変更後の規約に同意したものとみなします。
              </p>
            </div>
          </motion.div>

          {/* お問い合わせ */}
          <motion.div className="content-block" {...fadeInUp}>
            <h2 className="content-title">お問い合わせ</h2>
            <div className="content-box">
              <p className="content-text">
                本規約に関するお問い合わせは、以下までご連絡ください。
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
                  <span className="contact-label">メール：</span>
                  <a href="mailto:info@evangsol.co.jp" className="contact-link">info@evangsol.co.jp</a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
