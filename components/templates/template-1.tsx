"use client"

import type { CVData } from "@/app/editor/page"
import { Mail, Phone, MapPin, Calendar, Star } from "lucide-react"

interface Template1Props {
  data: CVData
}

export function Template1({ data }: Template1Props) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", { year: "numeric", month: "long" })
  }

  const formatBirthInfo = () => {
    const parts = []
    if (data.personalInfo.birthPlace) parts.push(data.personalInfo.birthPlace)
    if (data.personalInfo.birthDate) parts.push(formatDate(data.personalInfo.birthDate))
    return parts.join(", ")
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
    <div className="w-[210mm] h-[297mm] bg-white font-sans text-xs leading-relaxed overflow-hidden">
      {/* Header */}
      <div className="bg-blue-700 text-white py-6 px-6 mb-4">
        <div className="flex items-center gap-4">
          {data.personalInfo.photo && (
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
              <img
                src={data.personalInfo.photo || "/placeholder.svg"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{data.personalInfo.fullName || "Nama Lengkap"}</h1>
            <div className="space-y-1 text-xs">
              {data.personalInfo.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3" />
                  <span>{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  <span>{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo.address && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>{data.personalInfo.address}</span>
                </div>
              )}
              {formatBirthInfo() && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{formatBirthInfo()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-4">
        {/* Summary */}
        {data.personalInfo.summary && (
          <div>
            <h2 className="text-base font-bold text-blue-700 mb-2 uppercase tracking-wide border-b-2 border-blue-200 pb-1">
              Ringkasan Profil
            </h2>
            <p className="text-gray-700 leading-relaxed text-xs">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-blue-700 mb-2 uppercase tracking-wide border-b-2 border-blue-200 pb-1">
              Pengalaman Kerja
            </h2>
            <div className="space-y-3">
              {data.experience.map((exp) => (
                <div key={exp.id} className="border-l-4 border-blue-300 pl-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-xs">{exp.position}</h3>
                    <span className="text-xs text-gray-600">
                      {formatDate(exp.startDate)} - {exp.current ? "Sekarang" : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <div className="text-blue-700 font-medium mb-1 text-xs">
                    {exp.company}
                    {exp.location && ` • ${exp.location}`}
                  </div>
                  {exp.description && <p className="text-gray-700 text-xs leading-relaxed">{exp.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-blue-700 mb-2 uppercase tracking-wide border-b-2 border-blue-200 pb-1">
              Pendidikan
            </h2>
            <div className="space-y-2">
              {data.education.map((edu) => (
                <div key={edu.id} className="border-l-4 border-blue-300 pl-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-xs">{edu.degree}</h3>
                    {edu.year && <span className="text-xs text-gray-600">{edu.year}</span>}
                  </div>
                  <div className="text-blue-700 font-medium text-xs">
                    {edu.institution}
                    {edu.location && ` • ${edu.location}`}
                  </div>
                  {edu.gpa && <div className="text-xs text-gray-600">IPK: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-base font-bold text-blue-700 mb-2 uppercase tracking-wide border-b-2 border-blue-200 pb-1">
                Keahlian
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-900 text-xs">{skill.name}</span>
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-2 h-2 ${i < skill.level ? "fill-blue-500 text-blue-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {data.languages.length > 0 && (
            <div>
              <h2 className="text-base font-bold text-blue-700 mb-2 uppercase tracking-wide border-b-2 border-blue-200 pb-1">
                Bahasa
              </h2>
              <div className="space-y-1">
                {data.languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 text-xs">{lang.name}</span>
                    <span className="text-xs text-gray-600">{getLanguageLevel(lang.level)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-blue-700 mb-2 uppercase tracking-wide border-b-2 border-blue-200 pb-1">
              Sertifikasi
            </h2>
            <div className="space-y-2">
              {data.certifications.map((cert) => (
                <div key={cert.id} className="border-l-4 border-blue-300 pl-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-xs">{cert.name}</h3>
                    {cert.date && <span className="text-xs text-gray-600">{formatDate(cert.date)}</span>}
                  </div>
                  <div className="text-blue-700 font-medium text-xs">{cert.issuer}</div>
                  {cert.url && <div className="text-xs text-gray-600 break-all">{cert.url}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hobbies */}
        {data.hobbies.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-blue-700 mb-2 uppercase tracking-wide border-b-2 border-blue-200 pb-1">
              Hobi & Minat
            </h2>
            <div className="flex flex-wrap gap-1">
              {data.hobbies.map((hobby, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* References */}
        {data.references.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-blue-700 mb-2 uppercase tracking-wide border-b-2 border-blue-200 pb-1">
              Referensi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.references.map((ref) => (
                <div key={ref.id} className="border-l-4 border-blue-300 pl-3">
                  <h3 className="font-bold text-gray-900 text-xs">{ref.name}</h3>
                  <div className="text-blue-700 font-medium text-xs">{ref.position}</div>
                  <div className="text-gray-600 text-xs">{ref.company}</div>
                  {ref.email && <div className="text-xs text-gray-600">{ref.email}</div>}
                  {ref.phone && <div className="text-xs text-gray-600">{ref.phone}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
