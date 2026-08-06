import * as LucideIcons from "lucide-react"
import config from "@/config"

function Icon({ name, className }) {
  const Cmp = LucideIcons[name] || LucideIcons.Square
  return <Cmp className={className} />
}

export default function Features() {
  const { title, subtitle, closingLine, items } = config.landing.features

  return (
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold leading-snug tracking-tight text-brand-navy md:mb-16 md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mb-12 max-w-2xl text-center text-brand-muted">{subtitle}</p>
        )}

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.title}
              className="group rounded-2xl border border-gray-200/80 bg-brand-card p-6 transition-all duration-300 hover:border-[#CDAA28] hover:shadow-[0_10px_28px_rgba(13,27,62,0.08)] sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-brand-navy transition-colors duration-300 group-hover:bg-[var(--brand-icon-hover)]">
                <Icon name={item.icon} className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-lg font-bold tracking-tight text-brand-navy sm:text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-muted sm:text-base">{item.body}</p>
            </li>
          ))}
        </ul>

        {closingLine && (
          <div className="mx-auto mt-14 max-w-4xl rounded-2xl bg-brand-navy px-6 py-8 text-center sm:px-10 sm:py-10">
            <p className="text-base font-bold leading-relaxed text-white md:text-lg">
              {closingLine}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
