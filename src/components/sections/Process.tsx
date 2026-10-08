import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/home";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section id="process">
      <div className="container">
        <SectionHeading
          eyebrow="Our Approach"
          title="A clear path from challenge to compliance"
          description="Every engagement follows a structured, transparent process so you always know where things stand."
        />
        <div className={styles.steps}>
          {processSteps.map(({ title, text }) => (
            <div key={title} className={`${styles.step} reveal`}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
