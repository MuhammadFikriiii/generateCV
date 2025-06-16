"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Download,
  RotateCcw,
  Maximize,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  Heart,
  Users,
  FileText,
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { PersonalInfoForm } from "@/components/form-sections/personal-info-form"
import { ExperienceForm } from "@/components/form-sections/experience-form"
import { EducationForm } from "@/components/form-sections/education-form"
import { SkillsForm } from "@/components/form-sections/skills-form"
import { CertificationForm } from "@/components/form-sections/certification-form"
import { LanguageForm } from "@/components/form-sections/language-form"
import { HobbiesForm } from "@/components/form-sections/hobbies-form"
import { ReferenceForm } from "@/components/form-sections/reference-form"
import { CVPreview } from "@/components/cv-preview"
import { GoogleAdSense } from "@/components/google-adsense"
import { useToast } from "@/hooks/use-toast"

export interface CVData {
  personalInfo: {
    fullName: string
    birthPlace: string
    birthDate: string
    address: string
    email: string
    phone: string
    photo: string
    summary: string
  }
  experience: Array<{
    id: string
    position: string
    company: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    description: string
  }>
  education: Array<{
    id: string
    degree: string
    institution: string
    location: string
    gpa: string
    year: string
  }>
  skills: Array<{
    id: string
    name: string
    level: number
  }>
  certifications: Array<{
    id: string
    name: string
    issuer: string
    date: string
    url: string
  }>
  languages: Array<{
    id: string
    name: string
    level: string
  }>
  hobbies: string[]
  references: Array<{
    id: string
    name: string
    position: string
    company: string
    email: string
    phone: string
  }>
}

