import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

const points = [
  {
    title: "We Come to You",
    description: "Professional detailing at your home, office, or wherever your vehicle is parked.",
  },
  {
    title: "No Shop Visit Required",
    description: "Skip the drop-off and the wait — your time stays yours.",
  },
  {
    title: "Denver Area Coverage",
    description: "Mobile service across the Denver, Colorado area.",
  },
];

export function ValueProposition() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="flex flex-col gap-10 py-16 md:py-20">
        <SectionHeading
          eyebrow="Mobile Service"
          title="Detailing That Comes to You"
          description="The convenience of a mobile detailer, without compromising on the quality of the work."
        />
        <ul className="grid gap-8 sm:grid-cols-3">
          {points.map((point) => (
            <li key={point.title} className="flex flex-col gap-2 border-t border-border pt-6">
              <h3 className="text-h3 font-semibold text-foreground">{point.title}</h3>
              <p className="text-body text-muted">{point.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
