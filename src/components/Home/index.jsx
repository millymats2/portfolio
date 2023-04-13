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
                <h1 className="name">MILANA MATSUKA</h1>
               <p> <h1 className="words">DEVELOPER. CREATOR. VISIONARY.</h1></p>
               <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <h1 class="resume"><div class="inner">RESUME</div></h1>
            </NavLink>
            <div class="skills">
                <h1 className="icon" data-hover="JAVASCRIPT"><SiJavascript/></h1>
                <h1 className="icon" data-hover="REACT"><FaReact/></h1>
                <h1 className="icon" data-hover="CSS3"><FaCss3Alt/></h1>
                <h1 className="icon" data-hover="HTML5"><AiFillHtml5/></h1>
                <h1 className="icon" data-hover="MYSQL"><GrMysql/></h1>
                <h1 className="icon" data-hover="GIT"><AiFillGithub/></h1>
                <h1 className="icon" data-hover="PHP"><BsFiletypePhp/></h1>
                <h1 className="icon" data-hover="NODE.JS"><GrNode/></h1>
                <h1 className="icon" data-hover="POSTGRESQL"><SiPostgresql/></h1>
                </div>

            </div>
        </div>
    )
}

export default Home;