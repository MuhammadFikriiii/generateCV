"use client"

import type { CVData } from "@/app/editor/page"

interface Template6Props {
  data: CVData
}

export function Template6({ data }: Template6Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "muhammad.fikri@gmail.com",
      phone: data.personalInfo.phone || "+62 812-3456-7890",
      address: data.personalInfo.address || "Jakarta, Indonesia",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer dengan 5+ tahun pengalaman dalam mengembangkan aplikasi web dan mobile. Passionate tentang teknologi terbaru dan arsitektur perangkat lunak.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Senior UI/UX Designer",
              company: "Tech Innovate",
              location: "Jakarta",
              startDate: "2022-01",
              endDate: "",
              current: true,
              description:
                "Memimpin tim design untuk aplikasi mobile dan web. Meningkatkan user engagement sebesar 40% melalui redesign interface.",
            },
            {
              id: "2",
              position: "UI/UX Designer",
              company: "Digital Creative",
              location: "Bandung",
              startDate: "2020-03",
              endDate: "2021-12",
              current: false,
              description:
                "Merancang wireframe dan prototype untuk berbagai klien. Kolaborasi dengan developer untuk implementasi design.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "Figma", level: 5 },
            { id: "2", name: "Adobe XD", level: 4 },
            { id: "3", name: "Sketch", level: 4 },
            { id: "4", name: "Prototyping", level: 5 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-indigo-50 to-purple-50 p-8 font-sans">
      {/* Decorative Header */}
      <div className="relative mb-8">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20"></div>
        <div className="absolute top-4 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20"></div>

        <div className="relative z-10 text-center pt-8">
          {(data.personalInfo.photo || true) && (
            <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={data.personalInfo.photo || "/placeholder.svg?height=112&width=112"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {sampleData.personalInfo.fullName}
          </h1>
          <div className="flex justify-center items-center gap-6 text-gray-600 text-sm">
            <span>{sampleData.personalInfo.email}</span>
            <span>•</span>
            <span>{sampleData.personalInfo.phone}</span>
            <span>•</span>
            <span>{sampleData.personalInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Summary in decorative box */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border-l-4 border-indigo-500">
        <h2 className="text-xl font-bold text-indigo-600 mb-3">TENTANG SAYA</h2>
        <p className="text-gray-700 leading-relaxed italic">{sampleData.personalInfo.summary}</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column - Experience */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center">
            <div className="w-8 h-8 bg-indigo-500 rounded-full mr-3"></div>
            PENGALAMAN KERJA
          </h2>

          <div className="space-y-6">
            {sampleData.experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                      <div className="text-indigo-600 font-semibold">
                        {exp.company} • {exp.location}
                      </div>
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                      {exp.startDate} - {exp.current ? "Sekarang" : exp.endDate}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                </div>
                {index < sampleData.experience.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Skills */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center">
            <div className="w-8 h-8 bg-purple-500 rounded-full mr-3"></div>
            KEAHLIAN
          </h2>

          <div className="space-y-4">
            {sampleData.skills.map((skill) => (
              <div key={skill.id} className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-8 space-y-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 text-white text-center">
              <h3 className="font-bold mb-2">Portfolio</h3>
              <p className="text-sm opacity-90">behance.com/sarahjohnson</p>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-4 text-white text-center">
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-sm opacity-90">linkedin.com/in/sarahjohnson</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer decoration */}
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
