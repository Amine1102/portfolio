import React from "react";
import map0h from '../assets/images/map0h.png';
import Map from '../assets/images/MapAfter24h.png';
import map48 from '../assets/images/MapAfter48h.png';
import soc from '../assets/images/soc.png';
import stat from '../assets/images/stats.png';
import { useLanguage } from '../contexts/LanguageContext';
import '../assets/styles/ProjectDetail.scss';

function SOCProject({ onBack }: { onBack?: () => void }) {
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
                    {t('soc.backButton')}
                </button>
                <h1>{t('soc.title')}</h1>
                <div className="project-badges">
                    <span className="badge">Cybersecurity</span>
                    <span className="badge">Azure</span>
                    <span className="badge">SIEM</span>
                    <span className="badge">Threat Detection</span>
                </div>
            </div>

            <div className="project-detail-content">
                <div className="project-image-section">
                    <img src={map0h} alt="Map 0H" className="project-detail-image" />
                    <img src={Map} alt="Maps after 24h" className="project-detail-image" />
                    <img src={map48} alt="Map 48H" className="project-detail-image" />
                    <img src={soc} alt="SOC Project Architecture" className="project-detail-image" />
                    <img src={stat} alt="Statistics Overview" className="project-detail-image" />
                    <a 
                            href="https://github.com/amine1102/SOC" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link-button"
                        >
                            Git Repository
                        </a>
                </div>

                <div className="project-info-section">
                    <div className="project-overview">
                        <h2>{t('soc.overview.title')}</h2>
                        <p>
                            {t('soc.overview.description')}
                        </p>
                    </div>

                    <div className="project-details">
                        <div className="detail-section">
                            <h3>{t('soc.objectives.title')}</h3>
                            <ul>
                                <li>{t('soc.objectives.1')}</li>
                                <li>{t('soc.objectives.2')}</li>
                                <li>{t('soc.objectives.3')}</li>
                                <li>{t('soc.objectives.4')}</li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>{t('soc.stats.title')}</h3>
                            <ul>
                                <li><strong>{t('soc.stats.1')}</strong></li>
                                <li><strong>{t('soc.stats.2')}</strong></li>
                                <li><strong>{t('soc.stats.3')}</strong></li>
                                <li><strong>{t('soc.stats.4')}</strong></li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>{t('soc.architecture.title')}</h3>
                            <ul>
                                <li><strong>Azure VM:</strong> {t('soc.architecture.azurevm')}</li>
                                <li><strong>Honeypot Configuration:</strong> {t('soc.architecture.honeypot')}</li>
                                <li><strong>Log Analytics Workspace:</strong> {t('soc.architecture.loganalytics')}</li>
                                <li><strong>Microsoft Sentinel:</strong> {t('soc.architecture.sentinel')}</li>
                                <li><strong>KQL Queries:</strong> {t('soc.architecture.kql')}</li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>{t('soc.implementation.title')}</h3>
                            <div className="implementation-steps">
                                <div className="step">
                                    <h4>{t('soc.phase1.title')}</h4>
                                    <ul>
                                        <li>{t('soc.phase1.1')}</li>
                                        <li>{t('soc.phase1.2')}</li>
                                        <li>{t('soc.phase1.3')}</li>
                                        <li>{t('soc.phase1.4')}</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>{t('soc.phase2.title')}</h4>
                                    <ul>
                                        <li>{t('soc.phase2.1')}</li>
                                        <li>{t('soc.phase2.2')}</li>
                                        <li>{t('soc.phase2.3')}</li>
                                        <li>{t('soc.phase2.4')}</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>{t('soc.phase3.title')}</h4>
                                    <ul>
                                        <li>{t('soc.phase3.1')}</li>
                                        <li>{t('soc.phase3.2')}</li>
                                        <li>{t('soc.phase3.3')}</li>
                                        <li>{t('soc.phase3.4')}</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>{t('soc.phase4.title')}</h4>
                                    <ul>
                                        <li>{t('soc.phase4.1')}</li>
                                        <li>{t('soc.phase4.2')}</li>
                                        <li>{t('soc.phase4.3')}</li>
                                        <li>{t('soc.phase4.4')}</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>{t('soc.phase5.title')}</h4>
                                    <ul>
                                        <li>{t('soc.phase5.1')}</li>
                                        <li>{t('soc.phase5.2')}</li>
                                        <li>{t('soc.phase5.3')}</li>
                                        <li>{t('soc.phase5.4')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    

                        <div className="detail-section">
                            <h3>{t('soc.insights.title')}</h3>
                            <ul>
                                <li><strong>{t('soc.insights.1')}</strong></li>
                                <li><strong>{t('soc.insights.2')}</strong></li>
                                <li><strong>{t('soc.insights.3')}</strong></li>
                                <li><strong>{t('soc.insights.4')}</strong></li>
                                <li><strong>{t('soc.insights.5')}</strong></li>
                                <li><strong>{t('soc.insights.6')}</strong></li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-links">
                        <a 
                            href="https://github.com/amine1102/SOC" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link-button"
                        >
                            📁 View Repository
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SOCProject;