import { ApolloClient } from '@apollo/client';
type ApolloClientOptions = {
    appId: string;
    authToken: string | null;
};
type ApolloCallbacks = {
    'invalid-jwt': () => void;
};
export declare const createApolloClient: (options: ApolloClientOptions, callbacks?: ApolloCallbacks) => ApolloClient<import('@apollo/client').NormalizedCacheObject>;
export {};
