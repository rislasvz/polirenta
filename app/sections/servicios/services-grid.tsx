import type { ServiceCard } from "../../domain/content-types";

/* ===== Iconos lineales de la marca (trazo 1.8, currentColor) ===== */

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[2.65rem] w-[2.65rem] lg:h-[2.9rem] lg:w-[2.9rem]",
  "aria-hidden": true as const,
} as const;

/** Póliza: escudo con verificación */
function PolizaIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 2.5 4.5 5.5v6c0 4.7 3.2 8.3 7.5 10 4.3-1.7 7.5-5.3 7.5-10v-6z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

/** Investigación: lupa con lente refuerzo */
function InvestigacionIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.8-4.8" />
      <path d="M7.8 10.5h5.4" />
      <path d="M10.5 7.8v5.4" />
    </svg>
  );
}

/** Contratos: documento a la medida */
function ContratoIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

/** Cobranza: billete */
function CobranzaIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="2.5" y="6.5" width="19" height="11" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M5.5 9.5h.01" />
      <path d="M18.5 14.5h.01" />
    </svg>
  );
}

/** Convenios: dos documentos que se sobreponen */
function ConvenioIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M9 2.5h7a2 2 0 0 1 2 2V15" />
      <path d="M6 5.5h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2z" />
      <path d="M12.5 8v3" />
      <path d="M14 9.5h-3" />
    </svg>
  );
}

/** Juicio: balanza de la justicia */
function JuicioIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 3v18" />
      <path d="M8.5 21h7" />
      <path d="M4.5 7h15" />
      <path d="m6.5 7-2.5 5.5a3 3 0 0 0 5 0z" />
      <path d="m17.5 7-2.5 5.5a3 3 0 0 0 5 0z" />
    </svg>
  );
}

const ICONS = {
  poliza: PolizaIcon,
  investigacion: InvestigacionIcon,
  contrato: ContratoIcon,
  cobranza: CobranzaIcon,
  convenio: ConvenioIcon,
  juicio: JuicioIcon,
} as const;

interface ServicesGridProps {
  cards: ServiceCard[];
}

/**
 * Retícula plana de servicios — fichas amplias con tinte corporativo,
 * iconos de línea en azul de marca, título en slab con divisor fino y
 * descripción. Sin botones: cada ficha se explica por sí sola.
 */
export function ServicesGrid({ cards }: ServicesGridProps) {
  return (
    <section className="bg-white px-5 pt-2 pb-18 lg:pb-22" aria-label="Servicios de Polirenta">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = ICONS[card.icon];
          return (
            <article
              key={card.title}
              className="flex min-h-[19rem] flex-col items-start rounded-xl bg-[#f1f4fb] p-9 lg:min-h-[21.5rem] lg:rounded-2xl lg:p-10 transition-all duration-250 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(19,27,77,0.08)]"
            >
              <span className="mb-5.5 grid h-[3.1rem] w-[3.1rem] place-items-center text-brand lg:mb-6.5 lg:h-[3.4rem] lg:w-[3.4rem]">
                <Icon />
              </span>
              <h2 className="m-0 mb-4 font-slab text-2xl font-bold leading-tight text-brand-ink lg:text-[1.55rem]">
                {card.title}
              </h2>
              <hr className="mb-5.5 h-px w-full border-0 bg-[#d5dbeb]" />
              <p className="m-0 flex-1 text-base leading-[1.75] text-[#57607a]">
                {card.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
