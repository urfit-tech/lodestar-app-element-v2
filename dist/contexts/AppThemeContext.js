var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import paletteGenerator from '@bobthered/tailwindcss-palette-generator';
import { ChakraProvider, extendTheme, useTheme } from '@chakra-ui/react';
import { mergeDeepRight } from 'ramda';
import { ThemeProvider } from 'styled-components';
import { useApp } from './AppContext';
export var AppThemeProvider = function (_a) {
    var _b = _a.extendChakraTheme, extendChakraTheme = _b === void 0 ? {} : _b, children = _a.children;
    var settings = useApp().settings;
    var theme = extendTheme(mergeDeepRight({
        components: {
            Button: {
                baseStyle: {
                    fontWeight: '400',
                    borderRadius: '2px',
                    _focus: {
                        boxShadow: '0',
                    },
                },
                variants: {
                    primary: {
                        background: 'primary.500',
                        color: '#ffffff',
                        _hover: {
                            background: 'primary.300',
                        },
                    },
                    outline: {
                        border: 'solid 1px',
                        borderColor: 'var(--gray)',
                        color: '#585858',
                        _hover: {
                            background: 'transparent',
                            borderColor: settings['theme.@primary-color'] || '#000000',
                            color: settings['theme.@primary-color'] || '#000000',
                        },
                    },
                    ghost: {
                        _hover: {
                            color: 'primary.400',
                            background: 'transparent',
                        },
                    },
                    link: {
                        color: 'primary.500',
                    },
                },
            },
            CloseButton: {
                baseStyle: {
                    _focus: {
                        boxShadow: '0',
                    },
                },
            },
            Divider: {
                baseStyle: {
                    borderColor: '#e8e8e8',
                },
            },
            IconButton: {
                download: {
                    background: 'transparent',
                },
            },
            Input: {
                variants: {
                    outline: function () { return ({
                        field: {
                            borderColor: 'var(--gray)',
                            _focus: {
                                borderColor: settings['theme.@primary-color'],
                            },
                        },
                    }); },
                },
            },
            Select: {
                variants: {
                    outline: function () { return ({
                        field: {
                            borderColor: '#ccc',
                        },
                    }); },
                },
            },
            Textarea: {
                variants: {
                    outline: function () { return ({
                        borderColor: 'var(--gray)',
                    }); },
                },
            },
            Radio: {
                baseStyle: {
                    _focus: {
                        boxShadow: 'none',
                    },
                },
            },
            FormError: {
                baseStyle: {
                    text: {
                        color: 'danger.500',
                    },
                },
            },
            Menu: {
                baseStyle: {
                    item: {
                        _active: {
                            bg: "".concat(settings['theme.@primary-color'], "1a"),
                        },
                        _focus: {
                            bg: "".concat(settings['theme.@primary-color'], "1a"),
                        },
                    },
                },
            },
            Modal: {
                baseStyle: {
                    dialog: {
                        borderRadius: '2px',
                    },
                },
            },
            Tooltip: {
                baseStyle: {
                    bg: '#4a4a4a',
                    borderRadius: '4px',
                    fontWeight: '500',
                    fontSize: '12px',
                },
            },
            Tabs: {
                baseStyle: {
                    tab: {
                        _focus: {
                            boxShadow: 0,
                        },
                    },
                },
            },
        },
        colors: __assign(__assign({}, paletteGenerator(settings['theme.@primary-color'] || '#2d313a')), { danger: __assign({}, paletteGenerator('#ff7d62').primary), gray: {
                100: 'rgba(0, 0, 0, 0.1)',
                200: '#f7f8f8',
                300: '#ececec',
                400: '#cdcece',
                500: '#cdcdcd',
                600: '#9b9b9b',
                700: '#585858',
                800: '#4a4a4a',
                900: 'rgba(0, 0, 0, 0.45)',
            } }),
    }, extendChakraTheme));
    var themeVars = Object.keys(settings)
        .filter(function (key) { return key.split('.')[0] === 'theme'; })
        .map(function (key) { return key.split('.')[1]; })
        .reduce(function (vars, themeKey) {
        vars[themeKey] = settings["theme.".concat(themeKey)];
        return vars;
    }, {
        '@primary-color': '#2d313a',
    });
    return (_jsx(ChakraProvider, { theme: theme, children: children ? _jsx(ThemeProvider, { theme: themeVars, children: children }) : null }));
};
export var useAppTheme = useTheme;
