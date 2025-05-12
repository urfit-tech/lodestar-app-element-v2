var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import parsePhoneNumber from 'libphonenumber-js';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import ReactGA from 'react-ga';
import { getBackendServerError } from '../helpers';
import { fetchCurrentGeolocation, getFingerPrintId, parsePayload } from '../hooks/util';
var defaultAuthContext = {
    isAuthenticating: window.AUTH_TOKEN ? false : true,
    isAuthenticated: false,
    currentUserRole: 'anonymous',
    currentMemberId: null,
    authToken: null,
    currentMember: null,
    permissions: {},
    isFinishedSignUpProperty: true,
};
var initLodestarWindow = function () {
    if (typeof window !== 'undefined') {
        window.lodestar = window.lodestar || {};
    }
};
var AuthContext = createContext(defaultAuthContext);
export var useAuth = function () { return useContext(AuthContext); };
export var AuthProvider = function (_a) {
    var _b;
    var appId = _a.appId, apiBaseRootHost = _a.apiBaseRootHost, children = _a.children;
    var _c = useState(defaultAuthContext.isAuthenticating), isAuthenticating = _c[0], setIsAuthenticating = _c[1];
    var _d = useState(window.AUTH_TOKEN || null), authToken = _d[0], setAuthToken = _d[1];
    var payload = useMemo(function () { return (authToken ? parsePayload(authToken) : null); }, [authToken]);
    useEffect(function () {
        if (payload) {
            try {
                var phoneNumber = payload.phoneNumber ? parsePhoneNumber(payload.phoneNumber, 'TW') : null;
                var _window = window;
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
    var refreshToken = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var fingerPrintId, _a, ip, country, countryCode, _b, code, result;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, getFingerPrintId()];
                case 1:
                    fingerPrintId = _c.sent();
                    return [4 /*yield*/, fetchCurrentGeolocation()];
                case 2:
                    _a = _c.sent(), ip = _a.ip, country = _a.country, countryCode = _a.countryCode;
                    return [4 /*yield*/, Axios.post("".concat(apiBaseRootHost, "/auth/refresh-token"), { appId: appId, fingerPrintId: fingerPrintId, geoLocation: { ip: ip, country: country, countryCode: countryCode } }, {
                            method: 'POST',
                            withCredentials: true,
                        })];
                case 3:
                    _b = (_c.sent()).data, code = _b.code, result = _b.result;
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
                    return [2 /*return*/];
            }
        });
    }); }, [appId]);
    var currentMember = payload && {
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
        window.lodestar.getCurrentMember = function () { return currentMember; };
        window.lodestar.getDataLayerByEvent = function (event) {
            return window.dataLayer.find(function (d) { return d.event === event; });
        };
    }
    return (_jsx(AuthContext.Provider, { value: {
            isAuthenticating: isAuthenticating,
            isAuthenticated: Boolean(authToken),
            currentUserRole: (payload === null || payload === void 0 ? void 0 : payload.role) || 'anonymous',
            currentMemberId: (payload === null || payload === void 0 ? void 0 : payload.sub) || null,
            authToken: authToken,
            updateAuthToken: function (authToken) { return setAuthToken(authToken); },
            isFinishedSignUpProperty: !!(payload === null || payload === void 0 ? void 0 : payload.isFinishedSignUpProperty),
            currentMember: currentMember,
            permissions: ((_b = payload === null || payload === void 0 ? void 0 : payload.permissions) === null || _b === void 0 ? void 0 : _b.reduce(function (accumulator, currentValue) {
                accumulator[currentValue] = true;
                return accumulator;
            }, {})) || {},
            refreshToken: refreshToken,
            register: function (data) { return __awaiter(void 0, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    return [2 /*return*/, Axios.post("".concat(apiBaseRootHost, "/auth/register"), {
                            appId: data.appId || appId,
                            username: data.username,
                            email: data.email,
                            password: data.password,
                            isBusiness: (_a = data.isBusiness) !== null && _a !== void 0 ? _a : false,
                        }, { withCredentials: true }).then(function (_a) {
                            var _b;
                            var _c = _a.data, code = _c.code, message = _c.message, result = _c.result;
                            if (code === 'SUCCESS') {
                                if (!data.withoutLogin) {
                                    setAuthToken(result.authToken);
                                }
                                try {
                                    var currentMemberId_1 = (_b = jwt.decode(result.authToken)) === null || _b === void 0 ? void 0 : _b.sub;
                                    var phone = sessionStorage.getItem('phone');
                                    if (phone && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT) {
                                        Axios.post(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, {
                                            query: "\n                        mutation INSERT_MEMBER_PHONE_ONE($currentMemberId: String!, $phone: String!) {\n                          insert_member_phone_one(object: { member_id: $currentMemberId, phone: $phone }) {\n                            id\n                          }\n                        }\n                    ",
                                            variables: {
                                                currentMemberId: currentMemberId_1,
                                                phone: phone,
                                            },
                                        }, { headers: { Authorization: "Bearer ".concat(result.authToken) } });
                                    }
                                    var categoryIds = JSON.parse(sessionStorage.getItem('categoryIds') || '[]');
                                    var memberProperties = JSON.parse(sessionStorage.getItem('memberProperties') || '[]');
                                    if (categoryIds.length && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT) {
                                        Axios.post(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, {
                                            query: "\n                        mutation INSERT_MEMBER_CATEGORIES($memberProperties: [member_property_insert_input!]!, $data: [member_category_insert_input!]!) {\n                          insert_member_property(objects: $memberProperties) {\n                            affected_rows\n                          }\n                          insert_member_category(objects: $data) {\n                            affected_rows\n                          }\n                        }\n                      ",
                                            variables: {
                                                memberProperties: memberProperties.map(function (v) { return ({
                                                    member_id: currentMemberId_1,
                                                    property_id: v.propertyId,
                                                    value: v.value,
                                                }); }),
                                                data: categoryIds.map(function (categoryId, index) { return ({
                                                    member_id: currentMemberId_1,
                                                    category_id: categoryId,
                                                    position: index,
                                                }); }),
                                            },
                                        }, { headers: { Authorization: "Bearer ".concat(result.authToken) } });
                                    }
                                    var star = sessionStorage.getItem('star');
                                    if (star && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT) {
                                        Axios.post(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, {
                                            query: "\n                        mutation SET_MEMBER_STAR($memberId: String!, $star: numeric!) {\n                          update_member(where: {id: {_eq: $memberId}}, _set: {star: $star}) {\n                            affected_rows\n                          }\n                        }                      \n                      ",
                                            variables: {
                                                memberId: currentMemberId_1,
                                                star: parseInt(star),
                                            },
                                        }, { headers: { Authorization: "Bearer ".concat(result.authToken) } });
                                    }
                                    return result.authToken;
                                }
                                catch (_d) { }
                            }
                            else {
                                setAuthToken(null);
                                throw new Error(code);
                            }
                        })];
                });
            }); },
            login: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                var fingerPrintId, _c, ip, country, countryCode, _d, code, message, result;
                var account = _b.account, password = _b.password, accountLinkToken = _b.accountLinkToken;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, getFingerPrintId()];
                        case 1:
                            fingerPrintId = _e.sent();
                            return [4 /*yield*/, fetchCurrentGeolocation()];
                        case 2:
                            _c = _e.sent(), ip = _c.ip, country = _c.country, countryCode = _c.countryCode;
                            return [4 /*yield*/, Axios.post("".concat(apiBaseRootHost, "/auth/general-login"), { appId: appId, account: account, password: password, fingerPrintId: fingerPrintId, geoLocation: { ip: ip, country: country, countryCode: countryCode } }, { withCredentials: true })];
                        case 3:
                            _d = (_e.sent()).data, code = _d.code, message = _d.message, result = _d.result;
                            if (code === 'SUCCESS') {
                                setAuthToken(result.authToken);
                                if (accountLinkToken && result.authToken) {
                                    window.location.assign("/line-binding?accountLinkToken=".concat(accountLinkToken));
                                }
                            }
                            else if (code === 'I_RESET_PASSWORD') {
                                window.location.assign("/check-email?email=".concat(account, "&type=reset-password"));
                            }
                            else {
                                setAuthToken(null);
                                throw getBackendServerError(code, message, result);
                            }
                            return [2 /*return*/, { code: code }];
                    }
                });
            }); },
            socialLogin: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                var provider = _b.provider, providerToken = _b.providerToken, accountLinkToken = _b.accountLinkToken, isForceLogin = _b.isForceLogin;
                return __generator(this, function (_c) {
                    return [2 /*return*/, Axios.post("".concat(apiBaseRootHost, "/auth/social-login"), {
                            appId: appId,
                            provider: provider,
                            providerToken: providerToken,
                            isForceLogin: isForceLogin,
                        }, { withCredentials: true }).then(function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                            var decodedToken;
                            var _c = _b.data, code = _c.code, message = _c.message, result = _c.result;
                            return __generator(this, function (_d) {
                                if (code === 'SUCCESS') {
                                    setAuthToken(result.authToken);
                                    decodedToken = parsePayload(result.authToken);
                                    if (!decodedToken) {
                                        throw new Error('no auth token');
                                    }
                                    if (accountLinkToken && result.authToken) {
                                        window.location.assign("/line-binding?accountLinkToken=".concat(accountLinkToken));
                                    }
                                }
                                else {
                                    setAuthToken(null);
                                    throw getBackendServerError(code, message, result);
                                }
                                return [2 /*return*/];
                            });
                        }); })];
                });
            }); },
            switchMember: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                var memberId = _b.memberId;
                return __generator(this, function (_c) {
                    return [2 /*return*/, Axios.post("".concat(apiBaseRootHost, "/auth/switch-member"), {
                            memberId: memberId,
                        }, { withCredentials: true, headers: { Authorization: 'Bearer ' + authToken } }).then(function (_a) {
                            var _b = _a.data, code = _b.code, _ = _b._, result = _b.result;
                            if (code === 'SUCCESS') {
                                setAuthToken(result.authToken);
                            }
                            else {
                                throw new Error(code);
                            }
                        })];
                });
            }); },
            logout: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    localStorage.clear();
                    if (typeof window !== 'undefined') {
                        window.location.assign("".concat(apiBaseRootHost, "/auth/logout?redirect=").concat(window.location.href));
                    }
                    return [2 /*return*/];
                });
            }); },
            sendSmsCode: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                var phoneNumber = _b.phoneNumber;
                return __generator(this, function (_c) {
                    return [2 /*return*/, Axios.post("".concat(apiBaseRootHost, "/sms/send-code"), {
                            appId: appId,
                            phoneNumber: phoneNumber,
                        }, { withCredentials: true }).then(function (_a) {
                            var code = _a.data.code;
                            if (code !== 'SUCCESS') {
                                throw new Error(code);
                            }
                        })];
                });
            }); },
            verifySmsCode: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                var phoneNumber = _b.phoneNumber, code = _b.code;
                return __generator(this, function (_c) {
                    return [2 /*return*/, Axios.post("".concat(apiBaseRootHost, "/sms/verify-code"), {
                            appId: appId,
                            phoneNumber: phoneNumber,
                            code: code,
                        }, { withCredentials: true }).then(function (_a) {
                            var _b = _a.data, code = _b.code, _ = _b._, result = _b.result;
                            if (code !== 'SUCCESS' || !(result === null || result === void 0 ? void 0 : result.codeValid)) {
                                throw new Error(code);
                            }
                        })];
                });
            }); },
            forceLogin: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                var account = _b.account, password = _b.password, accountLinkToken = _b.accountLinkToken;
                return __generator(this, function (_c) {
                    return [2 /*return*/, Axios.post("".concat(apiBaseRootHost, "/auth/force-login"), { appId: appId, account: account, password: password }, { withCredentials: true })
                            .then(function (_a) {
                            var _b = _a.data, code = _b.code, result = _b.result;
                            if (code === 'SUCCESS') {
                                setAuthToken(result.authToken);
                                if (accountLinkToken && result.authToken && typeof window !== 'undefined') {
                                    window.location.assign("/line-binding?accountLinkToken=".concat(accountLinkToken));
                                }
                            }
                            else if (code === 'I_RESET_PASSWORD' && typeof window !== 'undefined') {
                                window.location.assign("/check-email?email=".concat(account, "&type=reset-password"));
                            }
                            else {
                                setAuthToken(null);
                                throw new Error(code);
                            }
                        })
                            .catch(function (error) {
                            throw error;
                        })];
                });
            }); },
        }, children: children }));
};
