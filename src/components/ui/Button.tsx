import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  variant?: "primary" | "ghost" | "white";
  className?: string;
  children: ReactNode;
} & ({ href: string } | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>));

export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  const classes = [styles.btn, styles[variant], className].filter(Boolean).join(" ");

  if (rest.href !== undefined) {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
