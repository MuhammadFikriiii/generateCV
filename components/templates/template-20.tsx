"use client"

import type { CVData } from "@/app/editor/page"

interface Template20Props {
  data: CVData
}

export function Template20({ data }: Template20Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "explorer@galaxy.space",
      phone: data.personalInfo.phone || "+62 SPACE-STAR-1",
      address: data.personalInfo.address || "Milky Way, Solar System",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer with 5+ years of experience in building scalable web applications. Passionate about clean code and user-centered design.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Senior Software Engineer",
              company: "Tech Solutions Inc.",
              location: "Jakarta, Indonesia",
              startDate: "2020-01",
              endDate: "",
              current: true,
              description:
                "Developed and maintained key features for a high-traffic e-commerce platform. Led a team of 5 engineers and implemented agile development practices.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "JavaScript", level: 5 },
            { id: "2", name: "React", level: 5 },
            { id: "3", name: "Node.js", level: 4 },
            { id: "4", name: "SQL", level: 5 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans relative overflow-hidden">
      {/* Space background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}

        {/* Planets */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-60"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Cosmic header */}
        <div className="bg-gradient-to-r from-purple-600/80 to-indigo-600/80 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-purple-400/30">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {sampleData.personalInfo.fullName}
            </h1>
            <div className="text-xl text-cyan-300 mb-4">🚀 Full Stack Developer</div>
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-300">
              <div>📧 {sampleData.personalInfo.email}</div>
              <div>📱 {sampleData.personalInfo.phone}</div>
              <div>🌌 {sampleData.personalInfo.address}</div>
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
            <span className="text-2xl mr-2">🌟</span>
            Cosmic Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">{sampleData.personalInfo.summary}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Experience */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
            <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
              <span className="text-2xl mr-2">🚀</span>
              Space Missions
            </h2>
            {sampleData.experience.map((exp) => (
              <div key={exp.id} className="mb-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/20">
                <h3 className="font-bold text-cyan-300">{exp.position}</h3>
                <div className="text-purple-300 font-medium">{exp.company}</div>
                <div className="text-sm text-gray-400 mb-2">
                  {exp.startDate} - {exp.current ? "Ongoing Mission" : exp.endDate}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
            <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
              <span className="text-2xl mr-2">⭐</span>
              Cosmic Abilities
            </h2>
            {sampleData.skills.map((skill, index) => (
              <div key={skill.id} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-cyan-300">{skill.name}</span>
                  <span className="text-sm text-purple-300">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      index % 3 === 0
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                        : index % 3 === 1
                          ? "bg-gradient-to-r from-purple-400 to-pink-500"
                          : "bg-gradient-to-r from-indigo-400 to-cyan-500"
                    }`}
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Space achievements */}
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 mt-8 border border-indigo-400/30">
          <h2 className="text-xl font-bold text-indigo-400 mb-4 flex items-center">
            <span className="text-2xl mr-2">🌌</span>
            Galactic Achievements
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-indigo-900/50 rounded-lg p-4 text-center border border-indigo-500/20">
              <div className="text-2xl font-bold text-cyan-400">15+</div>
              <div className="text-sm text-gray-400">Exoplanets Discovered</div>
            </div>
            <div className="bg-purple-900/50 rounded-lg p-4 text-center border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-gray-400">Research Papers</div>
            </div>
            <div className="bg-cyan-900/50 rounded-lg p-4 text-center border border-cyan-500/20">
              <div className="text-2xl font-bold text-cyan-400">12</div>
              <div className="text-sm text-gray-400">Space Missions</div>
            </div>
            <div className="bg-indigo-900/50 rounded-lg p-4 text-center border border-indigo-500/20">
              <div className="text-2xl font-bold text-indigo-400">∞</div>
              <div className="text-sm text-gray-400">Cosmic Wonder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
