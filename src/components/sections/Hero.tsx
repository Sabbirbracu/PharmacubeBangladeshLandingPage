import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/data/home";
import styles from "./Hero.module.css";

export function Hero() {
  const { card } = hero;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className="reveal">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className={styles.title}>
            Compliance-ready pharma operations, <em>guided by veterans.</em>
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.ctas}>
            <Button href="#contact">Book a Free Consultation →</Button>
            <Button href="#services" variant="ghost">
              Explore Services
            </Button>
          </div>
          <div className={styles.stats}>
            {hero.stats.map(({ value, label }) => (
              <div key={label}>
                <b>{value}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.card} reveal`}>
          <span className={styles.badge}>{card.badge}</span>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          {card.checks.map(({ title, detail }) => (
            <div key={title} className={styles.check}>
              <i>✓</i>
              <div>
                <b>{title}</b>
                <small>{detail}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
