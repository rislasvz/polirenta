/**
 * CAPA DE DATOS — Contenido de la página Cobertura.
 * Estructura: encabezado editorial → intro con imagen → categorías de
 * inmuebles → cobertura por etapas (antes / durante / si incumple) → cierre.
 */

import type {
  ClosingBandSection,
  FeatureIntroSection,
  IconCard,
  IconCardsSection,
  PageHeaderSection,
  PageMeta,
  PhasesSection,
} from "../domain/content-types";

export const COBERTURA_META: PageMeta = {
  title: "Cobertura de Pólizas Jurídicas de Arrendamiento | Polirenta",
  description:
    "Descubre la cobertura integral de Polirenta: investigación del arrendatario, contratos a la medida, cobranza extrajudicial y recuperación del inmueble.",
};

/**
 * Encabezado editorial de la página (estándar sin imagen de fondo).
 */
export const COBERTURA_HEADER: PageHeaderSection = {
  eyebrow: "Cobertura",
  heading: "Renta de forma segura con la protección de la póliza Polirenta",
  lead: "Descubre qué incluye tu póliza, en qué categorías de inmuebles aplica y hasta dónde llega su protección legal.",
};

/**
 * Intro con imagen: qué es la cobertura, en pocas palabras.
 */
export const COBERTURA_INTRO: FeatureIntroSection = {
  heading: "¿Qué es la cobertura de tu póliza?",
  text: "Es el alcance de la protección que reúne tu póliza jurídica de arrendamiento: todo lo que Polirenta realiza y ampara por ti durante la vigencia del contrato — desde la investigación del probable arrendatario y la elaboración del contrato, hasta la cobranza y los juicios para recuperar tu inmueble, con los honorarios de los abogados incluidos.",
  bullets: [
    "Servicios de investigación del arrendatario",
    "Respaldo jurídico en la firma y la devolución",
    "Cobranza y juicios con honorarios incluidos",
  ],
  /** Profesional firmante + maqueta de casa: contratación con protección */
  image: "/images/cobertura-hero.jpg",
  imageAlt:
    "Asesor de Polirenta firmando un contrato frente a una maqueta de casa",
};

/**
 * Categorías de inmuebles con cobertura.
 */
export const COBERTURA_CATEGORIES = {
  heading: "Nuestra protección tiene cobertura dentro de las siguientes categorías",
  columns: 5,
  items: [
    { image: "/images/cat-casas.png", label: "Casas" },
    { image: "/images/cat-oficinas.png", label: "Oficinas" },
    { image: "/images/cat-empresas.png", label: "Empresas" },
    { image: "/images/cat-roomies.png", label: "Roomies" },
    { image: "/images/cat-extranjeros.png", label: "Extranjeros" },
  ],
} satisfies IconCardsSection;

/**
 * Cobertura por etapas: los servicios reales de la póliza organizados
 * por el momento en que actúan (antes / durante / si incumple).
 */
export const COBERTURA_PHASES: PhasesSection = {
  eyebrow: "Cobertura por etapas",
  heading: "Una póliza que te acompaña en cada etapa del arrendamiento",
  intro:
    "La protección de Polirenta no es un documento que duerme en el cajón: es un servicio activo antes, durante y —si es necesario— al final de tu contrato.",
  phases: [
    {
      title: "Antes de firmar",
      description: "Conoce a tu inquilino antes de entregar las llaves.",
      points: [
        "Investigación del posible arrendatario",
        "Revisión de documentación: completa, vigente y fidedigna",
        "Consulta del inquilino ante el buró de crédito",
        "Elaboración del contrato de arrendamiento personalizado",
        "Asistencia de un abogado a la firma del contrato",
      ],
    },
    {
      title: "Durante la vigencia",
      description: "Si hay atraso, actuamos antes de que crezca el problema.",
      points: [
        "Cobranza extrajudicial después de 25 días naturales de atraso",
        "Apoyo extrajudicial ante reincidencia de incumplimiento",
        "Elaboración del convenio por terminación anticipada",
        "Asistencia de un abogado a la devolución del inmueble",
      ],
    },
    {
      title: "Si tu inquilino incumple",
      description: "Tu inmueble de regreso, respaldado por la ley.",
      points: [
        "Juicio de recuperación por falta de pago de rentas",
        "Juicio de recuperación por abandono del inmueble",
        "Juicio de recuperación por vencimiento del contrato",
        "Recuperación física y legal del inmueble garantizada",
        "Honorarios de los abogados incluidos",
        "Cobertura de extinción de dominio",
      ],
    },
  ],
};

/**
 * Banda de cierre sobre fondo azul de marca, con llamada a la acción
 * hacia el cotizador.
 */
export const COBERTURA_CLOSING: ClosingBandSection = {
  heading: "Tenemos la cobertura más amplia del mercado",
  text: "Cotiza en línea con la renta mensual de tu inmueble y contrata la protección completa para tu propiedad.",
  ctaLabel: "Cotiza tu póliza",
  ctaHref: "/tabulador",
};
