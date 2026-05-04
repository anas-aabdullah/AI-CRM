import { Link } from 'react-router-dom'
import { paths } from '../../config/paths'

/**
 * Compact footer used on auth flows — matches Figma “Desktop - Footer” slot (thin bar), separate from marketing `Footer`.
 */
export function AuthFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-auto border-t border-line bg-footer">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-2 px-4 py-4 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-8 sm:gap-y-1 sm:px-8 sm:text-left lg:px-[120px]">
        <p className="text-xs font-normal tracking-[-0.01em] text-brand/80">
          © {year} Mabrook. All rights reserved.
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-brand/80"
          aria-label="Legal"
        >
          <Link
            to={paths.legal.privacy}
            className="transition hover:text-brand hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to={paths.legal.agreements}
            className="transition hover:text-brand hover:underline"
          >
            Terms of use
          </Link>
          <Link
            to={paths.legal.cookies}
            className="transition hover:text-brand hover:underline"
          >
            Cookies
          </Link>
        </nav>
      </div>
    </footer>
  )
}
