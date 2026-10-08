import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { siteConfig } from "@/data/site";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

const { contact } = siteConfig;

const details: readonly {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
  directions?: string;
}[] = [
  { icon: "pin", label: "Office", value: `${contact.street}, ${contact.city}`, directions: contact.mapUrl },
  { icon: "phone", label: "Phone", value: contact.phone.label, href: contact.phone.href },
  { icon: "mail", label: "Email", value: contact.email.label, href: contact.email.href },
  { icon: "clock", label: "Office Hours", value: contact.hours },
];

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className="reveal">
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className="section-title">Let&apos;s discuss your project</h2>
          <p className={styles.intro}>
            Reach out for a consultation, a quotation, or just to ask a question. We usually respond within one
            business day.
          </p>
          {details.map(({ icon, label, value, href, directions }) => (
            <div key={label} className={styles.info}>
              <i>
                <Icon name={icon} size={22} />
              </i>
              <div>
                <small>{label}</small>
                <b>{href ? <a href={href}>{value}</a> : value}</b>
                {directions && (
                  <>
                    <br />
                    <a href={directions} target="_blank" rel="noopener">
                      Get directions →
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
