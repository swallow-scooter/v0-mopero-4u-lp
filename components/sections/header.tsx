"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "特徴", href: "#features" },
    { label: "試乗会", href: "#trial" },
    { label: "価格", href: "#price" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(var(--warm-white))]/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span
            className={`text-sm font-medium tracking-widest transition-colors ${
              scrolled ? "text-foreground" : "text-[hsl(var(--warm-white))]"
            }`}
          >
            SWALLOW
          </span>
          <span
            className={`text-xs tracking-wide transition-colors ${
              scrolled ? "text-[hsl(var(--soft-brown))]" : "text-[hsl(var(--warm-white))]/60"
            }`}
          >
            MOPERO 4U
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-wide transition-colors ${
                scrolled
                  ? "text-[hsl(var(--soft-brown))] hover:text-foreground"
                  : "text-[hsl(var(--warm-white))]/70 hover:text-[hsl(var(--warm-white))]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#price"
            className={`inline-flex items-center justify-center px-5 py-2 text-xs font-medium tracking-wide transition-colors ${
              scrolled
                ? "bg-foreground text-[hsl(var(--warm-white))] hover:bg-foreground/90"
                : "bg-[hsl(var(--warm-white))] text-[hsl(var(--charcoal))] hover:bg-[hsl(var(--warm-beige))]"
            }`}
          >
            公式LINE登録でお知らせを受ける
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {menuOpen ? (
            <X className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-[hsl(var(--warm-white))]"}`} />
          ) : (
            <Menu className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-[hsl(var(--warm-white))]"}`} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(var(--warm-white))] border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#price"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-5 py-3 bg-foreground text-[hsl(var(--warm-white))] text-sm font-medium tracking-wide"
          >
            公式LINE登録でお知らせを受ける
          </a>
        </div>
      )}
    </header>
  )
}
