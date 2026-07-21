// ============================================================
// VibeFast · config.js
// ------------------------------------------------------------
// ESTE ES EL ARCHIVO MÁS IMPORTANTE DEL BOILERPLATE.
// Todo el branding, copy, features y configuración del producto vive aquí.
// Cambiar este archivo cambia el producto entero — sin abrir JSX.
//
// Estructura:
//   - app:      identidad del producto (nombre, descripción, dominio, color)
//   - features: toggles para encender/apagar funcionalidades
//   - ai:       configuración de OpenAI
//   - email:    configuración de Resend
//   - auth:     providers habilitados
//   - landing:  copy de la página pública
//   - pricing:  planes (si features.payments está activo)
//
// Tip Sem 1: empieza editando `app` y `landing.hero` con los datos de tu producto.
// ============================================================

const config = {
  // -----------------------------------------------------------
  // Identidad del producto
  // -----------------------------------------------------------
  app: {
    name: "LaBellaSalon",
    description:
      "Administra nóminas, ingresos, gastos e inventario de tu salón, estética, SPA o barbería sin hojas de cálculo.",
    domain: "dashboard-digi-re-em-web.vercel.app", // sin https://, sin www
    locale: "es", // "es" | "en"
    // URL pública: usa NEXT_PUBLIC_APP_URL en .env. En este config solo definimos el default.
    defaultUrl: "http://localhost:3000",
  },

  // -----------------------------------------------------------
  // Identidad visual
  // -----------------------------------------------------------
  brand: {
    // Color primario en HEX. DaisyUI lo aplica como --color-primary via theme.
    primary: "#D9B04A", // dorado — complemento #0D1B3D
    // Logo: puede ser texto o ruta a /public/logo.svg
    logoText: "LaBellaSalon",
    logoSrc: "/logo.svg",
    // Estilo del bordeado global (DaisyUI usa esto para botones, cards)
    radius: "1rem",
  },

  // -----------------------------------------------------------
  // Toggles de features — encienden/apagan rutas y componentes
  // -----------------------------------------------------------
  features: {
    waitlist: true, // Captura emails en landing — Sem 1
    googleAuth: true, // Login con Google — Sem 2
    emailLogin: false, // Magic link email — opcional
    aiChat: true, // Chat AI en /chat — Sem 3
    toolUse: true, // Tool use registry — Sem 4
    agents: true, // LangGraph agents — Sem 5
    mcp: true, // Servidor MCP en /api/mcp — Sem 5
    rag: false, // RAG con pgvector — opcional
    posthog: false, // Tracking — opcional
    resend: true, // Email — Sem 1+
    pricing: true, // Muestra la sección de precios en la landing (vitrina; el cobro real es `payments`)
    payments: false, // Stripe — opcional, fuera del temario
    hardware: false, // ESP-Claw bridge — Sem 8
  },

  // -----------------------------------------------------------
  // OpenAI
  // -----------------------------------------------------------
  ai: {
    chatModel: "gpt-4o-mini", // default barato y rápido
    structuredModel: "gpt-4o-mini",
    agentModel: "gpt-4o", // los agentes razonan mejor con full gpt-4o
    embeddingModel: "text-embedding-3-small",
    maxTokens: 1500,
    temperature: 0.4,
  },

  // -----------------------------------------------------------
  // Resend (email transaccional)
  // -----------------------------------------------------------
  email: {
    // Asegúrate de tener el dominio verificado en Resend antes de cambiar `from`.
    // En desarrollo Resend permite enviar a tu propio correo desde `onboarding@resend.dev`.
    from: "VibeFast <onboarding@resend.dev>",
    replyTo: "hola@vibefast.dev",
    supportEmail: "soporte@vibefast.dev",
  },

  // -----------------------------------------------------------
  // Auth providers
  // -----------------------------------------------------------
  auth: {
    loginUrl: "/login",
    afterLoginUrl: "/dashboard",
    afterLogoutUrl: "/",
    providers: ["google"], // se sincroniza con features.googleAuth / emailLogin
  },

  // -----------------------------------------------------------
  // Landing — todo el copy de la página pública
  // -----------------------------------------------------------
  landing: {
    nav: [
      { label: "Características", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "Preguntas", href: "#faq" },
    ],
    hero: {
      eyebrow: "Para dueños de negocios de imagen personal",
      title: "Deja de calcular nóminas a mano cada quincena.",
      subtitle:
        "Centraliza comisiones, ingresos, gastos e inventario en un panel hecho para negocios de imagen personal.",
      cta: { label: "Probar gratis", href: "#waitlist" },
      ctaSecondary: null,
    },
    problem: {
      eyebrow: "El problema",
      title: "Construir el andamiaje mata tu momentum.",
      subtitle:
        "La mayoría de founders se atoran semanas configurando lo mismo antes de tocar su idea real.",
      items: [
        {
          icon: "Timer",
          title: "Semanas en boilerplate",
          body: "Auth, base de datos, deploy, emails… configuras lo mismo que todos antes de validar nada.",
        },
        {
          icon: "Puzzle",
          title: "Parálisis por herramientas",
          body: "Cada capa tiene 10 opciones. Comparas en vez de construir y pierdes el hilo.",
        },
        {
          icon: "PlugZap",
          title: "La IA no se integra sola",
          body: "Structured outputs, tool use, agentes y MCP suenan bien hasta que hay que cablearlos.",
        },
      ],
    },
    features: {
      eyebrow: "TODO LO TIENES AQUÍ",
      title: "Todo lo que necesitas para llevar tu negocio en orden y en un solo lugar.",
      subtitle:
        "No pierdes tiempo eligiendo módulos y aplicaciones innecesarios. Te enfocas en tus servicios.",
      items: [
        {
          icon: "Calculator",
          title: "Nómina sin Excel",
          body: "Calcula comisiones y pagos de tu equipo en minutos, no en horas con calculadora y cuaderno.",
        },
        {
          icon: "TrendingUp",
          title: "Finanzas claras",
          body: "Ve ingresos, gastos y utilidad del mes en un vistazo, sin adivinar si el negocio ganó o perdió.",
        },
        {
          icon: "Package",
          title: "Inventario al día",
          body: "Controla productos, insumos y alertas de stock antes de quedarte sin lo esencial en cita.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "¿Aún tienes preguntas? Normal, aquí van las respuestas.",
      subtitle:
        "Porque tomar una buena decisión empieza por entender bien lo que vas a usar.",
      items: [
        {
          q: "¿Sirve para mi negocio si tengo uñas, SPA, barbería o tatuajes?",
          a: "Sí. LaBellaSalon está pensada para negocios de imagen personal: comisiones por servicio, venta de productos e inventario de insumos.",
        },
        {
          q: "¿Cómo calcula la nómina de mis empleadas?",
          a: "Registras servicios, comisiones y propinas; el sistema arma el total por persona y periodo para que solo revises y pagues.",
        },
        {
          q: "¿Necesito instalar algo en la computadora del salón?",
          a: "No. Funciona en el navegador desde celular o computadora; entras con tu cuenta y listo.",
        },
        {
          q: "¿Puedo probarlo antes de contratar un plan?",
          a: "Sí. Únete al waitlist o empieza con el plan gratuito para ver si se adapta a tu operación diaria.",
        },
      ],
    },
    socialProof: null,
    testimonials: {
      eyebrow: "Prueba social",
      title: "Lo que dicen quienes ya le dijeron adiós al desorden.",
      subtitle: null,
      items: [
        {
          quote:
            "Tenía 2 salones y un tercero por abrir y la nómina era un caos, me tardaba 2 días para generarla entre cuadernos y Excel. Ahora le doy tres clics y listo.",
          author: "Lizet",
          role: "Uñas Salón y Más, Chihuahua",
        },
        {
          quote:
            "Antes, manejaba en un sistema genérico las citas y en una hoja de Excel los ingresos y gastos. Es genial que ahora todo lo tengo en la misma aplicación.",
          author: "Carmen",
          role: "Nails Lab, Chihuahua",
        },
        {
          quote:
            "El que mis clientas puedan agendar sus citas y escoger a su estilista de preferencia, le da un plus a mi negocio.",
          author: "Gaby",
          role: "High Life, Chihuahua",
        },
      ],
    },
    finalCta: {
      eyebrow: "Tu turno",
      title: "Deja de configurar. Empieza a construir.",
      subtitle:
        "Clona la plantilla, edita config.js y ten tu producto AI-native en producción esta semana.",
      cta: { label: "Únete al waitlist", href: "#waitlist" },
      ctaSecondary: { label: "Leer las docs", href: "/docs" },
    },
    waitlist: {
      eyebrow: "Únete primero",
      title: "Sé de los primeros en saber.",
      subtitle: "Te avisamos cuando abramos cupos para la siguiente cohorte.",
      successMessage: "¡Listo! Te avisamos en cuanto haya novedades.",
      buttonLabel: "Quiero entrar",
      placeholder: "tu@email.com",
    },
    footer: {
      tagline: "Administra nóminas, finanzas e inventario de tu negocio de imagen personal.",
      creditLine: "Hecho en Chihuahua Méx.",
      columns: [
        {
          title: "Producto",
          links: [
            { label: "Características", href: "#features" },
            { label: "Precios", href: "#pricing" },
            { label: "Preguntas", href: "#faq" },
          ],
        },
      ],
      links: [],
    },
  },

  // -----------------------------------------------------------
  // Pricing — vitrina de planes.
  // Se muestra en la landing si features.pricing === true.
  // El cobro real (Stripe) depende de features.payments.
  // -----------------------------------------------------------
  pricing: {
    eyebrow: "Precios",
    title: "Simple y sin sorpresas.",
    subtitle: "Empieza con una demo gratis y escala cuando tu negocio crezca.",
    plans: [
      {
        id: "demo",
        name: "Demo",
        price: 0,
        priceLabel: "$0/7 días",
        currency: "MXN",
        interval: "7 días",
        description: "Para conocernos.",
        features: [
          "7 días gratis para descubrir qué fácil es hacer tu nómina y cortes de caja.",
        ],
        cta: "Probar demo",
      },
      {
        id: "emprendedor",
        name: "Emprendedor",
        price: 400,
        currency: "MXN",
        interval: "mes",
        description: "Para el negocio que quiere orden.",
        features: ["Que los cortes de caja y nómina no te compliquen más."],
        cta: "Elegir Emprendedor",
      },
      {
        id: "creciendo",
        name: "Creciendo el Negocio",
        price: 580,
        currency: "MXN",
        interval: "mes",
        description: "El favorito de nuestros clientes.",
        features: [
          "Venta de productos y manejo de inventario.",
          "Gift Cards digitales y canjeables.",
          "El plan que usan quienes ya no quieren improvisar.",
        ],
        cta: "Elegir Creciendo",
        highlighted: true,
        stripePriceId: "",
      },
      {
        id: "premium",
        name: "Premium",
        price: 930,
        currency: "MXN",
        interval: "mes/sucursal",
        description: "Para el negocio que ya escala.",
        features: [
          "Todo incluido más soporte prioritario.",
          "Múltiples sucursales y accesos ilimitados.",
        ],
        cta: "Elegir Premium",
      },
    ],
  },
}

export default config
