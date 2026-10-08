import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { about } from "@/data/home";
import styles from "./About.module.css";

export function About() {
  const { visual } = about;

  return (
    <section id="about">
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.visual} reveal`}>
          <Image src="/images/logo-mark.png" alt="" width={320} height={320} className={styles.watermark} />
          <h3>{visual.title}</h3>
          <p>{visual.text}</p>
          <div className={styles.mv}>
            <div>
              <b>Our Mission</b>
              <small>{visual.mission}</small>
            </div>
            <div>
              <b>Our Vision</b>
              <small>{visual.vision}</small>
            </div>
          </div>
        </div>
        <div className={`${styles.copy} reveal`}>
          <Eyebrow>About Pharmacube</Eyebrow>
          <h2 className={`section-title ${styles.title}`}>{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className={styles.points}>
            {about.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
