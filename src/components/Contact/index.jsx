import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faEnvelopeOpen, faFeather} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return(
        <div className='container contact'>
            <h1 className='contact-me'>Contact Me!</h1>
    
                <a target="_blank" className="link" rel='noreferrer' href='https://www.linkedin.com/in/milana-matsuka/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF"/>
                </a>
                <a target="_blank" className="link" rel='noreferrer' href='https://github.com/millymats2'>
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF"/>
                </a>
                <a target="_blank" className="link" rel='noreferrer' href='mailto:millymats2@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} color="#FFFFFF"/>
                </a>
    </div>
    )
}
export default Contact
