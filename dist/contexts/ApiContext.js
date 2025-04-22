import { jsx as _jsx } from "react/jsx-runtime";
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../helpers/apollo';
import { useAuth } from './AuthContext';
export var ApiProvider = function (_a) {
    var appId = _a.appId, children = _a.children;
    var authToken = useAuth().authToken;
    var apolloClient = createApolloClient({ appId: appId, authToken: authToken }, {
        'invalid-jwt': window.location.reload,
    });
    return _jsx(ApolloProvider, { client: apolloClient, children: children });
};
