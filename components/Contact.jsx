"use client";
import { useLang, LINKEDIN_URL } from "@/context/LangContext";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <section className={styles.contact} id="contact">
      <div className="section-tag" style={{ justifyContent: "center" }}>{c.tag}</div>
      <h2 className={styles.h2}>{c.title[0]}<em>{c.title[1]}</em></h2>
      <p className={styles.sub}>{c.sub}</p>
      <div className={styles.links}>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
          <span className={styles.icon}>in</span> LinkedIn
        </a>
        <a href="mailto:didier.tafe@email.com" className={styles.link}>
          <span className={styles.icon}>✉</span> Email
        </a>
        <a href="https://github.com/didier-tafe" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <span className={styles.icon}>⌥</span> GitHub
        </a>
      </div>
    </section>
  );
}
