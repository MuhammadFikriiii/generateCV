"use client"

import type { CVData } from "@/app/editor/page"
import { Mail, Phone, MapPin, Star } from "lucide-react"

interface Template1Props {
  data: CVData
}

export function Template1({ data }: Template1Props) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", { year: "numeric", month: "long" })
  }

  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-3 h-3 ${i < level ? "fill-blue-500 text-blue-500" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="w-[210mm] h-[297mm] bg-gray-50 font-sans text-sm leading-relaxed overflow-hidden">
      {/* Header */}
      <div className="bg-blue-700 text-white py-12 px-8 mb-8">
        <div className="flex items-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={data.personalInfo.photo || "/placeholder.svg?height=128&width=128"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{data.personalInfo.fullName || "MUHAMMAD FIKRI"}</h1>
            <p className="text-lg">{data.personalInfo.jobTitle || "Full Stack Developer"}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-start gap-8">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>{data.personalInfo.email || "muhammad.fikri@gmail.com"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>{data.personalInfo.phone || "+62 812-3456-7890"}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>{data.personalInfo.address || "Bandung, Indonesia"}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Summary */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase tracking-wide">Ringkasan Profil</h2>
          <p className="text-gray-700 leading-relaxed">
            {data.personalInfo.summary ||
              "Full Stack Developer dengan pengalaman 6+ tahun dalam membangun aplikasi web modern. Spesialis dalam React, Node.js, dan cloud architecture."}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase tracking-wide">Pengalaman Kerja</h2>
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
                ]
            ).map((exp) => (
              <div key={exp.id} className="border-l-4 border-blue-300 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(exp.startDate) || "Jan 2022"} -{" "}
                    {exp.current ? "Sekarang" : formatDate(exp.endDate) || "Sekarang"}
                  </span>
                </div>
                <div className="text-blue-700 font-medium mb-1">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase tracking-wide">Pendidikan</h2>
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
              <div key={edu.id} className="border-l-4 border-blue-300 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">{edu.year}</span>
                </div>
                <div className="text-blue-700 font-medium">
                  {edu.institution} {edu.location && `• ${edu.location}`}
                </div>
                {edu.gpa && <div className="text-sm text-gray-600">IPK: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Skills */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase tracking-wide">Keahlian</h2>
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
                <div key={skill.id} className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level * 20}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level * 20}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase tracking-wide">Bahasa</h2>
            <div className="space-y-2">
              {(data.languages.length > 0
                ? data.languages
                : [
                    { id: "1", name: "Bahasa Indonesia", level: "Native" },
                    { id: "2", name: "English", level: "Advanced" },
                  ]
              ).map((lang) => (
                <div key={lang.id} className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{lang.name}</span>
                  <span className="text-sm text-gray-600 capitalize">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies */}
        {(data.hobbies.length > 0 || true) && (
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase tracking-wide">Hobi & Minat</h2>
            <div className="flex flex-wrap gap-2">
              {(data.hobbies.length > 0 ? data.hobbies : ["Coding", "Photography", "Traveling", "Gaming"]).map(
                (hobby, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {hobby}
                  </span>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
