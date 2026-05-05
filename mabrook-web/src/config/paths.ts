/** Central route paths — extend as new screens ship (backend can align API routes separately). */
export const paths = {
  home: '/',
  /** Broker / logged-in app shell (protect with auth in production). */
  dashboard: '/dashboard',
  campaigns: '/campaigns',
  campaignsCreate: '/campaigns/create',
  campaignDetail: (campaignId: string) => `/campaigns/${campaignId}`,
  campaignReferralDetail: (campaignId: string, referralId: string) =>
    `/campaigns/${campaignId}/referrals/${referralId}`,
  /** Account settings (profile, password) — same shell as broker app. */
  settings: '/settings',
  settingsChangePassword: '/settings/change-password',
  login: '/login',
  signup: '/signup',
  auth: {
    forgotPassword: '/recover-password',
    checkEmail: '/check-email',
    resetPassword: '/reset-password',
    emailConfirmed: '/email-confirmed',
  },
  legal: {
    agreements: '/legal/agreements',
    privacy: '/legal/privacy',
    complaints: '/complaints',
    vulnerability: '/legal/customer-vulnerability',
    cookies: '/legal/cookies',
  },
  business: {
    offers: '/business/offers',
    invest: '/business/invest',
    raiseFunds: '/business/raise-funds',
    creditCard: '/business/credit-card',
    mabrookTokens: '/business/mabrook-tokens',
    mabrookShares: '/business/mabrook-shares',
    liquidity: '/business/liquidity',
    benefits: '/business/benefits',
  },
} as const
