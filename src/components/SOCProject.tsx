import React from "react";
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/ProjectDetail.scss';

function SOCProject({ onBack }: { onBack?: () => void }) {
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
                    ← Back to Projects
                </button>
                <h1>Azure Homelab SOC with Live Attack Monitoring</h1>
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
                        <h2>🛡️ Project Overview</h2>
                        <p>
                            Built a fully functional Security Operations Center from scratch using Microsoft Azure. 
                            This hands-on cybersecurity project demonstrates real-world threat detection capabilities by creating an 
                            intentionally vulnerable Windows 10 honeypot VM that attracted over <strong>26,000+ failed login attempts</strong> 
                            from attackers worldwide within 24 hours. The project showcases end-to-end SIEM implementation, log analysis, 
                            and geospatial threat visualization using enterprise-grade security tools.
                        </p>
                    </div>

                    <div className="project-details">
                        <div className="detail-section">
                            <h3>🎯 Project Objectives</h3>
                            <ul>
                                <li>Create a vulnerable VM as a honeypot to attract real attacks</li>
                                <li>Set up centralized logging and monitoring infrastructure</li>
                                <li>Implement SIEM capabilities using Microsoft Sentinel</li>
                                <li>Analyze and visualize real-world attack patterns</li>
                                <li>Build interactive dashboards for threat intelligence</li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>🚨 Real Attack Statistics</h3>
                            <ul>
                                <li><strong>Attack Volume:</strong> 26,000+ failed RDP login attempts from Poland alone</li>
                                <li><strong>Geographic Spread:</strong> 13,300+ attempts from Belgium, 13,300+ from South America</li>
                                <li><strong>Discovery Speed:</strong> VM discovered and attacked within minutes of deployment</li>
                                <li><strong>Attack Rate:</strong> 400+ attempts per minute during peak activity</li>
                                <li><strong>Common Attack Vectors:</strong> RDP brute force (Event ID 4625)</li>
                                <li><strong>Attacker Usernames:</strong> admin, administrator, user, employee (most common)</li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>🔧 Architecture & Setup</h3>
                            <ul>
                                <li><strong>Azure VM:</strong> Windows 10 virtual machine exposed to internet</li>
                                <li><strong>Honeypot Configuration:</strong> Disabled firewall, enabled RDP</li>
                                <li><strong>Log Analytics Workspace:</strong> Central log collection point</li>
                                <li><strong>Microsoft Sentinel:</strong> Cloud-native SIEM solution</li>
                                <li><strong>PowerShell Scripts:</strong> Custom log parsing and geolocation</li>
                                <li><strong>KQL Queries:</strong> Advanced threat hunting and analysis</li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>⚙️ Detailed Implementation Process</h3>
                            <div className="implementation-steps">
                                <div className="step">
                                    <h4>Phase 1: Azure Infrastructure Setup</h4>
                                    <p><strong>Duration:</strong> 15 minutes</p>
                                    <ul>
                                        <li>Created free Azure subscription with $200 credit</li>
                                        <li>Established Resource Group "RG-SOC-Lab" in East US 2</li>
                                        <li>Deployed Virtual Network (10.0.0.0/16) with default subnet</li>
                                        <li>Configured network security group with custom "DANGER_ALLOW_ALL" rule</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>Phase 2: Honeypot VM Configuration</h4>
                                    <p><strong>Duration:</strong> 20 minutes</p>
                                    <ul>
                                        <li>Deployed Windows 10 VM (Standard_DS2_v3) with public IP</li>
                                        <li>Disabled Windows Defender Firewall across all profiles</li>
                                        <li>Opened RDP port 3389 to 0.0.0.0/0 (any source)</li>
                                        <li>Created local admin account with weak credentials for testing</li>
                                        <li>Verified external connectivity via ping tests</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>Phase 3: Centralized Logging Implementation</h4>
                                    <p><strong>Duration:</strong> 25 minutes</p>
                                    <ul>
                                        <li>Created Log Analytics Workspace "LAW-SOC-Lab"</li>
                                        <li>Installed Azure Monitor Agent extension on VM</li>
                                        <li>Configured Data Collection Rule (DCR) for Windows Security Events</li>
                                        <li>Verified log ingestion with KQL queries (security event table)</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>Phase 4: SIEM Integration & Enhancement</h4>
                                    <p><strong>Duration:</strong> 30 minutes</p>
                                    <ul>
                                        <li>Deployed Microsoft Sentinel (31-day free trial)</li>
                                        <li>Connected Sentinel to Log Analytics Workspace</li>
                                        <li>Installed Windows Security Events connector</li>
                                        <li>Created geolocation watchlist with 55,000+ IP-to-location mappings</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <h4>Phase 5: Threat Visualization & Analysis</h4>
                                    <p><strong>Duration:</strong> 45 minutes</p>
                                    <ul>
                                        <li>Developed custom KQL queries for failed authentication analysis</li>
                                        <li>Created interactive world map workbook in Sentinel</li>
                                        <li>Implemented automatic IP geolocation lookup using watchlist joins</li>
                                        <li>Configured real-time attack visualization with color-coded threat levels</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h3>🔍 Advanced KQL Queries & Analysis</h3>
                            <div className="code-snippet">
                                <h4>Failed Authentication Analysis Query:</h4>
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
                                <h4>Attack Pattern Analysis:</h4>
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
                            <h3>📊 Comprehensive Attack Analysis Results</h3>
                            <div className="findings-grid">
                                <div className="finding-category">
                                    <h4>Volume & Velocity</h4>
                                    <ul>
                                        <li><strong>Total Failed Attempts:</strong> 52,000+ in first 24 hours</li>
                                        <li><strong>Peak Attack Rate:</strong> 400 attempts/minute</li>
                                        <li><strong>Average Session Duration:</strong> 2-3 minutes per attacker</li>
                                        <li><strong>Discovery Time:</strong> VM found within 5 minutes of deployment</li>
                                    </ul>
                                </div>
                                <div className="finding-category">
                                    <h4>Geographic Distribution</h4>
                                    <ul>
                                        <li><strong>Primary Sources:</strong> Poland (26K), Belgium (13.3K), Brazil (13.3K)</li>
                                        <li><strong>Total Countries:</strong> 15+ countries represented</li>
                                        <li><strong>Attack Concentration:</strong> 70% from Eastern Europe/South America</li>
                                        <li><strong>Time Zones:</strong> 24/7 continuous attacks across all time zones</li>
                                    </ul>
                                </div>
                                <div className="finding-category">
                                    <h4>Attack Methodologies</h4>
                                    <ul>
                                        <li><strong>Protocol:</strong> 100% RDP brute force (port 3389)</li>
                                        <li><strong>Top Usernames:</strong> admin (35%), administrator (25%), user (15%)</li>
                                        <li><strong>Password Patterns:</strong> Dictionary attacks, common passwords</li>
                                        <li><strong>Automation Level:</strong> 95%+ automated bot traffic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h3>🛡️ Security Insights & Lessons Learned</h3>
                            <ul>
                                <li><strong>Internet Exposure Risk:</strong> Any internet-facing system is discovered within minutes</li>
                                <li><strong>Attack Automation:</strong> Modern threats are highly automated and persistent</li>
                                <li><strong>Global Threat Landscape:</strong> Attacks originate from diverse geographic locations</li>
                                <li><strong>Default Credential Risk:</strong> Common usernames are targeted immediately</li>
                                <li><strong>Monitoring Necessity:</strong> Real-time logging and alerting are critical for detection</li>
                                <li><strong>Defense in Depth:</strong> Multiple security layers needed (network + host firewalls)</li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>💰 Cost Management & Optimization</h3>
                            <ul>
                                <li><strong>VM Cost:</strong> Standard_DS2_v3 at ~$70/month (turned off after lab)</li>
                                <li><strong>Log Analytics:</strong> First 5GB/day free, then pay-per-GB ingested</li>
                                <li><strong>Sentinel:</strong> 31-day free trial, then ~$2/GB after trial</li>
                                <li><strong>Total Lab Cost:</strong> Under $5 for 24-hour experiment</li>
                                <li><strong>Cost Control:</strong> Implemented automatic VM shutdown at 3 AM</li>
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
                        <a 
                            href="#" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link-button secondary"
                        >
                            📊 Live Dashboard
                        </a>
                        <a 
                            href="#" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link-button tertiary"
                        >
                            📋 Documentation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SOCProject;