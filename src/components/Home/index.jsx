import './index.scss';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1 class="name">MILANA MATSUKA</h1>
               <p> <h1 class="words">DEVELOPER. CREATOR. VISIONARY.</h1></p>
               <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <p><h1 class="resume">RESUME</h1></p>
            </NavLink>
            </div>
        </div>
    )
}

export default Home;