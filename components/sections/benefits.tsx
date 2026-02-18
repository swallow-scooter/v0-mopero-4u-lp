import { Check } from "lucide-react"

const benefits = [
  {
    label: "免許不要",
    description: "16歳以上なら誰でも乗れる",
  },
  {
    label: "駐輪場OK",
    description: "自転車と同じ場所に駐輪できる",
  },
  {
    label: "自転車道を走れる",
    description: "車道だけでなく自転車道も通行可能",
  },
  {
    label: "ヘルメットは努力義務",
    description: "自転車と同じ扱いで気軽に乗れる",
  },
  {
    label: "こがなくていい",
    description: "スロットルを回すだけで走行できる",
  },
  {
    label: "維持費が安い",
    description: "必要なのは自賠責保険のみ",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-beige))]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
          Benefits
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4">
          自転車のいいとこを残してもっと便利に
        </h2>
        <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-16 max-w-lg">
          MOPERO 4U は、自転車の手軽さはそのままに、
          電動ならではの快適さをプラスした新しい乗り物です。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <span className="flex items-center justify-center w-6 h-6 mt-0.5 shrink-0 bg-foreground rounded-full">
                <Check className="w-3.5 h-3.5 text-[hsl(var(--warm-white))]" strokeWidth={2.5} />
              </span>
              <div>
                <h3 className="font-serif text-base md:text-lg text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
