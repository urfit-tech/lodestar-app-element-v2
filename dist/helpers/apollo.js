import { ApolloClient, from, HttpLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { OperationTypeNode } from 'graphql';
import { createClient } from 'graphql-ws';
import { v4 as uuidv4 } from 'uuid';
// create onError link
var onErrorLink = function (callbacks) {
    return onError(function (_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
        if (graphQLErrors && typeof window !== 'undefined') {
            graphQLErrors.forEach(function (_a) {
                var _b;
                var message = _a.message, locations = _a.locations, path = _a.path, extensions = _a.extensions;
                console.error("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path), extensions);
                if (extensions && extensions.code === 'invalid-jwt') {
                    (_b = callbacks === null || callbacks === void 0 ? void 0 : callbacks['invalid-jwt']) === null || _b === void 0 ? void 0 : _b.call(callbacks);
                    setTimeout(function () { return window.location.assign('/'); }, 3000);
                }
            });
            if (networkError)
                console.log("[Network error]: ".concat(JSON.stringify(networkError)));
        }
    });
};
var createHttpLink = function (endpoint, options) {
    return new HttpLink({
        uri: endpoint,
        headers: options.authToken
            ? {
                authorization: "Bearer ".concat(options.authToken),
            }
            : {
                'x-hasura-org-id': options.appId,
                'x-hasura-app-id': options.appId,
                'x-hasura-user-id': uuidv4(),
                'x-hasura-role': 'anonymous',
            },
    });
};
var createSplitLink = function (appId, authToken) {
    return split(function (_a) {
        var query = _a.query;
        var definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    }, new GraphQLWsLink(createClient({
        url: String(process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT),
        connectionParams: {
            headers: authToken
                ? {
                    authorization: "Bearer ".concat(authToken),
                }
                : {
                    'x-hasura-org-id': appId,
                    'x-hasura-app-id': appId,
                    'x-hasura-user-id': uuidv4(),
                    'x-hasura-role': 'anonymous',
                },
        },
    })), split(function (_a) {
        var query = _a.query;
        var definition = getMainDefinition(query);
        return (definition.kind === 'OperationDefinition' && definition.operation === OperationTypeNode.QUERY) || false;
    }, split(function (_a) {
        var _b, _c;
        var query = _a.query;
        var definition = getMainDefinition(query);
        return ((definition.kind === 'OperationDefinition' &&
            (((_b = definition.name) === null || _b === void 0 ? void 0 : _b.value.startsWith('Ph')) || ((_c = definition.name) === null || _c === void 0 ? void 0 : _c.value.startsWith('PH_')))) ||
            false);
    }, createHttpLink(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken: authToken, appId: appId }), createHttpLink(process.env.NEXT_PUBLIC_GRAPHQL_RH_ENDPOINT, { authToken: authToken, appId: appId })), createHttpLink(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken: authToken, appId: appId })));
};
export var createApolloClient = function (options, callbacks) {
    var apolloClient = new ApolloClient({
        link: from([onErrorLink(callbacks), createSplitLink(options.appId, options.authToken)]),
        cache: new InMemoryCache(),
    });
    return apolloClient;
};
