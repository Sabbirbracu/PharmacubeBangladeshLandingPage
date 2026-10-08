import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/home";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <SectionHeading centered eyebrow="FAQ" title="Frequently asked questions" />
        <div className={`${styles.list} reveal`}>
          {faqs.map(({ question, answer }, index) => (
            <details key={question} className={styles.item} open={index === 0}>
              <summary className={styles.question}>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
