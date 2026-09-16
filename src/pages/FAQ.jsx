import { Section } from "../components/Section.jsx";
import Accordion from "../components/Accordion.jsx";
import { faqs, supportEmail } from "../data/content.js";
import styles from "./Simple.module.css";

export default function FAQ() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Frequently asked questions</div>
        <h1 className={styles.title}>FAQ</h1>
        <p className={styles.subtitle}>
          Answers to the most common questions about how numbyPad works. Still stuck? Email{" "}
          <a className={styles.inlineLink} href={`mailto:${supportEmail}`}>
            {supportEmail}
          </a>
          .
        </p>
      </div>
      <Section style={{ marginBottom: 64, maxWidth: 760 }}>
        <Accordion items={faqs} />
      </Section>
    </>
  );
}
