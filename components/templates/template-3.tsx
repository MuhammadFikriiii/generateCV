"use client"

import type { CVData } from "@/app/editor/page"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

interface Template3Props {
  data: CVData
}

export function Template3({ data }: Template3Props) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", { year: "numeric", month: "long" })
  }

  const getLanguageLevel = (level: string) => {
    const levels = {
      beginner: "Pemula",
      elementary: "Dasar",
      intermediate: "Menengah",
      advanced: "Mahir",
      native: "Native",
    }
    return levels[level as keyof typeof levels] || level
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-6 font-sans text-sm flex flex-col items-center justify-start">
      {/* Header */}
      <div className="text-center mb-6 pb-4">
        <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-300">
          <img
            src={data.personalInfo.photo || "/placeholder.svg?height=150&width=150"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-light text-gray-800 mb-2 tracking-wide">
          {data.personalInfo.fullName || "MUHAMMAD FIKRI"}
        </h1>
        <div className="flex justify-center items-center gap-6 text-gray-600 flex-wrap">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>{data.personalInfo.email || "muhammad.fikri@gmail.com"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>{data.personalInfo.phone || "+62 812-3456-7890"}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 text-gray-600 mt-2">
          <Calendar className="w-4 h-4" />
          <span>
            {data.personalInfo.birthPlace && data.personalInfo.birthDate
              ? `${data.personalInfo.birthPlace}, ${formatDate(data.personalInfo.birthDate)}`
              : data.personalInfo.birthPlace || formatDate(data.personalInfo.birthDate) || "Jakarta, Agustus 1995"}
          </span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">PROFIL</h2>
          <p className="text-gray-700 leading-relaxed italic">
            {data.personalInfo.summary ||
              "Full Stack Developer dengan pengalaman 6+ tahun dalam membangun aplikasi web modern. Spesialis dalam React, Node.js, dan cloud architecture dengan track record mengelola tim dan proyek besar."}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Experience */}
        <div className="mb-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 tracking-wide text-center">PENGALAMAN KERJA</h2>
          <div className="space-y-4">
            {(data.experience.length > 0
              ? data.experience
              : [
                  {
                    id: "1",
                    position: "Lead Full Stack Developer",
                    company: "PT. Inovasi Digital",
                    location: "Bandung",
                    startDate: "2022-01-01",
                    endDate: "",
                    current: true,
                    description:
                      "Memimpin tim 8 developer dalam pengembangan platform e-learning yang digunakan oleh 50k+ siswa.",
                  },
                  {
                    id: "2",
                    position: "Senior Frontend Developer",
                    company: "PT. Kreatif Teknologi",
                    location: "Jakarta",
                    startDate: "2020-03-01",
                    endDate: "2021-12-31",
                    current: false,
                    description: "Mengembangkan dashboard analytics menggunakan React dan D3.js.",
                  },
                ]
            ).map((exp) => (
              <div key={exp.id} className="text-center">
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <div className="text-gray-600 font-medium">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {formatDate(exp.startDate)} - {exp.current ? "Sekarang" : formatDate(exp.endDate)}
                </span>
                {exp.description && <p className="text-gray-700 text-sm leading-relaxed mt-2">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 tracking-wide text-center">PENDIDIKAN</h2>
          <div className="space-y-3">
            {(data.education.length > 0
              ? data.education
              : [
                  {
                    id: "1",
                    degree: "S1 Teknik Informatika",
                    institution: "Institut Teknologi Bandung",
                    location: "Bandung",
                    gpa: "3.75",
                    year: "2017",
                  },
                ]
            ).map((edu) => (
              <div key={edu.id} className="text-center">
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <div className="text-gray-600">
                  {edu.institution} {edu.location && `• ${edu.location}`}
                </div>
                {edu.gpa && <div className="text-sm text-gray-500">IPK: {edu.gpa}</div>}
                <span className="text-sm text-gray-500 whitespace-nowrap">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide text-center">KEAHLIAN</h2>
          <div className="space-y-3">
            {(data.skills.length > 0
              ? data.skills
              : [
                  { id: "1", name: "React.js", level: 5 },
                  { id: "2", name: "Node.js", level: 4 },
                  { id: "3", name: "TypeScript", level: 4 },
                  { id: "4", name: "Python", level: 4 },
                ]
            ).map((skill) => (
              <div key={skill.id} className="text-center">
                <div className="flex justify-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                </div>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-2 rounded-sm ${i < skill.level ? "bg-gray-800" : "bg-gray-300"}`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide text-center">BAHASA</h2>
          <div className="space-y-2">
            {(data.languages.length > 0
              ? data.languages
              : [
                  { id: "1", name: "Bahasa Indonesia", level: "native" },
                  { id: "2", name: "English", level: "advanced" },
                  { id: "3", name: "Mandarin", level: "intermediate" },
                ]
            ).map((lang) => (
              <div key={lang.id} className="flex justify-center gap-4">
                <span className="text-sm text-gray-700">{lang.name}</span>
                <span className="text-xs text-gray-500">{getLanguageLevel(lang.level)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 tracking-wide text-center">SERTIFIKASI</h2>
          <div className="space-y-3">
            {(data.certifications.length > 0
              ? data.certifications
              : [
                  {
                    id: "1",
                    name: "AWS Certified Solutions Architect",
                    issuer: "Amazon Web Services",
                    date: "2023-05-15",
                  },
                  {
                    id: "2",
                    name: "Google Cloud Professional",
                    issuer: "Google Cloud",
                    date: "2023-03-10",
                  },
                ]
            ).map((cert) => (
              <div key={cert.id} className="text-center">
                <h3 className="font-medium text-gray-900">{cert.name}</h3>
                <div className="text-sm text-gray-600">{cert.issuer}</div>
                <span className="text-sm text-gray-500 whitespace-nowrap">{formatDate(cert.date)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* References */}
        <div className="mb-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 tracking-wide text-center">REFERENSI</h2>
          <div className="space-y-3">
            {(data.references.length > 0
              ? data.references
              : [
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
                ]
            ).map((ref) => (
              <div key={ref.id} className="text-center">
                <h3 className="font-medium text-gray-900">{ref.name}</h3>
                <div className="text-gray-600">{ref.position}</div>
                <div className="text-gray-600">{ref.company}</div>
                <div className="text-gray-600">{ref.email}</div>
                {ref.phone && <div className="text-gray-600">{ref.phone}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="mb-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide text-center">MINAT</h2>
          <div className="text-center">
            {(data.hobbies.length > 0 ? data.hobbies : ["Coding", "Photography", "Traveling", "Gaming", "Reading"]).map(
              (hobby, index) => (
                <div key={index} className="text-sm text-gray-700 inline-block mx-2">
                  • {hobby}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
