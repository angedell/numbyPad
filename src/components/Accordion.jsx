import { useId, useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div>
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const triggerId = `${baseId}-trigger-${i}`;
        return (
          <div className={styles.item} key={i}>
            <button
              id={triggerId}
              className={open ? `${styles.trigger} ${styles.triggerOpen}` : styles.trigger}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span>{item.q}</span>
              <span className={styles.chevron} aria-hidden="true">
                ▾
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={open ? `${styles.panel} ${styles.panelOpen}` : styles.panel}
            >
              <div className={styles.panelInner}>
                <p className={styles.answer}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
