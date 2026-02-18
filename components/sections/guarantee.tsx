"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function GuaranteeSection() {
  const guarantees = [
    {
      title: "製品保証",
      period: "1年間",
      description:
        "通常使用での故障は無料修理。バッテリー、モーター、フレームなど主要部品をカバーします。",
    },
    {
      title: "延長保証",
      period: "最大3年",
      description:
        "有償の延長保証プランで、最大3年間まで保証期間を延長可能。長く安心してお使いいただけます。",
    },
    {
      title: "盗難補償",
      period: "1年間",
      description:
        "万が一の盗難にも対応。購入後1年以内の盗難に対し、優遇価格で新車をご提供します。",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            Guarantee
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-16">
            3つの保証で、購入後も安心。
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="bg-background p-8 flex flex-col"
            >
              <span className="text-xs text-[hsl(var(--soft-brown))] tracking-wider uppercase mb-4">
                {g.period}
              </span>
              <h3 className="font-serif text-xl text-foreground mb-4">
                {g.title}
              </h3>
              <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
