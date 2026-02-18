export function OperationSection() {
  const steps = [
    {
      number: "01",
      title: "ロックを外す",
      description: "鍵を回して、サークル錠を解除するだけ。自転車と同じ操作です。",
    },
    {
      number: "02",
      title: "スタンドを外す",
      description: "軽量設計のスタンドを足で軽く蹴り上げるだけ。力は要りません。",
    },
    {
      number: "03",
      title: "アクセルをひねる",
      description: "右手のグリップをゆっくりひねれば、静かに走り出します。",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
          How to Use
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4">
          操作は、たった3ステップ。
        </h2>
        <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-16 max-w-lg">
          特別な技術は必要ありません。自転車に乗れる方なら、すぐに使えます。
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="block text-5xl md:text-6xl font-serif text-foreground/10 mb-4">
                {step.number}
              </span>
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
