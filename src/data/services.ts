import type { IconName } from "@/components/ui/Icon";

export interface Service {
  title: string;
  description: string;
  points: readonly string[];
  icon: IconName;
}

export const services: readonly Service[] = [
  {
    icon: "shield",
    title: "Quality Management System",
    description: "Design, implementation and improvement of a robust, risk-based QMS.",
    points: ["Deviation, CAPA & change control", "Quality risk management (ICH Q9)", "Internal & supplier audits"],
  },
  {
    icon: "award",
    title: "Plant Accreditation & Certification",
    description: "End-to-end preparation for national and international GMP inspections.",
    points: ["GMP gap analysis & remediation", "Mock inspections", "WHO, PIC/S & export-market readiness"],
  },
  {
    icon: "flask",
    title: "Qualification, Calibration & Validation",
    description: "Documented evidence that your facility, equipment and processes perform as intended.",
    points: [
      "DQ, IQ, OQ, PQ protocols & reports",
      "Process, cleaning & analytical validation",
      "HVAC, water & utilities qualification",
    ],
  },
  {
    icon: "search",
    title: "R&D and Dossier Review",
    description: "Technical review that strengthens product development and registration files.",
    points: ["CTD / eCTD dossier review", "Formulation & stability data review", "Technology transfer support"],
  },
  {
    icon: "document",
    title: "Documentation Support",
    description: "Clear, compliant documents that your team can actually follow.",
    points: ["SOPs, BMRs & BPRs", "Site Master File & VMP", "Data integrity (ALCOA+) practices"],
  },
  {
    icon: "graduation",
    title: "GMP & Pharmacovigilance Training",
    description: "Practical training programmes that build a lasting quality culture.",
    points: ["cGMP & GDP for all levels", "Pharmacovigilance systems", "On-site workshops & assessments"],
  },
  {
    icon: "scale",
    title: "Regulatory & Compliance Services",
    description: "Guidance through local and international regulatory requirements.",
    points: ["DGDA submissions & liaison", "Export registration support", "Compliance audits & remediation"],
  },
  {
    icon: "factory",
    title: "Production, QA & Engineering Monitoring",
    description: "Operational oversight that keeps your plant efficient and in control.",
    points: [
      "Operation monitoring & batch review",
      "Maintenance & engineering systems",
      "Productivity & yield improvement",
    ],
  },
  {
    icon: "package",
    title: "Raw Material Supply",
    description: "Sourcing support for quality APIs, excipients and packaging materials.",
    points: ["Qualified supplier sourcing", "Vendor qualification support", "Documentation & CoA review"],
  },
];
