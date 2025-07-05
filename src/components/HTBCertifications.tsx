import React from "react";
import { useLanguage } from '../contexts/LanguageContext';
import '../assets/styles/ProjectDetail.scss';
import cbbhLogo from '../assets/images/cbbh-logo.png';
import cdsaLogo from '../assets/images/cdsa-logo.png';

function HTBCertifications({ onBack }: { onBack?: () => void }) {
    const { t } = useLanguage();
    
    const handleBackClick = () => {
        if (onBack) {
            onBack();
        } else {
            window.history.back();
        }
    };

    return (
        <div className="project-detail-container">
            <div className="project-detail-header">
                <button 
                    className="back-button" 
                    onClick={handleBackClick}
                >
                    {t('htb.backButton')}
                </button>
                <h1>{t('htb.title')}</h1>
                <div className="project-badges">
                    <span className="badge">Penetration Testing</span>
                    <span className="badge">Bug Bounty</span>
                    <span className="badge">Defensive Security</span>
                    <span className="badge">Hands-on Labs</span>
                </div>
            </div>

            <div className="project-detail-content">
                <div className="project-info-section">
                    <div className="project-overview">
                        <h2>{t('htb.overview.title')}</h2>
                        <p>
                            {t('htb.overview.description')}
                        </p>
                    </div>

                    <div className="project-details">
                        <div className="detail-section">
                            <h3>{t('htb.certifications.title')}</h3>
                            
                            <div className="certification-item">
                                <div className="certification-header">
                                    <img src={cbbhLogo} alt="CBBH Logo" className="certification-logo" />
                                    <div>
                                        <h4>{t('htb.cbbh.title')}</h4>
                                        <p><strong>{t('htb.cbbh.status')}</strong></p>
                                    </div>
                                </div>
                                <p><strong>{t('htb.cbbh.focus')}</strong></p>
                                <ul>
                                    <li>{t('htb.cbbh.skill.1')}</li>
                                    <li>{t('htb.cbbh.skill.2')}</li>
                                    <li>{t('htb.cbbh.skill.3')}</li>
                                    <li>{t('htb.cbbh.skill.4')}</li>
                                    <li>{t('htb.cbbh.skill.5')}</li>
                                    <li>{t('htb.cbbh.skill.6')}</li>
                                    <li>{t('htb.cbbh.skill.7')}</li>
                                    <li>{t('htb.cbbh.skill.8')}</li>
                                </ul>
                            </div>

                            <div className="certification-item">
                                <div className="certification-header">
                                    <img src={cdsaLogo} alt="CDSA Logo" className="certification-logo" />
                                    <div>
                                        <h4>{t('htb.cdsa.title')}</h4>
                                        <p><strong>{t('htb.cdsa.status')}</strong></p>
                                    </div>
                                </div>
                                <p><strong>{t('htb.cdsa.focus')}</strong></p>
                                <ul>
                                    <li>{t('htb.cdsa.skill.1')}</li>
                                    <li>{t('htb.cdsa.skill.2')}</li>
                                    <li>{t('htb.cdsa.skill.3')}</li>
                                    <li>{t('htb.cdsa.skill.4')}</li>
                                    <li>{t('htb.cdsa.skill.5')}</li>
                                    <li>{t('htb.cdsa.skill.6')}</li>
                                    <li>{t('htb.cdsa.skill.7')}</li>
                                    <li>{t('htb.cdsa.skill.8')}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h3>{t('htb.skills.title')}</h3>
                            <div className="tech-grid">
                                <div className="tech-category">
                                    <h4>{t('htb.tech.pentest.title')}</h4>
                                    <ul>
                                        <li>{t('htb.tech.pentest.1')}</li>
                                        <li>{t('htb.tech.pentest.2')}</li>
                                        <li>{t('htb.tech.pentest.3')}</li>
                                        <li>{t('htb.tech.pentest.4')}</li>
                                        <li>{t('htb.tech.pentest.5')}</li>
                                    </ul>
                                </div>
                                <div className="tech-category">
                                    <h4>{t('htb.tech.defensive.title')}</h4>
                                    <ul>
                                        <li>{t('htb.tech.defensive.1')}</li>
                                        <li>{t('htb.tech.defensive.2')}</li>
                                        <li>{t('htb.tech.defensive.3')}</li>
                                        <li>{t('htb.tech.defensive.4')}</li>
                                        <li>{t('htb.tech.defensive.5')}</li>
                                    </ul>
                                </div>
                                <div className="tech-category">
                                    <h4>{t('htb.tech.programming.title')}</h4>
                                    <ul>
                                        <li>{t('htb.tech.programming.1')}</li>
                                        <li>{t('htb.tech.programming.2')}</li>
                                        <li>{t('htb.tech.programming.3')}</li>
                                        <li>{t('htb.tech.programming.4')}</li>
                                        <li>{t('htb.tech.programming.5')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h3>{t('htb.learning.title')}</h3>
                            <ul>
                                <li><strong>{t('htb.learning.1')}</strong></li>
                                <li><strong>{t('htb.learning.2')}</strong></li>
                                <li><strong>{t('htb.learning.3')}</strong></li>
                                <li><strong>{t('htb.learning.4')}</strong></li>
                                <li><strong>{t('htb.learning.5')}</strong></li>
                                <li><strong>{t('htb.learning.6')}</strong></li>
                            </ul>
                        </div>

                    </div>

                    <div className="project-links">
            
                        <a 
                            href="https://academy.hackthebox.com/faq" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link-button secondary"
                        >
                            📖 About HTB
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HTBCertifications;