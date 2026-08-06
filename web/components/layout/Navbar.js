import Link from "next/link"
import { Menu } from "lucide-react"
import config from "@/config"
import Logo from "@/components/Logo"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/80 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 xl:px-8">
        <div className="flex items-center gap-2">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="p-2 text-brand-navy" aria-label="Abrir menú">
              <Menu className="size-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-2 w-52 rounded-box border border-gray-200 bg-white p-2 shadow"
            >
              {config.landing.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              {config.features.googleAuth && (
                <li>
                  <Link href={config.auth.loginUrl}>Entrar</Link>
                </li>
              )}
            </ul>
          </div>

          <Link href="#hero" className="flex items-center gap-2.5 text-brand-navy">
            <Logo className="size-8" />
            <span className="text-base font-semibold tracking-tight sm:text-lg">
              {config.brand.logoText}
            </span>
          </Link>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {config.landing.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-brand-muted transition-colors duration-200 hover:text-brand-navy"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {config.features.googleAuth && (
            <Link
              href={config.auth.loginUrl}
              className="hidden text-sm font-medium text-brand-muted transition-colors hover:text-brand-navy sm:inline"
            >
              Entrar
            </Link>
          )}
          <Link
            href="#contact"
            className="hidden shrink-0 rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-navy transition-colors duration-200 hover:bg-[#c9a03f] md:inline-flex"
          >
            Empieza gratis
          </Link>
        </div>
      </nav>
    </header>
  )
}
