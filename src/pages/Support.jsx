import { Link } from "react-router-dom";
import { FeatureCard } from "../components/Cards.jsx";
import Icon from "../components/Icon.jsx";
import { supportEmail } from "../data/content.js";
import styles from "./Simple.module.css";

const tips = [
  {
    key: "sync",
    icon: "RefreshCw",
    color: "phone",
    title: "Numbers not syncing?",
    body: "Make sure both your iPhone and Apple Watch are paired, unlocked, and nearby, then reopen the app on both. Sync also runs in the background if a device is out of range.",
  },
  {
    key: "prefix",
    icon: "Globe",
    color: "sky",
    title: "Wrong country prefix?",
    body: "Tap the prefix chip on the keypad, or open the staged number's detail view, to set the country manually — no need to wait for GPS.",
  },
];

export default function Support() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.eyebrow}>We're here to help</div>
        <h1 className={styles.title}>Support</h1>
        <p className={styles.subtitle}>
          Need help with numbyPad? Have feedback, found a bug, or have a question about a
          feature? Email us and we'll get back to you.
        </p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.contactCard}>
          <p>We usually reply within a couple of business days.</p>
          <a className={styles.emailButton} href={`mailto:${supportEmail}`}>
            <Icon name="Mail" size={16} />
            {supportEmail}
          </a>
        </div>

        <div className={styles.tips}>
          {tips.map((tip) => (
            <FeatureCard
              key={tip.key}
              icon={tip.icon}
              color={tip.color}
              title={tip.title}
              body={tip.body}
            />
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 40, fontSize: 14, color: "var(--text-muted)" }}>
          Looking for a quick answer? Check the{" "}
          <Link className={styles.inlineLink} to="/faq">
            FAQ
          </Link>
          .
        </p>
      </div>
    </>
  );
}
