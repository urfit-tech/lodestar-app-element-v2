import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from 'react';
import { ApiProvider } from './ApiContext';
import { AppProvider } from './AppContext';
import { AppThemeProvider } from './AppThemeContext';
import { AuthProvider } from './AuthContext';
import { LanguageProvider } from './LanguageContext';
export const LodestarAppProvider = ({ appId, children, extend }) => {
    const LodestarAppProvider = createContext({ appId });
    return (_jsx(LodestarAppProvider.Provider, { value: { appId }, children: _jsx(AuthProvider, { appId: appId, children: _jsx(ApiProvider, { appId: appId, children: _jsx(AppProvider, { appId: appId, children: _jsx(LanguageProvider, { children: _jsx(AppThemeProvider, { extendChakraTheme: extend?.chakraTheme, children: children }) }) }) }) }) }));
};
