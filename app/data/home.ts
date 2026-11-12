/**
 * CAPA DE DATOS — Contenido de la página de Inicio.
 * Referencia de tipos: app/domain/content-types.ts
 */

import { BRAND } from "../domain/brand";
import type {
  BenefitsSection,
  ClientsSection,
  HomeHeroContent,
  IconCard,
  PageMeta,
  ProcessSection,
  PromiseSection,
  ProtectionSection,
} from "../domain/content-types";

export const HOME_META: PageMeta = {
  title: "Polirenta | Pólizas Jurídicas de Arrendamiento en Puebla",
  description:
    "Protege tu inmueble en renta con pólizas jurídicas de arrendamiento en Puebla y CDMX. Investigación de inquilinos, contratos y cobranza con respuesta en 24h.",
};

export const HOME_HERO: HomeHeroContent = {
  image: "/images/hero-casas.jpg",
  /** Fondo del hero: vista de la Vía Atlixcáyotl hacia Angelópolis, Puebla */
  backgroundImage: "/images/hero-angelopolis.jpg",
  eyebrow: "Protección · Confianza · Respaldo real",
  titleLines: [
    { text: "Pólizas Jurídicas de" },
    { text: "Arrendamiento", accent: true },
  ],
  leadParts: [
    { text: "En " },
    { text: "Polirenta", bold: true },
    { text: " protegemos tu patrimonio con " },
    { text: "pólizas jurídicas de arrendamiento", accent: true },
    {
      text: " y soluciones de protección para propietarios e inmobiliarias en Puebla y Ciudad de México.",
    },
  ],
  ctas: [
    { label: "Cotiza tu póliza", href: "/tabulador", variant: "primary" },
    { label: "Conoce nuestros servicios", href: "/servicios", variant: "ghost" },
  ],
};

/** Configuración de la calculadora embebida en el hero (tarifa del tabulador) */export const HOME_HERO_CALCULATOR = {
  whatsappHref: BRAND.whatsappHref,
  phoneHref: BRAND.phoneHref,
  emailHref: `mailto:${BRAND.email}?subject=${encodeURIComponent(
    "Cotización de póliza jurídica de arrendamiento",
  )}`,
  heading: "Calcula el costo de tu póliza de arrendamiento",
  subtitle: "Ingresa la renta mensual para conocer el costo estimado.",
  cityLabel: "Ciudad",
  rentLabel: "Renta mensual",
  resultLabel: "Costo estimado",
  idleHint: "Ingresa la renta para ver tu precio al instante.",
  requestLabel: "Cotizar por WhatsApp",
  requestPhoneLabel: "Llamar por teléfono",
  requestEmailLabel: "Cotizar por correo",
  tierPrefix: "Franja:",
  percentageNote: "30% de tu renta mensual",
  footnote:
    "*Cotización estimada con base en el tabulador oficial 2025; el precio final se confirma tras el análisis.",
};

/** Franja de promesas bajo el hero: 3 sellos rápidos de la marca */
export const HOME_PROMISES: PromiseSection = {
  items: [
    { image: "/images/renta-comoda.svg", label: "Renta de forma cómoda y segura" },
    {
      image: "/images/respuesta-24h.svg",
      label: "Respuesta en tan solo 24 horas",
    },
    {
      image: "/images/proteccion-momento.svg",
      label: "Protección en todo momento",
    },
  ],
};

/**
 * Sección "¿Cómo te protegemos?" — servicios que incluye la póliza.
 * Cada tarjeta se explica por sí sola (sin botones).
 */
