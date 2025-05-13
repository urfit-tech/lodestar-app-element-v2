import { ApolloClient, from, HttpLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { OperationTypeNode } from 'graphql';
import { createClient } from 'graphql-ws';
import { v4 as uuidv4 } from 'uuid';
// create onError link
const onErrorLink = (callbacks) => onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors && typeof window !== 'undefined') {
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            var _a;
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`, extensions);
            if (extensions && extensions.code === 'invalid-jwt') {
                (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks['invalid-jwt']) === null || _a === void 0 ? void 0 : _a.call(callbacks);
                setTimeout(() => window.location.assign('/'), 3000);
            }
        });
        if (networkError)
            console.log(`[Network error]: ${JSON.stringify(networkError)}`);
    }
});
const createHttpLink = (endpoint, options) => new HttpLink({
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
});
const createSplitLink = (appId, authToken) => split(({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
}, new GraphQLWsLink(createClient({
    url: String(process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT),
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
})), split(({ query }) => {
    const definition = getMainDefinition(query);
    return (definition.kind === 'OperationDefinition' && definition.operation === OperationTypeNode.QUERY) || false;
}, split(({ query }) => {
    var _a, _b;
    const definition = getMainDefinition(query);
    return ((definition.kind === 'OperationDefinition' &&
        (((_a = definition.name) === null || _a === void 0 ? void 0 : _a.value.startsWith('Ph')) || ((_b = definition.name) === null || _b === void 0 ? void 0 : _b.value.startsWith('PH_')))) ||
        false);
}, createHttpLink(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken, appId }), createHttpLink(process.env.NEXT_PUBLIC_GRAPHQL_RH_ENDPOINT, { authToken, appId })), createHttpLink(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken, appId })));
export const createApolloClient = (options, callbacks) => {
    const apolloClient = new ApolloClient({
        link: from([onErrorLink(callbacks), createSplitLink(options.appId, options.authToken)]),
        cache: new InMemoryCache(),
    });
    return apolloClient;
};
