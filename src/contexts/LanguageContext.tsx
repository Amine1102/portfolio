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
    'skills.cyber.title': 'Cybersecurity',
    'skills.cyber.description': 'Developed cybersecurity skills through hands-on learning with HackTheBox, TryHackMe, and academic projects. Built practical experience in threat detection and incident response.',
    'skills.dev.title': 'Web Development',
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
    'projects.construction': '🚧 Site under construction - New projects will be added',
    'projects.viewDetails': 'View Details',
    'projects.soc.title': 'Azure SOC with Live Attack Monitoring',
    'projects.soc.description': 'Built a Security Operations Center in Azure with real-time attack visualization and SIEM integration.',
    'projects.htb.title': 'Hack The Box Certifications',
    'projects.htb.description': 'CBBH and CDSA certifications with hands-on penetration testing and defensive security skills.',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Get in touch',
    'contact.description': 'I\'m currently looking for junior SOC analyst opportunities. Feel free to reach out !',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    
    // SOC Project Detail
    'soc.backButton': '← Back to Projects',
    'soc.title': 'Azure Homelab SOC with Live Attack Monitoring',
    'soc.overview.title': 'Project Overview',
    'soc.overview.description': 'Built a fully functional Security Operations Center from scratch using Microsoft Azure. This hands-on cybersecurity project demonstrates real-world threat detection capabilities by creating an intentionally vulnerable Windows 10 honeypot VM that attracted over 60 000 failed login attempts from attackers worldwide within 24 hours. The project showcases end-to-end SIEM implementation, log analysis, and geospatial threat visualization. The first map shows the number of failed login attempts within the first hour, the second map shows the attacks after 24 hours, and the third map shows the attacks after 48 hours.',
    'soc.objectives.title': 'Project Objectives',
    'soc.objectives.1': 'Create a vulnerable windows 10 VM as a honeypot to attract real attacks',
    'soc.objectives.2': 'Set up centralized logging and monitoring infrastructure',
    'soc.objectives.3': 'Implement SIEM capabilities using Microsoft Sentinel',
    'soc.objectives.4': 'Build interactive map',
    'soc.stats.title': 'Statistics',
    'soc.stats.1': 'Attack Volume: Almost 60 000 failed RDP login attempts from Netherland alone',
    'soc.stats.2': 'Discovery Speed: VM discovered and attacked within minutes of deployment',
    'soc.stats.3': 'Common Attack Vectors: RDP brute force (Event ID 4625)',
    'soc.stats.4': 'Most common usernames : EAST (85%), ADMINISTRATOR (11%)',
    'soc.architecture.title': 'Architecture & Setup',
    'soc.implementation.title': 'Detailed Implementation Process',
    'soc.kql.title': 'Advanced KQL Queries & Analysis',
    'soc.analysis.title': 'Comprehensive Attack Analysis Results',
    'soc.insights.title': 'Security Insights & Lessons Learned',
    'soc.cost.title': 'Cost Management & Optimization',
    
    // SOC Architecture Details
    'soc.architecture.azurevm': 'Windows 10 virtual machine exposed to internet, acts as Honeypot',
    'soc.architecture.honeypot': ' Configuration: Disabled firewall, enabled RDP',
    'soc.architecture.loganalytics': ' Central log collection point',
    'soc.architecture.sentinel': ' Cloud-native SIEM solution',
    'soc.architecture.kql': 'threat hunting and analysis',
    
    // SOC Implementation Phases
    'soc.phase1.title': 'Phase 1: Azure Infrastructure Setup',
    'soc.phase1.1': 'Created free Azure subscription with $200 credit',
    'soc.phase1.2': 'Established Resource Group in East US. I choosed this region because it is often attacked ny hackers',
    'soc.phase1.3': 'Deployed Virtual Network (10.0.0.0/16) with default subnet',
    'soc.phase1.4': 'Configured network security group with custom (unsafe) inboud rule',
    
    'soc.phase2.title': 'Phase 2: Honeypot VM Configuration',
    'soc.phase2.1': 'Deployed Windows 10 VM with public IP',
    'soc.phase2.2': 'Disabled Windows Defender Firewall',
    'soc.phase2.3': 'Opened RDP port to any source',
    'soc.phase2.4': 'Verified external connectivity via ping tests',
    
    'soc.phase3.title': 'Phase 3: Centralized Logging Implementation',
    'soc.phase3.1': 'Created Log Analytics Workspace',
    'soc.phase3.2': 'Installed Azure Monitor Agent extension on VM',
    'soc.phase3.3': 'Configured Data Collection Rule for Windows Security Events',
    'soc.phase3.4': 'Verified log ingestion with KQL queries (security event table)',
    
    'soc.phase4.title': 'Phase 4: SIEM Integration & Enhancement',
    'soc.phase4.1': 'Deployed Microsoft Sentinel',
    'soc.phase4.2': 'Connected Sentinel to Log Analytics Workspace',
    'soc.phase4.3': 'Installed Windows Security Events connector',
    'soc.phase4.4': 'Created geolocation watchlist with over 55 000 IP-to-location mappings',
    
    'soc.phase5.title': 'Phase 5: Threat Visualization & Analysis',
    'soc.phase5.1': 'Developed custom KQL queries for failed authentication analysis',
    'soc.phase5.2': 'Created interactive world map workbook in Sentinel',
    'soc.phase5.3': 'Implemented automatic IP geolocation lookup using watchlist joins',
    'soc.phase5.4': 'Configured real-time attack visualization with color',
    
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
    'htb.overview.title': 'Hack The Box Journey',
    'htb.overview.description': 'Actively engaged in Hack The Box\'s comprehensive cybersecurity training platform, pursuing industry-recognized certifications that validate hands-on penetration testing and defensive security skills. HTB provides real-world scenarios and vulnerable machines that simulate real enterprise environments, offering practical experience beyond theoretical knowledge.',
    'htb.certifications.title': 'Certifications',
    'htb.cbbh.title': 'CBBH - Certified Bug Bounty Hunter',
    'htb.cbbh.status': 'Status: In Progress',
    'htb.cbbh.focus': 'Focus Areas:',
    'htb.cdsa.title': 'CDSA - Certified Defensive Security Analyst',
    'htb.cdsa.status': 'Status: In Progress',
    'htb.cdsa.focus': 'Focus Areas:',
    'htb.achievements.title': '🎮 Platform Achievements',
    'htb.skills.title': 'Technical Skills Demonstrated',
    'htb.learning.title': 'Key Learning Outcomes',
    'htb.integration.title': 'Portfolio Integration',
    'htb.integration.text': 'The skills gained through Hack The Box directly complement my other cybersecurity project. This hands-on experience provides the practical foundation needed for effective security operations and penetration testing roles.',
    
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
    'skills.cyber.title': 'Cybersécurité ',
    'skills.cyber.description': 'Développement de compétences en cybersécurité avec HackTheBox, TryHackMe, et des projets académiques et personnels.',
    'skills.dev.title': 'Développement Web',
    'skills.dev.description': 'Expérience en développement full-stack à travers des projets académiques et mes 3 années d\'alternance chez SFR.',
    'skills.network.title': 'Réseau & Infrastructure',
    'skills.network.description': 'Compétences en administration réseau et sécurité acquises grâce aux cours et à l\'expérience en stage. Compréhension des protocoles réseau.',
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
    'exp.imsa.description': 'Développement Frontend, Développement Backend, Configuration de switch Cisco Catalyst',
    
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
    'projects.construction': '🚧 Site en construction - Nouveaux projets en cours d\'ajout',
    'projects.viewDetails': 'Voir Détails',
    'projects.soc.title': 'SOC Azure avec Surveillance d\'Attaques en Temps Réel',
    'projects.soc.description': 'Construction d\'un mini SOC dans Azure avec visualisation d\'attaques en temps réel et intégration SIEM.',
    'projects.htb.title': 'Certifications Hack The Box',
    'projects.htb.description': 'Certifications CBBH et CDSA avec compétences pratiques en tests d\'intrusion et sécurité défensive.',
    
    // Contact
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Entrer en contact',
    'contact.description': 'Je recherche un poste d\'analyste SOC junior. N\'hésitez pas à me contacter !',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    
    // SOC Project Detail
    'soc.backButton': '← Retour aux Projets',
    'soc.title': 'SOC Azure avec Surveillance d\'Attaques en Temps Réel',
    'soc.overview.title': 'Aperçu du Projet',
    'soc.overview.description': 'Construction d\'un SOC en utilisant Azure. Ce projet de cybersécurité démontre des capacités de détection de menaces en temps réel en créant une VM Windows 10 honeypot intentionnellement vulnérable qui a attiré plus de 60 000 tentatives de connexion échouées d\'attaquants du monde entier en 24 heures. Le projet présente l\'implémentation SIEM, l\'analyse de logs et la visualisation géospatiale des menaces.',
    'soc.objectives.title': 'Objectifs du Projet',
    'soc.objectives.1': 'Création une VM vulnérable comme honeypot pour attirer des hackers',
    'soc.objectives.2': 'Mise en place une infrastructure centralisée de logging et monitoring',
    'soc.objectives.3': 'Implementation de SIEM avec Microsoft Sentinel',
    'soc.objectives.4': 'Création d\'une carte interactive pour la threat intelligenced',
    'soc.stats.title': 'Statistiques ',
    'soc.stats.1': 'Volume d\'Attaques : Presque 60 000 tentatives RDP échouées du Pays bas uniquement',
    'soc.stats.2': 'Vitesse de Découverte : VM découverte et attaquée en quelques minutes après déploiement',
    'soc.stats.3': 'Vecteurs d\'Attaque Fréquent : Brute force RDP (Event ID 4625)',
    'soc.stats.4': 'Noms d\'utilisateur les plus utilisés par les attaquants : EAST, ADMINISTRATOR',
    'soc.architecture.title': 'Architecture & Configuration',
    'soc.implementation.title': 'Processus d\'Implémentation Détaillé',
    'soc.kql.title': 'Requêtes KQL Avancées & Analyse',
    'soc.analysis.title': 'Résultats d\'Analyse d\'Attaques Complets',
    'soc.insights.title': 'Insights Sécurité & Leçons Apprises',
    'soc.cost.title': 'Gestion & Optimisation des Coûts',
    
    // SOC Architecture Details
    'soc.architecture.azurevm': 'Machine virtuelle Windows 10 exposée à internet, agit comme Honeypot',
    'soc.architecture.honeypot': 'Pare-feu désactivé, RDP activé',
    'soc.architecture.loganalytics': 'Centralisation des logs',
    'soc.architecture.sentinel': 'Solution SIEM cloud-native',
    'soc.architecture.powershell': 'Analyse de logs personnalisée et géolocalisation',
    'soc.architecture.kql': 'Requêtes KQL : Chasse aux menaces et analyse avancées',
    
    // SOC Implementation Phases
    'soc.phase1.title': 'Phase 1 : Configuration Infrastructure Azure',
    'soc.phase1.1': 'Création d\'un abonnement Azure gratuit avec 200$ de crédit',
    'soc.phase1.2': 'Établissement du Groupe de Ressources dans East US 2. Cette région est très attaquée',
    'soc.phase1.3': 'Déploiement du Réseau Virtuel (10.0.0.0/16) avec sous-réseau par défaut',
    'soc.phase1.4': 'Configuration du groupe de sécurité réseau avec règle personnalisée (non sécurisée)',
    
    'soc.phase2.title': 'Phase 2 : Configuration VM Honeypot',
    'soc.phase2.1': 'Déploiement VM Windows 10 avec IP publique',
    'soc.phase2.2': 'Désactivation du Pare-feu Windows Defender',
    'soc.phase2.3': 'Ouverture du port RDP vers toute source',
    'soc.phase2.4': 'Vérification de la connectivité externe via ping',
    
    'soc.phase3.title': 'Phase 3 : Implémentation Logging Centralisé',
    'soc.phase3.1': 'Création du Log Analytics Workspace',
    'soc.phase3.2': 'Installation de l\'extension Azure Monitor Agent sur VM',
    'soc.phase3.3': 'Configuration de la Règle de Collecte de Données (DCR) pour Windows Security Events',
    'soc.phase3.4': 'Vérification de l\'ingestion des logs avec requêtes KQL',
    
    'soc.phase4.title': 'Phase 4 : Intégration SIEM & Amélioration',
    'soc.phase4.1': 'Déploiement Microsoft Sentinel',
    'soc.phase4.2': 'Connexion Sentinel à l\'Espace de Travail Log Analytics',
    'soc.phase4.3': 'Installation du connecteur Windows Security Events',
    'soc.phase4.4': 'Création de watchlist géolocalisation avec 55 000 mappages IP vers localisation',
    
    'soc.phase5.title': 'Phase 5 : Visualisation & Analyse des Menaces',
    'soc.phase5.1': 'Développement requêtes KQL personnalisées pour analyse authentification échouée',
    'soc.phase5.2': 'Création workbook carte du monde interactive dans Sentinel',
    'soc.phase5.3': 'Implémentation lookup géolocalisation IP automatique avec jointures watchlist',
    'soc.phase5.4': 'Visualisation des attaques en temps réel',
    
    // SOC KQL Queries
    'soc.kql.failed.title': 'Requête Analyse Authentification Échouée :',
    'soc.kql.attack.title': 'Analyse Patterns d\'Attaque :',
    
    // SOC Security Insights
    'soc.insights.1': 'Risque Exposition Internet : Tout système exposé à internet est découvert en quelques minutes',
    'soc.insights.2': 'Automatisation Attaques : Les menaces modernes sont hautement automatisées',
    'soc.insights.3': 'Paysage Global des Menaces : Les attaques proviennent de diverses localisations',
    'soc.insights.4': 'Risque nom d\'utilisateur : Les noms d\'utilisateur communs sont ciblés immédiatement',
    'soc.insights.5': 'Monitoring : Il est crucial d\'avoir des logs et alertes en temps réel sur les logins échoués',
    'soc.insights.6': 'Défense en Profondeur : Plusieurs couches de sécurité nécessaires (pare-feux réseau + hôte)',
    
    // HTB Project Detail
    'htb.backButton': '← Retour aux Projets',
    'htb.title': 'Certifications et Réalisations Hack The Box',
    'htb.overview.title': 'Parcours Hack The Box',
    'htb.overview.description': 'Actif sur la plateforme Hack The Box academy, suivant des certifications qui valident les compétences pratiques en tests d\'intrusion et sécurité défensive. HTB fournit des scenarios du monde réel et des machines vulnérables qui simulent de véritables environnements d\'entreprise, offrant une expérience pratique et théoriques.',
    'htb.certifications.title': 'Certifications',
    'htb.cbbh.title': 'CBBH - Certified Bug Bounty Hunter',
    'htb.cbbh.status': 'Statut : En Cours',
    'htb.cbbh.focus': 'Domaines d\'Expertise :',
    'htb.cdsa.title': 'CDSA - Certified Defensive Security Analyst',
    'htb.cdsa.status': 'Statut : En Cours',
    'htb.cdsa.focus': 'Domaines d\'Expertise :',
    'htb.achievements.title': 'Réalisations sur la Plateforme',
    'htb.skills.title': 'Compétences Techniques Démontrées',
    'htb.learning.title': 'Acquis d\'Apprentissage Clés',
    'htb.integration.title': 'Intégration Portfolio',
    'htb.integration.text': 'Les compétences acquises via Hack The Box complètent directement mon autre projet SOC Azure. Cette expérience pratique me permte d\'acquérir les bases nécessaires pour un po en opérations de sécurité et tests d\'intrusion.',
    
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
