import { motion } from 'framer-motion';
import ThemeToggle from './toggletheme';
import '../stylescss/header.css';
import photo from '../images/downarrow4b.png'
import About from './About.js'
import '../stylescss/about.css'
import { useState, useEffect } from 'react';
import SkillsSection from '../components/SkillsSection.js'
import Featured from '../components/Featured.js';
import Contact from '../components/contact.js'


const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

const HeroSection = () => {
  // const [aboutVisible, setAboutVisible] = useState(false);
  // const [isAboutActive, setIsAboutActive] = useState(false);
  // const [isAboutVisible, setIsAboutVisible] = useState(false);
  // const handleScrollIconClick = () => {
  //   setAboutVisible(true);
  //   const aboutSection = document.getElementById('about');
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: 'smooth' });
  //   }

  const [aboutVisible, setAboutVisible] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isSkillsActive, setIsSkillsActive] = useState(false);
  const [isFeaturedActive, setIsFeaturedActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  };
  }
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const aboutSection = document.getElementById('about');
  //     if (aboutSection) {
  //       const rect = aboutSection.getBoundingClientRect();
  //       // Check if the about section is in view
  //       const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
  //       setIsAboutActive(inView);

  //       if (rect.top < window.innerHeight && rect.bottom >= 0) {
  //         setIsAboutVisible(true);
  //       } else {
  //         setIsAboutVisible(false);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup the scroll event listener on component unmount
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const checkActiveSection = (id, setActiveState) => {
  //       const section = document.getElementById(id);
  //       if (section) {
  //         const rect = section.getBoundingClientRect();
          // const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    //       const inView = rect.top < window.innerHeight && rect.bottom > 0;
    //       setActiveState(inView);
    //     }
    //   };

    //   checkActiveSection('about', setIsAboutActive);
    //   checkActiveSection('skills', setIsSkillsActive);
    //   checkActiveSection('featured', setIsFeaturedActive);
    //   checkActiveSection('contact', setIsContactActive);
    // };

    // window.addEventListener('scroll', handleScroll);

    // Cleanup the scroll event listener on component unmount
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
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
    <header className="hero">
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
      <a href='#about' style={{ color: isAboutActive ? 'red' : 'inherit' }}
      
      onClick={() => handleScrollToSection('about')}
      >
      About
        </a>
      </div>
      <div>          <a
            href="#skills"
            style={{ color: isSkillsActive ? 'red' : 'inherit' }}
            onClick={() => handleScrollToSection('skills')}
          >Skills</a>
          </div>
      <div>          <a
            href="#featured"
            style={{ color: isFeaturedActive ? 'red' : 'inherit' }}
            onClick={() => handleScrollToSection('featured')}
          >Projects</a>
          </div>
      <div>
      <a
            href="#contact"
            style={{ color: isContactActive ? 'red' : 'inherit' }}
            onClick={() => handleScrollToSection('contact')}
          >Contact</a>
          </div>
    </div>
    {/* <div class="scroll-icon" onClick={handleScrollIconClick}> */}
    <div class="scroll-icon" onClick={() => handleScrollToSection('about')}>
      <a href='#about'>
        <img src={photo} alt="Scroll Icon"/>
        </a>
        </div>
        <div className={`about ${aboutVisible ? 'visible' : ''}`}  id='about'>
        <About/>   
        </div>

        <div className='skills' id="skills">
          <SkillsSection/>
        </div>   
<div className='featured' id="featured">
  <Featured />

  <div id="contact">
  <Contact/>
  </div>
  
</div>


    </header>

  );
};

export default HeroSection;
