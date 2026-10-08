import { cacheLife } from "next/cache";
import Link from "next/link";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { footerLinks, siteConfig } from "@/data/site";
import { Logo } from "./Logo";
import styles from "./Footer.module.css";

const { contact } = siteConfig;

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Logo onDark />
            <p className={styles.about}>{siteConfig.about}</p>
            <div className={styles.social}>
              {siteConfig.social.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  {...(href.startsWith("http") && { target: "_blank", rel: "noopener" })}
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4>{heading}</h4>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{contact.street}</li>
              <li>{contact.city}</li>
              <li>
                <a href={contact.email.href}>{contact.email.label}</a>
              </li>
              <li>
                <a href={contact.phone.href}>{contact.phone.label}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </span>
          <span>{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
