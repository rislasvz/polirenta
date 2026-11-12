import type { TeamMember } from "../../domain/content-types";
import { SectionTitle } from "../../components/shared/section-title";

interface TeamProps {
  members: TeamMember[];
}

/** Sección "Nuestro equipo": tarjetas presentables con foto y ficha profesional */
export function Team({ members }: TeamProps) {
  return (
    <section className="bg-white pb-24 lg:pb-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle>Nuestro equipo</SectionTitle>
        <p className="mx-auto mt-4 mb-12 max-w-xl text-center text-[1.02rem] leading-[1.7] text-[#57607a]">
          Contamos con un equipo de abogados especializados en arrendamiento
          inmobiliario, dedicados a proteger cada arrendamiento desde su
          elaboración hasta la devolución del inmueble.
        </p>
        <ul className="m-0 grid list-none grid-cols-1 items-stretch gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {members.map((member) => (
            <li
              key={member.name}
              className="flex flex-col rounded-2xl border border-[#e6e9f4] border-t-[3px] border-t-brand-yellow bg-[#f1f4fb] p-6.5 shadow-[0_10px_30px_rgba(19,27,77,0.06)] lg:p-7"
            >
              <img
                src={member.photo}
                alt={`${member.name} - ${member.role} en Polirenta`}
                loading="lazy"
                width="360"
                height="450"
                className="aspect-[4/5] w-full rounded-lg object-cover object-top shadow-[0_8px_22px_rgba(19,27,77,0.16)] lg:aspect-[3/4]"
              />
              <div className="flex flex-col gap-2 pt-5 pr-1 pb-1 pl-1">
                <p className="m-0 text-[0.8rem] font-bold tracking-[0.12em] uppercase text-[#a08327]">
                  {member.role}
                </p>
                <h3 className="m-0 font-slab text-xl font-bold text-brand">
                  {member.name}
                </h3>
                <p className="mt-1.5 mb-0 text-[0.95rem] leading-[1.7] text-[#57607a] lg:text-[0.98rem]">
                  {member.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
