"use client"

import type { CVData } from "@/app/editor/page"

interface Template12Props {
  data: CVData
}

export function Template12({ data }: Template12Props) {
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
    <div className="w-[210mm] h-[297mm] bg-gradient-to-br from-slate-50 to-gray-100 font-sans text-xs overflow-hidden p-4">
      {/* Modern header with geometric shapes */}
      <div className="relative mb-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500 to-purple-600 rounded-full opacity-10"></div>
        <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-bl from-pink-500 to-orange-500 rounded-full opacity-15"></div>

        <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-md">
              <img
                src={data.personalInfo.photo || "/placeholder.svg?height=80&width=80"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {data.personalInfo.fullName || "MUHAMMAD FIKRI"}
              </h1>
              <div className="text-blue-600 font-semibold mb-3">Full Stack Developer</div>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div>📧 {data.personalInfo.email || "muhammad.fikri@gmail.com"}</div>
                <div>📱 {data.personalInfo.phone || "+62 812-3456-7890"}</div>
                <div className="col-span-2">
                  📍 {data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl p-4 shadow-md mb-4">
        <h2 className="text-base font-bold text-gray-900 mb-2 flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
          ABOUT ME
        </h2>
        <p className="text-gray-700 leading-relaxed text-xs">
          {data.personalInfo.summary ||
            "Passionate Full Stack Developer with expertise in modern web technologies. Experienced in building scalable applications and leading development teams."}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Experience - 2 columns */}
        <div className="col-span-2">
          <div className="bg-white rounded-xl p-4 shadow-md mb-4">
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              WORK EXPERIENCE
            </h2>

            <div className="space-y-4">
              {(data.experience.length > 0
                ? data.experience
                : [
                    {
                      id: "1",
                      position: "Senior Software Engineer",
                      company: "Tech Innovators Inc",
                      location: "Jakarta",
                      startDate: "2022-01-01",
                      endDate: "",
                      current: true,
                      description:
                        "Architected and developed scalable web applications using React and Node.js. Led a team of 5 developers and improved system performance by 40%.",
                    },
                  ]
              ).map((exp) => (
                <div key={exp.id} className="relative pl-4">
                  <div className="absolute left-0 top-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="absolute left-0.5 top-3 w-0.5 h-full bg-blue-200"></div>

                  <div className="mb-2">
                    <h3 className="font-bold text-gray-900 text-sm">{exp.position}</h3>
                    <div className="text-blue-600 font-medium text-xs">
                      {exp.company} • {exp.location}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
              EDUCATION
            </h2>

            <div className="space-y-3">
              {(data.education.length > 0
                ? data.education
                : [
                    {
                      id: "1",
                      degree: "Bachelor of Computer Science",
                      institution: "Institut Teknologi Bandung",
                      location: "Bandung",
                      gpa: "3.75",
                      year: "2017",
                    },
                  ]
              ).map((edu) => (
                <div key={edu.id} className="relative pl-4">
                  <div className="absolute left-0 top-1 w-2 h-2 bg-purple-500 rounded-full"></div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{edu.degree}</h3>
                    <div className="text-purple-600 font-medium text-xs">
                      {edu.institution} • {edu.location}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {edu.year} {edu.gpa && `• GPA: ${edu.gpa}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Others - 1 column */}
        <div className="space-y-4">
          {/* Skills */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
              SKILLS
            </h2>

            <div className="space-y-3">
              {(data.skills.length > 0
                ? data.skills
                : [
                    { id: "1", name: "React", level: 5 },
                    { id: "2", name: "Node.js", level: 4 },
                    { id: "3", name: "TypeScript", level: 4 },
                    { id: "4", name: "Python", level: 3 },
                  ]
              ).map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-900 text-xs font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-xs">{skill.level}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-orange-400 to-red-500 h-1.5 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center">
              <div className="w-4 h-4 bg-pink-500 rounded-full mr-2"></div>
              LANGUAGES
            </h2>

            <div className="space-y-2">
              {(data.languages.length > 0
                ? data.languages
                : [
                    { id: "1", name: "Bahasa Indonesia", level: "native" },
                    { id: "2", name: "English", level: "advanced" },
                  ]
              ).map((lang) => (
                <div key={lang.id} className="flex justify-between">
                  <span className="text-gray-900 text-xs">{lang.name}</span>
                  <span className="text-pink-600 text-xs font-medium">{getLanguageLevel(lang.level)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              CERTIFICATIONS
            </h2>

            <div className="space-y-2">
              {(data.certifications.length > 0
                ? data.certifications
                : [
                    {
                      id: "1",
                      name: "AWS Solutions Architect",
                      issuer: "Amazon Web Services",
                      date: "2023-05-15",
                    },
                  ]
              ).map((cert) => (
                <div key={cert.id}>
                  <h3 className="font-medium text-gray-900 text-xs">{cert.name}</h3>
                  <div className="text-gray-600 text-xs">{cert.issuer}</div>
                  <div className="text-gray-500 text-xs">{formatDate(cert.date)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
              INTERESTS
            </h2>

            <div className="flex flex-wrap gap-1">
              {(data.hobbies.length > 0 ? data.hobbies : ["Coding", "Photography", "Traveling"]).map((hobby, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
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
