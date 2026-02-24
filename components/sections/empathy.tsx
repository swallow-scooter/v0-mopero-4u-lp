"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function EmpathySection() {
  const concerns = [
    "坂道がつらくなってきた",
    "車は大げさだけど、歩くには遠い",
    "電動自転車でも、こぐのがしんどい",
    "バイクは怖いし、免許もない",
    "買い物の帰り道、荷物が重い",
  ]

  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal direction="up" duration={800}>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <Image
              src="/images/empathy-uphill.jpg"
              alt="坂道で自転車を押して歩く女性"
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            こんな悩み、ありませんか？
          </p>
        </ScrollReveal>
        <ul className="space-y-5">
          {concerns.map((concern, i) => (
            <ScrollReveal key={concern} direction="up" delay={150 + i * 80}>
              <li className="flex items-start gap-4 text-foreground">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--highlight))] shrink-0" />
                <span className="font-serif text-lg md:text-xl leading-relaxed">
                  {concern}
                </span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-12 pt-10 border-t border-border">
            <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed max-w-lg">
              移動のたびに感じる、小さなストレス。
              <br />
              でも、それは仕方ないことだと思っていませんか。
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
