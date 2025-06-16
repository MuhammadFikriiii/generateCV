"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  url: string
}

interface CertificationFormProps {
  data: Certification[]
  onChange: (data: Certification[]) => void
}

export function CertificationForm({ data, onChange }: CertificationFormProps) {
  const addCertification = () => {
    const newCertification: Certification = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      date: "",
      url: "",
    }
    onChange([...data, newCertification])
  }

  const updateCertification = (id: string, field: keyof Certification, value: string) => {
    onChange(data.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert)))
  }

  const removeCertification = (id: string) => {
    onChange(data.filter((cert) => cert.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Sertifikasi</h3>
        <Button onClick={addCertification} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Sertifikasi
        </Button>
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Belum ada sertifikasi yang ditambahkan</p>
          <Button onClick={addCertification} variant="outline" className="mt-2">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Sertifikasi Pertama
          </Button>
        </div>
      )}

      {data.map((certification, index) => (
        <Card key={certification.id}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex justify-between items-center">
              Sertifikasi #{index + 1}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeCertification(certification.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Nama Sertifikasi *</Label>
              <Input
                value={certification.name}
                onChange={(e) => updateCertification(certification.id, "name", e.target.value)}
                placeholder="AWS Certified Solutions Architect"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Penerbit *</Label>
                <Input
                  value={certification.issuer}
                  onChange={(e) => updateCertification(certification.id, "issuer", e.target.value)}
                  placeholder="Amazon Web Services"
                />
              </div>
              <div>
                <Label>Tanggal Diperoleh</Label>
                <Input
                  type="date"
                  value={certification.date}
                  onChange={(e) => updateCertification(certification.id, "date", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label>URL Sertifikat (Opsional)</Label>
              <Input
                value={certification.url}
                onChange={(e) => updateCertification(certification.id, "url", e.target.value)}
                placeholder="https://www.credly.com/badges/..."
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
