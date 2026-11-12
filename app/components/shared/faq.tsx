import type { FaqItem } from "../../domain/content-types";

interface FaqProps {
  items: FaqItem[];
}

/**
 * Preguntas frecuentes con acordeón nativo:
 * <details>/<summary> funciona sin JavaScript y es accesible por teclado.
 */
export function Faq({ items }: FaqProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-3.5 px-4 pb-16">
      {items.map((item, i) => (
        <details
          key={item.question}
          open={i === 0}
          className="group overflow-hidden rounded-xl border border-[#e3e5f0] bg-white transition-all open:border-brand open:shadow-[0_4px_18px_rgba(46,56,138,0.08)]"
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 p-[1.1rem_1.25rem] font-slab text-base font-semibold text-brand select-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="h-6 w-6 shrink-0 text-brand-yellow transition-transform duration-250 ease-out group-open:rotate-45"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="m-0 px-5 pb-5 text-[0.95rem] leading-[1.7] text-[#444444]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
