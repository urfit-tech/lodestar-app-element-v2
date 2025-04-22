export type GraphqlEndpoint = {
    envGraphqlPhEndpoint: string;
    envGraphqlRhEndpoint: string;
    envGraphqlWsEndpoint: string;
};
export declare const ApiProvider: React.FC<React.PropsWithChildren & {
    appId: string;
    graphqlEndpoint: GraphqlEndpoint;
}>;
