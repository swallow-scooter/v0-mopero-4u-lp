"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function OperationSection() {
  const steps = [
    {
      number: "01",
      title: "カード型キーをかざす",
      description: "付属のカードキーを本体にかざすだけで電源ON。鍵を差し込む手間もありません。",
      image: "/images/step-01-unlock.jpg",
      alt: "カード型キーを本体にかざす様子",
    },
    {
      number: "02",
      title: "スタンドを外す",
      description: "軽量設計のスタンドを足で軽く蹴り上げるだけ。力は要りません。",
      image: "/images/step-02-stand.jpg",
      alt: "スタンドを足で蹴り上げる様子",
    },
    {
      number: "03",
      title: "アクセルレバーを押す",
      description: "右のハンドルにあるアクセルレバーを押すと静かに走り出します。",
      image: "/images/step-03-throttle.jpg",
      alt: "アクセルレバーを親指で押す様子",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            How to Use
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4">
            操作は、たった3ステップ。
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-16 max-w-lg">
            特別な技術は必要ありません。自転車に乗れる方なら、すぐに使えます。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-5">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 font-serif text-xs text-[hsl(var(--warm-white))] bg-foreground/60 px-2 py-0.5 rounded">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
