import { Link } from 'react-router-dom'
import { AuthField } from '../components/auth/AuthFields'
import { AuthShell } from '../components/auth/AuthShell'
import { SocialAuthButtons } from '../components/auth/SocialAuthButtons'
import { ButtonLink } from '../components/ui/ButtonLink'
import { paths } from '../config/paths'

export function SignupPage() {
  return (
    <AuthShell
      title="Create your Mabrook account"
      subtitle={
        <>
          Already with Mabrook?{' '}
          <Link to={paths.login} className="font-semibold text-brand underline">
            Log in
          </Link>
        </>
      }
    >
      <form className="space-y-5">
        <AuthField label="Full name" type="text" placeholder="Your full name" />
        <AuthField label="Email" type="email" placeholder="you@example.com" />
        <AuthField label="Password" type="password" placeholder="Create password" />
        <AuthField
          label="Confirm password"
          type="password"
          placeholder="Confirm password"
        />
        <AuthField label="Mobile number" type="tel" placeholder="+971 50 000 0000" />
        <label className="flex items-start gap-3 text-sm text-brand/85">
          <input type="checkbox" className="mt-0.5 size-4 rounded border-line" />
          <span>
            By registering, you accept our{' '}
            <Link to={paths.legal.agreements} className="underline">
              Terms of use
            </Link>{' '}
            and{' '}
            <Link to={paths.legal.privacy} className="underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        <ButtonLink to={paths.auth.checkEmail} className="h-12 w-full justify-center">
          Create account
        </ButtonLink>
      </form>
      <div className="mt-8">
        <SocialAuthButtons dividerLabel="Or sign up with" />
      </div>
    </AuthShell>
  )
}
