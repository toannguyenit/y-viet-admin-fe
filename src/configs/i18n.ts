export const i18n = {
  defaultLocale: 'vi',
  locales: ['en', 'vi'],
  langDirection: {
    en: 'ltr',
    vi: 'ltr'
  }
} as const

export type Locale = (typeof i18n)['locales'][number]
