var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { gql, useQuery } from '@apollo/client';
import { createContext, useContext, useEffect, useMemo } from 'react';
import { useAuth } from './AuthContext';
var defaultAppContextProps = {
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
var AppContext = createContext(defaultAppContextProps);
export var useApp = function () { return useContext(AppContext); };
export var AppProvider = function (_a) {
    var _b, _c;
    var appId = _a.appId, children = _a.children;
    var _d = useAuth(), authToken = _d.authToken, refreshToken = _d.refreshToken;
    var _e = useQuery(gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query GET_APP($appId: String!) {\n        currency {\n          id\n          name\n          label\n          unit\n          minor_units\n        }\n\n        app_by_pk(id: $appId) {\n          id\n          org_id\n          name\n          title\n          description\n          app_modules {\n            id\n            module_id\n          }\n          app_plan_id\n          app_navs(order_by: { position: asc }, where: { parent_id: { _is_null: true } }) {\n            id\n            block\n            position\n            label\n            icon\n            href\n            external\n            locale\n            tag\n            parent_id\n            sub_app_navs(order_by: { position: asc }) {\n              id\n              block\n              position\n              label\n              icon\n              href\n              external\n              locale\n              tag\n              parent_id\n            }\n          }\n          app_settings {\n            key\n            value\n          }\n          app_secrets {\n            key\n            value\n          }\n          app_hosts(order_by: { priority: asc }) {\n            host\n          }\n          options\n          ended_at\n        }\n      }\n    "], ["\n      query GET_APP($appId: String!) {\n        currency {\n          id\n          name\n          label\n          unit\n          minor_units\n        }\n\n        app_by_pk(id: $appId) {\n          id\n          org_id\n          name\n          title\n          description\n          app_modules {\n            id\n            module_id\n          }\n          app_plan_id\n          app_navs(order_by: { position: asc }, where: { parent_id: { _is_null: true } }) {\n            id\n            block\n            position\n            label\n            icon\n            href\n            external\n            locale\n            tag\n            parent_id\n            sub_app_navs(order_by: { position: asc }) {\n              id\n              block\n              position\n              label\n              icon\n              href\n              external\n              locale\n              tag\n              parent_id\n            }\n          }\n          app_settings {\n            key\n            value\n          }\n          app_secrets {\n            key\n            value\n          }\n          app_hosts(order_by: { priority: asc }) {\n            host\n          }\n          options\n          ended_at\n        }\n      }\n    "]))), {
        variables: { appId: appId },
        context: { important: true },
    }), data = _e.data, loading = _e.loading, error = _e.error, refetch = _e.refetch;
    var settings = useMemo(function () { var _a; return Object.fromEntries(((_a = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _a === void 0 ? void 0 : _a.app_settings.map(function (v) { return [v.key, v.value]; })) || []); }, [(_b = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _b === void 0 ? void 0 : _b.app_settings]);
    var secrets = useMemo(function () { var _a; return Object.fromEntries(((_a = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _a === void 0 ? void 0 : _a.app_secrets.map(function (v) { return [v.key, v.value]; })) || []); }, [(_c = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _c === void 0 ? void 0 : _c.app_secrets]);
    var app = useMemo(function () {
        var _a, _b, _c, _d;
        return (data === null || data === void 0 ? void 0 : data.app_by_pk)
            ? {
                loading: loading,
                error: error,
                refetch: refetch,
                id: data.app_by_pk.id,
                orgId: data.app_by_pk.org_id || null,
                name: data.app_by_pk.name || '',
                title: data.app_by_pk.title || null,
                description: data.app_by_pk.description || null,
                host: (_c = (_b = (_a = data.app_by_pk.app_hosts) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.host) !== null && _c !== void 0 ? _c : (typeof window !== 'undefined' ? window.location.host : ''),
                hosts: ((_d = data === null || data === void 0 ? void 0 : data.app_by_pk) === null || _d === void 0 ? void 0 : _d.app_hosts.map(function (v) { return v.host; })) || [],
                enabledModules: Object.fromEntries(data.app_by_pk.app_modules.map(function (v) { return [v.module_id, true]; }) || []),
                appPlanId: data === null || data === void 0 ? void 0 : data.app_by_pk.app_plan_id,
                navs: data.app_by_pk.app_navs.map(function (appNav) { return ({
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
                    subNavs: appNav.sub_app_navs.map(function (v) { return ({
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
                    }); }),
                }); }),
                settings: settings,
                secrets: secrets,
                currencyId: settings['currency_id'] || 'TWD',
                currencies: (data === null || data === void 0 ? void 0 : data.currency.reduce(function (accumulator, currency) {
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
    useEffect(function () {
        if (!authToken) {
            refreshToken === null || refreshToken === void 0 ? void 0 : refreshToken();
        }
    }, [appId, authToken, refreshToken]);
    return _jsx(AppContext.Provider, { value: app, children: children });
};
var templateObject_1;
