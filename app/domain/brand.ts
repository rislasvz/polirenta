/**
 * CAPA DE DOMINIO — Marca y navegación del sitio.
 * Datos puros compartidos por header, footer y páginas.
 */

import type { NavItem } from "./content-types";

export const BRAND = {
  name: "Polirenta",
  logo: "/images/logo-transparente.png",
  logoLight: "/images/logo-light.png",
  longLogo: "/images/logo-transparente.png",
  phone: "2228077863",
  phoneHref: "tel:2228077863",
  email: "contacto@polirenta.com",
  addressLines: [
    "Calzada de los Fuertes # 83, Col. Jardines de Los Fuertes,",
    "CP 72266, Puebla, Pue.",
  ],
  /** Botón/enlace de contratación por WhatsApp */
  whatsappHref: "https://wa.link/xdjr2f",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", path: "/" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Cobertura", path: "/cobertura" },
  { label: "Tabulador", path: "/tabulador" },
  { label: "Servicios", path: "/servicios" },
];
