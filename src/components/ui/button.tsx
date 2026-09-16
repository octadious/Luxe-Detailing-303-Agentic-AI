import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = BaseProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-sm px-6 py-3 text-small font-medium tracking-wide transition-colors duration-150 ease-standard";

const variantStyles: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  secondary: "border border-border text-foreground hover:border-accent hover:text-accent",
};

/**
 * Renders as a Next Link when `href` is given, otherwise a real
 * `<button>`. Keeps CTA styling consistent across the site regardless of
 * whether the target is a route or an in-page action.
 */
export function Button({ variant = "primary", className, children, href, ...props }: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, "href">)}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ComponentPropsWithoutRef<"button">;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
