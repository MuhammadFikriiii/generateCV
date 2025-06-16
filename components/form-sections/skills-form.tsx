"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Plus, Trash2 } from "lucide-react"

interface Skill {
  id: string
  name: string
  level: number
}

interface SkillsFormProps {
  data: Skill[]
  onChange: (data: Skill[]) => void
}

export function SkillsForm({ data, onChange }: SkillsFormProps) {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      level: 3,
    }
    onChange([...data, newSkill])
  }

  const updateSkill = (id: string, field: keyof Skill, value: string | number) => {
    onChange(data.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill)))
  }

  const removeSkill = (id: string) => {
    onChange(data.filter((skill) => skill.id !== id))
  }

  const getLevelText = (level: number) => {
    switch (level) {
      case 1:
        return "Pemula"
      case 2:
        return "Dasar"
      case 3:
        return "Menengah"
      case 4:
        return "Mahir"
      case 5:
        return "Expert"
      default:
        return "Menengah"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Keahlian</h3>
        <Button onClick={addSkill} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Keahlian
        </Button>
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Belum ada keahlian yang ditambahkan</p>
          <Button onClick={addSkill} variant="outline" className="mt-2">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Keahlian Pertama
          </Button>
        </div>
      )}

      {data.map((skill, index) => (
        <Card key={skill.id}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex justify-between items-center">
              Keahlian #{index + 1}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSkill(skill.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Nama Keahlian *</Label>
              <Input
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                placeholder="JavaScript, Photoshop, Project Management, dll."
              />
            </div>

            <div>
              <Label>
                Level Kemampuan: {getLevelText(skill.level)} ({skill.level}/5)
              </Label>
              <div className="mt-2">
                <Slider
                  value={[skill.level]}
                  onValueChange={(value) => updateSkill(skill.id, "level", value[0])}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Pemula</span>
                  <span>Dasar</span>
                  <span>Menengah</span>
                  <span>Mahir</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
