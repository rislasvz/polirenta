import type { ClientsSection } from "../../domain/content-types";

interface ClientsProps {
  content: ClientsSection;
}

export function Clients({ content }: ClientsProps) {
  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      {content.rows.map((row, i) => (
        <div
          key={i}
          className={`flex w-max gap-12 ${
            i % 2 === 1 ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {/* La lista se duplica para que la animación sea un bucle continuo */}
          {[...row, ...row].map((src, j) => (
            <div
              key={`${src}-${j}`}
              role="img"
              aria-label={`Logotipo de inmobiliaria ${j + 1}`}
              className="h-24 w-44 shrink-0 bg-contain bg-center bg-no-repeat md:h-28 md:w-52"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
