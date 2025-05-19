import { default as React } from 'react';
import { ThemeOverride } from '@chakra-ui/react';
export declare const LodestarAppProvider: React.FC<React.PropsWithChildren & {
    appId: string;
    extend?: {
        chakraTheme?: ThemeOverride;
    };
}>;
