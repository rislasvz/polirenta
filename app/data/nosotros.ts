/**
 * CAPA DE DATOS — Contenido de la página Nosotros.
 */

import type {
  AboutSection,
  PageMeta,
  PillarsSection,
  TeamMember,
} from "../domain/content-types";

export const NOSOTROS_META: PageMeta = {
  title: "Nosotros | Especialistas en Derecho y Arrendamiento | Polirenta",
  description:
    "Conoce al equipo de Polirenta: abogados especialistas en derecho inmobiliario y arrendamiento en Puebla dedicados a proteger tu patrimonio e inversión.",
};

/**
 * Sección "Quiénes somos" — presentación de la firma:
 * historia + imagen corporativa.
 */
export const NOSOTROS_ABOUT: AboutSection = {
  eyebrow: "Quiénes somos",
  heading:
    "Estrategia legal y protección patrimonial para arrendadores en Puebla",
  story:
    "Polirenta nace con el objetivo de generar seguridad jurídica a las personas que dan en arrendamiento su inmueble a terceros. Generamos estrategias legales para dar un servicio integral y prevenir conflictos durante la vigencia de los contratos, aliándonos con la protección del patrimonio de nuestros clientes.",
  /** Profesional firmando: formalidad y confianza de la marca */
  image: "/images/nosotros-contrato.jpg",
  imageAlt: "Contrato de arrendamiento corporativo de Polirenta con sello de garantía dorado",
};

/**
 * Sección "Pilares" — Misión · Visión · Valores de la firma.
 */
export const NOSOTROS_PILLARS: PillarsSection = {
  heading: "Misión, visión y valores",
  mission: {
    title: "Misión",
    text: "Luchar día a día por el mejoramiento de nuestro servicio, siempre con el objetivo de proteger los intereses de nuestros clientes, a través de un servicio eficiente y personalizado.",
  },
  vision: {
    title: "Visión",
    text: "Ser líderes a nivel regional en protección inmobiliaria, en beneficio de quienes ante una incertidumbre buscan seguridad en sus actos de arrendamiento.",
  },
  valuesHeading: "Valores",
  values: [
    "Eficiencia",
    "Honestidad",
    "Responsabilidad",
    "Secreto profesional",
    "Confianza",
    "Lealtad",
  ],
};

export const NOSOTROS_TEAM: TeamMember[] = [
  {
    photo: "/images/equipo-director.jpg",
    role: "Director General",
    name: "Abg. Héctor Salazar Valdez",
    bio: "Egresado de la Escuela Libre de Derecho de Puebla A.C. Fundador de Polirenta, apasionado del derecho civil y especialista en arrendamiento inmobiliario.",
  },
  {
    photo: "/images/equipo-gerente.jpeg",
    role: "Gerente General",
    name: "Abg. Karen Coral Corona Huerta",
    bio: "Licenciada en Derecho por el Instituto de Estudios Universitarios. Encargada del área de ventas, supervisora y redactora. Especialista en análisis jurídicos de inmuebles.",
  },
  {
    photo: "/images/equipo-legal.jpeg",
    role: "Gerente Legal",
    name: "Abg. Aida Elvira Naked Salazar",
    bio: "Licenciada en Derecho por la Universidad del Valle de Puebla (UVP), con especialidad en Derecho Corporativo y Empresarial. Dedicada al ramo inmobiliario en constante crecimiento profesional.",
  },
];
