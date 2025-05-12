import { ThemeOverride } from '@chakra-ui/react';
export declare const LodestarAppProvider: React.FC<React.PropsWithChildren & {
    appId: string;
    apiBaseRootHost: string;
    extend?: {
        chakraTheme?: ThemeOverride;
    };
}>;
