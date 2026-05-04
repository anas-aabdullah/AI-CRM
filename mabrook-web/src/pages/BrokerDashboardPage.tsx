import { useMemo, useState } from 'react'
import { CampaignReferralSection } from '../components/dashboard/CampaignReferralSection'
import { DashboardHeader } from '../components/dashboard/DashboardHeader'
import { DashboardHero } from '../components/dashboard/DashboardHero'
import { LeaderboardStatsCards } from '../components/dashboard/LeaderboardStatsCards'
import { LeaderboardTable } from '../components/dashboard/LeaderboardTable'
import { MyCampaignsSection } from '../components/dashboard/MyCampaignsSection'
import { Footer } from '../components/layout/Footer'
import {
  campaigns,
  leaderboardRows,
  leaderboardStats,
  referralLinkForCampaign,
} from '../data/brokerDashboard.mock'

const PAGE_WRAP =
  'flex min-h-svh w-full max-w-full flex-col overflow-x-hidden bg-white'

/**
 * Broker dashboard — post-login shell (wire JWT + route guard when backend is ready).
 */
export function BrokerDashboardPage() {
  const [campaignId, setCampaignId] = useState(
    () => campaigns.find((c) => c.id === '10')?.id ?? campaigns[0]?.id ?? '',
  )

  const selectedLabel = useMemo(
    () => campaigns.find((c) => c.id === campaignId)?.label ?? 'Campaign',
    [campaignId],
  )

  const referralUrl = referralLinkForCampaign(campaignId)

  return (
    <div className={PAGE_WRAP}>
      <DashboardHeader />
      <main className="flex-1">
        <DashboardHero />
        <MyCampaignsSection
          campaigns={campaigns}
          value={campaignId}
          onChange={setCampaignId}
        />
        <CampaignReferralSection
          campaignTitle={selectedLabel}
          referralUrl={referralUrl}
        />
        <LeaderboardStatsCards stats={leaderboardStats} />
        <LeaderboardTable rows={leaderboardRows} />
      </main>
      <Footer />
    </div>
  )
}
