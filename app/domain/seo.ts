/**
 * MÓDULO DE SEO Y METADATOS PARA POLIRENTA
 * Cumple al 100% con los estándares de Google Search Essentials (2026):
 * - Open Graph & Twitter Cards con imágenes de alta resolución
 * - Schema.org completo (LegalService, WebSite, Breadcrumbs, FAQPage, Person)
 * - SEO Local con Geo-coordenadas y NAP consistente (Name, Address, Phone)
 * - E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 */

export const SITE_URL = "https://polirenta.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/banner.jpg`;
export const SITE_NAME = "Polirenta";

export interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  noindex?: boolean;
}

/**
 * Genera el arreglo de metadatos estricto para el hook `meta` de React Router.
 */
export function buildPageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords = [],
  noindex = false,
}: PageSeoConfig) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const defaultKeywords = [
    "póliza jurídica de arrendamiento",
    "póliza jurídica puebla",
    "pólizas de arrendamiento méxico",
    "investigación de inquilinos",
    "contrato de arrendamiento seguro",
    "protección inmobiliaria puebla",
    "recuperación de inmuebles",
    "abogados arrendamiento puebla",
    "polirenta",
  ];

  const mergedKeywords = Array.from(new Set([...keywords, ...defaultKeywords])).join(", ");

  const metaArray: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: mergedKeywords },
    { name: "author", content: "Polirenta" },
    { name: "publisher", content: "Polirenta" },
    { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },

    // SEO Local & Geo-targeting
    { name: "geo.region", content: "MX-PUE" },
    { name: "geo.placename", content: "Heroica Puebla de Zaragoza, Puebla, México" },
    { name: "geo.position", content: "19.0578;-98.1889" },
    { name: "ICBM", content: "19.0578, -98.1889" },

    // Canonical link tag
    { tagName: "link", rel: "canonical", href: url },

    // Open Graph (WhatsApp, Facebook, LinkedIn)
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:locale", content: "es_MX" },
    { property: "og:image", content: fullImage },
    { property: "og:image:secure_url", content: fullImage },
    { property: "og:image:alt", content: title },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter Cards (X)
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: fullImage },
    { name: "twitter:image:alt", content: title },
  ];

  return metaArray;
}

/**
 * Schema.org Graph para la página de Inicio:
 * Incluye WebSite + LegalService (Organization) + Geo + Servicios.
 */
export function getHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: "Pólizas Jurídicas de Arrendamiento y Protección Inmobiliaria en Puebla y CDMX",
        inLanguage: "es-MX",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "LegalService",
        "@id": `${SITE_URL}/#organization`,
        name: "Polirenta",
        alternateName: [
          "Polirenta Pólizas Jurídicas",
          "Polirenta Puebla",
          "Polirenta Arrendamiento Seguro",
        ],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo-transparente.png`,
          width: 904,
          height: 358,
          caption: "Polirenta - Pólizas Jurídicas de Arrendamiento Inmobiliario",
        },
        image: `${SITE_URL}/images/banner.jpg`,
        description:
          "Firma jurídica especialista en pólizas de arrendamiento inmobiliario, investigación de inquilinos, contratos y cobranza judicial y extrajudicial en Puebla y Ciudad de México.",
        telephone: "+522228077863",
        email: "contacto@polirenta.com",
        priceRange: "$$",
        currenciesAccepted: "MXN",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calzada de los Fuertes # 83, Col. Jardines de Los Fuertes",
          addressLocality: "Puebla",
          addressRegion: "PUE",
          postalCode: "72266",
          addressCountry: "MX",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 19.0578,
          longitude: -98.1889,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Puebla",
          },
          {
            "@type": "AdministrativeArea",
            name: "Ciudad de México",
          },
          {
            "@type": "Country",
            name: "México",
          },
        ],
        sameAs: ["https://wa.link/xdjr2f"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Catálogo de Protección y Pólizas de Arrendamiento",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Póliza Jurídica de Arrendamiento",
                description:
                  "Protección legal para arrendadores: investigación de inquilinos, elaboración de contrato con formalidad plena, cobranza extrajudicial y juicios de recuperación con honorarios cubiertos.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Investigación Integral de Inquilinos",
                description:
                  "Análisis patrimonial, solvencia crediticia en buró de crédito, antecedentes judiciales y validación de fiadores.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Elaboración y Firma de Contratos de Arrendamiento",
                description:
                  "Redacción de contrato formal respaldado por abogados y asistencia jurídica presencial a la firma.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cobranza Extrajudicial y Juicios de Recuperación",
                description:
                  "Gestión de cobranza ante impago y tramitación de juicios de desahucio o recuperación de inmuebles en Puebla.",
                provider: {
                  "@id": `${SITE_URL}/#organization`,
                },
              },
            },
          ],
        },
      },
    ],
  };
}

/**
 * Schema.org BreadcrumbList con estándar de Google Rich Results
 */
export function getBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/**
 * Schema.org FAQPage para Rich Snippets en Google Search
 */
export function getFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Schema.org E-E-A-T para el equipo de abogados de la página Nosotros
 */
export function getTeamSchema(
  members: Array<{ name: string; role: string; bio: string; photo: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Nosotros | Especialistas en Derecho y Arrendamiento | Polirenta",
    description: "Conoce al equipo legal de Polirenta, firma especializada en arrendamiento inmobiliario en Puebla.",
    mainEntity: {
      "@type": "LegalService",
      name: "Polirenta",
      employee: members.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        description: m.bio,
        image: `${SITE_URL}${m.photo}`,
        worksFor: {
          "@type": "LegalService",
          name: "Polirenta",
        },
      })),
    },
  };
}
