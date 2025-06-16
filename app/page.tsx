"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Download } from "lucide-react"
import Link from "next/link"
import { TemplatePreview } from "@/components/template-preview"

const templates = [
  {
    id: 1,
    name: "Clean & Minimalist",
    color: "blue",
    category: "Modern",
    preview: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    id: 2,
    name: "Elegant Serif",
    color: "purple",
    category: "Creative",
    preview: "bg-gradient-to-br from-purple-50 to-purple-100",
  },
  {
    id: 3,
    name: "Classic Professional",
    color: "gray",
    category: "Corporate",
    preview: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    id: 4,
    name: "Modern Tech",
    color: "green",
    category: "Tech",
    preview: "bg-gradient-to-br from-green-50 to-green-100",
  },
  {
    id: 5,
    name: "Vibrant Marketing",
    color: "pink",
    category: "Marketing",
    preview: "bg-gradient-to-br from-pink-50 to-pink-100",
  },
  {
    id: 6,
    name: "Creative Gradient",
    color: "indigo",
    category: "Creative",
    preview: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  },
  {
    id: 7,
    name: "Developer Terminal",
    color: "teal",
    category: "Tech",
    preview: "bg-gradient-to-br from-teal-50 to-teal-100",
  },
  {
    id: 8,
    name: "Marketing Geometric",
    color: "orange",
    category: "Marketing",
    preview: "bg-gradient-to-br from-orange-50 to-orange-100",
  },
  {
    id: 9,
    name: "Medical Professional",
    color: "red",
    category: "Healthcare",
    preview: "bg-gradient-to-br from-red-50 to-red-100",
  },
  {
    id: 10,
    name: "Artistic Flow",
    color: "yellow",
    category: "Creative",
    preview: "bg-gradient-to-br from-yellow-50 to-yellow-100",
  },
  {
    id: 11,
    name: "Neon Cyberpunk",
    color: "cyan",
    category: "Tech",
    preview: "bg-gradient-to-br from-cyan-50 to-cyan-100",
  },
  {
    id: 12,
    name: "Luxury Gold",
    color: "amber",
    category: "Executive",
    preview: "bg-gradient-to-br from-amber-50 to-amber-100",
  },
  {
    id: 13,
    name: "Newspaper Style",
    color: "slate",
    category: "Journalism",
    preview: "bg-gradient-to-br from-slate-50 to-slate-100",
  },
  {
    id: 14,
    name: "Instagram Card",
    color: "pink",
    category: "Social Media",
    preview: "bg-gradient-to-br from-pink-50 to-pink-100",
  },
  {
    id: 15,
    name: "Retro Vintage",
    color: "orange",
    category: "Creative",
    preview: "bg-gradient-to-br from-orange-50 to-orange-100",
  },
  {
    id: 16,
    name: "Glassmorphism",
    color: "blue",
    category: "Modern",
    preview: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    id: 17,
    name: "Comic Book",
    color: "red",
    category: "Creative",
    preview: "bg-gradient-to-br from-red-50 to-red-100",
  },
  {
    id: 18,
    name: "Minimalist Lines",
    color: "gray",
    category: "Modern",
    preview: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    id: 19,
    name: "Nature Organic",
    color: "green",
    category: "Environmental",
    preview: "bg-gradient-to-br from-green-50 to-green-100",
  },
  {
    id: 20,
    name: "Space Galaxy",
    color: "purple",
    category: "Creative",
    preview: "bg-gradient-to-br from-purple-50 to-purple-100",
  },
]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(templates.map((t) => t.category)))]

  const filteredTemplates =
    selectedCategory === "All" ? templates : templates.filter((t) => t.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CV</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CV Generator Pro
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>10,000+ CV dibuat</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Buat CV Profesional
            <br />
            dalam Hitungan Menit
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Pilih dari 20+ template profesional, isi data Anda, dan dapatkan CV siap kerja dalam format PDF. Tanpa
            registrasi, 100% gratis!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2">
              <Download className="w-4 h-4 mr-2" />
              Export PDF Gratis
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              ⚡ Live Preview Real-Time
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              🎨 20+ Template Profesional
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              📱 Responsive Design
            </Badge>
          </div>
        </div>
      </section>

      {/* Google Ads Placeholder */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-sm">Google Ads Placement</p>
          <p className="text-gray-400 text-xs mt-1">728x90 Leaderboard</p>
        </div>
      </div>

      {/* Template Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Pilih Template CV Anda</h3>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <Card
                key={template.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-300"
              >
                <CardContent className="p-0">
                  {/* A4 aspect ratio container with better scaling */}
                  <div className="aspect-[210/297] overflow-hidden rounded-t-lg relative bg-white">
                    {/* Show actual template preview with improved scaling to fill width */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="transform scale-[0.42] origin-center w-[210mm] h-[297mm]">
                        <TemplatePreview templateId={template.id.toString()} />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-t-lg"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{template.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {template.category}
                      </Badge>
                    </div>
                    <Link href={`/editor?template=${template.id}`}>
                      <Button className="w-full group-hover:bg-blue-600 transition-colors">
                        Pilih Template
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Mengapa Pilih CV Generator Pro?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Super Cepat</h4>
              <p className="text-gray-600">Buat CV profesional dalam hitungan menit dengan live preview real-time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Design Profesional</h4>
              <p className="text-gray-600">20+ template yang dirancang khusus untuk berbagai profesi dan industri</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Export PDF</h4>
              <p className="text-gray-600">Download CV dalam format PDF berkualitas tinggi, siap untuk dikirim</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads Placeholder */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-sm">Google Ads Placement</p>
          <p className="text-gray-400 text-xs mt-1">728x90 Leaderboard</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CV</span>
            </div>
            <h1 className="text-xl font-bold">CV Generator Pro</h1>
          </div>
          <p className="text-gray-400 mb-4">Buat CV profesional dengan mudah dan gratis</p>
          <p className="text-gray-500 text-sm">© 2024 CV Generator Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
