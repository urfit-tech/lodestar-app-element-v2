import axios from 'axios';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import queryString from 'query-string';
import { css } from 'styled-components';
import { BREAK_POINT } from '../components/common/Responsive';
import { BindDeviceError, InputError, LoginDeviceError, NoMemberError, NoModuleError, PasswordError, SendEmailError, SessionError, } from './error';
export const durationFullFormatter = (seconds) => {
    if (seconds >= 3600) {
        const remainSeconds = seconds % 3600;
        return `HOURS:MINUTES:SECONDS`
            .replace('HOURS', `${Math.floor(seconds / 3600)}`.padStart(2, '0'))
            .replace('MINUTES', `${Math.floor(remainSeconds / 60)}`.padStart(2, '0'))
            .replace('SECONDS', `${Math.floor(remainSeconds % 60)}`.padStart(2, '0'));
    }
    else {
        return `MINUTES:SECONDS`
            .replace('MINUTES', `${Math.floor(seconds / 60)}`.padStart(2, '0'))
            .replace('SECONDS', `${Math.floor(seconds % 60)}`.padStart(2, '0'));
    }
};
export const durationFormatter = (value) => {
    return typeof value === 'number' && `約 ${(value / 60).toFixed(0)} 分鐘`;
};
export const uploadFile = async (key, file, authToken, envApiBaseRoot, config) => await axios
    .post(`${envApiBaseRoot}/sys/sign-url`, {
    operation: 'putObject',
    params: {
        Key: key,
        ContentType: file.type,
    },
}, {
    headers: { authorization: `Bearer ${authToken}` },
})
    .then(res => res.data.result)
    .then(url => {
    const { query } = queryString.parseUrl(url);
    return axios.put(url, file, {
        ...config,
        headers: {
            ...query,
            'Content-Type': file.type,
        },
    });
});
export const handleError = (error) => {
    if (error.response && error.response.data) {
        return alert(error.response.data.message);
    }
    return alert(error.message);
};
export const notEmpty = (value) => {
    return value !== null && value !== undefined;
};
export const rgba = (hexCode, alpha) => {
    const hexColor = (hexCode || '#2d313a').replace('#', '');
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
export const dateFormatter = (value, format) => dayjs(value).format(format || `YYYY/MM/DD HH:mm`);
export const getCurrentPrice = (plan) => (plan.soldAt && dayjs() < dayjs(plan.soldAt) ? plan.salePrice : plan.listPrice) || 0;
export const findCheapestPlan = (plans) => plans
    .filter(plan => plan.publishedAt !== null)
    .reduce((accum, plan) => (accum === null ? plan : getCurrentPrice(plan) < getCurrentPrice(accum) ? plan : accum), null);
export const desktopViewMixin = (children) => css `
  @media (min-width: ${BREAK_POINT}px) {
    ${children}
  }
`;
export const validationRegExp = {
    phone: /^((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneBarCode: /^\/{1}[0-9A-Z+-.]{7}$/,
    citizenCode: /^[A-Z]{2}[0-9]{14}$/,
};
export const validateContactInfo = contactInfo => {
    var _a, _b;
    const errorFields = [];
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
export const convertPathName = (pathName) => {
    const pathList = pathName.split('/').filter(p => p !== '');
    return pathList.join('_') || '_';
};
export const isHTMLString = (str) => !(str || '')
    // replace html tag with content
    .replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, '')
    // remove remaining self closing tags
    .replace(/(<([^>]+)>)/gi, '')
    // remove extra space at start and end
    .trim();
export function zipWith(a1, a2, f) {
    const length = Math.min(a1.length, a2.length);
    const result = [];
    for (let i = 0; i < length; i++)
        result[i] = f(a1[i], a2[i]);
    return result;
}
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}
export const checkUniformNumber = (input, options = {}) => {
    const { applyOldRules = false } = options;
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
    const BAN_COEFFICIENTS = [1, 2, 1, 2, 1, 2, 4, 1];
    const n = input.toString();
    const regex = /^\d{8}$/;
    if (!regex.test(n))
        return false;
    /**
     * Step 1: 先把統一編號的每個數字分別乘上對應的係數 (1, 2, 1, 2, 1, 2, 4, 1)
     * Step 2: 再把個別乘積的十位數與個位數相加，得出八個小於 10 的數字
     */
    const intRadix = 10;
    const checksum = zipWith(BAN_COEFFICIENTS, n.split('').map(c => parseInt(c, intRadix)), multiply)
        .map(n => (n % 10) + Math.floor(n / 10))
        .reduce(add, 0);
    /**
     * Step 3: 檢查把這 8 個數字相加之後計算此和除以 5 or 10 的餘數
     * Step 4:
     *  4-1: 若是餘數為 0，則為正確的統一編號
     *  4-2: 若是餘數為 9，且原統一編號的第七位是 7，則也為正確的統一編號
     */
    const divisor = applyOldRules ? 10 : 5;
    return checksum % divisor === 0 || (parseInt(n.charAt(6), intRadix) === 7 && (checksum + 1) % divisor === 0);
};
export const getBackendServerError = (code, message, result) => {
    let errorObject;
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
export const getTrackingCookie = () => {
    const fbc = Cookies.get('_fbc'); // dmpId
    const fbp = Cookies.get('_fbp'); // dmpId
    const dmpId = Cookies.get('__eruid'); // dmpId
    let utm = Cookies.get('utm');
    utm = utm ? JSON.parse(utm) : null;
    const trackingCookie = {};
    if (utm)
        Object.assign(trackingCookie, { utm });
    if (dmpId)
        Object.assign(trackingCookie, { dmpId });
    if (fbc)
        Object.assign(trackingCookie, { fbc });
    if (fbp)
        Object.assign(trackingCookie, { fbp });
    return trackingCookie;
};
export const currencyFormatter = (value, currencyId, coinUnit) => {
    if (value === null || value === undefined) {
        return;
    }
    else if (currencyId === 'LSC') {
        return `${value} ${coinUnit || currencyId}`;
    }
    else {
        return `NT$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};
