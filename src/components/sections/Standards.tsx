import { standards } from "@/data/home";
import styles from "./Standards.module.css";

export function Standards() {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <p>Our work is aligned with</p>
        <ul>
          {standards.map((standard) => (
            <li key={standard}>{standard}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
