import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/config/services";
import { ServiceCard } from "./service-card";

export function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-border bg-background">
      <Container className="flex flex-col gap-10 py-16 md:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Mobile Detailing Services"
          description="A quick look at what we offer. Full service details are being finalized."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
