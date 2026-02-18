export function PriceSection() {
  return (
    <section id="price" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
          Price
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-10">
          特別価格でお届けします。
        </h2>

        <div className="bg-[hsl(var(--warm-white))] p-8 md:p-12 inline-block w-full max-w-md">
          <p className="text-sm text-[hsl(var(--soft-brown))] mb-2">
            メーカー希望小売価格
          </p>
          <p className="text-lg text-[hsl(var(--soft-brown))] line-through mb-4">
            {'¥198,000（税込）'}
          </p>
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="inline-block px-3 py-1 bg-[hsl(var(--highlight))] text-[hsl(var(--warm-white))] text-xs font-medium tracking-wider">
              45% OFF
            </span>
          </div>
          <p className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-2">
            {'¥108,900'}
            <span className="text-lg font-sans text-[hsl(var(--soft-brown))]">（税込）</span>
          </p>
          <p className="text-xs text-[hsl(var(--soft-brown))] mb-8">
            送料無料 / 自賠責保険料別途
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full px-8 py-4 bg-foreground text-[hsl(var(--warm-white))] text-sm font-medium tracking-wide hover:bg-foreground/90 transition-colors"
          >
            公式LINE登録でお知らせを受ける
          </a>
        </div>
      </div>
    </section>
  )
}
