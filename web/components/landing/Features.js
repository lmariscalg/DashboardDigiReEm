import * as LucideIcons from "lucide-react"
import config from "@/config"

function Icon({ name, className }) {
  const Cmp = LucideIcons[name] || LucideIcons.Square
  return <Cmp className={className} />
}

export default function Features() {
  const { title, subtitle, closingLine, items } = config.landing.features
  const titleTail = "en orden y en un solo lugar."
  const titleLead = title.endsWith(titleTail)
    ? title.slice(0, -(titleTail.length + 1)).trim()
    : title

  return (
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading mx-auto mb-12 max-w-3xl text-center text-3xl font-semibold leading-snug tracking-tight text-[#4A2748] md:mb-16 md:text-4xl">
          {titleLead}
          {titleLead !== title && (
            <>
              <br />
              {titleTail}
            </>
          )}
        </h2>
        {subtitle && (
          <p className="mx-auto mb-12 max-w-2xl text-center text-[#5E5B5D]">{subtitle}</p>
        )}

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.title}
              className="group rounded-2xl border border-gray-200/80 bg-white p-6 transition-all duration-300 hover:border-[#D9A7B0] hover:shadow-[0_10px_28px_rgba(74,39,72,0.08)] sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#4A2748] transition-colors duration-300 group-hover:bg-[#F3ECE4]">
                <Icon name={item.icon} className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading mb-3 text-lg font-semibold tracking-tight text-[#4A2748] sm:text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#5E5B5D] sm:text-base">{item.body}</p>
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
