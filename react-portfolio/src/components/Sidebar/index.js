import './index.scss'
import {Link} from 'react-router-dom'
import LogoM from '../../assets/images/LogoM.png'

const Sidebar = () => (
    <div className= 'nav-bar'>
        <Link className= 'logo' to='/'>
            <img src={LogoM} alt="logo" />
        </Link>
    </div>
)

export default Sidebar
