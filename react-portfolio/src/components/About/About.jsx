import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Some things I believe</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="about-image" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/techImage.png")}
                        alt="tech-image"
                        className={styles.aboutIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Do things fast</h3>
                        <p>Working fast keeps you focused on what truly matters - no time for bullshit</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/designImage.png")}
                        alt="design-image"
                        className={styles.aboutIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Be user-centered</h3>
                        <p>The end user is the top priority - design for them, test with them, iterate continuously</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/smileImage.png")}
                        alt="market-image"
                        className={styles.aboutIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Smile</h3>
                        <p>A cheerful heart is good medicine, but a crushed spirit dries up the bones (Proverbs 17:22)</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
