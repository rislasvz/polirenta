import type { Route } from "./+types/tabulador";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { SectionTitle } from "../components/shared/section-title";
import { Faq } from "../components/shared/faq";
import { Quoter } from "../sections/tabulador/quoter";
import { buildPageMeta, getBreadcrumbSchema, getFaqSchema } from "../domain/seo";
import {
  TABULADOR_META,
  PRICING_FAQS,
  CALCULATOR_CITIES,
  RATE_TIERS,
} from "../data/tabulador";

export function meta({}: Route.MetaArgs) {
  return buildPageMeta({
    title: TABULADOR_META.title,
    description: TABULADOR_META.description,
    path: "/tabulador",
    image: "/images/tabulador-2025.png",
    keywords: [
      "precios poliza juridica",
      "costo poliza de arrendamiento",
      "cotizador arrendamiento puebla",
      "tabulador polirenta",
    ],
  });
}

export default function Tabulador() {
  const faqSchema = getFaqSchema(PRICING_FAQS);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Precios y Cotizador", path: "/tabulador" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <main>
        {/* Cotizador interactivo con comparativa de planes estilo Segurenta */}
        <Quoter
          cities={CALCULATOR_CITIES}
          tiers={RATE_TIERS}
        />

        {/* Preguntas frecuentes (acordeón interactivo) */}
        <SectionTitle>Preguntas frecuentes</SectionTitle>
        <Faq items={PRICING_FAQS} />
      </main>

      <Footer />
    </>
  );
}
