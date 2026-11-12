import type { IconCard, IconCardsSection } from "../../domain/content-types";
import { SectionTitle } from "./section-title";

interface IconCardsProps {
  heading?: string;
  items: IconCard[];
  columns: IconCardsSection["columns"];
}

/**
 * Retícula de fichas con iconos — cada ítem es una tarjeta de marca:
 * azulejo circular con tinte corporativo + etiqueta en azul marino.
 */
export function IconCards({ heading, items, columns }: IconCardsProps) {
  const gridColsClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 5
        ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 [&>div:last-child]:col-span-full sm:[&>div:last-child]:col-auto"
        : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className="mx-auto max-w-7xl px-5 pt-4 pb-18">
      {heading && <SectionTitle>{heading}</SectionTitle>}
      <div className={`mt-8 grid gap-5 lg:gap-6 ${gridColsClass}`}>
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-4 rounded-2xl border border-[#e6e9f4] border-t-[3px] border-t-brand-yellow bg-white p-6 shadow-[0_10px_30px_rgba(19,27,77,0.06)] transition-all duration-250 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(19,27,77,0.12)]"
          >
            <span className="grid h-17 w-17 place-items-center rounded-full bg-[#eef1f8]">
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                width="38"
                height="38"
                className="h-9.5 w-auto object-contain"
              />
            </span>
            <p className="m-0 text-center text-base font-bold text-brand-ink">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
