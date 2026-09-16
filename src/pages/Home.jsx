import { Link } from "react-router-dom";
import { Section, Divider } from "../components/Section.jsx";
import { StepCard, ContextChip, FeatureCard, ActionChip, Pill } from "../components/Cards.jsx";
import {
  pitch,
  entryPoints,
  capturedContext,
  stagingActions,
  outcomes,
  features,
  goodToKnow,
  useCasePills,
} from "../data/content.js";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.eyebrow}>numbyPad for iPhone &amp; Apple Watch</div>
        <h1 className={styles.title}>Never lose a number again</h1>
        <p className={styles.subtitle}>{pitch}</p>
        <div className={styles.ctaRow}>
          {/* TODO: swap for the App Store link once numbyPad is live */}
          <Link to="/support" className={styles.ctaPrimary}>
            Get in touch
          </Link>
          <Link to="/faq" className={styles.ctaSecondary}>
            Read the FAQ
          </Link>
        </div>
      </div>

      <Section>
        <div className={styles.pillRow}>
          {useCasePills.map((pill) => (
            <Pill key={pill.label} icon={pill.icon} label={pill.label} />
          ))}
        </div>
      </Section>

      <Divider>Step 1 — capture a number, three ways</Divider>

      <Section>
        <div className={styles.grid3}>
          {entryPoints.map((entry) => (
            <StepCard
              key={entry.key}
              tone={entry.tone}
              icon={entry.icon}
              title={entry.title}
              desc={entry.desc}
              steps={entry.steps}
            />
          ))}
        </div>
      </Section>

      <Divider>Everything captured with the number</Divider>

      <Section>
        <div className={styles.grid6}>
          {capturedContext.map((ctx) => (
            <ContextChip key={ctx.name} icon={ctx.icon} name={ctx.name} note={ctx.note} />
          ))}
        </div>
      </Section>

      <Divider>Step 2 — review before it's saved</Divider>

      <Section>
        <div className={styles.stagingBox}>
          <div className={styles.stagingHeader}>
            <span className={styles.stagingIcon} aria-hidden="true">
              📥
            </span>
            <div>
              <h2>Numbers Tab — Staging Area</h2>
              <p>
                Every capture waits here until you decide what to do with it. Nothing goes to
                Contacts without your review.
              </p>
            </div>
          </div>
          <div className={styles.grid4}>
            {stagingActions.map((action) => (
              <ActionChip
                key={action.key}
                icon={action.icon}
                title={action.title}
                desc={action.desc}
              />
            ))}
          </div>
        </div>
      </Section>

      <Divider>Step 3 — choose what happens next</Divider>

      <Section>
        <div className={styles.grid4}>
          {outcomes.map((outcome) => (
            <StepCard
              key={outcome.key}
              tone={outcome.tone}
              icon={outcome.icon}
              title={outcome.title}
              desc={outcome.desc}
              steps={outcome.steps}
            />
          ))}
        </div>
      </Section>

      <Divider>Additional features</Divider>

      <Section>
        <div className={styles.grid3}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.key}
              icon={feature.icon}
              color={feature.color}
              title={feature.title}
              body={feature.body}
            />
          ))}
        </div>
      </Section>

      <Divider>Good to know</Divider>

      <Section style={{ marginBottom: 64 }}>
        <div className={styles.grid3}>
          {goodToKnow.map((item) => (
            <FeatureCard
              key={item.key}
              icon={item.icon}
              color={item.color}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
