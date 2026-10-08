"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/site";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className={scrolled ? `${styles.header} ${styles.scrolled}` : styles.header}>
      <div className={`container ${styles.nav}`}>
        <Logo priority />
        <nav className={menuOpen ? `${styles.menu} ${styles.open}` : styles.menu} onClick={() => setMenuOpen(false)}>
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={styles.link}>
              {label}
            </Link>
          ))}
          <Button href="#contact" className={styles.cta}>
            Book a Consultation
          </Button>
        </nav>
        <button
          type="button"
          className={styles.burger}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
