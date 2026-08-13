import Image from "next/image"
import Link from "next/link"
import config from "@/config"

const APPOINTMENTS = [
  { client: "Mariana G.", service: "Manicure gel", time: "10:00", accent: "rose" },
  { client: "Carlos R.", service: "Corte + barba", time: "11:30", accent: "plum" },
  { client: "Sofía M.", service: "Tinte + peinado", time: "13:00", accent: "rose" },
  { client: "Luis P.", service: "Tatuaje sesión 2", time: "16:00", accent: "plum" },
]

function AgendaMockup() {
  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-[20px] bg-white shadow-[0_12px_40px_rgba(74,39,72,0.12)]">
      <div className="flex items-start justify-between bg-[#4A2748] px-5 py-5">
        <div>
          <p className="text-xs text-[#C9C2C6]">Hoy, lunes</p>
          <p className="text-lg font-semibold text-white">Agenda de citas</p>
        </div>
        <span
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E8C9D0] text-sm font-semibold text-[#4A2748]"
          aria-hidden
        >
          M
        </span>
      </div>

      <div className="space-y-2.5 bg-white px-4 py-4">
        {APPOINTMENTS.map((appt) => (
          <div
            key={appt.client}
            className="flex items-center gap-3 rounded-xl bg-[#F7F2EE] px-3.5 py-3"
          >
            <span
              className={`h-11 w-1.5 shrink-0 rounded-full ${appt.accent === "rose" ? "bg-[#D9A7B0]" : "bg-[#4A2748]"}`}
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#4A2748]">{appt.client}</p>
              <p className="truncate text-xs text-[#5E5B5D]">{appt.service}</p>
            </div>
            <span className="shrink-0 text-sm font-semibold text-[#4A2748]">{appt.time}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2.5 bg-white px-4 pb-4">
        <div className="rounded-xl bg-[#4A2748] px-4 py-3.5">
          <p className="text-[11px] text-[#E8D8C8]">Ingresos hoy</p>
          <p className="text-xl font-bold text-white">$4,820</p>
        </div>
        <div className="rounded-xl bg-[#D9A7B0] px-4 py-3.5">
          <p className="text-[11px] text-[#4A2748]/75">Citas confirmadas</p>
          <p className="text-xl font-bold text-[#4A2748]">12 / 14</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { eyebrow, title, titleAccent, subtitle, painText, cta, ctaSecondary, trustLine } =
    config.landing.hero

  return (
    <section id="hero" className="relative isolate bg-brand-warm">
      <div className="relative min-h-[85vh] w-full overflow-hidden">
        <Image
          src="/imagen_salon01.avif"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#4A2748]/10 via-[#4A2748]/30 to-[#4A2748]/80"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[85vh] items-center px-4 pt-20 pb-16 sm:px-6 xl:px-8">
          <div className="mx-auto w-full max-w-7xl text-left">
            {eyebrow && (
              <span className="inline-block w-fit rounded-full bg-white/60 px-4 py-1.5 text-xs font-medium text-[#4A2748] sm:text-sm">
                {eyebrow}
              </span>
            )}
            <h1 className="font-heading mt-5 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(74,39,72,0.55)] sm:text-5xl md:text-6xl xl:text-7xl">
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="text-[#D9A7B0]">{titleAccent}</span>
                </>
              )}
            </h1>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 pb-14 pt-8 sm:px-6 sm:pb-16 xl:px-8 xl:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex min-w-0 flex-col gap-6 text-left">
            <p className="font-heading text-3xl font-semibold leading-snug tracking-tight text-[#4A2748] sm:text-4xl md:text-[2.75rem] md:leading-[1.2] xl:text-5xl">
              {subtitle}
            </p>

            {painText && (
              <p className="max-w-xl text-base leading-relaxed text-[#5E5B5D] sm:text-lg">
                {painText}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 xl:gap-5">
              <Link
                href={cta.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#D9A7B0] px-6 py-3 text-center text-sm font-semibold text-[#4A2748] shadow-sm transition-colors duration-200 hover:bg-[#c48e99] sm:w-auto sm:px-8 sm:py-3.5 xl:text-[0.95rem]"
              >
                {cta.label}
              </Link>
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center text-sm font-semibold text-[#4A2748] transition-colors duration-200 hover:text-[#D9A7B0] sm:justify-start"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>

            {trustLine && (
              <p className="text-xs text-[#5E5B5D] sm:text-sm">{trustLine}</p>
            )}
          </div>

          <div className="flex justify-center lg:justify-end">
            <AgendaMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
