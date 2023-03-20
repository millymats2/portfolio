import { Link } from "react-router-dom";
import './index.scss';

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, I'm <br/>
                <h1 class="name">Milana Matsuka</h1>
                <br />
                Full Stack Developer
                </h1>
                <h2>DEVELOPER. CREATOR. VISIONARY</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;