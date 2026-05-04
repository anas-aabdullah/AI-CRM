import type { ReactNode } from 'react'
import { AuthFooter } from '../layout/AuthFooter'
import { Header } from '../layout/Header'
import { Container } from '../ui/Container'

type AuthShellProps = {
  title: string
  subtitle?: ReactNode
  children: ReactNode
}

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      <Header variant="default" mode="auth" />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-1 flex-col py-10 sm:py-16 lg:py-20"
      >
        <Container className="flex flex-1 justify-center">
          <section className="w-full max-w-[588px] rounded-3xl border border-line bg-white p-5 shadow-sm sm:p-8">
            <h1 className="text-center text-[clamp(2rem,3.5vw,3rem)] font-black leading-tight tracking-[-0.03em] text-brand-ink">
              {title}
            </h1>
            {subtitle ? (
              <div className="mt-3 text-center text-base text-brand/85">
                {subtitle}
              </div>
            ) : null}
            <div className="mt-8">{children}</div>
          </section>
        </Container>
      </main>
      <AuthFooter />
    </div>
  )
}
