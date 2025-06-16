import type { Metadata } from "next";
import Script from "next/script"; // ✅ Tambahkan ini
import "./globals.css";

export const metadata: Metadata = {
  title: "CV generator",
  description: "Created by Muhammad Fikri",
  generator: "Muhammad Fikri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense script di sini */}
        <Script
          id="adsbygoogle-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4642094843478665"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}