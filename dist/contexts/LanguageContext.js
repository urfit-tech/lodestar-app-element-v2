"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const dayjs_1 = __importDefault(require("dayjs"));
require("dayjs/locale/zh-tw");
require("dayjs/locale/zh-cn");
require("dayjs/locale/en");
require("dayjs/locale/vi");
const react_1 = require("react");
const react_intl_1 = require("react-intl");
const AppContext_1 = require("./AppContext");
const supportedLanguages = ['zh-tw', 'zh-cn', 'en-us', 'vi', 'acsi'];
const defaultLanguage = {
    currentLanguage: 'zh-tw',
    locale: 'zh-tw',
};
const LanguageContext = (0, react_1.createContext)(defaultLanguage);
const LanguageProvider = ({ children }) => {
    const { enabledModules, settings } = (0, AppContext_1.useApp)();
    const [currentLanguage, setCurrentLanguage] = (0, react_1.useState)('zh-tw');
    const [locale, setLocale] = (0, react_1.useState)('zh-tw');
    dayjs_1.default.locale('zh-tw');
    (0, react_1.useEffect)(() => {
        const browserLanguage = settings['language'] || navigator.language.split('-')[0];
        const cachedLanguage = localStorage.getItem('kolable.app.language');
        setCurrentLanguage(enabledModules.locale
            ? typeof cachedLanguage === 'string' && supportedLanguages.includes(cachedLanguage)
                ? cachedLanguage
                : supportedLanguages.includes(browserLanguage)
                    ? browserLanguage
                    : 'zh-tw'
            : 'zh-tw');
    }, [enabledModules, settings]);
    (0, react_1.useEffect)(() => {
        switch (currentLanguage) {
            case 'zh-tw':
            case 'acsi':
                setLocale('zh-tw');
                dayjs_1.default.locale('zh-tw');
                break;
            default:
                setLocale(currentLanguage);
                dayjs_1.default.locale('zh-tw');
        }
    }, [currentLanguage]);
    let messages = {};
    try {
        if (enabledModules.locale) {
            messages = require(`../translations/locales/${currentLanguage}.json`);
        }
    }
    catch { }
    return ((0, jsx_runtime_1.jsx)(LanguageContext.Provider, { value: {
            currentLanguage,
            locale,
            setCurrentLanguage: (newLanguage) => {
                if (supportedLanguages.includes(newLanguage)) {
                    localStorage.setItem('kolable.app.language', newLanguage);
                    setCurrentLanguage(newLanguage);
                }
            },
        }, children: (0, jsx_runtime_1.jsx)(react_intl_1.IntlProvider, { defaultLocale: "zh-tw", locale: locale, messages: messages, children: children }) }));
};
exports.LanguageProvider = LanguageProvider;
exports.default = LanguageContext;
