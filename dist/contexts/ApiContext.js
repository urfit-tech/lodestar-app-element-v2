"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("@apollo/client");
const apollo_1 = require("../helpers/apollo");
const AuthContext_1 = require("./AuthContext");
const ApiProvider = ({ appId, children }) => {
    const { authToken } = (0, AuthContext_1.useAuth)();
    const apolloClient = (0, apollo_1.createApolloClient)({ appId, authToken }, {
        'invalid-jwt': typeof window !== 'undefined' ? window.location.reload : () => { },
    });
    return (0, jsx_runtime_1.jsx)(client_1.ApolloProvider, { client: apolloClient, children: children });
};
exports.ApiProvider = ApiProvider;
