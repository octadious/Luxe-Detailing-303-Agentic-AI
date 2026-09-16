import Link from "next/link";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { cta, primaryNav, siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="text-h3 font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-small font-medium text-muted transition-colors duration-150 ease-standard hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href={cta.primary.href} variant="primary">
            {cta.primary.label}
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
