// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Style Imports
import '@/app/globals.css'
import { i18n } from '@configs/i18n'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Y VIET',
  description: 'Y VIET'
}

const RootLayout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  // Vars
  const direction = i18n.langDirection[params.lang]

  return (
    <html id='__next' lang='en' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
    </html>
  )
}

export default RootLayout
