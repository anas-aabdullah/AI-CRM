import { publicAsset } from '../siteAssets'

/** Static demo data — replace with API responses after JWT auth + backend. */

const AVATAR_SLOTS = 8

/** Rotates through vendored SVGs in `public/assets/avatars/`. */
export function localLeaderboardAvatar(rowIndex: number) {
  const n = String((rowIndex % AVATAR_SLOTS) + 1).padStart(2, '0')
  return publicAsset(`assets/avatars/avatar-${n}.svg`)
}

export type CampaignOption = { id: string; label: string }

export const campaigns: CampaignOption[] = [
  { id: '1', label: 'Campaign 1' },
  { id: '2', label: 'Campaign 2' },
  { id: '3', label: 'Campaign 3' },
  { id: '10', label: 'Campaign 10' },
]

export const leaderboardStats = {
  totalPeople: 1000,
  yourPosition: 820,
  yourReferrals: 0,
} as const

export type LeaderboardUser = {
  id: string
  rank: number
  name: string
  avatarUrl: string
  rewards: string
}

const sampleNames = [
  'Aisha Khan',
  'Omar Ali',
  'Sara Ahmed',
  'Hassan Noor',
  'Fatima Raza',
  'Yusuf Malik',
  'Layla Joseph',
  'Ibrahim Karim',
  'Mariam Said',
  'Zayn Chowdhury',
  'Noor Hassan',
  'Khalid Omar',
  'Rania Saleh',
  'Tariq Nasser',
  'Dina Farouk',
  'Samir Aziz',
  'Leila Mahmoud',
  'Hadi Rahman',
  'Nadia Kamal',
  'Karim Fayed',
  'Yasmine Adel',
  'Omar Haddad',
  'Rami Said',
  'Huda Nassar',
  'Ziad Mourad',
]

/** Full leaderboard — table paginates 10 per page. */
export const leaderboardRows: LeaderboardUser[] = sampleNames.map(
  (name, i) => ({
    id: `u-${i + 1}`,
    rank: i + 1,
    name,
    avatarUrl: localLeaderboardAvatar(i),
    rewards: `${(1200 - i * 47).toLocaleString()} pts`,
  }),
)

export function referralLinkForCampaign(campaignId: string) {
  return `https://mabrook.app/ref/BROKER-${campaignId}-XK9Z`
}

export const referralLinkDemo = referralLinkForCampaign('10')
