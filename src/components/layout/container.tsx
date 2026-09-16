import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Structural max-width wrapper. Not part of the final visual design —
 * just a reusable layout primitive other components can build on.
 */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4", className)}>{children}</div>;
}
