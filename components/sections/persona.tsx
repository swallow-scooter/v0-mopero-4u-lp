"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const interviewLines = [
  {
    speaker: "スタッフ",
    text: "まず乗ってみて、よかったところって何かありますか？",
  },
  { speaker: "女性", text: "漕がなくていい。" },
  {
    speaker: "スタッフ",
    text: "普段から自転車に乗っていたりします？",
  },
  { speaker: "女性", text: "すごく乗ります。" },
  {
    speaker: "スタッフ",
    text: "自転車と比べて、漕がなくていいってなると、どういう使い道をしたいという意見はありますか？",
  },
  { speaker: "女性", text: "通勤ですね。" },
  {
    speaker: "スタッフ",
    text: "通勤ですと、だいたい何分ぐらいかかりますか？",
  },
  { speaker: "女性", text: "自転車で15分、20分ぐらいですね。" },
  {
    speaker: "スタッフ",
    text: "毎日ご苦労様です。通勤以外でも普通の自転車をお使いですか？",
  },
  {
    speaker: "女性",
    text: "もうとにかく通勤ですね。漕がなくていいのがすごく楽です。夏も自転車を漕ぐだけで暑くなるので、夏でも快適に行けるかなって思います。",
  },
]

export function PersonaSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            Interview
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-16">
            体験された方の声
          </h2>
        </ScrollReveal>

        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/interview-female.jpg"
              alt="30代女性がMOPERO 4Uを体験しインタビューに答える様子"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-xs text-[hsl(var(--soft-brown))] tracking-wide mb-2">
            女性インタビュー
          </p>
          <p className="font-serif text-sm text-foreground mb-8">
            [女性 30代]
          </p>

          <div className="space-y-6">
            {interviewLines.map((line, i) => (
              <div key={i} className="flex gap-4">
                <span
                  className={`shrink-0 text-xs font-sans tracking-wide pt-0.5 w-16 text-right ${
                    line.speaker === "スタッフ"
                      ? "text-[hsl(var(--soft-brown))]"
                      : "text-foreground font-medium"
                  }`}
                >
                  {line.speaker}
                </span>
                <p
                  className={`text-sm leading-relaxed ${
                    line.speaker === "スタッフ"
                      ? "text-[hsl(var(--soft-brown))]"
                      : "text-foreground"
                  }`}
                >
                  {line.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
