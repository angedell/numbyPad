import styles from "./Section.module.css";

export function Section({ label, children, style }) {
  return (
    <section className={styles.section} style={style}>
      {label && <div className={styles.label}>{label}</div>}
      {children}
    </section>
  );
}

export function Divider({ children }) {
  return (
    <div className={styles.divider}>
      <span>{children}</span>
    </div>
  );
}
