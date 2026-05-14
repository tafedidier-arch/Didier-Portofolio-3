"use client";
import { useLang } from "@/context/LangContext";
import styles from "./Nav.module.css";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const n = t.nav;
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>D. R. TAFE</div>
      <div className={styles.right}>
        <ul className={styles.links}>
          <li><a href="#about">{n.about}</a></li>
          <li><a href="#skills">{n.skills}</a></li>
          <li><a href="#experience">{n.experience}</a></li>
          <li><a href="#roadmap">{n.roadmap}</a></li>
          <li><a href="#projects">{n.projects}</a></li>
          <li><a href="#contact">{n.contact}</a></li>
        </ul>
        <div className={styles.toggle}>
          <button className={`${styles.langBtn} ${lang === "fr" ? styles.active : ""}`} onClick={() => setLang("fr")}>FR</button>
          <button className={`${styles.langBtn} ${lang === "en" ? styles.active : ""}`} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </nav>
  );
}
