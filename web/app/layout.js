import "./globals.css"

import { GeistSans } from "geist/font/sans"

import config from "@/config"



export const metadata = {

  metadataBase: new URL(

    process.env.NEXT_PUBLIC_APP_URL || config.app.defaultUrl

  ),

  title: {

    default: config.app.name,

    template: `%s · ${config.app.name}`,

  },

  description: config.app.description,

  openGraph: {

    title: config.app.name,

    description: config.app.description,

    type: "website",

    locale: config.app.locale === "es" ? "es_MX" : "en_US",

  },

  twitter: { card: "summary_large_image" },

  icons: { icon: "/favicon.svg" },

}



export const viewport = {

  themeColor: config.brand.primary,

  width: "device-width",

  initialScale: 1,

}



export default function RootLayout({ children }) {

  return (

    <html

      lang={config.app.locale}

      data-theme="vibefast"

      suppressHydrationWarning

      className={`scroll-smooth ${GeistSans.variable}`}

      style={{ "--color-primary": config.brand.primary }}

    >

      <body className={`${GeistSans.className} bg-base-100 text-base-content antialiased`}>

        <script

          dangerouslySetInnerHTML={{

            __html: `try{var t=localStorage.getItem('theme');if(t==='vibefast'||t==='vibefast-dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}`,

          }}

        />

        {children}

      </body>

    </html>

  )

}


