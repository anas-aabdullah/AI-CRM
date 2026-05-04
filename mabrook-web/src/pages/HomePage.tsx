import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { assets } from '../siteAssets'

const PAGE_WRAP =
  'flex min-h-svh w-full max-w-full flex-col overflow-x-hidden bg-white shadow-[0_4px_2px_rgba(0,0,0,0.25)]'

/** Space below fixed marketing header (~72px bar + comfortable gap). */
const HERO_TOP =
  'pt-[5rem] sm:pt-[5.5rem] lg:pt-[7rem]'

/**
 * Marketing homepage — fixed transparent header over hero; scroll elevates the bar.
 */
export function HomePage() {
  return (
    <div className={PAGE_WRAP}>
      <Header variant="overlay" mode="marketing" />

      <section
        className="relative min-h-[min(100svh,800px)] w-full bg-surface-tint"
        aria-labelledby="hero-heading"
      >
        <HeroBackground />

        <div
          className={`relative z-10 mx-auto flex min-h-[min(100svh,800px)] max-w-[1440px] flex-col justify-center px-4 pb-16 sm:px-8 lg:px-[120px] lg:pb-24 ${HERO_TOP}`}
        >
          <div className="flex max-w-[553px] flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1
                id="hero-heading"
                className="font-sans text-[clamp(2.75rem,10vw,6rem)] font-black uppercase leading-[1.02] tracking-tighter text-brand drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)] max-md:drop-shadow-[0_2px_20px_rgba(255,255,255,1)]"
              >
                <span className="block">Mabrook</span>
                <span className="block">Rewards</span>
              </h1>
              <p className="max-w-xl rounded-2xl border border-white/40 bg-white/75 px-4 py-3 text-base font-medium leading-[1.4] tracking-[-0.01em] text-brand shadow-sm backdrop-blur-sm sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:backdrop-blur-none md:text-[18px]">
                Participate in our exclusive reward program and unlock a world of
                benefits tailored just for you!
              </p>
            </div>
            <Link
              to="/#halal-rewards"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-semibold tracking-[-0.01em] text-white shadow-md transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Learn More
              <img
                src={assets.arrowDown}
                alt=""
                className="size-5"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </section>

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <section
          id="halal-rewards"
          className="scroll-mt-24 bg-white"
          aria-labelledby="halal-heading"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-[120px] lg:py-20 lg:pt-[120px]">
            <div
              className="order-2 aspect-4/5 w-full max-w-[480px] shrink-0 rounded-3xl bg-surface-tint shadow-sm lg:order-1 lg:min-h-[600px] lg:w-[480px]"
              role="img"
              aria-label="Product illustration"
            />
            <div className="order-1 flex w-full max-w-[600px] flex-col gap-6 text-brand-ink lg:order-2 lg:gap-8">
              <h2
                id="halal-heading"
                className="text-[clamp(1.75rem,4vw,3rem)] font-black uppercase leading-tight tracking-[-0.03em]"
              >
                <span className="block">Earn and share</span>
                <span className="block">halal rewards</span>
              </h2>
              <p className="text-base font-normal leading-[1.4] tracking-[-0.01em] sm:text-[18px]">
                With loyalty program, companies can offer points or benefits to
                customers. And in return, they redeem points for discounts, free
                products, rewards, or insider perks. The goals is to motivate
                repeat purchase and build trust between customers and business.
              </p>
            </div>
          </div>
        </section>

        <section id="invest" className="scroll-mt-24 bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-[120px] lg:py-[120px]">
            <div className="flex w-full max-w-[600px] flex-col gap-6 text-brand-ink lg:order-1 lg:gap-8">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-black uppercase leading-tight tracking-[-0.03em]">
                Earn rewards and invest to earn more profits
              </h2>
              <p className="text-base font-normal leading-[1.4] tracking-[-0.01em] sm:text-[18px]">
                Mabrook brings the opportunity of continuous earnings and rewards
                for you. Join the community, earn rewards by bringing your friends
                and family on the platform and use your rewards to further invest
                into Mabrook and get the chance for amazing profits and perks.
              </p>
              <Link
                to="/signup"
                className="inline-flex w-fit items-center justify-center rounded-full bg-brand px-6 py-4 text-base font-semibold tracking-[-0.01em] text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Start now!
              </Link>
            </div>
            <div
              className="aspect-4/5 w-full max-w-[480px] shrink-0 rounded-3xl bg-surface-tint shadow-sm lg:order-2 lg:min-h-[600px] lg:w-[480px]"
              role="img"
              aria-label="Invest illustration"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function HeroBackground() {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <img
        src={assets.hero}
        alt=""
        fetchPriority="high"
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* Stronger scrim on small viewports so headline & copy stay readable on busy photos. */}
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/90 via-white/55 to-white/20 md:from-white/12 md:via-white/22 md:to-transparent"
        aria-hidden
      />
    </>
  )
}
