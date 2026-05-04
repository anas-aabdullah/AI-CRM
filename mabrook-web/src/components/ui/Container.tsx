import type { HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  /** Default matches marketing max width + horizontal rhythm from design. */
  as?: 'div' | 'section' | 'main' | 'article'
}

/**
 * Horizontally centered content column — use inside pages for consistent gutters.
 */
export function Container({
  className = '',
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[120px] ${className}`.trim()}
      {...props}
    />
  )
}
