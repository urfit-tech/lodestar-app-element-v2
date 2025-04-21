import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import 'dayjs/locale/vi'
import { createContext, useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useApp } from './AppContext'

const supportedLanguages = ['zh-tw', 'zh-cn', 'en-us', 'vi', 'acsi']

type LanguageProps = {
  currentLanguage: string
  locale: string
  setCurrentLanguage?: (language: string) => void
}
const defaultLanguage: LanguageProps = {
  currentLanguage: 'zh-tw',
  locale: 'zh-tw',
}

const LanguageContext = createContext<LanguageProps>(defaultLanguage)

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { enabledModules, settings } = useApp()
  const [currentLanguage, setCurrentLanguage] = useState('zh-tw')
  const [locale, setLocale] = useState('zh-tw')
  dayjs.locale('zh-tw')

  useEffect(() => {
    const browserLanguage = settings['language'] || navigator.language.split('-')[0]
    const cachedLanguage = localStorage.getItem('kolable.app.language')
    setCurrentLanguage(
      enabledModules.locale
        ? typeof cachedLanguage === 'string' && supportedLanguages.includes(cachedLanguage)
          ? cachedLanguage
          : supportedLanguages.includes(browserLanguage)
            ? browserLanguage
            : 'zh-tw'
        : 'zh-tw',
    )
  }, [enabledModules, settings])

  useEffect(() => {
    switch (currentLanguage) {
      case 'zh-tw':
      case 'acsi':
        setLocale('zh-tw')
        dayjs.locale('zh-tw')
        break
      default:
        setLocale(currentLanguage)
        dayjs.locale('zh-tw')
    }
  }, [currentLanguage])

  let messages: any = {}
  try {
    if (enabledModules.locale) {
      messages = require(`../translations/locales/${currentLanguage}.json`)
    }
  } catch {}

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        locale,
        setCurrentLanguage: (newLanguage: string) => {
          if (supportedLanguages.includes(newLanguage)) {
            localStorage.setItem('kolable.app.language', newLanguage)
            setCurrentLanguage(newLanguage)
          }
        },
      }}
    >
      <IntlProvider defaultLocale="zh-tw" locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}

export default LanguageContext
