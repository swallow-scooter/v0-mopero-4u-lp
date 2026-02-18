export function ComparisonSection() {
  const rows = [
    { label: "免許", bicycle: "不要", mopero: "不要", scooter: "必要" },
    { label: "こぐ必要", bicycle: "あり", mopero: "なし", scooter: "なし" },
    { label: "ヘルメット", bicycle: "努力義務", mopero: "努力義務", scooter: "必須" },
    { label: "駐輪場", bicycle: "利用可", mopero: "利用可", scooter: "利用不可が多い" },
    { label: "走行場所", bicycle: "車道・自転車道", mopero: "車道・自転車道", scooter: "車道" },
    { label: "最高速度", bicycle: "制限なし", mopero: "20km/h", scooter: "30km/h" },
    { label: "維持費", bicycle: "ほぼなし", mopero: "自賠責のみ", scooter: "自賠責+任意" },
  ]

  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--warm-white))]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[hsl(var(--soft-brown))] text-xs tracking-widest uppercase mb-6 font-sans">
          Comparison
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-4">
          自転車と、ほとんど同じです。
        </h2>
        <p className="text-[hsl(var(--soft-brown))] text-sm leading-relaxed mb-12 max-w-lg">
          特定小型原付は、新しい乗り物ではありません。
          自転車の延長線上にある、もうひとつの選択肢です。
        </p>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-foreground/10">
                <th className="text-left py-4 pr-6 text-xs font-medium text-[hsl(var(--soft-brown))] uppercase tracking-wider w-1/4">
                  {""}
                </th>
                <th className="text-center py-4 px-4 text-xs font-medium text-[hsl(var(--soft-brown))] uppercase tracking-wider">
                  自転車
                </th>
                <th className="text-center py-4 px-4 text-xs font-medium text-foreground uppercase tracking-wider">
                  <span className="inline-block px-4 py-1.5 bg-foreground text-[hsl(var(--warm-white))] text-xs font-medium tracking-wider">
                    MOPERO 4U
                  </span>
                </th>
                <th className="text-center py-4 px-4 text-xs font-medium text-[hsl(var(--soft-brown))] uppercase tracking-wider">
                  原付バイク
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border"
                >
                  <td className="py-4 pr-6 text-sm font-medium text-foreground">
                    {row.label}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-[hsl(var(--soft-brown))]">
                    {row.bicycle}
                  </td>
                  <td className="py-4 px-4 text-center text-sm font-medium text-foreground bg-foreground/[0.03]">
                    {row.mopero}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-[hsl(var(--soft-brown))]">
                    {row.scooter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
