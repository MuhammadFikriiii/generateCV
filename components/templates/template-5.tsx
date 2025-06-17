"use client"

import type { CVData } from "@/app/editor/page"
import { Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, User, BookOpen, Award } from "lucide-react"

interface Template5Props {
  data: CVData
}

export function Template5({ data }: Template5Props) {
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
    <div className="w-[210mm] min-h-[297mm] bg-white font-sans text-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 px-8 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            className="fill-current text-white"
          >
            <path d="M0,300 C66.6666667,150 333.333333,0 500,0 C666.666667,0 933.333333,150 1000,300 L0,300 Z"></path>
          </svg>
        </div>
        <div className="relative z-10 flex items-start gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={data.personalInfo.photo || "/placeholder.svg?height=150&width=150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-semibold mb-2 tracking-wide">
              {data.personalInfo.fullName || "MUHAMMAD FIKRI"}
            </h1>
            <h2 className="text-lg font-medium text-gray-200">Full Stack Developer</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{data.personalInfo.email || "muhammad.fikri@gmail.com"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{data.personalInfo.phone || "+62 812-3456-7890"}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{data.personalInfo.address || "Jl. Asia Afrika No. 88, Bandung 40111"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {data.personalInfo.birthPlace && data.personalInfo.birthDate
                    ? `${data.personalInfo.birthPlace}, ${formatDate(data.personalInfo.birthDate)}`
                    : data.personalInfo.birthPlace ||
                      formatDate(data.personalInfo.birthDate) ||
                      "Jakarta, Agustus 1995"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <User className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-1">Profil</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              {data.personalInfo.summary ||
                "Full Stack Developer dengan pengalaman 6+ tahun dalam membangun aplikasi web modern. Spesialis dalam React, Node.js, dan cloud architecture dengan track record mengelola tim dan proyek besar."}
            </p>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-1">Keahlian</h2>
            </div>
            <div className="space-y-3">
              {(data.skills.length > 0
                ? data.skills
                : [
                    { id: "1", name: "React.js", level: 5 },
                    { id: "2", name: "Node.js", level: 4 },
                    { id: "3", name: "TypeScript", level: 4 },
                    { id: "4", name: "Python", level: 4 },
                    { id: "5", name: "AWS", level: 3 },
                  ]
              ).map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-indigo-400 h-2 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-1">Bahasa</h2>
            </div>
            <div className="space-y-2">
              {(data.languages.length > 0
                ? data.languages
                : [
                    { id: "1", name: "Bahasa Indonesia", level: "native" },
                    { id: "2", name: "English", level: "advanced" },
                    { id: "3", name: "Mandarin", level: "intermediate" },
                  ]
              ).map((lang) => (
                <div key={lang.id} className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <span className="font-medium text-gray-800 text-sm">{lang.name}</span>
                  <span className="text-sm text-indigo-600 font-medium">{getLanguageLevel(lang.level)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 space-y-6">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-gray-700" />
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-1 flex-1">
                Pengalaman Kerja
              </h2>
            </div>
            <div className="space-y-5">
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
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-gray-300"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                    <div className="text-indigo-600 font-medium text-sm">
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </div>
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                      {formatDate(exp.startDate)} - {exp.current ? "Sekarang" : formatDate(exp.endDate)}
                    </span>
                    {exp.description && <p className="text-gray-700 text-sm leading-relaxed mt-2">{exp.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-gray-700" />
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-1 flex-1">Pendidikan</h2>
            </div>
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
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-gray-300"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                    <div className="text-indigo-600 font-medium text-sm">
                      {edu.institution} {edu.location && `• ${edu.location}`}
                    </div>
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                      {edu.year}
                    </span>
                    {edu.gpa && <div className="text-sm text-gray-600 mt-1">IPK: {edu.gpa}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-gray-700" />
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-1 flex-1">Sertifikasi</h2>
            </div>
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
                <div key={cert.id} className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 text-sm">{cert.name}</h3>
                  <div className="text-xs text-gray-600">{cert.issuer}</div>
                  <div className="text-xs text-indigo-600">{formatDate(cert.date)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-gray-700" />
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-1 flex-1">Hobi</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {(data.hobbies.length > 0
                ? data.hobbies
                : ["Coding", "Photography", "Traveling", "Gaming", "Reading"]
              ).map((hobby, index) => (
                <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          {/* References */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-gray-700" />
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-1 flex-1">Referensi</h2>
            </div>
            <div className="space-y-4">
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
                <div key={ref.id} className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 text-sm">{ref.name}</h3>
                  <div className="text-xs text-gray-600">{ref.position}</div>
                  <div className="text-xs text-gray-600">{ref.company}</div>
                  <div className="text-xs text-indigo-600">{ref.email}</div>
                  {ref.phone && <div className="text-xs text-gray-600">{ref.phone}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
