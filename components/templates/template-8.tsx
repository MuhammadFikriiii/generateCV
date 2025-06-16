"use client"

import type { CVData } from "@/app/editor/page"

interface Template8Props {
  data: CVData
}

export function Template8({ data }: Template8Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "maria.gonzalez@email.com",
      phone: data.personalInfo.phone || "+62 821-5678-9012",
      address: data.personalInfo.address || "Yogyakarta, Indonesia",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer dengan 3+ tahun pengalaman dalam pengembangan web dan aplikasi. Berpengalaman dalam React, Node.js, dan database SQL/NoSQL.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Software Engineer",
              company: "Tech Innovations",
              location: "Jakarta",
              startDate: "2022-01",
              endDate: "",
              current: true,
              description:
                "Mengembangkan dan memelihara aplikasi web menggunakan React dan Node.js. Berkontribusi dalam pengembangan API dan integrasi database.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "JavaScript", level: 5 },
            { id: "2", name: "React", level: 4 },
            { id: "3", name: "Node.js", level: 4 },
            { id: "4", name: "SQL", level: 3 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white font-sans relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-200 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-200 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-purple-200 to-transparent rounded-full transform -translate-x-16 -translate-y-16"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header with geometric shapes */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            {(data.personalInfo.photo || true) && (
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full transform rotate-6"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={data.personalInfo.photo || "/placeholder.svg?height=128&width=128"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">{sampleData.personalInfo.fullName}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mb-4"></div>

          <div className="flex justify-center items-center gap-6 text-gray-600 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>{sampleData.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span>{sampleData.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>{sampleData.personalInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Summary with creative styling */}
        <div className="mb-8">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mr-3"></div>
              PROFIL PROFESIONAL
            </h2>
            <p className="text-gray-700 leading-relaxed">{sampleData.personalInfo.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-8">
          {/* Experience - takes 3 columns */}
          <div className="col-span-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              PENGALAMAN KERJA
            </h2>

            <div className="space-y-6">
              {sampleData.experience.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100">
                    <div className="absolute -left-4 top-6 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                        <div className="text-orange-600 font-semibold">
                          {exp.company} • {exp.location}
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                        {exp.startDate} - {exp.current ? "Sekarang" : exp.endDate}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills - takes 2 columns */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              KEAHLIAN
            </h2>

            <div className="space-y-4">
              {sampleData.skills.map((skill, index) => (
                <div
                  key={skill.id}
                  className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-100"
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
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

            {/* Creative stats section */}
            <div className="mt-8 space-y-4">
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">7+</div>
                <div className="text-sm opacity-90">Tahun Pengalaman</div>
              </div>

              <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">200%</div>
                <div className="text-sm opacity-90">Brand Awareness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
