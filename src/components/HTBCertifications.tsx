import React from "react";
import '../assets/styles/ProjectDetail.scss';

function HTBCertifications({ onBack }: { onBack?: () => void }) {
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
                <h1>Hack The Box Certifications & Achievements</h1>
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
                        <h2>🎯 Hack The Box Journey</h2>
                        <p>
                            Actively engaged in Hack The Box's comprehensive cybersecurity training platform, 
                            pursuing industry-recognized certifications that validate hands-on penetration testing 
                            and defensive security skills. HTB provides real-world scenarios and vulnerable machines 
                            that simulate actual enterprise environments, offering practical experience beyond 
                            theoretical knowledge.
                        </p>
                    </div>

                    <div className="project-details">
                        <div className="detail-section">
                            <h3>🏆 Certifications</h3>
                            
                            <div className="certification-item">
                                <h4>🐛 CBBH - Certified Bug Bounty Hunter</h4>
                                <p><strong>Status:</strong> In Progress / Completed</p>
                                <p><strong>Focus Areas:</strong></p>
                                <ul>
                                    <li>Web Application Security Testing</li>
                                    <li>OWASP Top 10 Vulnerabilities</li>
                                    <li>SQL Injection & Cross-Site Scripting (XSS)</li>
                                    <li>Authentication & Authorization Bypasses</li>
                                    <li>Server-Side Request Forgery (SSRF)</li>
                                    <li>File Upload Vulnerabilities</li>
                                    <li>API Security Testing</li>
                                    <li>Bug Bounty Methodology & Reporting</li>
                                </ul>
                            </div>

                            <div className="certification-item">
                                <h4>🛡️ CDSA - Certified Defensive Security Analyst</h4>
                                <p><strong>Status:</strong> In Progress / Completed</p>
                                <p><strong>Focus Areas:</strong></p>
                                <ul>
                                    <li>Security Information & Event Management (SIEM)</li>
                                    <li>Incident Response & Digital Forensics</li>
                                    <li>Threat Hunting & Analysis</li>
                                    <li>Malware Analysis & Reverse Engineering</li>
                                    <li>Network Traffic Analysis</li>
                                    <li>Log Analysis & Correlation</li>
                                    <li>Threat Intelligence Integration</li>
                                    <li>Security Operations Center (SOC) Procedures</li>
                                </ul>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h3>🎮 Platform Achievements</h3>
                            <div className="achievements-grid">
                                <div className="achievement-category">
                                    <h4>Machines Owned</h4>
                                    <ul>
                                        <li><strong>Easy Machines:</strong> X completed</li>
                                        <li><strong>Medium Machines:</strong> X completed</li>
                                        <li><strong>Hard Machines:</strong> X completed</li>
                                        <li><strong>Insane Machines:</strong> X completed</li>
                                    </ul>
                                </div>
                                <div className="achievement-category">
                                    <h4>Skill Development</h4>
                                    <ul>
                                        <li><strong>Current Rank:</strong> [Your HTB Rank]</li>
                                        <li><strong>Points Earned:</strong> [Your Points]</li>
                                        <li><strong>Badges Unlocked:</strong> [Number] badges</li>
                                        <li><strong>Active Since:</strong> [Date]</li>
                                    </ul>
                                </div>
                                <div className="achievement-category">
                                    <h4>Specialized Tracks</h4>
                                    <ul>
                                        <li>Web Application Penetration Testing</li>
                                        <li>Active Directory Exploitation</li>
                                        <li>Buffer Overflow Techniques</li>
                                        <li>Privilege Escalation Methods</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h3>💻 Technical Skills Demonstrated</h3>
                            <div className="tech-grid">
                                <div className="tech-category">
                                    <h4>Penetration Testing</h4>
                                    <ul>
                                        <li>Nmap & Network Reconnaissance</li>
                                        <li>Burp Suite Professional</li>
                                        <li>Metasploit Framework</li>
                                        <li>Custom Exploit Development</li>
                                        <li>Privilege Escalation Techniques</li>
                                    </ul>
                                </div>
                                <div className="tech-category">
                                    <h4>Defensive Security</h4>
                                    <ul>
                                        <li>Wireshark Packet Analysis</li>
                                        <li>Splunk SIEM Operations</li>
                                        <li>Volatility Memory Forensics</li>
                                        <li>YARA Rule Development</li>
                                        <li>Incident Response Procedures</li>
                                    </ul>
                                </div>
                                <div className="tech-category">
                                    <h4>Programming & Scripting</h4>
                                    <ul>
                                        <li>Python for Security Automation</li>
                                        <li>PowerShell for Windows Security</li>
                                        <li>Bash Scripting for Linux</li>
                                        <li>SQL for Database Testing</li>
                                        <li>JavaScript for Web Security</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h3>📚 Key Learning Outcomes</h3>
                            <ul>
                                <li><strong>Real-World Application:</strong> Applied theoretical knowledge to practical scenarios</li>
                                <li><strong>Problem-Solving:</strong> Developed systematic approach to security challenges</li>
                                <li><strong>Methodology:</strong> Learned industry-standard testing methodologies</li>
                                <li><strong>Reporting Skills:</strong> Created professional security assessment reports</li>
                                <li><strong>Continuous Learning:</strong> Stayed current with latest attack vectors and defenses</li>
                                <li><strong>Ethical Hacking:</strong> Understood legal and ethical boundaries in security testing</li>
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>🔗 Portfolio Integration</h3>
                            <p>
                                The skills gained through Hack The Box directly complement my other cybersecurity projects, 
                                including the Azure SOC Lab and vulnerability assessment work. This hands-on experience 
                                provides the practical foundation needed for effective security operations and penetration testing roles.
                            </p>
                        </div>
                    </div>

                    <div className="project-links">
                        <a 
                            href="https://app.hackthebox.com/profile/[your-profile-id]" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link-button"
                        >
                            👤 HTB Profile
                        </a>
                        <a 
                            href="https://www.hackthebox.com/blog/intro-to-hack-the-box" 
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