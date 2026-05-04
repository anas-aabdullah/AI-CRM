import { ButtonLink } from '../components/ui/ButtonLink'
import { AuthShell } from '../components/auth/AuthShell'
import { paths } from '../config/paths'

export function CheckEmailPage() {
  return (
    <AuthShell
      title="Check Your Email"
      subtitle="We sent a verification link to your inbox. Open the email and continue."
    >
      <div className="space-y-4">
        <div className="rounded-2xl border border-line bg-surface-tint p-4 text-sm text-brand">
          Didn’t receive it? Check spam or resend in 30 seconds.
        </div>
        <ButtonLink to={paths.auth.emailConfirmed} className="h-12 w-full justify-center">
          I verified my email
        </ButtonLink>
      </div>
    </AuthShell>
  )
}
