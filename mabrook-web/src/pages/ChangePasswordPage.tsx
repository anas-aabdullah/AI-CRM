import { useMemo, useState } from 'react'

type FormState = {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

type FieldErrors = Partial<
  Record<'currentPassword' | 'newPassword' | 'confirmPassword', string | undefined>
>

const inputClass =
  'h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-brand-ink outline-none transition focus:border-brand disabled:cursor-not-allowed disabled:bg-footer disabled:opacity-70'

const labelClass = 'mb-2 block text-sm font-medium text-brand'

const initialForm: FormState = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
}

type PasswordField = keyof FormState

type Device = {
  id: string
  name: string
  location: string
  time: string
}

const devices: Device[] = [
  {
    id: '1',
    name: 'Dell 24"',
    location: 'Saudi Arabia',
    time: '2026 02 12, 9:52:03 AM',
  },
  {
    id: '2',
    name: 'Macbook Air',
    location: 'Saudi Arabia',
    time: '2026 02 12, 9:52:03 AM',
  },
  {
    id: '3',
    name: 'iPhone 14 Pro Max',
    location: 'Saudi Arabia',
    time: '2026 02 12, 9:52:03 AM',
  },
  {
    id: '4',
    name: 'iPhone 14 Pro Max',
    location: 'Saudi Arabia',
    time: '2026 02 12, 9:52:03 AM',
  },
]

function validateNewPasswordRules(value: string) {
  return {
    minLength: value.length >= 8,
    hasUppercase: /[A-Z]/.test(value),
    hasLowercase: /[a-z]/.test(value),
    hasNumber: /\d/.test(value),
    hasSpecial: /[^A-Za-z0-9]/.test(value),
  }
}

