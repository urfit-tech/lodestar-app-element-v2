import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '../helpers/apollo'
import { useAuth } from './AuthContext'

export type Endpoints = {
  envGraphqlPhEndpoint: string
  envGraphqlRhEndpoint: string
  envGraphqlWsEndpoint: string
}

export const ApiProvider: React.FC<React.PropsWithChildren & { appId: string; endpoints: Endpoints }> = ({
  appId,
  endpoints,
  children,
}) => {
  const { authToken } = useAuth()

  const apolloClient = createApolloClient({ appId, authToken }, endpoints, {
    'invalid-jwt': typeof window !== 'undefined' ? window.location.reload : () => {},
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
