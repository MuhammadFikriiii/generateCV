"use client"

import type { CVData } from "@/app/editor/page"

interface Template19Props {
  data: CVData
}

export function Template19({ data }: Template19Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "guardian@nature.earth",
      phone: data.personalInfo.phone || "+62 GREEN-EARTH-1",
      address: data.personalInfo.address || "Green Valley, Indonesia",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer with expertise in creating scalable web applications. Passionate about clean code and user-centered design.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Full Stack Developer",
              company: "Tech Solutions Inc.",
              location: "Jakarta",
              startDate: "2022-01",
              endDate: "",
              current: true,
              description:
                "Developed and maintained web applications using React, Node.js, and PostgreSQL. Implemented RESTful APIs and integrated third-party services.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "Environmental Research", level: 5 },
            { id: "2", name: "Conservation Biology", level: 5 },
            { id: "3", name: "Sustainable Development", level: 4 },
            { id: "4", name: "Renewable Energy", level: 4 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-green-50 via-emerald-25 to-teal-50 font-sans relative overflow-hidden">
      {/* Nature background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 text-6xl text-green-400">🌿</div>
        <div className="absolute top-20 left-8 text-4xl text-emerald-400">🌱</div>
        <div className="absolute bottom-20 right-12 text-5xl text-teal-400">🌳</div>
        <div className="absolute bottom-8 left-16 text-3xl text-green-500">🍃</div>
        <div className="absolute top-1/2 right-1/4 text-4xl text-emerald-500">🌺</div>
      </div>

      <div className="relative z-10 p-8">
        {/* Nature-inspired header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-3xl mb-8 shadow-xl">
          <div className="flex items-center gap-6">
            {(data.personalInfo.photo || true) && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={data.personalInfo.photo || "/placeholder.svg?height=128&width=128"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{sampleData.personalInfo.fullName}</h1>
              <div className="text-xl opacity-90 mb-4">🌍 Environmental Scientist</div>
              <div className="grid grid-cols-3 gap-4 text-sm opacity-90">
                <div>📧 {sampleData.personalInfo.email}</div>
                <div>📱 {sampleData.personalInfo.phone}</div>
                <div>📍 {sampleData.personalInfo.address}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border-l-4 border-green-500 shadow-lg">
          <h2 className="text-xl font-bold text-green-700 mb-3 flex items-center">
            <span className="text-2xl mr-2">🌱</span>
            Mission Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">{sampleData.personalInfo.summary}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Experience */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">🌳</span>
              Conservation Work
            </h2>
            {sampleData.experience.map((exp) => (
              <div key={exp.id} className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-800">{exp.position}</h3>
                <div className="text-green-600 font-medium">{exp.company}</div>
                <div className="text-sm text-gray-600 mb-2">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">🌿</span>
              Expertise
            </h2>
            {sampleData.skills.map((skill, index) => (
              <div key={skill.id} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-green-800">{skill.name}</span>
                  <span className="text-sm text-green-600">{skill.level}/5</span>
                </div>
                <div className="w-full bg-green-100 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      index % 3 === 0
                        ? "bg-gradient-to-r from-green-400 to-emerald-500"
                        : index % 3 === 1
                          ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                          : "bg-gradient-to-r from-teal-400 to-green-500"
                    }`}
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact metrics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mt-8 shadow-lg">
          <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center">
            <span className="text-2xl mr-2">🌍</span>
            Environmental Impact
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-green-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-700">10K+</div>
              <div className="text-sm text-green-600">Hectares Protected</div>
            </div>
            <div className="bg-emerald-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-emerald-700">50+</div>
              <div className="text-sm text-emerald-600">Species Saved</div>
            </div>
            <div className="bg-teal-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-teal-700">25</div>
              <div className="text-sm text-teal-600">Research Papers</div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-700">100%</div>
              <div className="text-sm text-green-600">Renewable Energy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
