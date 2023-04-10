import './index.scss'
import {Link, NavLink} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className= 'nav-bar'>
        <Link className= 'logo' to='/'>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#000000"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#000000"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#000000"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/milana-matsuka/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#000000"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/millymats2'>
                    <FontAwesomeIcon icon={faGithub} color="#000000"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='mailto:millymats2@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} color="#000000"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
