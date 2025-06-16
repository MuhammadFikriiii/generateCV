"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, X } from "lucide-react"

interface HobbiesFormProps {
  data: string[]
  onChange: (data: string[]) => void
}

export function HobbiesForm({ data, onChange }: HobbiesFormProps) {
  const [inputValue, setInputValue] = useState("")

  const addHobby = () => {
    if (inputValue.trim() && !data.includes(inputValue.trim())) {
      onChange([...data, inputValue.trim()])
      setInputValue("")
    }
  }

  const removeHobby = (hobby: string) => {
    onChange(data.filter((h) => h !== hobby))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addHobby()
    }
  }

  const suggestedHobbies = [
    "Membaca",
    "Menulis",
    "Fotografi",
    "Traveling",
    "Memasak",
    "Olahraga",
    "Musik",
    "Gaming",
    "Berkebun",
    "Menggambar",
    "Coding",
    "Yoga",
    "Hiking",
    "Berenang",
    "Sepak Bola",
    "Basket",
    "Tenis",
    "Badminton",
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Hobi & Minat</h3>

      <div className="flex space-x-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Masukkan hobi atau minat Anda"
        />
        <Button onClick={addHobby} disabled={!inputValue.trim()}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {data.length > 0 && (
        <div>
          <Label>Hobi & Minat Anda:</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.map((hobby, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                {hobby}
                <Button variant="ghost" size="sm" className="h-auto p-0 w-4 h-4" onClick={() => removeHobby(hobby)}>
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div>
        <Label>Saran Hobi:</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {suggestedHobbies
            .filter((hobby) => !data.includes(hobby))
            .map((hobby, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => onChange([...data, hobby])}
              >
                + {hobby}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  )
}
