type Stats = {
  totalPeople: number
  yourPosition: number
  yourReferrals: number
}

type Props = { stats: Stats }

export function LeaderboardStatsCards({ stats }: Props) {
  const cards = [
    {
      label: 'Current count of people',
      value: `#${stats.totalPeople.toLocaleString()}`,
    },
    {
      label: 'Your current position',
      value: `#${stats.yourPosition.toLocaleString()}`,
    },
    {
      label: 'Your referrals',
      value: String(stats.yourReferrals),
    },
  ] as const

  return (
    <section className="border-b border-line bg-footer py-10 sm:py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-brand/70">{c.label}</p>
              <p className="mt-3 text-3xl font-black tracking-tight text-brand">
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
