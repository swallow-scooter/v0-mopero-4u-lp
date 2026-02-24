"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const slides = [
  { src: "/images/hero-slide-1.jpg", alt: "公園のウッドデッキでMOPERO 4Uと佇む女性" },
  { src: "/images/hero-slide-2.jpg", alt: "歩道でMOPERO 4Uに寄り添う女性" },
  { src: "/images/hero-slide-3.jpg", alt: "ベーカリーの前でMOPERO 4Uとお買い物" },
  { src: "/images/hero-slide-4.jpg", alt: "ヘルメットを被りMOPERO 4Uで街を走る女性" },
]

const FADE_MS = 1800
const HOLD_MS = 5000

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const advance = useCallback(() => {
    setCurrent((c) => {
      setPrev(c)
      return (c + 1) % slides.length
    })
    timeoutRef.current = setTimeout(() => {
      setPrev(null)
    }, FADE_MS)
  }, [])

  useEffect(() => {
    const interval = setInterval(advance, HOLD_MS)
    return () => {
      clearInterval(interval)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [advance])

  return (
    <section className="relative min-h-[90vh] flex items-end pb-16 md:pb-24">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Previous slide fading out */}
        {prev !== null && (
          <div
            key={`prev-${prev}`}
            className="absolute inset-0"
            style={{
              animation: `heroFadeOut ${FADE_MS}ms ease-in-out forwards`,
            }}
          >
            <Image
              src={slides[prev].src}
              alt={slides[prev].alt}
              fill
              className="object-cover"
            />
          </div>
        )}
        {/* Current slide fading in */}
        <div
          key={`cur-${current}`}
          className="absolute inset-0"
          style={{
            animation: prev !== null ? `heroFadeIn ${FADE_MS}ms ease-in-out forwards` : undefined,
            opacity: prev !== null ? 0 : 1,
          }}
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,10%,18%)] via-[hsl(30,10%,18%)]/40 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes heroFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up" delay={200} duration={900}>
          <p className="text-[hsl(var(--warm-white))]/80 text-sm tracking-widest uppercase mb-4 font-sans font-light">
            SWALLOW / MOPERO 4U
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={400} duration={900}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[hsl(var(--warm-white))] leading-tight tracking-tight text-balance mb-6">
            {'あなたの次の'}
            <br />
            {'"こがない"自転車。'}
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={600} duration={900}>
          <p className="text-[hsl(var(--warm-white))]/70 text-base md:text-lg max-w-md leading-relaxed mb-10 font-light">
            こがずに走る。免許もいらない。
            <br />
            暮らしに静かになじむ、特定小型原付。
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={800} duration={900}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#trial"
              className="inline-flex items-center justify-center px-8 py-4 bg-[hsl(var(--warm-white))] text-[hsl(var(--charcoal))] text-sm font-medium tracking-wide hover:bg-[hsl(var(--warm-beige))] transition-colors"
            >
              試乗予約する
            </a>
            <a
              href="#price"
              className="inline-flex items-center justify-center px-8 py-4 border border-[hsl(var(--warm-white))]/30 text-[hsl(var(--warm-white))] text-sm font-medium tracking-wide hover:bg-[hsl(var(--warm-white))]/10 transition-colors"
            >
              価格を見る
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
