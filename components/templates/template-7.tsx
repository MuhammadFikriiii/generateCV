"use client"

import type { CVData } from "@/app/editor/page"

interface Template7Props {
  data: CVData
}

export function Template7({ data }: Template7Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "muhammad.fikri@email.com",
      phone: data.personalInfo.phone || "+62 812-3456-7890",
      address: data.personalInfo.address || "Jakarta, Indonesia",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer dengan expertise dalam React, Node.js, dan cloud technologies. Berpengalaman membangun aplikasi scalable untuk startup dan enterprise.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Lead Full Stack Developer",
              company: "TechStart Indonesia",
              location: "Surabaya",
              startDate: "2023-01",
              endDate: "",
              current: true,
              description:
                "Memimpin tim development untuk platform e-commerce. Mengimplementasikan microservices architecture dan meningkatkan performance aplikasi 60%.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "React.js", level: 5 },
            { id: "2", name: "Node.js", level: 5 },
            { id: "3", name: "TypeScript", level: 4 },
            { id: "4", name: "AWS", level: 4 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gray-900 text-white font-mono">
      {/* Terminal-style header */}
      <div className="bg-black p-6 border-b-2 border-green-400">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-green-400 text-sm">terminal@cv:~$</span>
        </div>

        <div className="space-y-2 text-green-400 text-sm font-mono">
          <div>$ whoami</div>
          <div className="text-white text-2xl font-bold">{sampleData.personalInfo.fullName}</div>
          <div>$ cat contact.txt</div>
          <div className="text-gray-300">
            📧 {sampleData.personalInfo.email}
            <br />📱 {sampleData.personalInfo.phone}
            <br />📍 {sampleData.personalInfo.address}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* About section */}
        <div className="mb-8">
          <div className="text-green-400 mb-2">$ cat about.md</div>
          <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-green-400">
            <p className="text-gray-300 leading-relaxed">{sampleData.personalInfo.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <div className="text-green-400 mb-4 text-lg">$ ls experience/</div>
            <div className="space-y-4">
              {sampleData.experience.map((exp) => (
                <div key={exp.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="text-yellow-400 font-bold">{exp.position}</div>
                  <div className="text-blue-400">
                    {exp.company} • {exp.location}
                  </div>
                  <div className="text-gray-400 text-sm mb-2">
                    {exp.startDate} - {exp.current ? "present" : exp.endDate}
                  </div>
                  <div className="text-gray-300 text-sm">{exp.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="text-green-400 mb-4 text-lg">$ cat skills.json</div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="text-gray-300 text-sm">
                {"{"}
                <div className="ml-4 space-y-2">
                  {sampleData.skills.map((skill, index) => (
                    <div key={skill.id}>
                      <span className="text-blue-400">"{skill.name}"</span>:
                      <span className="text-yellow-400"> {skill.level}/5</span>
                      {index < sampleData.skills.length - 1 && ","}
                    </div>
                  ))}
                </div>
                {"}"}
              </div>
            </div>

            {/* Code snippet */}
            <div className="mt-6">
              <div className="text-green-400 mb-2">$ cat hello.js</div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-sm">
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
        <div className="mt-8 text-center">
          <div className="text-green-400 text-sm">$ echo "Thanks for reviewing my CV!"</div>
          <div className="text-gray-400 text-sm mt-2">Process completed successfully ✓</div>
        </div>
      </div>
    </div>
  )
}
