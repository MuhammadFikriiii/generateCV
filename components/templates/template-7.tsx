"use client"

import type { CVData } from "@/app/editor/page"

interface Template7Props {
  data: CVData
}

export function Template7({ data }: Template7Props) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", { year: "numeric", month: "long" })
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gray-900 text-white font-mono text-sm overflow-hidden">
      {/* Terminal-style header */}
      <div className="bg-black p-4 border-b-2 border-green-400">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-green-400 text-sm">terminal@cv:~$</span>
        </div>

        <div className="space-y-2 text-green-400 text-sm font-mono">
          <div>$ whoami</div>
          <div className="text-white text-xl font-bold">{data.personalInfo.fullName || "MUHAMMAD FIKRI"}</div>
          <div>$ cat contact.txt</div>
          <div className="text-gray-300 text-sm">
            📧 {data.personalInfo.email || "muhammad.fikri@gmail.com"}
            <br />📱 {data.personalInfo.phone || "+62 812-3456-7890"}
            <br />📍 {data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* About section */}
        <div className="mb-6">
          <div className="text-green-400 mb-2 text-sm">$ cat about.md</div>
          <div className="bg-gray-800 rounded-lg p-3 border-l-4 border-green-400">
            <p className="text-gray-300 leading-relaxed text-sm">
              {data.personalInfo.summary ||
                "Full Stack Developer dengan expertise dalam React, Node.js, dan cloud technologies. Berpengalaman membangun aplikasi scalable untuk startup dan enterprise."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Experience */}
          <div>
            <div className="text-green-400 mb-3 text-base">$ ls experience/</div>
            <div className="space-y-3">
              {(data.experience.length > 0
                ? data.experience
                : [
                    {
                      id: "1",
                      position: "Lead Full Stack Developer",
                      company: "PT. Inovasi Digital",
                      location: "Bandung",
                      startDate: "2022-01-01",
                      endDate: "",
                      current: true,
                      description:
                        "Memimpin tim development untuk platform e-commerce. Mengimplementasikan microservices architecture dan meningkatkan performance aplikasi 60%.",
                    },
                  ]
              ).map((exp) => (
                <div key={exp.id} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                  <div className="text-yellow-400 font-bold text-sm">{exp.position}</div>
                  <div className="text-blue-400 text-sm">
                    {exp.company} • {exp.location}
                  </div>
                  <div className="text-gray-400 text-xs mb-1">
                    {formatDate(exp.startDate)} - {exp.current ? "present" : formatDate(exp.endDate)}
                  </div>
                  <div className="text-gray-300 text-xs">{exp.description}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="text-green-400 mb-3 mt-6 text-base">$ ls education/</div>
            <div className="space-y-2">
              {(data.education.length > 0
                ? data.education
                : [
                    {
                      id: "1",
                      degree: "S1 Teknik Informatika",
                      institution: "Institut Teknologi Bandung",
                      location: "Bandung",
                      gpa: "3.75",
                      year: "2017",
                    },
                  ]
              ).map((edu) => (
                <div key={edu.id} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                  <div className="text-yellow-400 font-bold text-sm">{edu.degree}</div>
                  <div className="text-blue-400 text-sm">
                    {edu.institution} • {edu.location}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {edu.year} {edu.gpa && `• IPK: ${edu.gpa}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="text-green-400 mb-3 text-base">$ cat skills.json</div>
            <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
              <div className="text-gray-300 text-sm">
                {"{"}
                <div className="ml-4 space-y-1">
                  {(data.skills.length > 0
                    ? data.skills
                    : [
                        { id: "1", name: "React.js", level: 5 },
                        { id: "2", name: "Node.js", level: 4 },
                        { id: "3", name: "TypeScript", level: 4 },
                        { id: "4", name: "Python", level: 4 },
                      ]
                  ).map((skill, index) => (
                    <div key={skill.id} className="text-xs">
                      <span className="text-blue-400">"{skill.name}"</span>:
                      <span className="text-yellow-400"> {skill.level}/5</span>
                      {index < (data.skills.length > 0 ? data.skills.length : 4) - 1 && ","}
                    </div>
                  ))}
                </div>
                {"}"}
              </div>
            </div>

            {/* Languages */}
            <div className="mt-4">
              <div className="text-green-400 mb-2 text-sm">$ cat languages.json</div>
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700 text-xs">
                {(data.languages.length > 0
                  ? data.languages
                  : [
                      { id: "1", name: "Bahasa Indonesia", level: "native" },
                      { id: "2", name: "English", level: "advanced" },
                    ]
                ).map((lang, index) => (
                  <div key={lang.id}>
                    <span className="text-blue-400">"{lang.name}"</span>:
                    <span className="text-yellow-400"> "{lang.level}"</span>
                    {index < (data.languages.length > 0 ? data.languages.length : 2) - 1 && ","}
                  </div>
                ))}
              </div>
            </div>

            {/* Code snippet */}
            <div className="mt-4">
              <div className="text-green-400 mb-2 text-sm">$ cat hello.js</div>
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700 text-xs">
                <div className="text-purple-400">function</div>
                <span className="text-yellow-400"> introduce</span>
                <span className="text-white">() {"{"}</span>
                <div className="ml-4">
                  <span className="text-purple-400">return</span>
                  <span className="text-green-300"> "Hello! I'm a passionate developer"</span>
                  <span className="text-white">;</span>
                </div>
                <span className="text-white">{"}"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <div className="text-green-400 text-sm">$ echo "Thanks for reviewing my CV!"</div>
          <div className="text-gray-400 text-sm mt-1">Process completed successfully ✓</div>
        </div>
      </div>
    </div>
  )
}
