"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    question: "免許は必要ですか？",
    answer:
      "免許は不要です。MOPERO 4Uは「特定小型原動機付自転車」に該当し、16歳以上であればどなたでも運転できます。",
  },
  {
    question: "ヘルメットは必要ですか？",
    answer:
      "ヘルメットの着用は努力義務です。法律上は必須ではありませんが、安全のため着用を推奨しています。",
  },
  {
    question: "公道を走れますか？",
    answer:
      "はい、公道走行が可能です。車道のほか、時速6km以下の歩道モードを搭載しており、自転車通行可の歩道も走行できます。走行にはナンバープレートの取得と自賠責保険への加入が必要です。",
  },
  {
    question: "ナンバープレートはどうやって取得しますか？",
    answer:
      "お住まいの市区町村の役所で無料で取得できます。販売証明書・本人確認書類・印鑑をお持ちいただくだけで、その場で発行されます。詳しい手順は購入時にご案内いたします。",
  },
  {
    question: "自賠責保険はどこで加入できますか？",
    answer:
      "コンビニエンスストアやインターネットから簡単に加入できます。年間の保険料は数千円程度です。詳しくは保険会社・保険代理店にお問い合わせください。",
  },
  {
    question: "充電はどのように行いますか？",
    answer:
      "ご家庭のコンセント（100V）で充電できます。付属の専用充電器をコンセントに差し込むだけで簡単です。バッテリーは取り外し可能なので、車体から外して室内で充電することもできます。",
  },
  {
    question: "1回の充電でどのくらい走れますか？",
    answer:
      "フル充電で最大約50km走行可能です。通勤・通学や日常の買い物であれば、数日に1回の充電で十分お使いいただけます。",
  },
  {
    question: "充電にかかる電気代はどのくらいですか？",
    answer:
      "1回のフル充電にかかる電気代は約19円程度です（1kWhあたり31円で算出）。ガソリン代と比較して非常に経済的です。",
  },
  {
    question: "坂道でも走れますか？",
    answer:
      "はい、500Wのハイパワーモーターを搭載しているため、荷物を載せた状態でも坂道をしっかり登れます。体重65kgの乗車者で最大傾斜32%の登坂を確認しています。",
  },
  {
    question: "雨の日でも乗れますか？",
    answer:
      "多少の雨であれば走行可能ですが、大雨や路面が滑りやすい状況での走行はお控えください。また、充電時は必ず乾いた場所で行ってください。",
  },
  {
    question: "体重制限はありますか？",
    answer:
      "最大荷重は150kgです。高耐久のスチールフレームとハイパワーモーターにより、幅広い体格の方にご利用いただけます。",
  },
  {
    question: "家族で共有できますか？",
    answer:
      "はい、ハンドルとシートの高さを調整できるため、ご家族での共有に最適です。さらにパパ/ママモードで加速感を切り替えられるので、それぞれの方のペースに合わせてお乗りいただけます。",
  },
  {
    question: "購入後の修理・メンテナンスはどうすればよいですか？",
    answer:
      "全国のヨドバシカメラ・ビックカメラなどの提携店舗での修理のほか、出張修理・配送修理にも対応しています。カスタマーサポートはメール・電話で日本語対応いたします。",
  },
  {
    question: "保証はありますか？",
    answer:
      "はい、車体保証・バッテリー保証・パーツ供給保証の3つの保証をご用意しています。詳しい保証内容については、製品ページまたはカスタマーサポートまでお問い合わせください。",
  },
  {
    question: "購入前に試乗できますか？",
    answer:
      "はい、全国各地の家電量販店や直営会場で試乗会を定期開催しています。日程は公式LINEでお知らせしていますので、ぜひご登録ください。",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            FAQ
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-12">
            よくあるご質問
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left font-serif text-base md:text-lg text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
