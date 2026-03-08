"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import {
  CheckCircle,
  ShoppingCart,
  AlertTriangle,
  UserCheck,
  FileText,
  Calendar,
  CreditCard,
  MapPin,
  Palette,
  Clock,
  XCircle,
  Truck,
  Shield,
  ExternalLink,
} from "lucide-react"

const preparationItems = [
  {
    icon: Palette,
    text: "カラーを決めておく",
  },
  {
    icon: MapPin,
    text: "配送先住所を事前登録",
  },
  {
    icon: CreditCard,
    text: "支払い方法を準備",
  },
]

const purchaseFlow = [
  {
    step: "1",
    title: "2026年3月14日 12:00",
    description: "予約販売ページがオープン",
  },
  {
    step: "2",
    title: "割引率とカラーを選択",
    description: "",
  },
  {
    step: "3",
    title: "ショッピングカートから決済画面へ",
    description: "",
  },
  {
    step: "4",
    title: "支払い方法と配送先を入力",
    description: "",
  },
  {
    step: "5",
    title: "注文完了",
    description: "",
  },
]

const postDeliveryItems = [
  {
    icon: FileText,
    text: "ナンバープレート取得",
  },
  {
    icon: Shield,
    text: "自賠責保険加入",
  },
]

export function PurchaseGuideSection() {
  return (
    <section id="purchase-guide" className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans text-center">
            Purchase Guide
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4 text-center">
            予約開始前に必ずご確認ください
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-12 text-center">
            スムーズに予約購入するためのガイド
          </p>
        </ScrollReveal>

        {/* STEP 1: 購入前の準備 */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[hsl(var(--highlight))] font-medium tracking-wider">STEP 1</span>
                <h3 className="font-serif text-lg md:text-xl text-foreground">購入前の準備</h3>
              </div>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className="text-sm text-[hsl(var(--soft-brown))] mb-6">
                購入前に以下を準備しておくとスムーズに購入できます。
              </p>
              <div className="space-y-4">
                {preparationItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--warm-beige))]">
                      <item.icon className="w-5 h-5 text-[hsl(var(--charcoal))]" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[hsl(var(--warm-beige))] border-l-4 border-[hsl(var(--highlight))]">
                <p className="text-xs text-[hsl(var(--soft-brown))] leading-relaxed">
                  ※SWALLOWアカウントを事前に作成し住所登録しておくとスムーズに購入できます
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* STEP 2: 予約購入の流れ */}
        <ScrollReveal direction="up" delay={250}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))]">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[hsl(var(--highlight))] font-medium tracking-wider">STEP 2</span>
                <h3 className="font-serif text-lg md:text-xl text-foreground">予約購入の流れ</h3>
              </div>
            </div>
            <div className="bg-background p-6 md:p-8">
              <div className="space-y-0">
                {purchaseFlow.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))] text-sm font-medium">
                        {item.step}
                      </div>
                      {i < purchaseFlow.length - 1 && (
                        <div className="w-px h-8 bg-border" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm text-foreground font-medium">{item.title}</p>
                      {item.description && (
                        <p className="text-xs text-[hsl(var(--soft-brown))] mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* 予約販売ページへのリンク（強調表示） */}
              <div className="mt-6 p-5 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))]">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-[hsl(var(--highlight))]" />
                  <p className="text-xs tracking-wider text-[hsl(var(--highlight))] font-medium">
                    2026年3月14日（土）12:00 オープン
                  </p>
                </div>
                <a
                  href="https://swallow-scooter.com/products/mopero-4u_3-14_preorder_start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[hsl(var(--highlight))] text-[hsl(var(--warm-white))] text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
                >
                  予約販売ページはこちら
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-[hsl(var(--warm-white))]/70 mt-3 text-center">
                  ※オープン前はページにアクセスできません
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* STEP 3: ご注意 */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[hsl(var(--highlight))] font-medium tracking-wider">STEP 3</span>
                <h3 className="font-serif text-lg md:text-xl text-foreground">ご注意</h3>
              </div>
            </div>
            <div className="bg-[#FEF3C7] border border-[#F59E0B] p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#FDE68A]">
                    <Clock className="w-5 h-5 text-[#B45309]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#92400E] mb-1">納車時期</p>
                    <p className="text-sm text-[#B45309]">2026年6月末予定</p>
                    <p className="text-xs text-[#B45309] mt-1">※生産状況により遅延する場合があります</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#FDE68A]">
                    <XCircle className="w-5 h-5 text-[#B45309]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#92400E] mb-1">キャンセル・変更</p>
                    <p className="text-sm text-[#B45309]">受託生産のため決済後のキャンセル・カラー変更はできません</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* STEP 4: 本人確認について */}
        <ScrollReveal direction="up" delay={350}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))]">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[hsl(var(--highlight))] font-medium tracking-wider">STEP 4</span>
                <h3 className="font-serif text-lg md:text-xl text-foreground">本人確認について</h3>
              </div>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-4">
                特定小型原付は発送前に本人確認を行うことが法律で義務付けられています。
              </p>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                購入完了メールに記載されている<br />
                <span className="font-medium">本人確認サイトから手続き</span>を行ってください。
              </p>
              <div className="p-4 bg-[hsl(var(--warm-beige))] border-l-4 border-[hsl(var(--highlight))]">
                <p className="text-xs text-[hsl(var(--highlight))] font-medium leading-relaxed">
                  ※本人確認が完了しない場合は発送できません
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* STEP 5: 納車後の手続き */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[hsl(var(--highlight))] font-medium tracking-wider">STEP 5</span>
                <h3 className="font-serif text-lg md:text-xl text-foreground">納車後の手続き</h3>
              </div>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className="text-sm text-[hsl(var(--soft-brown))] mb-6">
                車体到着後に以下の手続きを行ってください。
              </p>
              <div className="space-y-4 mb-6">
                {postDeliveryItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--warm-beige))]">
                      <item.icon className="w-5 h-5 text-[hsl(var(--charcoal))]" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://swallow-scooter.com/pages/startup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))] text-sm font-medium tracking-wide hover:bg-[hsl(var(--soft-brown))] transition-colors"
              >
                詳しい手続きはこちら
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
