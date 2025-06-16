"use client"

import type { CVData } from "@/app/editor/page"

interface Template14Props {
  data: CVData
}

export function Template14({ data }: Template14Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "maya.sari@social.com",
      phone: data.personalInfo.phone || "+62 888-INSTA-01",
      address: data.personalInfo.address || "Bali, Indonesia",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer with 3+ years of experience building scalable web applications. Passionate about clean code and user-centered design.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Software Engineer",
              company: "Tech Solutions Inc.",
              location: "Jakarta",
              startDate: "2021-01",
              endDate: "",
              current: true,
              description:
                "Developed and maintained key features for a high-traffic e-commerce platform. Implemented RESTful APIs and integrated with third-party services.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "JavaScript", level: 5 },
            { id: "2", name: "React", level: 5 },
            { id: "3", name: "Node.js", level: 4 },
            { id: "4", name: "SQL", level: 4 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 font-sans relative overflow-hidden">
      {/* Instagram-style decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15"></div>

      <div className="relative z-10 p-8">
        {/* Instagram-style header */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-6 border border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            {(data.personalInfo.photo || true) && (
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gradient-to-r from-pink-400 to-purple-500 p-1 bg-gradient-to-r from-pink-400 to-purple-500">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={data.personalInfo.photo || "/placeholder.svg?height=80&width=80"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{sampleData.personalInfo.fullName}</h1>
              <div className="text-gray-600 mb-2">Full Stack Developer ✨</div>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>📧 {sampleData.personalInfo.email}</span>
                <span>📱 {sampleData.personalInfo.phone}</span>
                <span>📍 {sampleData.personalInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Instagram-style stats */}
          <div className="flex justify-around bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">3+</div>
              <div className="text-sm text-gray-600">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
          </div>
        </div>

        {/* Bio section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💫</span>
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed">{sampleData.personalInfo.summary}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Experience */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">🚀</span>
              Experience
            </h2>
            {sampleData.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <h3 className="font-bold text-gray-900">{exp.position}</h3>
                <div className="text-purple-600 font-medium">{exp.company}</div>
                <div className="text-sm text-gray-500 mb-2">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">⭐</span>
              Skills
            </h2>
            {sampleData.skills.map((skill, index) => (
              <div key={skill.id} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      index % 3 === 0
                        ? "bg-gradient-to-r from-pink-400 to-purple-500"
                        : index % 3 === 1
                          ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                          : "bg-gradient-to-r from-yellow-400 to-orange-400"
                    }`}
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mt-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">📱</span>
            Find Me Online
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-3 text-white text-center">
              <div className="font-bold">Instagram</div>
              <div className="text-sm opacity-90">@mayasari</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3 text-white text-center">
              <div className="font-bold">LinkedIn</div>
              <div className="text-sm opacity-90">Muhammad Fikri</div>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-3 text-white text-center">
              <div className="font-bold">GitHub</div>
              <div className="text-sm opacity-90">mfikri</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-3 text-white text-center">
              <div className="font-bold">Website</div>
              <div className="text-sm opacity-90">mfikri.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
