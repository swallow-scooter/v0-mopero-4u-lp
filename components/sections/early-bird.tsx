"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Sparkles, Flame, Clock, Users } from "lucide-react"

interface DiscountTier {
  discount: number
  quantity: number
  price: number
  badge?: {
    label: string
    type: "best" | "popular" | "limited"
  }
  isFeatured?: boolean
}

const discountTiers: DiscountTier[] = [
  {
    discount: 45,
    quantity: 12,
    price: 104390,
    badge: { label: "最安", type: "best" },
    isFeatured: true,
  },
  {
    discount: 35,
    quantity: 40,
    price: 123370,
    badge: { label: "人気", type: "popular" },
  },
  {
    discount: 32,
    quantity: 80,
    price: 129064,
  },
  {
    discount: 30,
    quantity: 100,
    price: 132860,
  },
  {
    discount: 25,
    quantity: 100,
    price: 142350,
  },
  {
    discount: 20,
    quantity: 120,
    price: 151840,
    badge: { label: "残りわずか", type: "limited" },
  },
]

const regularPrice = 189800

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ja-JP").format(price)
}

function BadgeIcon({ type }: { type: "best" | "popular" | "limited" }) {
  switch (type) {
    case "best":
      return <Sparkles className="w-3 h-3" />
    case "popular":
      return <Flame className="w-3 h-3" />
    case "limited":
      return <Clock className="w-3 h-3" />
  }
}

function getBadgeStyles(type: "best" | "popular" | "limited"): string {
  switch (type) {
    case "best":
      return "bg-[hsl(var(--highlight))] text-white"
    case "popular":
      return "bg-[hsl(var(--charcoal))] text-white"
    case "limited":
      return "bg-amber-500 text-white"
  }
}

export function EarlyBirdSection() {
  return (
    <div className="mb-24">
      {/* Section Header */}
      <ScrollReveal direction="up" delay={300}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--highlight))] text-white text-xs font-medium tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            数量限定
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            早割プラン
          </h3>
          <p className="text-sm text-[hsl(var(--soft-brown))] max-w-md mx-auto leading-relaxed">
            クラウドファンディング方式で、<br className="sm:hidden" />
            早いほどお得にご購入いただけます。
          </p>
        </div>
      </ScrollReveal>

      {/* Discount Tiers Grid */}
      <ScrollReveal direction="up" delay={400}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {discountTiers.map((tier, index) => (
            <div
              key={tier.discount}
              className={`relative p-4 md:p-6 transition-all ${
                tier.isFeatured
                  ? "bg-[hsl(var(--charcoal))] text-white col-span-2 md:col-span-1 ring-2 ring-[hsl(var(--highlight))] ring-offset-2 ring-offset-[hsl(var(--warm-white))]"
                  : "bg-background"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className={`absolute -top-2.5 left-4 inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-medium tracking-wide ${getBadgeStyles(
                    tier.badge.type
                  )}`}
                >
                  <BadgeIcon type={tier.badge.type} />
                  {tier.badge.label}
                </div>
              )}

              {/* Discount Percentage */}
              <div className={`mb-3 ${tier.badge ? "mt-2" : ""}`}>
                <span
                  className={`text-3xl md:text-4xl font-serif leading-none ${
                    tier.isFeatured ? "text-[hsl(var(--highlight))]" : "text-[hsl(var(--highlight))]"
                  }`}
                >
                  {tier.discount}%
                </span>
                <span
                  className={`text-base md:text-lg font-serif ml-0.5 ${
                    tier.isFeatured ? "text-[hsl(var(--highlight))]" : "text-[hsl(var(--highlight))]"
                  }`}
                >
                  OFF
                </span>
              </div>

              {/* Price */}
              <p
                className={`text-lg md:text-xl font-medium mb-2 ${
                  tier.isFeatured ? "text-white" : "text-foreground"
                }`}
              >
                {"\u00A5"}{formatPrice(tier.price)}
                <span
                  className={`text-xs font-normal ml-1 ${
                    tier.isFeatured
                      ? "text-white/70"
                      : "text-[hsl(var(--soft-brown))]"
                  }`}
                >
                  税込
                </span>
              </p>

              {/* Quantity */}
              <div
                className={`flex items-center gap-1.5 text-xs ${
                  tier.isFeatured
                    ? "text-white/80"
                    : "text-[hsl(var(--soft-brown))]"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>限定 {tier.quantity}台</span>
              </div>

              {/* Featured indicator */}
              {tier.isFeatured && (
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-xs text-white/80">
                    最大 {"\u00A5"}{formatPrice(regularPrice - tier.price)} お得
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Progress Indicator */}
      <ScrollReveal direction="up" delay={500}>
        <div className="mt-8 p-5 bg-background">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-[hsl(var(--soft-brown))] font-medium">
              販売の流れ
            </p>
            <p className="text-xs text-[hsl(var(--highlight))] font-medium">
              3月14日 12:00 販売開始
            </p>
          </div>
          <div className="flex items-center gap-1">
            {discountTiers.map((tier, index) => (
              <div
                key={tier.discount}
                className="flex-1 h-2 bg-[hsl(var(--warm-beige))] relative overflow-hidden"
                style={{
                  flex: tier.quantity,
                }}
              >
                {index === 0 && (
                  <div className="absolute inset-0 bg-[hsl(var(--highlight))] opacity-30" />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-[10px] text-[hsl(var(--soft-brown))]">
              45%OFF
            </p>
            <p className="text-[10px] text-[hsl(var(--soft-brown))]">
              20%OFF
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
