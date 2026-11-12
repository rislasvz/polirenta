/**
 * CAPA DE DATOS — Contenido de la página Servicios.
 * Estructura: encabezado editorial → retícula plana de servicios con
 * iconos dorados → cierre con CTA de WhatsApp.
 */

import type {
  ClosingBandSection,
  PageHeaderSection,
  PageMeta,
  ServiceCard,
} from "../domain/content-types";

export const SERVICIOS_META: PageMeta = {
  title: "Servicios de Protección Inmobiliaria y Legal | Polirenta",
  description:
    "Servicios legales para arrendadores: investigación de inquilinos en buró, elaboración de contratos de arrendamiento, cobranza extrajudicial y juicios en Puebla.",
};

/**
 * Encabezado editorial de la página (estándar sin imagen de fondo).
 */
export const SERVICIOS_HEADER: PageHeaderSection = {
  heading: "Servicios y soluciones de protección inmobiliaria",
  titleLines: [
    { text: "Servicios y soluciones" },
    { text: "de protección inmobiliaria.", accent: true },
  ],
  lead:
    "En Polirenta estamos comprometidos con nuestros clientes; por ello ofrecemos diferentes servicios y soluciones en la protección de inmuebles.",
};

/**
 * Retícula plana de servicios: iconos dorados de línea sobre fichas con
 * tinte corporativo, alineados al estilo editorial de la marca.
 */
export const SERVICIOS_CARDS: ServiceCard[] = [
  {
    icon: "poliza",
    title: "Póliza Jurídica de Arrendamiento",
    description:
      "Nos encargamos de protegerte como propietario y garantizar la seguridad de tu inmueble durante todo el arrendamiento.",
  },
  {
    icon: "investigacion",
    title: "Investigación de inquilinos",
    description:
      "Evaluamos la solvencia de cada persona: verificamos su documentación y consultamos su historial ante el buró de crédito, para que contrates con certeza.",
  },
  {
    icon: "contrato",
    title: "Elaboración de contratos",
    description:
      "Redactamos el contrato a la medida de tu inmueble y acompañamos la firma con la asistencia de un abogado.",
  },
  {
    icon: "cobranza",
    title: "Cobranza extrajudicial",
    description:
      "Ante el atraso en el pago, gestionamos la cobranza y el apoyo legal sin necesidad de llegar a juicio.",
  },
  {
    icon: "convenio",
    title: "Convenios y devolución",
    description:
      "Elaboramos el convenio por terminación anticipada y acompañamos la devolución del inmueble con la asistencia legal correspondiente.",
  },
  {
    icon: "juicio",
    title: "Juicio de recuperación",
    description:
      "Impulsamos el juicio para recuperar tu inmueble por falta de pago, abandono o vencimiento del contrato, con los honorarios incluidos.",
  },
];

/**
 * Banda de cierre: llamada a la acción por WhatsApp.
 */
export const SERVICIOS_CLOSING: ClosingBandSection = {
  heading: "¿Listo para proteger tu inmueble?",
  text: "Hablemos por WhatsApp; tu servicio se ajusta a las necesidades de tu propiedad.",
  ctaLabel: "Contratar por WhatsApp",
  ctaHref: "https://wa.link/xdjr2f",
};
