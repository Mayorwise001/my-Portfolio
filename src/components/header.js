import { motion } from 'framer-motion';
import ThemeToggle from './toggletheme';
import '../stylescss/header.css';
import photo from '../images/downarrow4b.png'
import About from './About.js'
import '../stylescss/about.css'
import { useState, useEffect } from 'react';
import SkillsSection from '../components/SkillsSection.js'
import Featured from '../components/Featured.js';
import Contact from '../components/contact.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faProjectDiagram, faEnvelope, faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

const HeroSection = () => {

  const [isHomeActive, setIsHomeActive] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isSkillsActive, setIsSkillsActive] = useState(false);
  const [isFeaturedActive, setIsFeaturedActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  }


  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', setActive: setIsHomeActive },
        { id: 'about', setActive: setIsAboutActive },
        { id: 'skills', setActive: setIsSkillsActive },
        { id: 'featured', setActive: setIsFeaturedActive },
        { id: 'contact', setActive: setIsContactActive },
      ];
  
      let closestSection = null;
      let closestDistance = Number.MAX_VALUE;
  
      sections.forEach(({ id, setActive }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top);
  
          if (distanceFromTop < closestDistance) {
            closestDistance = distanceFromTop;
            closestSection = setActive;
          }
  
          // Reset all sections to inactive
          setActive(false);
          
        }
      });
  
      // Set only the closest section to active
      if (closestSection) closestSection(true);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the scroll event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="hero" id="home">
      <div className="hero-text">
      <motion.h1
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <span className='hero-head'>Hi, I am Tomosori <br></br></span>
          <span className='hero-head'>Joseph Mayowa,</span>
          </motion.h1>
        <motion.h1
          className="highlight"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          transition={{ delay: 0.5 }}  /* Add delay for the second line */
         >
          
          <div class="developer-roles">
  <span class="role role-1">A Frontend</span>
  <span class="role role-2">A Backend</span>
  <span class="role role-3">A Full Stack </span>
</div>
<span className='hero-head'>Web Developer</span>
          </motion.h1>
      </div>
      <div className="items-right">
      <ThemeToggle />
      <div>
    <a
      href="#home"
      style={{ color: isHomeActive ? 'red' : 'inherit' }}
      onClick={() => handleScrollToSection('home')}
    >
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
          <span className="nav-label">Home</span>
    </a>
  </div>
      <div>
      <a href='#about' style={{ color: isAboutActive ? 'red' : 'inherit' }}
      
      onClick={() => handleScrollToSection('about')}
      >
         <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
         <span className="nav-label">About</span>
        </a>
      </div>
      <div>          <a
            href="#skills"
            style={{ color: isSkillsActive ? 'red' : 'inherit' }}
            onClick={() => handleScrollToSection('skills')}
          > <span className="nav-label">Skills</span>
          <FontAwesomeIcon icon={faCode} className="nav-icon" />
          </a>
          </div>
      <div>          <a
            href="#featured"
            style={{ color: isFeaturedActive ? 'red' : 'inherit' }}
            onClick={() => handleScrollToSection('featured')}
            className="nav-link"
            >
              <span className="nav-label">Projects</span>
              <FontAwesomeIcon icon={faProjectDiagram} className="nav-icon" /></a>
          </div>
      <div>
      <a
            href="#contact"
            style={{ color: isContactActive ? 'red' : 'inherit' }}
            onClick={() => handleScrollToSection('contact')}
            className="nav-link">          <span className="nav-label">Contact</span>
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon" /></a>
          </div>
    </div>
    {/* <div class="scroll-icon" onClick={handleScrollIconClick}> */}
    <div class="scroll-icon" onClick={() => handleScrollToSection('about')}>
      <a href='#about'>
        <img src={photo} alt="Scroll Icon"/>
        </a>
        </div>

        <div className={`abouts ${aboutVisible ? 'visible' : ''}`}  id="about">
        <About/>   
        </div>  
        <div className='skills' id="skills">
          <SkillsSection/>
        </div> 


<div className='featured' id="featured">
  <Featured />

  <div id="contact" className='contacts'>
  <Contact/>
  </div>

</div>


    </header>

  );
};

export default HeroSection;
