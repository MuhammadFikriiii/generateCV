"use client"

import type { CVData } from "@/app/editor/page"

interface Template10Props {
  data: CVData
}

export function Template10({ data }: Template10Props) {
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
    <div className="w-[210mm] h-[297mm] bg-gradient-to-br from-cyan-50 via-white to-teal-50 font-sans text-xs relative overflow-hidden p-4">
      {/* Artistic header with flowing shapes */}
      <div className="relative overflow-hidden mb-4">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 transform -skew-y-2 origin-top-left"></div>
        <div className="absolute top-4 right-0 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
        <div className="absolute top-8 right-8 w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>

        <div className="relative z-10 pt-6 pb-8 px-4 text-white">
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-light mb-1 tracking-wide">
                {data.personalInfo.fullName || "MUHAMMAD FIKRI"}
              </h1>
              <div className="text-base font-light opacity-90 mb-3">Full Stack Developer</div>

              <div className="grid grid-cols-3 gap-2 text-xs opacity-90">
                <div>
                  <div className="font-semibold mb-1">EMAIL</div>
                  <div>{data.personalInfo.email || "muhammad.fikri@gmail.com"}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">PHONE</div>
                  <div>{data.personalInfo.phone || "+62 812-3456-7890"}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">LOCATION</div>
                  <div>{data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={data.personalInfo.photo || "/placeholder.svg?height=96&width=96"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-sm">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-4 relative z-20">
        {/* Creative summary card */}
        <div className="bg-white rounded-2xl p-3 shadow-xl mb-4 border-l-4 border-cyan-500">
          <h2 className="text-base font-light text-gray-800 mb-2 flex items-center">
            <span className="w-5 h-5 bg-cyan-500 rounded-full mr-2 flex items-center justify-center text-white text-xs">
              💡
            </span>
            CREATIVE VISION
          </h2>
          <p className="text-gray-700 leading-relaxed text-xs font-light italic">
            "
            {data.personalInfo.summary ||
              "Full Stack Developer dengan pengalaman luas dalam pengembangan aplikasi web. Berpengalaman lebih dari 5 tahun dalam membangun solusi inovatif dan efisien."}
            "
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Experience - 2 columns */}
          <div className="col-span-1">
            <h2 className="text-lg font-light text-gray-800 mb-3 flex items-center">
              <span className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mr-2 flex items-center justify-center text-white text-xs">
                🚀
              </span>
              EXPERIENCE
            </h2>

            <div className="space-y-3">
              {(data.experience.length > 0
                ? data.experience
                : [
                    {
                      id: "1",
                      position: "Software Engineer",
                      company: "Tech Solutions",
                      location: "Jakarta",
                      startDate: "2022-01-01",
                      endDate: "",
                      current: true,
                      description:
                        "Bertanggung jawab untuk mengembangkan dan memelihara aplikasi web. Berkontribusi dalam pengembangan fitur baru dan perbaikan bug.",
                    },
                  ]
              ).map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-teal-400">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">{exp.position}</h3>
                        <div className="text-teal-600 font-medium text-xs">{exp.company}</div>
                        <div className="text-gray-500 text-xs">{exp.location}</div>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-100 to-teal-100 px-2 py-1 rounded-full">
                        <span className="text-cyan-800 text-xs font-medium">
                          {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-xs">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <h2 className="text-lg font-light text-gray-800 mb-3 mt-4 flex items-center">
              <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 flex items-center justify-center text-white text-xs">
                🎓
              </span>
              EDUCATION
            </h2>
            <div className="space-y-2">
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
                <div key={edu.id} className="bg-white rounded-xl p-3 shadow-lg border-l-4 border-purple-400">
                  <h3 className="font-semibold text-gray-900 text-sm">{edu.degree}</h3>
                  <div className="text-purple-600 text-xs">
                    {edu.institution} • {edu.location}
                  </div>
                  <div className="text-xs text-gray-600">
                    {edu.year} {edu.gpa && `• IPK: ${edu.gpa}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Info - 1 column */}
          <div className="space-y-3">
            {/* Skills */}
            <div className="bg-white rounded-xl p-3 shadow-lg">
              <h2 className="text-base font-light text-gray-800 mb-3 flex items-center">
                <span className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 flex items-center justify-center text-white text-xs">
                  ⚡
                </span>
                SKILLS
              </h2>

              <div className="space-y-2">
                {(data.skills.length > 0
                  ? data.skills
                  : [
                      { id: "1", name: "JavaScript", level: 5 },
                      { id: "2", name: "React", level: 5 },
                      { id: "3", name: "Node.js", level: 4 },
                      { id: "4", name: "SQL", level: 4 },
                    ]
                ).map((skill, index) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-800 text-xs">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          index % 4 === 0
                            ? "bg-gradient-to-r from-cyan-400 to-teal-500"
                            : index % 4 === 1
                              ? "bg-gradient-to-r from-purple-400 to-pink-500"
                              : index % 4 === 2
                                ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                                : "bg-gradient-to-r from-teal-400 to-green-500"
                        }`}
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-xl p-3 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                <span className="w-4 h-4 bg-blue-400 rounded-full mr-2 flex items-center justify-center text-white text-xs">
                  🌐
                </span>
                LANGUAGES
              </h3>
              <div className="space-y-1">
                {(data.languages.length > 0
                  ? data.languages
                  : [
                      { id: "1", name: "Bahasa Indonesia", level: "native" },
                      { id: "2", name: "English", level: "advanced" },
                    ]
                ).map((lang) => (
                  <div key={lang.id} className="flex justify-between text-xs">
                    <span className="font-medium text-gray-800">{lang.name}</span>
                    <span className="text-blue-600">{getLanguageLevel(lang.level)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl p-3 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                <span className="w-4 h-4 bg-green-400 rounded-full mr-2 flex items-center justify-center text-white text-xs">
                  🏆
                </span>
                CERTIFICATIONS
              </h3>
              <div className="space-y-1">
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
                  <div key={cert.id}>
                    <h4 className="font-medium text-gray-900 text-xs">{cert.name}</h4>
                    <div className="text-xs text-gray-600">
                      {cert.issuer} - {formatDate(cert.date)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="bg-white rounded-xl p-3 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">HOBBIES</h3>
              <div className="flex flex-wrap gap-1">
                {(data.hobbies.length > 0 ? data.hobbies : ["Coding", "Photography", "Traveling"]).map(
                  (hobby, index) => (
                    <span key={index} className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs">
                      {hobby}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
