import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="header-container">
        <div className="logo-wrapper">
          <a href="/" className="logo">
            <img src={`${import.meta.env.BASE_URL}EvangSol_logo.png`} alt="EvangSol" className="logo-image" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="primary-navigation desktop-nav">
          <div className="nav-item-with-dropdown">
            <span className="nav-link">
              ソリューション
            </span>
            <div className="dropdown-menu">
              <a href="https://www.evangsol.co.jp/" className="dropdown-link">
                NetSuite導入
              </a>
            </div>
          </div>
          <a href="/company" className="nav-link">
            会社情報
          </a>
          <a href="/contact" className="nav-link contact-link">
            お問い合わせ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニュー"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.nav
            className="mobile-navigation"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-nav-section">
              <span className="mobile-nav-label">ソリューション</span>
              <a href="https://www.evangsol.co.jp/" className="mobile-nav-link mobile-nav-sublink">
                NetSuite導入
              </a>
            </div>
            <a href="/company" className="mobile-nav-link">
              会社情報
            </a>
            <a href="/contact" className="mobile-nav-link">
              お問い合わせ
            </a>
          </motion.nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
