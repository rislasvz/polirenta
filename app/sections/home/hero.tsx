import { useMemo, useState } from "react";
import { Link } from "react-router";
import {
  PERCENTAGE_THRESHOLD,
  RentOutOfRangeError,
  computePolicyCost,
  formatPolicyCost,
  sanitizeRentInput,
} from "../../domain/calculator";
import type {
  HomeHeroCalculator,
  HomeHeroContent,
} from "../../domain/content-types";

/** Icono oficial de WhatsApp (relleno) */
function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[1.15rem] w-[1.15rem] shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.115-.198.057-.371-.058-.52-.115-.148-.694-1.673-.951-2.29-.24-.575-.485-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/** Icono de teléfono */
function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1.15rem] w-[1.15rem] shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/** Icono de sobre / correo */
function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1.15rem] w-[1.15rem] shrink-0"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 5.5-10 7-10-7" />
    </svg>
  );
}

interface HomeHeroProps {
  content: HomeHeroContent;
  calculator: HomeHeroCalculator;
}

/**
 * Hero de inicio estilo landing de cotización:
 * eyebrow + titular editorial a la izquierda y calculadora flotante a la derecha.
 */
export function HomeHero({ content, calculator }: HomeHeroProps) {
  const [cityId, setCityId] = useState(calculator.cities[0].id);
  // Inicia vacío para invitar al usuario a ingresar la cantidad
  const [rentRaw, setRentRaw] = useState("");

  const city =
    calculator.cities.find((c) => c.id === cityId) ?? calculator.cities[0];
  const rent = Number(rentRaw.replace(/\D/g, ""));

  /** Precio en vivo: se recalcula al escribir */
  const state = useMemo(() => {
    if (!rent) return { kind: "idle" as const };
    try {
      return {
        kind: "price" as const,
        cost: computePolicyCost(rent, city, calculator.tiers),
      };
    } catch (error) {
      return {
        kind: "error" as const,
        message:
          error instanceof RentOutOfRangeError
            ? "La renta está fuera del tabulador."
            : "Ingresa una renta válida.",
      };
    }
  }, [rent, city, calculator.tiers]);

  const activeTier = calculator.tiers.find(
    (t) => rent > 0 && rent >= t.min && (t.max === null || rent <= t.max),
  );
  const isPercentage =
    activeTier != null && activeTier.min > PERCENTAGE_THRESHOLD;

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-slate-900 text-brand-ink">
      {/* Fondo alusivo a Angelópolis (ciudad): imagen visible al 100% */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <picture>
          <source
            media="(max-width: 899px)"
            srcSet={(content.backgroundImage ?? content.image ?? "").replace(
              ".jpg",
              "-sm.jpg",
            )}
          />
          <img
            src={content.backgroundImage ?? content.image}
            alt="Pólizas jurídicas de arrendamiento y protección inmobiliaria en Angelópolis Puebla"
            fetchPriority="high"
            loading="eager"
            width="1920"
            height="1080"
            className="h-full w-full object-cover object-center opacity-95 brightness-[0.98] contrast-[1.02]"
          />
        </picture>
      </div>

      {/* Capa de opacidad estratégica: cubre la mitad izquierda para lectura perfecta y se desvanece a transparente en la mitad derecha */}
      <div
        className="absolute inset-0 z-1 bg-gradient-to-b from-white/95 via-white/85 to-white/70 min-[900px]:bg-gradient-to-r min-[900px]:from-[#f7f5ef]/95 min-[900px]:via-[#f7f5ef]/80 min-[900px]:via-45% min-[900px]:to-transparent min-[900px]:to-65%"
        aria-hidden="true"
      />

      <div className="relative z-2 mx-auto flex w-full max-w-[82rem] flex-col items-stretch gap-10 px-5 pt-28 pb-14 min-[900px]:min-h-[88vh] min-[900px]:flex-row min-[900px]:items-center min-[900px]:gap-14 min-[900px]:pt-32 min-[900px]:pb-18">
        {/* ----- Copy: 100% transparente sin recuadros ni brillos, tipografía mate y limpia ----- */}
        <div className="flex max-w-2xl flex-1 flex-col items-start gap-6 bg-transparent p-0">
          {content.eyebrow && (
            <p className="m-0 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/90 px-4 py-1.5 text-[0.82rem] font-bold tracking-[0.16em] uppercase text-brand shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              {content.eyebrow}
            </p>
          )}

          <h1 className="m-0 font-slab text-5xl font-extrabold leading-[1.08] text-[#071324] [text-wrap:balance] min-[900px]:text-6xl">
            {content.titleLines.map((line, i) => (
              <span key={i} className={line.accent ? "text-brand" : undefined}>
                {line.text}
                {i < content.titleLines.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          <p className="m-0 max-w-lg text-[1.15rem] font-medium leading-[1.65] text-[#1f2937] [text-wrap:pretty] min-[900px]:text-[1.2rem]">
            {content.leadParts.map((part, i) => {
              if (part.bold) return <strong key={i} className="font-extrabold text-[#071324]">{part.text}</strong>;
              if (part.accent)
                return (
                  <span key={i} className="font-bold text-brand">
                    {part.text}
                  </span>
                );
              return <span key={i}>{part.text}</span>;
            })}
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            {content.ctas.map((cta) =>
              cta.variant === "primary" ? (
                <Link
                  key={cta.label}
                  to={cta.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-6 py-3.5 text-[0.95rem] font-bold text-brand-ink no-underline shadow-[0_8px_20px_rgba(188,154,103,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-gold min-[900px]:px-7 min-[900px]:py-4 min-[900px]:text-base"
                >
                  {cta.label} →
                </Link>
              ) : (
                <Link
                  key={cta.label}
                  to={cta.href}
                  className="inline-flex items-center rounded-lg border-2 border-brand bg-white/90 px-6 py-3.5 text-[0.95rem] font-bold text-brand no-underline shadow-sm backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-white min-[900px]:px-7 min-[900px]:py-4 min-[900px]:text-base"
                >
                  {cta.label} →
                </Link>
              ),
            )}
          </div>
        </div>

        {/* ----- Columna derecha: cotizador pegado al extremo derecho ----- */}
        <div className="flex flex-col min-[900px]:ml-auto min-[900px]:w-[25rem] min-[900px]:shrink-0">
          {/* ----- Calculadora de póliza ----- */}
          <div
            className="flex flex-col rounded-2xl border border-[#dce1ed] bg-white p-7 text-brand-ink shadow-[0_16px_45px_rgba(10,23,44,0.08)] min-[900px]:p-8"
            aria-label="Cotizador de póliza"
          >
            <h2 className="m-0 mb-1.5 font-slab text-xl font-bold leading-snug tracking-tight text-[#131b4d]">
              {calculator.heading}
            </h2>
            {calculator.subtitle && (
              <p className="m-0 mb-5.5 text-[0.92rem] leading-normal text-[#57607a]">
                {calculator.subtitle}
              </p>
            )}

            {calculator.cityLabel && (
              <span className="mb-2 block text-xs font-bold tracking-wider uppercase text-[#57607a]">
                {calculator.cityLabel}
              </span>
            )}
            <div
              className="mb-5.5 grid grid-cols-2 gap-1.5 rounded-xl bg-[#eef1f6] p-1"
              role="group"
              aria-label="Ciudad"
            >
              {calculator.cities.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCityId(c.id)}
                  aria-pressed={c.id === cityId}
                  className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-bold transition-all duration-200 ${
                    c.id === cityId
                      ? "bg-brand text-white shadow-[0_6px_16px_rgba(46,56,138,0.3)]"
                      : "bg-transparent text-[#131b4d] hover:bg-[#131b4d]/8"
                  }`}
                >
                  📍 {c.name}
                </button>
              ))}
            </div>

            <label className="mb-2 block text-xs font-bold tracking-wider uppercase text-[#57607a]" htmlFor="hero-renta">
              {calculator.rentLabel}
            </label>
            <input
              id="hero-renta"
              className="mb-5.5 w-full rounded-lg border border-[#d7dbf2] bg-white px-4 py-3 text-lg font-semibold text-[#131b4d] outline-none transition-all placeholder:text-sm placeholder:font-normal placeholder:text-[#9aa2be] focus:border-brand focus:ring-3 focus:ring-brand/12"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder="Ingresa la cantidad (ej. 15,000)"
              value={rentRaw}
              onChange={(e) => setRentRaw(sanitizeRentInput(e.target.value))}
            />

            <div className="mb-4.5 rounded-xl border border-[#eaedf5] bg-[#f7f8fc] px-4 py-4 text-center" aria-live="polite">
              <p className="m-0 mb-1 text-xs font-semibold tracking-wider uppercase text-gray-500">
                {calculator.resultLabel}
              </p>
              {state.kind === "idle" && (
                <p className="m-0 text-sm text-gray-500">{calculator.idleHint}</p>
              )}
              {state.kind === "error" && (
                <p className="m-0 text-sm font-semibold text-[#b2273a]">{state.message}</p>
              )}
              {state.kind === "price" && (
                <>
                  <p className="m-0 mb-1 font-slab text-4xl font-bold leading-none text-[#131b4d]">
                    {formatPolicyCost(state.cost)}
                  </p>
                  <p className="m-0 text-xs text-[#8a90a6]">
                    {isPercentage
                      ? calculator.percentageNote
                      : activeTier != null
                        ? `${calculator.tierPrefix} ${formatPolicyCost(activeTier.min)} – ${formatPolicyCost(activeTier.max ?? 0)}`
                        : ""}
                    {city.factor !== 1 && ` · Tarifa ajustada para ${city.name}`}
                  </p>
                </>
              )}
            </div>

            {/* ----- Contacto: WhatsApp / teléfono / correo ----- */}
            <div className="flex flex-col gap-2">
              <a
                href={calculator.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand-yellow px-4 py-3.5 text-center text-[0.95rem] font-bold text-brand-ink no-underline shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-gold"
              >
                <WhatsAppIcon />
                {calculator.requestLabel}
              </a>
              <a
                href={calculator.phoneHref}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3.5 text-center text-[0.95rem] font-bold text-white no-underline shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
              >
                <PhoneIcon />
                {calculator.requestPhoneLabel}
              </a>
              <a
                href={calculator.emailHref}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#d7dbf2] bg-white px-4 py-3.5 text-center text-[0.95rem] font-bold text-brand-ink no-underline shadow-sm transition-all duration-200 hover:border-brand hover:bg-[#f5f6fb]"
              >
                <MailIcon />
                {calculator.requestEmailLabel}
              </a>
            </div>

            {calculator.footnote && (
              <p className="mt-3.5 mb-0 text-center text-xs text-[#8a90a6]">
                {calculator.footnote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
