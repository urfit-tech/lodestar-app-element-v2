"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApolloClient = void 0;
const client_1 = require("@apollo/client");
const error_1 = require("@apollo/client/link/error");
const subscriptions_1 = require("@apollo/client/link/subscriptions");
const utilities_1 = require("@apollo/client/utilities");
const graphql_1 = require("graphql");
const graphql_ws_1 = require("graphql-ws");
const uuid_1 = require("uuid");
// create onError link
const onErrorLink = (callbacks) => (0, error_1.onError)(({ graphQLErrors, networkError }) => {
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
const createHttpLink = (endpoint, options) => new client_1.HttpLink({
    uri: endpoint,
    headers: options.authToken
        ? {
            authorization: `Bearer ${options.authToken}`,
        }
        : {
            'x-hasura-org-id': options.appId,
            'x-hasura-app-id': options.appId,
            'x-hasura-user-id': (0, uuid_1.v4)(),
            'x-hasura-role': 'anonymous',
        },
});
const createSplitLink = (appId, authToken) => (0, client_1.split)(({ query }) => {
    const definition = (0, utilities_1.getMainDefinition)(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
}, new subscriptions_1.GraphQLWsLink((0, graphql_ws_1.createClient)({
    url: String(process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT),
    connectionParams: {
        headers: authToken
            ? {
                authorization: `Bearer ${authToken}`,
            }
            : {
                'x-hasura-org-id': appId,
                'x-hasura-app-id': appId,
                'x-hasura-user-id': (0, uuid_1.v4)(),
                'x-hasura-role': 'anonymous',
            },
    },
})), (0, client_1.split)(({ query }) => {
    const definition = (0, utilities_1.getMainDefinition)(query);
    return (definition.kind === 'OperationDefinition' && definition.operation === graphql_1.OperationTypeNode.QUERY) || false;
}, (0, client_1.split)(({ query }) => {
    var _a, _b;
    const definition = (0, utilities_1.getMainDefinition)(query);
    return ((definition.kind === 'OperationDefinition' &&
        (((_a = definition.name) === null || _a === void 0 ? void 0 : _a.value.startsWith('Ph')) || ((_b = definition.name) === null || _b === void 0 ? void 0 : _b.value.startsWith('PH_')))) ||
        false);
}, createHttpLink(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken, appId }), createHttpLink(process.env.NEXT_PUBLIC_GRAPHQL_RH_ENDPOINT, { authToken, appId })), createHttpLink(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken, appId })));
const createApolloClient = (options, callbacks) => {
    const apolloClient = new client_1.ApolloClient({
        link: (0, client_1.from)([onErrorLink(callbacks), createSplitLink(options.appId, options.authToken)]),
        cache: new client_1.InMemoryCache(),
    });
    return apolloClient;
};
exports.createApolloClient = createApolloClient;
