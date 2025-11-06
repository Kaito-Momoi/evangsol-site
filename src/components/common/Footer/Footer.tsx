import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/EvangSol_logo.png" alt="EvangSol" className="footer-logo-image" />
            <img src="/solution-provider_white.png" alt="Solution Provider" className="footer-badge-image" />
          </div>
          <p className="footer-brand-text">
            Oracle NetSuite認定パートナーとして、<br />
            お客様のビジネス変革を支援します
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-column-title">ソリューション</h3>
            <ul className="footer-link-list">
              <li><a href="https://www.evangsol.co.jp/">NetSuite導入</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">会社情報</h3>
            <ul className="footer-link-list">
              <li><a href="/company">会社概要</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">サポート</h3>
            <ul className="footer-link-list">
              <li><a href="/contact">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; 2025 EvangSol Inc. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="/privacy">プライバシーポリシー</a>
          <a href="/terms">利用規約</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
