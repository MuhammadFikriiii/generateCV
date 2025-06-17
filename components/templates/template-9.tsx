"use client"

import type { CVData } from "@/app/editor/page"

interface Template9Props {
  data: CVData
}

export function Template9({ data }: Template9Props) {
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
    <div className="cv-template w-[210mm] h-[297mm] bg-white font-serif text-xs leading-tight overflow-hidden p-3">
      {/* Classic header dengan ukuran lebih kecil */}
      <div className="border-t-2 border-b-2 border-double border-gray-800 py-2 mb-3">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1 tracking-wider">
            {data.personalInfo.fullName || "MUHAMMAD FIKRI"}
          </h1>
          <div className="text-sm text-gray-700 mb-2 italic">Full Stack Developer</div>

          <div className="flex justify-center items-center gap-3 text-gray-600 text-xs">
            <div className="flex items-center gap-1">
              <span className="font-semibold">Email:</span>
              <span>{data.personalInfo.email || "muhammad.fikri@gmail.com"}</span>
            </div>
            <div className="w-px h-3 bg-gray-400"></div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">Telepon:</span>
              <span>{data.personalInfo.phone || "+62 812-3456-7890"}</span>
            </div>
            <div className="w-px h-3 bg-gray-400"></div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">Alamat:</span>
              <span>{data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary dengan spacing lebih kecil */}
      <div className="mb-3">
        <h2 className="text-sm font-bold text-gray-900 mb-2 text-center border-b border-gray-300 pb-1">
          RINGKASAN PROFESIONAL
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify indent-4 text-xs">
          {data.personalInfo.summary ||
            "Full Stack Developer dengan pengalaman 5+ tahun. Fokus pada pengembangan aplikasi web modern dan solusi inovatif."}
        </p>
      </div>

      {/* Two column layout dengan gap lebih kecil */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          {/* Experience */}
          <div className="mb-4">
            <h2 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-gray-300 pb-1">
              PENGALAMAN PROFESIONAL
            </h2>
            <div className="space-y-3">
              {(data.experience.length > 0
                ? data.experience
                : [
                    {
                      id: "1",
                      position: "Full Stack Developer",
                      company: "PT Inovasi Teknologi",
                      location: "Jakarta",
                      startDate: "2022-01-01",
                      endDate: "",
                      current: true,
                      description:
                        "Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan PostgreSQL. Berkontribusi dalam pengembangan fitur baru dan perbaikan bug.",
                    },
                  ]
              ).map((exp) => (
                <div key={exp.id}>
                  <div className="mb-1">
                    <h3 className="font-bold text-gray-900 text-xs">{exp.position}</h3>
                    <div className="italic text-gray-700 text-xs">
                      {exp.company}, {exp.location}
                    </div>
                    <div className="text-xs text-gray-600">
                      {formatDate(exp.startDate)} - {exp.current ? "Sekarang" : formatDate(exp.endDate)}
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-gray-300 pb-1">PENDIDIKAN</h2>
            <div className="space-y-2">
              {(data.education.length > 0
                ? data.education
                : [
                    {
                      id: "1",
                      degree: "Sarjana Teknik Informatika",
                      institution: "Universitas Indonesia",
                      location: "Jakarta",
                      gpa: "3.75",
                      year: "2017",
                    },
                  ]
              ).map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold text-gray-900 text-xs">{edu.degree}</h3>
                  <div className="italic text-gray-700 text-xs">{edu.institution}</div>
                  <div className="text-xs text-gray-600">
                    {edu.year} {edu.gpa && `• IPK: ${edu.gpa}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <h2 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-gray-300 pb-1">SERTIFIKASI</h2>
            <div className="space-y-2">
              {(data.certifications.length > 0
                ? data.certifications
                : [
                    {
                      id: "1",
                      name: "AWS Certified Solutions Architect",
                      issuer: "Amazon Web Services",
                      date: "2023-05-15",
                    },
                  ]
              ).map((cert) => (
                <div key={cert.id}>
                  <h3 className="font-semibold text-gray-900 text-xs">{cert.name}</h3>
                  <div className="text-xs text-gray-600">
                    {cert.issuer} - {formatDate(cert.date)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Skills */}
          <div className="mb-4">
            <h2 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-gray-300 pb-1">
              KOMPETENSI TEKNIS
            </h2>
            <div className="space-y-2">
              {(data.skills.length > 0
                ? data.skills
                : [
                    { id: "1", name: "React", level: 5 },
                    { id: "2", name: "Node.js", level: 4 },
                    { id: "3", name: "PostgreSQL", level: 4 },
                    { id: "4", name: "JavaScript", level: 5 },
                  ]
              ).map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-800 text-xs">{skill.name}</span>
                    <span className="text-xs text-gray-600">
                      {"★".repeat(skill.level)}
                      {"☆".repeat(5 - skill.level)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-4">
            <h2 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-gray-300 pb-1">BAHASA</h2>
            <div className="space-y-1">
              {(data.languages.length > 0
                ? data.languages
                : [
                    { id: "1", name: "Bahasa Indonesia", level: "native" },
                    { id: "2", name: "English", level: "advanced" },
                  ]
              ).map((lang) => (
                <div key={lang.id} className="flex justify-between text-xs">
                  <span>{lang.name}</span>
                  <span className="italic">{getLanguageLevel(lang.level)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="mb-4">
            <h2 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-gray-300 pb-1">HOBI & MINAT</h2>
            <div className="space-y-1 text-xs">
              {(data.hobbies.length > 0 ? data.hobbies : ["Coding", "Photography", "Traveling", "Gaming"]).map(
                (hobby, index) => (
                  <div key={index}>• {hobby}</div>
                ),
              )}
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-gray-300 pb-1">REFERENSI</h2>
            <div className="space-y-2">
              {(data.references.length > 0
                ? data.references
                : [
                    {
                      id: "1",
                      name: "Dr. Budi Santoso",
                      position: "CTO",
                      company: "PT. Inovasi Digital",
                      email: "budi.santoso@inovasidigital.com",
                      phone: "+62 811-2233-4455",
                    },
                  ]
              ).map((ref) => (
                <div key={ref.id}>
                  <h3 className="font-semibold text-gray-900 text-xs">{ref.name}</h3>
                  <div className="text-xs text-gray-600">
                    {ref.position} • {ref.company}
                  </div>
                  <div className="text-xs text-gray-600">{ref.email}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer dengan margin lebih kecil */}
      <div className="mt-2 pt-1 border-t border-gray-300 text-center text-xs text-gray-500">
        <p>
          Curriculum Vitae - {data.personalInfo.fullName || "MUHAMMAD FIKRI"} - {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}
