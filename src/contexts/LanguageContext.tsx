'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

import type { ReactNode } from 'react'

import { useParams } from 'next/navigation'

import type { getDictionary } from '@/utils/getDictionary'

type Dictionary = Awaited<ReturnType<typeof getDictionary>>

type LanguageContextType = {
  dictionary: Dictionary
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dictionary, setDictionary] = useState<Dictionary>({} as Dictionary)
  const params = useParams()

  const setLanguage = async (lang: string) => {
    try {
      const newDictionary = await import(`../locales/${lang}.json`)

      setDictionary(newDictionary as Dictionary)
    } catch (error) {
      console.error(`Failed to load dictionary for language: ${lang}`, error)
      setDictionary({
        navigation: {},
        body: {}
      } as Dictionary)
    }
  }

  useEffect(() => {
    if (params.lang) {
      setLanguage(params.lang as string)
    }
  }, [params.lang])

  return <LanguageContext.Provider value={{ dictionary, setLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
