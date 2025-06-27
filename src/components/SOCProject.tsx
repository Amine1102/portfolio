import React from "react";
import mock10 from '../assets/images/mock10.png';
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
                    <img src={mock10} alt="Azure SOC Attack Map Dashboard" className="project-detail-image" />
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
                                <li><strong>{t('soc.stats.5')}</strong></li>
                                <li><strong>{t('soc.stats.6')}</strong></li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>{t('soc.architecture.title')}</h3>
                            <ul>
                                <li><strong>Azure VM:</strong> {t('soc.architecture.azurevm')}</li>
                                <li><strong>Honeypot Configuration:</strong> {t('soc.architecture.honeypot')}</li>
                                <li><strong>Log Analytics Workspace:</strong> {t('soc.architecture.loganalytics')}</li>
                                <li><strong>Microsoft Sentinel:</strong> {t('soc.architecture.sentinel')}</li>
                                <li><strong>PowerShell Scripts:</strong> {t('soc.architecture.powershell')}</li>
                                <li><strong>KQL Queries:</strong> {t('soc.architecture.kql')}</li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>{t('soc.implementation.title')}</h3>
                            <div className="implementation-steps">
                                <div className="step">
                                    <h4>{t('soc.phase1.title')}</h4>
                                    <p><strong>{t('soc.phase1.duration')}</strong></p>
                                    <ul>
                                        <li>{t('soc.phase1.1')}</li>
                                        <li>{t('soc.phase1.2')}</li>
                                        <li>{t('soc.phase1.3')}</li>
                                        <li>{t('soc.phase1.4')}</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>{t('soc.phase2.title')}</h4>
                                    <p><strong>{t('soc.phase2.duration')}</strong></p>
                                    <ul>
                                        <li>{t('soc.phase2.1')}</li>
                                        <li>{t('soc.phase2.2')}</li>
                                        <li>{t('soc.phase2.3')}</li>
                                        <li>{t('soc.phase2.4')}</li>
                                        <li>{t('soc.phase2.5')}</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>{t('soc.phase3.title')}</h4>
                                    <p><strong>{t('soc.phase3.duration')}</strong></p>
                                    <ul>
                                        <li>{t('soc.phase3.1')}</li>
                                        <li>{t('soc.phase3.2')}</li>
                                        <li>{t('soc.phase3.3')}</li>
                                        <li>{t('soc.phase3.4')}</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>{t('soc.phase4.title')}</h4>
                                    <p><strong>{t('soc.phase4.duration')}</strong></p>
                                    <ul>
                                        <li>{t('soc.phase4.1')}</li>
                                        <li>{t('soc.phase4.2')}</li>
                                        <li>{t('soc.phase4.3')}</li>
                                        <li>{t('soc.phase4.4')}</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>{t('soc.phase5.title')}</h4>
                                    <p><strong>{t('soc.phase5.duration')}</strong></p>
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
                            <h3>{t('soc.kql.title')}</h3>
                            <div className="code-snippet">
                                <h4>{t('soc.kql.failed.title')}</h4>
                                <pre>
{`// Query to analyze failed RDP attempts with geolocation
SecurityEvent
| where EventID == 4625  // Failed logon events
| where TimeGenerated > ago(24h)
| project TimeGenerated, Computer, Account, IpAddress, 
         LogonType, SubStatus, WorkstationName
| join kind=leftouter (
    _GetWatchlist('geoip')
    | project NetworkIP=Network, Latitude, Longitude, 
             Country=country_name, City=city_name
    ) on $left.IpAddress == $right.NetworkIP
| where IpAddress != ""
| summarize EventCount=count() by IpAddress, Latitude, 
         Longitude, Country, City
| where EventCount > 1
| sort by EventCount desc`}
                                </pre>
                            </div>
                            <div className="code-snippet">
                                <h4>{t('soc.kql.attack.title')}</h4>
                                <pre>
{`// Identify top attacking countries and their methods
SecurityEvent
| where EventID == 4625
| where TimeGenerated > ago(1h)
| join kind=leftouter _GetWatchlist('geoip') 
    on $left.IpAddress == $right.Network
| summarize AttackCount=count(), 
           UniqueAccounts=dcount(Account),
           UniqueIPs=dcount(IpAddress) by country_name
| sort by AttackCount desc
| take 10`}
                                </pre>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h3>{t('soc.analysis.title')}</h3>
                            <div className="findings-grid">
                                <div className="finding-category">
                                    <h4>{t('soc.findings.volume.title')}</h4>
                                    <ul>
                                        <li><strong>{t('soc.findings.volume.1')}</strong></li>
                                        <li><strong>{t('soc.findings.volume.2')}</strong></li>
                                        <li><strong>{t('soc.findings.volume.3')}</strong></li>
                                        <li><strong>{t('soc.findings.volume.4')}</strong></li>
                                    </ul>
                                </div>
                                <div className="finding-category">
                                    <h4>{t('soc.findings.geo.title')}</h4>
                                    <ul>
                                        <li><strong>{t('soc.findings.geo.1')}</strong></li>
                                        <li><strong>{t('soc.findings.geo.2')}</strong></li>
                                        <li><strong>{t('soc.findings.geo.3')}</strong></li>
                                        <li><strong>{t('soc.findings.geo.4')}</strong></li>
                                    </ul>
                                </div>
                                <div className="finding-category">
                                    <h4>{t('soc.findings.methods.title')}</h4>
                                    <ul>
                                        <li><strong>{t('soc.findings.methods.1')}</strong></li>
                                        <li><strong>{t('soc.findings.methods.2')}</strong></li>
                                        <li><strong>{t('soc.findings.methods.3')}</strong></li>
                                        <li><strong>{t('soc.findings.methods.4')}</strong></li>
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

                        <div className="detail-section">
                            <h3>{t('soc.cost.title')}</h3>
                            <ul>
                                <li><strong>{t('soc.cost.1')}</strong></li>
                                <li><strong>{t('soc.cost.2')}</strong></li>
                                <li><strong>{t('soc.cost.3')}</strong></li>
                                <li><strong>{t('soc.cost.4')}</strong></li>
                                <li><strong>{t('soc.cost.5')}</strong></li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-links">
                        <a 
                            href="https://github.com/amine1102/soc-project" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link-button"
                        >
                            📁 View Repository
                        </a>
                        <button 
                            className="project-link-button secondary"
                            onClick={() => alert('Dashboard link coming soon')}
                        >
                            📊 Live Dashboard
                        </button>
                        <button 
                            className="project-link-button tertiary"
                            onClick={() => alert('Documentation link coming soon')}
                        >
                            📋 Documentation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SOCProject;