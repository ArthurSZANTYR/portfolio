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
                        <p>I believe working fast keeps you focused on the essence of your project - no time for bullshit - be user-centered</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/designImage.png")}
                        alt="design-image"
                        className={styles.aboutIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>You can do more than you think</h3>
                        <p>It can be easier to achieve big things because exciting projects are more motivating</p>
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
