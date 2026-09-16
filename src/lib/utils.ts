/**
 * Joins conditional class names without pulling in an extra dependency
 * (e.g. clsx). Falsy values are dropped.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
