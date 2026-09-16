import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { cta } from "@/config/site";

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <Container className="grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <span className="text-small font-medium uppercase tracking-[0.2em] text-accent">
            Denver, Colorado — Mobile Detailing
          </span>
          <h1 className="text-display font-semibold text-foreground">
            Premium Detailing, Brought to Your Driveway
          </h1>
          <p className="max-w-xl text-body text-muted">
            Luxe Detailing 303 delivers meticulous mobile detailing and ceramic coating for
            discerning owners across the Denver area — no shop visit required.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={cta.primary.href} variant="primary">
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="secondary">
              {cta.secondary.label}
            </Button>
          </div>
        </div>
        <PlaceholderMedia
          label="Cinematic hero photography/video — added once real or approved assets are available"
          variant="panel"
          aspect="video"
          className="lg:aspect-[4/5]"
        />
      </Container>
    </section>
  );
}
