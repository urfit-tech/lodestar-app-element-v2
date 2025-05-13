"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePayload = exports.fetchCurrentGeolocation = exports.getFingerPrintId = exports.useToastMessage = exports.getResourceByProductId = exports.getCookie = exports.useCurrency = exports.useTappay = void 0;
const react_1 = require("@chakra-ui/react");
const fingerprintjs_1 = __importDefault(require("@fingerprintjs/fingerprintjs"));
const ajv_1 = __importDefault(require("ajv"));
const axios_1 = __importDefault(require("axios"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const react_2 = require("react");
const react_intl_1 = require("react-intl");
const AppContext_1 = require("../contexts/AppContext");
const LanguageContext_1 = __importDefault(require("../contexts/LanguageContext"));
const translation_1 = require("../helpers/translation");
const ajv = new ajv_1.default();
// TODO: should be context
const useTappay = () => {
    const _TPDirect = window['TPDirect'];
    const { settings } = (0, AppContext_1.useApp)();
    const TPDirect = (0, react_2.useMemo)(() => {
        if (settings['tappay.app_id'] && settings['tappay.app_key'] && _TPDirect) {
            _TPDirect.setupSDK(settings['tappay.app_id'], settings['tappay.app_key'], settings['tappay.dry_run'] === 'true' ? 'sandbox' : 'production');
        }
        return _TPDirect;
    }, [_TPDirect, settings]);
    return { TPDirect };
};
exports.useTappay = useTappay;
const useCurrency = (currencyId, coinUnit) => {
    const { locale } = (0, react_2.useContext)(LanguageContext_1.default);
    const { currencies, settings } = (0, AppContext_1.useApp)();
    const formatCurrency = (value) => {
        const currentCurrencyId = currencyId || settings['currency_id'] || 'TWD';
        const currency = currencies[currentCurrencyId];
        if (currentCurrencyId === 'LSC') {
            return `${value} ${settings['coin.unit'] || coinUnit || 'Coins'}`;
        }
        return (value.toLocaleString(locale || navigator.language, {
            style: 'currency',
            currency: currentCurrencyId,
            maximumFractionDigits: (currency === null || currency === void 0 ? void 0 : currency['minorUnits']) || 0,
            minimumFractionDigits: 0,
        }) || '');
    };
    return {
        formatCurrency,
    };
};
exports.useCurrency = useCurrency;
const getCookie = (cookieName) => {
    const cookie = {};
    document.cookie.split(';').forEach(function (el) {
        const [key, value] = el.split('=');
        cookie[key.trim()] = value;
    });
    return cookie[cookieName.trim()] || '';
};
exports.getCookie = getCookie;
const getResourceByProductId = (productId) => {
    const [productType, productTarget] = productId.split('_');
    const resourceType = productType
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase();
    return { type: resourceType, target: productTarget };
};
exports.getResourceByProductId = getResourceByProductId;
const useToastMessage = () => {
    const { formatMessage } = (0, react_intl_1.useIntl)();
    const toast = (0, react_1.useToast)();
    const toastMessage = (options) => {
        try {
            toast({
                title: options.responseCode
                    ? `${formatMessage(translation_1.codeMessages[options.responseCode])}`
                    : options.title,
                status: options.status || 'success',
                duration: options.duration || 1500,
                position: options.position || 'top',
            });
        }
        catch {
            alert(options.responseCode);
        }
    };
    return toastMessage;
};
exports.useToastMessage = useToastMessage;
const fpPromise = fingerprintjs_1.default.load();
const getFingerPrintId = async () => {
    const fp = await fpPromise;
    const result = await fp.get();
    const fingerPrintId = (0, exports.getCookie)('fingerPrintId');
    const visitorId = fingerPrintId.length > 0 ? fingerPrintId : result.visitorId;
    return visitorId;
};
exports.getFingerPrintId = getFingerPrintId;
const fetchCurrentGeolocation = async () => {
    var _a;
    try {
        const getGeolocationRequest = await axios_1.default.get(`https://ipapi.co/json/`);
        if ((_a = getGeolocationRequest.data) === null || _a === void 0 ? void 0 : _a.error) {
            throw new Error(getGeolocationRequest.data.reason);
        }
        return {
            ip: getGeolocationRequest.data.ip,
            country: getGeolocationRequest.data.country_name,
            countryCode: getGeolocationRequest.data.country_code,
            error: null,
        };
    }
    catch (error) {
        return { ip: null, country: null, countryCode: null, error };
    }
};
exports.fetchCurrentGeolocation = fetchCurrentGeolocation;
const parsePayload = (authToken) => {
    var _a;
    const payload = jsonwebtoken_1.default.decode(authToken);
    const schema = {
        type: 'object',
        properties: {
            sub: { type: 'string' },
            orgId: { type: 'string', nullable: true },
            appId: { type: 'string' },
            name: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
            phoneNumber: { type: 'string', nullable: true },
            role: { type: 'string' },
            pictureUrl: { type: 'string', nullable: true },
            permissions: { type: 'array', items: { type: 'string' }, default: [] },
            options: { type: 'object', nullable: true },
            isFinishedSignUpProperty: { type: 'boolean', nullable: true },
            isBusiness: { type: 'boolean', nullable: true, default: false },
            loggedInMembers: { type: 'array', items: { type: 'object', required: [] }, nullable: true, default: [] },
        },
        required: [],
    };
    // validate is a type guard for MyData - type is inferred from schema type
    const validate = ajv.compile(schema);
    if (validate(payload)) {
        return payload;
    }
    else {
        console.error(`validate error: ${(_a = validate.errors) === null || _a === void 0 ? void 0 : _a.join('\n')}`);
        return null;
    }
};
exports.parsePayload = parsePayload;
