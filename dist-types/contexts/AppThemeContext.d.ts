import { ThemeOverride, useTheme } from '@chakra-ui/react';
import '../styles.scss';
export declare const AppThemeProvider: React.FC<React.PropsWithChildren<{
    extendChakraTheme?: ThemeOverride;
}>>;
export declare const useAppTheme: typeof useTheme;
