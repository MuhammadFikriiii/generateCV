"use client"

import type { CVData } from "@/app/editor/page"

interface Template9Props {
  data: CVData
}

export function Template9({ data }: Template9Props) {
  const sampleData = {
    personalInfo: {
      fullName: data.personalInfo.fullName || "MUHAMMAD FIKRI",
      email: data.personalInfo.email || "muhammad.fikri@email.com",
      phone: data.personalInfo.phone || "+62 813-4567-8901",
      address: data.personalInfo.address || "Jakarta, Indonesia",
      summary:
        data.personalInfo.summary ||
        "Full Stack Developer dengan pengalaman 5+ tahun. Fokus pada pengembangan aplikasi web modern dan solusi inovatif.",
    },
    experience:
      data.experience.length > 0
        ? data.experience
        : [
            {
              id: "1",
              position: "Full Stack Developer",
              company: "PT Inovasi Teknologi",
              location: "Jakarta",
              startDate: "2022-01",
              endDate: "",
              current: true,
              description:
                "Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan PostgreSQL. Berkontribusi dalam pengembangan fitur baru dan perbaikan bug.",
            },
          ],
    skills:
      data.skills.length > 0
        ? data.skills
        : [
            { id: "1", name: "React", level: 5 },
            { id: "2", name: "Node.js", level: 4 },
            { id: "3", name: "PostgreSQL", level: 4 },
            { id: "4", name: "JavaScript", level: 5 },
          ],
  }

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white font-serif text-sm">
      {/* Classic header with lines */}
      <div className="border-t-4 border-b-4 border-double border-gray-800 py-8 mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-wider">{sampleData.personalInfo.fullName}</h1>
          <div className="text-lg text-gray-700 mb-4 italic">Full Stack Developer</div>

          <div className="flex justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <span>{sampleData.personalInfo.email}</span>
            </div>
            <div className="w-px h-4 bg-gray-400"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Telepon:</span>
              <span>{sampleData.personalInfo.phone}</span>
            </div>
            <div className="w-px h-4 bg-gray-400"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Alamat:</span>
              <span>{sampleData.personalInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8">
        {/* Professional Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center border-b-2 border-gray-300 pb-2">
            RINGKASAN PROFESIONAL
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify indent-8">{sampleData.personalInfo.summary}</p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {/* Experience */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
                PENGALAMAN PROFESIONAL
              </h2>
              <div className="space-y-6">
                {sampleData.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="mb-2">
                      <h3 className="font-bold text-gray-900 text-base">{exp.position}</h3>
                      <div className="italic text-gray-700">
                        {exp.company}, {exp.location}
                      </div>
                      <div className="text-sm text-gray-600">
                        {exp.startDate} - {exp.current ? "Sekarang" : exp.endDate}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed text-justify">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">PENDIDIKAN</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900">Sarjana Teknik Informatika</h3>
                  <div className="italic text-gray-700">Universitas Indonesia</div>
                  <div className="text-sm text-gray-600">2017 - 2021</div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">SMA Negeri 1 Jakarta</h3>
                  <div className="italic text-gray-700">Ilmu Pengetahuan Alam</div>
                  <div className="text-sm text-gray-600">2014 - 2017</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
                KOMPETENSI KLINIS
              </h2>
              <div className="space-y-3">
                {sampleData.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">
                        {"★".repeat(skill.level)}
                        {"☆".repeat(5 - skill.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">SERTIFIKASI</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900">Sertifikasi React.js</h3>
                  <div className="text-sm text-gray-600">Dicoding - 2023</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sertifikasi Node.js</h3>
                  <div className="text-sm text-gray-600">Coursera - 2022</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sertifikasi JavaScript</h3>
                  <div className="text-sm text-gray-600">Hackerrank - 2021</div>
                </div>
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
                KEANGGOTAAN PROFESI
              </h2>
              <div className="space-y-2 text-sm">
                <div>• Asosiasi Pengembang Perangkat Lunak Indonesia (APPLI)</div>
                <div>• Indonesian Digital Community (IDC)</div>
                <div>• React Indonesia</div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">BAHASA</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Bahasa Indonesia</span>
                  <span className="italic">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="italic">Fluent</span>
                </div>
                <div className="flex justify-between">
                  <span>JavaScript</span>
                  <span className="italic">Technical</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
          <p>
            Curriculum Vitae - {sampleData.personalInfo.fullName} - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  )
}
