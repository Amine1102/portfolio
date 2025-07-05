import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import { useLanguage } from '../contexts/LanguageContext';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Azure Sentinel",
    "SIEM",
    "Wireshark",
    "Nmap",
    "Metasploit",
    "Burp Suite",
    "Kali Linux",
    "Windows Server",
    "Active Directory",
    "TryHackMe",
    "HackTheBox"
];

const labelsSecond = [
    "Symfony",
    "PHP",
    "Python",
    "Java",
    "JavaScript",
    "Typescript",
    "HTML/CSS",
    "Git",
    "Bash",
    "Linux",
    "MySQL"
];

const labelsThird = [
    "Cisco Catalyst",
    "TCP/IP",
    "DNS",
    "DHCP",
    "VPN",
    "Firewall",
    "Network Monitoring",
    "Virtualization",
    "Azure",
    "Windows Server"
];

function Expertise() {
    const { t } = useLanguage();
    
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t('skills.title')}</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faShieldAlt} size="3x"/>
                    <h3>{t('skills.cyber.title')}</h3>
                    <p>{t('skills.cyber.description')}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('skills.techUsed')}</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>{t('skills.dev.title')}</h3>
                    <p>{t('skills.dev.description')}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('skills.techStack')}</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                    <h3>{t('skills.network.title')}</h3>
                    <p>{t('skills.network.description')}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('skills.techStack')}</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;