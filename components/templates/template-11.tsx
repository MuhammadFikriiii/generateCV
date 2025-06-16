"use client"

import type { CVData } from "@/app/editor/page"

interface Template11Props {
  data: CVData
}

export function Template11({ data }: Template11Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "muhammad.fikri@gmail.com",
      phone: data.personalInfo.phone || "+62 999-CYBER-01",
      address: data.personalInfo.address || "Neo Tokyo, Cyber City",
      summary:
        data.personalInfo.summary ||
        "Cybersecurity Expert specializing in blockchain security and AI-powered threat detection. Living in the future of digital protection.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Lead Cybersecurity Engineer",
              company: "NeonTech Corp",
              location: "Cyber City",
              startDate: "2023-01",
              endDate: "",
              current: true,
              description:
                "Protecting digital assets in the metaverse using quantum encryption and AI threat detection.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "Blockchain Security", level: 5 },
            { id: "2", name: "AI/ML", level: 5 },
            { id: "3", name: "Quantum Computing", level: 4 },
            { id: "4", name: "Ethical Hacking", level: 5 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-cyan-500/30"></div>
          ))}
        </div>
      </div>

      {/* Glitch effects */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>

      <div className="relative z-10 p-8">
        {/* Header with neon glow */}
        <div className="border border-cyan-400 p-6 mb-8 bg-black/80 backdrop-blur-sm">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2 text-cyan-400 drop-shadow-[0_0_10px_#00ffff]">
              {sampleData.personalInfo.fullName}
            </h1>
            <div className="text-pink-400 text-lg mb-4 drop-shadow-[0_0_5px_#ff00ff]">Full Stack Developer</div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-green-400">📧 {sampleData.personalInfo.email}</div>
              <div className="text-green-400">📱 {sampleData.personalInfo.phone}</div>
              <div className="text-green-400">🌐 {sampleData.personalInfo.address}</div>
            </div>
          </div>
        </div>

        {/* Matrix-style summary */}
        <div className="border border-green-400 p-4 mb-6 bg-black/80">
          <h2 className="text-xl font-bold text-green-400 mb-3 drop-shadow-[0_0_5px_#00ff00]">
            {">"} SYSTEM.PROFILE.LOAD()
          </h2>
          <p className="text-green-300 leading-relaxed font-mono text-sm">{sampleData.personalInfo.summary}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Experience */}
          <div className="border border-cyan-400 p-4 bg-black/80">
            <h2 className="text-xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_5px_#00ffff]">{">"} EXPERIENCE.EXE</h2>
            {sampleData.experience.map((exp) => (
              <div key={exp.id} className="mb-4 p-3 border border-gray-700 bg-gray-900/50">
                <div className="text-pink-400 font-bold">{exp.position}</div>
                <div className="text-yellow-400">{exp.company}</div>
                <div className="text-gray-400 text-sm">
                  {exp.startDate} - {exp.current ? "ACTIVE" : exp.endDate}
                </div>
                <div className="text-green-300 text-sm mt-2">{exp.description}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="border border-pink-400 p-4 bg-black/80">
            <h2 className="text-xl font-bold text-pink-400 mb-4 drop-shadow-[0_0_5px_#ff00ff]">{">"} SKILLS.MATRIX</h2>
            {sampleData.skills.map((skill) => (
              <div key={skill.id} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-yellow-400">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-800 h-2 border border-gray-600">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="text-green-400 text-sm animate-pulse">
            {">"} CONNECTION_ESTABLISHED • READY_FOR_HIRE • STATUS: ONLINE
          </div>
        </div>
      </div>
    </div>
  )
}
