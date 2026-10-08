import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

interface EyebrowProps {
  children: ReactNode;
  centered?: boolean;
}

export function Eyebrow({ children, centered }: EyebrowProps) {
  return <span className={centered ? `${styles.eyebrow} ${styles.centered}` : styles.eyebrow}>{children}</span>;
}
