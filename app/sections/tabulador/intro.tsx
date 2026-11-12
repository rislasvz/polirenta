import { Link } from "react-router";

interface PricingIntroProps {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

/** Intro clara de la página de precios con CTAs hacia el cotizador */
export function PricingIntro({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
}: PricingIntroProps) {
  return (
    <section className="border-b border-[#eceef6] bg-gradient-to-b from-[#f2f3fb] to-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pt-30 pb-16 text-center md:pt-36 md:pb-18">
        <p className="m-0 mb-5 inline-block rounded-full bg-brand/8 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-brand">
          {eyebrow}
        </p>
        <h1 className="m-0 mb-5 max-w-xl font-slab text-4xl font-bold leading-[1.15] text-[#131b4d] md:text-5xl">
          {title}
        </h1>
        <p className="m-0 mb-9 max-w-xl text-[1.05rem] leading-[1.7] text-[#5a607c]">
          {lead}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={primaryCta.href}
            className="inline-block rounded-full bg-brand-yellow px-7 py-3 text-[0.95rem] font-bold text-[#131b4d] no-underline shadow-[0_8px_20px_rgba(249,177,50,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
          >
            {primaryCta.text}
          </a>
          {secondaryCta.href.startsWith("/") ? (
            <Link
              to={secondaryCta.href}
              className="inline-block rounded-full border border-brand/30 bg-transparent px-7 py-3 text-[0.95rem] font-semibold text-brand no-underline transition-colors duration-200 hover:border-brand hover:bg-brand/6"
            >
              {secondaryCta.text}
            </Link>
          ) : (
            <a
              href={secondaryCta.href}
              className="inline-block rounded-full border border-brand/30 bg-transparent px-7 py-3 text-[0.95rem] font-semibold text-brand no-underline transition-colors duration-200 hover:border-brand hover:bg-brand/6"
            >
              {secondaryCta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
