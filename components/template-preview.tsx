"use client"

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

// Sample data untuk preview template dengan data lengkap
const getSampleDataForTemplate = (templateId: string) => {
  const baseData = {
    personalInfo: {
      fullName: "MUHAMMAD FIKRI",
      jobTitle: "Full Stack Developer",
      birthPlace: "Jakarta",
      birthDate: "1995-08-15",
      address: "Jl. Asia Afrika No. 88, Bandung 40111",
      email: "muhammad.fikri@gmail.com",
      phone: "+62 812-3456-7890",
      photo: "/placeholder.svg?height=150&width=150",
      summary:
        "Full Stack Developer dengan pengalaman 6+ tahun dalam membangun aplikasi web modern. Spesialis dalam React, Node.js, dan cloud architecture dengan track record mengelola tim dan proyek besar.",
    },
    experience: [
      {
        id: "1",
        position: "Lead Full Stack Developer",
        company: "PT. Inovasi Digital",
        location: "Bandung",
        startDate: "2022-01-01",
        endDate: "",
        current: true,
        description:
          "Memimpin tim 8 developer dalam pengembangan platform e-learning yang digunakan oleh 50k+ siswa. Meningkatkan performance aplikasi hingga 40% dan mengimplementasikan CI/CD pipeline.",
      },
      {
        id: "2",
        position: "Senior Frontend Developer",
        company: "PT. Kreatif Teknologi",
        location: "Jakarta",
        startDate: "2020-03-01",
        endDate: "2021-12-31",
        current: false,
        description:
          "Mengembangkan dashboard analytics menggunakan React dan D3.js. Berhasil meningkatkan user engagement sebesar 60% melalui optimasi UX/UI.",
      },
    ],
    education: [
      {
        id: "1",
        degree: "S1 Teknik Informatika",
        institution: "Institut Teknologi Bandung",
        location: "Bandung",
        gpa: "3.75",
        year: "2017",
      },
    ],
    skills: [
      { id: "1", name: "React.js", level: 5 },
      { id: "2", name: "Node.js", level: 4 },
      { id: "3", name: "TypeScript", level: 4 },
      { id: "4", name: "Python", level: 4 },
      { id: "5", name: "AWS", level: 3 },
    ],
    certifications: [
      {
        id: "1",
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023-05-15",
        url: "https://aws.amazon.com/certification/",
      },
      {
        id: "2",
        name: "Google Cloud Professional",
        issuer: "Google Cloud",
        date: "2023-03-10",
        url: "https://cloud.google.com/certification",
      },
    ],
    languages: [
      { id: "1", name: "Bahasa Indonesia", level: "native" },
      { id: "2", name: "English", level: "advanced" },
      { id: "3", name: "Mandarin", level: "intermediate" },
    ],
    hobbies: ["Coding", "Photography", "Traveling", "Gaming", "Reading"],
    references: [
      {
        id: "1",
        name: "Dr. Budi Santoso",
        position: "CTO",
        company: "PT. Inovasi Digital",
        email: "budi.santoso@inovasidigital.com",
        phone: "+62 811-2233-4455",
      },
      {
        id: "2",
        name: "Sari Dewi",
        position: "Project Manager",
        company: "PT. Kreatif Teknologi",
        email: "sari.dewi@kreatiftek.com",
        phone: "+62 856-7788-9900",
      },
    ],
  }

  return baseData
}

interface TemplatePreviewProps {
  templateId: string
}

export function TemplatePreview({ templateId }: TemplatePreviewProps) {
  const sampleData = getSampleDataForTemplate(templateId)

  const renderTemplate = () => {
    switch (templateId) {
      case "1":
        return <Template1 data={sampleData} />
      case "2":
        return <Template2 data={sampleData} />
      case "3":
        return <Template3 data={sampleData} />
      case "4":
        return <Template4 data={sampleData} />
      case "5":
        return <Template5 data={sampleData} />
      case "6":
        return <Template6 data={sampleData} />
      case "7":
        return <Template7 data={sampleData} />
      case "8":
        return <Template8 data={sampleData} />
      case "9":
        return <Template9 data={sampleData} />
      case "10":
        return <Template10 data={sampleData} />
      case "11":
        return <Template11 data={sampleData} />
      case "12":
        return <Template12 data={sampleData} />
      case "13":
        return <Template13 data={sampleData} />
      case "14":
        return <Template14 data={sampleData} />
      case "15":
        return <Template15 data={sampleData} />
      case "16":
        return <Template16 data={sampleData} />
      case "17":
        return <Template17 data={sampleData} />
      case "18":
        return <Template18 data={sampleData} />
      case "19":
        return <Template19 data={sampleData} />
      case "20":
        return <Template20 data={sampleData} />
      default:
        return <Template1 data={sampleData} />
    }
  }

  return <div className="bg-white">{renderTemplate()}</div>
}
