import { ApolloClient, from, HttpLink, InMemoryCache, split } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { OperationTypeNode } from 'graphql'
import { createClient } from 'graphql-ws'
import { v4 as uuidv4 } from 'uuid'
import { GraphqlEndpoint } from '../contexts/ApiContext'

type ApolloClientOptions = {
  appId: string
  authToken: string | null
}

type ApolloCallbacks = {
  'invalid-jwt': () => void
}

// create onError link
const onErrorLink = (callbacks?: ApolloCallbacks) =>
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors && typeof window !== 'undefined') {
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`, extensions)
        if (extensions && extensions.code === 'invalid-jwt') {
          callbacks?.['invalid-jwt']?.()
          setTimeout(() => window.location.assign('/'), 3000)
        }
      })
      if (networkError) console.log(`[Network error]: ${JSON.stringify(networkError)}`)
    }
  })

const createHttpLink = (endpoint: string | undefined, options: { authToken: string | null; appId: string }) =>
  new HttpLink({
    uri: endpoint,
    headers: options.authToken
      ? {
          authorization: `Bearer ${options.authToken}`,
        }
      : {
          'x-hasura-org-id': options.appId,
          'x-hasura-app-id': options.appId,
          'x-hasura-user-id': uuidv4(),
          'x-hasura-role': 'anonymous',
        },
  })

const createSplitLink = (appId: string, authToken: string | null, graphqlEndpoint: GraphqlEndpoint) =>
  split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    new GraphQLWsLink(
      createClient({
        url: String(graphqlEndpoint.envGraphqlWsEndpoint),
        connectionParams: {
          headers: authToken
            ? {
                authorization: `Bearer ${authToken}`,
              }
            : {
                'x-hasura-org-id': appId,
                'x-hasura-app-id': appId,
                'x-hasura-user-id': uuidv4(),
                'x-hasura-role': 'anonymous',
              },
        },
      }),
    ),
    split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return (definition.kind === 'OperationDefinition' && definition.operation === OperationTypeNode.QUERY) || false
      },
      split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            (definition.kind === 'OperationDefinition' &&
              (definition.name?.value.startsWith('Ph') || definition.name?.value.startsWith('PH_'))) ||
            false
          )
        },
        createHttpLink(graphqlEndpoint.envGraphqlPhEndpoint, { authToken, appId }),
        createHttpLink(graphqlEndpoint.envGraphqlRhEndpoint, { authToken, appId }),
      ),
      createHttpLink(graphqlEndpoint.envGraphqlPhEndpoint, { authToken, appId }),
    ),
  )

export const createApolloClient = (
  options: ApolloClientOptions,
  graphqlEndpoint: GraphqlEndpoint,
  callbacks?: ApolloCallbacks,
) => {
  const apolloClient = new ApolloClient({
    link: from([onErrorLink(callbacks), createSplitLink(options.appId, options.authToken, graphqlEndpoint)]),
    cache: new InMemoryCache(),
  })
  return apolloClient
}
