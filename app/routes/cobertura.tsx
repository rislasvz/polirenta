import type { Route } from "./+types/cobertura";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { PageHeader } from "../components/shared/page-header";
import { IconCards } from "../components/shared/icon-cards";
import { Intro } from "../sections/cobertura/intro";
import { Phases } from "../sections/cobertura/phases";
import { ClosingBand } from "../components/shared/closing-band";
import { buildPageMeta, getBreadcrumbSchema } from "../domain/seo";
import {
  COBERTURA_META,
  COBERTURA_HEADER,
  COBERTURA_INTRO,
  COBERTURA_CATEGORIES,
  COBERTURA_PHASES,
  COBERTURA_CLOSING,
} from "../data/cobertura";

export function meta({}: Route.MetaArgs) {
  return buildPageMeta({
    title: COBERTURA_META.title,
    description: COBERTURA_META.description,
    path: "/cobertura",
    image: "/images/cobertura-hero.jpg",
    keywords: [
      "cobertura poliza juridica",
      "alcance proteccion arrendamiento",
      "arrendamiento oficinas puebla",
      "arrendamiento casas puebla",
    ],
  });
}

export default function Cobertura() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Cobertura", path: "/cobertura" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <main>
        <PageHeader content={COBERTURA_HEADER} />

        {/* Qué es la cobertura: definición + imagen enmarcada */}
        <Intro content={COBERTURA_INTRO} />

        {/* Categorías de inmuebles con cobertura */}
        <IconCards
          heading={COBERTURA_CATEGORIES.heading}
          items={COBERTURA_CATEGORIES.items}
          columns={COBERTURA_CATEGORIES.columns}
        />

        {/* Cobertura por etapas: antes / durante / si incumple */}
        <Phases content={COBERTURA_PHASES} />

        {/* Cierre con CTA sobre fondo azul de marca */}
        <ClosingBand content={COBERTURA_CLOSING} />
      </main>

      <Footer />
    </>
  );
}
