import { Star } from "lucide-react"
import config from "@/config"

export default function Testimonials() {
  const { title, subtitle, items } = config.landing.testimonials

  return (
    <section id="testimonials" className="bg-brand-section px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold leading-snug tracking-tight text-brand-navy md:mb-14 md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mb-14 max-w-2xl text-center text-brand-muted">{subtitle}</p>
        )}

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.author}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-md shadow-[#0d1b3e]/5 sm:p-8"
            >
              <div className="mb-4 flex gap-0.5" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-brand-muted sm:text-base">
                “{item.quote}”
              </blockquote>
              <p className="text-sm font-bold text-brand-navy sm:text-base">
                {item.author} — {item.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
