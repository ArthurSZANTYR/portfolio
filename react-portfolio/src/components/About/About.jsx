import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
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
                        <h3>Technology</h3>
                        <p>I am interested about the new trens in technology and mostly about AI and electronics</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/designImage.png")}
                        alt="design-image"
                        className={styles.aboutIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Design</h3>
                        <p>I like to be user centered when develloping new products, and test the user to focus on what really matters</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/marketImage.png")}
                        alt="market-image"
                        className={styles.aboutIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Market</h3>
                        <p>I think that the real test for a product is the market - so i experienced it in lots of ways</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
