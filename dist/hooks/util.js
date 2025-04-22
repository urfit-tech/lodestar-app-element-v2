var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useToast } from '@chakra-ui/react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import Ajv from 'ajv';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useContext, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useApp } from '../contexts/AppContext';
import LanguageContext from '../contexts/LanguageContext';
import { codeMessages } from '../helpers/translation';
var ajv = new Ajv();
// TODO: should be context
export var useTappay = function () {
    var _TPDirect = window['TPDirect'];
    var settings = useApp().settings;
    var TPDirect = useMemo(function () {
        if (settings['tappay.app_id'] && settings['tappay.app_key'] && _TPDirect) {
            _TPDirect.setupSDK(settings['tappay.app_id'], settings['tappay.app_key'], settings['tappay.dry_run'] === 'true' ? 'sandbox' : 'production');
        }
        return _TPDirect;
    }, [_TPDirect, settings]);
    return { TPDirect: TPDirect };
};
export var useCurrency = function (currencyId, coinUnit) {
    var locale = useContext(LanguageContext).locale;
    var _a = useApp(), currencies = _a.currencies, settings = _a.settings;
    var formatCurrency = function (value) {
        var currentCurrencyId = currencyId || settings['currency_id'] || 'TWD';
        var currency = currencies[currentCurrencyId];
        if (currentCurrencyId === 'LSC') {
            return "".concat(value, " ").concat(settings['coin.unit'] || coinUnit || 'Coins');
        }
        return (value.toLocaleString(locale || navigator.language, {
            style: 'currency',
            currency: currentCurrencyId,
            maximumFractionDigits: (currency === null || currency === void 0 ? void 0 : currency['minorUnits']) || 0,
            minimumFractionDigits: 0,
        }) || '');
    };
    return {
        formatCurrency: formatCurrency,
    };
};
export var getCookie = function (cookieName) {
    var cookie = {};
    document.cookie.split(';').forEach(function (el) {
        var _a = el.split('='), key = _a[0], value = _a[1];
        cookie[key.trim()] = value;
    });
    return cookie[cookieName.trim()] || '';
};
export var getResourceByProductId = function (productId) {
    var _a = productId.split('_'), productType = _a[0], productTarget = _a[1];
    var resourceType = productType
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase();
    return { type: resourceType, target: productTarget };
};
export var useToastMessage = function () {
    var formatMessage = useIntl().formatMessage;
    var toast = useToast();
    var toastMessage = function (options) {
        try {
            toast({
                title: options.responseCode
                    ? "".concat(formatMessage(codeMessages[options.responseCode]))
                    : options.title,
                status: options.status || 'success',
                duration: options.duration || 1500,
                position: options.position || 'top',
            });
        }
        catch (_a) {
            alert(options.responseCode);
        }
    };
    return toastMessage;
};
var fpPromise = FingerprintJS.load();
export var getFingerPrintId = function () { return __awaiter(void 0, void 0, void 0, function () {
    var fp, result, fingerPrintId, visitorId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fpPromise];
            case 1:
                fp = _a.sent();
                return [4 /*yield*/, fp.get()];
            case 2:
                result = _a.sent();
                fingerPrintId = getCookie('fingerPrintId');
                visitorId = fingerPrintId.length > 0 ? fingerPrintId : result.visitorId;
                return [2 /*return*/, visitorId];
        }
    });
}); };
export var fetchCurrentGeolocation = function () { return __awaiter(void 0, void 0, void 0, function () {
    var getGeolocationRequest, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.get("https://ipapi.co/json/")];
            case 1:
                getGeolocationRequest = _b.sent();
                if ((_a = getGeolocationRequest.data) === null || _a === void 0 ? void 0 : _a.error) {
                    throw new Error(getGeolocationRequest.data.reason);
                }
                return [2 /*return*/, {
                        ip: getGeolocationRequest.data.ip,
                        country: getGeolocationRequest.data.country_name,
                        countryCode: getGeolocationRequest.data.country_code,
                        error: null,
                    }];
            case 2:
                error_1 = _b.sent();
                return [2 /*return*/, { ip: null, country: null, countryCode: null, error: error_1 }];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var parsePayload = function (authToken) {
    var _a;
    var payload = jwt.decode(authToken);
    var schema = {
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
    var validate = ajv.compile(schema);
    if (validate(payload)) {
        return payload;
    }
    else {
        console.error("validate error: ".concat((_a = validate.errors) === null || _a === void 0 ? void 0 : _a.join('\n')));
        return null;
    }
};
