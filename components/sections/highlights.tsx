"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const highlights = [
  {
    title: "荷物を乗せても坂をスイスイ登れる",
    description:
      "パワフルなモーターが坂道でもしっかりサポート。買い物袋を載せたままでも、安定してスムーズに登れます。",
    image: "/images/highlight-hill.jpg",
    alt: "荷物を載せたまま坂道を楽に登る様子",
  },
  {
    title: "跨ぎやすいフレーム構造",
    description:
      "低くまたぎやすいステップスルー設計。スカートでもお子様の送り迎えでも、乗り降りがとてもスムーズです。",
    image: "/images/highlight-frame.jpg",
    alt: "低いフレームを楽にまたぐ様子",
  },
  {
    title: "長時間乗っても疲れない",
    description:
      "こだわりのやわらかサドルと自然な乗車姿勢で、長い距離でも身体への負担を軽減。快適な乗り心地が続きます。",
    image: "/images/highlight-comfort.jpg",
    alt: "リラックスして快適に走行する様子",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            Highlights
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-16">
            こだわりポイント
          </h2>
        </ScrollReveal>

        <div className="space-y-20">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} direction="up" delay={i * 100}>
              <div
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
              >
                <div className="relative aspect-[4/3] w-full md:w-1/2 overflow-hidden rounded-lg shrink-0">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground leading-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
