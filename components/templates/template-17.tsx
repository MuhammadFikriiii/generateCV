"use client"

import type { CVData } from "@/app/editor/page"

interface Template17Props {
  data: CVData
}

export function Template17({ data }: Template17Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "hero@comic.studio",
      phone: data.personalInfo.phone || "+62 POW-COMIC-1",
      address: data.personalInfo.address || "Comic City, Indonesia",
      summary:
        data.personalInfo.summary ||
        "A passionate Full Stack Developer with a knack for creating innovative and user-friendly web applications. Experienced in both front-end and back-end development, I thrive on solving complex problems and delivering high-quality solutions.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Full Stack Developer",
              company: "Tech Innovators Inc.",
              location: "Jakarta, Indonesia",
              startDate: "2022-01",
              endDate: "",
              current: true,
              description:
                "Developing and maintaining web applications using React, Node.js, and PostgreSQL. Collaborating with a team of developers to deliver high-quality software solutions.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "Digital Illustration", level: 5 },
            { id: "2", name: "Character Design", level: 5 },
            { id: "3", name: "Storyboarding", level: 4 },
            { id: "4", name: "Comic Layout", level: 5 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-yellow-100 font-bold text-sm relative overflow-hidden">
      {/* Comic book style background */}
      <div className="absolute inset-0">
        <div className="absolute top-4 right-4 text-6xl text-red-300 opacity-50 transform rotate-12">POW!</div>
        <div className="absolute bottom-4 left-4 text-4xl text-blue-300 opacity-50 transform -rotate-12">BAM!</div>
        <div className="absolute top-1/2 left-1/4 text-3xl text-green-300 opacity-50">ZAP!</div>
      </div>

      {/* Comic dots pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Comic header */}
        <div className="bg-red-500 text-white p-6 rounded-lg mb-6 border-4 border-black shadow-lg transform -rotate-1">
          <div className="text-center transform rotate-1">
            <h1 className="text-4xl font-black mb-2 text-shadow-lg">{sampleData.personalInfo.fullName}</h1>
            <div className="text-xl bg-yellow-400 text-black px-4 py-1 rounded-full inline-block border-2 border-black">
              COMIC ARTIST EXTRAORDINAIRE!
            </div>
          </div>
        </div>

        {/* Contact in speech bubble */}
        <div className="bg-white border-4 border-black rounded-2xl p-4 mb-6 relative">
          <div className="absolute -top-3 left-8 w-6 h-6 bg-white border-l-4 border-t-4 border-black transform rotate-45"></div>
          <div className="grid grid-cols-3 gap-4 text-center text-black">
            <div>
              <div className="font-black text-red-600">EMAIL</div>
              <div>{sampleData.personalInfo.email}</div>
            </div>
            <div>
              <div className="font-black text-blue-600">PHONE</div>
              <div>{sampleData.personalInfo.phone}</div>
            </div>
            <div>
              <div className="font-black text-green-600">LOCATION</div>
              <div>{sampleData.personalInfo.address}</div>
            </div>
          </div>
        </div>

        {/* Summary in comic panel */}
        <div className="bg-blue-200 border-4 border-black rounded-lg p-4 mb-6">
          <h2 className="text-xl font-black text-blue-800 mb-3 text-center">ORIGIN STORY</h2>
          <p className="text-black leading-relaxed text-center">{sampleData.personalInfo.summary}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Experience */}
          <div className="bg-green-200 border-4 border-black rounded-lg p-4">
            <h2 className="text-xl font-black text-green-800 mb-4 text-center">HEROIC DEEDS</h2>
            {sampleData.experience.map((exp) => (
              <div key={exp.id} className="bg-white border-2 border-black rounded-lg p-3 mb-3">
                <h3 className="font-black text-green-700">{exp.position}</h3>
                <div className="text-green-600 font-bold">{exp.company}</div>
                <div className="text-sm text-gray-700 mb-2">
                  {exp.startDate} - {exp.current ? "ONGOING!" : exp.endDate}
                </div>
                <p className="text-black text-sm">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="bg-purple-200 border-4 border-black rounded-lg p-4">
            <h2 className="text-xl font-black text-purple-800 mb-4 text-center">SUPERPOWERS</h2>
            {sampleData.skills.map((skill) => (
              <div key={skill.id} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="font-black text-purple-700">{skill.name}</span>
                  <span className="text-sm text-purple-600 font-bold">{skill.level}/5</span>
                </div>
                <div className="w-full bg-white border-2 border-black rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-red-500 to-yellow-500 h-full rounded-full border-r-2 border-black"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comic footer */}
        <div className="mt-6 text-center">
          <div className="bg-yellow-400 border-4 border-black rounded-full px-6 py-2 inline-block transform rotate-2">
            <span className="text-xl font-black text-black">TO BE CONTINUED...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
