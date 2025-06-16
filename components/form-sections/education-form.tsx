"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface Education {
  id: string
  degree: string
  institution: string
  location: string
  gpa: string
  year: string
}

interface EducationFormProps {
  data: Education[]
  onChange: (data: Education[]) => void
}

export function EducationForm({ data, onChange }: EducationFormProps) {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      degree: "",
      institution: "",
      location: "",
      gpa: "",
      year: "",
    }
    onChange([...data, newEducation])
  }

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onChange(data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const removeEducation = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Pendidikan</h3>
        <Button onClick={addEducation} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Pendidikan
        </Button>
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Belum ada pendidikan yang ditambahkan</p>
          <Button onClick={addEducation} variant="outline" className="mt-2">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Pendidikan Pertama
          </Button>
        </div>
      )}

      {data.map((education, index) => (
        <Card key={education.id}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex justify-between items-center">
              Pendidikan #{index + 1}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeEducation(education.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Gelar/Jurusan *</Label>
                <Input
                  value={education.degree}
                  onChange={(e) => updateEducation(education.id, "degree", e.target.value)}
                  placeholder="S1 Teknik Informatika"
                />
              </div>
              <div>
                <Label>Institusi *</Label>
                <Input
                  value={education.institution}
                  onChange={(e) => updateEducation(education.id, "institution", e.target.value)}
                  placeholder="Universitas Indonesia"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Lokasi</Label>
                <Input
                  value={education.location}
                  onChange={(e) => updateEducation(education.id, "location", e.target.value)}
                  placeholder="Jakarta"
                />
              </div>
              <div>
                <Label>IPK/Nilai</Label>
                <Input
                  value={education.gpa}
                  onChange={(e) => updateEducation(education.id, "gpa", e.target.value)}
                  placeholder="3.75"
                />
              </div>
              <div>
                <Label>Tahun Lulus</Label>
                <Input
                  value={education.year}
                  onChange={(e) => updateEducation(education.id, "year", e.target.value)}
                  placeholder="2023"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
