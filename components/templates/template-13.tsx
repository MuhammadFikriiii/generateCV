"use client"

import type { CVData } from "@/app/editor/page"

interface Template13Props {
  data: CVData
}

export function Template13({ data }: Template13Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "j.anderson@news.com",
      phone: data.personalInfo.phone || "+62 817-NEWS-001",
      address: data.personalInfo.address || "Jakarta, Indonesia",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer with 5+ years experience in web development and cloud infrastructure. Passionate about creating scalable and maintainable applications.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Senior Software Engineer",
              company: "Tech Solutions Inc.",
              location: "Jakarta",
              startDate: "2020-01",
              endDate: "",
              current: true,
              description:
                "Developed and maintained web applications using React, Node.js, and AWS. Led a team of 5 engineers and delivered multiple projects on time and within budget.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "React", level: 5 },
            { id: "2", name: "Node.js", level: 4 },
            { id: "3", name: "AWS", level: 5 },
            { id: "4", name: "SQL", level: 4 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white font-serif text-sm leading-relaxed">
      {/* Newspaper Header */}
      <div className="border-t-4 border-b-4 border-double border-black py-4 mb-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-1 tracking-wider font-serif">
            {sampleData.personalInfo.fullName}
          </h1>
          <div className="text-lg italic text-gray-700">CURRICULUM VITAE</div>
          <div className="flex justify-center items-center gap-4 mt-2 text-sm">
            <span>{sampleData.personalInfo.email}</span>
            <span>|</span>
            <span>{sampleData.personalInfo.phone}</span>
            <span>|</span>
            <span>{sampleData.personalInfo.address}</span>
          </div>
        </div>
      </div>

      <div className="px-8 columns-2 gap-8">
        {/* Left Column */}
        <div className="break-inside-avoid mb-6">
          <h2 className="text-xl font-bold text-black mb-3 border-b-2 border-black pb-1">PROFILE</h2>
          <p className="text-gray-800 leading-relaxed text-justify">{sampleData.personalInfo.summary}</p>
        </div>

        <div className="break-inside-avoid mb-6">
          <h2 className="text-xl font-bold text-black mb-3 border-b-2 border-black pb-1">EXPERIENCE</h2>
          {sampleData.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <h3 className="font-bold text-black">{exp.position}</h3>
              <div className="italic text-gray-700">
                {exp.company}, {exp.location}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
              </div>
              <p className="text-gray-800 text-sm leading-relaxed text-justify">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="break-inside-avoid mb-6">
          <h2 className="text-xl font-bold text-black mb-3 border-b-2 border-black pb-1">EXPERTISE</h2>
          {sampleData.skills.map((skill) => (
            <div key={skill.id} className="mb-2">
              <div className="flex justify-between">
                <span className="font-semibold text-black">{skill.name}</span>
                <span className="text-sm text-gray-600">
                  {"★".repeat(skill.level)}
                  {"☆".repeat(5 - skill.level)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="break-inside-avoid">
          <h2 className="text-xl font-bold text-black mb-3 border-b-2 border-black pb-1">AWARDS</h2>
          <div className="space-y-2 text-sm">
            <div>• Indonesian Journalism Award 2023</div>
            <div>• Best Investigative Report 2022</div>
            <div>• Press Freedom Advocate 2021</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-400 text-center text-xs text-gray-500">
        <p>
          Curriculum Vitae - {sampleData.personalInfo.fullName} - {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}
