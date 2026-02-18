import Image from "next/image"

const merits = [
  {
    number: "01",
    title: "またぎやすいV型フレーム",
    description:
      "低くまたぎやすいステップスルー設計で、スカートでも楽に乗り降りできます。",
  },
  {
    number: "02",
    title: "便利なLLワイドフロントバスケット",
    description:
      "大きめの荷物もすっぽり入るワイドサイズ。買い物帰りも安心です。",
  },
  {
    number: "03",
    title: '国内老舗メーカー開発「極み」やわらかサドル',
    description:
      "長時間の走行でもお尻が痛くなりにくい、こだわりのクッション設計。",
  },
  {
    number: "04",
    title: "坂道でふらつかないパワーモーターで安定走行",
    description:
      "上り坂でも力強いモーターがしっかりアシスト。ふらつかず安定して走れます。",
  },
  {
    number: "05",
    title: "服が汚れないチェーンレス構造",
    description:
      "チェーンがないから裾の巻き込みや油汚れの心配なし。お出かけ着でも安心。",
  },
  {
    number: "06",
    title: "サビにも衝撃にも強いモリブデン鋼フレーム",
    description:
      "高強度のモリブデン鋼を採用。雨の日でもサビに強く、長く使えます。",
  },
  {
    number: "07",
    title: "駐輪ラックに入る前輪すっきり設計",
    description:
      "一般的な駐輪ラックにそのまま入るサイズ。駐輪場所に困りません。",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-beige))]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
          Merit
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-6">
          自転車のいいとこを残してもっと便利に
        </h2>
        <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-12 max-w-lg">
          MOPERO 4U は毎日の暮らしに寄り添うために、
          細部までこだわり抜いた設計です。
        </p>

        {/* Product photo */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-16">
          <Image
            src="/images/merit-product.jpg"
            alt="MOPERO 4U サイドビュー - 各特徴ポイント"
            fill
            className="object-contain bg-[hsl(var(--warm-white))]"
          />
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {merits.map((item) => (
            <div key={item.number} className="flex items-start gap-4">
              <span className="font-serif text-2xl md:text-3xl text-foreground/15 leading-none mt-0.5 shrink-0 select-none">
                {item.number}
              </span>
              <div>
                <h3 className="font-serif text-base md:text-lg text-foreground mb-1 leading-snug">
                  {item.title}
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
