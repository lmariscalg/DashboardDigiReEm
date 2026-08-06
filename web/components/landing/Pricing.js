import Link from "next/link"
import { Check, Star } from "lucide-react"
import config from "@/config"

function CellValue({ value }) {
  const isNo = value === "no"
  return (
    <span className={isNo ? "text-brand-muted" : "font-medium text-brand-navy"}>{value}</span>
  )
}

export default function Pricing() {
  const { title, subtitle, plans, comparisonTable, taxDisclaimer } = config.pricing

  return (
    <section id="pricing" className="bg-brand-section px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-brand-muted">{subtitle}</p>}
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 transition ${
                plan.highlighted
                  ? "border-[#CDAA28] shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
                  : "border-gray-200/80 hover:border-brand-gold/60 hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-gray-900 ring-2 ring-white">
                  <Star className="size-3 fill-[#FFE08A] text-[#B8860B]" strokeWidth={1.5} aria-hidden />
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold text-brand-navy">{plan.name}</h3>
              <p className="mt-1 text-sm text-brand-muted">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-brand-navy">
                  {plan.priceLabel ?? (plan.price === 0 ? "Gratis" : `$${plan.price}`)}
                </span>
                {!plan.priceLabel && plan.price !== 0 && (
                  <span className="text-sm text-brand-muted">
                    {plan.currency}/{plan.interval}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                    <span className="text-brand-navy/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? "mt-8 bg-[#D4AF37] text-gray-900 hover:bg-[#C89F21]"
                    : "mt-8 border border-[#CDAA28] text-[#111827] hover:border-[#D4AF37] hover:bg-[#FFF9EB]"
                }`}
              >
                {plan.cta}
              </Link>

              {plan.highlighted && (
                <p className="mt-3 text-center text-xs text-brand-muted">
                  El más utilizado por nuestros clientes.
                </p>
              )}
            </div>
          ))}
        </div>

        {taxDisclaimer && (
          <p className="mt-8 text-center text-sm text-brand-muted">{taxDisclaimer}</p>
        )}

        {comparisonTable && (
          <div className="mt-16 md:mt-20">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-navy">
                      <th className="px-4 py-4 text-left text-sm font-bold text-white md:px-6 md:py-5 md:text-base">
                        Concepto
                      </th>
                      {comparisonTable.headers.map((header, i) => (
                        <th
                          key={header}
                          className={`px-3 py-4 text-center text-xs font-bold text-white md:px-4 md:py-5 md:text-sm ${
                            i === comparisonTable.highlightedColumn
                              ? "bg-[#D9B04A]/10 ring-2 ring-inset ring-[#CDAA28]/60"
                              : ""
                          }`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((row, rowIndex) => (
                      <tr
                        key={row.label}
                        className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="border-t border-gray-200 px-4 py-3.5 text-left font-medium text-brand-navy md:px-6 md:py-4">
                          {row.label}
                        </td>
                        {row.values.map((value, colIndex) => (
                          <td
                            key={`${row.label}-${colIndex}`}
                            className={`border-t border-gray-200 px-3 py-3.5 text-center md:px-4 md:py-4 ${
                              colIndex === comparisonTable.highlightedColumn
                                ? "bg-[#D9B04A]/10 ring-1 ring-inset ring-[#CDAA28]/25"
                                : ""
                            }`}
                          >
                            <CellValue value={value} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
