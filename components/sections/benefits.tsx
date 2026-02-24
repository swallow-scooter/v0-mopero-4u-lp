"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const merits = [
  {
    number: "01",
    title: "またぎやすいV型フレーム",
    description:
      "低くまたぎやすいステップスルー設計で、スカートでも楽に乗り降りできます。",
    image: "/images/merit-01-vframe.jpg",
    alt: "またぎやすいV型フレーム",
  },
  {
    number: "02",
    title: "便利なLLワイドフロントバスケット",
    description:
      "大きめの荷物もすっぽり入るワイドサイズ。買い物帰りも安心です。",
    image: "/images/merit-02-basket.jpg",
    alt: "ワイドフロントバスケットに荷物を入れた様子",
  },
  {
    number: "03",
    title: '国内老舗メーカー開発「極み」やわらかサドル',
    description:
      "長時間の走行でもお尻が痛くなりにくい、こだわりのクッション設計。",
    image: "/images/merit-03-saddle.jpg",
    alt: "極みやわらかサドルのクローズアップ",
  },
  {
    number: "04",
    title: "坂道でふらつかないパワーモーターで安定走行",
    description:
      "上り坂でも力強いモーターがしっかりアシスト。ふらつかず安定して走れます。",
    image: "/images/merit-04-motor.jpg",
    alt: "坂道を安定して走行する様子",
  },
  {
    number: "05",
    title: "服が汚れないチェーンレス構造",
    description:
      "チェーンがないから裾の巻き込みや油汚れの心配なし。お出かけ着でも安心。",
    image: "/images/merit-05-chainless.jpg",
    alt: "チェーンレス構造のクローズアップ",
  },
  {
    number: "06",
    title: "振動を感じにくいスチールフレーム",
    description:
      "路面の凹凸による振動をしなやかに吸収するスチールフレームを採用。長時間の走行でも手や腕が疲れにくく、快適な乗り心地です。",
    image: "/images/merit-06-frame.jpg",
    alt: "振動を吸収するスチールフレーム",
  },
  {
    number: "07",
    title: "駐輪ラックに入る前輪すっきり設計",
    description:
      "一般的な駐輪ラックにそのまま入るサイズ。駐輪場所に困りません。",
    image: "/images/merit-07-parking.jpg",
    alt: "駐輪ラックに収まる前輪設計",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-beige))]">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            Merit
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-6">
            自転車のいいとこを残してもっと便利に
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-12 max-w-lg">
            MOPERO 4U は毎日の暮らしに寄り添うために、
            細部までこだわり抜いた設計です。
          </p>
        </ScrollReveal>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {merits.map((item) => (
            <div key={item.number} className="flex flex-col">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 font-serif text-xs text-[hsl(var(--warm-white))] bg-foreground/60 px-2 py-0.5 rounded">
                  {item.number}
                </span>
              </div>
              <h3 className="font-serif text-base md:text-lg text-foreground mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
