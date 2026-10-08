import { Button } from "@/components/ui/Button";
import styles from "./Cta.module.css";

export function Cta() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.box}>
          <div>
            <h2>Facing a regulatory or quality challenge?</h2>
            <p>Talk to our experts — we&apos;ll help you find the most efficient way forward.</p>
          </div>
          <Button href="#contact" variant="white">
            Get in Touch →
          </Button>
        </div>
      </div>
    </section>
  );
}
