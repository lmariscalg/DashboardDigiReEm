import { Menu } from "lucide-react"
import config from "@/config"
import { BrandLockupLink } from "@/components/BrandLockup"

const navItemClass =
  "text-sm font-medium text-[#5E5B5D] transition-colors duration-200 hover:text-brand-navy"

const accentBtnClass =
  "hidden shrink-0 rounded-full bg-[#D9A7B0] px-5 py-2 text-sm font-semibold text-[#4A2748] shadow-sm transition-colors duration-200 hover:bg-[#c48e99] md:inline-flex"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#E8D8C8]/70 bg-white/85 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 xl:px-8">
        <div className="flex items-center gap-2">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="p-2 text-brand-navy" aria-label="Abrir menú">
              <Menu className="size-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-2 w-52 rounded-box border border-[#E8D8C8] bg-white p-2 shadow"
            >
              {config.landing.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={navItemClass}>
                    {item.label}
                  </a>
                </li>
              ))}
              {config.auth.externalLoginUrl && (
                <li>
                  <a href={config.auth.externalLoginUrl} className={navItemClass}>
                    Entrar
                  </a>
                </li>
              )}
            </ul>
          </div>

          <BrandLockupLink />
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {config.landing.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={navItemClass}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {config.auth.externalLoginUrl && (
            <a
              href={config.auth.externalLoginUrl}
              className={`hidden sm:inline ${navItemClass}`}
            >
              Entrar
            </a>
          )}
          <a href="#contact" className={accentBtnClass}>
            Empieza gratis
          </a>
        </div>
      </nav>
    </header>
  )
}
