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
  Store,
  Wallet,
  Building2,
  Smartphone,
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

const paymentMethods = [
  {
    icon: CreditCard,
    text: "クレジットカード",
  },
  {
    icon: Building2,
    text: "銀行振込",
  },
  {
    icon: Wallet,
    text: "ペイディ（後払い）",
  },
  {
    icon: Smartphone,
    text: "Google Pay",
  },
  {
    icon: Smartphone,
    text: "PayPay",
  },
]

export function PurchaseGuideSection() {
  return (
    <section id="price" className="py-24 md:py-40 bg-[hsl(var(--warm-white))]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-8 font-sans text-center">
            Price
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-20 text-center">
            特別価格でお届けします。
          </h2>
        </ScrollReveal>

        {/* Price Cards - 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-24">
          {/* Main Card - Official Online Store */}
          <ScrollReveal direction="up" delay={150}>
            <div className="bg-background p-8 md:p-10 lg:p-12 h-full flex flex-col">
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))] text-xs font-medium tracking-wider">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--highlight))] rounded-full" />
                  公式オンラインストア限定
                </span>
              </div>

              {/* Regular Price */}
              <p className="text-sm text-[hsl(var(--soft-brown))] mb-1">
                通常価格
              </p>
              <p className="text-lg text-[hsl(var(--soft-brown))] line-through mb-8">
                {'¥189,800（税込）'}
              </p>

              {/* Discount Badge */}
              <div className="mb-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-serif text-[hsl(var(--highlight))] leading-none">
                  {'45%〜20%'}
                </span>
                <span className="text-2xl md:text-3xl font-serif text-[hsl(var(--highlight))] ml-1">
                  OFF
                </span>
              </div>

              {/* Sale Price */}
              <p className="text-3xl md:text-4xl font-serif text-foreground mb-2">
                {'¥104,390'}
                <span className="text-base font-sans text-[hsl(var(--soft-brown))] ml-1">（税込）〜</span>
              </p>
              <p className="text-xs text-[hsl(var(--soft-brown))] mb-6">
                配送の場合には別途送料がかかります
              </p>

              {/* Urgency Message */}
              <div className="mt-auto pt-6 border-t border-border">
                <p className="text-sm text-foreground font-medium mb-2">
                  数量限定、早いほどお得にご購入いただけます。
                </p>
                <p className="text-xs text-[hsl(var(--soft-brown))] leading-relaxed">
                  最もお得な45%〜20%OFFの早割価格は公式オンラインストア限定です。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Sub Card - Retail Stores */}
          <ScrollReveal direction="up" delay={250}>
            <div className="bg-[hsl(var(--warm-beige))] p-8 md:p-10 lg:p-12 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-background">
                  <Store className="w-6 h-6 text-[hsl(var(--soft-brown))]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                量販店・販売店
              </h3>

              {/* Description */}
              <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-2">
                お近くのSWALLOW製品取り扱い店舗でもご予約いただけます。
              </p>
              <a 
                href="https://swallow-scooter.com/pages/dealers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-[hsl(var(--highlight))] underline hover:opacity-80 transition-opacity mb-8 inline-block"
              >
                販売店一覧はこちら
              </a>

              {/* Discount Info */}
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-serif text-foreground leading-none">
                  20%
                </span>
                <span className="text-lg font-serif text-foreground ml-1">
                  OFF
                </span>
              </div>

              {/* Date */}
              <div className="mt-auto pt-6 border-t border-[hsl(var(--border))]">
                <div className="flex items-center gap-2 text-[hsl(var(--soft-brown))]">
                  <Calendar className="w-4 h-4" />
                  <p className="text-sm">
                    3月14日より予約受付開始予定
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* Purchase Guide - Narrower Container */}
      <div className="max-w-3xl mx-auto px-6">
        {/* Purchase Guide Header */}
        <ScrollReveal direction="up" delay={250}>
          <h3 className="font-serif text-xl md:text-2xl text-foreground leading-tight text-balance mb-4 text-center">
            公式オンラインストアでの予約方法
          </h3>
          <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-12 text-center">
            予約開始前にご確認ください
          </p>
        </ScrollReveal>

        {/* STEP 1: 予約購入の流れ */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))]">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[hsl(var(--highlight))] font-medium tracking-wider">STEP 1</span>
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
              {/* LINE配信案内 */}
              <div className="mt-6 p-5 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))] text-center">
                <p className="text-sm leading-relaxed">
                  予約販売ページのURLはまもなく公開されます。公開まで今しばらくお待ちください。
                </p>
              </div>

              {/* ご注意 */}
              <div className="mt-6 bg-[#FEF3C7] border border-[#F59E0B] p-5">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-[#B45309] flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-[#92400E]">ご注意</p>
                </div>
                <div className="space-y-4 pl-8">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#B45309] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-[#B45309]">納車時期：2026年6月下旬以降順次発送</p>
                      <p className="text-xs text-[#B45309] mt-0.5">※生産状況により遅延する場合があります</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-[#B45309] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#B45309]">受注生産のため決済後のキャンセル・カラー変更はできません</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* STEP 2: 本人確認について */}
        <ScrollReveal direction="up" delay={350}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))]">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[hsl(var(--highlight))] font-medium tracking-wider">STEP 2</span>
                <h3 className="font-serif text-lg md:text-xl text-foreground">本人確認について</h3>
              </div>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed mb-4">
                特定小型原付は発送前に本人確認を行うことが必須となっています。
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

        {/* STEP 3: 納車後の手続き */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--charcoal))] text-[hsl(var(--warm-white))]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[hsl(var(--highlight))] font-medium tracking-wider">STEP 3</span>
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

        {/* 補足情報: 購入前の準備と決済方法 */}
        <ScrollReveal direction="up" delay={450}>
          <div className="mt-16 pt-10 border-t border-border">
            <h4 className="font-serif text-lg md:text-xl text-foreground text-center mb-8">
              購入についての補足情報
            </h4>
            
            {/* 購入前の準備 */}
            <div className="bg-background p-6 md:p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--warm-beige))]">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--charcoal))]" />
                </div>
                <h5 className="font-serif text-base md:text-lg text-foreground">購入前の準備</h5>
              </div>
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
                  ※<a 
                    href="https://swallow-scooter.com/account/register" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-[hsl(var(--charcoal))] transition-colors"
                  >SWALLOWアカウント</a>を事前に作成し住所登録しておくとスムーズに購入できます
                </p>
              </div>
            </div>

            {/* 決済方法 */}
            <div className="bg-background p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--warm-beige))]">
                  <CreditCard className="w-5 h-5 text-[hsl(var(--charcoal))]" />
                </div>
                <h5 className="font-serif text-base md:text-lg text-foreground">決済方法について</h5>
              </div>
              <p className="text-sm text-[hsl(var(--soft-brown))] mb-6">
                公式オンラインストアでの決済方法は以下の通りです。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {paymentMethods.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-[hsl(var(--warm-beige))]">
                      <item.icon className="w-5 h-5 text-[hsl(var(--charcoal))]" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              {/* 注意ボックス */}
              <div className="p-5 bg-[#FEF3C7] border border-[#F59E0B]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#B45309] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#92400E] mb-1">ご注意</p>
                    <p className="text-sm text-[#B45309] leading-relaxed">
                      予約は<span className="font-bold">オンラインでの決済完了をもって受付</span>となります。<br />
                      お電話や店頭での予約受付は行っておりませんのでご了承ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
