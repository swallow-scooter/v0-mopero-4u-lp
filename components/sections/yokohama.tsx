"use client"

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
            横浜市「戦略的な実証実験支援」事業に採択
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-10">
            SWALLOWは、横浜市経済局が実施する「戦略的な実証実験支援」事業に採択されました。中長期的な社会実装を目指す先端技術・サービスを対象とした本事業のもと、横浜市内の実証フィールドを活用し、MOPERO 4Uの次期モデルにおける走行性能の検証とユーザーフィードバックの収集を実施しています。
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300}>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-[hsl(var(--warm-white))] p-6">
              <p className="text-xs text-[hsl(var(--soft-brown))] tracking-widest uppercase mb-2 font-sans">
                目的
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                次期製品の性能検証およびフィードバック収集
              </p>
            </div>
            <div className="bg-[hsl(var(--warm-white))] p-6">
              <p className="text-xs text-[hsl(var(--soft-brown))] tracking-widest uppercase mb-2 font-sans">
                期間
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                2025年9月中旬〜11月中旬（予定）
              </p>
            </div>
            <div className="bg-[hsl(var(--warm-white))] p-6">
              <p className="text-xs text-[hsl(var(--soft-brown))] tracking-widest uppercase mb-2 font-sans">
                場所
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                横浜市内 実証フィールド
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={400}>
          <p className="text-xs text-[hsl(var(--soft-brown))] leading-relaxed border-t border-border pt-6">
            本採択により、公道走行要件を満たす前の段階からターゲットユーザーの意見を収集できる環境が整い、より実用性の高い製品開発につなげています。
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
