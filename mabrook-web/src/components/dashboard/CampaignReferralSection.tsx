import { useState } from 'react'
import {
  IconGoogle,
  IconLinkedIn,
  IconTelegram,
} from '../auth/SocialProviderIcons'

type Props = {
  campaignTitle: string
  referralUrl: string
}

export function CampaignReferralSection({
  campaignTitle,
  referralUrl,
}: Props) {
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(referralUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="campaign"
      className="scroll-mt-24 border-b border-line bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        <h2 className="text-xl font-bold text-brand sm:text-2xl">
          {campaignTitle}
        </h2>

        <div className="mt-6 flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-stretch">
          <label className="sr-only" htmlFor="referral-link">
            Referral link
          </label>
          <input
            id="referral-link"
            readOnly
            value={referralUrl}
            className="h-12 min-w-0 flex-1 rounded-xl border border-line bg-footer px-4 text-sm text-brand"
          />
          <button
            type="button"
            onClick={copyLink}
            className="h-12 shrink-0 rounded-xl bg-brand px-6 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        <p className="mt-3 text-sm text-brand/70">
          Share this link — clicks and signups count toward your leaderboard
          position.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="w-full text-sm font-medium text-brand sm:w-auto">
            Share on
          </span>
          <div className="flex flex-wrap gap-3">
            {(
              [
                { label: 'Google', Icon: IconGoogle },
                { label: 'LinkedIn', Icon: IconLinkedIn },
                { label: 'Telegram', Icon: IconTelegram },
              ] as const
            ).map(({ label, Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={`Share on ${label}`}
                className="inline-flex size-12 items-center justify-center rounded-full border border-line bg-white text-brand shadow-sm transition hover:border-brand/30 hover:bg-brand/4"
              >
                <Icon className="size-6" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
