"use client"

import { useEffect } from "react"

interface GoogleAdSenseProps {
  slot: string
  format?: string
  responsive?: boolean
  style?: React.CSSProperties
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export function GoogleAdSense({
  slot,
  format = "auto",
  responsive = true,
  style = { display: "block" },
}: GoogleAdSenseProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error("AdSense error:", err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-4642094843478665"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive.toString()}
    />
  )
}
