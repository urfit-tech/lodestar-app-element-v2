import { jsx as _jsx } from "react/jsx-runtime";
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import parsePhoneNumber from 'libphonenumber-js';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import ReactGA from 'react-ga';
import { getBackendServerError } from '../helpers';
import { fetchCurrentGeolocation, getFingerPrintId, parsePayload } from '../hooks/util';
const defaultAuthContext = {
    isAuthenticating: window.AUTH_TOKEN ? false : true,
    isAuthenticated: false,
    currentUserRole: 'anonymous',
    currentMemberId: null,
    authToken: null,
    currentMember: null,
    permissions: {},
    isFinishedSignUpProperty: true,
};
const initLodestarWindow = () => {
    if (typeof window !== 'undefined') {
        window.lodestar = window.lodestar || {};
    }
};
const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ appId, children, }) => {
    var _a;
    const [isAuthenticating, setIsAuthenticating] = useState(defaultAuthContext.isAuthenticating);
    const [authToken, setAuthToken] = useState(window.AUTH_TOKEN || null);
    const payload = useMemo(() => (authToken ? parsePayload(authToken) : null), [authToken]);
    useEffect(() => {
        if (payload) {
            try {
                const phoneNumber = payload.phoneNumber ? parsePhoneNumber(payload.phoneNumber, 'TW') : null;
                const _window = window;
                _window.insider_object = {
                    user: {
                        gdpr_optin: true,
                        sms_optin: true,
                        email: payload.email,
                        phone_number: (phoneNumber === null || phoneNumber === void 0 ? void 0 : phoneNumber.isValid()) ? phoneNumber.number : payload.phoneNumber,
                        email_optin: true,
                    },
                };
                ReactGA.set({ userId: payload.sub });
            }
            catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(error);
                }
            }
        }
    }, [payload, window]);
    const refreshToken = useCallback(async () => {
        const fingerPrintId = await getFingerPrintId();
        const { ip, country, countryCode } = await fetchCurrentGeolocation();
        const { data: { code, result }, } = await Axios.post(`${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/refresh-token`, { appId, fingerPrintId, geoLocation: { ip, country, countryCode } }, {
            method: 'POST',
            withCredentials: true,
        });
        if (code === 'SUCCESS') {
            setAuthToken(result.authToken);
        }
        else if (code === 'E_NO_DEVICE') {
            setAuthToken(null);
            alert('您已被登出，目前有其他裝置登入這組帳號');
        }
        else {
            setAuthToken(null);
        }
        setIsAuthenticating(false);
    }, [appId]);
    const currentMember = payload && {
        id: payload.sub,
        name: payload.name,
        username: payload.username,
        email: payload.email,
        pictureUrl: payload.pictureUrl || null,
        role: payload.role,
        options: payload.options || {},
    };
    initLodestarWindow();
    if (typeof window !== 'undefined') {
        window.lodestar.getCurrentMember = () => currentMember;
        window.lodestar.getDataLayerByEvent = (event) => window.dataLayer.find((d) => d.event === event);
    }
    return (_jsx(AuthContext.Provider, { value: {
            isAuthenticating,
            isAuthenticated: Boolean(authToken),
            currentUserRole: (payload === null || payload === void 0 ? void 0 : payload.role) || 'anonymous',
            currentMemberId: (payload === null || payload === void 0 ? void 0 : payload.sub) || null,
            authToken,
            updateAuthToken: authToken => setAuthToken(authToken),
            isFinishedSignUpProperty: !!(payload === null || payload === void 0 ? void 0 : payload.isFinishedSignUpProperty),
            currentMember,
            permissions: ((_a = payload === null || payload === void 0 ? void 0 : payload.permissions) === null || _a === void 0 ? void 0 : _a.reduce((accumulator, currentValue) => {
                accumulator[currentValue] = true;
                return accumulator;
            }, {})) || {},
            refreshToken,
            register: async (data) => {
                var _a;
                return Axios.post(`${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/register`, {
                    appId: data.appId || appId,
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    isBusiness: (_a = data.isBusiness) !== null && _a !== void 0 ? _a : false,
                }, { withCredentials: true }).then(({ data: { code, message, result } }) => {
                    var _a;
                    if (code === 'SUCCESS') {
                        if (!data.withoutLogin) {
                            setAuthToken(result.authToken);
                        }
                        try {
                            const currentMemberId = (_a = jwt.decode(result.authToken)) === null || _a === void 0 ? void 0 : _a.sub;
                            const phone = sessionStorage.getItem('phone');
                            if (phone && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT) {
                                Axios.post(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, {
                                    query: `
                        mutation INSERT_MEMBER_PHONE_ONE($currentMemberId: String!, $phone: String!) {
                          insert_member_phone_one(object: { member_id: $currentMemberId, phone: $phone }) {
                            id
                          }
                        }
                    `,
                                    variables: {
                                        currentMemberId,
                                        phone,
                                    },
                                }, { headers: { Authorization: `Bearer ${result.authToken}` } });
                            }
                            const categoryIds = JSON.parse(sessionStorage.getItem('categoryIds') || '[]');
                            const memberProperties = JSON.parse(sessionStorage.getItem('memberProperties') || '[]');
                            if (categoryIds.length && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT) {
                                Axios.post(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, {
                                    query: `
                        mutation INSERT_MEMBER_CATEGORIES($memberProperties: [member_property_insert_input!]!, $data: [member_category_insert_input!]!) {
                          insert_member_property(objects: $memberProperties) {
                            affected_rows
                          }
                          insert_member_category(objects: $data) {
                            affected_rows
                          }
                        }
                      `,
                                    variables: {
                                        memberProperties: memberProperties.map(v => ({
                                            member_id: currentMemberId,
                                            property_id: v.propertyId,
                                            value: v.value,
                                        })),
                                        data: categoryIds.map((categoryId, index) => ({
                                            member_id: currentMemberId,
                                            category_id: categoryId,
                                            position: index,
                                        })),
                                    },
                                }, { headers: { Authorization: `Bearer ${result.authToken}` } });
                            }
                            const star = sessionStorage.getItem('star');
                            if (star && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT) {
                                Axios.post(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, {
                                    query: `
                        mutation SET_MEMBER_STAR($memberId: String!, $star: numeric!) {
                          update_member(where: {id: {_eq: $memberId}}, _set: {star: $star}) {
                            affected_rows
                          }
                        }                      
                      `,
                                    variables: {
                                        memberId: currentMemberId,
                                        star: parseInt(star),
                                    },
                                }, { headers: { Authorization: `Bearer ${result.authToken}` } });
                            }
                            return result.authToken;
                        }
                        catch { }
                    }
                    else {
                        setAuthToken(null);
                        throw new Error(code);
                    }
                });
            },
            login: async ({ account, password, accountLinkToken }) => {
                const fingerPrintId = await getFingerPrintId();
                const { ip, country, countryCode } = await fetchCurrentGeolocation();
                const { data: { code, message, result }, } = await Axios.post(`${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/general-login`, { appId, account, password, fingerPrintId, geoLocation: { ip, country, countryCode } }, { withCredentials: true });
                if (code === 'SUCCESS') {
                    setAuthToken(result.authToken);
                    if (accountLinkToken && result.authToken) {
                        window.location.assign(`/line-binding?accountLinkToken=${accountLinkToken}`);
                    }
                }
                else if (code === 'I_RESET_PASSWORD') {
                    window.location.assign(`/check-email?email=${account}&type=reset-password`);
                }
                else {
                    setAuthToken(null);
                    throw getBackendServerError(code, message, result);
                }
                return { code };
            },
            socialLogin: async ({ provider, providerToken, accountLinkToken, isForceLogin }) => Axios.post(`${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/social-login`, {
                appId,
                provider,
                providerToken,
                isForceLogin,
            }, { withCredentials: true }).then(async ({ data: { code, message, result } }) => {
                if (code === 'SUCCESS') {
                    setAuthToken(result.authToken);
                    const decodedToken = parsePayload(result.authToken);
                    if (!decodedToken) {
                        throw new Error('no auth token');
                    }
                    if (accountLinkToken && result.authToken) {
                        window.location.assign(`/line-binding?accountLinkToken=${accountLinkToken}`);
                    }
                }
                else {
                    setAuthToken(null);
                    throw getBackendServerError(code, message, result);
                }
            }),
            switchMember: async ({ memberId }) => {
                return Axios.post(`${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/switch-member`, {
                    memberId,
                }, { withCredentials: true, headers: { Authorization: 'Bearer ' + authToken } }).then(({ data: { code, _, result } }) => {
                    if (code === 'SUCCESS') {
                        setAuthToken(result.authToken);
                    }
                    else {
                        throw new Error(code);
                    }
                });
            },
            logout: async () => {
                localStorage.clear();
                if (typeof window !== 'undefined') {
                    window.location.assign(`${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/logout?redirect=${window.location.href}`);
                }
            },
            sendSmsCode: async ({ phoneNumber }) => Axios.post(`${process.env.NEXT_PUBLIC_API_BASE_ROOT}/sms/send-code`, {
                appId,
                phoneNumber,
            }, { withCredentials: true }).then(({ data: { code } }) => {
                if (code !== 'SUCCESS') {
                    throw new Error(code);
                }
            }),
            verifySmsCode: async ({ phoneNumber, code }) => Axios.post(`${process.env.NEXT_PUBLIC_API_BASE_ROOT}/sms/verify-code`, {
                appId,
                phoneNumber,
                code,
            }, { withCredentials: true }).then(({ data: { code, _, result } }) => {
                if (code !== 'SUCCESS' || !(result === null || result === void 0 ? void 0 : result.codeValid)) {
                    throw new Error(code);
                }
            }),
            forceLogin: async ({ account, password, accountLinkToken }) => {
                return Axios.post(`${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/force-login`, { appId, account, password }, { withCredentials: true })
                    .then(({ data: { code, result } }) => {
                    if (code === 'SUCCESS') {
                        setAuthToken(result.authToken);
                        if (accountLinkToken && result.authToken && typeof window !== 'undefined') {
                            window.location.assign(`/line-binding?accountLinkToken=${accountLinkToken}`);
                        }
                    }
                    else if (code === 'I_RESET_PASSWORD' && typeof window !== 'undefined') {
                        window.location.assign(`/check-email?email=${account}&type=reset-password`);
                    }
                    else {
                        setAuthToken(null);
                        throw new Error(code);
                    }
                })
                    .catch((error) => {
                    throw error;
                });
            },
        }, children: children }));
};
