import { useMemo, useState } from "react";
import {
  computePolicyCost,
  formatPolicyCost,
  sanitizeRentInput,
  RentOutOfRangeError,
} from "../../domain/calculator";
import type { CalculatorCity, RateTier } from "../../domain/content-types";
import { BRAND } from "../../domain/brand";

interface QuoterProps {
  cities: CalculatorCity[];
  tiers: RateTier[];
}

function CheckIcon({ className = "text-emerald-600" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4.5 w-4.5 shrink-0 ${className}`}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.115-.198.057-.371-.058-.52-.115-.148-.694-1.673-.951-2.29-.24-.575-.485-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Quoter({ cities, tiers }: QuoterProps) {
  const [cityId, setCityId] = useState(cities[0].id);
  const [rentRaw, setRentRaw] = useState("");

  const city = cities.find((c) => c.id === cityId) ?? cities[0];
  const rent = Number(rentRaw.replace(/\D/g, ""));

  /** Cálculo de costo para la póliza estándar */
  const state = useMemo(() => {
    if (!rent) return { kind: "idle" as const };
    try {
      return { kind: "price" as const, cost: computePolicyCost(rent, city, tiers) };
    } catch (error) {
      return {
        kind: "error" as const,
        message:
          error instanceof RentOutOfRangeError
            ? "Renta fuera de tabulador; solicita una cotización personalizada."
            : "Ingresa una renta mensual válida.",
      };
    }
  }, [rent, city, tiers]);

  // Mensaje de WhatsApp dinámico según datos cotizados
  const getWhatsappHref = (planName: string, precioText: string) => {
    const texto = `Hola Polirenta, me interesa cotizar el plan *${planName}* para un inmueble en *${city.name}* con renta de *${rent ? `$${rentRaw} MXN` : "monto por confirmar"}*. Costo cotizado: *${precioText}*. ¿Podrían orientarme con los requisitos?`;
    return `https://wa.me/522223048995?text=${encodeURIComponent(texto)}`;
  };

  return (
    <section className="bg-[#f7f9fd] px-4 pt-28 pb-24 min-[900px]:pt-36" id="cotizador">
      <div className="mx-auto max-w-6xl">
        {/* Cabecera del Cotizador */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-2.5 inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-bold tracking-wider uppercase text-brand">
            Cotizador Interactivo
          </span>
          <h1 className="m-0 font-slab text-3xl font-bold leading-tight text-brand-ink md:text-4xl">
            Calcula y compara tus opciones de protección
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#5a607c]">
            Selecciona la ciudad de tu inmueble e ingresa el monto de renta mensual para comparar las opciones de respaldo disponibles en tiempo real.
          </p>
        </div>

        {/* Barra superior de configuración / Inputs interactivos estilo Segurenta */}
        <div className="mx-auto mb-14 max-w-4xl rounded-2xl border border-[#dde3f3] bg-white p-6 shadow-[0_10px_30px_rgba(19,27,77,0.06)] md:p-8">
          <div className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2">
            {/* 1. Selector de Ciudad */}
            <div>
              <label className="mb-2 block text-xs font-bold tracking-wider uppercase text-[#57607a]" htmlFor="city-select">
                1. Ubicación del Inmueble
              </label>
              <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#f0f3fa] p-1.5" id="city-select">
                {cities.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCityId(c.id)}
                    className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-bold transition-all duration-200 ${
                      c.id === cityId
                        ? "bg-brand text-white shadow-md"
                        : "bg-transparent text-[#131b4d] hover:bg-[#131b4d]/8"
                    }`}
                  >
                    📍 {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Campo de Renta Mensual */}
            <div>
              <label className="mb-2 block text-xs font-bold tracking-wider uppercase text-[#57607a]" htmlFor="rent-input">
                2. Renta mensual pactada
              </label>
              <div className="flex items-stretch overflow-hidden rounded-xl border border-[#d7dbf2] bg-white transition-all focus-within:border-brand focus-within:ring-3 focus-within:ring-brand/12">
                <span className="flex items-center border-r border-[#d7dbf2] bg-[#eceef6] px-4 text-xs font-bold text-brand">
                  MXN
                </span>
                <input
                  id="rent-input"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="Ingresa la cantidad (ej. 15,000)"
                  value={rentRaw}
                  onChange={(e) => setRentRaw(sanitizeRentInput(e.target.value))}
                  className="min-w-0 flex-1 px-4 py-3 text-lg font-semibold text-[#131b4d] outline-none placeholder:text-sm placeholder:font-normal placeholder:text-[#9aa2be]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Retícula de Tarjetas Comparativas de Cobertura al estilo Segurenta */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {/* Plan 1: Investigación de Inquilino */}
          <article className="flex flex-col rounded-2xl border border-[#e5e9f5] bg-white p-7 shadow-sm transition-all duration-250 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4">
              <span className="inline-block rounded-md bg-[#eef1f8] px-3 py-1 text-xs font-bold tracking-wide uppercase text-brand">
                Filtro Previo
              </span>
              <h3 className="mt-3 mb-1 font-slab text-xl font-bold text-brand-ink">
                Investigación Integral
              </h3>
              <p className="text-sm leading-relaxed text-[#57607a]">
                Conoce la solvencia, identidad y antecedentes antes de comprometer tu propiedad.
              </p>
            </div>

            <div className="my-5 rounded-xl border border-[#eceff8] bg-[#f9fafc] p-4 text-center">
              <p className="text-xs font-medium uppercase text-[#6b7280]">Tarifa Única</p>
              <p className="font-slab text-3xl font-bold text-brand-ink">
                $1,500 <span className="text-sm font-normal text-gray-500">MXN</span>
              </p>
              <p className="mt-1 text-[0.72rem] text-gray-500">
                Pago único · Respuesta en 24 horas
              </p>
            </div>

            <ul className="mb-8 flex flex-1 flex-col gap-3 text-sm text-[#4d5568]">
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span>Consulta en Buró de Crédito del arrendatario</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span>Validación de comprobantes de ingresos y solvencia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span>Investigación en juzgados civiles y antecedentes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span>Dictamen jurídico con recomendación de viabilidad</span>
              </li>
            </ul>

            <a
              href={getWhatsappHref("Investigación Integral", "$1,500 MXN")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-brand bg-white px-4 py-3 text-sm font-bold text-brand transition-all hover:bg-brand hover:text-white"
            >
              <WhatsAppIcon />
              Solicitar Investigación
            </a>
          </article>

          {/* Plan 2: Póliza Jurídica Tradicional (DESTACADA / MÁS CONTRATADA) */}
          <article className="relative flex flex-col rounded-2xl border-2 border-brand-yellow/60 bg-gradient-to-b from-[#0e1e38] to-[#050b16] p-7 text-white shadow-2xl transition-all duration-250 lg:-translate-y-3">
            {/* Badge de Plan Recomendado */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold tracking-wide uppercase text-brand-ink shadow-md">
              ★ Más Contratada
            </div>

            <div className="mb-4">
              <span className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-bold tracking-wide uppercase text-brand-yellow">
                Protección Total Anual
              </span>
              <h3 className="mt-3 mb-1 font-slab text-2xl font-bold text-white">
                Póliza Jurídica Polirenta
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                La protección jurídica de arrendamiento más completa para blindar tu patrimonio durante todo el año.
              </p>
            </div>

            <div className="my-5 rounded-xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
              <p className="text-xs font-medium uppercase text-white/70">Costo Calculado</p>
              {state.kind === "idle" && (
                <div className="py-1">
                  <p className="font-slab text-2xl font-bold text-brand-yellow">
                    Calcula tu costo
                  </p>
                  <p className="mt-1 text-xs text-white/65">
                    Ingresa tu renta mensual arriba
                  </p>
                </div>
              )}
              {state.kind === "error" && (
                <div className="py-1">
                  <p className="text-sm font-semibold text-red-300">{state.message}</p>
                </div>
              )}
              {state.kind === "price" && (
                <div>
                  <p className="font-slab text-4xl font-bold text-brand-yellow">
                    {formatPolicyCost(state.cost)}
                  </p>
                  <p className="mt-1 text-xs text-white/75">
                    Tarifa anual oficial para {city.name}
                  </p>
                </div>
              )}
            </div>

            <ul className="mb-8 flex flex-1 flex-col gap-3 text-sm text-white/90">
              <li className="flex items-start gap-2.5">
                <CheckIcon className="text-brand-yellow" />
                <span><strong>Investigación completa</strong> del inquilino y fiador/obligado</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon className="text-brand-yellow" />
                <span><strong>Elaboración del contrato</strong> blindado a la medida</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon className="text-brand-yellow" />
                <span><strong>Asistencia presencial</strong> de un abogado en la firma</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon className="text-brand-yellow" />
                <span>Cobranza extrajudicial en caso de retraso en pagos</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon className="text-brand-yellow" />
                <span><strong>Juicio de rescisión y recuperación</strong> con honorarios legales incluidos</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon className="text-brand-yellow" />
                <span>Acompañamiento legal en la entrega y devolución del inmueble</span>
              </li>
            </ul>

            <a
              href={getWhatsappHref(
                "Póliza Jurídica Polirenta",
                state.kind === "price" ? formatPolicyCost(state.cost) : "Por calcular",
              )}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-yellow px-5 py-3.5 text-base font-bold text-brand-ink shadow-md transition-all hover:brightness-105"
            >
              <WhatsAppIcon />
              Cotizar Póliza por WhatsApp
            </a>
          </article>

          {/* Plan 3: Póliza + Convenio de Mediación */}
          <article className="flex flex-col rounded-2xl border border-[#e5e9f5] bg-white p-7 shadow-sm transition-all duration-250 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4">
              <span className="inline-block rounded-md bg-[#eef1f8] px-3 py-1 text-xs font-bold tracking-wide uppercase text-brand">
                Máxima Celeridad
              </span>
              <h3 className="mt-3 mb-1 font-slab text-xl font-bold text-brand-ink">
                Póliza + Mediación
              </h3>
              <p className="text-sm leading-relaxed text-[#57607a]">
                Póliza completa reforzada con convenio en Centro de Mediación / Justicia Alternativa para desalojo exprés.
              </p>
            </div>

            <div className="my-5 rounded-xl border border-[#eceff8] bg-[#f9fafc] p-4 text-center">
              <p className="text-xs font-medium uppercase text-[#6b7280]">Costo Estimado</p>
              {state.kind === "price" ? (
                <>
                  <p className="font-slab text-3xl font-bold text-brand">
                    {formatPolicyCost(state.cost + 1800)}
                  </p>
                  <p className="mt-1 text-[0.72rem] text-gray-500">
                    Póliza anual + derechos de mediación
                  </p>
                </>
              ) : (
                <div className="py-1">
                  <p className="font-slab text-2xl font-bold text-brand">
                    Póliza + $1,800 MXN
                  </p>
                  <p className="mt-1 text-[0.72rem] text-gray-500">
                    Ingresa tu renta para cálculo exacto
                  </p>
                </div>
              )}
            </div>

            <ul className="mb-8 flex flex-1 flex-col gap-3 text-sm text-[#4d5568]">
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span><strong>Todo lo incluido</strong> en la Póliza Jurídica Tradicional</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span>Ratificación ante Centro de Mediación certificado</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span>Fuerza de sentencia ejecutoriada (Cosa Juzgada)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span>Proceso de desocupación acelerado ante incumplimientos</span>
              </li>
            </ul>

            <a
              href={getWhatsappHref(
                "Póliza + Mediación",
                state.kind === "price"
                  ? formatPolicyCost(state.cost + 1800)
                  : "Por calcular",
              )}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-brand bg-white px-4 py-3 text-sm font-bold text-brand transition-all hover:bg-brand hover:text-white"
            >
              <WhatsAppIcon />
              Cotizar con Mediación
            </a>
          </article>
        </div>

        {/* Nota legal al pie */}
        <p className="mt-10 text-center text-xs text-gray-400">
          *Tarifas oficiales con base en el tabulador vigente. Los costos calculados se confirman tras la validación de la documentación y perfil del inquilino.
        </p>
      </div>
    </section>
  );
}
