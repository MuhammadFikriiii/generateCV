"use client"

import type { CVData } from "@/app/editor/page"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

interface Template2Props {
  data: CVData
}

export function Template2({ data }: Template2Props) {
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
    <div className="w-[210mm] min-h-[297mm] bg-gray-100 flex font-sans text-sm">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4 flex flex-col">
        {/* Photo */}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
          <img
            src={data.personalInfo.photo || "/placeholder.svg?height=150&width=150"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">{data.personalInfo.fullName || "MUHAMMAD FIKRI"}</h2>
          <p className="text-gray-300">Full Stack Developer</p>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 uppercase text-gray-400">Kontak</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span className="break-all">{data.personalInfo.email || "muhammad.fikri@gmail.com"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span>{data.personalInfo.phone || "+62 812-3456-7890"}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
              <span>{data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}</span>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
              <span>
                {data.personalInfo.birthPlace && data.personalInfo.birthDate
                  ? `${data.personalInfo.birthPlace}, ${formatDate(data.personalInfo.birthDate)}`
                  : data.personalInfo.birthPlace || formatDate(data.personalInfo.birthDate) || "Jakarta, Agustus 1995"}
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 uppercase text-gray-400">Keahlian</h3>
          <div className="space-y-3">
            {(data.skills.length > 0
              ? data.skills
              : [
                  { id: "1", name: "React.js", level: 5 },
                  { id: "2", name: "Node.js", level: 4 },
                  { id: "3", name: "TypeScript", level: 4 },
                  { id: "4", name: "Python", level: 4 },
                ]
            ).map((skill) => (
              <div key={skill.id}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-xs text-gray-400">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: `${(skill.level / 5) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 uppercase text-gray-400">Bahasa</h3>
          <div className="space-y-2">
            {(data.languages.length > 0
              ? data.languages
              : [
                  { id: "1", name: "Bahasa Indonesia", level: "native" },
                  { id: "2", name: "English", level: "advanced" },
                  { id: "3", name: "Mandarin", level: "intermediate" },
                ]
            ).map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span className="text-sm">{lang.name}</span>
                <span className="text-xs text-gray-400">{getLanguageLevel(lang.level)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="text-md font-semibold mb-3 uppercase text-gray-400">Hobi</h3>
          <div className="space-y-1">
            {(data.hobbies.length > 0 ? data.hobbies : ["Coding", "Photography", "Traveling", "Gaming"]).map(
              (hobby, index) => (
                <div key={index} className="text-sm">
                  • {hobby}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Profil</h2>
          <div className="w-12 h-1 bg-green-500 mb-4"></div>
          <p className="text-gray-700 leading-relaxed">
            {data.personalInfo.summary ||
              "Full Stack Developer dengan pengalaman 6+ tahun dalam membangun aplikasi web modern. Spesialis dalam React, Node.js, dan cloud architecture dengan track record mengelola tim dan proyek besar."}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pengalaman Kerja</h2>
          <div className="space-y-6">
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
                      "Memimpin tim 8 developer dalam pengembangan platform e-learning yang digunakan oleh 50k+ siswa. Meningkatkan performance aplikasi hingga 40% dan mengimplementasikan CI/CD pipeline.",
                  },
                  {
                    id: "2",
                    position: "Senior Frontend Developer",
                    company: "PT. Kreatif Teknologi",
                    location: "Jakarta",
                    startDate: "2020-03-01",
                    endDate: "2021-12-31",
                    current: false,
                    description:
                      "Mengembangkan dashboard analytics menggunakan React dan D3.js. Berhasil meningkatkan user engagement sebesar 60% melalui optimasi UX/UI.",
                  },
                ]
            ).map((exp) => (
              <div key={exp.id} className="relative pl-6">
                <div className="absolute w-2 h-2 bg-green-500 rounded-full -left-1 top-1"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                    <div className="text-gray-600 font-medium">
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">
                    {formatDate(exp.startDate)} - {exp.current ? "Sekarang" : formatDate(exp.endDate)}
                  </span>
                </div>
                {exp.description && <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pendidikan</h2>
          <div className="space-y-4">
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
              <div key={edu.id} className="relative pl-6">
                <div className="absolute w-2 h-2 bg-green-500 rounded-full -left-1 top-1"></div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                    <div className="text-gray-600 font-medium">
                      {edu.institution} {edu.location && `• ${edu.location}`}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">{edu.year}</span>
                </div>
                {edu.gpa && <div className="text-sm text-gray-600">IPK: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sertifikasi</h2>
          <div className="space-y-3">
            {(data.certifications.length > 0
              ? data.certifications
              : [
                  {
                    id: "1",
                    name: "AWS Certified Solutions Architect",
                    issuer: "Amazon Web Services",
                    date: "2023-05-15",
                  },
                  {
                    id: "2",
                    name: "Google Cloud Professional",
                    issuer: "Google Cloud",
                    date: "2023-03-10",
                  },
                ]
            ).map((cert) => (
              <div key={cert.id} className="flex justify-between items-start border-b border-gray-300 pb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                  <div className="text-sm text-gray-600">{cert.issuer}</div>
                </div>
                <span className="text-sm text-gray-500">{formatDate(cert.date)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* References */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Referensi</h2>
          <div className="grid grid-cols-1 gap-4">
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
                  {
                    id: "2",
                    name: "Sari Dewi",
                    position: "Project Manager",
                    company: "PT. Kreatif Teknologi",
                    email: "sari.dewi@kreatiftek.com",
                    phone: "+62 856-7788-9900",
                  },
                ]
            ).map((ref) => (
              <div key={ref.id} className="border border-gray-300 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">{ref.name}</h3>
                <div className="text-sm text-gray-600">
                  {ref.position} • {ref.company}
                </div>
                <div className="text-sm text-gray-600">{ref.email}</div>
                {ref.phone && <div className="text-sm text-gray-600">{ref.phone}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
