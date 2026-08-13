import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"
import config from "@/config"
import BrandLockup from "@/components/BrandLockup"

function FooterLink({ link, className }) {
  const Icon = link.icon === "mail" ? Mail : link.icon === "message-circle" ? MessageCircle : null

  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {Icon && <Icon className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />}
      {link.label}
    </Link>
  )
}

export default function Footer() {
  const { tagline, creditLine, columns = [] } = config.landing.footer

  return (
    <footer className="bg-brand-navy text-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandLockup
                baseClassName="font-heading text-lg font-semibold text-[#FAF8F5] sm:text-xl"
                proClassName="text-base font-medium text-[#FAF8F5] sm:text-lg"
              />
            </div>
            <p className="mt-3 max-w-xs text-sm text-[#E8D8C8]">{tagline}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold tracking-wide text-[#FAF8F5]">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      link={link}
                      className="inline-flex items-center gap-2 text-sm text-[#A99CAF] transition hover:text-[#FAF8F5]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#D9A7B0]/20 bg-[#FAF8F5] px-6 py-4">
        <p className="text-center text-xs text-brand-muted">
          © {new Date().getFullYear()} {config.brand.logoText}. {creditLine}
        </p>
      </div>
    </footer>
  )
}
