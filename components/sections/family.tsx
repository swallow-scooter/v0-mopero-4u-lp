"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FamilySection() {
  const features = [
    {
      title: "16歳以上なら免許不要",
      description: "お子さんからご両親まで、家族みんなで共有できます。",
    },
    {
      title: "シート高さ調整可能",
      description: "身長141cm以上で対応。家族それぞれの体格に合わせて調整できます。",
    },
    {
      title: "1台を家族でシェア",
      description: "通勤、買い物、通学。時間帯で使い分ければ、1台で家族の移動をカバー。",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <ScrollReveal direction="up">
              <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
                Family Share
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-8">
                家族みんなで使える。
              </h2>
            </ScrollReveal>
            <ul className="space-y-8">
              {features.map((feature) => (
                <li key={feature.title}>
                  <h3 className="text-sm font-medium text-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/family-commute.jpg"
                alt="MOPERO 4Uで通勤するイメージ"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 text-xs text-[hsl(var(--warm-white))] bg-foreground/60 px-2 py-0.5 rounded font-sans">
                通勤に
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/family-shopping.jpg"
                  alt="MOPERO 4Uで買い物するイメージ"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 text-xs text-[hsl(var(--warm-white))] bg-foreground/60 px-2 py-0.5 rounded font-sans">
                  買い物に
                </span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/family-school.jpg"
                  alt="MOPERO 4Uで通学するイメージ"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 text-xs text-[hsl(var(--warm-white))] bg-foreground/60 px-2 py-0.5 rounded font-sans">
                  通学に
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
