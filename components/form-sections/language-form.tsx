"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"

interface Language {
  id: string
  name: string
  level: string
}

interface LanguageFormProps {
  data: Language[]
  onChange: (data: Language[]) => void
}

const languageLevels = [
  { value: "beginner", label: "Pemula" },
  { value: "elementary", label: "Dasar" },
  { value: "intermediate", label: "Menengah" },
  { value: "advanced", label: "Mahir" },
  { value: "native", label: "Native/Asli" },
]

export function LanguageForm({ data, onChange }: LanguageFormProps) {
  const addLanguage = () => {
    const newLanguage: Language = {
      id: Date.now().toString(),
      name: "",
      level: "intermediate",
    }
    onChange([...data, newLanguage])
  }

  const updateLanguage = (id: string, field: keyof Language, value: string) => {
    onChange(data.map((lang) => (lang.id === id ? { ...lang, [field]: value } : lang)))
  }

  const removeLanguage = (id: string) => {
    onChange(data.filter((lang) => lang.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Bahasa</h3>
        <Button onClick={addLanguage} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Bahasa
        </Button>
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Belum ada bahasa yang ditambahkan</p>
          <Button onClick={addLanguage} variant="outline" className="mt-2">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Bahasa Pertama
          </Button>
        </div>
      )}

      {data.map((language, index) => (
        <Card key={language.id}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex justify-between items-center">
              Bahasa #{index + 1}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeLanguage(language.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Nama Bahasa *</Label>
                <Input
                  value={language.name}
                  onChange={(e) => updateLanguage(language.id, "name", e.target.value)}
                  placeholder="Bahasa Indonesia, English, Mandarin, dll."
                />
              </div>
              <div>
                <Label>Tingkat Kemampuan *</Label>
                <Select value={language.level} onValueChange={(value) => updateLanguage(language.id, "level", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih tingkat kemampuan" />
                  </SelectTrigger>
                  <SelectContent>
                    {languageLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
