"use client";
import { useLang } from "@/context/LangContext";
import styles from "./Projects.module.css";

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  return (
    <section className={styles.projects} id="projects">
      <div className="section-tag">{p.tag}</div>
      <h2 className={styles.h2}>{p.title[0]}<em>{p.title[1]}</em></h2>
      <div className={styles.grid}>
        {p.items.map((item, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.num}>{item.num}</div>
            <span className={`badge badge-${item.status}`}>{item.statusLabel}</span>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.desc}>{item.desc}</div>
            <div className={styles.tools}>
              {item.tools.map((tool, ti) => <span className={styles.tool} key={ti}>{tool}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
