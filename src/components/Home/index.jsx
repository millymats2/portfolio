import './index.scss';
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
                <div className='position'>
               <p> <h1 className="words">DEVELOPER. CREATOR. VISIONARY.</h1></p>
            <a href="https://ivory-alli-83.tiiny.site/" className="resume-link" target="_blank" rel="noreferrer"><h1 class="resume"><div class="inner">RESUME</div></h1></a>
            <div class="coffee">
    <div class="coffee-header">
      <div class="coffee-header__buttons coffee-header__button-one"></div>
      <div class="coffee-header__buttons coffee-header__button-two"></div>
      <div class="coffee-header__display"></div>
      <div class="coffee-header__details"></div>
    </div>
    <div class="coffee-medium">
      <div class="coffe-medium__exit"></div>
      <div class="coffee-medium__arm"></div>
      <div class="coffee-medium__liquid"></div>
      <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
      <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
      <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
      <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
      <div class="coffee-medium__cup"></div>
    </div>
    <div class="coffee-footer"></div>
  </div>
            </div>
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