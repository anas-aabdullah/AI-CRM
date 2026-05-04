import type { InputHTMLAttributes } from 'react'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  helper?: string
}

export function AuthField({ label, helper, className = '', ...props }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-brand">{label}</span>
      <input
        {...props}
        className={`h-12 w-full rounded-xl border border-line px-4 text-brand-ink outline-none transition focus:border-brand ${className}`.trim()}
      />
      {helper ? <span className="mt-2 block text-sm text-brand/70">{helper}</span> : null}
    </label>
  )
}
