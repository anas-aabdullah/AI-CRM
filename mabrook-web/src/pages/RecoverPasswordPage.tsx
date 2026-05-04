import { Link } from 'react-router-dom'
import { AuthField } from '../components/auth/AuthFields'
import { AuthShell } from '../components/auth/AuthShell'
import { ButtonLink } from '../components/ui/ButtonLink'
import { paths } from '../config/paths'

export function RecoverPasswordPage() {
  return (
    <AuthShell
      title="Recover Password"
      subtitle="Enter your email address and we’ll send you a reset link."
    >
      <form className="space-y-5">
        <AuthField label="Email" type="email" placeholder="you@example.com" />
        <ButtonLink to={paths.auth.checkEmail} className="h-12 w-full justify-center">
          Send reset link
        </ButtonLink>
      </form>
      <p className="mt-6 text-center text-sm text-brand/80">
        New to Mabrook?{' '}
        <Link to={paths.signup} className="font-semibold text-brand underline">
          Sign up
        </Link>
      </p>
    </AuthShell>
  )
}
