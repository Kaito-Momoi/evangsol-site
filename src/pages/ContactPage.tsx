import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '提案依頼',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategorySelect = (category: string) => {
    setFormData(prev => ({
      ...prev,
      category
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理をここに実装
    console.log('Form submitted:', formData);
    alert('お問い合わせを送信しました。担当者より折り返しご連絡いたします。');
  };

  return (
    <div className="contact-page">
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="contact-hero-title">お問い合わせ</h1>
            <p className="contact-hero-subtitle">
              お気軽にご相談ください。<br />
              専門のスタッフが丁寧に対応いたします
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-content">
            {/* Contact Information */}
            <motion.div className="contact-info-sidebar" {...fadeInUp}>
              <h2 className="sidebar-title">お問い合わせ先</h2>

              <div className="contact-info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3 className="info-label">電話</h3>
                  <p className="info-value">03-6231-1328</p>
                  <p className="info-note">平日 9:00～18:00</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3 className="info-label">FAX</h3>
                  <p className="info-value">03-6231-1348</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3 className="info-label">所在地</h3>
                  <p className="info-value">
                    〒103-0023<br />
                    東京都中央区日本橋本町4-15-11<br />
                    市橋ビル６階
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-container" {...fadeInUp}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    お名前 <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="山田 太郎"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    メールアドレス <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@company.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    電話番号 <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="03-1234-5678"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">
                    件名 <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="NetSuite導入に関するご相談"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    カテゴリ <span className="required">*</span>
                  </label>
                  <div className="category-buttons">
                    {['提案依頼', '見積', 'その他'].map((category) => (
                      <button
                        key={category}
                        type="button"
                        className={`category-button ${formData.category === category ? 'active' : ''}`}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="お問い合わせ内容をご記入ください（任意）"
                  />
                </div>

                <button type="submit" className="submit-button">
                  送信する
                  <svg className="submit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
