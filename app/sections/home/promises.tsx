import type { PromiseSection } from "../../domain/content-types";

/**
 * Franja de promesas — sello compacto con los 3 pilares de la marca,
 * inmediatamente después del hero.
 */
export function Promises({ content }: { content: PromiseSection }) {
  return (
    <section className="border-b border-[#dde3f3] bg-[#eef1f8] px-5 py-6 min-[900px]:py-7.5" aria-label="Promesas de Polirenta">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 min-[900px]:flex-row min-[900px]:justify-center min-[900px]:gap-0">
        {content.items.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center gap-3.5 ${
              index > 0
                ? "min-[900px]:ml-13 min-[900px]:border-l min-[900px]:border-[#dde3f3] min-[900px]:pl-13"
                : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.label}
              loading="lazy"
              width="40"
              height="40"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <p className="m-0 text-[0.92rem] font-bold text-brand-ink">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
