"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import styles from "./ContactForm.module.css";

const serviceOptions = ["General enquiry", ...services.map((service) => service.title)];

const fieldRows = [
  [
    { id: "name", label: "Full name *", required: true },
    { id: "company", label: "Company" },
  ],
  [
    { id: "email", label: "Email *", type: "email", required: true },
    { id: "phone", label: "Phone", type: "tel" },
  ],
];

type Note = { text: string; isError: boolean };

export function ContactForm() {
  const [note, setNote] = useState<Note | null>(null);

  // Front-end only for now — connect to an API route / email service later.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setNote({ text: "Please fill in your name, a valid email and a message.", isError: true });
      return;
    }

    setNote({ text: "Thank you! Your message has been received. We will get back to you shortly.", isError: false });
    form.reset();
  };

  return (
    <form className={`${styles.form} reveal`} noValidate onSubmit={handleSubmit}>
      <h3>Send us a message</h3>
      <p>Tell us a little about your requirements.</p>
      {fieldRows.map((row) => (
        <div key={row[0].id} className={styles.row}>
          {row.map(({ id, label, ...inputProps }) => (
            <div key={id} className={styles.field}>
              <label htmlFor={id}>{label}</label>
              <input id={id} name={id} {...inputProps} />
            </div>
          ))}
        </div>
      ))}
      <div className={styles.field}>
        <label htmlFor="service">Service of interest</label>
        <select id="service" name="service">
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required />
      </div>
      <Button type="submit" className={styles.submit}>
        Send Message
      </Button>
      {note && (
        <p className={note.isError ? `${styles.note} ${styles.error}` : styles.note} role="status">
          {note.text}
        </p>
      )}
    </form>
  );
}
