import { jsx as _jsx } from "react/jsx-runtime";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import 'dayjs/locale/vi';
import { createContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { useApp } from './AppContext';
const supportedLanguages = ['zh-tw', 'zh-cn', 'en-us', 'vi', 'acsi'];
const defaultLanguage = {
    currentLanguage: 'zh-tw',
    locale: 'zh-tw',
};
const LanguageContext = createContext(defaultLanguage);
export const LanguageProvider = ({ children }) => {
    const { enabledModules, settings } = useApp();
    const [currentLanguage, setCurrentLanguage] = useState('zh-tw');
    const [locale, setLocale] = useState('zh-tw');
    dayjs.locale('zh-tw');
    useEffect(() => {
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
    useEffect(() => {
        switch (currentLanguage) {
            case 'zh-tw':
            case 'acsi':
                setLocale('zh-tw');
                dayjs.locale('zh-tw');
                break;
            default:
                setLocale(currentLanguage);
                dayjs.locale('zh-tw');
        }
    }, [currentLanguage]);
    let messages = {};
    try {
        if (enabledModules.locale) {
            messages = require(`../translations/locales/${currentLanguage}.json`);
        }
    }
    catch { }
    return (_jsx(LanguageContext.Provider, { value: {
            currentLanguage,
            locale,
            setCurrentLanguage: (newLanguage) => {
                if (supportedLanguages.includes(newLanguage)) {
                    localStorage.setItem('kolable.app.language', newLanguage);
                    setCurrentLanguage(newLanguage);
                }
            },
        }, children: _jsx(IntlProvider, { defaultLocale: "zh-tw", locale: locale, messages: messages, children: children }) }));
};
export default LanguageContext;
