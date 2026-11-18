import type { BenefitsSection } from "../../domain/content-types";

interface BenefitsProps {
  content: BenefitsSection;
}

/** Sección oscura de beneficios con tarjetas doradas */
export function Benefits({ content }: BenefitsProps) {
  return (
    <section className="bg-gradient-to-b from-[#0a172c] to-[#050b16] px-0 pt-18 pb-20">
      <div className="mx-auto mb-12 max-w-4xl px-4 text-center">
        <p className="m-0 mb-3 text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-brand-yellow">
          {content.eyebrow}
        </p>
        <h2 className="m-0 mb-3.5 font-slab text-3xl font-bold leading-tight text-white sm:text-[2.2rem]">
          {content.title}
        </h2>
        {content.subtitle && (
          <p className="mx-auto my-0 max-w-xl text-[0.95rem] leading-[1.65] text-[#b0b9cf]">
            {content.subtitle}
          </p>
        )}
      </div>

      <ul className="m-0 mx-auto grid max-w-6xl list-none grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col rounded-2xl border border-brand-yellow/55 bg-[#0e1e38] p-8 transition-all duration-250 motion-reduce:transition-none hover:-translate-y-1 hover:border-brand-yellow hover:shadow-[0_14px_34px_rgba(0,0,0,0.35)]"
          >
            <span className="flex h-15 w-15 items-center justify-center rounded-xl border-[1.5px] border-brand-yellow/70">
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                width="34"
                height="34"
                className="h-8.5 w-auto"
              />
            </span>
            <h3 className="mt-5.5 mb-0 text-[1.05rem] font-bold leading-snug text-white">
              {item.label}
            </h3>
            <hr className="mt-2.5 mb-3.5 h-[3px] w-9 border-0 bg-brand-yellow" />
            <p className="m-0 text-[0.92rem] leading-[1.7] text-[#b7bcda]">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
