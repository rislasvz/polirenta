import type { PillarsSection } from "../../domain/content-types";
import { SectionTitle } from "../../components/shared/section-title";

/* ===== Iconos lineales de la marca (trazo 1.8, currentColor) ===== */

/** Misión: diana */
function ObjetivoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Visión: ojo con mirada al horizonte */
function VisionIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/** Valores: escudo con verificación */
function EscudoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M12 2.5 4.5 5.5v6c0 4.7 3.2 8.3 7.5 10 4.3-1.7 7.5-5.3 7.5-10v-6z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

/** Verificación de los valores (checklist) */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

/**
 * Sección "Pilares" — Misión · Visión · Valores de la firma,
 * en fichas independientes con tipografía protagonista.
 */
export function Pillars({ content }: { content: PillarsSection }) {
  return (
    <section className="bg-[#eef1f8] px-5 pb-22 min-[900px]:pb-26" id="pilares">
      <SectionTitle>{content.heading}</SectionTitle>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-stretch gap-5 min-[900px]:grid-cols-3 min-[900px]:gap-6">
          <article className="flex flex-col rounded-2xl border border-[#e6e9f4] border-t-[3px] border-t-brand-yellow bg-white p-8 shadow-[0_10px_30px_rgba(19,27,77,0.06)] transition-all duration-250 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(19,27,77,0.12)] min-[900px]:p-9">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#eef1f8] text-brand">
              <ObjetivoIcon />
            </div>
            <h3 className="mt-5 mb-2 font-slab text-2xl font-bold leading-tight text-brand">
              {content.mission.title}
            </h3>
            <p className="m-0 text-[1.06rem] leading-[1.75] text-[#4d5568] min-[900px]:text-[1.1rem]">
              {content.mission.text}
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-[#e6e9f4] border-t-[3px] border-t-brand-yellow bg-white p-8 shadow-[0_10px_30px_rgba(19,27,77,0.06)] transition-all duration-250 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(19,27,77,0.12)] min-[900px]:p-9">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#eef1f8] text-brand">
              <VisionIcon />
            </div>
            <h3 className="mt-5 mb-2 font-slab text-2xl font-bold leading-tight text-brand">
              {content.vision.title}
            </h3>
            <p className="m-0 text-[1.06rem] leading-[1.75] text-[#4d5568] min-[900px]:text-[1.1rem]">
              {content.vision.text}
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-[#e6e9f4] border-t-[3px] border-t-brand-yellow bg-white p-8 shadow-[0_10px_30px_rgba(19,27,77,0.06)] transition-all duration-250 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(19,27,77,0.12)] min-[900px]:p-9">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#eef1f8] text-brand">
              <EscudoIcon />
            </div>
            <h3 className="mt-5 mb-2 font-slab text-2xl font-bold leading-tight text-brand">
              {content.valuesHeading}
            </h3>
            <ul className="m-0 mt-4 grid list-none grid-cols-2 gap-x-4 gap-y-3 p-0">
              {content.values.map((value) => (
                <li key={value} className="flex items-center gap-2 text-[1.02rem] font-semibold text-brand-ink">
                  <CheckIcon className="h-4.5 w-4.5 shrink-0 text-[#a08327]" />
                  {value}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
