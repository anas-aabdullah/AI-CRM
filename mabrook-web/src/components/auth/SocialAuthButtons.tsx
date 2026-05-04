import {
  IconGoogle,
  IconLinkedIn,
  IconTelegram,
} from './SocialProviderIcons'

// Wire `onClick` to your Express OAuth routes or SDK redirects when the backend is ready.

type SocialAuthButtonsProps = {
  /** Login screens say “Or log in with”; signup can use “Or sign up with”. */
  dividerLabel?: string
}

export function SocialAuthButtons({
  dividerLabel = 'Or log in with',
}: SocialAuthButtonsProps) {
  const items = [
    { label: 'Google', Icon: IconGoogle },
    { label: 'LinkedIn', Icon: IconLinkedIn },
    { label: 'Telegram', Icon: IconTelegram },
  ] as const

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm text-brand/70">
        <div className="h-px flex-1 bg-line" />
        <span className="shrink-0 whitespace-nowrap">{dividerLabel}</span>
        <div className="h-px flex-1 bg-line" />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map(({ label, Icon }) => (
          <button
            key={label}
            type="button"
            className="inline-flex h-12 min-h-[48px] items-center justify-center gap-2 rounded-xl border border-line bg-white px-3 text-sm font-semibold text-brand shadow-sm transition hover:border-brand/30 hover:bg-brand/4 active:scale-[0.99]"
          >
            <Icon className="size-6 shrink-0" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
