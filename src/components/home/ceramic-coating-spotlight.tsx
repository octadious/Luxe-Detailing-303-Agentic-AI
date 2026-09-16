import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionHeading } from "@/components/ui/section-heading";

export function CeramicCoatingSpotlight() {
  return (
    <section id="ceramic-coating" className="scroll-mt-24 border-b border-border bg-surface">
      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <PlaceholderMedia
          label="Ceramic coating photography — added once real or approved assets are available"
          variant="panel"
          aspect="square"
        />
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Signature Service"
            title="Ceramic Coating"
            description="A long-term layer of protection and finish enhancement for vehicles that deserve it. Full details on our ceramic coating process are being finalized."
          />
          <div>
            <Button href="/contact" variant="primary">
              Ask About Ceramic Coating
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
