import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import styles from "./Header.module.css";
import imgUrl from '/public/logo.png'

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/faq", label: "FAQ" },
  { to: "/privacy", label: "Privacy" },
  { to: "/support", label: "Support" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.brand}>
        <img src={imgUrl} alt="" className={styles.brandMark} aria-hidden="true" />
        numbyPad
      </NavLink>
      <nav className={styles.nav} aria-label="Primary">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
