import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>numbyPad · Pronto Software LLC · © {new Date().getFullYear()}</span>
      <nav className={styles.links} aria-label="Footer">
        <Link to="/faq">FAQ</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/support">Support</Link>
      </nav>
    </footer>
  );
}
