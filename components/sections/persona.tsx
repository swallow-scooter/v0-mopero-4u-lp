import Image from "next/image"

export function PersonaSection() {
  const personas = [
    {
      name: "田中さん（62歳）",
      image: "/images/persona-male.jpg",
      alt: "60代男性がMOPERO 4Uに乗っている様子",
      quote: "坂の多い街でも、買い物がおっくうじゃなくなった。",
      story:
        "定年後、車を手放した田中さん。近所のスーパーまでの坂道が億劫で、出かける回数が減っていた。MOPERO 4Uを使い始めてからは、毎日のように外に出るようになった。「こがなくていい」という安心感が、行動範囲を広げてくれた。",
    },
    {
      name: "鈴木さん（55歳）",
      image: "/images/persona-female.jpg",
      alt: "50代女性がMOPERO 4Uで買い物に出かける様子",
      quote: "自転車と同じ感覚で、でも全然疲れない。",
      story:
        "パート先まで片道3km。電動自転車を検討していたが、それでもこぐのは大変そう。免許は持っていないので原付も選べなかった。MOPERO 4Uなら免許不要で、自転車と同じ駐輪場に停められる。毎朝の通勤が楽しみになった。",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
          Stories
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-16">
          毎日が、すこし変わった人たち。
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {personas.map((persona) => (
            <div key={persona.name} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden mb-6">
                <Image
                  src={persona.image || "/placeholder.svg"}
                  alt={persona.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-[hsl(var(--soft-brown))] tracking-wide mb-2">
                {persona.name}
              </p>
              <blockquote className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-4">
                {`"${persona.quote}"`}
              </blockquote>
              <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                {persona.story}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
