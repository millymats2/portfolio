import './index.scss'
import React from 'react';
import strangers from "./stranger.png";
import fitness from "./fitness.png"
import ecom from "./nft.JPG"
import mikros from "./mikros.png"


const Work = () => (
        <div>
            <h1 className="story">MY PROJECTS</h1>
            <div className='about-work'>
        <div class="s">
        <h2 class="abouttext">Stranger's Things</h2>
        <img
                  src={strangers}
                  alt={strangers}
                  height={200}
                  class="pic1"
                /> 
        <h3> <a href="https://github.com/millymats2/strangersThings" className="glinks" target="_blank" rel="noreferrer">Github</a>
        <div> <a href="https://milly-and-wilson-strangers-things.netlify.app/" className="glinks" target="_blank" rel="noreferrer" > Deployed Site</a></div></h3>
      <h3 class="aboutp">Created a frontend website which acts as a Craigslist clone. A user is able to register, login, create, edit, and delete their posts as well as message other users about their posts. The main technologies used for this site included HTML, CSS, Javascript, React, Vite, and Bootstrap.</h3>
      </div>
      <div class="s">
        <h2 class="abouttext">Fitness Tracker</h2>
        <img
                  src={fitness}
                  alt={fitness}
                  height={200}
                  class="pic1"
                /> 
        <h3 class="glinks">  <a href="https://github.com/aundrina/fitnessTrackerBackend" className="glinks" target="_blank" rel="noreferrer">Github</a></h3>
      <h3 class="aboutp">Created a fullstack website used to track a users workouts. A user is able to register, login, create routines, add activities to the routines, edit, and delete their routines. The main technologies used for this site included HTML, CSS, Javascript, React, React-App, Node.js, Express,and Bootstrap.</h3>
      </div>
      <div class="s">
        <h2 class="abouttext">Ecommerce Website</h2>
        <img
                  src={ecom}
                  alt={ecom}
                  height={200}
                  class="pic1"
                /> 
        <h3 class="glinks"> <a href="https://github.com/team-repo-2209/EcomProject"className="glinks" target="_blank" rel="noreferrer">Github</a>
       <div><a href="https://youtu.be/3KLgRBtz7YU" className="glinks" target="_blank" rel="noreferrer"> Video Walkthrough</a></div></h3>
        <h3 class="aboutp">Created a fullstack website used to sell and buy Marvel NFTs. A user is able to register, login, create NFT's, add NFT's to their cart, link their account to MetaMask, and complete the purchase via MetaMask. Admins are able edit, or delete the NFTs. The main technologies used for this site included HTML, CSS, Javascript, React, React-App, Node.js, Express, Bootstrap, and Prisma.</h3>
      </div>
      <div class="s">
        <h2 class="abouttext">Mikros</h2>
        <img
                  src={mikros}
                  alt={mikros}
                  height={200}
                  class="pic1"
                /> 
        <h3 class="glinks"> <a href="https://developer.tatumgames.com/"className="glinks" target="_blank" rel="noreferrer">Deployed Site</a></h3>
        <h3 class="aboutp">Worked within a team on a fullstack website used to help promote video game creator analytics. Individual contribution included reviewing code from both internal developers and outside interns to find bugs, finding opportunities to improve, editing code to company standards for organization and optimizing coding process by streamlining JavaScript functions in order to declutter the code. The main technologies used for this site included HTML, CSS, Javascript, PHP, XAMPP, and MySQL. </h3>
      </div>
      </div>
      </div>
    )

export default Work;