"use client"

import type { CVData } from "@/app/editor/page"
import { Mail, Phone, MapPin, Calendar, Code, Award } from "lucide-react"

interface Template4Props {
  data: CVData
}

export function Template4({ data }: Template4Props) {
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
    <div className="w-[210mm] min-h-[297mm] bg-gray-100 font-sans text-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-md shadow-md mb-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={data.personalInfo.photo || "/placeholder.svg?height=150&width=150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName || "MUHAMMAD FIKRI"}</h1>
            <div className="grid grid-cols-2 gap-4 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{data.personalInfo.email || "muhammad.fikri@gmail.com"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{data.personalInfo.phone || "+62 812-3456-7890"}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {data.personalInfo.birthPlace && data.personalInfo.birthDate
                    ? `${data.personalInfo.birthPlace}, ${formatDate(data.personalInfo.birthDate)}`
                    : data.personalInfo.birthPlace ||
                      formatDate(data.personalInfo.birthDate) ||
                      "Jakarta, Agustus 1995"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        <div className="mb-8 bg-white rounded-md shadow-md p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">PROFIL</h2>
          </div>
          <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border-l-4 border-green-600">
            {data.personalInfo.summary ||
              "Full Stack Developer dengan pengalaman 6+ tahun dalam membangun aplikasi web modern. Spesialis dalam React, Node.js, dan cloud architecture dengan track record mengelola tim dan proyek besar."}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-white rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-bold text-gray-800">KEAHLIAN</h2>
              </div>
              <div className="space-y-4">
                {(data.skills.length > 0
                  ? data.skills
                  : [
                      { id: "1", name: "React.js", level: 5 },
                      { id: "2", name: "Node.js", level: 4 },
                      { id: "3", name: "TypeScript", level: 4 },
                      { id: "4", name: "Python", level: 4 },
                      { id: "5", name: "AWS", level: 3 },
                    ]
                ).map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">L</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">BAHASA</h2>
              </div>
              <div className="space-y-3">
                {(data.languages.length > 0
                  ? data.languages
                  : [
                      { id: "1", name: "Bahasa Indonesia", level: "native" },
                      { id: "2", name: "English", level: "advanced" },
                      { id: "3", name: "Mandarin", level: "intermediate" },
                    ]
                ).map((lang) => (
                  <div key={lang.id} className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-gray-800">{lang.name}</div>
                    <div className="text-sm text-green-600 capitalize font-medium">{getLanguageLevel(lang.level)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="bg-white rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">H</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">HOBI</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {(data.hobbies.length > 0
                  ? data.hobbies
                  : ["Coding", "Photography", "Traveling", "Gaming", "Reading"]
                ).map((hobby, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-8">
            {/* Experience */}
            <div className="bg-white rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">E</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">PENGALAMAN KERJA</h2>
              </div>
              <div className="space-y-6">
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
                    ]
                ).map((exp, index) => (
                  <div key={exp.id} className="relative">
                    {index !== (data.experience.length > 0 ? data.experience.length : 2) - 1 && (
                      <div className="absolute left-4 top-8 w-0.5 h-full bg-green-200"></div>
                    )}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-gray-900">{exp.position}</h3>
                              <div className="text-green-600 font-medium">
                                {exp.company} {exp.location && `• ${exp.location}`}
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {formatDate(exp.startDate)} - {exp.current ? "Sekarang" : formatDate(exp.endDate)}
                            </span>
                          </div>
                          {exp.description && (
                            <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">PENDIDIKAN</h2>
              </div>
              <div className="space-y-4">
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
                  <div key={edu.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                        <div className="text-green-600 font-medium">
                          {edu.institution} {edu.location && `• ${edu.location}`}
                        </div>
                        {edu.gpa && <div className="text-sm text-gray-600">IPK: {edu.gpa}</div>}
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-bold text-gray-800">SERTIFIKASI</h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
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
                  <div key={cert.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">{cert.name}</h3>
                        <div className="text-sm text-gray-600">{cert.issuer}</div>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {formatDate(cert.date)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="bg-white rounded-md shadow-md p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">R</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">REFERENSI</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
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
                  <div key={ref.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-gray-900">{ref.name}</h3>
                    <div className="text-sm text-gray-600">{ref.position}</div>
                    <div className="text-sm text-gray-600">{ref.company}</div>
                    <div className="text-sm text-green-600">{ref.email}</div>
                    {ref.phone && <div className="text-sm text-gray-600">{ref.phone}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
