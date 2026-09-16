import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <Container className="flex min-h-svh flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-2xl font-semibold">{siteConfig.name}</h1>
      <p className="text-sm text-neutral-500">Site under construction.</p>
    </Container>
  );
}
