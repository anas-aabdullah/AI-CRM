import { Link } from 'react-router-dom'
import { AuthField } from '../components/auth/AuthFields'
import { AuthShell } from '../components/auth/AuthShell'
import { ButtonLink } from '../components/ui/ButtonLink'
import { paths } from '../config/paths'

export function ResetPasswordPage() {
  return (
    <AuthShell title="Reset Password" subtitle="Enter your details below.">
      <form className="space-y-5">
        <AuthField label="New password" type="password" placeholder="New password" />
        <AuthField
          label="Confirm new password"
          type="password"
          placeholder="Confirm new password"
        />
        <ButtonLink to={paths.login} className="h-12 w-full justify-center">
          Reset password
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
