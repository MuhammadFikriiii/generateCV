"use client"

import type { CVData } from "@/app/editor/page"

interface Template8Props {
  data: CVData
}

export function Template8({ data }: Template8Props) {
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
    <div className="w-[210mm] min-h-[297mm] bg-white font-sans text-sm relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-200 to-transparent rounded-full transform translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-pink-200 to-transparent rounded-full transform -translate-x-18 translate-y-18"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-purple-200 to-transparent rounded-full transform -translate-x-12 -translate-y-12"></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Header with geometric shapes */}
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <div className="w-24 h-24 mx-auto mb-3 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full transform rotate-6"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                <img
                  src={data.personalInfo.photo || "/placeholder.svg?height=96&width=96"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.personalInfo.fullName || "MUHAMMAD FIKRI"}</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mb-3"></div>

          <div className="flex justify-center items-center gap-4 text-gray-600 text-sm flex-wrap">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>{data.personalInfo.email || "muhammad.fikri@gmail.com"}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span>{data.personalInfo.phone || "+62 812-3456-7890"}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>{data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}</span>
            </div>
          </div>
        </div>

        {/* Summary with creative styling */}
        <div className="mb-6">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mr-2"></div>
              PROFIL PROFESIONAL
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              {data.personalInfo.summary ||
                "Full Stack Developer dengan 3+ tahun pengalaman building scalable web applications. Passionate about clean code dan user-centered design."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {/* Experience - takes 3 columns */}
          <div className="col-span-3">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-xs">E</span>
              </div>
              PENGALAMAN KERJA
            </h2>

            <div className="space-y-4">
              {(data.experience.length > 0
                ? data.experience
                : [
                    {
                      id: "1",
                      position: "Software Engineer",
                      company: "PT. Inovasi Digital",
                      location: "Bandung",
                      startDate: "2022-01-01",
                      endDate: "",
                      current: true,
                      description:
                        "Developed and maintained key features for a high-traffic e-commerce platform. Implemented RESTful APIs and integrated with third-party services.",
                    },
                  ]
              ).map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="absolute -left-3 top-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-base font-bold text-gray-900">{exp.position}</h3>
                        <div className="text-orange-600 font-semibold text-sm">
                          {exp.company} • {exp.location}
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        {formatDate(exp.startDate)} - {exp.current ? "Sekarang" : formatDate(exp.endDate)}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 mt-6 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
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
                <div
                  key={edu.id}
                  className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-3 shadow-md border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 text-sm">{edu.degree}</h3>
                  <div className="text-orange-600 text-sm">
                    {edu.institution} • {edu.location}
                  </div>
                  <div className="text-xs text-gray-600">
                    {edu.year} {edu.gpa && `• IPK: ${edu.gpa}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills - takes 2 columns */}
          <div className="col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              KEAHLIAN
            </h2>

            <div className="space-y-3">
              {(data.skills.length > 0
                ? data.skills
                : [
                    { id: "1", name: "JavaScript", level: 5 },
                    { id: "2", name: "React", level: 5 },
                    { id: "3", name: "Node.js", level: 4 },
                    { id: "4", name: "SQL", level: 4 },
                  ]
              ).map((skill, index) => (
                <div
                  key={skill.id}
                  className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-3 shadow-md border border-gray-100"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}/5</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-700 ${
                          index % 3 === 0
                            ? "bg-gradient-to-r from-orange-400 to-pink-500"
                            : index % 3 === 1
                              ? "bg-gradient-to-r from-pink-400 to-purple-500"
                              : "bg-gradient-to-r from-purple-400 to-orange-500"
                        }`}
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <h2 className="text-lg font-bold text-gray-800 mb-3 mt-6">BAHASA</h2>
            <div className="space-y-2">
              {(data.languages.length > 0
                ? data.languages
                : [
                    { id: "1", name: "Bahasa Indonesia", level: "native" },
                    { id: "2", name: "English", level: "advanced" },
                  ]
              ).map((lang) => (
                <div
                  key={lang.id}
                  className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800 text-sm">{lang.name}</span>
                    <span className="text-xs text-orange-600">{getLanguageLevel(lang.level)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h2 className="text-lg font-bold text-gray-800 mb-3 mt-6">SERTIFIKASI</h2>
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
                <div
                  key={cert.id}
                  className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-gray-100"
                >
                  <h3 className="font-medium text-gray-900 text-xs">{cert.name}</h3>
                  <div className="text-xs text-gray-600">{cert.issuer}</div>
                  <div className="text-xs text-orange-600">{formatDate(cert.date)}</div>
                </div>
              ))}
            </div>

            {/* Hobbies */}
            <h2 className="text-lg font-bold text-gray-800 mb-3 mt-6">HOBI</h2>
            <div className="flex flex-wrap gap-1">
              {(data.hobbies.length > 0 ? data.hobbies : ["Coding", "Photography", "Traveling"]).map((hobby, index) => (
                <span key={index} className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
