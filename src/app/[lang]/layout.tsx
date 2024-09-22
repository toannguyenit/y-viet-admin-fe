// Next Imports
import { headers } from 'next/headers'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Component Imports

// HOC Imports
import TranslationWrapper from '@/hocs/TranslationWrapper'

// Config Imports
import { i18n } from '@configs/i18n'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

// Import getDictionary as a regular import

export const metadata = {
  title: 'Y VIET',
  description: 'Y VIET'
}

const RootLayout = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  // Vars
  const headersList = headers()
  const direction = i18n.langDirection[params.lang]

  // Remove the line that gets the dictionary

  return (
    <html id='__next' lang={params.lang} dir={direction}>
      <LanguageProvider>
        <TranslationWrapper headersList={headersList} lang={params.lang}>
          <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
        </TranslationWrapper>
      </LanguageProvider>
    </html>
  )
}

export default RootLayout
