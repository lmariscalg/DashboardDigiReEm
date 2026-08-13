import { MessageCircle } from "lucide-react"
import config from "@/config"

function getWhatsAppHref() {
  const contact = config.landing.footer.columns?.find((col) => col.title === "CONTACTO")
  const wa = contact?.links.find((link) => link.icon === "message-circle")
  return wa?.href || "https://wa.me/526141892291"
}

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp +52 614 1892291"
      className="fixed right-5 bottom-5 z-[60] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition hover:scale-105 hover:bg-[#20bd5a] md:right-6 md:bottom-6"
    >
      <MessageCircle className="size-7 fill-white" strokeWidth={0} aria-hidden />
    </a>
  )
}
