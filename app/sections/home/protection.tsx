import type { ProtectionCard, ProtectionSection } from "../../domain/content-types";

/* ===== Iconos lineales de la marca (trazo 1.8, currentColor) ===== */

function ContratoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

function InvestigacionIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <circle cx="11" cy="11" r="7" />
      <path d="m20.5 20.5-4.6-4.6" />
      <path d="M8.5 11h5" />
      <path d="M11 8.5v5" />
    </svg>
  );
}

function ProteccionIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M12 2.5 4.5 5.5v6c0 4.7 3.2 8.3 7.5 10 4.3-1.7 7.5-5.3 7.5-10v-6z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

function RecuperacionIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="m14 13-8.5 8.5a2.1 2.1 0 0 1-3-3L11 10" />
      <path d="m16 16 6 6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>
  );
}

const ICONS = {
  contrato: ContratoIcon,
  investigacion: InvestigacionIcon,
  proteccion: ProteccionIcon,
  recuperacion: RecuperacionIcon,
} as const;

function Card({ card }: { card: ProtectionCard }) {
  const Icon = ICONS[card.icon];
  return (
    <article className="flex gap-5 rounded-2xl border border-[#e6e9f4] border-t-[3px] border-t-brand-yellow bg-white p-6.5 shadow-[0_10px_30px_rgba(19,27,77,0.06)] transition-all duration-250 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(19,27,77,0.12)]">
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#eef1f8] text-brand">
        <Icon />
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <h3 className="m-0 font-slab text-xl font-bold leading-tight text-brand">
          {card.title}
        </h3>
        <p className="m-0 text-[0.98rem] font-bold text-brand-ink">
          {card.lead}
        </p>
        <p className="m-0 text-[0.95rem] leading-[1.65] text-[#57607a]">
          {card.description}
        </p>
      </div>
    </article>
  );
}

/**
 * Sección "¿Cómo te protegemos?" — servicios incluidos en la póliza:
 * 4 tarjetas a cuadrícula, en fila cada una (vertical en móvil).
 */
export function Protection({ content }: { content: ProtectionSection }) {
  return (
    <section className="bg-white px-5 py-18 min-[900px]:pt-22 min-[900px]:pb-24" id="proteccion">
      <div className="mx-auto max-w-6xl">
        <p className="m-0 mb-1.5 text-center text-[0.85rem] font-bold tracking-[0.18em] uppercase text-[#a08327]">
          {content.eyebrow}
        </p>
        <h2 className="mx-auto text-center font-slab text-3xl font-bold leading-tight text-brand-ink min-[900px]:text-[2.2rem]">
          {content.heading}
        </h2>
        <hr className="mx-auto mt-4 mb-5.5 h-[3px] w-14 border-0 bg-brand-yellow" />
        {content.intro && (
          <p className="mx-auto mt-0 mb-12 max-w-2xl text-center text-[1.05rem] leading-[1.7] text-[#57607a]">
            {content.intro}
          </p>
        )}

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 text-left min-[900px]:grid-cols-2 min-[900px]:gap-6">
          {content.cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
