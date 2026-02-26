"use client"

import { ShieldCheck, Lock, ParkingSquare } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function TrustSection() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "性能等確認制度 申請中",
      description:
        "国土交通省が定める保安基準への適合に向けて、性能等確認制度に申請中です。",
      image: "/images/trust-certification.jpg",
      alt: "性能等確認制度の申請書類",
    },
    {
      icon: Lock,
      title: "大型リング錠と電子キーの二重ロック",
      description:
        "物理的な大型リング錠と電子キーによる電源管理のダブルセキュリティ。二重の防犯対策で盗難リスクを大幅に低減します。",
      image: "/images/trust-nfckey.jpg",
      alt: "大型リング錠と電子キーによる二重ロックシステム",
    },
    {
      icon: ParkingSquare,
      title: "駐輪ラック対応サイズ",
      description:
        "一般的な駐輪場のラックにそのまま停められます。マンションや駅前の駐輪場もOK。",
      image: "/images/trust-parking.jpg",
      alt: "監視カメラのある駐輪場に停めている様子",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--charcoal))]">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--warm-white))]/50 text-xs tracking-widest uppercase mb-6 font-sans">
            Trust & Safety
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[hsl(var(--warm-white))] leading-tight text-balance mb-4">
            安心して乗れる、理由があります。
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-[hsl(var(--warm-white))]/60 text-sm leading-relaxed mb-16 max-w-lg">
            MOPERO 4Uは「特定小型原動機付自転車」という、2023年7月に新設された車両区分に適合しています。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.title} className="group flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <item.icon
                className="w-6 h-6 text-[hsl(var(--warm-white))]/40 mb-4"
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
