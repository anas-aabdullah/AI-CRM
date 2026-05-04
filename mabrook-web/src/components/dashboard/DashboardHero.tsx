import { assets } from '../../siteAssets'

/**
 * Hero band — text left, illustration right (stacks on small screens).
 */
export function DashboardHero() {
  return (
    <section className="border-b border-line bg-linear-to-br from-surface-tint/80 via-white to-footer py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-[120px]">
        <div className="max-w-xl flex-1">
          <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-black uppercase leading-tight tracking-[-0.03em] text-brand">
            Start sharing to climb leaderboard
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand/85 sm:text-lg">
            Share your referral link with friends and colleagues. Every signup
            moves you up the leaderboard and unlocks more rewards through the
            Mabrook broker program.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            How it works
          </button>
        </div>
        <div className="w-full max-w-md shrink-0 lg:max-w-lg">
          <img
            src={assets.dashboardHero}
            alt=""
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-lg ring-1 ring-line"
          />
        </div>
      </div>
    </section>
  )
}
