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
    <section className="border-b border-line bg-white py-7 sm:py-8">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.label}
              className="rounded-xl border border-line bg-footer/55 p-5"
            >
              <p className="text-xs font-medium text-brand/70">{c.label}</p>
              <p className="mt-2 text-[34px] font-black leading-none tracking-tight text-brand">
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
