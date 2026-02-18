import { ArrowRight } from "lucide-react"

export function RepairSection() {
  const repairSteps = [
    {
      title: "販売店へ相談",
      description: "お近くの取扱販売店にご連絡ください。症状を確認し、最適な方法をご案内します。",
    },
    {
      title: "メーカー修理",
      description: "販売店で対応できない場合は、SWALLOWの修理センターで専門スタッフが対応します。",
    },
    {
      title: "発送修理",
      description: "お近くに販売店がない場合も安心。発送での修理対応も受け付けています。",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
          Repair Support
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4">
          壊れたら、どこで修理できるの？
        </h2>
        <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-16 max-w-lg">
          購入後も安心してお使いいただけるよう、複数の修理ルートをご用意しています。
        </p>

        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {repairSteps.map((step, index) => (
            <div key={step.title} className="flex-1 flex items-stretch">
              <div className="flex-1 bg-[hsl(var(--warm-white))] p-8 flex flex-col">
                <span className="text-xs text-[hsl(var(--soft-brown))] tracking-wider uppercase mb-4">
                  {`Step ${index + 1}`}
                </span>
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < repairSteps.length - 1 && (
                <div className="hidden md:flex items-center px-2">
                  <ArrowRight className="w-4 h-4 text-[hsl(var(--soft-brown))]/40" strokeWidth={1.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
