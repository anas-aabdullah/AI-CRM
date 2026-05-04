import { Link } from 'react-router-dom'
import { AuthField } from '../components/auth/AuthFields'
import { AuthShell } from '../components/auth/AuthShell'
import { SocialAuthButtons } from '../components/auth/SocialAuthButtons'
import { ButtonLink } from '../components/ui/ButtonLink'
import { paths } from '../config/paths'

export function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle={
        <>
          New to Mabrook?{' '}
          <Link to={paths.signup} className="font-semibold text-brand underline">
            Sign up
          </Link>
        </>
      }
    >
      <form className="space-y-5">
        <AuthField label="Email" type="email" placeholder="you@example.com" />
        <AuthField label="Password" type="password" placeholder="••••••••" />
        <div className="flex justify-end">
          <Link to={paths.auth.forgotPassword} className="text-sm text-brand underline">
            Forgot password?
          </Link>
        </div>
        <ButtonLink to={paths.auth.checkEmail} className="h-12 w-full justify-center">
          Log in
        </ButtonLink>
      </form>
      <div className="mt-8">
        <SocialAuthButtons />
      </div>
    </AuthShell>
  )
}
