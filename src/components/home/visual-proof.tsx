import { Container } from "@/components/layout/container";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionHeading } from "@/components/ui/section-heading";

const tiles = ["Before / After", "Process", "Exterior", "Interior", "Ceramic Finish", "Recent Work"];

export function VisualProof() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-background">
      <Container className="flex flex-col gap-10 py-16 md:py-20">
        <SectionHeading
          eyebrow="Gallery"
          title="Real Work, Coming Soon"
          description="This gallery will feature real before/after and process photography and video as work is completed."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile) => (
            <PlaceholderMedia key={tile} label={tile} aspect="square" />
          ))}
        </div>
      </Container>
    </section>
  );
}
