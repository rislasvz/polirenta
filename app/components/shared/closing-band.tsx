import type { ClosingBandSection } from "../../domain/content-types";
import { Link } from "react-router";

/**
 * Banda de cierre compartida: titular sobre el azul oscuro de marca
 * y botón dorado hacia la acción principal de la página.
 */
export function ClosingBand({ content }: { content: ClosingBandSection }) {
  return (
    <section className="bg-gradient-to-b from-[#131b4d] to-[#0e1338] px-5 pt-17 pb-19 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="mx-auto font-slab text-3xl font-bold leading-tight text-white">
          {content.heading}
        </h2>
        <hr className="mx-auto mt-4.5 h-[3px] w-14 border-0 bg-brand-yellow" />
        {content.text && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.7] text-[#a9aed2]">
            {content.text}
          </p>
        )}
        <p className="mt-9">
          <Link
            to={content.ctaHref}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-7 py-3.5 text-[0.97rem] font-bold text-brand-ink no-underline shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
          >
            {content.ctaLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
