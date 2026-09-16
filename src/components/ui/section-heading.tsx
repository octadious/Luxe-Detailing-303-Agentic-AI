import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      {eyebrow ? (
        <span className="text-small font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      ) : null}
      <h2 className="text-h2 font-semibold text-foreground">{title}</h2>
      {description ? <p className="max-w-2xl text-body text-muted">{description}</p> : null}
      {children}
    </div>
  );
}
