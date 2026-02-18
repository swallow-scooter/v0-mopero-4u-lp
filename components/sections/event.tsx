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
      </div>
    </section>
  )
}
