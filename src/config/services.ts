export type ServiceCategory = {
  slug: string;
  name: string;
  description: string;
  /** When present, the card links out (e.g. to the on-page spotlight). */
  href?: string;
};

/**
 * Service categories shown on the homepage.
 *
 * Names use standard mobile-detailing terminology; descriptions are
 * intentionally short and generic (no durations, pricing, or performance
 * claims). Replace with the confirmed service list/copy before launch —
 * see docs/design-brief.md §14, open question 3.
 */
export const services: ServiceCategory[] = [
  {
    slug: "exterior-detail",
    name: "Exterior Detail",
    description: "Hand wash, decontamination, and paint-safe finishing.",
  },
  {
    slug: "interior-detail",
    name: "Interior Detail",
    description: "Thorough interior cleaning, tailored to your vehicle.",
  },
  {
    slug: "full-detail",
    name: "Full Detail",
    description: "Complete interior and exterior detailing in one visit.",
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    description: "Long-term protection and finish enhancement.",
    href: "#ceramic-coating",
  },
];
