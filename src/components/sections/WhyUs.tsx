import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyUs } from "@/data/home";
import styles from "./WhyUs.module.css";

export function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <div className="container">
        <SectionHeading
          tone="dark"
          eyebrow="Why Pharmacube"
          title="Why manufacturers choose to work with us"
          description="We combine deep industry experience with a practical, results-focused approach."
        />
        <div className={`${styles.grid} reveal`}>
          {whyUs.map(({ title, text }, index) => (
            <div key={title} className={styles.item}>
              <div className={styles.number}>{String(index + 1).padStart(2, "0")}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
