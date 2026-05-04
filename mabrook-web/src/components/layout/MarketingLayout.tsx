import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type MarketingLayoutProps = {
  children: ReactNode
  /** When true, page has no vertical padding on main (you control spacing inside). */
  mainClassName?: string
}

/**
 * Standard shell for inner pages: sticky header, scrollable main, footer.
 * Home uses its own composition with `Header variant="overlay"` (fixed over hero).
 */
export function MarketingLayout({
  children,
  mainClassName = '',
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden bg-white">
      <Header variant="default" />
      <main
        id="main-content"
        className={`flex-1 ${mainClassName}`.trim()}
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
