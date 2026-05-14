"use client";
import { useLang } from "@/context/LangContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>Didier Romuald TAFE</span>
      <span className={styles.copy}>{t.footer.copy}</span>
    </footer>
  );
}
