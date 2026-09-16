/**
 * Central site configuration.
 *
 * This intentionally contains no business content (services, pricing,
 * copy, etc.) — only structural values the app needs to run. Real content
 * gets filled in during the content/design phase.
 */
export const siteConfig = {
  name: "Luxe Detailing 303",
  description: "Official website for Luxe Detailing 303. Site is currently in development.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
