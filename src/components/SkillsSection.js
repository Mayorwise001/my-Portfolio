// SkillsSection.js
import React from 'react';
import styles from '../stylescss/SkillsSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5, faCss3Alt, faSass, faJsSquare, faReact, faNode, faGitAlt, faGithub, faFigma, faLinux, faAdobe, faCube } from '@fortawesome/free-solid-svg-icons';
// import { faDatabase, faVial, faPaintBrush, faMagic, faFire } from '@fortawesome/free-solid-svg-icons';

import { faHtml5, faCss3Alt, faSass, faJsSquare, faReact, faNode, faGitAlt, faGithub, faFigma, faLinux, } from '@fortawesome/free-brands-svg-icons';
import { faCube, faDatabase, faVial, faPaintBrush, faMagic, faFire } from '@fortawesome/free-solid-svg-icons';


const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <h2>Tools & Skills</h2>
      <hr />

      <div className={styles.skillsCategories}>
        {/* Front-end Skills */}
        <div className={styles.skillsCategory}>
          <h3>Front-end</h3>
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
          <h3>Back-end</h3>
          <div className={styles.skillsItems}>
            <SkillItem icon={faNode} label="Node.js" />
            <SkillItem icon={faJsSquare} label="JavaScript" />
            {/* <SkillItem icon={faJsSquare} label="TypeScript" /> */}
            <SkillItem icon={faDatabase} label="MongoDB" />
            <SkillItem icon={faCube} label="Pug / Jade" />
            <SkillItem icon={faVial} label="Jest" />
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
          </div>
        </div>
      </div>

      <div className={styles.languages}>
        <p>I speak <span>English 🇬🇧</span> <span>Portuguese 🇧🇷</span> <span>French 🇫🇷</span></p>
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
