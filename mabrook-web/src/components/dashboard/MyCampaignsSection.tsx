import type { CampaignOption } from '../../data/brokerDashboard.mock'

type Props = {
  campaigns: CampaignOption[]
  value: string
  onChange: (campaignId: string) => void
}

export function MyCampaignsSection({ campaigns, value, onChange }: Props) {
  return (
    <section className="border-b border-line bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        <h2 className="text-xl font-bold tracking-tight text-brand sm:text-2xl">
          My campaigns
        </h2>
        <div className="relative mt-6 max-w-md">
          <label htmlFor="campaign-select" className="sr-only">
            Select campaign
          </label>
          <select
            id="campaign-select"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-12 w-full cursor-pointer appearance-none rounded-full border border-line bg-white px-5 pr-12 text-sm font-medium text-brand shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            {campaigns.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand/50">
            <svg
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  )
}
