import Link from "next/link"
import config from "@/config"
import Logo from "@/components/Logo"

export default function BrandLockup({
  logoClassName = "size-10",
  baseClassName = "font-heading text-lg font-semibold text-brand-navy sm:text-xl",
  proClassName = "text-base font-medium text-[#5E5B5D] sm:text-lg",
}) {
  const logoName = config.brand.logoText
  const proIndex = logoName.lastIndexOf("Pro")
  const logoBase = proIndex > 0 ? logoName.slice(0, proIndex) : logoName
  const logoPro = proIndex > 0 ? logoName.slice(proIndex) : ""

  return (
    <>
      <Logo className={logoClassName} />
      <span className="flex items-baseline tracking-tight">
        <span className={baseClassName}>{logoBase}</span>
        {logoPro && <span className={proClassName}>{logoPro}</span>}
      </span>
    </>
  )
}

export function BrandLockupLink(props) {
  return (
    <Link href="#hero" className="flex items-center gap-2.5">
      <BrandLockup {...props} />
    </Link>
  )
}
