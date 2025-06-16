"use client"

import type { CVData } from "@/app/editor/page"

interface Template10Props {
  data: CVData
}

export function Template10({ data }: Template10Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "muhammad.fikri@email.com",
      phone: data.personalInfo.phone || "+62 878-9012-3456",
      address: data.personalInfo.address || "Jakarta, Indonesia",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer dengan pengalaman luas dalam pengembangan aplikasi web. Berpengalaman lebih dari 5 tahun dalam membangun solusi inovatif dan efisien.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Software Engineer",
              company: "Tech Solutions",
              location: "Jakarta",
              startDate: "2022-01",
              endDate: "",
              current: true,
              description:
                "Bertanggung jawab untuk mengembangkan dan memelihara aplikasi web. Berkontribusi dalam pengembangan fitur baru dan perbaikan bug.",
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
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-cyan-50 via-white to-teal-50 font-sans relative">
      {/* Artistic header with flowing shapes */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 transform -skew-y-3 origin-top-left"></div>
        <div className="absolute top-8 right-0 w-32 h-32 bg-white bg-opacity-20 rounded-full"></div>
        <div className="absolute top-16 right-16 w-16 h-16 bg-white bg-opacity-30 rounded-full"></div>

        <div className="relative z-10 pt-12 pb-20 px-8 text-white">
          <div className="flex items-end gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-light mb-2 tracking-wide">{sampleData.personalInfo.fullName}</h1>
              <div className="text-xl font-light opacity-90 mb-6">Full Stack Developer</div>

              <div className="grid grid-cols-3 gap-4 text-sm opacity-90">
                <div>
                  <div className="font-semibold mb-1">EMAIL</div>
                  <div>{sampleData.personalInfo.email}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">PHONE</div>
                  <div>{sampleData.personalInfo.phone}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">LOCATION</div>
                  <div>{sampleData.personalInfo.address}</div>
                </div>
              </div>
            </div>

            {(data.personalInfo.photo || true) && (
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src={data.personalInfo.photo || "/placeholder.svg?height=160&width=160"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-8 -mt-8 relative z-20">
        {/* Creative summary card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 border-l-4 border-cyan-500">
          <h2 className="text-2xl font-light text-gray-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-cyan-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">
              💡
            </span>
            CREATIVE VISION
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg font-light italic">"{sampleData.personalInfo.summary}"</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Experience - 2 columns */}
          <div className="col-span-2">
            <h2 className="text-3xl font-light text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mr-4 flex items-center justify-center text-white">
                🚀
              </span>
              EXPERIENCE
            </h2>

            <div className="space-y-8">
              {sampleData.experience.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-teal-400">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                        <div className="text-teal-600 font-medium text-lg">{exp.company}</div>
                        <div className="text-gray-500 text-sm">{exp.location}</div>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-100 to-teal-100 px-4 py-2 rounded-full">
                        <span className="text-cyan-800 text-sm font-medium">
                          {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Portfolio showcase */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-yellow-400 rounded-full mr-3 flex items-center justify-center text-sm">
                  🎨
                </span>
                PORTFOLIO HIGHLIGHTS
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Brand Projects</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-600">180%</div>
                  <div className="text-sm text-gray-600">Avg. Brand Growth</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-600">15+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Info - 1 column */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-light text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">
                  ⚡
                </span>
                SKILLS
              </h2>

              <div className="space-y-4">
                {sampleData.skills.map((skill, index) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          index % 4 === 0
                            ? "bg-gradient-to-r from-cyan-400 to-teal-500"
                            : index % 4 === 1
                              ? "bg-gradient-to-r from-purple-400 to-pink-500"
                              : index % 4 === 2
                                ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                                : "bg-gradient-to-r from-teal-400 to-green-500"
                        }`}
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-orange-400 rounded-full mr-3 flex items-center justify-center text-sm">
                  🛠️
                </span>
                TOOLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Photoshop", "Illustrator", "Figma", "After Effects", "Premiere Pro", "InDesign"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Let's Create Together!</h3>
              <div className="space-y-2 text-sm opacity-90">
                <div>📧 {sampleData.personalInfo.email}</div>
                <div>📱 {sampleData.personalInfo.phone}</div>
                <div>🌐 behance.net/lisachen</div>
                <div>📸 @lisachen_creative</div>
              </div>
            </div>

            {/* Fun fact */}
            <div className="bg-yellow-100 rounded-xl p-4 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">💡 Fun Fact</h4>
              <p className="text-sm text-gray-700">
                I find inspiration in Bali's sunsets and create my best work with a cup of local coffee!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
