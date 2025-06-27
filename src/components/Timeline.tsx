import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLanguage } from '../contexts/LanguageContext';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const { t } = useLanguage();
  
  return (
    <div id="history">
      <div className="items-container">
        <h1>{t('timeline.experiences')}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="10/2022 - 10/2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t('exp.sfr.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('exp.sfr.company')}</h4>
            <p>
              {t('exp.sfr.description')}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="04/2021 - 06/2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t('exp.imsa.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('exp.imsa.company')}</h4>
            <p>
              {t('exp.imsa.description')}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        
        <h1>{t('timeline.formation')}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="02/2025 - 05/2025"
            iconStyle={{ background: '#e74c3c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t('form.uwtsd.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('form.uwtsd.school')}</h4>
            <p>
              {t('form.uwtsd.description')}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="09/2022 - 09/2025"
            iconStyle={{ background: '#e74c3c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t('form.isep.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('form.isep.school')}</h4>
            <p>
              {t('form.isep.description')}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="09/2021 - 06/2022"
            iconStyle={{ background: '#e74c3c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t('form.cpge.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('form.cpge.school')}</h4>
            <p>
              {t('form.cpge.description')}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="09/2019 - 06/2021"
            iconStyle={{ background: '#e74c3c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t('form.dut.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('form.dut.school')}</h4>
            <p>
              {t('form.dut.description')}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;