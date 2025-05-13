"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LodestarAppProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ApiContext_1 = require("./ApiContext");
const AppContext_1 = require("./AppContext");
const AppThemeContext_1 = require("./AppThemeContext");
const AuthContext_1 = require("./AuthContext");
const LanguageContext_1 = require("./LanguageContext");
const LodestarAppProvider = ({ appId, children, extend }) => {
    const LodestarAppProvider = (0, react_1.createContext)({ appId });
    return ((0, jsx_runtime_1.jsx)(LodestarAppProvider.Provider, { value: { appId }, children: (0, jsx_runtime_1.jsx)(AuthContext_1.AuthProvider, { appId: appId, children: (0, jsx_runtime_1.jsx)(ApiContext_1.ApiProvider, { appId: appId, children: (0, jsx_runtime_1.jsx)(AppContext_1.AppProvider, { appId: appId, children: (0, jsx_runtime_1.jsx)(LanguageContext_1.LanguageProvider, { children: (0, jsx_runtime_1.jsx)(AppThemeContext_1.AppThemeProvider, { extendChakraTheme: extend === null || extend === void 0 ? void 0 : extend.chakraTheme, children: children }) }) }) }) }) }));
};
exports.LodestarAppProvider = LodestarAppProvider;
