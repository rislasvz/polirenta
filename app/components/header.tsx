import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { BRAND, NAV_ITEMS } from "../domain/brand";

/** Icono de teléfono para el CTA de contacto */
function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1.05rem] w-[1.05rem] shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Solo el Inicio (hero azul marino) permite header transparente;
   *  en las páginas interiores el menú siempre va con fondo blanco. */
  const overDarkHero = pathname === "/";
  const overlay = overDarkHero && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-60 transition-colors duration-250 ease-out motion-reduce:transition-none ${
        overlay
          ? "bg-transparent"
          : "bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="mx-auto flex max-w-[82rem] items-center justify-between px-5 py-3 min-[900px]:grid min-[900px]:grid-cols-[1fr_auto_1fr] min-[900px]:gap-6">
        {/* Columna izquierda: Logo */}
        <div className="flex items-center justify-start">
          <Link to="/" aria-label="Ir a la página de inicio" onClick={() => setOpen(false)}>
            <img
              src={BRAND.logo}
              alt="Polirenta — Pólizas Jurídicas de Arrendamiento"
              className={`block w-auto transition-all duration-250 ease-out motion-reduce:transition-none ${
                overlay ? "h-16" : "h-13"
              }`}
            />
          </Link>
        </div>

        {/* Columna central: Menú de navegación centrado */}
        <nav className="hidden justify-center min-[900px]:flex" aria-label="Menú principal">
          <ul className="m-0 flex list-none items-center justify-center gap-1 p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `group relative block px-3.5 py-2 text-[0.95rem] font-semibold tracking-wide transition-colors duration-200 ${
                      overlay
                        ? isActive
                          ? "text-white font-bold"
                          : "text-white/85 hover:text-white"
                        : isActive
                          ? "text-brand font-bold"
                          : "text-[#57607a] hover:text-brand"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={`absolute right-3.5 bottom-0.5 left-3.5 h-[2.5px] rounded-full bg-brand-yellow transition-transform duration-250 ease-out motion-reduce:transition-none ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        } origin-center`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Columna derecha: Botón Contáctanos */}
        <div className="hidden items-center justify-end min-[900px]:flex">
          <a
            href={BRAND.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-5 py-2.5 text-[0.9rem] font-bold tracking-wide text-brand-ink no-underline shadow-[0_2px_10px_rgba(19,27,77,0.1)] transition-all duration-200 hover:brightness-105 active:translate-y-0"
          >
            <PhoneIcon />
            Contáctanos
          </a>
        </div>

        {/* Botón de menú móvil */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className={`ml-auto block rounded-md p-2 transition-colors min-[900px]:hidden ${
            overlay ? "text-white" : "text-brand"
          }`}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="block border-t border-[#f1f1f1] bg-white px-4 pt-2 pb-5 min-[900px]:hidden" aria-label="Menú móvil">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block border-b border-[#f1f1f1] py-3 text-center font-semibold no-underline transition-colors ${
                  isActive ? "text-brand font-bold" : "text-[#57607a] hover:text-brand"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={BRAND.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-brand-yellow px-4 py-3 text-center text-sm font-bold text-brand-ink no-underline shadow-sm transition-all hover:brightness-105"
          >
            <PhoneIcon />
            Contáctanos
          </a>
        </nav>
      )}
    </header>
  );
}
