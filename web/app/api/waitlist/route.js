import { NextResponse, after } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { sendWaitlistConfirm } from "@/lib/resend/send"

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, name, phone, message, optIn } = body

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 })
    }

    const normalized = email.toLowerCase().trim()
    const supabase = await createClient()

    const { data: isNew, error } = await supabase.rpc("upsert_waitlist_contact", {
      p_email: normalized,
      p_name: typeof name === "string" ? name.trim() || null : null,
      p_phone: typeof phone === "string" ? phone.trim() || null : null,
      p_message: typeof message === "string" ? message.trim() || null : null,
      p_opt_in: Boolean(optIn),
      p_source: "landing",
    })

    if (error) {
      console.error("[waitlist] upsert error:", error.message)
      return NextResponse.json(
        { error: "No pudimos guardar tu mensaje." },
        { status: 500 }
      )
    }

    if (isNew) {
      after(() => sendWaitlistConfirm(normalized))
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    )
  }
}
