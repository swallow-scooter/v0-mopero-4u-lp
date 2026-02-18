"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type RevealDirection = "up" | "down" | "left" | "right" | "none"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
  duration?: number
  distance?: string
  threshold?: number
  as?: "div" | "p" | "span" | "h1" | "h2" | "h3" | "ul" | "li"
}

const directionTransforms: Record<RevealDirection, string> = {
  up: "translateY(var(--reveal-distance, 24px))",
  down: "translateY(calc(-1 * var(--reveal-distance, 24px)))",
  left: "translateX(var(--reveal-distance, 24px))",
  right: "translateX(calc(-1 * var(--reveal-distance, 24px)))",
  none: "none",
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 700,
  distance = "24px",
  threshold = 0.15,
  as: Tag = "div",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold })

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn(className)}
      style={{
        "--reveal-distance": distance,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : directionTransforms[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms`,
        willChange: "opacity, transform",
      } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
