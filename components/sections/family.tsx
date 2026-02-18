import Image from "next/image"

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
            <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
              Family Share
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-8">
              家族みんなで、1台を。
            </h2>
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
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/family-use.jpg"
              alt="家族でMOPERO 4Uを共有する様子"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
