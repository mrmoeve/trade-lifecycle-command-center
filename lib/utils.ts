import { clsx } from "clsx";

export function cn(...values: Array<string | false | null | undefined>) {
  return clsx(values);
}

export function formatCurrency(value: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}

export function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

export function formatBasisPoints(value: number) {
  return `${value.toFixed(0)} bps`;
}

export function sortByKey<T, K extends keyof T>(
  rows: T[],
  key: K,
  direction: "asc" | "desc"
) {
  return [...rows].sort((left, right) => {
    const a = left[key];
    const b = right[key];

    if (typeof a === "number" && typeof b === "number") {
      return direction === "asc" ? a - b : b - a;
    }

    return direction === "asc"
      ? String(a).localeCompare(String(b))
      : String(b).localeCompare(String(a));
  });
}
