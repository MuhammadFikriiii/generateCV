"use client"

import type { CVData } from "@/app/editor/page"

interface Template15Props {
  data: CVData
}

export function Template15({ data }: Template15Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "rick@vintage.co",
      phone: data.personalInfo.phone || "+62 70s-RETRO-1",
      address: data.personalInfo.address || "Bandung, Indonesia",
      summary:
        data.personalInfo.summary ||
        "A passionate Full Stack Developer with expertise in creating modern and scalable web applications. Proficient in front-end and back-end technologies, dedicated to delivering high-quality solutions.",
    },
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 font-serif relative overflow-hidden">
      {/* Retro background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, #ff6b35, #f7931e, #ffd23f)`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 p-8">
        {/* Retro header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 text-white p-8 rounded-3xl shadow-2xl transform -rotate-1">
            <h1 className="text-5xl font-bold mb-2 tracking-wider transform rotate-1">
              {sampleData.personalInfo.fullName}
            </h1>
            <div className="text-xl italic">Full Stack Developer</div>
          </div>
        </div>

        {/* Contact in retro style */}
        <div className="bg-yellow-200 border-4 border-orange-400 rounded-2xl p-6 mb-8 transform rotate-1">
          <div className="grid grid-cols-3 gap-4 text-center text-orange-800">
            <div>
              <div className="font-bold text-lg">EMAIL</div>
              <div>{sampleData.personalInfo.email}</div>
            </div>
            <div>
              <div className="font-bold text-lg">PHONE</div>
              <div>{sampleData.personalInfo.phone}</div>
            </div>
            <div>
              <div className="font-bold text-lg">LOCATION</div>
              <div>{sampleData.personalInfo.address}</div>
            </div>
          </div>
        </div>

        {/* Summary in retro bubble */}
        <div className="bg-white border-8 border-orange-400 rounded-full p-8 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">GROOVY PROFILE</h2>
          <p className="text-gray-800 leading-relaxed text-center italic">{sampleData.personalInfo.summary}</p>
        </div>

        {/* Retro sections */}
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-red-200 border-4 border-red-500 rounded-2xl p-6 transform -rotate-1">
            <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">FAR OUT SKILLS</h2>
            <div className="space-y-3">
              <div className="bg-white rounded-full p-3 text-center font-bold text-red-600">React.js</div>
              <div className="bg-white rounded-full p-3 text-center font-bold text-red-600">Node.js</div>
              <div className="bg-white rounded-full p-3 text-center font-bold text-red-600">JavaScript</div>
              <div className="bg-white rounded-full p-3 text-center font-bold text-red-600">SQL</div>
            </div>
          </div>

          <div className="bg-yellow-200 border-4 border-yellow-500 rounded-2xl p-6 transform rotate-1">
            <h2 className="text-2xl font-bold text-yellow-700 mb-4 text-center">RIGHTEOUS EXPERIENCE</h2>
            <div className="bg-white rounded-2xl p-4 border-4 border-yellow-400">
              <h3 className="font-bold text-yellow-700">Full Stack Developer</h3>
              <div className="text-yellow-600">Tech Innovators Inc.</div>
              <div className="text-sm text-yellow-600">2022 - Present</div>
              <p className="text-gray-700 text-sm mt-2">
                Developing and maintaining web applications using React, Node.js, and SQL databases.
              </p>
            </div>
          </div>
        </div>

        {/* Retro footer */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white p-4 rounded-full inline-block transform -rotate-2">
            <span className="text-xl font-bold">KEEP ON GROOVIN' ✌️</span>
          </div>
        </div>
      </div>
    </div>
  )
}
