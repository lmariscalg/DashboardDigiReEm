import Link from "next/link"
import config from "@/config"

export default function FinalCta() {
  const { title, subtitle, cta, ctaSecondary } = config.landing.finalCta

  return (
    <section className="bg-brand-navy px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-balance text-lg text-white/70">{subtitle}</p>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy transition-colors duration-200 hover:bg-[#c9a03f]"
          >
            {cta.label}
          </Link>
          {ctaSecondary && (
            <Link
              href={ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/5"
            >
              {ctaSecondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
