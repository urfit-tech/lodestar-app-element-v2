import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../helpers/apollo';
import { useAuth } from './AuthContext';
export const ApiProvider = ({ appId, children }) => {
    const { authToken } = useAuth();
    const apolloClient = createApolloClient({ appId, authToken }, {
        'invalid-jwt': typeof window !== 'undefined' ? window.location.reload : () => { },
    });
    return (_jsx(ApolloProvider, { client: apolloClient, children: _jsx(_Fragment, { children: children }) }));
};
