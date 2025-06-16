"use client"

import type { CVData } from "@/app/editor/page"

interface Template16Props {
  data: CVData
}

export function Template16({ data }: Template16Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "alex@glass.design",
      phone: data.personalInfo.phone || "+62 888-GLASS-01",
      address: data.personalInfo.address || "Jakarta, Indonesia",
      summary:
        data.personalInfo.summary ||
        "A passionate Full Stack Developer with experience in building scalable web applications. Proficient in both front-end and back-end technologies, with a focus on creating efficient and user-friendly solutions.",
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
                "Developed and maintained web applications using React, Node.js, and PostgreSQL. Implemented new features, optimized performance, and ensured code quality through testing and code reviews.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "JavaScript", level: 5 },
            { id: "2", name: "React", level: 5 },
            { id: "3", name: "Node.js", level: 4 },
            { id: "4", name: "PostgreSQL", level: 4 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 font-sans relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 backdrop-blur-md rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/30 backdrop-blur-md rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-200/25 backdrop-blur-md rounded-full transform -translate-x-16 -translate-y-16"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Glassmorphism header */}
        <div className="bg-white/25 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 shadow-xl">
          <div className="flex items-center gap-6">
            {(data.personalInfo.photo || true) && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-md">
                <img
                  src={data.personalInfo.photo || "/placeholder.svg?height=128&width=128"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-light text-gray-800 mb-2">{sampleData.personalInfo.fullName}</h1>
              <div className="text-lg text-gray-600 mb-4">Full Stack Developer</div>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
                <div>📧 {sampleData.personalInfo.email}</div>
                <div>📱 {sampleData.personalInfo.phone}</div>
                <div>📍 {sampleData.personalInfo.address}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">{sampleData.personalInfo.summary}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Experience */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Experience</h2>
            {sampleData.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <div className="text-blue-600 font-medium">{exp.company}</div>
                <div className="text-sm text-gray-600 mb-2">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
            {sampleData.skills.map((skill) => (
              <div key={skill.id} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}/5</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2 backdrop-blur-sm">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio section */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mt-8 border border-white/20 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Portfolio Highlights</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">30+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-pink-600">5+</div>
              <div className="text-sm text-gray-600">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
