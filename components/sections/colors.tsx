"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const colorOptions = [
  {
    name: "マットブラック",
    nameEn: "Matte Black",
    hex: "#2a2a2a",
    image: "/images/color-black.jpg",
    featured: true,
  },
  {
    name: "サンドベージュ",
    nameEn: "Sand Beige",
    hex: "#c4b49a",
    image: "/images/color-beige.jpg",
    featured: true,
  },
  {
    name: "パールホワイト",
    nameEn: "Pearl White",
    hex: "#f0ede8",
    image: "/images/color-white.jpg",
    featured: false,
  },
  {
    name: "オリーブグリーン",
    nameEn: "Olive Green",
    hex: "#6b7c4e",
    image: "/images/color-olive.jpg",
    featured: false,
  },
]

export function ColorsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = colorOptions[selectedIndex]

  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            Colors
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-16">
            暮らしに馴染む、4つの色。
          </h2>
        </ScrollReveal>

        <div className="relative aspect-[16/9] w-full overflow-hidden mb-8 bg-[hsl(var(--warm-beige))]">
          <Image
            src={selected.image || "/placeholder.svg"}
            alt={`MOPERO 4U ${selected.name}`}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex items-center justify-center gap-6 mb-4">
          {colorOptions.map((color, index) => (
            <button
              key={color.nameEn}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`group flex flex-col items-center gap-2 transition-opacity ${
                selectedIndex === index ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
              aria-label={`${color.name}を選択`}
            >
              <span
                className={`block w-8 h-8 rounded-full border-2 transition-colors ${
                  selectedIndex === index
                    ? "border-foreground"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs text-foreground hidden md:block">
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
