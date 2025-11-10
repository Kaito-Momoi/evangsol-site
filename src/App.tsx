import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import SecurityPrivacyPage from './pages/SecurityPrivacyPage';
import TermsPage from './pages/TermsPage';
import './App.css';

function App() {
  return (
    <Router basename="/evangsol-site">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/security-privacy" element={<SecurityPrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
