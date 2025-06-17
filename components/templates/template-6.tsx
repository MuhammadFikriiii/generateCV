"use client"

import type { CVData } from "@/app/editor/page"

interface Template6Props {
  data: CVData
}

export function Template6({ data }: Template6Props) {
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
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-indigo-50 to-purple-50 p-6 font-sans text-sm overflow-hidden">
      {/* Decorative Header */}
      <div className="relative mb-6">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20"></div>
        <div className="absolute top-4 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20"></div>

        <div className="relative z-10 text-center pt-8">
          <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src={data.personalInfo.photo || "/placeholder.svg?height=112&width=112"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {data.personalInfo.fullName || "MUHAMMAD FIKRI"}
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-600 text-xs flex-wrap">
            <span>{data.personalInfo.email || "muhammad.fikri@gmail.com"}</span>
            <span>•</span>
            <span>{data.personalInfo.phone || "+62 812-3456-7890"}</span>
            <span>•</span>
            <span>{data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}</span>
          </div>
        </div>
      </div>

      {/* Summary in decorative box */}
      <div className="bg-white rounded-2xl p-4 shadow-lg mb-6 border-l-4 border-indigo-500">
        <h2 className="text-lg font-bold text-indigo-600 mb-2">TENTANG SAYA</h2>
        <p className="text-gray-700 leading-relaxed italic text-sm">
          {data.personalInfo.summary ||
            "Full Stack Developer dengan pengalaman 6+ tahun dalam membangun aplikasi web modern. Spesialis dalam React, Node.js, dan cloud architecture."}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Experience */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold text-indigo-600 mb-4 flex items-center">
            <div className="w-6 h-6 bg-indigo-500 rounded-full mr-2"></div>
            PENGALAMAN KERJA
          </h2>

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
            ).map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{exp.position}</h3>
                      <div className="text-indigo-600 font-semibold text-sm">
                        {exp.company} • {exp.location}
                      </div>
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                      {formatDate(exp.startDate)} - {exp.current ? "Sekarang" : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed">{exp.description}</p>
                </div>
                {index < (data.experience.length > 0 ? data.experience.length : 2) - 1 && (
                  <div className="flex justify-center my-2">
                    <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Education */}
          <h2 className="text-xl font-bold text-indigo-600 mb-4 mt-6 flex items-center">
            <div className="w-6 h-6 bg-purple-500 rounded-full mr-2"></div>
            PENDIDIKAN
          </h2>
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
              <div key={edu.id} className="bg-white rounded-lg p-3 shadow-md">
                <h3 className="font-bold text-gray-900 text-sm">{edu.degree}</h3>
                <div className="text-indigo-600 text-sm">
                  {edu.institution} • {edu.location}
                </div>
                <div className="text-xs text-gray-500">
                  {edu.year} {edu.gpa && `• IPK: ${edu.gpa}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Skills */}
        <div>
          <h2 className="text-xl font-bold text-indigo-600 mb-4 flex items-center">
            <div className="w-6 h-6 bg-purple-500 rounded-full mr-2"></div>
            KEAHLIAN
          </h2>

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
              <div key={skill.id} className="bg-white rounded-lg p-3 shadow-md">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-800 text-sm">{skill.name}</span>
                  <span className="text-xs text-gray-500">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <h2 className="text-lg font-bold text-indigo-600 mb-3 mt-6">BAHASA</h2>
          <div className="space-y-2">
            {(data.languages.length > 0
              ? data.languages
              : [
                  { id: "1", name: "Bahasa Indonesia", level: "native" },
                  { id: "2", name: "English", level: "advanced" },
                  { id: "3", name: "Mandarin", level: "intermediate" },
                ]
            ).map((lang) => (
              <div key={lang.id} className="bg-white rounded-lg p-2 shadow-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800 text-sm">{lang.name}</span>
                  <span className="text-xs text-indigo-600">{getLanguageLevel(lang.level)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <h2 className="text-lg font-bold text-indigo-600 mb-3 mt-6">SERTIFIKASI</h2>
          <div className="space-y-2">
            {(data.certifications.length > 0
              ? data.certifications
              : [
                  {
                    id: "1",
                    name: "AWS Certified Solutions Architect",
                    issuer: "Amazon Web Services",
                    date: "2023-05-15",
                  },
                ]
            ).map((cert) => (
              <div key={cert.id} className="bg-white rounded-lg p-2 shadow-sm">
                <h3 className="font-medium text-gray-900 text-xs">{cert.name}</h3>
                <div className="text-xs text-gray-600">{cert.issuer}</div>
                <div className="text-xs text-indigo-600">{formatDate(cert.date)}</div>
              </div>
            ))}
          </div>

          {/* Hobbies */}
          <h2 className="text-lg font-bold text-indigo-600 mb-3 mt-6">HOBI</h2>
          <div className="flex flex-wrap gap-1">
            {(data.hobbies.length > 0 ? data.hobbies : ["Coding", "Photography", "Traveling"]).map((hobby, index) => (
              <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer decoration */}
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
