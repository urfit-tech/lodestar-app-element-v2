"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppTheme = exports.AppThemeProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const tailwindcss_palette_generator_1 = __importDefault(require("@bobthered/tailwindcss-palette-generator"));
const react_1 = require("@chakra-ui/react");
const ramda_1 = require("ramda");
const styled_components_1 = require("styled-components");
const AppContext_1 = require("./AppContext");
const AppThemeProvider = ({ extendChakraTheme = {}, children, }) => {
    const { settings } = (0, AppContext_1.useApp)();
    const theme = (0, react_1.extendTheme)((0, ramda_1.mergeDeepRight)({
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
                    outline: () => ({
                        field: {
                            borderColor: 'var(--gray)',
                            _focus: {
                                borderColor: settings['theme.@primary-color'],
                            },
                        },
                    }),
                },
            },
            Select: {
                variants: {
                    outline: () => ({
                        field: {
                            borderColor: '#ccc',
                        },
                    }),
                },
            },
            Textarea: {
                variants: {
                    outline: () => ({
                        borderColor: 'var(--gray)',
                    }),
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
                            bg: `${settings['theme.@primary-color']}1a`,
                        },
                        _focus: {
                            bg: `${settings['theme.@primary-color']}1a`,
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
        colors: {
            ...(0, tailwindcss_palette_generator_1.default)(settings['theme.@primary-color'] || '#2d313a'),
            danger: {
                ...(0, tailwindcss_palette_generator_1.default)('#ff7d62').primary,
            },
            gray: {
                100: 'rgba(0, 0, 0, 0.1)',
                200: '#f7f8f8',
                300: '#ececec',
                400: '#cdcece',
                500: '#cdcdcd',
                600: '#9b9b9b',
                700: '#585858',
                800: '#4a4a4a',
                900: 'rgba(0, 0, 0, 0.45)',
            },
        },
    }, extendChakraTheme));
    const themeVars = Object.keys(settings)
        .filter(key => key.split('.')[0] === 'theme')
        .map(key => key.split('.')[1])
        .reduce((vars, themeKey) => {
        vars[themeKey] = settings[`theme.${themeKey}`];
        return vars;
    }, {
        '@primary-color': '#2d313a',
    });
    return ((0, jsx_runtime_1.jsx)(react_1.ChakraProvider, { theme: theme, children: children ? (0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, { theme: themeVars, children: children }) : null }));
};
exports.AppThemeProvider = AppThemeProvider;
exports.useAppTheme = react_1.useTheme;
