import { useToast } from '@chakra-ui/react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import Ajv from 'ajv';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useIntl } from 'react-intl';
import { codeMessages } from '../helpers/translation';
const ajv = new Ajv();
export const useCurrency = (locale, currency, settingCurrencyId, settingCoinUnit, currencyId, coinUnit) => {
    const formatCurrency = (value) => {
        const currentCurrencyId = currencyId || settingCurrencyId || 'TWD';
        if (currentCurrencyId === 'LSC') {
            return `${value} ${settingCoinUnit || coinUnit || 'Coins'}`;
        }
        return (value.toLocaleString(locale || navigator.language, {
            style: 'currency',
            currency: currentCurrencyId,
            maximumFractionDigits: currency?.['minorUnits'] || 0,
            minimumFractionDigits: 0,
        }) || '');
    };
    return {
        formatCurrency,
    };
};
export const getCookie = (cookieName) => {
    const cookie = {};
    document.cookie.split(';').forEach(function (el) {
        const [key, value] = el.split('=');
        cookie[key.trim()] = value;
    });
    return cookie[cookieName.trim()] || '';
};
export const getResourceByProductId = (productId) => {
    const [productType, productTarget] = productId.split('_');
    const resourceType = productType
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase();
    return { type: resourceType, target: productTarget };
};
export const useToastMessage = () => {
    const { formatMessage } = useIntl();
    const toast = useToast();
    const toastMessage = (options) => {
        try {
            toast({
                title: options.responseCode
                    ? `${formatMessage(codeMessages[options.responseCode])}`
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
const fpPromise = FingerprintJS.load();
export const getFingerPrintId = async () => {
    const fp = await fpPromise;
    const result = await fp.get();
    const fingerPrintId = getCookie('fingerPrintId');
    const visitorId = fingerPrintId.length > 0 ? fingerPrintId : result.visitorId;
    return visitorId;
};
export const fetchCurrentGeolocation = async () => {
    try {
        const getGeolocationRequest = await axios.get(`https://ipapi.co/json/`);
        if (getGeolocationRequest.data?.error) {
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
export const parsePayload = (authToken) => {
    const payload = jwt.decode(authToken);
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
        console.error(`validate error: ${validate.errors?.join('\n')}`);
        return null;
    }
};
