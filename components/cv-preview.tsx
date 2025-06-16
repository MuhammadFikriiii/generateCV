"use client"

import type { CVData } from "@/app/editor/page"
import { Template1 } from "@/components/templates/template-1"
import { Template2 } from "@/components/templates/template-2"
import { Template3 } from "@/components/templates/template-3"
import { Template4 } from "@/components/templates/template-4"
import { Template5 } from "@/components/templates/template-5"
import { Template6 } from "@/components/templates/template-6"
import { Template7 } from "@/components/templates/template-7"
import { Template8 } from "@/components/templates/template-8"
import { Template9 } from "@/components/templates/template-9"
import { Template10 } from "@/components/templates/template-10"
import { Template11 } from "@/components/templates/template-11"
import { Template12 } from "@/components/templates/template-12"
import { Template13 } from "@/components/templates/template-13"
import { Template14 } from "@/components/templates/template-14"
import { Template15 } from "@/components/templates/template-15"
import { Template16 } from "@/components/templates/template-16"
import { Template17 } from "@/components/templates/template-17"
import { Template18 } from "@/components/templates/template-18"
import { Template19 } from "@/components/templates/template-19"
import { Template20 } from "@/components/templates/template-20"

interface CVPreviewProps {
  data: CVData
  templateId: string
}

export function CVPreview({ data, templateId }: CVPreviewProps) {
  const renderTemplate = () => {
    switch (templateId) {
      case "1":
        return <Template1 data={data} />
      case "2":
        return <Template2 data={data} />
      case "3":
        return <Template3 data={data} />
      case "4":
        return <Template4 data={data} />
      case "5":
        return <Template5 data={data} />
      case "6":
        return <Template6 data={data} />
      case "7":
        return <Template7 data={data} />
      case "8":
        return <Template8 data={data} />
      case "9":
        return <Template9 data={data} />
      case "10":
        return <Template10 data={data} />
      case "11":
        return <Template11 data={data} />
      case "12":
        return <Template12 data={data} />
      case "13":
        return <Template13 data={data} />
      case "14":
        return <Template14 data={data} />
      case "15":
        return <Template15 data={data} />
      case "16":
        return <Template16 data={data} />
      case "17":
        return <Template17 data={data} />
      case "18":
        return <Template18 data={data} />
      case "19":
        return <Template19 data={data} />
      case "20":
        return <Template20 data={data} />
      default:
        return <Template1 data={data} />
    }
  }

  return (
    <div id="cv-preview" className="bg-white">
      {renderTemplate()}
    </div>
  )
}
