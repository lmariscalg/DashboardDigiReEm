import Link from "next/link"
import config from "@/config"
import Logo from "@/components/Logo"

const APPOINTMENTS = [
  { client: "Mariana G.", service: "Manicure gel", time: "10:00", accent: "gold" },
  { client: "Carlos R.", service: "Corte + barba", time: "11:30", accent: "navy" },
  { client: "Sofía M.", service: "Tinte + peinado", time: "13:00", accent: "gold" },
  { client: "Luis P.", service: "Tatuaje sesión 2", time: "16:00", accent: "navy" },
]

function AgendaMockup() {
  return (
    <div className="mx-auto w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-xl shadow-[#0d1b3e]/10 ring-1 ring-gray-200/80">
      <div className="flex items-start justify-between bg-brand-navy px-4 py-4">
        <div>
          <p className="text-xs text-white/70">Hoy, lunes</p>
          <p className="text-base font-semibold text-white">Agenda de citas</p>
        </div>
        <Logo className="size-8" />
      </div>

      <div className="space-y-2 bg-[#f5f5f3] p-3">
        {APPOINTMENTS.map((appt) => (
          <div
            key={appt.client}
            className="flex items-center gap-3 rounded-lg border border-gray-200/80 bg-white px-3 py-2.5"
          >
            <span
              className={`h-10 w-1 shrink-0 rounded-full ${appt.accent === "gold" ? "bg-brand-gold" : "bg-brand-navy"}`}
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-brand-navy">{appt.client}</p>
              <p className="truncate text-xs text-brand-muted">{appt.service}</p>
            </div>
            <span className="shrink-0 text-sm font-medium text-brand-navy">{appt.time}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 p-3">
        <div className="rounded-lg bg-brand-navy px-3 py-3">
          <p className="text-[10px] text-white/70">Ingresos hoy</p>
          <p className="text-lg font-bold text-white">$4,820</p>
        </div>
        <div className="rounded-lg bg-brand-gold px-3 py-3">
          <p className="text-[10px] text-brand-navy/70">Citas confirmadas</p>
          <p className="text-lg font-bold text-brand-navy">12 / 14</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { eyebrow, title, titleAccent, subtitle, painText, cta, ctaSecondary, trustLine } =
    config.landing.hero

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-brand-warm px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 xl:bg-white xl:px-8 xl:pb-24 xl:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 saturate-0"
          style={{ backgroundImage: "url('/hero-salon.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/50 xl:bg-white/40" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 sm:grid-cols-2 sm:gap-6 md:gap-8 xl:items-stretch xl:gap-20">
        <div className="flex min-w-0 flex-col gap-5 text-left sm:gap-4 xl:min-h-[460px] xl:justify-between xl:gap-0 xl:py-4">
          {eyebrow && (
            <span className="inline-block w-fit rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-brand-muted ring-1 ring-gray-200/60 sm:text-sm xl:bg-gray-100 xl:ring-0">
              {eyebrow}
            </span>
          )}

          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-brand-navy sm:text-[1.65rem] sm:leading-[1.2] md:text-4xl md:leading-tight lg:text-5xl xl:leading-[1.12] 2xl:text-6xl">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-brand-gold">{titleAccent}</span>
              </>
            )}
          </h1>

          <p className="text-base font-medium leading-snug text-brand-navy sm:text-lg xl:text-xl xl:leading-relaxed">
            {subtitle}
          </p>

          {painText && (
            <p className="text-sm leading-relaxed text-brand-muted sm:text-[0.95rem] xl:text-base xl:leading-relaxed">
              {painText}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 xl:gap-5">
            <Link
              href={cta.href}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-center text-sm font-semibold text-brand-navy shadow-sm transition-colors duration-200 hover:bg-[#c9a03f] sm:w-auto sm:px-8 sm:py-3.5 xl:text-[0.95rem]"
            >
              {cta.label}
            </Link>
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center text-sm font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-gold sm:justify-start"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>

          {trustLine && (
            <p className="text-xs text-brand-muted sm:text-sm">{trustLine}</p>
          )}
        </div>

        <div className="flex min-w-0 w-full sm:items-center sm:justify-center">
          <AgendaMockup />
        </div>
      </div>
    </section>
  )
}
