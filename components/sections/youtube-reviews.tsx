"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Play } from "lucide-react"

const youtubeReviews = [
  {
    title: "マイクロモビリティ研究所",
    description: "特定小型原動機付自転車の専門チャンネルによる詳細レビュー",
    videoId: "wi8jQacvbpQ",
    thumbnail: `https://img.youtube.com/vi/wi8jQacvbpQ/maxresdefault.jpg`,
  },
  {
    title: "キックtheチャンネル",
    description: "実際の走行シーンを交えた使用感レビュー",
    videoId: "5MpOtM_AHNY",
    thumbnail: `https://img.youtube.com/vi/5MpOtM_AHNY/maxresdefault.jpg`,
  },
]

export function YoutubeReviewsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
            YouTube Reviews
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4">
            YouTuberによるレビュー
          </h2>
          <p className="text-sm md:text-base text-[hsl(var(--soft-brown))] tracking-wide mb-12 md:mb-16">
            実際に乗っていただいた方の声をご覧ください。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {youtubeReviews.map((review, index) => (
            <ScrollReveal key={review.videoId} direction="up" delay={200 + index * 100}>
              <a
                href={`https://www.youtube.com/watch?v=${review.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4 bg-muted">
                  <img
                    src={review.thumbnail}
                    alt={`${review.title}のレビュー動画サムネイル`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/40">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-2 group-hover:text-[hsl(var(--soft-brown))] transition-colors">
                  {review.title}
                </h3>
                <p className="text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
                  {review.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
