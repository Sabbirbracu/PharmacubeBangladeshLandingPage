import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

interface LogoProps {
  onDark?: boolean;
  priority?: boolean;
}

export function Logo({ onDark, priority }: LogoProps) {
  return (
    <Link href="#top" className={onDark ? `${styles.brand} ${styles.onDark}` : styles.brand} aria-label="Pharmacube Bangladesh home">
      <Image src="/images/logo-mark.png" alt="" width={42} height={42} priority={priority} className={styles.mark} />
      <div className={styles.text}>
        <b>PHARMACUBE</b>
        <span>BANGLADESH</span>
      </div>
    </Link>
  );
}
