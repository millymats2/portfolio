import './index.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { SiJavascript, SiPostgresql} from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { GrMysql, GrNode} from "react-icons/gr";
import { BsFiletypePhp} from "react-icons/bs";

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1 class="name">MILANA MATSUKA</h1>
               <p> <h1 class="words">DEVELOPER. CREATOR. VISIONARY.</h1></p>
               <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <h1 class="resume"><div class="inner">RESUME</div></h1>
            </NavLink>
            <div class="skills">
                <h1 class="icon"><SiJavascript/></h1>
                <h1 class="icon"><FaReact/></h1>
                <h1 class="icon"><FaCss3Alt/></h1>
                <h1 class="icon"><AiFillHtml5/></h1>
                <h1 class="icon"><GrMysql/></h1>
                <h1 class="icon"><AiFillGithub/></h1>
                <h1 class="icon"><BsFiletypePhp/></h1>
                <h1 class="icon"><GrNode/></h1>
                <h1 class="icon"><SiPostgresql/></h1>
                </div>

            </div>
        </div>
    )
}

export default Home;