import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary'

const variantClass: Record<Variant, string> = {
  primary:
    'inline-flex items-center justify-center rounded-full bg-brand font-semibold text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
  secondary:
    'inline-flex items-center justify-center rounded-full font-semibold text-brand transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
}

type ButtonLinkProps = LinkProps & {
  variant?: Variant
  className?: string
}

/**
 * Router-aware button-styled link — CTAs and navigation actions.
 */
export function ButtonLink({
  variant = 'primary',
  className = '',
  ...props
}: ButtonLinkProps) {
  const padding =
    variant === 'primary'
      ? 'px-6 py-3.5 text-base tracking-[-0.01em]'
      : 'h-12 min-w-[88px] px-4 py-3 text-base tracking-[-0.02em]'
  return (
    <Link
      className={`${variantClass[variant]} ${padding} ${className}`.trim()}
      {...props}
    />
  )
}
