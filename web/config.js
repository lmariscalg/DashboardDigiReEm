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
    name: "LaBellaPro",
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
    logoText: "LaBellaPro",
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
      { label: "Beneficios", href: "#features" },
      { label: "Planes", href: "#pricing" },
      { label: "Testimonios", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "14 años · Hecho en México MX",
      title: "Tu negocio merece correr solo,",
      titleAccent: "aunque tú no estés mirando.",
      subtitle:
        "La agenda digital que organiza tus citas, tu equipo y tu dinero, para que tú te concentres en lo que haces mejor.",
      painText:
        "¿Cansado de perder citas en WhatsApp, de no saber cuánto ganaste esta semana, o de que tu equipo no sepa qué hacer sin ti? La Agenda Digital de LaBellaPro centraliza todo en un solo lugar.",
      cta: { label: "Quiero organizar mi negocio — gratis", href: "#contact" },
      ctaSecondary: { label: "Ver planes y precios →", href: "#pricing" },
      trustLine: "Sin tarjeta de crédito · Con los colores e imagen de tu negocio",
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
      eyebrow: null,
      title: "Todo lo que necesitas para llevar tu negocio en orden y en un solo lugar.",
      subtitle: null,
      closingLine:
        "14 años trabajando con negocios mexicanos, somos el aliado tecnológico que tu negocio ya necesitaba.",
      items: [
        {
          icon: "Calendar",
          title: "Nunca más una cita perdida.",
          body: "No más cuadernos cuadriculados y hojas de Excel mal diseñadas. Ten a todos tus profesionistas horarios y clientes en una sola pantalla.",
        },
        {
          icon: "Calculator",
          title: "Paga a tu equipo sin hacer cuentas.",
          body: "Calcula comisiones, horas y pagos en segundos. Lo que antes te tomaba una tarde, ahora te toma tres minutos.",
        },
        {
          icon: "Gift",
          title: "Tus clientes regresan más seguido.",
          body: "Vende Gift Cards digitales con control de saldo integrado. Perfecto para regalos, cumpleaños y promociones.",
        },
        {
          icon: "Palette",
          title: "La aplicación lleva el nombre de tu negocio.",
          body: "Nada de logos ajenos. Tus clientes ven tu marca, no la nuestra.",
        },
      ],
    },
    faq: {
      eyebrow: null,
      title: "¿Aún tienes preguntas? Normal, aquí van las respuestas.",
      subtitle:
        "Porque tomar una buena decisión empieza por entender bien lo que vas a usar.",
      items: [
        {
          q: "¿Qué tipo de negocios pueden usar la Agenda Digital de LaBellaPro?",
            a: "Si tienes un salón de uñas, estética, barbería, estudio de tatuajes... esta agenda digital fue hecha pensando exactamente en ti. En esos días donde tienes 3 clientes esperando, 2 o más empleados atendiendo otros clientes y el cuaderno de citas desaparecido.",
        },
        {
          q: "¿Necesito saber de tecnología?",
          a: "Para nada. Si mandas mensajes por WhatsApp, ya sabes suficiente. Además, en tu primera sesión te acompañamos a configurar todo, sin costo y a tu ritmo.",
        },
        {
          q: "¿Solo incluye la agenda digital?",
          a: "Ojalá fuera tan sencillo como solo agendar citas. Tu negocio es más complejo que eso… desde que llega el cliente hasta que cuadras tu cierre del día. Cobras servicios, registras gastos, calculas nóminas, manejas crédito a clientes, vendes y canjeas Gift Cards, controlas tu inventario... y más. Todo desde el mismo lugar. Sin saltar entre apps, cuadernos ni hojas de Excel.",
        },
        {
          q: "¿Funciona con varios empleados?",
          a: "Sí, y es donde más brilla. Cada empleado con sus servicios y sus comisiones personalizadas y calculadas automáticamente. ¿Tienes un equipo grande? Mejor aún, cuéntanos cuántos son, hemos visto de todo."
        },
        {
          q: "¿Puedo cambiar de plan?",
          a: "Cuando quieras. Así de simple. Sin contratos eternos ni letras pequeñas. Tú decides cuándo crecer.",
        },
      ],
    },
    socialProof: null,
    testimonials: {
      eyebrow: null,
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
      eyebrow: null,
      title: "¿Listo para dejar de improvisar?",
      subtitle: "Empieza gratis hoy. Sin tarjeta. Sin compromisos.",
      cta: { label: "Quiero organizar mi negocio ahora", href: "#contact" },
      ctaSecondary: { label: "Leer las docs", href: "/docs" },
    },
    waitlist: {
      eyebrow: null,
      title: "Hablemos de tu negocio",
      subtitle:
        "Cuéntanos qué necesitas y te mostraremos cómo LaBellaPro puede ayudarte.",
      successMessage: "¡Gracias! Recibimos tu mensaje y te contactaremos pronto.",
      buttonLabel: "Enviar mensaje",
      placeholders: {
        name: "Tu nombre",
        email: "tu@email.com",
        phone: "Tu número de teléfono (opcional)",
        message: "Escribe tu mensaje aquí...",
      },
      fields: {
        name: "Nombre",
        email: "Email",
        phone: "Teléfono (opcional)",
        message: "Mensaje",
        optIn: "Quiero recibir información",
      },
    },
    footer: {
      tagline: "14 años haciendo crecer negocios mexicanos.",
      creditLine: "Hecho en México, para negocios mexicanos.",
      columns: [
        {
          title: "NAVEGACIÓN",
          links: [
            { label: "Inicio", href: "#hero" },
            { label: "Beneficios", href: "#features" },
            { label: "Planes", href: "#pricing" },
            { label: "Testimonios", href: "#testimonials" },
            { label: "Contacto", href: "#contact" },
            { label: "Aviso de Privacidad", href: "#" },
            { label: "Términos y Condiciones", href: "#" },
          ],
        },
        {
          title: "CONTACTO",
          links: [
            { label: "liliana.mariscal@gmail.com", href: "mailto:liliana.mariscal@gmail.com" },
            { label: "WhatsApp +52 614 1892291", href: "https://wa.me/526141892291", external: true },
            {
              label: "Chihuahua, Chih., México",
              href: "https://www.google.com/maps/search/?api=1&query=Chihuahua%2C%20Chih.%2C%20M%C3%A9xico",
              external: true,
            },
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
    eyebrow: null,
    title: "Empieza gratis. Crece cuando quieras.",
    subtitle: "Sin contratos, sin sorpresas.",
    plans: [
      {
        id: "demo",
        name: "Demo",
        price: 0,
        priceLabel: "$0/7 días",
        currency: "MXN",
        interval: "14 días",
        description: "Para conocernos.",
        features: [
          "7 días gratis para descubrir qué fácil es hacer tu nómina y cortes de caja.",
          "Soporte en español",
        ],
        cta: "Empezar con Demo",
      },
      {
        id: "emprendedor",
        name: "Emprendedor",
        price: 400,
        currency: "MXN",
        interval: "mes",
        description: "Para el negocio que quiere orden.",
        features: [
          "Que los cortes de caja y nómina no te compliquen más.",
          "Colores e imagen personalizados",
          "Soporte en español",
        ],
        cta: "Empezar con Emprendedor",
      },
      {
        id: "creciendo",
        name: "Creciendo el Negocio",
        price: 580,
        currency: "MXN",
        interval: "mes",
        description: "El favorito de nuestros clientes.",
        badge: "Más popular",
        features: [
          "Venta de productos y manejo de inventario, Gift Cards digitales y canjeables.",
          "El plan que usan quienes ya no quieren improvisar.",
          "Colores e imagen personalizados",
          "Soporte en español",
        ],
        cta: "Quiero este plan",
        highlighted: true,
        stripePriceId: "",
      },
      {
        id: "premium",
        name: "Premium",
        price: 930,
        currency: "MXN",
        interval: "mes/salón",
        description: "Para el negocio que ya escala.",
        features: [
          "Todo incluido más soporte prioritario, múltiples sucursales y accesos ilimitados.",
          "Colores e imagen personalizados",
          "Soporte en español",
        ],
        cta: "Conocer Premium",
      },
    ],
    comparisonTable: {
      headers: ["Demo", "Emprendedor", "Creciendo el Negocio", "Premium"],
      highlightedColumn: 2,
      rows: [
        { label: "Módulo de agenda y venta de servicios", values: ["si", "si", "si", "si"] },
        { label: "Profesionistas en la Agenda", values: ["8", "8", "15", "Ilimitado"] },
        { label: "Cortes de caja y nómina", values: ["si", "si", "si", "si"] },
        { label: "Productos e inventarios", values: ["no", "no", "si", "si"] },
        { label: "Reportes especiales", values: ["no", "no", "si", "si"] },
        { label: "Venta y Canje de Gift Cards", values: ["no", "no", "si", "si"] },
        { label: "Usuarios del sistema", values: ["2", "2", "5", "Ilimitado"] },
        { label: "Ventas a crédito", values: ["no", "no", "si", "si"] },
        { label: "Salones", values: ["1", "1", "1", "Ilimitado (requiere licencia por sucursal)"] },
      ],
    },
    taxDisclaimer: "Estos precios no incluyen IVA.",
  },
}

export default config
