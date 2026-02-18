import { ShieldCheck, Lock, ParkingSquare } from "lucide-react"

export function TrustSection() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "性能等確認制度 適合",
      description:
        "国土交通省が定める保安基準に適合。公道を安全に走行できることを確認済みです。",
    },
    {
      icon: Lock,
      title: "NFCキーシステム",
      description:
        "スマートフォンや専用キーでロック解除。物理鍵の紛失リスクを減らし、セキュリティを向上。",
    },
    {
      icon: ParkingSquare,
      title: "駐輪ラック対応サイズ",
      description:
        "一般的な駐輪場のラックにそのまま停められます。マンションや駅前の駐輪場もOK。",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--charcoal))]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[hsl(var(--warm-white))]/50 text-xs tracking-widest uppercase mb-6 font-sans">
          Trust & Safety
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[hsl(var(--warm-white))] leading-tight text-balance mb-4">
          安心して乗れる、理由があります。
        </h2>
        <p className="text-[hsl(var(--warm-white))]/60 text-sm leading-relaxed mb-16 max-w-lg">
          MOPERO 4Uは「特定小型原動機付自転車」という、2023年7月に新設された車両区分に適合しています。
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.title} className="group">
              <item.icon
                className="w-6 h-6 text-[hsl(var(--warm-white))]/40 mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-sm font-medium text-[hsl(var(--warm-white))] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[hsl(var(--warm-white))]/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
