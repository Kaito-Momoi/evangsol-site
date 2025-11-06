import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={`${import.meta.env.BASE_URL}EvangSol_logo.png`} alt="EvangSol" className="footer-logo-image" />
            <img src={`${import.meta.env.BASE_URL}solution-provider_white.png`} alt="Solution Provider" className="footer-badge-image" />
          </Link>
          <p className="footer-brand-text">
            Oracle NetSuite認定パートナーとして、<br />
            お客様のビジネス変革を支援します
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-column-title">ソリューション</h3>
            <ul className="footer-link-list">
              <li><a href="https://www.evangsol.co.jp/" target="_blank" rel="noopener noreferrer">NetSuite導入</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">会社情報</h3>
            <ul className="footer-link-list">
              <li><Link to="/company">会社概要</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">サポート</h3>
            <ul className="footer-link-list">
              <li><Link to="/contact">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; 2025 EvangSol Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
