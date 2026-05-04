import { Link } from 'react-router-dom'
import { footerColumns, legalLinks } from '../../config/footerContent'
import { assets } from '../../siteAssets'
import { Container } from '../ui/Container'

type FooterProps = {
  className?: string
}

/**
 * Global site footer — shared across marketing pages.
 */
export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-footer text-brand ${className}`.trim()}>
      <Container
        as="div"
        className="flex flex-col gap-10 py-16 sm:py-20 lg:gap-14 lg:py-[120px]"
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-6">
              <p className="text-lg font-semibold tracking-[-0.01em]">
                {col.title}
              </p>
              <ul className="flex flex-col gap-4 text-sm font-normal tracking-[-0.01em]">
                {col.links.map((item) => (
                  <li key={`${col.title}-${item.label}`}>
                    <Link to={item.to} className="transition hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-line" aria-hidden />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm tracking-[-0.01em]"
            aria-label="Legal"
          >
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="whitespace-nowrap transition hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-6 shrink-0 transition hover:opacity-75"
              aria-label="LinkedIn"
            >
              <img
                src={assets.socialLinkedin}
                alt=""
                className="size-full"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-6 shrink-0 transition hover:opacity-75"
              aria-label="Facebook"
            >
              <img
                src={assets.socialFacebook}
                alt=""
                className="size-full"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-6 shrink-0 transition hover:opacity-75"
              aria-label="Instagram"
            >
              <img
                src={assets.socialInstagram}
                alt=""
                className="size-full"
              />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="size-6 shrink-0 transition hover:opacity-75"
              aria-label="Telegram"
            >
              <img
                src={assets.socialTelegram}
                alt=""
                className="size-full"
              />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-line" aria-hidden />

        <div className="flex items-start gap-3">
          <img
            src={assets.footerLogoMark}
            alt=""
            className="size-11 shrink-0 object-contain"
            width={44}
            height={45}
          />
          <span className="font-display text-[26px] font-semibold leading-none tracking-tighter">
            Mabrook
          </span>
        </div>

        <div className="max-w-4xl space-y-4 text-sm leading-[1.4] tracking-[-0.01em]">
          <p>© {new Date().getFullYear()} Mabrook</p>
          <p>
            For questions about our services and policies, please contact us
            through the support channels listed on our website.
          </p>
        </div>
      </Container>
    </footer>
  )
}
