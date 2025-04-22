import { jsx as _jsx } from "react/jsx-runtime";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import 'dayjs/locale/vi';
import { createContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { useApp } from './AppContext';
var supportedLanguages = ['zh-tw', 'zh-cn', 'en-us', 'vi', 'acsi'];
var defaultLanguage = {
    currentLanguage: 'zh-tw',
    locale: 'zh-tw',
};
var LanguageContext = createContext(defaultLanguage);
export var LanguageProvider = function (_a) {
    var children = _a.children;
    var _b = useApp(), enabledModules = _b.enabledModules, settings = _b.settings;
    var _c = useState('zh-tw'), currentLanguage = _c[0], setCurrentLanguage = _c[1];
    var _d = useState('zh-tw'), locale = _d[0], setLocale = _d[1];
    dayjs.locale('zh-tw');
    useEffect(function () {
        var browserLanguage = settings['language'] || navigator.language.split('-')[0];
        var cachedLanguage = localStorage.getItem('kolable.app.language');
        setCurrentLanguage(enabledModules.locale
            ? typeof cachedLanguage === 'string' && supportedLanguages.includes(cachedLanguage)
                ? cachedLanguage
                : supportedLanguages.includes(browserLanguage)
                    ? browserLanguage
                    : 'zh-tw'
            : 'zh-tw');
    }, [enabledModules, settings]);
    useEffect(function () {
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
    var messages = {};
    try {
        if (enabledModules.locale) {
            messages = require("../translations/locales/".concat(currentLanguage, ".json"));
        }
    }
    catch (_e) { }
    return (_jsx(LanguageContext.Provider, { value: {
            currentLanguage: currentLanguage,
            locale: locale,
            setCurrentLanguage: function (newLanguage) {
                if (supportedLanguages.includes(newLanguage)) {
                    localStorage.setItem('kolable.app.language', newLanguage);
                    setCurrentLanguage(newLanguage);
                }
            },
        }, children: _jsx(IntlProvider, { defaultLocale: "zh-tw", locale: locale, messages: messages, children: children }) }));
};
export default LanguageContext;
