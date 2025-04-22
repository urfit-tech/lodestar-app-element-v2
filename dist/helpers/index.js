var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import axios from 'axios';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import queryString from 'query-string';
import { css } from 'styled-components';
import { BREAK_POINT } from '../components/common/Responsive';
import { BindDeviceError, InputError, LoginDeviceError, NoMemberError, NoModuleError, PasswordError, SendEmailError, SessionError, } from './error';
export var durationFullFormatter = function (seconds) {
    if (seconds >= 3600) {
        var remainSeconds = seconds % 3600;
        return "HOURS:MINUTES:SECONDS"
            .replace('HOURS', "".concat(Math.floor(seconds / 3600)).padStart(2, '0'))
            .replace('MINUTES', "".concat(Math.floor(remainSeconds / 60)).padStart(2, '0'))
            .replace('SECONDS', "".concat(Math.floor(remainSeconds % 60)).padStart(2, '0'));
    }
    else {
        return "MINUTES:SECONDS"
            .replace('MINUTES', "".concat(Math.floor(seconds / 60)).padStart(2, '0'))
            .replace('SECONDS', "".concat(Math.floor(seconds % 60)).padStart(2, '0'));
    }
};
export var durationFormatter = function (value) {
    return typeof value === 'number' && "\u7D04 ".concat((value / 60).toFixed(0), " \u5206\u9418");
};
export var uploadFile = function (key, file, authToken, envApiBaseRoot, config) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .post("".concat(envApiBaseRoot, "/sys/sign-url"), {
                    operation: 'putObject',
                    params: {
                        Key: key,
                        ContentType: file.type,
                    },
                }, {
                    headers: { authorization: "Bearer ".concat(authToken) },
                })
                    .then(function (res) { return res.data.result; })
                    .then(function (url) {
                    var query = queryString.parseUrl(url).query;
                    return axios.put(url, file, __assign(__assign({}, config), { headers: __assign(__assign({}, query), { 'Content-Type': file.type }) }));
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var handleError = function (error) {
    if (error.response && error.response.data) {
        return alert(error.response.data.message);
    }
    return alert(error.message);
};
export var notEmpty = function (value) {
    return value !== null && value !== undefined;
};
export var rgba = function (hexCode, alpha) {
    var hexColor = (hexCode || '#2d313a').replace('#', '');
    var r = parseInt(hexColor.slice(0, 2), 16);
    var g = parseInt(hexColor.slice(2, 4), 16);
    var b = parseInt(hexColor.slice(4, 6), 16);
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
};
export var dateFormatter = function (value, format) { return dayjs(value).format(format || "YYYY/MM/DD HH:mm"); };
export var getCurrentPrice = function (plan) {
    return (plan.soldAt && dayjs() < dayjs(plan.soldAt) ? plan.salePrice : plan.listPrice) || 0;
};
export var findCheapestPlan = function (plans) {
    return plans
        .filter(function (plan) { return plan.publishedAt !== null; })
        .reduce(function (accum, plan) { return (accum === null ? plan : getCurrentPrice(plan) < getCurrentPrice(accum) ? plan : accum); }, null);
};
export var desktopViewMixin = function (children) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (min-width: ", "px) {\n    ", "\n  }\n"], ["\n  @media (min-width: ", "px) {\n    ", "\n  }\n"])), BREAK_POINT, children); };
export var validationRegExp = {
    phone: /^((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneBarCode: /^\/{1}[0-9A-Z+-.]{7}$/,
    citizenCode: /^[A-Z]{2}[0-9]{14}$/,
};
export var validateContactInfo = function (contactInfo) {
    var _a, _b;
    var errorFields = [];
    if (contactInfo.name.length === 0)
        errorFields.push('name');
    if (contactInfo.phone.length === 0 || !((_a = validationRegExp['phone']) === null || _a === void 0 ? void 0 : _a.test(contactInfo.phone))) {
        errorFields.push('phone');
    }
    if (contactInfo.email.length === 0 || !((_b = validationRegExp['email']) === null || _b === void 0 ? void 0 : _b.test(contactInfo.email))) {
        errorFields.push('email');
    }
    return errorFields;
};
export var convertPathName = function (pathName) {
    var pathList = pathName.split('/').filter(function (p) { return p !== ''; });
    return pathList.join('_') || '_';
};
export var isHTMLString = function (str) {
    return !(str || '')
        // replace html tag with content
        .replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, '')
        // remove remaining self closing tags
        .replace(/(<([^>]+)>)/gi, '')
        // remove extra space at start and end
        .trim();
};
export function zipWith(a1, a2, f) {
    var length = Math.min(a1.length, a2.length);
    var result = [];
    for (var i = 0; i < length; i++)
        result[i] = f(a1[i], a2[i]);
    return result;
}
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}
export var checkUniformNumber = function (input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.applyOldRules, applyOldRules = _a === void 0 ? false : _a;
    if (typeof input !== 'string' && typeof input !== 'number')
        return false;
    /**
     * Example: 12345675
     * Step 1:
     * 1 * 1 = 1
     * 2 * 2 = 4
     * 3 * 1 = 3
     * 4 * 2 = 8
     * 5 * 1 = 5
     * 6 * 2 = 12
     * 7 * 4 = 28
     * 5 * 1 = 5
     *
     * Step 2:
     * 1 -> 1
     * 4 -> 4
     * 3 -> 3
     * 8 -> 8
     * 5 -> 5
     * 12 -> 1 + 2 = 3
     * 28 -> 2 + 8 = 10
     * 5 -> 5
     *
     * Step 3:
     * (1 + 4 + 3 + 8 + 5 + 3 + 10 + 5) % 10 = 9
     */
    var BAN_COEFFICIENTS = [1, 2, 1, 2, 1, 2, 4, 1];
    var n = input.toString();
    var regex = /^\d{8}$/;
    if (!regex.test(n))
        return false;
    /**
     * Step 1: 先把統一編號的每個數字分別乘上對應的係數 (1, 2, 1, 2, 1, 2, 4, 1)
     * Step 2: 再把個別乘積的十位數與個位數相加，得出八個小於 10 的數字
     */
    var intRadix = 10;
    var checksum = zipWith(BAN_COEFFICIENTS, n.split('').map(function (c) { return parseInt(c, intRadix); }), multiply)
        .map(function (n) { return (n % 10) + Math.floor(n / 10); })
        .reduce(add, 0);
    /**
     * Step 3: 檢查把這 8 個數字相加之後計算此和除以 5 or 10 的餘數
     * Step 4:
     *  4-1: 若是餘數為 0，則為正確的統一編號
     *  4-2: 若是餘數為 9，且原統一編號的第七位是 7，則也為正確的統一編號
     */
    var divisor = applyOldRules ? 10 : 5;
    return checksum % divisor === 0 || (parseInt(n.charAt(6), intRadix) === 7 && (checksum + 1) % divisor === 0);
};
export var getBackendServerError = function (code, message, result) {
    var errorObject;
    switch (code) {
        case 'E_INPUT':
            errorObject = new InputError(message, result);
            break;
        case 'E_SESSION':
            errorObject = new SessionError(message, result);
            break;
        case 'E_NO_MODULE':
            errorObject = new NoModuleError(message, result);
            break;
        case 'E_SEND_EMAIL':
            errorObject = new SendEmailError(message, result);
            break;
        case 'E_PASSWORD':
            errorObject = new PasswordError(message, result);
            break;
        case 'E_NO_MEMBER':
            errorObject = new NoMemberError(message, result);
            break;
        case 'E_BIND_DEVICE':
            errorObject = new BindDeviceError(message, result);
            break;
        case 'E_LOGIN_DEVICE':
            errorObject = new LoginDeviceError(message, result);
            break;
        default:
            errorObject = new Error(message);
    }
    return errorObject;
};
export var getTrackingCookie = function () {
    var fbc = Cookies.get('_fbc'); // dmpId
    var fbp = Cookies.get('_fbp'); // dmpId
    var dmpId = Cookies.get('__eruid'); // dmpId
    var utm = Cookies.get('utm');
    utm = utm ? JSON.parse(utm) : null;
    var trackingCookie = {};
    if (utm)
        Object.assign(trackingCookie, { utm: utm });
    if (dmpId)
        Object.assign(trackingCookie, { dmpId: dmpId });
    if (fbc)
        Object.assign(trackingCookie, { fbc: fbc });
    if (fbp)
        Object.assign(trackingCookie, { fbp: fbp });
    return trackingCookie;
};
export var currencyFormatter = function (value, currencyId, coinUnit) {
    if (value === null || value === undefined) {
        return;
    }
    else if (currencyId === 'LSC') {
        return "".concat(value, " ").concat(coinUnit || currencyId);
    }
    else {
        return "NT$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};
var templateObject_1;
