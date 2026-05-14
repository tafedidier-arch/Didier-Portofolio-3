"use client";
import { useLang } from "@/context/LangContext";
import { LINKEDIN_URL } from "@/context/LangContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} />
      <div className={styles.tag}>{h.tag}</div>
      <h1 className={styles.h1}>Didier<br />Romuald <span>TAFE</span></h1>
      <p className={styles.subtitle}>{h.subtitle}</p>
      <p className={styles.desc}>{h.desc}</p>
      <div className={styles.cta}>
        <a href="#experience" className="btn-gold">{h.cta1}</a>
        <a href="#projects" className="btn-outline">{h.cta2}</a>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}><span className={styles.statNum}>{h.stat1Num}</span><span className={styles.statLabel}>{h.stat1Label}</span></div>
        <div className={styles.stat}><span className={styles.statNum}>{h.stat2Num}</span><span className={styles.statLabel}>{h.stat2Label}</span></div>
        <div className={styles.stat}><span className={styles.statNum}>{h.stat3Num}</span><span className={styles.statLabel}>{h.stat3Label}</span></div>
      </div>
    </section>
  );
}
