/** Dummy profile — replace with API after auth. */
export const initialProfile = {
  fullName: 'Mabrook Fintech',
  email: 'alex.broker@mabrook.app',
  countryCode: '+971',
  mobile: '501234567',
  /** `null` = show initials */
  imageUrl: null as string | null,
}

export const countryDialCodes = [
  { value: '+971', label: 'UAE (+971)' },
  { value: '+966', label: 'Saudi Arabia (+966)' },
  { value: '+20', label: 'Egypt (+20)' },
  { value: '+1', label: 'United States (+1)' },
  { value: '+44', label: 'United Kingdom (+44)' },
  { value: '+92', label: 'Pakistan (+92)' },
] as const
