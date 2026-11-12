interface SectionTitleProps {
  children: React.ReactNode;
  /** Título en el color de marca */
  inverted?: boolean;
}

export function SectionTitle({ children, inverted = false }: SectionTitleProps) {
  return (
    <h2
      className={`mx-auto max-w-7xl px-4 pt-14 pb-8 text-center font-slab text-2xl font-bold md:text-[2rem] after:mx-auto after:mt-3.5 after:block after:h-[3px] after:w-13 after:rounded-[2px] after:bg-brand-yellow after:content-[''] ${
        inverted ? "text-brand" : "text-brand-ink"
      }`}
    >
      {children}
    </h2>
  );
}
