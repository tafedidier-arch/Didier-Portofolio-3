"use client";
import { useLang } from "@/context/LangContext";
import styles from "./Skills.module.css";

export default function Skills() {
  const { t } = useLang();
  const s = t.skills;

  const badgeClass = (status) =>
    status === "done" ? "badge badge-done" : status === "progress" ? "badge badge-progress" : "badge badge-todo";

  const badgeLabel = (status) =>
    status === "done" ? s.statusDone : status === "progress" ? s.statusProgress : s.statusTodo;

  return (
    <section className={styles.skills} id="skills">
      <div className="section-tag">{s.tag}</div>
      <h2 className={styles.h2}>{s.title[0]}<em>{s.title[1]}</em></h2>
      <div className={styles.categories}>
        {s.categories.map((cat, ci) => (
          <div className={styles.category} key={ci}>
            <div className={styles.catLabel}>{cat.label}</div>
            <div className={styles.grid}>
              {cat.items.map((item, ii) => (
                <div className={styles.card} key={ii}>
                  <div className={styles.cardHeader}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={badgeClass(item.status)}>
                      {item.badge ? item.badge : badgeLabel(item.status)}
                    </span>
                  </div>
                  <p className={styles.desc}>{item.desc}</p>
                  <div className={styles.barBg}><div className={styles.bar} style={{ width: `${item.pct}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
