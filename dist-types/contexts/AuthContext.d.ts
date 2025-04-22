import { Permission } from '../types/app';
import { Member, UserRole } from '../types/data';
type ProviderType = 'facebook' | 'google' | 'line' | 'parenting' | 'commonhealth' | 'cw';
type AuthProps = {
    isAuthenticating: boolean;
    isAuthenticated: boolean;
    currentUserRole: UserRole;
    currentMemberId: string | null;
    authToken: string | null;
    isFinishedSignUpProperty: boolean;
    updateAuthToken?: (authToken: string | null) => void;
    currentMember: Pick<Member, 'id' | 'name' | 'username' | 'email' | 'pictureUrl' | 'role' | 'options'> | null;
    permissions: {
        [key in Permission]?: boolean;
    };
    refreshToken?: () => Promise<void>;
    register?: (data: {
        appId?: string;
        username: string;
        email: string;
        password: string;
        withoutLogin?: boolean;
        isBusiness?: boolean;
    }) => Promise<any>;
    login?: (data: {
        account: string;
        password: string;
        accountLinkToken?: string;
    }) => Promise<{
        code: string;
    }>;
    socialLogin?: (data: {
        provider: ProviderType;
        providerToken: any;
        accountLinkToken?: string;
        isForceLogin?: boolean;
    }) => Promise<void>;
    switchMember?: (data: {
        memberId: string;
    }) => Promise<void>;
    logout?: () => Promise<void>;
    sendSmsCode?: (data: {
        phoneNumber: string;
    }) => Promise<void>;
    verifySmsCode?: (data: {
        phoneNumber: string;
        code: string;
    }) => Promise<void>;
    forceLogin?: (data: {
        account: string;
        password: string;
        accountLinkToken?: string;
    }) => Promise<void>;
};
export declare const useAuth: () => AuthProps;
export declare const AuthProvider: React.FC<React.PropsWithChildren<{
    appId: string;
    apiBaseRootHost: string;
    envGraphqlPhEndpoint: string;
}>>;
export {};
