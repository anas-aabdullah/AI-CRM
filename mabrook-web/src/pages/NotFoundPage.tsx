import { Link } from 'react-router-dom'
import { paths } from '../config/paths'
import { MarketingLayout } from '../components/layout/MarketingLayout'
import { Container } from '../components/ui/Container'
import { ButtonLink } from '../components/ui/ButtonLink'

export function NotFoundPage() {
  return (
    <MarketingLayout>
      <Container className="flex min-h-[50vh] flex-col justify-center py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand/70">
          Error 404
        </p>
        <h1 className="mt-2 text-4xl font-black uppercase tracking-tighter text-brand md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-lg text-lg text-brand/85">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-10">
          <ButtonLink to={paths.home} variant="primary" className="px-8 py-4">
            Back to home
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-brand/60">
          Looking for something specific?{' '}
          <Link to={paths.home} className="font-medium text-brand underline">
            Return to the homepage
          </Link>
          .
        </p>
      </Container>
    </MarketingLayout>
  )
}
