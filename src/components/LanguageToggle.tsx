import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../assets/styles/LanguageToggle.scss';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
