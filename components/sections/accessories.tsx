"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

interface AccessoryItem {
  name: string
  description: string
  price: string
  note?: string
  image: string
  badge?: string
  category: string
}

interface WarrantyOption {
  years: number
  price: number
}

const accessories: AccessoryItem[] = [
  {
    category: "セキュリティ",
    name: "リング錠",
    description: "MOPERO 4Uのセキュリティを高める専用リングロック。",
    price: "5,000円",
    note: "※取り付け料金込み / 本体と同時購入のみ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%AA%E3%83%B3%E3%82%AF%E3%82%99%E9%8C%A0-removebg-HHcwd9ZLqgoRhcYcqBGLIDvTSwOZxf.png",
  },
  {
    category: "走行・充電",
    name: "予備バッテリー",
    description: "長距離移動や充電忘れの不安を解消。",
    price: "52,800円",
    note: "※送料別",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%8F%E3%82%99%E3%83%83%E3%83%86%E3%83%AA%E3%83%BC-removebg-QEO7rzwsqcbR7io3DJXvXTDSZY6EKk.png",
    badge: "20% OFF",
  },
  {
    category: "走行・充電",
    name: "予備充電器",
    description: "自宅用と職場用など複数設置に便利。",
    price: "5,600円",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%85%E9%9B%BB%E5%99%A8-removebg-Ng2IyOWgG9dq275CtH7pRqwNDOKGlS.png",
    badge: "20% OFF",
  },
  {
    category: "安全装備",
    name: "アーバンヘルメット",
    description: "丸みのあるやさしいデザインのヘルメット。",
    price: "6,800円",
    note: "※送料別",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-removebg-m29NtWrsF7fe84oOydnqaLfANZWlMH.png",
  },
  {
    category: "収納",
    name: "OGK製 大容量リアバスケット",
    description: "買い物や通勤バッグに便利な大型バスケット。",
    price: "3,000円",
    note: "※送料別",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%AA%E3%82%A2%E3%83%8F%E3%82%99%E3%82%B9%E3%82%B1%E3%83%83%E3%83%88-removebg-GGleDfmR89ghHCKMvnHxMGFppayEuz.png",
  },
]

const warrantyOptions: WarrantyOption[] = [
  { years: 1, price: 20878 },
  { years: 2, price: 34164 },
  { years: 3, price: 45552 },
]

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ja-JP").format(price)
}

export function AccessoriesSection() {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans text-center">
            Options
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-6 text-center">
            オプションアクセサリー
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-16 max-w-lg mx-auto text-center">
            MOPERO 4Uはライフスタイルに合わせてアクセサリーを追加できます。必要なものだけを選んで、あなた仕様の1台に。
          </p>
        </ScrollReveal>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accessories.map((item, index) => (
            <ScrollReveal key={item.name} direction="up" delay={100 + index * 50}>
              <div className="bg-background p-6 h-full flex flex-col">
                {/* Category Label */}
                <span className="text-[10px] text-[hsl(var(--soft-brown))] tracking-wider uppercase mb-4">
                  {item.category}
                </span>

                {/* Circular Image Container */}
                <div className="relative mx-auto mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-[hsl(var(--warm-beige))] flex items-center justify-center shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="object-contain w-24 h-24"
                    />
                  </div>
                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 px-2 py-1 bg-[hsl(var(--highlight))] text-[hsl(var(--warm-white))] text-[10px] font-medium tracking-wide rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col text-center">
                  <h3 className="font-serif text-base md:text-lg text-foreground mb-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <p className="text-lg font-medium text-foreground">
                    {item.price}
                    <span className="text-xs font-normal text-[hsl(var(--soft-brown))] ml-1">税込</span>
                  </p>
                  {item.note && (
                    <p className="text-[10px] text-[hsl(var(--soft-brown))] mt-2">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Extended Warranty Card */}
          <ScrollReveal direction="up" delay={350}>
            <div className="bg-background p-6 h-full flex flex-col">
              {/* Category Label */}
              <span className="text-[10px] text-[hsl(var(--soft-brown))] tracking-wider uppercase mb-4">
                延長保証
              </span>

              {/* Circular Image Container */}
              <div className="relative mx-auto mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-[hsl(var(--warm-beige))] flex items-center justify-center shadow-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BB%B6%E9%95%B7%E4%BF%9D%E8%A8%BC-removebg-preview-csaD3Aj5Umib9bZKh2P6hdwO1c8u0l.png"
                    alt="延長保証"
                    width={100}
                    height={100}
                    className="object-contain w-20 h-20"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col text-center">
                <h3 className="font-serif text-base md:text-lg text-foreground mb-2 leading-snug">
                  延長保証 MOPERO 4U専用
                </h3>
                <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-4 flex-1">
                  安心の延長保証プラン。長く安心してお使いいただけます。
                </p>
                
                {/* Warranty Options */}
                <div className="space-y-2">
                  {warrantyOptions.map((option) => (
                    <div
                      key={option.years}
                      className="flex items-center justify-between py-2 px-3 bg-[hsl(var(--warm-beige))] rounded"
                    >
                      <span className="text-sm text-foreground">
                        {option.years}年延長
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {formatPrice(option.price)}円
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Note */}
        <ScrollReveal direction="up" delay={400}>
          <p className="text-xs text-[hsl(var(--soft-brown))] text-center">
            ※一部オプションは本体と同時購入のみ対応
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
