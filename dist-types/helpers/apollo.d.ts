import { ApolloClient } from '@apollo/client';
import { GraphqlEndpoint } from '../contexts/ApiContext';
type ApolloClientOptions = {
    appId: string;
    authToken: string | null;
};
type ApolloCallbacks = {
    'invalid-jwt': () => void;
};
export declare const createApolloClient: (options: ApolloClientOptions, graphqlEndpoint: GraphqlEndpoint, callbacks?: ApolloCallbacks) => ApolloClient<import("@apollo/client").NormalizedCacheObject>;
export {};
