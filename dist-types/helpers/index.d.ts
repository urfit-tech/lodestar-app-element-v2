import { AxiosRequestConfig } from 'axios';
import { css } from 'styled-components';
import { ContactInfo } from '../types/checkout';
import { ProductPlan } from '../types/data';
export declare const durationFullFormatter: (seconds: number) => string;
export declare const durationFormatter: (value?: number | null) => string | false;
export declare const uploadFile: (key: string, file: Blob, authToken: string | null, config?: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<{
    status: number;
    data: string;
}, any>>;
export declare const handleError: (error: any) => void;
export declare const notEmpty: <T>(value: T | null | undefined) => value is T;
export declare const rgba: (hexCode: string, alpha: number) => string;
export declare const dateFormatter: (value: Date, format?: string) => string;
export declare const getCurrentPrice: (plan: Partial<ProductPlan>) => number;
export declare const findCheapestPlan: (plans: Partial<ProductPlan>[]) => Partial<ProductPlan> | null;
export declare const desktopViewMixin: (children: ReturnType<typeof css>) => ReturnType<typeof css>;
export declare const validationRegExp: {
    [fieldId: string]: RegExp;
};
export declare const validateContactInfo: (contactInfo: ContactInfo) => string[];
export declare const convertPathName: (pathName: string) => string;
export declare const isHTMLString: (str: string) => boolean;
export declare function zipWith<T, R>(a1: T[], a2: T[], f: (v1: T, v2: T) => R): R[];
export declare function add(a: number, b: number): number;
export declare function multiply(a: number, b: number): number;
export type BanValidationOptions = {
    /**
     * validate `input` with old format only: https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283
     */
    applyOldRules?: boolean;
};
export declare const checkUniformNumber: (input: string | number, options?: BanValidationOptions) => boolean;
export declare const getBackendServerError: (code: string, message: string, result: string) => Error;
export declare const getTrackingCookie: () => {};
export declare const currencyFormatter: (value?: number | string | null, currencyId?: string, coinUnit?: string) => string | undefined;
