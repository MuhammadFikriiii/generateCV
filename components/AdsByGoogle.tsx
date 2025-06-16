// components/adsbygoogle.tsx
"use client";

import { useEffect } from "react";

export default function AdsByGoogle() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        try {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
          clearInterval(interval);
        } catch (e) {
          console.error("Adsense push error:", e);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4642094843478665"
        crossOrigin="anonymous"
      ></script>

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4642094843478665"
        data-ad-slot="1642276732"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
