import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1 class="name">MILANA MATSUKA</h1>
               <p> <h1 class="words">DEVELOPER. CREATOR. VISIONARY.</h1></p>
               <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <h1 class="resume"><div class="inner">RESUME</div></h1>
            </NavLink>
            <div class="icons">
                <h1>Skills</h1>
                <h1 class="icon"><FontAwesomeIcon icon={faEnvelope} color="#000000"/></h1></div>
            </div>
        </div>
    )
}

export default Home;