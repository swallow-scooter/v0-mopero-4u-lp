export function ClosingSection() {
  return (
    <section className="py-24 md:py-40 bg-[hsl(var(--charcoal))]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[hsl(var(--warm-white))] leading-tight tracking-tight text-balance mb-6">
          変わらなくていい。
          <br />
          楽になるだけでいい。
        </h2>
        <p className="text-[hsl(var(--warm-white))]/50 text-sm leading-relaxed max-w-md mx-auto mb-12">
          MOPERO 4Uは、あなたの暮らしを変えるものではありません。
          今の暮らしを、すこしだけ楽にするものです。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            購入する
          </a>
        </div>
      </div>
    </section>
  )
}
