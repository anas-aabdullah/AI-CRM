import { MarketingLayout } from '../components/layout/MarketingLayout'
import { Container } from '../components/ui/Container'

type PlaceholderPageProps = {
  title: string
  description?: string
}

/**
 * Temporary screen for routes not yet implemented — swap when MERN backend + UI exist.
 */
export function PlaceholderPage({
  title,
  description = 'This section will connect to the Node/Express and MongoDB stack when the backend is integrated.',
}: PlaceholderPageProps) {
  return (
    <MarketingLayout>
      <Container className="py-20 lg:py-28">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-brand md:text-4xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand/85">
          {description}
        </p>
      </Container>
    </MarketingLayout>
  )
}
