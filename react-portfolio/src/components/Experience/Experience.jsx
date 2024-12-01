import React from "react";
import { useState } from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {

  const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i){
            return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <div className={styles.historyItem}>
              <div className={styles.historyTitleContainer}>
                <div className={styles.historyTitle} onClick={() => toggle(id)}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                    className={styles.historyImage}
                  />
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                </div>
                <span>{selected === id ? '-' : '+'}</span>
              </div>
              <div
                className={`${styles.historyItemDetails} ${
                  selected === id ? styles.show : ''
                }`}
              >
                <h4>{historyItem.context}</h4>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};