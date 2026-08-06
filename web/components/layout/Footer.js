import Link from "next/link"
import config from "@/config"
import Logo from "@/components/Logo"

function FooterLink({ link, className }) {
  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {link.label}
    </Link>
  )
}

export default function Footer() {
  const { tagline, creditLine, columns = [] } = config.landing.footer

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="size-8" />
              <span className="text-lg font-bold">{config.brand.logoText}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/70">{tagline}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold tracking-wide text-white/90">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      link={link}
                      className="text-sm text-white/65 transition hover:text-white"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#F8F8FA] px-6 py-4">
        <p className="text-center text-xs text-brand-muted">
          © {new Date().getFullYear()} {config.brand.logoText}. {creditLine}
        </p>
      </div>
    </footer>
  )
}
