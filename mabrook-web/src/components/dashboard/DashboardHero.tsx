import { assets } from '../../siteAssets'

/**
 * Hero band — text left, illustration right (stacks on small screens).
 */
export function DashboardHero() {
  return (
    <section className="border-b border-line bg-[#f7fbff] py-10 sm:py-12">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-4 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:px-[120px]">
        <div className="max-w-xl flex-1">
          <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-black uppercase leading-[0.98] tracking-[-0.03em] text-brand">
            Start sharing to climb leaderboard
          </h1>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-brand">
            <span className="inline-flex size-4 items-center justify-center rounded-full border border-brand/30 text-[10px]">
              i
            </span>
            How it works
          </div>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand/80 sm:text-base">
            Share and get to the top. Invite friends using your referral invitation
            Snap App! Refer as many people as possible, and the top 5 on the
            leaderboard win 500 cash to invest.
          </p>
        </div>
        <div className="w-full max-w-[420px] shrink-0 lg:max-w-[470px]">
          <img
            src={assets.dashboardHero}
            alt=""
            className="aspect-4/3 w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
