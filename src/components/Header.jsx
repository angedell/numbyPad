import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import styles from "./Header.module.css";

// public/logo.png is a plain white mark on transparent — reference it via
// BASE_URL (not a bundler import) so the project-pages base path ("/numbyPad/")
// is applied correctly, and invert it for light backgrounds in CSS.
const logoUrl = `${import.meta.env.BASE_URL}logo.png`;

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
        <img src={logoUrl} alt="" className={styles.brandMark} aria-hidden="true" />
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
