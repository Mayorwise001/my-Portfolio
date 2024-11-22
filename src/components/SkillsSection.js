// SkillsSection.js
import React from 'react';
import styles from '../stylescss/SkillsSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHtml5, faCss3Alt, faSass, faJsSquare, faReact, faNode, faGitAlt, faGithub, faFigma, faLinux, } from '@fortawesome/free-brands-svg-icons';
import { faCube, faDatabase, faVial, faPaintBrush, faMagic, faFire, faCode } from '@fortawesome/free-solid-svg-icons';


const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <h2>Tools & Skills</h2>
      <hr />

      <div className={styles.skillsCategories}>
        {/* Front-end Skills */}
        <div className={styles.skillsCategory}>
          <h3>Front-End</h3>
          <div className={styles.skillsItems}>
            <SkillItem icon={faHtml5} label="HTML" />
            <SkillItem icon={faCss3Alt} label="CSS" />
            <SkillItem icon={faSass} label="SASS" />
            <SkillItem icon={faJsSquare} label="JavaScript" />
            <SkillItem icon={faReact} label="React" />
            {/* <SkillItem icon={faReact} label="Redux" />
            <SkillItem icon={faReact} label="NextJS" />
            <SkillItem icon={faJsSquare} label="TypeScript" /> */}
            <SkillItem icon={faPaintBrush} label="Styled Components" />
            <SkillItem icon={faMagic} label="Framer Motion" />
</div>

          
        </div>

        {/* Back-end Skills */}
        <div className={styles.skillsCategory}>
          <h3>Back-End</h3>
          <div className={styles.skillsItems}>
            <SkillItem icon={faNode} label="Node.js" />
            <SkillItem icon={faJsSquare} label="JavaScript" />
            {/* <SkillItem icon={faJsSquare} label="TypeScript" /> */}
            <SkillItem icon={faDatabase} label="MongoDB" />
            <SkillItem icon={faCube} label="Pug / Jade" />
            <SkillItem icon={faVial} label="Jest" />
            <i class="devicon-express-original"></i>

            <span>Express</span>
          </div>
        </div>

        {/* Miscellaneous Skills */}
        <div className={styles.skillsCategory}>
          <h3>Miscellaneous</h3>
          <div className={styles.skillsItems}>
            <SkillItem icon={faGitAlt} label="Git" />
            <SkillItem icon={faGithub} label="GitHub" />
            {/* <SkillItem icon={faFire} label="Firebase" /> */}
            <SkillItem icon={faCube} label="Webpack" />
            <SkillItem icon={faLinux} label="Linux" />
            <SkillItem icon={faCode} label="Visual Studio Code" />
          </div>
        </div>
      </div>

      <div className={styles.languages}>
        <span className={styles.hello}>Say Hello</span>
      </div>
    </section>
  );
};

// A helper component to create a skill item
const SkillItem = ({ icon, label }) => (
  <div className={styles.skillItem}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
    <span>{label}</span>
  </div>
);

export default SkillsSection;
