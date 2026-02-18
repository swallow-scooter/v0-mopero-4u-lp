import { Store, Truck, Wrench } from "lucide-react"

const repairOptions = [
  {
    icon: Store,
    title: "購入店で修理",
    description:
      "お買い求めいただいた販売店にお持ち込みいただければ、その場で点検・修理いたします。パーツ交換や軽微な不具合にも迅速に対応できます。",
    note: "※一部修理できない店舗もございます",
  },
  {
    icon: Truck,
    title: "配送修理",
    description:
      "お近くに販売店がない場合でも、配送にてお預かりし修理いたします。梱包・発送の手順もサポートスタッフが丁寧にご案内します。",
    note: "※送料がかかります",
  },
  {
    icon: Wrench,
    title: "出張修理",
    description:
      "ご自宅までスタッフが訪問し、その場で修理対応いたします。車体を運ぶ手間がなく、お忙しい方やご高齢の方にも安心のサービスです。",
    note: "※出張料がかかります",
  },
]

export function RepairSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
          Repair Support
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4">
          壊れたら、どこで修理できるの？
        </h2>
        <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-12 max-w-lg">
          購入後も安心してお使いいただけるよう、複数の修理ルートをご用意しています。
        </p>

        <p className="font-serif text-lg md:text-xl text-foreground leading-tight mb-8">
          安心の3段構え!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {repairOptions.map((option) => (
            <div
              key={option.title}
              className="bg-[hsl(var(--warm-white))] rounded-lg p-8 flex flex-col items-center text-center"
            >
              <option.icon
                className="w-8 h-8 text-foreground/30 mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-base md:text-lg text-foreground mb-3">
                {option.title}
              </h3>
              <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-3">
                {option.description}
              </p>
              <p className="text-xs text-[hsl(var(--soft-brown))]/70 leading-relaxed">
                {option.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
