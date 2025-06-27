import React, { useState } from "react";
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import hackthebox from '../assets/images/hackthebox.png';
import '../assets/styles/Project.scss';
import SOCProject from './SOCProject';
import HTBCertifications from './HTBCertifications';
import { useLanguage } from '../contexts/LanguageContext';

function Project() {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const { t } = useLanguage();

    const handleProjectClick = (projectName: string) => {
        setSelectedProject(projectName);
    };

    const handleBackToProjects = () => {
        setSelectedProject(null);
    };

    // If a project is selected, show the detailed view
    if (selectedProject === 'soc') {
        return <SOCProject onBack={handleBackToProjects} />;
    }

    // Add this condition for HTB
    if (selectedProject === 'htb') {
        return <HTBCertifications onBack={handleBackToProjects} />;
    }

    // Default projects grid view
    return (
        <div className="projects-container" id="projects">
            <h1>{t('projects.title')}</h1>
            <div className="projects-grid">
                {/* Existing SOC Project */}
                <div className="project">
                    <button 
                        className="project-button"
                        onClick={() => handleProjectClick('soc')}
                    >
                        <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
                        <button 
                            className="project-title-button"
                            onClick={() => handleProjectClick('soc')}
                        >
                            <h2>{t('projects.soc.title')}</h2>
                        </button>
                        <p>{t('projects.soc.description')}</p>
                        <button 
                            className="view-details-link"
                            onClick={() => handleProjectClick('soc')}
                        >
                            {t('projects.viewDetails')}
                        </button>
                    </button>
                </div>

                {/* New HTB Certifications Project */}
                <div className="project">
                    <button 
                        className="project-button"
                        onClick={() => handleProjectClick('htb')}
                    >
                        <img src={hackthebox} className="zoom" alt="thumbnail" width="100%" />
                        <button 
                            className="project-title-button"
                            onClick={() => handleProjectClick('htb')}
                        >
                            <h2>{t('projects.htb.title')}</h2>
                        </button>
                        <p>{t('projects.htb.description')}</p>
                        <button 
                            className="view-details-link"
                            onClick={() => handleProjectClick('htb')}
                        >
                            {t('projects.viewDetails')}
                        </button>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Project;