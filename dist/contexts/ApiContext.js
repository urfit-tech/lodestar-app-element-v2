import { jsx as _jsx } from "react/jsx-runtime";
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../helpers/apollo';
import { useAuth } from './AuthContext';
export var ApiProvider = function (_a) {
    var appId = _a.appId, graphqlEndpoint = _a.graphqlEndpoint, children = _a.children;
    var authToken = useAuth().authToken;
    var apolloClient = createApolloClient({ appId: appId, authToken: authToken }, graphqlEndpoint, {
        'invalid-jwt': typeof window !== 'undefined' ? window.location.reload : function () { },
    });
    return _jsx(ApolloProvider, { client: apolloClient, children: children });
};
