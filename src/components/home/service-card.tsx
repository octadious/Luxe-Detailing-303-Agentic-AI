import Link from "next/link";
import type { ServiceCategory } from "@/config/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service }: { service: ServiceCategory }) {
  const classes = cn(
    "flex flex-col gap-3 rounded-md border border-border bg-surface p-6 transition-colors duration-150 ease-standard",
    service.href && "hover:border-accent",
  );

  const content = (
    <>
      <h3 className="text-h3 font-semibold text-foreground">{service.name}</h3>
      <p className="text-body text-muted">{service.description}</p>
      {service.href ? <span className="mt-2 text-small font-medium text-accent">Learn more →</span> : null}
    </>
  );

  if (service.href) {
    return (
      <Link href={service.href} className={classes}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
