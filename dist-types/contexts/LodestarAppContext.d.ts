import { ThemeOverride } from '@chakra-ui/react';
import { GraphqlEndpoint } from './ApiContext';
export declare const LodestarAppProvider: React.FC<React.PropsWithChildren & {
    appId: string;
    apiBaseRootHost: string;
    graphqlEndpoint: GraphqlEndpoint;
    extend?: {
        chakraTheme?: ThemeOverride;
    };
}>;
