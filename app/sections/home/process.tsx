import type { ProcessSection } from "../../domain/content-types";

/**
 * Sección "¿Cómo funciona?" — proceso de contratación en 4 pasos,
 * presentado como línea de tiempo profesional.
 */
export function Process({ content }: { content: ProcessSection }) {
  return (
    <section className="border-y border-[#dde3f3] bg-[#eef1f8] px-5 py-18 min-[900px]:pt-22 min-[900px]:pb-24" id="proceso">
      <div className="mx-auto max-w-6xl">
        {content.eyebrow && (
          <p className="m-0 mb-1.5 text-center text-[0.85rem] font-bold tracking-[0.18em] uppercase text-[#a08327]">
            {content.eyebrow}
          </p>
        )}
        <h2 className="mx-auto text-center font-slab text-3xl font-bold leading-tight text-brand-ink min-[900px]:text-[2.2rem]">
          {content.heading}
        </h2>
        {content.subtitle && (
          <p className="mx-auto mt-4 mb-12 max-w-xl text-center text-base leading-[1.7] text-[#57607a]">
            {content.subtitle}
          </p>
        )}

        <ol className="m-0 mx-auto grid max-w-xl list-none grid-cols-1 gap-7 p-0 min-[900px]:max-w-none min-[900px]:grid-cols-4 min-[900px]:gap-8">
          {content.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex gap-4 min-[900px]:flex-col min-[900px]:items-center min-[900px]:gap-0 min-[900px]:text-center [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:bg-[#dde3f3] [&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:top-13 [&:not(:last-child)]:before:bottom-[-1.75rem] [&:not(:last-child)]:before:left-5.5 [&:not(:last-child)]:before:w-[2px] min-[900px]:[&:not(:last-child)]:before:top-5.5 min-[900px]:[&:not(:last-child)]:before:right-[-2rem] min-[900px]:[&:not(:last-child)]:before:bottom-auto min-[900px]:[&:not(:last-child)]:before:left-auto min-[900px]:[&:not(:last-child)]:before:h-[2px] min-[900px]:[&:not(:last-child)]:before:w-8"
            >
              <span className="relative z-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-white bg-brand-yellow font-slab text-[1.05rem] font-bold text-brand-ink shadow-[0_6px_14px_rgba(19,27,77,0.15)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mt-2 mb-1 font-slab text-base font-bold text-brand-ink min-[900px]:mt-4 min-[900px]:mb-1.5">
                  {step.title}
                </h3>
                <p className="m-0 text-[0.92rem] leading-[1.65] text-[#57607a]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
