import styles from './index.scss'
import React, { startTransition } from 'react';
import fitness from ".//images/fitness.png";
import stranger from ".//images/stranger.png";
import nft from ".//images/nft.JPG";


const Work = () => {
    return(
        <div className="container work-page">
            <h1 className='projects'>My Projects</h1>
            <div className='pics'>
           <div className='card'>
            <img
            className={styles.img}
            src={fitness}
            alt="Fitness Tracker"
      />
      </div>
      <div className='card'>
            <img
            className={styles.img}
            src={stranger}
            alt="Stranger's Things"
      />
      </div>
      <div className='card'>
            <img
            className={styles.img}
            src={nft}
            alt="Ecom Project"
      />
      </div>
      </div>
        </div>
    )
}

export default Work;