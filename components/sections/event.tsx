"use client"

export function EventSection() {
  const events = [
    {
      location: "横浜メディア発表会・試乗会",
      date: "2026年3月13日（金）",
      venue: "テックハブヨコハマ",
      reservations: 32,
    },
    {
      location: "東京（高円寺）試乗会",
      date: "2026年3月29日（土）",
      venue: "ジェイアール東日本都市開発 高架下空き倉庫",
      reservations: 18,
    },
    {
      location: "各地家電量販店試乗会",
      date: "詳しくは公式LINEにて通知いたします。",
      venue: "",
      reservations: 0,
    },
  ]

  return (
    <section id="trial" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
          Trial Event
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4">
          まずは、乗ってみてください。
        </h2>
        <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-16 max-w-lg">
          全国各地で試乗会・展示会を開催しています。
          実際に触って、乗って、確かめてください。
        </p>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.location}
              className="bg-[hsl(var(--warm-white))] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 justify-between"
            >
              <div className="flex-1">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  {event.location}
                </h3>
                <p className="text-sm text-[hsl(var(--soft-brown))]">
                  {event.date}{event.venue ? ` / ${event.venue}` : ""}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* 公式LINE登録 */}
        <div className="mt-16 text-center">
          <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-2">
            試乗会の最新情報やお得なキャンペーン情報をお届けします。
          </p>
          <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-8">
            お気軽にご登録ください。
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white text-sm font-medium tracking-wide rounded-lg hover:bg-[#05b64d] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            公式LINEに登録する
          </a>
        </div>
      </div>
    </section>
  )
}
