import { clsx, type ClassValue } from "clsx";

/**
 * Utility for merging Tailwind CSS class names.
 * Combines clsx for conditional classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
