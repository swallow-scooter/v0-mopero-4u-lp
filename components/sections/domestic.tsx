import Image from "next/image"

export function DomesticSection() {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
              Made by SWALLOW
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-6">
              国内企画・開発。
              <br />
              日本の道路のために。
            </h2>
            <div className="space-y-4 text-sm text-[hsl(var(--soft-brown))] leading-relaxed">
              <p>
                SWALLOWは、日本の特定小型原付市場に特化したメーカーです。
                企画・設計はすべて国内で行い、日本の道路環境と利用者のニーズに最適化しています。
              </p>
              <p>
                カスタマーサポートも国内拠点で対応。
                お電話やメールでのご相談に、日本語で丁寧にお応えします。
              </p>
              <p>
                海外メーカー製にありがちな「サポートが不安」「部品がない」といった問題とは無縁です。
              </p>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/images/swallow-office.jpg"
              alt="SWALLOWの国内開発拠点"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
