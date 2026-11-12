/**
 * CAPA DE DOMINIO — Tipos de contenido.
 * Modelos puros (sin React ni dependencias externas).
 * La UI se adapta a estos tipos; el contenido vive en la capa de datos.
 */

export interface NavItem {
  label: string;
  path: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

/** Encabezado editorial de página (estándar sin imagen de fondo) */
export interface PageHeaderSection {
  /** Etiqueta pequeña en mayúsculas sobre el título (opcional) */
  eyebrow?: string;
  heading: string;
  /** Titular grande en líneas con palabra/parte acentuada de marca */
  titleLines?: { text: string; accent?: boolean }[];
  /** Texto de apoyo bajo el título */
  lead?: string;
}

/** Intro con imagen enmarcada (página Cobertura) */
export interface FeatureIntroSection {
  heading: string;
  text: string;
  /** Lista corta de destacados con palomita */
  bullets?: string[];
  image: string;
  imageAlt: string;
}

/** Etapa de la cobertura: servicios agrupados por momento del contrato */
export interface CoveragePhase {
  title: string;
  description?: string;
  points: string[];
}

export interface PhasesSection {
  eyebrow?: string;
  heading: string;
  intro?: string;
  phases: CoveragePhase[];
}

/** Banda de cierre sobre fondo de marca con CTA */
export interface ClosingBandSection {
  heading: string;
  text?: string;
  ctaLabel: string;
  ctaHref: string;
}

/* ===== Hero destacado de la página de inicio ===== */

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroLink {
  label: string;
  href: string;
  variant: "primary" | "ghost";
}

/** Fragmento del texto de apoyo del hero */
export interface LeadPart {
  text: string;
  bold?: boolean;
  accent?: boolean;
}

export interface HomeHeroContent {
  image: string;
  /** Imagen de fondo del hero (alusiva al servicio); por defecto usa `image` */
  backgroundImage?: string;
  /** Etiqueta pequeña en mayúsculas sobre el título */
  eyebrow?: string;
  titleLines: { text: string; accent?: boolean }[];
  leadParts: LeadPart[];
  ctas: HeroLink[];
}

/** Calculadora compacta embebida en el hero de inicio */
export interface HomeHeroCalculator {
  cities: CalculatorCity[];
  tiers: RateTier[];
  whatsappHref: string;
  phoneHref: string;
  emailHref: string;
  heading: string;
  subtitle?: string;
  cityLabel?: string;
  rentLabel: string;
  resultLabel: string;
  idleHint: string;
  requestLabel: string;
  requestPhoneLabel: string;
  requestEmailLabel: string;
  tierPrefix: string;
  percentageNote: string;
  footnote?: string;
}

export interface IconCard {
  image: string;
  label: string;
}

/** Tarjeta de beneficio con descripción (estilo de sección oscura) */
export interface BenefitCard {
  image: string;
  label: string;
  description: string;
}

export interface BenefitsSection {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: BenefitCard[];
}

export interface IconCardsSection {
  heading?: string;
  items: IconCard[];
  /** Número de columnas en escritorio */
  columns: 2 | 3 | 4 | 5;
}

export interface CheckListSection {
  heading?: string;
  items: string[];
}

/** Sección "Quiénes somos" (página Nosotros) — historia con imagen corporativa */
export interface AboutSection {
  eyebrow: string;
  heading: string;
  story: string;
  /** Imagen corporativa junto al texto */
  image: string;
  imageAlt: string;
}

/** Pilares institucionales: Misión · Visión · Valores (página Nosotros) */
export interface PillarsSection {
  heading: string;
  mission: { title: string; text: string };
  vision: { title: string; text: string };
  valuesHeading: string;
  values: string[];
}

export interface TeamMember {
  photo: string;
  role: string;
  name: string;
  bio: string;
}

/** Tarjeta de servicio con icono de línea (retícula plana de servicios) */
export interface ServiceCard {
  /** Clave del icono SVG a renderizar */
  icon:
    | "poliza"
    | "investigacion"
    | "contrato"
    | "cobranza"
    | "convenio"
    | "juicio";
  title: string;
  description: string;
}

export interface ClientsSection {
  heading: string;
  rows: string[][];
}

export interface CtaButton {
  text: string;
  href: string;
}

/* ===== Secciones de "Protección integral" (inicio) ===== */

/** Franja compacta de promesas de la marca (iconos bajo el hero) */
export interface PromiseSection {
  items: IconCard[];
}

/** Tarjeta de servicio: icono + título + texto explicativo (sin botones) */
export interface ProtectionCard {
  /** Clave del icono SVG a renderizar */
  icon: "contrato" | "investigacion" | "proteccion" | "recuperacion";
  title: string;
  /** Primer renglón destacado en negritas */
  lead: string;
  description: string;
}

/** Sección de servicios: "¿Cómo te protegemos?" */
export interface ProtectionSection {
  eyebrow: string;
  heading: string;
  intro?: string;
  cards: ProtectionCard[];
}

/** Paso numerado del flujo "¿Cómo funciona?" */
export interface ProtectionStep {
  title: string;
  description: string;
}

/** Sección de proceso: "¿Cómo funciona?" (línea de tiempo) */
export interface ProcessSection {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  steps: ProtectionStep[];
}

/** Pregunta frecuente (acordeón nativo con <details>) */
export interface FaqItem {
  question: string;
  answer: string;
}

/* ===== Sección "¿Qué es la cobertura?" (página Cobertura) ===== */

/** Bloque informativo estilo glosario: icono + título + texto */
export interface InfoBlock {
  /** Clave del icono SVG a renderizar */
  icon: "informacion" | "flujo" | "proteccion";
  title: string;
  text: string;
}

export interface InfoBlocksSection {
  heading: string;
  intro?: string;
  blocks: InfoBlock[];
}

/* ===== Calculadora de póliza (Tabulador) ===== */

/** Franja de tarifa: costo de póliza según renta mensual */
export interface RateTier {
  /** Renta mensual mínima (inclusive) */
  min: number;
  /** Renta mensual máxima (inclusive); null = sin límite superior */
  max: number | null;
  /** Costo fijo de la póliza */
  cost: number;
}

/** Ciudad con factor sobre la tarifa base */
export interface CalculatorCity {
  id: string;
  name: string;
  /** Multiplicador sobre la tarifa base (1 = tarifa base) */
  factor: number;
}
