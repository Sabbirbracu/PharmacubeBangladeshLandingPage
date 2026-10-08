import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <SectionHeading
          centered
          eyebrow="What We Do"
          title="Comprehensive services for the pharmaceutical sector"
          description="Flexible support — from a single validation project to a full plant compliance programme."
        />
        <div className={styles.grid}>
          {services.map(({ icon, title, description, points }) => (
            <article key={title} className={`${styles.card} reveal`}>
              <div className={styles.icon}>
                <Icon name={icon} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
