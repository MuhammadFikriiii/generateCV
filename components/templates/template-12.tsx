"use client"

import type { CVData } from "@/app/editor/page"

interface Template12Props {
  data: CVData
}

export function Template12({ data }: Template12Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "muhammad.fikri@example.com",
      phone: data.personalInfo.phone || "+62 812-3456-7890",
      address: data.personalInfo.address || "Jakarta, Indonesia",
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
              position: "Senior Full Stack Developer",
              company: "Tech Solutions Inc.",
              location: "Jakarta",
              startDate: "2022-01",
              endDate: "",
              current: true,
              description:
                "Developing and maintaining web applications using React, Node.js, and PostgreSQL. Leading a team of junior developers and contributing to architectural decisions.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "React", level: 5 },
            { id: "2", name: "Node.js", level: 4 },
            { id: "3", name: "PostgreSQL", level: 4 },
            { id: "4", name: "JavaScript", level: 5 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-amber-50 to-yellow-50 font-serif relative">
      {/* Gold decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>

      {/* Ornamental corners */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-amber-500"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-amber-500"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-amber-500"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-amber-500"></div>

      <div className="p-12">
        {/* Elegant header */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200 to-transparent h-px top-1/2"></div>
          <div className="relative bg-amber-50 px-8">
            <h1 className="text-5xl font-bold text-amber-900 mb-2 tracking-wider">
              {sampleData.personalInfo.fullName}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-4"></div>
            <div className="text-xl text-amber-800 italic">Full Stack Developer</div>
          </div>
        </div>

        {/* Contact info in elegant style */}
        <div className="flex justify-center items-center gap-8 mb-12 text-amber-800">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span>{sampleData.personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span>{sampleData.personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span>{sampleData.personalInfo.address}</span>
          </div>
        </div>

        {/* Executive summary */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-amber-900 inline-block px-6 py-2 border-t-2 border-b-2 border-amber-500">
              EXECUTIVE SUMMARY
            </h2>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-lg border border-amber-200">
            <p className="text-amber-900 leading-relaxed text-lg italic text-center">
              "{sampleData.personalInfo.summary}"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-amber-900 inline-block px-6 py-2 border-t-2 border-b-2 border-amber-500">
                EXPERIENCE
              </h2>
            </div>
            {sampleData.experience.map((exp) => (
              <div key={exp.id} className="bg-white/80 p-6 rounded-lg shadow-lg border border-amber-200 mb-4">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{exp.position}</h3>
                <div className="text-amber-700 font-semibold mb-1">{exp.company}</div>
                <div className="text-amber-600 text-sm mb-3">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
                <p className="text-amber-800 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-amber-900 inline-block px-6 py-2 border-t-2 border-b-2 border-amber-500">
                EXPERTISE
              </h2>
            </div>
            {sampleData.skills.map((skill) => (
              <div key={skill.id} className="bg-white/80 p-4 rounded-lg shadow-lg border border-amber-200 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-amber-900">{skill.name}</span>
                  <span className="text-amber-700">Expert</span>
                </div>
                <div className="w-full bg-amber-100 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-yellow-500 h-3 rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}

            {/* Awards section */}
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-lg shadow-lg border border-amber-300 mt-8">
              <h3 className="text-lg font-bold text-amber-900 mb-4 text-center">ACHIEVEMENTS</h3>
              <div className="space-y-2 text-amber-800 text-sm">
                <div>🏆 Employee of the Month - June 2023</div>
                <div>🏆 Hackathon Winner - 2022</div>
                <div>🏆 Contributor of the Year - 2021</div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant footer */}
        <div className="mt-12 text-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4"></div>
          <p className="text-amber-700 italic">Excellence • Leadership • Innovation</p>
        </div>
      </div>
    </div>
  )
}
