/**
 * CAPA DE DATOS — Contenido de la página Tabulador / Cotizador de precios.
 * Franjas de tarifa tomadas del tabulador oficial de Polirenta.
 */

import type {
  CalculatorCity,
  CtaButton,
  FaqItem,
  PageMeta,
  RateTier,
} from "../domain/content-types";
import { BRAND } from "../domain/brand";

export const TABULADOR_META: PageMeta = {
  title: "Cotizador y Precios de Pólizas de Arrendamiento | Polirenta",
  description:
    "Cotiza en línea el costo de tu póliza jurídica de arrendamiento en Puebla y CDMX. Precios oficiales 2025, comparativa de planes y respuesta en 24 horas.",
};

/* ----- Intro (hero claro) ----- */

export const PRICING_INTRO = {
  eyebrow: "Protección · Confianza · Respaldo real",
  title: "Precios de pólizas jurídicas de arrendamiento",
  lead: "Cotiza en línea y protege tu inmueble en segundos. Sin letra chica: el precio que ves es la tarifa oficial.",
  primaryCta: { text: "Cotiza ahora", href: "#cotizador" },
  secondaryCta: { text: "Conoce nuestros servicios", href: "/servicios" },
} as const;

/* ----- Cotizador ----- */

export const QUOTER_COPY = {
  heading: "Calcula el costo de tu póliza en segundos",
  lead: "Elige la ciudad de tu inmueble e ingresa el monto de renta mensual: el precio se actualiza al instante.",
  cityLabel: "¿En qué ciudad está tu inmueble?",
  rentLabel: "¿Cuál es el monto de renta mensual?",
  rentHint: "Escribe el monto en pesos mexicanos (MXN).",
  cardTag: "Tarifa oficial 2025",
  cardTitle: "Póliza Jurídica Polirenta",
  cardSubtitle: "Asesoría legal integral durante todo tu contrato",
  costLabel: "Costo estimado",
  idleHint: "Ingresa la renta mensual para ver tu precio.",
  tierPrefix: "Franja de renta:",
  percentageNote: "30% de tu renta mensual",
  perCityNote: (factor: number, city: string) =>
    `Incluye el ajuste de ${city} (tarifa base ×${factor})`,
  errorOutOfRange: "La renta está fuera del tabulador; solicita una cotización personalizada.",
  errorInvalid: "Ingresa una renta mensual válida.",
  requestLabel: "Cotizar por WhatsApp",
  disclaimer:
    "*Cotización estimada con base en el tabulador oficial 2025. El precio final se confirma tras el análisis de tu inquilino.",
} as const;

/* ----- Lista "todas las pólizas incluyen" ----- */

export const POLICY_INCLUDES = [
  "Asesoría jurídica personalizada",
  "Elaboración del contrato de arrendamiento",
  "Asistencia de un abogado a la firma",
  "Investigación del probable arrendatario",
  "Cobranza y gestión de recuperación del inmueble",
  "Honorarios de abogados incluidos",
] as const;

export const INCLUDES_TITLE = "Todas nuestras pólizas incluyen";

/* ----- FAQ ----- */

export const PRICING_FAQS: FaqItem[] = [
  {
    question: "¿Qué incluye el costo de la póliza?",
    answer:
      "La póliza cubre la investigación del arrendatario, la revisión de su documentación y buró de crédito, la elaboración del contrato, la asistencia de un abogado en la firma y en la devolución del inmueble, la cobranza extrajudicial y, en su caso, los juicios para recuperar el inmueble — con honorarios de abogados incluidos.",
  },
  {
    question: "¿Existe un monto mínimo o máximo de renta?",
    answer:
      "No hay un mínimo: el tabulador inicia en rentas de $1 y cubre hasta $500,000 mensuales. Para rentas mayores a $100,000 el costo se calcula como el 30% de la renta mensual.",
  },
  {
    question: "¿El precio cambia entre Puebla y Ciudad de México?",
    answer:
      "La tarifa base es la del tabulador oficial (Puebla). Para inmuebles ubicados en Ciudad de México se aplica un ajuste sobre la tarifa base, que se refleja automáticamente en esta calculadora.",
  },
  {
    question: "¿Cómo contrato mi póliza?",
    answer:
      "Solo solicita tu cotización por WhatsApp: confirmamos la tarifa, realizamos la investigación del probable arrendatario, elaboramos el contrato y un abogado asiste a la firma.",
  },
  {
    question: "¿En cuánto tiempo tengo respuesta?",
    answer:
      "En Polirenta respondemos en tan solo 24 horas, para que puedas rentar tu inmueble de forma cómoda y segura sin retrasos.",
  },
];

/* ----- CTA final ----- */

export const TABULADOR_CTA: CtaButton = {
  text: "Solicitar cotización por WhatsApp",
  href: BRAND.whatsappHref,
};

/* ----- Tarifa base (tabulador oficial 2025) ----- */

export const CALCULATOR_CITIES: CalculatorCity[] = [
  { id: "puebla", name: "Puebla", factor: 1 },
  { id: "cdmx", name: "Ciudad de México", factor: 1.15 },
];

export const RATE_TIERS: RateTier[] = [
  { min: 1, max: 4_000, cost: 3_200 },
  { min: 4_001, max: 7_000, cost: 3_500 },
  { min: 7_001, max: 10_000, cost: 3_700 },
  { min: 10_001, max: 15_000, cost: 4_200 },
  { min: 15_001, max: 20_000, cost: 5_200 },
  { min: 20_001, max: 25_000, cost: 6_100 },
  { min: 25_001, max: 30_000, cost: 7_100 },
  { min: 30_001, max: 35_000, cost: 9_300 },
  { min: 35_001, max: 40_000, cost: 11_200 },
  { min: 40_001, max: 45_000, cost: 12_650 },
  { min: 45_001, max: 50_000, cost: 13_650 },
  { min: 50_001, max: 55_000, cost: 14_900 },
  { min: 55_001, max: 60_000, cost: 16_000 },
  { min: 60_001, max: 65_000, cost: 17_100 },
  { min: 65_001, max: 70_000, cost: 18_200 },
  { min: 70_001, max: 75_000, cost: 20_400 },
  { min: 75_001, max: 80_000, cost: 21_500 },
  { min: 80_001, max: 85_000, cost: 22_650 },
  { min: 85_001, max: 90_000, cost: 23_750 },
  { min: 90_001, max: 95_000, cost: 25_050 },
  { min: 95_001, max: 100_000, cost: 26_800 },
  { min: 100_001, max: 500_000, cost: 0 }, // 30% de la renta mensual
];
