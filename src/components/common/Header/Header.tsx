import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="logo">
            <img src={`${import.meta.env.BASE_URL}EvangSol_logo.png`} alt="EvangSol" className="logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="primary-navigation desktop-nav">
          <div className="nav-item-with-dropdown">
            <span className="nav-link">
              ソリューション
            </span>
            <div className="dropdown-menu">
              <a href="https://netsuite.evangsol.co.jp/" className="dropdown-link" target="_blank" rel="noopener noreferrer">
                NetSuite導入
              </a>
            </div>
          </div>
          <Link to="/company" className="nav-link">
            会社情報
          </Link>
          <Link to="/contact" className="nav-link contact-link">
            お問い合わせ
          </Link>
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
              <a href="https://netsuite.evangsol.co.jp/" className="mobile-nav-link mobile-nav-sublink" target="_blank" rel="noopener noreferrer">
                NetSuite導入
              </a>
            </div>
            <Link to="/company" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              会社情報
            </Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              お問い合わせ
            </Link>
          </motion.nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
