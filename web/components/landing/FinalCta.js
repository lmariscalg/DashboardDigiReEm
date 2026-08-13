import Link from "next/link"
import config from "@/config"

export default function FinalCta() {
  const { title, subtitle, cta } = config.landing.finalCta

  return (
    <section className="bg-brand-navy px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-[#FAF8F5] md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-balance text-lg text-[#E8D8C8]">{subtitle}</p>
        )}

        <div className="mt-10 flex justify-center">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center rounded-full bg-[#D9A7B0] px-8 py-3.5 text-sm font-semibold text-[#4A2748] shadow-sm transition-colors duration-200 hover:bg-[#c48e99]"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
