"use client"

import type { CVData } from "@/app/editor/page"

interface Template18Props {
  data: CVData
}

export function Template18({ data }: Template18Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "jane@minimal.design",
      phone: data.personalInfo.phone || "+62 000-CLEAN-01",
      address: data.personalInfo.address || "Jakarta, Indonesia",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer with a passion for creating efficient and scalable web applications. Experienced in both front-end and back-end technologies, with a focus on delivering high-quality solutions.",
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
                "Developing and maintaining web applications using modern technologies such as React, Node.js, and PostgreSQL. Collaborating with cross-functional teams to deliver high-quality software solutions.",
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
    <div className="w-[210mm] min-h-[297mm] bg-white font-light text-sm leading-loose">
      <div className="p-16">
        {/* Minimal header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-thin text-gray-900 mb-4 tracking-widest">{sampleData.personalInfo.fullName}</h1>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <div className="text-gray-600 space-y-2">
            <div>{sampleData.personalInfo.email}</div>
            <div>{sampleData.personalInfo.phone}</div>
            <div>{sampleData.personalInfo.address}</div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed text-lg font-light">{sampleData.personalInfo.summary}</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-thin text-gray-900 mb-8 text-center tracking-wider">EXPERIENCE</h2>
          <div className="max-w-3xl mx-auto">
            {sampleData.experience.map((exp) => (
              <div key={exp.id} className="mb-8 text-center">
                <h3 className="text-xl font-light text-gray-900 mb-2">{exp.position}</h3>
                <div className="text-gray-600 mb-2">
                  {exp.company} • {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
                <div className="w-8 h-px bg-gray-300 mx-auto mb-4"></div>
                <p className="text-gray-700 leading-relaxed max-w-xl mx-auto">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-thin text-gray-900 mb-8 text-center tracking-wider">EXPERTISE</h2>
          <div className="max-w-md mx-auto">
            {sampleData.skills.map((skill) => (
              <div key={skill.id} className="mb-6 text-center">
                <div className="text-gray-800 font-light mb-2">{skill.name}</div>
                <div className="flex justify-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className={`w-2 h-2 mx-1 ${i < skill.level ? "bg-gray-800" : "bg-gray-300"}`}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal footer */}
        <div className="text-center">
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}
