import { default as React } from 'react';
import { ThemeOverride, useTheme } from '@chakra-ui/react';
export declare const AppThemeProvider: React.FC<React.PropsWithChildren<{
    extendChakraTheme?: ThemeOverride;
}>>;
export declare const useAppTheme: typeof useTheme;
