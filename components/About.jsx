"use client";
import { useLang } from "@/context/LangContext";
import styles from "./About.module.css";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section className={styles.about} id="about">
      <div className="section-tag">{a.tag}</div>
      <h2 className={styles.h2}>{a.title[0]}<em>{a.title[1]}</em></h2>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>{a.p1[0]}<strong>{a.p1[1]}</strong>{a.p1[2]}</p>
          <p>{a.p2[0]}<strong>{a.p2[1]}</strong>{a.p2[2]}<strong>{a.p2[3]}</strong>{a.p2[4]}</p>
          <p>{a.p3[0]}<strong>{a.p3[1]}</strong>{a.p3[2]}</p>
          <p>{a.p4[0]}<strong>{a.p4[1]}</strong>{a.p4[2]}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>{a.cardTitle}</div>
          {a.rows.map(([label, val], i) => (
            <div className={styles.row} key={i}>
              <span className={styles.label}>{label}</span>
              <span className={styles.val} style={i === 7 ? { color: "var(--green)" } : {}}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
