"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function YokohamaSection() {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-beige))]">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            Recognition
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-6">
            横浜市との実証実験を通じ改良を重ねました
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-10">
            SWALLOWは、横浜市経済局が実施する「戦略的な実証実験支援」事業に採択されました。中長期的な社会実装を目指す先端技術・サービスを対象とした本事業のもと、横浜市内の実証フィールドを活用し、MOPERO 4Uの走行性能の検証とユーザーフィードバックの収集を実施しました。本採択により、ターゲットユーザーの意見を収集できる環境が整い、より実用性の高い製品開発につなげました。
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300}>
          <div className="relative w-full aspect-[1734/718] mb-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/47192-27-6f9df33147bd92fb8cd9e4df9f488b7c-1734x718-wcXFsm1m8N5gaxzwxu4T0rRmBHP4jt.webp"
              alt="OPEN YOKOHAMAとSWALLOWの連携ロゴ"
              fill
              className="object-contain"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
