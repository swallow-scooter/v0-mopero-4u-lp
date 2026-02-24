"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal direction="left" duration={800}>
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/product-side.jpg"
                alt="MOPERO 4U に乗って街を走る女性"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
                Solution
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-6">
                そんなあなたのために、
                <br />
                作りました。
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <div className="space-y-4 text-[hsl(var(--soft-brown))] text-sm leading-relaxed">
                <p>
                  MOPERO 4Uは、電動自転車でもバイクでもありません。
                  自転車と同じ感覚で使えて、こがずに走れる。
                </p>
                <p>
                  免許不要。16歳以上なら誰でも。
                  ペダルの代わりに、アクセルをひねるだけ。
                </p>
                <p>
                  見た目も、サイズも、置き場所も。
                  自転車のある暮らしの延長線上にあります。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
