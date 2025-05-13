import { AppProps } from '../types/app';
type AppContextProps = AppProps & {
    loading: boolean;
    error?: Error;
    refetch?: () => void;
};
export declare const useApp: () => AppContextProps;
export declare const AppProvider: React.FC<React.PropsWithChildren<{
    appId: string;
}>>;
export {};
