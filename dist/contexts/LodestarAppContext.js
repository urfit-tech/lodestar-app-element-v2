import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from 'react';
import { ApiProvider } from './ApiContext';
import { AppProvider } from './AppContext';
import { AppThemeProvider } from './AppThemeContext';
import { AuthProvider } from './AuthContext';
import { LanguageProvider } from './LanguageContext';
export var LodestarAppProvider = function (_a) {
    var appId = _a.appId, apiBaseRootHost = _a.apiBaseRootHost, children = _a.children, extend = _a.extend;
    var LodestarAppProvider = createContext({ appId: appId });
    return (_jsx(LodestarAppProvider.Provider, { value: { appId: appId }, children: _jsx(AuthProvider, { appId: appId, apiBaseRootHost: apiBaseRootHost, children: _jsx(ApiProvider, { appId: appId, children: _jsx(AppProvider, { appId: appId, children: _jsx(LanguageProvider, { children: _jsx(AppThemeProvider, { extendChakraTheme: extend === null || extend === void 0 ? void 0 : extend.chakraTheme, children: children }) }) }) }) }) }));
};
