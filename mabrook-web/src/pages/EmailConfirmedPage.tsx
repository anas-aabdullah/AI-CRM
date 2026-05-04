import { AuthShell } from '../components/auth/AuthShell'
import { ButtonLink } from '../components/ui/ButtonLink'
import { paths } from '../config/paths'

export function EmailConfirmedPage() {
  return (
    <AuthShell
      title="Email Confirmed"
      subtitle="Now you can restart your password."
    >
      <div className="space-y-5">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-surface-tint text-4xl text-brand">
          ✓
        </div>
        <ButtonLink
          to={paths.auth.resetPassword}
          className="h-12 w-full justify-center"
        >
          Continue
        </ButtonLink>
      </div>
    </AuthShell>
  )
}
