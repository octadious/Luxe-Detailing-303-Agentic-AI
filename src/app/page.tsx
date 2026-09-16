import { CeramicCoatingSpotlight } from "@/components/home/ceramic-coating-spotlight";
import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { ValueProposition } from "@/components/home/value-proposition";
import { VisualProof } from "@/components/home/visual-proof";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <CeramicCoatingSpotlight />
      <VisualProof />
    </>
  );
}
