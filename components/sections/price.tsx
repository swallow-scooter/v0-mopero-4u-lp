"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function PriceSection() {
  return (
    <section id="price" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            Price
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4">
            特別価格でお届けします。
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <p className="text-sm text-[hsl(var(--highlight))] leading-relaxed mb-10">
            特別先行予約価格でのご提供は数量限定および無くなり次第終了となります。
          </p>
        </ScrollReveal>

        <div className="bg-[hsl(var(--warm-white))] p-8 md:p-12 inline-block w-full max-w-md">
          <p className="text-sm text-[hsl(var(--soft-brown))] mb-2">
            通常価格
          </p>
          <p className="text-lg text-[hsl(var(--soft-brown))] line-through mb-4">
            {'¥189,800（税込）'}
          </p>
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="inline-block px-3 py-1 bg-[hsl(var(--highlight))] text-[hsl(var(--warm-white))] text-xs font-medium tracking-wider">
              45% OFF
            </span>
          </div>
          <p className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-2">
            {'¥104,390'}
            <span className="text-lg font-sans text-[hsl(var(--soft-brown))]">（税込）</span>
          </p>
          <p className="text-xs text-[hsl(var(--soft-brown))] mb-8">
            配送の場合には別途送料がかかります
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#06C755] text-white text-sm font-medium tracking-wide hover:bg-[#05b64d] transition-colors"
          >
            公式LINE登録でお知らせを受ける
          </a>
        </div>
      </div>
    </section>
  )
}
