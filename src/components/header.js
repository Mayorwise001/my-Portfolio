import { motion } from 'framer-motion';
import ThemeToggle from './toggletheme';
import '../stylescss/header.css'

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

const HeroSection = () => {
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
      <div>Hello</div>
      <div>Hello</div>
    </div>
    </header>
  );
};

export default HeroSection;
