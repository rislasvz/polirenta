import type { Route } from "./+types/servicios";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { PageHeader } from "../components/shared/page-header";
import { ClosingBand } from "../components/shared/closing-band";
import { ServicesGrid } from "../sections/servicios/services-grid";
import { buildPageMeta, getBreadcrumbSchema } from "../domain/seo";
import {
  SERVICIOS_META,
  SERVICIOS_HEADER,
  SERVICIOS_CARDS,
  SERVICIOS_CLOSING,
} from "../data/servicios";

export function meta({}: Route.MetaArgs) {
  return buildPageMeta({
    title: SERVICIOS_META.title,
    description: SERVICIOS_META.description,
    path: "/servicios",
    image: "/images/banner.jpg",
    keywords: [
      "servicios juridicos inmobiliarios",
      "elaboracion de contratos de arrendamiento",
      "cobranza extrajudicial inquilinos",
      "desalojo legal puebla",
    ],
  });
}

export default function Servicios() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <main>
        <PageHeader content={SERVICIOS_HEADER} />

        <ServicesGrid cards={SERVICIOS_CARDS} />

        {/* Cierre con CTA de WhatsApp sobre fondo azul de marca */}
        <ClosingBand content={SERVICIOS_CLOSING} />
      </main>

      <Footer />
    </>
  );
}
