"use client";
import { useLang } from "@/context/LangContext";
import styles from "./Experience.module.css";

export default function Experience() {
  const { t } = useLang();
  const e = t.experience;
  return (
    <section className={styles.exp} id="experience">
      <div className="section-tag">{e.tag}</div>
      <h2 className={styles.h2}>{e.title[0]}<em>{e.title[1]}</em></h2>
      <div className={styles.timeline}>
        {e.items.map((item, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.dot}>{i + 1}</div>
            <div className={styles.content}>
              <div className={styles.period}>{item.period}</div>
              <div className={styles.role}>{item.role}</div>
              <div className={styles.company}>{item.company} · <span className={styles.loc}>{item.location}</span></div>
              <ul className={styles.tasks}>
                {item.tasks.map((task, ti) => <li key={ti}>{task}</li>)}
              </ul>
              <div className={styles.tags}>
                {item.tags.map((tag, ti) => <span className={styles.tag} key={ti}>{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
