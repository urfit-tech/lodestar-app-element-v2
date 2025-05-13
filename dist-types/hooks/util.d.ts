import { Member } from '../types/data';
import { ResourceType } from './resource';
export declare const useTappay: () => {
    TPDirect: any;
};
export declare const useCurrency: (currencyId?: string, coinUnit?: string) => {
    formatCurrency: (value: number) => string;
};
export declare const getCookie: (cookieName: string) => string;
export declare const getResourceByProductId: (productId: string) => {
    type: ResourceType;
    target: string;
};
export declare const useToastMessage: () => (options: {
    title?: string;
    status?: "info" | "warning" | "success" | "error";
    duration?: number | null;
    position?: "top" | "top-right" | "top-left" | "bottom" | "bottom-right" | "bottom-left";
    responseCode?: string;
}) => void;
export declare const getFingerPrintId: () => Promise<string>;
export declare const fetchCurrentGeolocation: () => Promise<{
    ip: string;
    country: "Taiwan";
    countryCode: "TW";
    error: null;
} | {
    ip: null;
    country: null;
    countryCode: null;
    error: unknown;
}>;
export type AuthTokenPayload = {
    sub: string;
    orgId?: string;
    appId: string;
    name: string;
    username: string;
    email: string;
    phoneNumber?: string;
    pictureUrl?: string;
    role: string;
    permissions: string[];
    options?: {
        [key: string]: any;
    };
    isFinishedSignUpProperty?: boolean;
    isBusiness?: boolean | null;
    loggedInMembers?: Member[];
};
export declare const parsePayload: (authToken: string) => AuthTokenPayload | null;
