import { Eyebrow } from "./Eyebrow";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  tone?: "light" | "dark";
}

export function SectionHeading({ eyebrow, title, description, centered, tone = "light" }: SectionHeadingProps) {
  const classes = [styles.head, "reveal", centered && styles.centered, tone === "dark" && styles.dark]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <Eyebrow centered={centered}>{eyebrow}</Eyebrow>
      <h2 className="section-title">{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
