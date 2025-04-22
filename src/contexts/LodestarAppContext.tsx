import { ThemeOverride } from '@chakra-ui/react'
import { createContext } from 'react'
import { ApiProvider, GraphqlEndpoint } from './ApiContext'
import { AppProvider } from './AppContext'
import { AppThemeProvider } from './AppThemeContext'
import { AuthProvider } from './AuthContext'
import { LanguageProvider } from './LanguageContext'

export const LodestarAppProvider: React.FC<
  React.PropsWithChildren & {
    appId: string
    apiBaseRootHost: string
    graphqlEndpoint: GraphqlEndpoint
    extend?: { chakraTheme?: ThemeOverride }
  }
> = ({ appId, apiBaseRootHost, graphqlEndpoint, children, extend }) => {
  const LodestarAppProvider = createContext({ appId })
  return (
    <LodestarAppProvider.Provider value={{ appId }}>
      <AuthProvider
        appId={appId}
        apiBaseRootHost={apiBaseRootHost}
        envGraphqlPhEndpoint={graphqlEndpoint.envGraphqlPhEndpoint}
      >
        <ApiProvider appId={appId} graphqlEndpoint={graphqlEndpoint}>
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
