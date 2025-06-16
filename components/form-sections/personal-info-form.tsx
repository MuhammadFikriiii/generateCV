"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

interface PersonalInfo {
  fullName: string
  birthPlace: string
  birthDate: string
  address: string
  email: string
  phone: string
  photo: string
  summary: string
}

interface PersonalInfoFormProps {
  data: PersonalInfo
  onChange: (data: PersonalInfo) => void
}

export function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const [photoPreview, setPhotoPreview] = useState<string>(data.photo || "")

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value })
  }

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setPhotoPreview(result)
        handleInputChange("photo", result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removePhoto = () => {
    setPhotoPreview("")
    handleInputChange("photo", "")
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Nama Lengkap *</Label>
          <Input
            id="fullName"
            value={data.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            placeholder="Masukkan nama lengkap"
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="nama@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">No. Telepon *</Label>
          <Input
            id="phone"
            value={data.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+62 812-3456-7890"
          />
        </div>
        <div>
          <Label htmlFor="birthDate">Tanggal Lahir</Label>
          <Input
            id="birthDate"
            type="date"
            value={data.birthDate}
            onChange={(e) => handleInputChange("birthDate", e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="birthPlace">Tempat Lahir</Label>
        <Input
          id="birthPlace"
          value={data.birthPlace}
          onChange={(e) => handleInputChange("birthPlace", e.target.value)}
          placeholder="Jakarta, Indonesia"
        />
      </div>

      <div>
        <Label htmlFor="address">Alamat</Label>
        <Textarea
          id="address"
          value={data.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
          placeholder="Jl. Contoh No. 123, Jakarta Selatan"
          rows={3}
        />
      </div>

      <div>
        <Label>Foto Profil</Label>
        <div className="mt-2">
          {photoPreview ? (
            <div className="relative inline-block">
              <img
                src={photoPreview || "/placeholder.svg"}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg border"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute -top-2 -right-2 rounded-full w-6 h-6 p-0"
                onClick={removePhoto}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600 mb-2">Upload foto profil</p>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" id="photo-upload" />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => document.getElementById("photo-upload")?.click()}
              >
                Pilih File
              </Button>
            </div>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="summary">Ringkasan Profil</Label>
        <Textarea
          id="summary"
          value={data.summary}
          onChange={(e) => handleInputChange("summary", e.target.value)}
          placeholder="Tulis ringkasan singkat tentang diri Anda, pengalaman, dan tujuan karir..."
          rows={4}
        />
      </div>
    </div>
  )
}
