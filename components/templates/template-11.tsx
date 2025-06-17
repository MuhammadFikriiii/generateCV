"use client"

import type { CVData } from "@/app/editor/page"

interface Template11Props {
  data: CVData
}

export function Template11({ data }: Template11Props) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", { year: "numeric", month: "long" })
  }

  const getLanguageLevel = (level: string) => {
    const levels = {
      beginner: "Pemula",
      elementary: "Dasar",
      intermediate: "Menengah",
      advanced: "Mahir",
      native: "Native",
    }
    return levels[level as keyof typeof levels] || level
  }

  return (
    <div className="w-[210mm] h-[297mm] bg-white font-sans text-xs overflow-hidden p-4">
      {/* Minimalist header */}
      <div className="text-center mb-6 pb-4 border-b-2 border-gray-900">
        <h1 className="text-3xl font-light text-gray-900 mb-2 tracking-widest">
          {data.personalInfo.fullName || "MUHAMMAD FIKRI"}
        </h1>
        <div className="text-sm text-gray-600 mb-3">Full Stack Developer</div>

        <div className="flex justify-center items-center gap-6 text-gray-600 text-xs">
          <span>{data.personalInfo.email || "muhammad.fikri@gmail.com"}</span>
          <span>•</span>
          <span>{data.personalInfo.phone || "+62 812-3456-7890"}</span>
          <span>•</span>
          <span>{data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed text-center italic text-sm">
          {data.personalInfo.summary ||
            "Full Stack Developer dengan pengalaman 5+ tahun dalam membangun aplikasi web modern. Passionate tentang clean code dan user experience."}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Experience */}
        <div className="col-span-2">
          <h2 className="text-lg font-light text-gray-900 mb-4 tracking-wide">EXPERIENCE</h2>
          <div className="space-y-4">
            {(data.experience.length > 0
              ? data.experience
              : [
                  {
                    id: "1",
                    position: "Senior Full Stack Developer",
                    company: "PT. Digital Innovation",
                    location: "Jakarta",
                    startDate: "2022-01-01",
                    endDate: "",
                    current: true,
                    description:
                      "Led development of microservices architecture serving 100k+ users. Implemented CI/CD pipelines and mentored junior developers.",
                  },
                ]
            ).map((exp) => (
              <div key={exp.id} className="relative pl-6">
                <div className="absolute left-0 top-0 w-2 h-2 bg-gray-900 rounded-full"></div>
                <div className="absolute left-0.5 top-2 w-0.5 h-full bg-gray-300"></div>

                <div className="mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{exp.position}</h3>
                  <div className="text-gray-600 text-xs">
                    {exp.company} • {exp.location}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </div>
                </div>
                <p className="text-gray-700 text-xs leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <h2 className="text-lg font-light text-gray-900 mb-4 mt-6 tracking-wide">EDUCATION</h2>
          <div className="space-y-3">
            {(data.education.length > 0
              ? data.education
              : [
                  {
                    id: "1",
                    degree: "Bachelor of Computer Science",
                    institution: "Institut Teknologi Bandung",
                    location: "Bandung",
                    gpa: "3.75",
                    year: "2017",
                  },
                ]
            ).map((edu) => (
              <div key={edu.id} className="relative pl-6">
                <div className="absolute left-0 top-0 w-2 h-2 bg-gray-900 rounded-full"></div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{edu.degree}</h3>
                  <div className="text-gray-600 text-xs">
                    {edu.institution} • {edu.location}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {edu.year} {edu.gpa && `• GPA: ${edu.gpa}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Skills */}
          <h2 className="text-lg font-light text-gray-900 mb-4 tracking-wide">SKILLS</h2>
          <div className="space-y-3">
            {(data.skills.length > 0
              ? data.skills
              : [
                  { id: "1", name: "JavaScript", level: 5 },
                  { id: "2", name: "React", level: 5 },
                  { id: "3", name: "Node.js", level: 4 },
                  { id: "4", name: "Python", level: 4 },
                ]
            ).map((skill) => (
              <div key={skill.id}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-900 text-xs font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-xs">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: `${(skill.level / 5) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <h2 className="text-lg font-light text-gray-900 mb-4 mt-6 tracking-wide">LANGUAGES</h2>
          <div className="space-y-2">
            {(data.languages.length > 0
              ? data.languages
              : [
                  { id: "1", name: "Bahasa Indonesia", level: "native" },
                  { id: "2", name: "English", level: "advanced" },
                ]
            ).map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span className="text-gray-900 text-xs">{lang.name}</span>
                <span className="text-gray-600 text-xs">{getLanguageLevel(lang.level)}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <h2 className="text-lg font-light text-gray-900 mb-4 mt-6 tracking-wide">CERTIFICATIONS</h2>
          <div className="space-y-2">
            {(data.certifications.length > 0
              ? data.certifications
              : [
                  {
                    id: "1",
                    name: "AWS Solutions Architect",
                    issuer: "Amazon Web Services",
                    date: "2023-05-15",
                  },
                ]
            ).map((cert) => (
              <div key={cert.id}>
                <h3 className="font-medium text-gray-900 text-xs">{cert.name}</h3>
                <div className="text-gray-600 text-xs">{cert.issuer}</div>
                <div className="text-gray-500 text-xs">{formatDate(cert.date)}</div>
              </div>
            ))}
          </div>

          {/* Hobbies */}
          <h2 className="text-lg font-light text-gray-900 mb-4 mt-6 tracking-wide">INTERESTS</h2>
          <div className="space-y-1">
            {(data.hobbies.length > 0 ? data.hobbies : ["Coding", "Photography", "Traveling"]).map((hobby, index) => (
              <div key={index} className="text-gray-700 text-xs">
                • {hobby}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
