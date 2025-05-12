import { ThemeOverride } from '@chakra-ui/react'
import { createContext } from 'react'
import { ApiProvider } from './ApiContext'
import { AppProvider } from './AppContext'
import { AppThemeProvider } from './AppThemeContext'
import { AuthProvider } from './AuthContext'
import { LanguageProvider } from './LanguageContext'

export const LodestarAppProvider: React.FC<
  React.PropsWithChildren & {
    appId: string
    extend?: { chakraTheme?: ThemeOverride }
  }
> = ({ appId, children, extend }) => {
  const LodestarAppProvider = createContext({ appId })
  return (
    <LodestarAppProvider.Provider value={{ appId }}>
      <AuthProvider appId={appId}>
        <ApiProvider appId={appId}>
          <AppProvider appId={appId}>
            <LanguageProvider>
              <AppThemeProvider extendChakraTheme={extend?.chakraTheme}>{children}</AppThemeProvider>
            </LanguageProvider>
          </AppProvider>
        </ApiProvider>
      </AuthProvider>
    </LodestarAppProvider.Provider>
  )
}
