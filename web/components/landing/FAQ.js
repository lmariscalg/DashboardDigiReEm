import config from "@/config"

export default function FAQ() {
  const { title, subtitle, items } = config.landing.faq

  return (
    <section id="faq" className="bg-brand-section px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-brand-muted">{subtitle}</p>}
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-gray-200/80 bg-white p-5 transition open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-brand-navy">
                {item.q}
                <span className="text-brand-muted transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
