import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '../helpers/apollo'
import { useAuth } from './AuthContext'

export type GraphqlEndpoint = {
  envGraphqlPhEndpoint: string
  envGraphqlRhEndpoint: string
  envGraphqlWsEndpoint: string
}

export const ApiProvider: React.FC<React.PropsWithChildren & { appId: string; graphqlEndpoint: GraphqlEndpoint }> = ({
  appId,
  graphqlEndpoint,
  children,
}) => {
  const { authToken } = useAuth()

  const apolloClient = createApolloClient({ appId, authToken }, graphqlEndpoint, {
    'invalid-jwt': typeof window !== 'undefined' ? window.location.reload : () => {},
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