export const HOME_PROTECTION: ProtectionSection = {
  eyebrow: "Protección integral",
  heading: "¿Cómo te protegemos?",
  intro:
    "Tu póliza jurídica de arrendamiento reúne todo lo necesario para rentar con tranquilidad: investigamos a tu inquilino, formalizamos el contrato y defendemos tu patrimonio durante toda la vigencia del contrato.",
  cards: [
    {
      icon: "contrato",
      title: "Contratos con formalidad plena",
      lead: "Un contrato a la medida de tu inmueble.",
      description:
        "Elaboramos el contrato de arrendamiento considerando las particularidades de tu propiedad y acompañamos la firma con asistencia de un abogado. El resultado: un acuerdo claro, formal y exigible ante las autoridades correspondientes.",
    },
    {
      icon: "investigacion",
      title: "Investigación de inquilinos",
      lead: "Conoce a tu inquilino antes de entregar las llaves.",
      description:
        "Antes de firmar, analizamos la documentación del probable arrendatario y consultamos su historial ante el buró de crédito. Así contratas con certeza y evitas sorpresas a mitad del camino.",
    },
    {
      icon: "proteccion",
      title: "Protección de tu renta y tu patrimonio",
      lead: "Si tu inquilino incumple, nosotros actuamos.",
      description:
        "Ante cualquier incumplimiento, Polirenta se encarga de la cobranza y de los trámites legales correspondientes, desde la gestión extrajudicial hasta la devolución del inmueble mediante un convenio formal. Tu patrimonio y tu familia quedan resguardados.",
    },
    {
      icon: "recuperacion",
      title: "Recuperación del inmueble",
      lead: "Tu propiedad de regreso, respaldada por la ley.",
      description:
        "Si el incumplimiento persiste —por falta de pago, abandono o vencimiento del contrato— impulsamos el juicio de recuperación del inmueble y lo representamos en cada etapa. Los honorarios de los abogados están incluidos en la póliza: nunca son un gasto adicional para ti.",
    },
  ],
};

/** Sección "¿Cómo funciona?" — proceso en 4 pasos */
export const HOME_PROCESS: ProcessSection = {
  eyebrow: "Proceso simple",
  heading: "¿Cómo funciona?",
  subtitle:
    "Contratar tu póliza jurídica de arrendamiento toma minutos; el respaldo dura todo el contrato.",
  steps: [
    {
      title: "Cotiza en línea",
      description:
        "Ingresa la renta mensual de tu inmueble y conoce el costo de tu póliza al instante.",
    },
    {
      title: "Contrata tu póliza",
      description:
        "Hablemos por WhatsApp o teléfono; tu póliza se ajusta a las necesidades de tu propiedad.",
    },
    {
      title: "Investigamos y firmamos",
      description:
        "Verificamos al probable inquilino, elaboramos el contrato y acompañamos la firma.",
    },
    {
      title: "Vive tranquilo",
      description:
        "Durante toda la vigencia del contrato, tu inmueble cuenta con respaldo jurídico permanente.",
    },
  ],
};

export const HOME_BANNER_IMAGE = "/images/banner.jpg";

export const HOME_BENEFITS_SECTION: BenefitsSection = {
  eyebrow: "Qué incluye tu póliza",
  title: "NUESTROS BENEFICIOS",
  subtitle:
    "Con la póliza jurídica de arrendamiento de Polirenta obtienes protección completa durante todo tu contrato.",
  items: [
    {
      image: "/images/ben-asesoria-juridica-gold.svg",
      label: "Asesoría jurídica",
      description:
        "Nuestros abogados te acompañan y asesoran durante cada etapa del arrendamiento, desde la investigación hasta la devolución del inmueble.",
    },
    {
      image: "/images/ben-proteccion-patrimonio-gold.svg",
      label: "Protección de su patrimonio",
      description:
        "Ante cualquier incumplimiento nos encargamos de la cobranza y los trámites legales; tu inmueble y tu familia quedan resguardados.",
    },
    {
      image: "/images/ben-elaboracion-contrato-gold.svg",
      label: "Elaboración de contrato",
      description:
        "Investigamos al probable arrendatario y elaboramos un contrato de arrendamiento a la medida de tu inmueble y sus necesidades.",
    },
    {
      image: "/images/ben-formalidad-contrato-gold.svg",
      label: "Formalidad del contrato",
      description:
        "Tu contrato cuenta con formalidad plena para respaldar tus derechos ante las autoridades correspondientes.",
    },
  ],
};

export const HOME_CLIENTS: ClientsSection = {
  heading: "Inmobiliarias que confían en nosotros",
  rows: [
    [
      "/images/cli-01.jpeg",
      "/images/cli-02.jpg",
      "/images/cli-03.jpeg",
      "/images/cli-04.jpg",
      "/images/cli-05.jpeg",
      "/images/cli-06.png",
      "/images/cli-07.jpg",
      "/images/cli-08.jpg",
      "/images/cli-09.jpeg",
    ],
    [
      "/images/cli-10.jpeg",
      "/images/cli-11.jpg",
      "/images/cli-12.jpg",
      "/images/cli-13.jpg",
      "/images/cli-14.jpeg",
      "/images/cli-15.jpeg",
      "/images/cli-16.jpeg",
      "/images/cli-17.png",
      "/images/cli-18.jpeg",
    ],
  ],
};
