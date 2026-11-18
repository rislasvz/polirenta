import { BRAND } from "../domain/brand";

/* ===== Iconos lineales de contacto (trazo 1.8, heredan currentColor) ===== */

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-brand-yellow">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-brand-yellow">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-brand-yellow">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 5.5-10 7-10-7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-brand-yellow">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/** Icono oficial de WhatsApp (relleno) */
function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[1.1rem] w-[1.1rem] shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.115-.198.057-.371-.058-.52-.115-.148-.694-1.673-.951-2.29-.24-.575-.485-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/**
 * Pie de página corporativo: fondo azul marino de marca, logo transparente
 * (sin caja blanca) y datos de contacto con iconos.
 */
export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0e1e38] to-[#050b16] text-white">
      <div className="mx-auto grid max-w-7xl items-start gap-11 px-5 pt-15 pb-13 md:grid-cols-[1.2fr_1fr_1fr] md:gap-10">
        {/* Marca */}
        <div className="flex flex-col gap-5 md:pr-4">
          <img
            src={BRAND.logoLight}
            alt="Polirenta - Pólizas Jurídicas de Arrendamiento"
            width={904}
            height={358}
            loading="lazy"
            decoding="async"
            className="h-auto w-full max-w-[15rem] drop-shadow-sm"
          />
          <p className="m-0 text-[0.9rem] leading-[1.7] text-white/80">
            En Polirenta garantizamos seguridad y tranquilidad en tus
            operaciones inmobiliarias: nos preocupamos por la protección de su
            patrimonio y por la seguridad de su familia.
          </p>
        </div>

        {/* Contacto */}
        <div className="text-left md:border-l md:border-white/15 md:px-9">
          <h4 className="mb-5 text-[0.95rem] font-bold tracking-[0.14em] uppercase text-brand-yellow">
            Contáctanos
          </h4>
          <ul className="m-0 list-none p-0">
            <li className="mb-4 flex items-start gap-3 text-[0.9rem] leading-[1.6] text-white/80">
              <PinIcon />
              <span>
                {BRAND.addressLines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < BRAND.addressLines.length - 1 && " "}
                  </span>
                ))}
              </span>
            </li>
            <li className="mb-4 flex items-start gap-3 text-[0.9rem] leading-[1.6] text-white/80">
              <PhoneIcon />
              <a
                href={BRAND.phoneHref}
                className="text-white/90 no-underline transition-colors duration-200 hover:text-brand-yellow"
              >
                {BRAND.phone}
              </a>
            </li>
            <li className="mb-4 flex items-start gap-3 text-[0.9rem] leading-[1.6] text-white/80">
              <MailIcon />
              <a
                href={`mailto:${BRAND.email}`}
                className="text-white/90 no-underline transition-colors duration-200 hover:text-brand-yellow"
              >
                {BRAND.email}
              </a>
            </li>
            <li className="mb-4 flex items-start gap-3 text-[0.9rem] leading-[1.6] text-white/80">
              <ClockIcon />
              <span>Atención en horarios y días no hábiles.</span>
            </li>
          </ul>
        </div>

        {/* Comunicación */}
        <div className="text-left md:border-l md:border-white/15 md:px-9">
          <h4 className="mb-5 text-[0.95rem] font-bold tracking-[0.14em] uppercase text-brand-yellow">
            Comunícate con nosotros
          </h4>
          <p className="m-0 text-[0.9rem] leading-[1.7] text-white/80">
            Sabemos de la importancia de la comunicación: siempre estamos
            atentos a atender cada duda o inquietud. Escríbenos y recibe una
            respuesta a la brevedad.
          </p>
          <a
            href={BRAND.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-yellow p-3.5 text-[0.95rem] font-bold text-brand-ink no-underline shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] motion-reduce:transition-none"
          >
            <WhatsAppIcon />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/15 p-4.5 text-center text-[0.78rem] tracking-[0.02em] text-white/65">
        © {new Date().getFullYear()} {BRAND.name}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
