"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ramda_1 = require("ramda");
const react_1 = __importStar(require("react"));
const use_query_params_1 = require("use-query-params");
const AppContext_1 = require("../../contexts/AppContext");
const AuthContext_1 = require("../../contexts/AuthContext");
const tracking_1 = require("../../hooks/tracking");
const View = react_1.default.memo(({ ignore }) => {
    const tracking = (0, tracking_1.useTracking)();
    const [utmSource] = (0, use_query_params_1.useQueryParam)('utm_source', use_query_params_1.StringParam);
    const { settings } = (0, AppContext_1.useApp)();
    const { currentMember } = (0, AuthContext_1.useAuth)();
    const memberShipCardDetails = (0, tracking_1.useMemberShipCardDetails)(currentMember === null || currentMember === void 0 ? void 0 : currentMember.id);
    const enabledCW = Boolean(Number(settings['tracking.cw.enabled']));
    (0, react_1.useEffect)(() => {
        tracking.view(currentMember, { ignore, utmSource: utmSource || '' }, memberShipCardDetails);
    }, [enabledCW, currentMember, tracking, utmSource, ignore, memberShipCardDetails]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}, ramda_1.equals);
const Impression = react_1.default.memo(({ resources, collection, ignore }) => {
    const tracking = (0, tracking_1.useTracking)();
    const [utmSource] = (0, use_query_params_1.useQueryParam)('utm_source', use_query_params_1.StringParam);
    (0, react_1.useEffect)(() => {
        tracking.impress(resources, { collection, ignore, utmSource: utmSource || '' });
    }, [collection, resources, tracking, utmSource, ignore]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}, ramda_1.equals);
const Detail = react_1.default.memo(({ resource, ignore }) => {
    const [pageFrom] = (0, use_query_params_1.useQueryParam)('pageFrom', use_query_params_1.StringParam);
    const [utmSource] = (0, use_query_params_1.useQueryParam)('utm_source', use_query_params_1.StringParam);
    const tracking = (0, tracking_1.useTracking)();
    (0, react_1.useEffect)(() => {
        tracking.detail(resource, { collection: pageFrom || undefined, ignore, utmSource: utmSource || '' });
    }, [pageFrom, utmSource, resource, tracking, ignore]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}, ramda_1.equals);
const ViewCart = react_1.default.memo(({ resources, onViewCart, ignore }) => {
    const tracking = (0, tracking_1.useTracking)();
    const [utmSource] = (0, use_query_params_1.useQueryParam)('utm_source', use_query_params_1.StringParam);
    (0, react_1.useEffect)(() => {
        tracking.viewCart(resources, { ignore, utmSource: utmSource || '' });
        onViewCart === null || onViewCart === void 0 ? void 0 : onViewCart();
    }, [onViewCart, resources, tracking, utmSource, ignore]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}, ramda_1.equals);
const Purchase = react_1.default.memo(({ orderId, products, discounts, ignore, onTracked }) => {
    const tracking = (0, tracking_1.useTracking)();
    const [utmSource] = (0, use_query_params_1.useQueryParam)('utm_source', use_query_params_1.StringParam);
    (0, react_1.useEffect)(() => {
        tracking.purchase(orderId, products, discounts, { ignore, utmSource: utmSource || '' });
        onTracked === null || onTracked === void 0 ? void 0 : onTracked();
    }, [discounts, utmSource, orderId, products, tracking, ignore]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}, ramda_1.equals);
const Tracking = {
    View,
    Detail,
    Impression,
    ViewCart,
    Purchase,
};
exports.default = Tracking;
