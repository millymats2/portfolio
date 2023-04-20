import './index.scss'
import {Link, NavLink} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faEnvelopeOpen, faFeather} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className= 'nav-bar'>
        <Link className= 'logo' to='/'>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#FFFFFF"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#FFFFFF"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="work-link" to="/contact">
                <FontAwesomeIcon icon={faFeather} color="#FFFFFF"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/milana-matsuka/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/millymats2'>
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='mailto:millymats2@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} color="#FFFFFF"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
