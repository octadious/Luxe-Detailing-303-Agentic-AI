import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Get Your Estimate",
};

/**
 * Minimal placeholder target for the "Get Your Instant Estimate" and
 * "Book a Detail" CTAs (docs/design-brief.md, "Decisions locked for
 * v1"). No form/booking logic yet — that's explicitly out of scope for
 * this phase.
 */
export default function ContactPage() {
  return (
    <Container className="flex flex-col gap-4 py-16 md:py-24">
      <h1 className="text-h1 font-semibold text-foreground">Get Your Instant Estimate</h1>
      <p className="max-w-xl text-body text-muted">
        The online estimate request experience is currently being built. Thank you for your
        interest in Luxe Detailing 303 — please check back soon.
      </p>
    </Container>
  );
}
