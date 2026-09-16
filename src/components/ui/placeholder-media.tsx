import Image from "next/image";
import { cn } from "@/lib/utils";

type Aspect = "video" | "square" | "portrait";
type Variant = "panel" | "outline";

type PlaceholderMediaProps = {
  label: string;
  src?: string;
  alt?: string;
  aspect?: Aspect;
  variant?: Variant;
  className?: string;
};

const aspectStyles: Record<Aspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

/**
 * Slot for real photography/video (hero, ceramic coating, gallery).
 * Renders the asset when `src` is provided; otherwise renders a clean
 * placeholder state instead of stock or fabricated imagery.
 */
export function PlaceholderMedia({
  label,
  src,
  alt,
  aspect = "video",
  variant = "outline",
  className,
}: PlaceholderMediaProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-md bg-surface", aspectStyles[aspect], className)}>
        <Image src={src} alt={alt ?? ""} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md text-center",
        variant === "panel"
          ? "border border-border bg-surface-raised"
          : "border border-dashed border-border bg-surface",
        aspectStyles[aspect],
        className,
      )}
    >
      <span className="px-4 text-small uppercase tracking-[0.15em] text-muted">{label}</span>
    </div>
  );
}
