export function Footer() {
  return (
    <footer className="py-12 bg-[hsl(var(--charcoal))] border-t border-[hsl(var(--warm-white))]/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-sm font-medium tracking-widest text-[hsl(var(--warm-white))]">
              SWALLOW
            </span>
            <p className="text-xs text-[hsl(var(--warm-white))]/40 mt-1">
              MOPERO 4U - 特定小型原動機付自転車
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-[hsl(var(--warm-white))]/50 hover:text-[hsl(var(--warm-white))]/80 transition-colors"
            >
              特定商取引法に基づく表記
            </a>
            <a
              href="#"
              className="text-xs text-[hsl(var(--warm-white))]/50 hover:text-[hsl(var(--warm-white))]/80 transition-colors"
            >
              プライバシーポリシー
            </a>
            <a
              href="#"
              className="text-xs text-[hsl(var(--warm-white))]/50 hover:text-[hsl(var(--warm-white))]/80 transition-colors"
            >
              会社概要
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[hsl(var(--warm-white))]/10">
          <p className="text-xs text-[hsl(var(--warm-white))]/30">
            {'© 2026 SWALLOW Inc. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
