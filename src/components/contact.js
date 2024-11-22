import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../stylescss/contact.css'

const Contact =()=>{
    return(
        <>
        <div className="container">
      <h1>Get in touch:</h1>
      <a href="tomosorijosephmayowa@gmail.com" className="email-link">tomosorijosephmayowa@gmail.com</a>
      <div className="social-icons">
        <a href="https://github.com/Mayorwise001" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem' }}/>
        </a>
        <a href="https://www.linkedin.com/in/mayowatomosori/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '2rem' }} />
        </a>
      </div>
    </div>
        </>
    )
}


export default Contact;