export function ChangePasswordPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showSuccessBanner, setShowSuccessBanner] = useState(false)
  const [showPassword, setShowPassword] = useState<Record<PasswordField, boolean>>({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  })

  const rules = useMemo(() => validateNewPasswordRules(form.newPassword), [form.newPassword])

  const hasAnyInput = useMemo(() => {
    return Boolean(
      form.currentPassword.trim() ||
        form.newPassword.trim() ||
        form.confirmPassword.trim(),
    )
  }, [form])

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setSaved(false)
    setErrors((prev) => {
      if (!prev[key]) return prev
      return { ...prev, [key]: undefined }
    })
  }

  const validate = () => {
    const next: FieldErrors = {}

    if (!form.currentPassword.trim()) {
      next.currentPassword = 'Please enter your current password'
    }

    if (!form.newPassword.trim()) {
      next.newPassword = 'Please enter a new password'
    } else if (!Object.values(rules).every(Boolean)) {
      next.newPassword =
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'
    }

    if (!form.confirmPassword.trim()) {
      next.confirmPassword = 'Please confirm your new password'
    } else if (form.confirmPassword !== form.newPassword) {
      next.confirmPassword = 'Passwords do not match'
    }

    if (
      form.currentPassword &&
      form.newPassword &&
      form.currentPassword === form.newPassword
    ) {
      next.newPassword = 'New password must be different from current password'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSaved(true)
      setShowSuccessBanner(true)
      setForm(initialForm)
      setTimeout(() => setSaved(false), 1400)
    }, 900)
  }

  const submitDisabled = loading || !hasAnyInput
  const submitLabel = loading ? 'Saving...' : saved ? 'Saved' : 'Save changes'

  const togglePasswordVisibility = (field: PasswordField) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  return (
    <div className="mx-auto w-full max-w-[640px]">
      {showSuccessBanner ? (
        <div className="mb-8 flex items-center justify-between rounded-2xl border border-line bg-footer px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
                <path
                  d="m5 13 4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="truncate text-sm text-brand">
              Your password has been successfully changed.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowSuccessBanner(false)}
            className="ml-3 shrink-0 text-brand/70 transition hover:text-brand"
            aria-label="Dismiss success message"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      ) : null}

      <header className="mb-6">
        <h1 className="text-[34px] font-bold leading-tight text-brand max-sm:text-3xl">
          Change password
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-brand/75">
          Let&apos;s make sure your account stays protected.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="currentPassword" className={labelClass}>
            Current password
          </label>
          <div className="relative">
            <input
              id="currentPassword"
              type={showPassword.currentPassword ? 'text' : 'password'}
              autoComplete="current-password"
              disabled={loading}
              value={form.currentPassword}
              onChange={(e) => updateField('currentPassword', e.target.value)}
              className={`${inputClass} pr-10 ${errors.currentPassword ? 'border-red-400' : ''}`}
              aria-invalid={!!errors.currentPassword}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('currentPassword')}
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand/55 transition hover:text-brand"
              aria-label={
                showPassword.currentPassword ? 'Hide current password' : 'Show current password'
              }
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
                <path
                  d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
          {errors.currentPassword ? (
            <p className="mt-2 text-sm text-red-600">{errors.currentPassword}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="newPassword" className={labelClass}>
            New password
          </label>
          <div className="relative">
            <input
              id="newPassword"
              type={showPassword.newPassword ? 'text' : 'password'}
              autoComplete="new-password"
              disabled={loading}
              value={form.newPassword}
              onChange={(e) => updateField('newPassword', e.target.value)}
              className={`${inputClass} pr-10 ${errors.newPassword ? 'border-red-400' : ''}`}
              aria-invalid={!!errors.newPassword}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('newPassword')}
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand/55 transition hover:text-brand"
              aria-label={showPassword.newPassword ? 'Hide new password' : 'Show new password'}
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
                <path
                  d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
          {errors.newPassword ? (
            <p className="mt-2 text-sm text-red-600">{errors.newPassword}</p>
          ) : null}
          <ul className="mt-3 space-y-1 text-xs sm:text-sm">
            <li className={rules.minLength ? 'text-green-700' : 'text-brand/60'}>
              At least 8 characters
            </li>
            <li className={rules.hasUppercase ? 'text-green-700' : 'text-brand/60'}>
              One uppercase letter
            </li>
            <li className={rules.hasLowercase ? 'text-green-700' : 'text-brand/60'}>
              One lowercase letter
            </li>
            <li className={rules.hasNumber ? 'text-green-700' : 'text-brand/60'}>
              One number
            </li>
            <li className={rules.hasSpecial ? 'text-green-700' : 'text-brand/60'}>
              One special character
            </li>
          </ul>
        </div>

        <div>
          <label htmlFor="confirmPassword" className={labelClass}>
            Confirm new password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showPassword.confirmPassword ? 'text' : 'password'}
              autoComplete="new-password"
              disabled={loading}
              value={form.confirmPassword}
              onChange={(e) => updateField('confirmPassword', e.target.value)}
              className={`${inputClass} pr-10 ${errors.confirmPassword ? 'border-red-400' : ''}`}
              aria-invalid={!!errors.confirmPassword}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirmPassword')}
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand/55 transition hover:text-brand"
              aria-label={
                showPassword.confirmPassword
                  ? 'Hide confirm password'
                  : 'Show confirm password'
              }
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
                <path
                  d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
          {errors.confirmPassword ? (
            <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
          ) : null}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={submitDisabled}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-brand/35 disabled:text-white/95 disabled:shadow-none"
          >
            {saved ? (
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
                <path
                  d="m5 13 4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
            {submitLabel}
          </button>
        </div>
      </form>

      <section className="mt-14">
        <h2 className="text-[28px] font-bold text-brand">Your Devices</h2>
        <p className="mt-2 text-sm text-brand/70">
          Devices currently logged in to your account.
        </p>
        <div className="mt-5 rounded-2xl border border-line bg-white">
          {devices.map((device, index) => (
            <article
              key={device.id}
              className={`flex items-center justify-between px-4 py-4 sm:px-5 ${
                index !== devices.length - 1 ? 'border-b border-line' : ''
              }`}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-brand">{device.name}</p>
                <p className="mt-1 truncate text-xs text-brand/65">
                  {device.location}, {device.time}
                </p>
              </div>
              <button
                type="button"
                className="ml-3 shrink-0 rounded-full p-2 text-brand/70 transition hover:bg-footer hover:text-brand"
                aria-label={`Logout ${device.name}`}
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
                  <path
                    d="M10 17l5-5-5-5M15 12H4m11-7h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </article>
          ))}
        </div>
        <button
          type="button"
          className="mt-5 h-10 w-full rounded-full border border-line bg-white text-sm font-semibold text-brand transition hover:bg-footer"
        >
          Logout from all devices
        </button>
      </section>
    </div>
  )
}
