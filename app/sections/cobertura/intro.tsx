import type { FeatureIntroSection } from "../../domain/content-types";

/** Palomita dorada para los destacados */
function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 h-[1.05rem] w-[1.05rem] shrink-0 text-[#a08327]"
    >
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

/**
 * Intro de Cobertura: definición de la cobertura con 3 destacados
 * y la imagen corporativa enmarcada con el dorado de marca.
 */
export function Intro({ content }: { content: FeatureIntroSection }) {
  return (
    <section className="bg-white px-5 pt-6 pb-18 md:pb-20" aria-label="Qué es la cobertura">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-9 md:grid-cols-[1.02fr_0.98fr] md:gap-12">
        <div className="max-w-xl md:max-w-none">
          <h2 className="m-0 mb-4.5 font-slab text-2xl font-bold leading-tight text-brand-ink md:text-[1.75rem] min-[900px]:text-[1.95rem]">
            {content.heading}
          </h2>
          <p className="m-0 text-base leading-[1.75] text-[#57607a]">
            {content.text}
          </p>
          {content.bullets && content.bullets.length > 0 && (
            <ul className="m-0 mt-5.5 grid list-none gap-2.5 p-0">
              {content.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-[0.95rem] font-semibold text-brand-ink">
                  <CheckIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <figure className="relative m-0 mr-5 mb-5 before:absolute before:inset-[1.25rem_-1.25rem_-1.25rem_1.25rem] before:z-0 before:rounded-2xl before:bg-brand-yellow before:opacity-90 before:content-['']">
          <img
            src={content.image}
            alt={content.imageAlt}
            loading="lazy"
            width="600"
            height="400"
            className="relative z-10 block aspect-[3/2] w-full rounded-2xl object-cover object-center shadow-[0_16px_40px_rgba(19,27,77,0.18)]"
          />
        </figure>
      </div>
    </section>
  );
}
