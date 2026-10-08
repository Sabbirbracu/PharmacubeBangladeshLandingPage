import type { IconName } from "@/components/ui/Icon";

export const hero = {
  eyebrow: "Pharmaceutical Consulting · Dhaka",
  lead: "Pharmacube Bangladesh helps pharmaceutical manufacturers solve real problems in Production, Quality Assurance, Engineering and Regulatory Affairs — from GMP gap analysis and validation to dossier review and audit readiness.",
  stats: [
    { value: "2020", label: "Serving since" },
    { value: "11–50", label: "Industry professionals" },
    { value: "9+", label: "Specialised service areas" },
  ],
  card: {
    badge: "End-to-end support",
    title: "From gap to compliance",
    description: "One partner for every stage of your quality journey.",
    checks: [
      { title: "GMP Gap Assessment", detail: "Identify risks before the inspector does" },
      { title: "Qualification & Validation", detail: "DQ, IQ, OQ, PQ, process & cleaning validation" },
      { title: "Documentation & QMS", detail: "SOPs, BMRs, CAPA, change control, deviations" },
      { title: "Regulatory & Dossier Support", detail: "CTD dossier review and submission readiness" },
    ],
  },
};

export const standards = ["WHO‑GMP", "PIC/S", "ICH Guidelines", "EU‑GMP", "US FDA cGMP", "DGDA"];

export const about = {
  visual: {
    title: "Experience you can rely on.",
    text: "Founded in 2020 by seasoned pharmaceutical professionals, Pharmacube brings decades of shop-floor and regulatory experience to every engagement.",
    mission: "Provide efficient and innovative solutions to our clients' regulatory and operational challenges.",
    vision: "To be Bangladesh's most trusted partner for pharmaceutical quality and compliance.",
  },
  title: "A consulting firm built by people who've run pharma plants.",
  paragraphs: [
    "Pharmacube Bangladesh is a Dhaka-based consulting partnership run by veteran professionals from the pharmaceutical industry. We provide technical advice and hands-on services for operation monitoring and documentation across Production, Quality Assurance and Engineering.",
    "Whether you are preparing for a regulatory inspection, commissioning a new facility, registering a product for export, or strengthening your quality culture, our team works alongside yours to deliver practical, inspection-ready results.",
  ],
  points: ["Veteran-led team", "Practical, on-site support", "Local regulatory insight", "International standards"],
};

export const processSteps = [
  {
    title: "Assess",
    text: "On-site review of facilities, systems and documents to identify gaps, risks and priorities.",
  },
  {
    title: "Plan",
    text: "A practical roadmap with clear deliverables, timelines and responsibilities agreed with your team.",
  },
  {
    title: "Implement",
    text: "Hands-on execution — protocols, documentation, validation and training delivered alongside your staff.",
  },
  {
    title: "Sustain",
    text: "Follow-up audits and continuous improvement so you stay inspection-ready, not just once.",
  },
];

export const whyUs = [
  {
    title: "Veteran Expertise",
    text: "Our consultants have held senior roles in production, QA and engineering at pharmaceutical plants.",
  },
  { title: "Practical Solutions", text: "Advice that works on the shop floor — not just on paper." },
  {
    title: "Local + Global Knowledge",
    text: "Deep understanding of DGDA requirements and international GMP expectations.",
  },
  {
    title: "One-Stop Partner",
    text: "From documentation to validation to training — one team, fully coordinated.",
  },
  {
    title: "Confidential & Ethical",
    text: "Your data, processes and products are handled with complete confidentiality.",
  },
  {
    title: "Cost-Effective",
    text: "Flexible engagements sized to your needs — project-based or ongoing retainer.",
  },
];

export const industries: readonly { icon: IconName; title: string; text: string }[] = [
  { icon: "box", title: "Finished Dosage Manufacturers", text: "Solids, liquids, semi-solids and sterile products" },
  { icon: "beaker", title: "API & Excipient Producers", text: "Active ingredient and raw material facilities" },
  { icon: "leaf", title: "Herbal, Unani & Ayurvedic", text: "Traditional medicine manufacturers" },
  { icon: "paw", title: "Veterinary Pharmaceuticals", text: "Animal health product manufacturers" },
  { icon: "home", title: "New Plant Projects", text: "Greenfield & expansion projects from design stage" },
  { icon: "globe", title: "Export-Oriented Companies", text: "Businesses targeting regulated international markets" },
];

export const faqs = [
  {
    question: "What kind of companies does Pharmacube work with?",
    answer:
      "We work with pharmaceutical manufacturers of all sizes — from established plants preparing for international inspections to new facilities being set up from the ground up — as well as API, herbal and veterinary producers.",
  },
  {
    question: "Can you help us prepare for a GMP inspection?",
    answer:
      "Yes. We conduct a detailed gap assessment, help close the gaps through documentation, validation and training, and run mock inspections so your team is confident on inspection day.",
  },
  {
    question: "Do you provide on-site services?",
    answer:
      "Yes. Most of our qualification, validation, monitoring and training work is carried out on-site at the client's facility, working directly with your team.",
  },
  {
    question: "How are engagements structured?",
    answer:
      "We offer project-based engagements for defined scopes (such as a validation project or dossier review) and ongoing retainer support for continuous QA and compliance needs.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply send us a message or call us. We'll schedule an initial discussion to understand your needs and then propose a scope, timeline and quotation.",
  },
];
