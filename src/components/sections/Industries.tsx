import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/home";
import styles from "./Industries.module.css";

export function Industries() {
  return (
    <section id="industries">
      <div className="container">
        <SectionHeading centered eyebrow="Who We Serve" title="Supporting every corner of the pharma industry" />
        <div className={styles.grid}>
          {industries.map(({ icon, title, text }) => (
            <div key={title} className={`${styles.item} reveal`}>
              <span className={styles.icon}>
                <Icon name={icon} size={22} />
              </span>
              <div>
                <b>{title}</b>
                <small>{text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
