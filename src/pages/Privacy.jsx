import { privacySections, supportEmail } from "../data/content.js";
import styles from "./Simple.module.css";

export default function Privacy() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Privacy policy</div>
        <h1 className={styles.title}>Your numbers stay yours</h1>
        <p className={styles.subtitle}>
          numbyPad is built to keep your data on your own devices. Here's exactly what that means.
        </p>
      </div>
      <div className={styles.wrap}>
        <p className={styles.updated}>Last updated September 2026</p>
        {privacySections.map((section) => (
          <div className={styles.policySection} key={section.title}>
            <h2>{section.title}</h2>
            <p>
              {section.title === "Contact us" ? (
                <>
                  Questions about this policy or how numbyPad handles your data? Email{" "}
                  <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
                </>
              ) : (
                section.body
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
