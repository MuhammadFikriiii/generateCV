import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "CV Generator Pro - Buat CV Profesional Gratis",
  description:
    "Buat CV profesional dengan 20+ template gratis. Export PDF langsung, live preview real-time. Tanpa registrasi!",
  keywords: "cv generator, resume builder, template cv, buat cv online, cv gratis, template resume",
  authors: [{ name: "Muhammad Fikri" }],
  creator: "Muhammad Fikri",
  publisher: "CV Generator Pro",
  robots: "index, follow",
  openGraph: {
    title: "CV Generator Pro - Buat CV Profesional Gratis",
    description: "Buat CV profesional dengan 20+ template gratis. Export PDF langsung, live preview real-time.",
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        {/* Google AdSense Auto Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4642094843478665"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google AdSense Auto Ads Configuration */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-4642094843478665",
                enable_page_level_ads: true
              });
            `,
          }}
        />

        {/* Meta tags untuk AdSense verification */}
        <meta name="google-adsense-account" content="ca-pub-4642094843478665" />

        {/* Tambahan meta tags untuk SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="canonical" href="https://generate-cv-opal.vercel.app/" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
