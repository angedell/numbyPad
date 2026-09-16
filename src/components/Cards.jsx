import styles from "./Cards.module.css";

export function StepCard({ tone, icon, title, desc, steps }) {
  return (
    <div className={styles.tonedCard} data-tone={tone}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <div className={styles.title}>{title}</div>
      <p className={styles.desc}>{desc}</p>
      <ul className={styles.stepList}>
        {steps.map((step, i) => (
          <li key={i}>
            <span className={styles.stepBadge}>{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ContextChip({ icon, name, note }) {
  return (
    <div className={styles.ctxCard}>
      <span className={styles.ctxIcon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.ctxName}>{name}</span>
      <span className={styles.ctxNote}>{note}</span>
    </div>
  );
}

export function FeatureCard({ icon, color, title, body }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureTitle} data-color={color}>
        <span aria-hidden="true">{icon}</span>
        {title}
      </div>
      <p className={styles.featureBody}>{body}</p>
    </div>
  );
}

export function ActionChip({ icon, title, desc }) {
  return (
    <div className={styles.actionChip}>
      <span className={styles.chipIcon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.chipTitle}>{title}</span>
      <span className={styles.chipDesc}>{desc}</span>
    </div>
  );
}

export function Pill({ icon, label }) {
  return (
    <span className={styles.pill}>
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}
