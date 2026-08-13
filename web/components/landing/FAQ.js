"use client"

import { useState } from "react"
import config from "@/config"

export default function FAQ() {
  const { title, subtitle, items } = config.landing.faq
  const [openIndex, setOpenIndex] = useState(null)

  function toggleItem(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-[#5E5B5D]">{subtitle}</p>}
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`rounded-xl border border-[#E8D8C8] p-5 transition-colors duration-200 hover:bg-[#F3ECE4] ${
                  isOpen ? "bg-[#F3ECE4] shadow-sm" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-medium text-brand-navy"
                >
                  {item.q}
                  <span className={`shrink-0 text-[#5E5B5D] transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm leading-6 text-[#5E5B5D]">{item.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
