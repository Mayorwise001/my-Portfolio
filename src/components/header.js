import { motion } from 'framer-motion';
import ThemeToggle from './toggletheme';
import '../stylescss/header.css';
import photo from '../images/downarrow4b.png'
import About from './About.js'
import '../stylescss/about.css'
import { useState, useEffect } from 'react';
import SkillsSection from '../components/SkillsSection.js'
const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

const HeroSection = () => {
  const [aboutVisible, setAboutVisible] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const handleScrollIconClick = () => {
    setAboutVisible(true);
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Check if the about section is in view
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsAboutActive(inView);

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsAboutVisible(true);
        } else {
          setIsAboutVisible(false);
        }
      }
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
          Hi, I am Tomosori <br></br>
          <span>Joseph Mayowa,</span>
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
<span>Web Developer</span>
          </motion.h1>
      </div>
      <div className="items-right">
      <ThemeToggle />
      <div>
      <a href='#about' style={{ color: isAboutActive ? 'red' : 'inherit' }}>
      About
        </a>
      </div>
      <div>Hello</div>
      <div>Hello</div>
    </div>
    <div class="scroll-icon" onClick={handleScrollIconClick}>
      <a href='#about'>
        <img src={photo} alt="Scroll Icon"/>
        </a>
        </div>
        <div className={`about ${aboutVisible ? 'visible' : ''}`}  id='about'>
        <About/>   
        </div>

        <div className='skills'>
          <SkillsSection/>
        </div>  
    </header>

  );
};

export default HeroSection;
