import type { Route } from "./+types/home";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { HomeHero } from "../sections/home/hero";
import { Promises } from "../sections/home/promises";
import { Protection } from "../sections/home/protection";
import { Process } from "../sections/home/process";
import { Benefits } from "../sections/home/benefits";
import { SectionTitle } from "../components/shared/section-title";
import { Clients } from "../sections/home/clients";
import { CALCULATOR_CITIES, RATE_TIERS } from "../data/tabulador";
import { buildPageMeta, getHomeSchema } from "../domain/seo";
import {
  HOME_META,
  HOME_HERO,
  HOME_HERO_CALCULATOR,
  HOME_BENEFITS_SECTION,
  HOME_CLIENTS,
  HOME_PROMISES,
  HOME_PROTECTION,
  HOME_PROCESS,
} from "../data/home";

export function meta({}: Route.MetaArgs) {
  return buildPageMeta({
    title: HOME_META.title,
    description: HOME_META.description,
    path: "/",
    image: "/images/banner.jpg",
    keywords: [
      "pólizas jurídicas de arrendamiento en puebla",
      "póliza jurídica cdmx",
      "contrato de arrendamiento puebla",
      "investigación de inquilinos puebla",
    ],
  });
}

export default function Home() {
  const schema = getHomeSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />

      <main>
        <HomeHero
          content={HOME_HERO}
          calculator={{
            ...HOME_HERO_CALCULATOR,
            cities: CALCULATOR_CITIES,
            tiers: RATE_TIERS,
          }}
        />

        <Promises content={HOME_PROMISES} />

        <Protection content={HOME_PROTECTION} />

        <Process content={HOME_PROCESS} />

        <Benefits content={HOME_BENEFITS_SECTION} />

        <SectionTitle>{HOME_CLIENTS.heading}</SectionTitle>
        <div style={{ padding: "0 0 5rem" }}>
          <Clients content={HOME_CLIENTS} />
        </div>
      </main>

      <Footer />
    </>
  );
}
