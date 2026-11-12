import type { Route } from "./+types/nosotros";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { About } from "../sections/nosotros/about";
import { Pillars } from "../sections/nosotros/pillars";
import { Team } from "../sections/nosotros/team";
import { buildPageMeta, getBreadcrumbSchema, getTeamSchema } from "../domain/seo";
import {
  NOSOTROS_META,
  NOSOTROS_ABOUT,
  NOSOTROS_PILLARS,
  NOSOTROS_TEAM,
} from "../data/nosotros";

export function meta({}: Route.MetaArgs) {
  return buildPageMeta({
    title: NOSOTROS_META.title,
    description: NOSOTROS_META.description,
    path: "/nosotros",
    image: "/images/nosotros-contrato.jpg",
    keywords: [
      "abogados inmobiliarios puebla",
      "equipo legal polirenta",
      "abogados especialistas arrendamiento",
      "despacho juridico arrendamiento puebla",
    ],
  });
}

export default function Nosotros() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
  ]);
  const teamSchema = getTeamSchema(NOSOTROS_TEAM);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <Header />

      <main>
        <About content={NOSOTROS_ABOUT} />
        <Pillars content={NOSOTROS_PILLARS} />
        <Team members={NOSOTROS_TEAM} />
      </main>

      <Footer />
    </>
  );
}
