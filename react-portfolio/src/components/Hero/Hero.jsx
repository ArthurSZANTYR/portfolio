import React from 'react';

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return(
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arthur</h1>
        <p className={styles.description}>I'm a french creative technologist with interest in Tech Market and Design.
            Reach out if you'd like to learn more!
        </p>
        <a href="mailto: szantyrarthur.pro@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="hero-image" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur}/>
  </section>
  )
}
