"use client"

import { useState } from "react"
import config from "@/config"

export default function Waitlist() {
  const { title, subtitle, buttonLabel, successMessage, fields, placeholders } =
    config.landing.waitlist

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    optIn: false,
  })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || "No pudimos enviar tu mensaje.")
      }
      setStatus("success")
      setForm({ name: "", email: "", phone: "", message: "", optIn: false })
    } catch (err) {
      setError(err.message)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white px-6 py-24">
      <div id="waitlist" className="mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">{title}</h2>
          <p className="mt-4 text-brand-muted">{subtitle}</p>
        </div>

        {status === "success" ? (
          <div
            role="status"
            className="mt-10 rounded-xl border border-green-200 bg-green-50 px-4 py-6 text-center text-green-700"
          >
            {successMessage}
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 space-y-4">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-brand-navy">
                {fields.name}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder={placeholders.name}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-gray-400 focus:border-brand-navy/40 focus:ring-2 focus:ring-brand-navy/10"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-brand-navy">
                {fields.email}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder={placeholders.email}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-gray-400 focus:border-brand-navy/40 focus:ring-2 focus:ring-brand-navy/10"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-brand-navy">
                {fields.phone}
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder={placeholders.phone}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-gray-400 focus:border-brand-navy/40 focus:ring-2 focus:ring-brand-navy/10"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-brand-navy">
                {fields.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder={placeholders.message}
                className="w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-gray-400 focus:border-brand-navy/40 focus:ring-2 focus:ring-brand-navy/10"
                disabled={status === "loading"}
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-brand-muted">
              <input
                type="checkbox"
                checked={form.optIn}
                onChange={(e) => updateField("optIn", e.target.checked)}
                className="mt-1 size-4 rounded border-gray-300 text-brand-gold focus:ring-brand-gold/30"
                disabled={status === "loading"}
              />
              {fields.optIn}
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-navy transition-colors duration-200 hover:bg-[#c9a03f] disabled:opacity-60"
            >
              {status === "loading" ? "Enviando…" : buttonLabel}
            </button>
          </form>
        )}

        {status === "error" && (
          <p role="alert" className="mt-3 text-center text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
