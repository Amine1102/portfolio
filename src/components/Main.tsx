import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import cr7 from '../assets/images/cr7.png';
import moi from '../assets/images/moi.png';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={moi} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/amine1102" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amine-laimeche/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Amine Laimeche</h1>
          <p>Cybersecurity Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/amine1102" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amine-laimeche/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;