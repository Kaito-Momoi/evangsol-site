import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import './ContactPage.css';

const LAMBDA_URL = 'https://mtahucuid3yuhbpvkn4idrdcsq0hvsjf.lambda-url.ap-northeast-1.on.aws/';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '提案依頼',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(LAMBDA_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('お問い合わせを送信しました。担当者より折り返しご連絡いたします。');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          category: '提案依頼',
          message: ''
        });
      } else {
        throw new Error('送信失敗');
      }
    } catch (error) {
      alert('送信に失敗しました。時間をおいて再度お試しください。');
      console.error('送信エラー:', error);
    } finally {
      setIsSubmitting(false);
    }
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
            {/* Contact Form */}
            <motion.div className="contact-form-container contact-form-full-width" {...fadeInUp}>
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

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? '送信中...' : '送信する'}
                  {!isSubmitting && (
                    <svg className="submit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
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
