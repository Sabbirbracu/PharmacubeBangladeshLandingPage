export const siteConfig = {
  name: "Pharmacube Bangladesh",
  url: "https://pharmacubebd.com",
  title: "Pharmacube Bangladesh | Pharmaceutical GMP, QA & Regulatory Consulting",
  description:
    "Pharmacube Bangladesh is a Dhaka-based pharmaceutical consulting firm run by veteran professionals. GMP compliance, QMS, qualification & validation, dossier review, regulatory support and training.",
  keywords:
    "pharmaceutical consulting Bangladesh, GMP consultant Dhaka, pharma QA, validation, qualification, calibration, dossier review, DGDA, WHO GMP, pharmacovigilance training",
  ogTitle: "Pharmacube Bangladesh — Pharma Consulting by Veteran Professionals",
  ogDescription:
    "GMP, QA, validation, regulatory and documentation support for pharmaceutical manufacturers in Bangladesh.",
  tagline: "Quality · Compliance · Excellence",
  about:
    "A consulting firm run by veteran professionals, providing solutions to the challenges faced by Bangladesh's pharmaceutical sector.",
  contact: {
    street: "Suite 8/B, Pragati Sarani",
    city: "Dhaka 1229, Bangladesh",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pragati+Sarani+Dhaka+1229",
    // TODO: confirm phone & email with client
    phone: { label: "+880 1XXX-XXXXXX", href: "tel:+8801XXXXXXXXX" },
    email: { label: "info@pharmacubebd.com", href: "mailto:info@pharmacubebd.com" },
    hours: "Saturday – Thursday, 9:00 AM – 6:00 PM",
  },
  social: [
    {
      name: "LinkedIn" as const,
      href: "https://www.linkedin.com/company/pharmacube-bangladesh",
    },
    { name: "Facebook" as const, href: "#" },
  ],
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
] as const;

export const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Approach", href: "#process" },
    { label: "Why Choose Us", href: "#why" },
    { label: "FAQ", href: "#faq" },
  ],
  Services: [
    { label: "QMS Services", href: "#services" },
    { label: "Validation & Qualification", href: "#services" },
    { label: "Dossier Review", href: "#services" },
    { label: "GMP Training", href: "#services" },
    { label: "Regulatory Compliance", href: "#services" },
  ],
} as const;
