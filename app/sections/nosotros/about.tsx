import type { AboutSection } from "../../domain/content-types";

/** Icono de ubicación para la nota de presencia */
function PinIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/**
 * Sección "Quiénes somos" — presentación profesional de la firma:
 * historia con imagen enmarcada. Los pilares (Misión · Visión · Valores)
 * viven en su propia sección (Pillars).
 */
export function About({ content }: { content: AboutSection }) {
  return (
    <section className="bg-white px-5 pt-30 pb-22 min-[900px]:pt-36 min-[900px]:pb-26" id="quienes-somos">
      <div className="mx-auto max-w-6xl">
        {/* Intro: texto de la firma + imagen corporativa */}
        <div className="mb-14 grid grid-cols-1 items-center gap-9 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
          <div>
            <p className="m-0 mb-1.5 text-[0.85rem] font-bold tracking-[0.18em] uppercase text-[#a08327]">
              {content.eyebrow}
            </p>
            <h1 className="m-0 mb-4 font-slab text-3xl font-bold leading-[1.18] text-brand-ink md:text-[2.1rem] min-[900px]:text-[2.2rem]">
              {content.heading}
            </h1>
            <hr className="m-0 mb-5.5 h-[3px] w-14 border-0 bg-brand-yellow" />
            <p className="m-0 mb-6 text-[1.02rem] leading-[1.75] text-[#57607a]">
              {content.story}
            </p>
            <p className="m-0 inline-flex items-center gap-2.5 text-[0.92rem] font-bold text-brand">
              <PinIcon className="h-5 w-5 shrink-0 text-[#a08327]" />
              Con presencia en Puebla y Ciudad de México
            </p>
          </div>
          <figure className="relative m-0 mr-5 mb-5 before:absolute before:inset-[1.25rem_-1.25rem_-1.25rem_1.25rem] before:z-0 before:rounded-2xl before:bg-brand-yellow before:opacity-90 before:content-['']">
            <img
              src={content.image}
              alt={content.imageAlt}
              loading="lazy"
              width="600"
              height="450"
              className="relative z-10 block aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_16px_40px_rgba(19,27,77,0.18)]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
