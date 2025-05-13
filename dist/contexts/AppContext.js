"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProvider = exports.useApp = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("@apollo/client");
const react_1 = require("react");
const AuthContext_1 = require("./AuthContext");
const defaultAppContextProps = {
    id: '',
    orgId: null,
    name: '',
    title: null,
    description: null,
    host: '',
    hosts: [],
    enabledModules: {},
    appPlanId: '',
    navs: [],
    settings: {},
    secrets: {},
    currencyId: 'TWD',
    currencies: {},
    loading: true,
    options: {
        video_duration: 0,
        watched_seconds: 0,
    },
    endedAt: null,
};
const AppContext = (0, react_1.createContext)(defaultAppContextProps);
const useApp = () => (0, react_1.useContext)(AppContext);
exports.useApp = useApp;
const AppProvider = ({ appId, children }) => {
    var _a, _b;
    const { authToken, refreshToken } = (0, AuthContext_1.useAuth)();
    const { data, loading, error, refetch } = (0, client_1.useQuery)((0, client_1.gql) `
      query GET_APP($appId: String!) {
        currency {
          id
          name
          label
          unit
          minor_units
        }

        app_by_pk(id: $appId) {
          id
          org_id
          name
          title
          description
          app_modules {
            id
            module_id
          }
          app_plan_id
          app_navs(order_by: { position: asc }, where: { parent_id: { _is_null: true } }) {
            id
            block
            position
            label
            icon
            href
            external
            locale
            tag
            parent_id
            sub_app_navs(order_by: { position: asc }) {
              id
              block
              position
              label
              icon
              href
              external
              locale
              tag
              parent_id
            }
          }
          app_settings {
            key
            value
          }
          app_secrets {
            key
            value
          }
          app_hosts(order_by: { priority: asc }) {
            host
          }
          options
          ended_at
        }
      }
    `, {
        variables: { appId },
        context: { important: true },
    });
    const settings = (0, react_1.useMemo)(() => { var _a; return Object.fromEntries(((_a = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _a === void 0 ? void 0 : _a.app_settings.map(v => [v.key, v.value])) || []); }, [(_a = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _a === void 0 ? void 0 : _a.app_settings]);
    const secrets = (0, react_1.useMemo)(() => { var _a; return Object.fromEntries(((_a = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _a === void 0 ? void 0 : _a.app_secrets.map(v => [v.key, v.value])) || []); }, [(_b = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _b === void 0 ? void 0 : _b.app_secrets]);
    const app = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d;
        return (data === null || data === void 0 ? void 0 : data.app_by_pk)
            ? {
                loading,
                error,
                refetch,
                id: data.app_by_pk.id,
                orgId: data.app_by_pk.org_id || null,
                name: data.app_by_pk.name || '',
                title: data.app_by_pk.title || null,
                description: data.app_by_pk.description || null,
                host: (_c = (_b = (_a = data.app_by_pk.app_hosts) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.host) !== null && _c !== void 0 ? _c : (typeof window !== 'undefined' ? window.location.host : ''),
                hosts: ((_d = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _d === void 0 ? void 0 : _d.app_hosts.map(v => v.host)) || [],
                enabledModules: Object.fromEntries(data.app_by_pk.app_modules.map(v => [v.module_id, true]) || []),
                appPlanId: data === null || data === void 0 ? void 0 : data.app_by_pk.app_plan_id,
                navs: data.app_by_pk.app_navs.map(appNav => ({
                    id: appNav.id,
                    block: appNav.block,
                    position: appNav.position,
                    label: appNav.label,
                    icon: appNav.icon || null,
                    href: appNav.href,
                    external: appNav.external,
                    locale: appNav.locale,
                    tag: appNav.tag || null,
                    parentId: appNav.parent_id || null,
                    subNavs: appNav.sub_app_navs.map(v => ({
                        id: v.id,
                        block: v.block,
                        position: v.position,
                        label: v.label,
                        icon: v.icon || null,
                        href: v.href,
                        external: v.external,
                        locale: v.locale,
                        tag: v.tag || null,
                        parentId: v.parent_id || null,
                    })),
                })),
                settings,
                secrets,
                currencyId: settings['currency_id'] || 'TWD',
                currencies: (data === null || data === void 0 ? void 0 : data.currency.reduce((accumulator, currency) => {
                    accumulator[currency.id] = {
                        id: currency.id,
                        name: currency.id === 'LSC' && settings['coin.name'] ? settings['coin.name'] : currency.name,
                        label: currency.id === 'LSC' && settings['coin.label'] ? settings['coin.label'] : currency.label,
                        unit: currency.id === 'LSC' && settings['coin.unit'] ? settings['coin.unit'] : currency.unit,
                        minorUnits: currency.minor_units ? currency.minor_units : 0,
                    };
                    return accumulator;
                }, {})) || {},
                options: data.app_by_pk.options,
                endedAt: data.app_by_pk.ended_at || null,
            }
            : defaultAppContextProps;
    }, [data === null || data === void 0 ? void 0 : data.app_by_pk, data === null || data === void 0 ? void 0 : data.currency, error, loading, refetch, secrets, settings]);
    (0, react_1.useEffect)(() => {
        if (!authToken) {
            refreshToken === null || refreshToken === void 0 ? void 0 : refreshToken();
        }
    }, [appId, authToken, refreshToken]);
    return (0, jsx_runtime_1.jsx)(AppContext.Provider, { value: app, children: children });
};
exports.AppProvider = AppProvider;