const initialCVData: CVData = {
  personalInfo: {
    fullName: "",
    birthPlace: "",
    birthDate: "",
    address: "",
    email: "",
    phone: "",
    photo: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
  certifications: [],
  languages: [],
  hobbies: [],
  references: [],
}

function EditorContent() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template") || "1"
  const { toast } = useToast()

  const [cvData, setCVData] = useState<CVData>(initialCVData)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("cvData")
    if (savedData) {
      try {
        setCVData(JSON.parse(savedData))
      } catch (error) {
        console.error("Error loading saved data:", error)
      }
    }
  }, [])

  // Save data to localStorage whenever cvData changes
  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData))
  }, [cvData])

  const handleReset = () => {
    if (confirm("Apakah Anda yakin ingin menghapus semua data? Tindakan ini tidak dapat dibatalkan.")) {
      setCVData(initialCVData)
      localStorage.removeItem("cvData")
      toast({
        title: "Data berhasil dihapus",
        description: "Semua data CV telah dihapus dari form.",
      })
    }
  }

  const handleExportPDF = async () => {
    try {
      // Dynamic import to avoid SSR issues
      const html2pdf = (await import("html2pdf.js")).default

      const element = document.getElementById("cv-preview")
      if (!element) {
        toast({
          title: "Error",
          description: "Preview CV tidak ditemukan",
          variant: "destructive",
        })
        return
      }

      const opt = {
        margin: 0,
        filename: `CV-${cvData.personalInfo.fullName || "Template"}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      }

      toast({
        title: "Mengunduh PDF...",
        description: "Mohon tunggu sebentar",
      })

      await html2pdf().set(opt).from(element).save()

      toast({
        title: "PDF berhasil diunduh!",
        description: `File CV-${cvData.personalInfo.fullName || "Template"}.pdf telah disimpan`,
      })
    } catch (error) {
      console.error("Error exporting PDF:", error)
      toast({
        title: "Error",
        description: "Gagal mengunduh PDF. Silakan coba lagi.",
        variant: "destructive",
      })
    }
  }

  const tabs = [
    { id: "personal", label: "Data Pribadi", icon: User },
    { id: "experience", label: "Pengalaman", icon: Briefcase },
    { id: "education", label: "Pendidikan", icon: GraduationCap },
    { id: "skills", label: "Keahlian", icon: Award },
    { id: "certifications", label: "Sertifikasi", icon: FileText },
    { id: "languages", label: "Bahasa", icon: Languages },
    { id: "hobbies", label: "Hobi", icon: Heart },
    { id: "references", label: "Referensi", icon: Users },
  ]

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Preview Fullscreen</h2>
          <div className="flex space-x-2">
            <Button onClick={handleExportPDF} className="bg-green-600 hover:bg-green-700">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
            <Button variant="outline" onClick={() => setIsFullscreen(false)}>
              Tutup
            </Button>
          </div>
        </div>
        <div className="p-8 flex justify-center">
          <div className="w-[210mm] shadow-2xl">
            <CVPreview data={cvData} templateId={templateId} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Google AdSense Script */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4642094843478665"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali
                  </Button>
                </Link>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">CV</span>
                  </div>
                  <h1 className="text-lg font-semibold">CV Editor</h1>
                  <Badge variant="outline">Template #{templateId}</Badge>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                <Button variant="outline" size="sm" onClick={() => setIsFullscreen(true)}>
                  <Maximize className="w-4 h-4 mr-2" />
                  Fullscreen
                </Button>
                <Button onClick={handleExportPDF} className="bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          {/* Google Ads - Leaderboard */}
          <div className="flex justify-center mb-6">
            <GoogleAdSense
              slot="9005745527"
              style={{ display: "block", minHeight: "90px", width: "100%", maxWidth: "728px" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Isi Data CV Anda</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-6">
                      {tabs.map((tab) => {
                        const Icon = tab.icon
                        return (
                          <TabsTrigger key={tab.id} value={tab.id} className="flex flex-col items-center p-2 text-xs">
                            <Icon className="w-4 h-4 mb-1" />
                            <span className="hidden sm:inline">{tab.label}</span>
                          </TabsTrigger>
                        )
                      })}
                    </TabsList>

                    <TabsContent value="personal">
                      <PersonalInfoForm
                        data={cvData.personalInfo}
                        onChange={(data) => setCVData((prev) => ({ ...prev, personalInfo: data }))}
                      />
                    </TabsContent>

                    <TabsContent value="experience">
                      <ExperienceForm
                        data={cvData.experience}
                        onChange={(data) => setCVData((prev) => ({ ...prev, experience: data }))}
                      />
                    </TabsContent>

                    <TabsContent value="education">
                      <EducationForm
                        data={cvData.education}
                        onChange={(data) => setCVData((prev) => ({ ...prev, education: data }))}
                      />
                    </TabsContent>

                    <TabsContent value="skills">
                      <SkillsForm
                        data={cvData.skills}
                        onChange={(data) => setCVData((prev) => ({ ...prev, skills: data }))}
                      />
                    </TabsContent>

                    <TabsContent value="certifications">
                      <CertificationForm
                        data={cvData.certifications}
                        onChange={(data) => setCVData((prev) => ({ ...prev, certifications: data }))}
                      />
                    </TabsContent>

                    <TabsContent value="languages">
                      <LanguageForm
                        data={cvData.languages}
                        onChange={(data) => setCVData((prev) => ({ ...prev, languages: data }))}
                      />
                    </TabsContent>

                    <TabsContent value="hobbies">
                      <HobbiesForm
                        data={cvData.hobbies}
                        onChange={(data) => setCVData((prev) => ({ ...prev, hobbies: data }))}
                      />
                    </TabsContent>

                    <TabsContent value="references">
                      <ReferenceForm
                        data={cvData.references}
                        onChange={(data) => setCVData((prev) => ({ ...prev, references: data }))}
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Preview Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Live Preview
                    <Badge variant="secondary">Real-time</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="transform scale-50 origin-top-left w-[200%] h-[200%] overflow-hidden">
                      <CVPreview data={cvData} templateId={templateId} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Ads - Medium Rectangle */}
              <div className="flex justify-center">
                <GoogleAdSense
                  slot="9005745527"
                  style={{ display: "block", minHeight: "250px", width: "100%", maxWidth: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditorContent />
    </Suspense>
  )
}
