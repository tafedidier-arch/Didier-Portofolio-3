"use client";
import { useLang } from "@/context/LangContext";
import styles from "./Roadmap.module.css";

export default function Roadmap() {
  const { t } = useLang();
  const r = t.roadmap;
  return (
    <section className={styles.roadmap} id="roadmap">
      <div className="section-tag">{r.tag}</div>
      <h2 className={styles.h2}>{r.title[0]}<em>{r.title[1]}</em></h2>
      <div className={styles.timeline}>
        {r.phases.map((phase, i) => (
          <div className={`${styles.item} ${phase.active ? styles.active : ""}`} key={i}>
            <div className={styles.dot}>{i + 1}</div>
            <div className={styles.content}>
              <div className={styles.period}>{phase.period}</div>
              <div className={styles.title}>{phase.title}</div>
              <div className={styles.desc}>{phase.desc}</div>
              <div className={styles.tags}>
                {phase.tags.map((tag, ti) => <span className={styles.tag} key={ti}>{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
