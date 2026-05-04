/**
 * Change password — layout matches settings shell; wire API when backend exists.
 */
export function ChangePasswordPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-8">
        <h1 className="text-2xl font-black tracking-tight text-brand sm:text-3xl">
          Change password
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-brand/75 sm:text-base">
          Choose a strong password you don&apos;t use elsewhere. You&apos;ll use
          this to sign in to your Mabrook account.
        </p>
      </header>
      <div className="rounded-2xl border border-dashed border-line bg-footer/50 px-6 py-12 text-center">
        <p className="text-sm font-medium text-brand/70">
          Password change form will connect to your auth API. Use the sidebar to
          return to My profile.
        </p>
      </div>
    </div>
  )
}
