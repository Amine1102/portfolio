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
import HTBCertifications from './HTBCertifications'; // Add this import

function Project() {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
            <h1>Personal Projects</h1>
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
                            <h2>Azure SOC with Live Attack Monitoring</h2>
                        </button>
                        <p>Built a Security Operations Center in Azure with real-time attack visualization and SIEM integration.</p>
                        <button 
                            className="view-details-link"
                            onClick={() => handleProjectClick('soc')}
                        >
                            View Details
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
                            <h2>Hack The Box Certifications</h2>
                        </button>
                        <p>CBBH and CDSA certifications with hands-on penetration testing and defensive security skills.</p>
                        <button 
                            className="view-details-link"
                            onClick={() => handleProjectClick('htb')}
                        >
                            View Details
                        </button>
                    </button>
                </div>

                {/* Keep your other existing projects */}
                <div className="project">
                    <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Movie App</h2>
                    <p>Designed and coded a ReactJS movie application. Users can search for specific movies, add movies to their favorites list and view movie information and movie trailers.</p>
                </div>

                <div className="project">
                    <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Bell Canada Network Management Web Application</h2>
                    <p>Designed and coded a ReactJS web application for viewing and editing charts, visualizing network data, and managing equipment and devices for Bell Canada.</p>
                </div>

                <div className="project">
                    <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Poker Project</h2>
                    <p>Designed and coded a C++ project that determines which poker player wins a round.</p>
                </div>

                <div className="project">
                    <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Databasing Project</h2>
                    <p>Designed and coded a MySQL practice database to store and retrieve data.</p>
                </div>

                <div className="project">
                    <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Speedrun Tracker Tool</h2>
                    <p>Designed and coded a C# application that tracks race times on a daily basis, analyzes average time, and compares times with history.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;