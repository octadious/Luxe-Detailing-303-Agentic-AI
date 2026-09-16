/**
 * Central site configuration.
 *
 * This intentionally contains no invented business content (pricing,
 * claims, contact details) — only structural values and known facts
 * (name, location, positioning) confirmed in docs/design-brief.md.
 */
export const siteConfig = {
  name: "Luxe Detailing 303",
  description:
    "Luxe Detailing 303 provides premium mobile auto detailing in Denver, Colorado.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/**
 * Primary navigation. Service/Ceramic Coating/Gallery currently point to
 * in-page sections on the homepage shell; Contact is a real route.
 */
export const primaryNav: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Ceramic Coating", href: "#ceramic-coating" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "/contact" },
];

/**
 * Decided CTA copy (docs/design-brief.md, "Decisions locked for v1").
 * Both currently route to the estimate/contact flow — "Book a Detail"
 * is CTA copy only until a real booking system exists.
 */
export const cta = {
  primary: { label: "Get Your Instant Estimate", href: "/contact" },
  secondary: { label: "Book a Detail", href: "/contact" },
} as const;
