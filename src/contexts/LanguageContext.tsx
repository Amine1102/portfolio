import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Technical Skills
    'skills.title': 'Technical Skills',
    'skills.cyber.title': 'Cybersecurity & Security Operations',
    'skills.cyber.description': 'Developed cybersecurity skills through hands-on learning with HackTheBox, TryHackMe, and academic projects. Built practical experience in threat detection and incident response.',
    'skills.dev.title': 'Web Development & Technical Skills',
    'skills.dev.description': 'Full-stack development experience from academic projects and apprenticeship at SFR. Strong foundation in web technologies and scripting for automation.',
    'skills.network.title': 'Network & Infrastructure',
    'skills.network.description': 'Network administration and security skills gained through coursework and internship experience. Understanding of network protocols and infrastructure management.',
    'skills.techUsed': 'Tech used:',
    'skills.techStack': 'Tech stack:',
    
    // Timeline
    'timeline.experiences': 'Experiences',
    'timeline.formation': 'Formation',
    
    // Experience entries
    'exp.sfr.title': 'Software Engineer (Apprenticeship)',
    'exp.sfr.company': 'SFR, Paris XV',
    'exp.sfr.description': 'Symfony Web Development, Git, bash scripting',
    'exp.imsa.title': 'Web Developer / Network Technician Intern',
    'exp.imsa.company': 'iMSA, Bobigny',
    'exp.imsa.description': 'Frontend Development, Backend Development, Cisco Catalyst switches Configuration',
    
    // Formation entries
    'form.uwtsd.title': 'MSc Cybersecurity and Digital Forensics',
    'form.uwtsd.school': 'UWTSD, Swansea UK',
    'form.uwtsd.description': 'Ethical Hacking, Digital Forensics, Incident Response',
    'form.isep.title': 'Master\'s in Cybersecurity Engineering',
    'form.isep.school': 'ISEP, Paris',
    'form.isep.description': 'Network Routing, Cybersecurity, Risk Management & Auditing, Virtualization, Big Data',
    'form.cpge.title': 'CPGE ATS',
    'form.cpge.school': 'Lycée Jean Jaurès, Argenteuil',
    'form.cpge.description': 'Mathematics, Physics, Mechanics, Electronics, French & English',
    'form.dut.title': 'Associate Degree in Computer Science & IT',
    'form.dut.school': 'Université Sorbonnes Paris Nord',
    'form.dut.description': 'Programming (Python, Java), Web Development, Network Administration & Configuration, Graph Theory',
    
    // Projects
    'projects.title': 'Personal Projects',
    'projects.viewDetails': 'View Details',
    'projects.soc.title': 'Azure SOC with Live Attack Monitoring',
    'projects.soc.description': 'Built a Security Operations Center in Azure with real-time attack visualization and SIEM integration.',
    'projects.htb.title': 'Hack The Box Certifications',
    'projects.htb.description': 'CBBH and CDSA certifications with hands-on penetration testing and defensive security skills.',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Get in touch',
    'contact.description': 'I\'m currently looking for junior SOC analyst opportunities. Feel free to reach out if you\'d like to discuss cybersecurity, technology, or potential collaborations.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    
    // SOC Project Detail
    'soc.backButton': '← Back to Projects',
    'soc.title': 'Azure Homelab SOC with Live Attack Monitoring',
    'soc.overview.title': '🛡️ Project Overview',
    'soc.overview.description': 'Built a fully functional Security Operations Center from scratch using Microsoft Azure. This hands-on cybersecurity project demonstrates real-world threat detection capabilities by creating an intentionally vulnerable Windows 10 honeypot VM that attracted over 26,000+ failed login attempts from attackers worldwide within 24 hours. The project showcases end-to-end SIEM implementation, log analysis, and geospatial threat visualization using enterprise-grade security tools.',
    'soc.objectives.title': '🎯 Project Objectives',
    'soc.objectives.1': 'Create a vulnerable VM as a honeypot to attract real attacks',
    'soc.objectives.2': 'Set up centralized logging and monitoring infrastructure',
    'soc.objectives.3': 'Implement SIEM capabilities using Microsoft Sentinel',
    'soc.objectives.4': 'Analyze and visualize real-world attack patterns',
    'soc.objectives.5': 'Build interactive dashboards for threat intelligence',
    'soc.stats.title': '🚨 Real Attack Statistics',
    'soc.stats.1': 'Attack Volume: 26,000+ failed RDP login attempts from Poland alone',
    'soc.stats.2': 'Geographic Spread: 13,300+ attempts from Belgium, 13,300+ from South America',
    'soc.stats.3': 'Discovery Speed: VM discovered and attacked within minutes of deployment',
    'soc.stats.4': 'Attack Rate: 400+ attempts per minute during peak activity',
    'soc.stats.5': 'Common Attack Vectors: RDP brute force (Event ID 4625)',
    'soc.stats.6': 'Attacker Usernames: admin, administrator, user, employee (most common)',
    'soc.architecture.title': '🔧 Architecture & Setup',
    'soc.implementation.title': '⚙️ Detailed Implementation Process',
    'soc.kql.title': '🔍 Advanced KQL Queries & Analysis',
    'soc.analysis.title': '📊 Comprehensive Attack Analysis Results',
    'soc.insights.title': '🛡️ Security Insights & Lessons Learned',
    'soc.cost.title': '💰 Cost Management & Optimization',
    
    // SOC Architecture Details
    'soc.architecture.azurevm': 'Azure VM: Windows 10 virtual machine exposed to internet',
    'soc.architecture.honeypot': 'Honeypot Configuration: Disabled firewall, enabled RDP',
    'soc.architecture.loganalytics': 'Log Analytics Workspace: Central log collection point',
    'soc.architecture.sentinel': 'Microsoft Sentinel: Cloud-native SIEM solution',
    'soc.architecture.powershell': 'PowerShell Scripts: Custom log parsing and geolocation',
    'soc.architecture.kql': 'KQL Queries: Advanced threat hunting and analysis',
    
    // SOC Implementation Phases
    'soc.phase1.title': 'Phase 1: Azure Infrastructure Setup',
    'soc.phase1.duration': 'Duration: 15 minutes',
    'soc.phase1.1': 'Created free Azure subscription with $200 credit',
    'soc.phase1.2': 'Established Resource Group "RG-SOC-Lab" in East US 2',
    'soc.phase1.3': 'Deployed Virtual Network (10.0.0.0/16) with default subnet',
    'soc.phase1.4': 'Configured network security group with custom "DANGER_ALLOW_ALL" rule',
    
    'soc.phase2.title': 'Phase 2: Honeypot VM Configuration',
    'soc.phase2.duration': 'Duration: 20 minutes',
    'soc.phase2.1': 'Deployed Windows 10 VM (Standard_DS2_v3) with public IP',
    'soc.phase2.2': 'Disabled Windows Defender Firewall across all profiles',
    'soc.phase2.3': 'Opened RDP port 3389 to 0.0.0.0/0 (any source)',
    'soc.phase2.4': 'Created local admin account with weak credentials for testing',
    'soc.phase2.5': 'Verified external connectivity via ping tests',
    
    'soc.phase3.title': 'Phase 3: Centralized Logging Implementation',
    'soc.phase3.duration': 'Duration: 25 minutes',
    'soc.phase3.1': 'Created Log Analytics Workspace "LAW-SOC-Lab"',
    'soc.phase3.2': 'Installed Azure Monitor Agent extension on VM',
    'soc.phase3.3': 'Configured Data Collection Rule (DCR) for Windows Security Events',
    'soc.phase3.4': 'Verified log ingestion with KQL queries (security event table)',
    
    'soc.phase4.title': 'Phase 4: SIEM Integration & Enhancement',
    'soc.phase4.duration': 'Duration: 30 minutes',
    'soc.phase4.1': 'Deployed Microsoft Sentinel (31-day free trial)',
    'soc.phase4.2': 'Connected Sentinel to Log Analytics Workspace',
    'soc.phase4.3': 'Installed Windows Security Events connector',
    'soc.phase4.4': 'Created geolocation watchlist with 55,000+ IP-to-location mappings',
    
    'soc.phase5.title': 'Phase 5: Threat Visualization & Analysis',
    'soc.phase5.duration': 'Duration: 45 minutes',
    'soc.phase5.1': 'Developed custom KQL queries for failed authentication analysis',
    'soc.phase5.2': 'Created interactive world map workbook in Sentinel',
    'soc.phase5.3': 'Implemented automatic IP geolocation lookup using watchlist joins',
    'soc.phase5.4': 'Configured real-time attack visualization with color-coded threat levels',
    
    // SOC KQL Queries
    'soc.kql.failed.title': 'Failed Authentication Analysis Query:',
    'soc.kql.attack.title': 'Attack Pattern Analysis:',
    
    // SOC Analysis Results
    'soc.findings.volume.title': 'Volume & Velocity',
    'soc.findings.volume.1': 'Total Failed Attempts: 52,000+ in first 24 hours',
    'soc.findings.volume.2': 'Peak Attack Rate: 400 attempts/minute',
    'soc.findings.volume.3': 'Average Session Duration: 2-3 minutes per attacker',
    'soc.findings.volume.4': 'Discovery Time: VM found within 5 minutes of deployment',
    
    'soc.findings.geo.title': 'Geographic Distribution',
    'soc.findings.geo.1': 'Primary Sources: Poland (26K), Belgium (13.3K), Brazil (13.3K)',
    'soc.findings.geo.2': 'Total Countries: 15+ countries represented',
    'soc.findings.geo.3': 'Attack Concentration: 70% from Eastern Europe/South America',
    'soc.findings.geo.4': 'Time Zones: 24/7 continuous attacks across all time zones',
    
    'soc.findings.methods.title': 'Attack Methodologies',
    'soc.findings.methods.1': 'Protocol: 100% RDP brute force (port 3389)',
    'soc.findings.methods.2': 'Top Usernames: admin (35%), administrator (25%), user (15%)',
    'soc.findings.methods.3': 'Password Patterns: Dictionary attacks, common passwords',
    'soc.findings.methods.4': 'Automation Level: 95%+ automated bot traffic',
    
    // SOC Security Insights
    'soc.insights.1': 'Internet Exposure Risk: Any internet-facing system is discovered within minutes',
    'soc.insights.2': 'Attack Automation: Modern threats are highly automated and persistent',
    'soc.insights.3': 'Global Threat Landscape: Attacks originate from diverse geographic locations',
    'soc.insights.4': 'Default Credential Risk: Common usernames are targeted immediately',
    'soc.insights.5': 'Monitoring Necessity: Real-time logging and alerting are critical for detection',
    'soc.insights.6': 'Defense in Depth: Multiple security layers needed (network + host firewalls)',
    
    // SOC Cost Details
    'soc.cost.1': 'VM Cost: Standard_DS2_v3 at ~$70/month (turned off after lab)',
    'soc.cost.2': 'Log Analytics: First 5GB/day free, then pay-per-GB ingested',
    'soc.cost.3': 'Sentinel: 31-day free trial, then ~$2/GB after trial',
    'soc.cost.4': 'Total Lab Cost: Under $5 for 24-hour experiment',
    'soc.cost.5': 'Cost Control: Implemented automatic VM shutdown at 3 AM',
    
    // HTB Project Detail
    'htb.backButton': '← Back to Projects',
    'htb.title': 'Hack The Box Certifications & Achievements',
    'htb.overview.title': '🎯 Hack The Box Journey',
    'htb.overview.description': 'Actively engaged in Hack The Box\'s comprehensive cybersecurity training platform, pursuing industry-recognized certifications that validate hands-on penetration testing and defensive security skills. HTB provides real-world scenarios and vulnerable machines that simulate actual enterprise environments, offering practical experience beyond theoretical knowledge.',
    'htb.certifications.title': '🏆 Certifications',
    'htb.cbbh.title': '🐛 CBBH - Certified Bug Bounty Hunter',
    'htb.cbbh.status': 'Status: In Progress / Completed',
    'htb.cbbh.focus': 'Focus Areas:',
    'htb.cdsa.title': '🛡️ CDSA - Certified Defensive Security Analyst',
    'htb.cdsa.status': 'Status: In Progress / Completed',
    'htb.cdsa.focus': 'Focus Areas:',
    'htb.achievements.title': '🎮 Platform Achievements',
    'htb.skills.title': '💻 Technical Skills Demonstrated',
    'htb.learning.title': '📚 Key Learning Outcomes',
    'htb.integration.title': '🔗 Portfolio Integration',
    'htb.integration.text': 'The skills gained through Hack The Box directly complement my other cybersecurity projects, including the Azure SOC Lab and vulnerability assessment work. This hands-on experience provides the practical foundation needed for effective security operations and penetration testing roles.',
    
    // HTB Certification Details
    'htb.cbbh.skill.1': 'Web Application Security Testing',
    'htb.cbbh.skill.2': 'OWASP Top 10 Vulnerabilities',
    'htb.cbbh.skill.3': 'SQL Injection & Cross-Site Scripting (XSS)',
    'htb.cbbh.skill.4': 'Authentication & Authorization Bypasses',
    'htb.cbbh.skill.5': 'Server-Side Request Forgery (SSRF)',
    'htb.cbbh.skill.6': 'File Upload Vulnerabilities',
    'htb.cbbh.skill.7': 'API Security Testing',
    'htb.cbbh.skill.8': 'Bug Bounty Methodology & Reporting',
    
    'htb.cdsa.skill.1': 'Security Information & Event Management (SIEM)',
    'htb.cdsa.skill.2': 'Incident Response & Digital Forensics',
    'htb.cdsa.skill.3': 'Threat Hunting & Analysis',
    'htb.cdsa.skill.4': 'Malware Analysis & Reverse Engineering',
    'htb.cdsa.skill.5': 'Network Traffic Analysis',
    'htb.cdsa.skill.6': 'Log Analysis & Correlation',
    'htb.cdsa.skill.7': 'Threat Intelligence Integration',
    'htb.cdsa.skill.8': 'Security Operations Center (SOC) Procedures',
    
    // HTB Achievements
    'htb.machines.title': 'Machines Owned',
    'htb.machines.easy': 'Easy Machines: X completed',
    'htb.machines.medium': 'Medium Machines: X completed',
    'htb.machines.hard': 'Hard Machines: X completed',
    'htb.machines.insane': 'Insane Machines: X completed',
    
    'htb.skill.title': 'Skill Development',
    'htb.skill.rank': 'Current Rank: [Your HTB Rank]',
    'htb.skill.points': 'Points Earned: [Your Points]',
    'htb.skill.badges': 'Badges Unlocked: [Number] badges',
    'htb.skill.active': 'Active Since: [Date]',
    
    'htb.tracks.title': 'Specialized Tracks',
    'htb.tracks.1': 'Web Application Penetration Testing',
    'htb.tracks.2': 'Active Directory Exploitation',
    'htb.tracks.3': 'Buffer Overflow Techniques',
    'htb.tracks.4': 'Privilege Escalation Methods',
    
    // HTB Technical Skills
    'htb.tech.pentest.title': 'Penetration Testing',
    'htb.tech.pentest.1': 'Nmap & Network Reconnaissance',
    'htb.tech.pentest.2': 'Burp Suite Professional',
    'htb.tech.pentest.3': 'Metasploit Framework',
    'htb.tech.pentest.4': 'Custom Exploit Development',
    'htb.tech.pentest.5': 'Privilege Escalation Techniques',
    
    'htb.tech.defensive.title': 'Defensive Security',
    'htb.tech.defensive.1': 'Wireshark Packet Analysis',
    'htb.tech.defensive.2': 'Splunk SIEM Operations',
    'htb.tech.defensive.3': 'Volatility Memory Forensics',
    'htb.tech.defensive.4': 'YARA Rule Development',
    'htb.tech.defensive.5': 'Incident Response Procedures',
    
    'htb.tech.programming.title': 'Programming & Scripting',
    'htb.tech.programming.1': 'Python for Security Automation',
    'htb.tech.programming.2': 'PowerShell for Windows Security',
    'htb.tech.programming.3': 'Bash Scripting for Linux',
    'htb.tech.programming.4': 'SQL for Database Testing',
    'htb.tech.programming.5': 'JavaScript for Web Security',
    
    // HTB Learning Outcomes
    'htb.learning.1': 'Real-World Application: Applied theoretical knowledge to practical scenarios',
    'htb.learning.2': 'Problem-Solving: Developed systematic approach to security challenges',
    'htb.learning.3': 'Methodology: Learned industry-standard testing methodologies',
    'htb.learning.4': 'Reporting Skills: Created professional security assessment reports',
    'htb.learning.5': 'Continuous Learning: Stayed current with latest attack vectors and defenses',
    'htb.learning.6': 'Ethical Hacking: Understood legal and ethical boundaries in security testing',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    
    // Technical Skills
    'skills.title': 'Compétences Techniques',
    'skills.cyber.title': 'Cybersécurité & Opérations de Sécurité',
    'skills.cyber.description': 'Développement de compétences en cybersécurité grâce à l\'apprentissage pratique avec HackTheBox, TryHackMe, et des projets académiques. Expérience pratique en détection de menaces et réponse aux incidents.',
    'skills.dev.title': 'Développement Web & Compétences Techniques',
    'skills.dev.description': 'Expérience en développement full-stack à travers des projets académiques et l\'apprentissage chez SFR. Base solide en technologies web et scripts d\'automatisation.',
    'skills.network.title': 'Réseau & Infrastructure',
    'skills.network.description': 'Compétences en administration réseau et sécurité acquises grâce aux cours et à l\'expérience en stage. Compréhension des protocoles réseau et gestion d\'infrastructure.',
    'skills.techUsed': 'Technologies utilisées :',
    'skills.techStack': 'Stack technique :',
    
    // Timeline
    'timeline.experiences': 'Expériences',
    'timeline.formation': 'Formation',
    
    // Experience entries
    'exp.sfr.title': 'Software Engineer (Apprentissage)',
    'exp.sfr.company': 'SFR, Paris XV',
    'exp.sfr.description': 'Développement Web Symfony, Git, scripts bash',
    'exp.imsa.title': 'Stage Développeur Web / Technicien Réseau',
    'exp.imsa.company': 'iMSA, Bobigny',
    'exp.imsa.description': 'Développement Frontend, Développement Backend, Configuration de commutateurs Cisco Catalyst',
    
    // Formation entries
    'form.uwtsd.title': 'MSc Cybersecurity and Digital Forensics',
    'form.uwtsd.school': 'UWTSD, Swansea UK',
    'form.uwtsd.description': 'Ethical Hacking, Digital Forensics, Réponse aux Incidents',
    'form.isep.title': 'Diplome Ingénieur Informatique spécialité Cybersécurité',
    'form.isep.school': 'ISEP, Paris',
    'form.isep.description': 'Routage Réseau, Cybersécurité, Gestion des Risques & Audit, Virtualisation, Big Data',
    'form.cpge.title': 'CPGE ATS',
    'form.cpge.school': 'Lycée Jean Jaurès, Argenteuil',
    'form.cpge.description': 'Mathématiques, Physique, Mécanique, Électronique, Français & Anglais',
    'form.dut.title': 'DUT Informatique',
    'form.dut.school': 'Université Sorbonnes Paris Nord',
    'form.dut.description': 'Programmation (Python, Java), Développement Web, Administration & Configuration Réseau, Théorie des Graphes',
    
    // Projects
    'projects.title': 'Projets Personnels',
    'projects.viewDetails': 'Voir Détails',
    'projects.soc.title': 'SOC Azure avec Surveillance d\'Attaques en Temps Réel',
    'projects.soc.description': 'Construction d\'un Centre d\'Opérations de Sécurité dans Azure avec visualisation d\'attaques en temps réel et intégration SIEM.',
    'projects.htb.title': 'Certifications Hack The Box',
    'projects.htb.description': 'Certifications CBBH et CDSA avec compétences pratiques en tests d\'intrusion et sécurité défensive.',
    
    // Contact
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Entrer en contact',
    'contact.description': 'Je recherche actuellement des opportunités d\'analyste SOC junior. N\'hésitez pas à me contacter si vous souhaitez discuter de cybersécurité, de technologie ou de collaborations potentielles.',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    
    // SOC Project Detail
    'soc.backButton': '← Retour aux Projets',
    'soc.title': 'SOC Azure avec Surveillance d\'Attaques en Temps Réel',
    'soc.overview.title': '🛡️ Aperçu du Projet',
    'soc.overview.description': 'Construction d\'un SOC entièrement fonctionnel en utilisant Microsoft Azure. Ce projet de cybersécurité démontre des capacités de détection de menaces en temps réel en créant une VM Windows 10 honeypot intentionnellement vulnérable qui a attiré plus de 26 000+ tentatives de connexion échouées d\'attaquants du monde entier en 24 heures. Le projet présente l\'implémentation SIEM de bout en bout, l\'analyse de logs et la visualisation géospatiale des menaces.',
    'soc.objectives.title': '🎯 Objectifs du Projet',
    'soc.objectives.1': 'Créer une VM vulnérable comme honeypot pour attirer de vraies attaques',
    'soc.objectives.2': 'Mettre en place une infrastructure centralisée de logging et monitoring',
    'soc.objectives.3': 'Implémenter les capacités SIEM avec Microsoft Sentinel',
    'soc.objectives.4': 'Analyser et visualiser les patterns d\'attaques du monde réel',
    'soc.objectives.5': 'Construire des tableaux de bord interactifs pour la threat intelligence',
    'soc.stats.title': '🚨 Statistiques d\'Attaques Réelles',
    'soc.stats.1': 'Volume d\'Attaques : 26 000+ tentatives RDP échouées de Pologne uniquement',
    'soc.stats.2': 'Répartition Géographique : 13 300+ tentatives de Belgique, 13 300+ d\'Amérique du Sud',
    'soc.stats.3': 'Vitesse de Découverte : VM découverte et attaquée en quelques minutes après déploiement',
    'soc.stats.4': 'Taux d\'Attaque : 400+ tentatives par minute durant l\'activité de pointe',
    'soc.stats.5': 'Vecteurs d\'Attaque Communs : Brute force RDP (Event ID 4625)',
    'soc.stats.6': 'Noms d\'utilisateur les plus communs (utilisés par les attaquants) : admin, administrator, user, employee',
    'soc.architecture.title': '🔧 Architecture & Configuration',
    'soc.implementation.title': '⚙️ Processus d\'Implémentation Détaillé',
    'soc.kql.title': '🔍 Requêtes KQL Avancées & Analyse',
    'soc.analysis.title': '📊 Résultats d\'Analyse d\'Attaques Complets',
    'soc.insights.title': '🛡️ Insights Sécurité & Leçons Apprises',
    'soc.cost.title': '💰 Gestion & Optimisation des Coûts',
    
    // SOC Architecture Details
    'soc.architecture.azurevm': 'Machine virtuelle Windows 10 exposée à internet',
    'soc.architecture.honeypot': 'Pare-feu désactivé, RDP activé',
    'soc.architecture.loganalytics': 'Point de collecte central des logs',
    'soc.architecture.sentinel': 'Solution SIEM cloud-native',
    'soc.architecture.powershell': 'Analyse de logs personnalisée et géolocalisation',
    'soc.architecture.kql': 'Requêtes KQL : Chasse aux menaces et analyse avancées',
    
    // SOC Implementation Phases
    'soc.phase1.title': 'Phase 1 : Configuration Infrastructure Azure',
    'soc.phase1.duration': 'Durée : 15 minutes',
    'soc.phase1.1': 'Création d\'un abonnement Azure gratuit avec crédit de 200$',
    'soc.phase1.2': 'Établissement du Groupe de Ressources "RG-SOC-Lab" dans East US 2',
    'soc.phase1.3': 'Déploiement du Réseau Virtuel (10.0.0.0/16) avec sous-réseau par défaut',
    'soc.phase1.4': 'Configuration du groupe de sécurité réseau avec règle personnalisée "DANGER_ALLOW_ALL"',
    
    'soc.phase2.title': 'Phase 2 : Configuration VM Honeypot',
    'soc.phase2.duration': 'Durée : 20 minutes',
    'soc.phase2.1': 'Déploiement VM Windows 10 (Standard_DS2_v3) avec IP publique',
    'soc.phase2.2': 'Désactivation du Pare-feu Windows Defender sur tous les profils',
    'soc.phase2.3': 'Ouverture du port RDP 3389 vers 0.0.0.0/0 (toute source)',
    'soc.phase2.4': 'Création d\'un compte admin local avec identifiants faibles pour test',
    'soc.phase2.5': 'Vérification de la connectivité externe via tests ping',
    
    'soc.phase3.title': 'Phase 3 : Implémentation Logging Centralisé',
    'soc.phase3.duration': 'Durée : 25 minutes',
    'soc.phase3.1': 'Création de l\'Espace de Travail Log Analytics "LAW-SOC-Lab"',
    'soc.phase3.2': 'Installation de l\'extension Azure Monitor Agent sur VM',
    'soc.phase3.3': 'Configuration de la Règle de Collecte de Données (DCR) pour Événements Sécurité Windows',
    'soc.phase3.4': 'Vérification de l\'ingestion des logs avec requêtes KQL (table événements sécurité)',
    
    'soc.phase4.title': 'Phase 4 : Intégration SIEM & Amélioration',
    'soc.phase4.duration': 'Durée : 30 minutes',
    'soc.phase4.1': 'Déploiement Microsoft Sentinel (essai gratuit 31 jours)',
    'soc.phase4.2': 'Connexion Sentinel à l\'Espace de Travail Log Analytics',
    'soc.phase4.3': 'Installation du connecteur Windows Security Events',
    'soc.phase4.4': 'Création de watchlist géolocalisation avec 55 000+ mappages IP-localisation',
    
    'soc.phase5.title': 'Phase 5 : Visualisation & Analyse des Menaces',
    'soc.phase5.duration': 'Durée : 45 minutes',
    'soc.phase5.1': 'Développement requêtes KQL personnalisées pour analyse authentification échouée',
    'soc.phase5.2': 'Création workbook carte du monde interactive dans Sentinel',
    'soc.phase5.3': 'Implémentation lookup géolocalisation IP automatique avec jointures watchlist',
    'soc.phase5.4': 'Configuration visualisation attaques temps réel avec niveaux menace codés couleur',
    
    // SOC KQL Queries
    'soc.kql.failed.title': 'Requête Analyse Authentification Échouée :',
    'soc.kql.attack.title': 'Analyse Patterns d\'Attaque :',
    
    // SOC Analysis Results
    'soc.findings.volume.title': 'Volume & Vélocité',
    'soc.findings.volume.1': 'Total Tentatives Échouées : 52 000+ dans les premières 24 heures',
    'soc.findings.volume.2': 'Taux d\'Attaque de Pointe : 400 tentatives/minute',
    'soc.findings.volume.3': 'Durée Moyenne de Session : 2-3 minutes par attaquant',
    'soc.findings.volume.4': 'Temps de Découverte : VM trouvée en 5 minutes après déploiement',
    
    'soc.findings.geo.title': 'Distribution Géographique',
    'soc.findings.geo.1': 'Sources Principales : Pologne (26K), Belgique (13,3K), Brésil (13,3K)',
    'soc.findings.geo.2': 'Total Pays : 15+ pays représentés',
    'soc.findings.geo.3': 'Concentration Attaques : 70% d\'Europe de l\'Est/Amérique du Sud',
    'soc.findings.geo.4': 'Fuseaux Horaires : Attaques continues 24h/24 dans tous les fuseaux',
    
    'soc.findings.methods.title': 'Méthodologies d\'Attaque',
    'soc.findings.methods.1': 'Protocole : 100% force brute RDP (port 3389)',
    'soc.findings.methods.2': 'Noms d\'utilisateur principaux : admin (35%), administrator (25%), user (15%)',
    'soc.findings.methods.3': 'Patterns de mots de passe : Attaques dictionnaire, mots de passe communs',
    'soc.findings.methods.4': 'Niveau d\'Automatisation : 95%+ trafic bot automatisé',
    
    // SOC Security Insights
    'soc.insights.1': 'Risque Exposition Internet : Tout système exposé à internet est découvert en minutes',
    'soc.insights.2': 'Automatisation Attaques : Les menaces modernes sont hautement automatisées et persistantes',
    'soc.insights.3': 'Paysage Global des Menaces : Les attaques proviennent de diverses localisations géographiques',
    'soc.insights.4': 'Risque Identifiants par Défaut : Les noms d\'utilisateur communs sont ciblés immédiatement',
    'soc.insights.5': 'Nécessité Surveillance : Le logging et alertes temps réel sont critiques pour la détection',
    'soc.insights.6': 'Défense en Profondeur : Plusieurs couches de sécurité nécessaires (pare-feux réseau + hôte)',
    
    // SOC Cost Details
    'soc.cost.1': 'Coût VM : Standard_DS2_v3 à ~70$/mois (éteinte après lab)',
    'soc.cost.2': 'Log Analytics : Premiers 5GB/jour gratuits, puis paiement par GB ingéré',
    'soc.cost.3': 'Sentinel : Essai gratuit 31 jours, puis ~2$/GB après essai',
    'soc.cost.4': 'Coût Total Lab : Moins de 5$ pour expérience 24 heures',
    'soc.cost.5': 'Contrôle Coût : Arrêt automatique VM implémenté à 3h du matin',
    
    // HTB Project Detail
    'htb.backButton': '← Retour aux Projets',
    'htb.title': 'Certifications et Réalisations Hack The Box',
    'htb.overview.title': '🎯 Parcours Hack The Box',
    'htb.overview.description': 'Engagement actif dans la plateforme de formation complète en cybersécurité Hack The Box, poursuivant des certifications reconnues par l\'industrie qui valident les compétences pratiques en tests d\'intrusion et sécurité défensive. HTB fournit des scenarios du monde réel et des machines vulnérables qui simulent de véritables environnements d\'entreprise, offrant une expérience pratique au-delà des connaissances théoriques.',
    'htb.certifications.title': '🏆 Certifications',
    'htb.cbbh.title': '🐛 CBBH - Certified Bug Bounty Hunter',
    'htb.cbbh.status': 'Statut : En Cours / Complétée',
    'htb.cbbh.focus': 'Domaines d\'Expertise :',
    'htb.cdsa.title': '🛡️ CDSA - Certified Defensive Security Analyst',
    'htb.cdsa.status': 'Statut : En Cours / Complétée',
    'htb.cdsa.focus': 'Domaines d\'Expertise :',
    'htb.achievements.title': '🎮 Réalisations sur la Plateforme',
    'htb.skills.title': '💻 Compétences Techniques Démontrées',
    'htb.learning.title': '📚 Acquis d\'Apprentissage Clés',
    'htb.integration.title': '🔗 Intégration Portfolio',
    'htb.integration.text': 'Les compétences acquises via Hack The Box complètent directement mes autres projets de cybersécurité, y compris le Lab SOC Azure et le travail d\'évaluation de vulnérabilités. Cette expérience pratique fournit la base pratique nécessaire pour des rôles efficaces en opérations de sécurité et tests d\'intrusion.',
    
    // HTB Certification Details
    'htb.cbbh.skill.1': 'Tests de Sécurité d\'Applications Web',
    'htb.cbbh.skill.2': 'Vulnérabilités OWASP Top 10',
    'htb.cbbh.skill.3': 'Injection SQL & Cross-Site Scripting (XSS)',
    'htb.cbbh.skill.4': 'Contournements d\'Authentification & Autorisation',
    'htb.cbbh.skill.5': 'Server-Side Request Forgery (SSRF)',
    'htb.cbbh.skill.6': 'Vulnérabilités de Téléversement de Fichiers',
    'htb.cbbh.skill.7': 'Tests de Sécurité API',
    'htb.cbbh.skill.8': 'Méthodologie & Reporting Bug Bounty',
    
    'htb.cdsa.skill.1': 'Gestion Information & Événements de Sécurité (SIEM)',
    'htb.cdsa.skill.2': 'Réponse aux Incidents & Investigation Numérique',
    'htb.cdsa.skill.3': 'Chasse aux Menaces & Analyse',
    'htb.cdsa.skill.4': 'Analyse de Malware & Rétro-ingénierie',
    'htb.cdsa.skill.5': 'Analyse de Trafic Réseau',
    'htb.cdsa.skill.6': 'Analyse & Corrélation de Logs',
    'htb.cdsa.skill.7': 'Intégration Threat Intelligence',
    'htb.cdsa.skill.8': 'Procédures Centre d\'Opérations de Sécurité (SOC)',
    
    // HTB Achievements
    'htb.machines.title': 'Machines Possédées',
    'htb.machines.easy': 'Machines Faciles : X complétées',
    'htb.machines.medium': 'Machines Moyennes : X complétées',
    'htb.machines.hard': 'Machines Difficiles : X complétées',
    'htb.machines.insane': 'Machines Insanes : X complétées',
    
    'htb.skill.title': 'Développement Compétences',
    'htb.skill.rank': 'Rang Actuel : [Votre Rang HTB]',
    'htb.skill.points': 'Points Gagnés : [Vos Points]',
    'htb.skill.badges': 'Badges Débloqués : [Nombre] badges',
    'htb.skill.active': 'Actif Depuis : [Date]',
    
    'htb.tracks.title': 'Parcours Spécialisés',
    'htb.tracks.1': 'Tests d\'Intrusion Applications Web',
    'htb.tracks.2': 'Exploitation Active Directory',
    'htb.tracks.3': 'Techniques Buffer Overflow',
    'htb.tracks.4': 'Méthodes d\'Escalade de Privilèges',
    
    // HTB Technical Skills
    'htb.tech.pentest.title': 'Tests d\'Intrusion',
    'htb.tech.pentest.1': 'Nmap & Reconnaissance Réseau',
    'htb.tech.pentest.2': 'Burp Suite Professional',
    'htb.tech.pentest.3': 'Framework Metasploit',
    'htb.tech.pentest.4': 'Développement d\'Exploits Personnalisés',
    'htb.tech.pentest.5': 'Techniques d\'Escalade de Privilèges',
    
    'htb.tech.defensive.title': 'Sécurité Défensive',
    'htb.tech.defensive.1': 'Analyse de Paquets Wireshark',
    'htb.tech.defensive.2': 'Opérations SIEM Splunk',
    'htb.tech.defensive.3': 'Investigation Mémoire Volatility',
    'htb.tech.defensive.4': 'Développement de Règles YARA',
    'htb.tech.defensive.5': 'Procédures de Réponse aux Incidents',
    
    'htb.tech.programming.title': 'Programmation & Scripts',
    'htb.tech.programming.1': 'Python pour Automatisation Sécurité',
    'htb.tech.programming.2': 'PowerShell pour Sécurité Windows',
    'htb.tech.programming.3': 'Scripts Bash pour Linux',
    'htb.tech.programming.4': 'SQL pour Tests de Bases de Données',
    'htb.tech.programming.5': 'JavaScript pour Sécurité Web',
    
    // HTB Learning Outcomes
    'htb.learning.1': 'Application Monde Réel : Application des connaissances théoriques aux scénarios pratiques',
    'htb.learning.2': 'Résolution de Problèmes : Développement d\'approche systématique aux défis de sécurité',
    'htb.learning.3': 'Méthodologie : Apprentissage des méthodologies de test standards de l\'industrie',
    'htb.learning.4': 'Compétences Reporting : Création de rapports d\'évaluation de sécurité professionnels',
    'htb.learning.5': 'Apprentissage Continu : Maintien à jour avec les derniers vecteurs d\'attaque et défenses',
    'htb.learning.6': 'Piratage Éthique : Compréhension des limites légales et éthiques dans les tests de sécurité',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
