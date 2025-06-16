"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface Reference {
  id: string
  name: string
  position: string
  company: string
  email: string
  phone: string
}

interface ReferenceFormProps {
  data: Reference[]
  onChange: (data: Reference[]) => void
}

export function ReferenceForm({ data, onChange }: ReferenceFormProps) {
  const addReference = () => {
    const newReference: Reference = {
      id: Date.now().toString(),
      name: "",
      position: "",
      company: "",
      email: "",
      phone: "",
    }
    onChange([...data, newReference])
  }

  const updateReference = (id: string, field: keyof Reference, value: string) => {
    onChange(data.map((ref) => (ref.id === id ? { ...ref, [field]: value } : ref)))
  }

  const removeReference = (id: string) => {
    onChange(data.filter((ref) => ref.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Referensi</h3>
        <Button onClick={addReference} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Referensi
        </Button>
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Belum ada referensi yang ditambahkan</p>
          <Button onClick={addReference} variant="outline" className="mt-2">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Referensi Pertama
          </Button>
        </div>
      )}

      {data.map((reference, index) => (
        <Card key={reference.id}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex justify-between items-center">
              Referensi #{index + 1}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeReference(reference.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Nama Lengkap *</Label>
                <Input
                  value={reference.name}
                  onChange={(e) => updateReference(reference.id, "name", e.target.value)}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label>Posisi/Jabatan *</Label>
                <Input
                  value={reference.position}
                  onChange={(e) => updateReference(reference.id, "position", e.target.value)}
                  placeholder="Senior Manager"
                />
              </div>
            </div>

            <div>
              <Label>Perusahaan *</Label>
              <Input
                value={reference.company}
                onChange={(e) => updateReference(reference.id, "company", e.target.value)}
                placeholder="PT. Teknologi Indonesia"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Email *</Label>
                <Input
                  type="email"
                  value={reference.email}
                  onChange={(e) => updateReference(reference.id, "email", e.target.value)}
                  placeholder="john.doe@company.com"
                />
              </div>
              <div>
                <Label>No. Telepon</Label>
                <Input
                  value={reference.phone}
                  onChange={(e) => updateReference(reference.id, "phone", e.target.value)}
                  placeholder="+62 812-3456-7890"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
