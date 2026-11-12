/**
 * CAPA DE DOMINIO — Reglas de negocio de la calculadora de póliza.
 * Lógica pura, sin React ni contenido estático.
 */

import type { CalculatorCity, RateTier } from "./content-types";

export class RentOutOfRangeError extends Error {}

/** Porcentaje para rentas mayores a la última franja fija */
const PERCENTAGE_TIER_RATE = 0.3; // 30% de la renta mensual
const PERCENTAGE_TIER_THRESHOLD = 100_000;

/** Redondea al múltiplo de 10 más cercano */
function roundTo10(value: number): number {
  return Math.round(value / 10) * 10;
}

/**
 * Calcula el costo final de la póliza a partir de la renta mensual y la ciudad.
 * - Si la renta cae en una franja de costo fijo, se toma ese costo × factor ciudad.
 * - Rentas mayores al umbral se cobran como porcentaje de la renta × factor ciudad.
 */
export function computePolicyCost(
  monthlyRent: number,
  city: CalculatorCity,
  tiers: RateTier[],
): number {
  if (!Number.isFinite(monthlyRent) || monthlyRent <= 0) {
    throw new RentOutOfRangeError("Ingresa una renta válida.");
  }

  const tier = tiers.find(
    (t) => monthlyRent >= t.min && (t.max === null || monthlyRent <= t.max),
  );

  if (!tier) {
    // Renta fuera de tabulador (p. ej. mayor al tope)
    throw new RentOutOfRangeError(
      "La renta está fuera del tabulador; solicita una cotización personalizada.",
    );
  }

  const base =
    tier.max !== null && tier.min >= PERCENTAGE_TIER_THRESHOLD
      ? monthlyRent * PERCENTAGE_TIER_RATE
      : tier.cost;

  return roundTo10(base * city.factor);
}

/** Renta a partir de la cual se cobra porcentualmente */
export const PERCENTAGE_THRESHOLD = 100_000;

/** Formatea un costo como moneda mexicana sin centavos */
export function formatPolicyCost(value: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Sanea la entrada de renta: conserva solo dígitos y los agrupa con comas */
export function sanitizeRentInput(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 7);
  return digits ? new Intl.NumberFormat("es-MX").format(Number(digits)) : "";
}
