import type { PhasesSection } from "../../domain/content-types";

/** Palomita dorada para cada servicio amparado */
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
 * Cobertura por etapas — los servicios reales de la póliza agrupados
 * en tres fichas numeradas: antes de firmar, durante la vigencia y si
 * el inquilino incumple.
 */
export function Phases({ content }: { content: PhasesSection }) {
  return (
    <section className="border-y border-[#dde3f3] bg-[#eef1f8] px-5 py-18 min-[900px]:pt-22 min-[900px]:pb-24" id="cobertura-por-etapas">
      <div className="mx-auto max-w-6xl">
        {content.eyebrow && (
          <p className="m-0 mb-1.5 text-center text-[0.85rem] font-bold tracking-[0.18em] uppercase text-[#a08327]">
            {content.eyebrow}
          </p>
        )}
        <h2 className="mx-auto max-w-xl text-center font-slab text-3xl font-bold leading-tight text-brand-ink min-[900px]:text-[2.1rem]">
          {content.heading}
        </h2>
        {content.intro && (
          <p className="mx-auto mt-4 mb-12 max-w-xl text-center text-base leading-[1.7] text-[#57607a]">
            {content.intro}
          </p>
        )}

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 min-[900px]:grid-cols-3">
          {content.phases.map((phase, i) => (
            <article
              key={phase.title}
              className="flex flex-col rounded-2xl border border-[#e6e9f4] border-t-[3px] border-t-brand-yellow bg-white p-7 shadow-[0_10px_30px_rgba(19,27,77,0.06)] transition-all duration-250 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(19,27,77,0.12)] min-[900px]:p-8"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-yellow font-slab text-[0.95rem] font-bold text-brand-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4.5 mb-1 font-slab text-xl font-bold leading-tight text-brand">
                {phase.title}
              </h3>
              {phase.description && (
                <p className="m-0 mb-4.5 text-[0.92rem] font-bold text-[#a08327]">
                  {phase.description}
                </p>
              )}
              <ul className="m-0 grid list-none gap-3 p-0">
                {phase.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[0.92rem] leading-[1.55] text-[#57607a]">
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
