import type { PageHeaderSection } from "../../domain/content-types";

/**
 * Encabezado editorial de página — el estándar de marca para páginas
 * internas: eyebrow + titular (con palabra acentuada) + fleco dorado +
 * texto de apoyo, sin imagen de fondo.
 */
export function PageHeader({ content }: { content: PageHeaderSection }) {
  const lines = content.titleLines;
  const large = !!lines && lines.length > 0;

  return (
    <header className="bg-white px-5 pt-30 pb-8 min-[900px]:pt-36 min-[900px]:pb-10">
      <div className="mx-auto max-w-2xl text-center">
        {content.eyebrow && (
          <p className="mb-2 text-[0.85rem] font-bold tracking-[0.18em] uppercase text-[#a08327]">
            {content.eyebrow}
          </p>
        )}
        <h1
          className={`mx-auto font-slab font-bold text-brand-ink ${
            large
              ? "max-w-xl text-4xl leading-[1.12] min-[900px]:text-5xl"
              : "text-3xl leading-[1.18] min-[900px]:text-[2.2rem]"
          }`}
        >
          {lines
            ? lines.map((line) => (
                <span
                  key={line.text}
                  className={line.accent ? "text-brand" : undefined}
                >
                  {line.text}{" "}
                </span>
              ))
            : content.heading}
        </h1>
        <hr className="mx-auto mt-5 h-[3px] w-14 border-0 bg-brand-yellow" />
        {content.lead && (
          <p className="mx-auto mt-6 text-[1.05rem] leading-[1.7] text-[#57607a]">
            {content.lead}
          </p>
        )}
      </div>
    </header>
  );
}
