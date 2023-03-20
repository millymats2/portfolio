import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoM from '../../assets/images/LogoM.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import LogoSub from '../../assets/images/Logo-Sub.png'

const Sidebar = () => (
    <div className= 'nav-bar'>
        <Link className= 'logo' to='/'>
            <img src={LogoM} alt="logo" />
            <img classname="sub-logo" src={LogoSub} alt="Milana Matsuka" />
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
                    <FontAwesomeIcon icon={faLinkedin} color="#ffffff"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/millymats2'>
                    <FontAwesomeIcon icon={faGithub} color="#ffffff"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='mailto:millymats2@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} color="#ffffff"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
