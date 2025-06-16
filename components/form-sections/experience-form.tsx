"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2 } from "lucide-react"

interface Experience {
  id: string
  position: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

interface ExperienceFormProps {
  data: Experience[]
  onChange: (data: Experience[]) => void
}

export function ExperienceForm({ data, onChange }: ExperienceFormProps) {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    onChange([...data, newExperience])
  }

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    onChange(data.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const removeExperience = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Pengalaman Kerja</h3>
        <Button onClick={addExperience} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Pengalaman
        </Button>
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Belum ada pengalaman kerja yang ditambahkan</p>
          <Button onClick={addExperience} variant="outline" className="mt-2">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Pengalaman Pertama
          </Button>
        </div>
      )}

      {data.map((experience, index) => (
        <Card key={experience.id}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex justify-between items-center">
              Pengalaman #{index + 1}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeExperience(experience.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Posisi/Jabatan *</Label>
                <Input
                  value={experience.position}
                  onChange={(e) => updateExperience(experience.id, "position", e.target.value)}
                  placeholder="Software Engineer"
                />
              </div>
              <div>
                <Label>Perusahaan *</Label>
                <Input
                  value={experience.company}
                  onChange={(e) => updateExperience(experience.id, "company", e.target.value)}
                  placeholder="PT. Teknologi Indonesia"
                />
              </div>
            </div>

            <div>
              <Label>Lokasi</Label>
              <Input
                value={experience.location}
                onChange={(e) => updateExperience(experience.id, "location", e.target.value)}
                placeholder="Jakarta, Indonesia"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Tanggal Mulai *</Label>
                <Input
                  type="date"
                  value={experience.startDate}
                  onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
                />
              </div>
              <div>
                <Label>Tanggal Selesai</Label>
                <Input
                  type="date"
                  value={experience.endDate}
                  onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
                  disabled={experience.current}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id={`current-${experience.id}`}
                checked={experience.current}
                onCheckedChange={(checked) => {
                  updateExperience(experience.id, "current", checked)
                  if (checked) {
                    updateExperience(experience.id, "endDate", "")
                  }
                }}
              />
              <Label htmlFor={`current-${experience.id}`}>Saya masih bekerja di sini</Label>
            </div>

            <div>
              <Label>Deskripsi Pekerjaan</Label>
              <Textarea
                value={experience.description}
                onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
                placeholder="Jelaskan tanggung jawab dan pencapaian Anda di posisi ini..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
