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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { gql, useApolloClient, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { sum, uniq } from 'ramda';
import { useEffect, useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { convertPathName, notEmpty } from '../helpers';
import { getResourceCollection } from './resource';
import { getCookie } from './util';
var convertProductType = function (originalType, toMetaProduct) {
    if (toMetaProduct === void 0) { toMetaProduct = true; }
    switch (originalType) {
        case 'program_content':
            return toMetaProduct ? 'program' : originalType;
        case 'program_plan':
            return toMetaProduct ? 'program' : originalType;
        case 'program_package_plan':
            return toMetaProduct ? 'program_package' : originalType;
        case 'activity_ticket':
            return toMetaProduct ? 'activity' : originalType;
        case 'merchandise_spec':
            return toMetaProduct ? 'merchandise' : originalType;
        case 'project_plan':
            return toMetaProduct ? 'project' : originalType;
        default:
            return originalType;
    }
};
var convertCwProduct = function (resource, utmSource, options) {
    var _a, _b, _c, _d;
    if (options === void 0) { options = { separator: '|' }; }
    var baseProduct = {
        id: resource.id,
        type: convertProductType(resource.type, true),
        target: ((_a = resource.metaId) === null || _a === void 0 ? void 0 : _a.split(':')[2]) || '',
        title: resource.title,
        item: resource.sku || null,
        url: window.location.href,
        authors: resource.owners,
        channels: {
            master: {
                id: resource.categories || [],
            },
        },
        keywords: ((_b = resource === null || resource === void 0 ? void 0 : resource.tags) === null || _b === void 0 ? void 0 : _b.join(options.separator)) ||
            ((_c = document.querySelector('meta[name="keywords"]')) === null || _c === void 0 ? void 0 : _c.getAttribute('content')) ||
            '',
        utm_source: utmSource || '',
    };
    switch (resource.type) {
        case 'program_content':
            return __assign(__assign({}, baseProduct), { id: (resource.metaId && resource.metaId.split(':')[2]) || '', title: ((_d = resource.variants) === null || _d === void 0 ? void 0 : _d.join(options.separator)) || '', content_id: resource.id, content_name: resource.title });
        case 'post':
            return baseProduct;
        default:
            return __assign(__assign({}, baseProduct), { price: resource.price });
    }
};
export var useTracking = function (trackingOptions) {
    if (trackingOptions === void 0) { trackingOptions = { separator: '|' }; }
    var _a = useApp(), settings = _a.settings, appCurrencyId = _a.currencyId, appId = _a.id;
    var brand = settings['name'] || document.title;
    var enabledGA4 = Boolean(Number(settings['tracking.ga4.enabled']));
    var enabledCW = Boolean(Number(settings['tracking.cw.enabled']));
    var apolloClient = useApolloClient();
    var EC_ITEM_MAP_KEY_PREFIX = "ga.event.item";
    // clear localStorage cache
    for (var key in localStorage) {
        if (key.startsWith(EC_ITEM_MAP_KEY_PREFIX) && key.endsWith('.expired_at')) {
            var itemId = key.split('.')[3];
            var expiredAt = dayjs(localStorage[key]);
            if (dayjs() > expiredAt) {
                localStorage.removeItem(key);
                localStorage.removeItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId));
            }
        }
    }
    var UAview = function (currentMember, options) {
        ;
        window.dataLayer = window.dataLayer || [];
        !currentMember && window.dataLayer.push({ event: 'clearMember', member: null });
        currentMember &&
            window.dataLayer.push({
                event: 'updateMember',
                member: {
                    id: currentMember.id,
                    email: currentMember.email,
                },
            });
    };
    var CustomView = function (currentMember, options, memberShipCardDetails) {
        var _a, _b, _c, _d, _e;
        var memberType = '會員';
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ memberData: null });
        window.dataLayer.push({
            event: 'cwData',
            memberData: {
                member_type: memberType,
                id: ((_a = currentMember.options[appId]) === null || _a === void 0 ? void 0 : _a.id) || '',
                social_id: ((_b = currentMember.options[appId]) === null || _b === void 0 ? void 0 : _b.social_id) || '',
                uid: ((_c = currentMember.options[appId]) === null || _c === void 0 ? void 0 : _c.uid) || '',
                uuid: ((_d = currentMember.options[appId]) === null || _d === void 0 ? void 0 : _d.uuid) || '',
                env: window.location.href.includes('local') ||
                    window.location.href.includes('dev') ||
                    window.location.href.includes('127.0.0.1')
                    ? 'develop'
                    : 'prod',
                email: currentMember.email,
                dmp_id: getCookie('__eruid'),
                salesforce_id: ((_e = currentMember.options[appId]) === null || _e === void 0 ? void 0 : _e.salesforce_id) || '',
                utm_source: options === null || options === void 0 ? void 0 : options.utmSource,
                memberShipCardDetails: memberShipCardDetails,
            },
        });
    };
    var EECImpress = function (resources, options) {
        var impressionsWithProducts = resources.reduce(function (prev, curr, index) {
            var _a, _b;
            var flattenedResources = (_b = (_a = curr === null || curr === void 0 ? void 0 : curr.products) === null || _a === void 0 ? void 0 : _a.filter(function (r) { return (r === null || r === void 0 ? void 0 : r.type) !== 'program_content'; })) !== null && _b !== void 0 ? _b : [curr];
            var products = (flattenedResources === null || flattenedResources === void 0 ? void 0 : flattenedResources.map(function (product) {
                var _a, _b;
                return product
                    ? {
                        id: product.sku || product.id,
                        name: product.title,
                        price: product.price || 0,
                        brand: brand,
                        category: (_a = product.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                        variant: uniq((_b = product.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator),
                        quantity: 1, // TODO: use the inventory
                        list: (options === null || options === void 0 ? void 0 : options.collection) || convertPathName(window.location.pathname),
                        position: index + 1,
                    }
                    : null;
            }).filter(notEmpty)) || [];
            return __spreadArray(__spreadArray([], prev, true), products, true);
        }, []);
        if (impressionsWithProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
            ;
            window.dataLayer.push({
                event: 'productImpression',
                label: impressionsWithProducts.map(function (impression) { return impression.name; }).join('|'),
                value: sum(impressionsWithProducts.map(function (impression) { return impression.price || 0; })),
                ecommerce: {
                    type: 'ua',
                    currencyCode: appCurrencyId,
                    impressions: impressionsWithProducts,
                },
            });
        }
    };
    var CustomImpress = function (resources, options) {
        var cwProducts = resources.map(function (r) { return (r ? convertCwProduct(r, options === null || options === void 0 ? void 0 : options.utmSource) : null); }).filter(notEmpty);
        if (cwProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ itemData: { products: null, program: null, article: null } });
            window.dataLayer.push({
                event: 'cwData',
                itemData: {
                    products: cwProducts,
                    program: cwProducts,
                    article: cwProducts,
                },
            });
        }
    };
    var EECClick = function (resource, options) {
        var _a, _b;
        var resourceOrProducts = (_b = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(function (r) { return (r === null || r === void 0 ? void 0 : r.type) !== 'program_content'; })) !== null && _b !== void 0 ? _b : [resource];
        var products = resourceOrProducts
            .map(function (resource) {
            var _a, _b;
            return resource
                ? {
                    id: resource.sku || resource.id,
                    name: resource.title,
                    price: resource.price,
                    brand: brand,
                    category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                    variant: uniq((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator),
                    position: options === null || options === void 0 ? void 0 : options.position,
                }
                : null;
        })
            .filter(notEmpty);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
        ;
        window.dataLayer.push({
            event: 'productClick',
            label: resource.title,
            value: resource.price,
            ecommerce: {
                type: 'ua',
                currencyCode: appCurrencyId,
                click: {
                    actionField: { list: (options === null || options === void 0 ? void 0 : options.collection) || convertPathName(window.location.pathname) },
                    products: products,
                },
            },
        });
    };
    var EECDetail = function (resource, options) { return __awaiter(void 0, void 0, void 0, function () {
        var resourceOrProducts, products;
        var _a, _b;
        return __generator(this, function (_c) {
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                resourceOrProducts = (_b = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(function (r) { return (r === null || r === void 0 ? void 0 : r.type) !== 'program_content'; })) !== null && _b !== void 0 ? _b : [resource];
                products = resourceOrProducts
                    .map(function (resource) {
                    var _a, _b;
                    return resource
                        ? {
                            id: resource.sku || resource.id,
                            name: resource.title,
                            price: resource.price,
                            brand: settings['name'] || document.title,
                            category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                            variant: uniq((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator),
                        }
                        : null;
                })
                    .filter(notEmpty);
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
                ;
                window.dataLayer.push({
                    event: 'productDetail',
                    label: resource.title,
                    value: resource.price,
                    ecommerce: {
                        type: 'ua',
                        currencyCode: appCurrencyId,
                        detail: {
                            actionField: { list: (options === null || options === void 0 ? void 0 : options.collection) || convertPathName(window.location.pathname) },
                            products: products,
                        },
                    },
                });
            }
            return [2 /*return*/];
        });
    }); };
    var CustomDetail = function (resource, options) { return __awaiter(void 0, void 0, void 0, function () {
        var isProgramContent, products, metaProducts, targetResource, subResources;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    isProgramContent = resource.type === 'program_content';
                    products = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(function (r) { return (r === null || r === void 0 ? void 0 : r.type) !== 'program_content'; });
                    if (!(isProgramContent && resource.metaId)) return [3 /*break*/, 2];
                    return [4 /*yield*/, getResourceCollection(apolloClient, [resource.metaId], true)];
                case 1:
                    metaProducts = _d.sent();
                    products = (_c = (_b = metaProducts[0]) === null || _b === void 0 ? void 0 : _b.products) === null || _c === void 0 ? void 0 : _c.filter(function (p) { return (p === null || p === void 0 ? void 0 : p.type) === 'program_plan'; });
                    _d.label = 2;
                case 2:
                    targetResource = resource && convertCwProduct(resource, options === null || options === void 0 ? void 0 : options.utmSource);
                    subResources = products && products.filter(notEmpty).map(function (p) { return convertCwProduct(p, options === null || options === void 0 ? void 0 : options.utmSource); });
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ itemData: { products: null, program: null, article: null } });
                    if (subResources) {
                        ;
                        window.dataLayer.push({
                            event: 'cwData',
                            itemData: {
                                products: subResources.map(function (r) { return (__assign(__assign({}, targetResource), r)); }),
                                program: __assign(__assign({}, targetResource), subResources[0]),
                                article: __assign(__assign({}, targetResource), subResources[0]),
                            },
                        });
                        return [2 /*return*/];
                    }
                    ;
                    window.dataLayer.push({
                        event: 'cwData',
                        itemData: {
                            products: [targetResource],
                            program: targetResource,
                            article: targetResource,
                        },
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var EECAddToCart = function (resource, options) {
        var _a, _b;
        ;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
        ;
        window.dataLayer.push({
            event: 'addToCart',
            label: resource.title,
            value: resource.price,
            ecommerce: {
                type: 'ua',
                currencyCode: appCurrencyId,
                add: {
                    direct: options === null || options === void 0 ? void 0 : options.direct,
                    products: [
                        {
                            id: resource.sku || resource.id,
                            name: resource.title,
                            price: resource.price,
                            brand: brand,
                            category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                            variant: uniq((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator),
                            quantity: (options === null || options === void 0 ? void 0 : options.quantity) || 1, // TODO: use the inventory
                        },
                    ],
                },
            },
        });
    };
    var EECRemoveFromCart = function (resource, options) {
        var _a, _b;
        ;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
        ;
        window.dataLayer.push({
            event: 'removeFromCart',
            label: resource.title,
            value: resource.price,
            ecommerce: {
                type: 'ua',
                currencyCode: appCurrencyId,
                remove: {
                    products: [
                        {
                            id: resource.sku || resource.id,
                            name: resource.title,
                            price: resource.price,
                            brand: settings['name'] || document.title,
                            category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                            variant: uniq((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator),
                            quantity: (options === null || options === void 0 ? void 0 : options.quantity) || 1, // TODO: use the inventory
                        },
                    ],
                },
            },
        });
    };
    var EECCheckout = function (resources, options) {
        var ecProducts = resources
            .map(function (resource) {
            var _a, _b, _c;
            return resource
                ? {
                    id: resource.sku || resource.id,
                    name: resource.title,
                    price: resource.price,
                    brand: brand,
                    category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                    variant: uniq((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator),
                    quantity: ((_c = resource.options) === null || _c === void 0 ? void 0 : _c.quantity) || 1, // TODO: use the cart product
                }
                : null;
        })
            .filter(notEmpty);
        if (ecProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
            ;
            window.dataLayer.push({
                event: 'checkout',
                label: resources.map(function (resource) { return resource.title; }).join('|'),
                value: sum(resources.map(function (resource) { return resource.price || 0; })),
                ecommerce: {
                    type: 'ua',
                    currencyCode: appCurrencyId,
                    checkout: {
                        actionField: { step: (options === null || options === void 0 ? void 0 : options.step) || 1 },
                        products: ecProducts,
                    },
                },
            });
        }
    };
    var CustomCheckout = function (resources, options) {
        var cwProducts = resources
            .map(function (resource) { return (resource ? convertCwProduct(resource, options === null || options === void 0 ? void 0 : options.utmSource) : null); })
            .filter(notEmpty);
        if (cwProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ itemData: { products: null, program: null, article: null } });
            window.dataLayer.push({
                event: 'cwData',
                itemData: {
                    products: cwProducts,
                    program: cwProducts[0],
                    article: cwProducts[0],
                },
            });
        }
    };
    var EECAddPaymentInfo = function (options) {
        ;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
        ;
        window.dataLayer.push({
            event: 'checkoutOption',
            label: options === null || options === void 0 ? void 0 : options.gateway,
            value: 0,
            ecommerce: {
                type: 'ua',
                currencyCode: appCurrencyId,
                checkout_option: {
                    actionField: {
                        step: (options === null || options === void 0 ? void 0 : options.step) || 2,
                        option: "".concat((options === null || options === void 0 ? void 0 : options.gateway) || 'unknown', ".").concat((options === null || options === void 0 ? void 0 : options.method) || 'unknown'),
                    },
                },
            },
        });
    };
    var EECPurchase = function (orderId, orderProducts, orderDiscounts, options) {
        var ecProducts = orderProducts.map(function (product) {
            var _a, _b;
            return ({
                id: product.sku || product.id,
                name: product.title,
                price: product.price,
                brand: brand,
                category: (_a = product.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                variant: uniq((_b = product.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator),
                quantity: product.quantity,
            });
        }) || [];
        if (ecProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
            ;
            window.dataLayer.push({
                event: 'purchase',
                label: orderProducts.map(function (orderProduct) { return orderProduct.title; }).join('|'),
                value: sum(orderProducts.map(function (orderProduct) { return orderProduct.price || 0; })),
                ecommerce: {
                    type: 'ua',
                    currencyCode: appCurrencyId,
                    purchase: {
                        actionField: {
                            id: orderId,
                            affiliation: settings['name'] || document.title,
                            revenue: sum(orderProducts.map(function (v) { return v.price || 0; })) - sum(orderDiscounts.map(function (v) { return v.price; })),
                            coupon: orderDiscounts.map(function (v) { return v.name; }).join(trackingOptions.separator),
                        },
                        products: ecProducts,
                    },
                },
            });
        }
    };
    var CustomPurchase = function (orderId, orderProducts, orderDiscounts, options) {
        var cwProducts = orderProducts.map(function (product) {
            return __assign(__assign({}, convertCwProduct(product, options === null || options === void 0 ? void 0 : options.utmSource)), { order_number: orderId });
        }) || [];
        if (cwProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ itemData: { products: null, program: null, article: null } });
            window.dataLayer.push({
                event: 'cwData',
                itemData: {
                    products: cwProducts,
                    program: cwProducts[0],
                    article: cwProducts[0],
                },
            });
        }
    };
    return {
        view: function (currentMember, options, memberShipCardDetails) {
            UAview(currentMember, options);
            if (currentMember && enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                CustomView(currentMember, options, memberShipCardDetails);
        },
        impress: function (resources, options) {
            if (enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                CustomImpress(resources, options);
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    var items = resources.reduce(function (prev, curr, index) {
                        var _a, _b;
                        var flattenedResources = (_b = (_a = curr === null || curr === void 0 ? void 0 : curr.products) === null || _a === void 0 ? void 0 : _a.filter(function (r) { return (r === null || r === void 0 ? void 0 : r.type) !== 'program_content'; })) !== null && _b !== void 0 ? _b : [curr];
                        var products = (flattenedResources === null || flattenedResources === void 0 ? void 0 : flattenedResources.map(function (product) {
                            var _a, _b;
                            var itemId = (product === null || product === void 0 ? void 0 : product.sku) || (product === null || product === void 0 ? void 0 : product.id) || '';
                            var cachedItem = dayjs() < dayjs(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at")))
                                ? JSON.parse(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId)) || '')
                                : {};
                            var item = product
                                ? __assign(__assign({}, cachedItem), { item_id: itemId, item_name: product.title, currency: appCurrencyId, price: product.price || 0, quantity: 1, item_brand: brand, item_category: (_a = product.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator), index: index + 1, item_list_id: (options === null || options === void 0 ? void 0 : options.collection) || convertPathName(window.location.pathname), item_list_name: (options === null || options === void 0 ? void 0 : options.collection) || convertPathName(window.location.pathname), item_variant: uniq((_b = product.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator) }) : null;
                            // update localStorage cache
                            localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId), JSON.stringify(item));
                            localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at"), dayjs().add(1, 'day').toString());
                            return item;
                        }).filter(notEmpty)) || [];
                        return __spreadArray(__spreadArray([], prev, true), products, true);
                    }, []);
                    if (items.length > 0) {
                        ;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null });
                        window.dataLayer.push({
                            event: 'view_item_list',
                            label: items.map(function (item) { return item.item_name; }).join('|'),
                            value: sum(items.map(function (item) { return item.price || 0; })),
                            ecommerce: {
                                type: 'ga4',
                                items: items,
                            },
                        });
                    }
                }
                else
                    EECImpress(resources, options);
            }
        },
        click: function (resource, options) {
            var _a, _b;
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    var resourceOrProducts = (_b = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(function (r) { return (r === null || r === void 0 ? void 0 : r.type) !== 'program_content'; })) !== null && _b !== void 0 ? _b : [resource];
                    var items = resourceOrProducts
                        .map(function (resource) {
                        var _a, _b;
                        var itemId = (resource === null || resource === void 0 ? void 0 : resource.sku) || (resource === null || resource === void 0 ? void 0 : resource.id) || '';
                        var cachedItem = dayjs() < dayjs(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at")))
                            ? JSON.parse(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId)) || '')
                            : {};
                        var item = resource
                            ? __assign(__assign({}, cachedItem), { item_id: itemId, item_name: resource.title, currency: appCurrencyId, price: resource.price || 0, item_brand: brand, item_category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator), index: options === null || options === void 0 ? void 0 : options.position, item_variant: uniq((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator) }) : null;
                        // update localStorage cache
                        localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId), JSON.stringify(item));
                        localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at"), dayjs().add(1, 'day').toString());
                        return item;
                    })
                        .filter(notEmpty);
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ ecommerce: null });
                    window.dataLayer.push({
                        event: 'select_item',
                        label: resource.title,
                        value: resource.price,
                        ecommerce: {
                            type: 'ga4',
                            currency: appCurrencyId,
                            value: resource.price,
                            items: items,
                        },
                    });
                }
                else
                    EECClick(resource, options);
            }
        },
        detail: function (resource, options) { return __awaiter(void 0, void 0, void 0, function () {
            var resourceOrProducts, items;
            var _a, _b;
            return __generator(this, function (_c) {
                if (enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                    CustomDetail(resource, options);
                if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                    if (enabledGA4) {
                        resourceOrProducts = (_b = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(function (r) { return (r === null || r === void 0 ? void 0 : r.type) !== 'program_content'; })) !== null && _b !== void 0 ? _b : [resource];
                        items = resourceOrProducts
                            .map(function (resource) {
                            var _a, _b;
                            var itemId = (resource === null || resource === void 0 ? void 0 : resource.sku) || (resource === null || resource === void 0 ? void 0 : resource.id) || '';
                            var cachedItem = dayjs() < dayjs(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at")))
                                ? JSON.parse(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId)) || '')
                                : {};
                            var item = resource
                                ? __assign(__assign({}, cachedItem), { item_id: itemId, item_name: resource.title, currency: appCurrencyId, price: resource.price, item_brand: brand, item_category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator), item_variant: uniq((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator) }) : null;
                            // update localStorage cache
                            localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId), JSON.stringify(item));
                            localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at"), dayjs().add(1, 'day').toString());
                            return item;
                        })
                            .filter(notEmpty);
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null });
                        window.dataLayer.push({
                            event: 'view_item',
                            label: resource.title,
                            value: resource.price,
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: resource.price,
                                items: items,
                            },
                        });
                    }
                    else
                        EECDetail(resource, options);
                }
                return [2 /*return*/];
            });
        }); },
        addToCart: function (resource, options) {
            var _a;
            if (enabledGA4) {
                var itemId = resource.sku || resource.id;
                var cachedItem = dayjs() < dayjs(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at")))
                    ? JSON.parse(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId)) || '')
                    : {};
                var item = __assign(__assign({}, cachedItem), { item_id: itemId, item_name: resource.title, price: resource.price, quantity: (options === null || options === void 0 ? void 0 : options.quantity) || 1, item_brand: brand, item_category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator) });
                // update localStorage cache
                localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId), JSON.stringify(item));
                localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at"), dayjs().add(1, 'day').toString());
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
                ;
                window.dataLayer.push({
                    event: 'add_to_cart',
                    label: resource.title,
                    value: resource.price,
                    ecommerce: {
                        type: 'ga4',
                        currency: appCurrencyId,
                        value: resource.price,
                        items: [item],
                    },
                });
            }
            else
                EECAddToCart(resource, options);
        },
        removeFromCart: function (resource, options) {
            var _a;
            if (enabledGA4) {
                var itemId = resource.sku || resource.id;
                var cachedItem = dayjs() < dayjs(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at")))
                    ? JSON.parse(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId)) || '')
                    : {};
                var item = __assign(__assign({}, cachedItem), { item_id: itemId, item_name: resource.title, price: resource.price, quantity: (options === null || options === void 0 ? void 0 : options.quantity) || 1, item_brand: brand, item_category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator) });
                // update localStorage cache
                localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId), JSON.stringify(item));
                localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at"), dayjs().add(1, 'day').toString());
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
                ;
                window.dataLayer.push({
                    event: 'remove_from_cart',
                    label: resource.title,
                    value: resource.price,
                    ecommerce: {
                        type: 'ga4',
                        currency: appCurrencyId,
                        value: resource.price,
                        items: [item],
                    },
                });
            }
            else
                EECRemoveFromCart(resource, options);
        },
        viewCart: function (resources, options) {
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    var items = resources
                        .map(function (resource) {
                        var _a, _b, _c;
                        var itemId = resource.sku || resource.id;
                        var cachedItem = dayjs() < dayjs(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at")))
                            ? JSON.parse(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId)) || '')
                            : {};
                        var item = resource
                            ? __assign(__assign({}, cachedItem), { item_id: itemId, item_name: resource.title, price: resource.price, quantity: ((_a = resource.options) === null || _a === void 0 ? void 0 : _a.quantity) || 1, item_brand: brand, item_category: (_b = resource.categories) === null || _b === void 0 ? void 0 : _b.join(trackingOptions.separator), item_variant: uniq((_c = resource.owners) === null || _c === void 0 ? void 0 : _c.map(function (member) { return member.name; })).join(trackingOptions.separator) }) : null;
                        // update localStorage cache
                        localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId), JSON.stringify(item));
                        localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at"), dayjs().add(1, 'day').toString());
                        return item;
                    })
                        .filter(notEmpty);
                    if (items.length > 0) {
                        ;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
                        ;
                        window.dataLayer.push({
                            event: 'view_cart',
                            label: resources.map(function (resource) { return resource.title; }).join('|'),
                            value: sum(resources.map(function (resource) { return resource.price || 0; })),
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: sum(resources.map(function (resource) { return resource.price || 0; })),
                                items: items,
                            },
                        });
                    }
                }
            }
        },
        checkout: function (resources, coupon, options) {
            if (enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                CustomCheckout(resources, options);
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    var items = resources
                        .map(function (resource) {
                        var _a, _b, _c;
                        var itemId = resource.sku || resource.id;
                        var cachedItem = dayjs() < dayjs(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at")))
                            ? JSON.parse(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId)) || '')
                            : {};
                        var item = resource
                            ? __assign(__assign({}, cachedItem), { item_id: itemId, item_name: resource.title, price: resource.price, quantity: ((_a = resource.options) === null || _a === void 0 ? void 0 : _a.quantity) || 1, item_brand: brand, item_category: (_b = resource.categories) === null || _b === void 0 ? void 0 : _b.join(trackingOptions.separator), item_variant: uniq((_c = resource.owners) === null || _c === void 0 ? void 0 : _c.map(function (member) { return member.name; })).join(trackingOptions.separator) }) : null;
                        // update localStorage cache
                        localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId), JSON.stringify(item));
                        localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at"), dayjs().add(1, 'day').toString());
                        return item;
                    })
                        .filter(notEmpty);
                    if (items.length > 0) {
                        ;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
                        ;
                        window.dataLayer.push({
                            event: 'begin_checkout',
                            label: resources.map(function (resource) { return resource.title; }).join('|'),
                            value: sum(resources.map(function (resource) { return resource.price || 0; })),
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: sum(resources.map(function (resource) { return resource.price || 0; })),
                                coupon: (coupon === null || coupon === void 0 ? void 0 : coupon.title) || null,
                                items: items,
                            },
                        });
                    }
                }
                else
                    EECCheckout(resources, options);
            }
        },
        // TODO: add resource argument
        addPaymentInfo: function (options) {
            EECAddPaymentInfo(options);
            // ;(window as any).dataLayer = (window as any).dataLayer || []
            // ;(window as any).dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
            // ;(window as any).dataLayer.push({
            //   event: 'add_payment_info',
            //   label: resources.map(resource => resource.title).join('|'),
            //   value: sum(resources.map(resource => resource.price || 0)),
            //   ecommerce: {
            // type: 'ga4',
            //     currency: appCurrencyId,
            //     value: sum(resources.map(resource => resource.price || 0)),
            //     items: ecProducts.map((product, index) => ({
            //       item_id: product.id,
            //       item_name: product.name,
            //       currency: appCurrencyId,
            //       price: product.price,
            //       quantity: product.quantity,
            //       item_brand: product.brand,
            //       item_category: product.category?.split(',')[0],
            //       item_category2: product.category?.split(',')[1],
            //       item_category3: product.category?.split(',')[2],
            //       item_category4: product.category?.split(',')[3],
            //       item_category5: product.category?.split(',')[4],
            //       index,
            //       item_variant: product.variant,
            //     })),
            //   },
            // })
        },
        purchase: function (orderId, orderProducts, orderDiscounts, options) {
            if (enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                CustomPurchase(orderId, orderProducts, orderDiscounts, options);
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    var items = orderProducts.map(function (product) {
                        var _a, _b;
                        var itemId = product.sku || product.id;
                        var cachedItem = dayjs() < dayjs(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at")))
                            ? JSON.parse(localStorage.getItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId)) || '')
                            : {};
                        var item = __assign(__assign({}, cachedItem), { item_id: product.sku || product.id, item_name: product.title, price: product.price, quantity: product.quantity, item_brand: brand, item_category: (_a = product.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator), item_variant: uniq((_b = product.owners) === null || _b === void 0 ? void 0 : _b.map(function (member) { return member.name; })).join(trackingOptions.separator) });
                        // update localStorage cache
                        localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId), JSON.stringify(item));
                        localStorage.setItem("".concat(EC_ITEM_MAP_KEY_PREFIX, ".").concat(itemId, ".expired_at"), dayjs().add(1, 'day').toString());
                        return item;
                    }) || [];
                    if (items.length > 0) {
                        ;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
                        ;
                        window.dataLayer.push({
                            event: 'purchase',
                            label: orderProducts.map(function (orderProduct) { return orderProduct.title; }).join('|'),
                            value: sum(orderProducts.map(function (orderProduct) { return orderProduct.price || 0; })),
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: sum(orderProducts.map(function (v) { return v.price || 0; })) - sum(orderDiscounts.map(function (v) { return v.price; })),
                                transaction_id: orderId,
                                coupon: orderDiscounts.map(function (v) { return v.name; }).join(trackingOptions.separator),
                                items: items,
                            },
                        });
                    }
                }
                else
                    EECPurchase(orderId, orderProducts, orderDiscounts, options);
            }
        },
        login: function () {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'login',
            });
        },
        register: function (method, page) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'register',
                method: method,
                page: page,
            });
        },
    };
};
export var useMemberShipCardDetails = function (memberId) {
    var _a = useQuery(gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query memberShipCardDetails($memberId: String!) {\n        card_enrollment(where: { member_id: { _eq: $memberId } }) {\n          card_id\n          card {\n            title\n          }\n          member {\n            order_logs(where: { status: { _eq: \"SUCCESS\" } }) {\n              order_products(where: { product_id: { _ilike: \"Card%\" } }) {\n                product_id\n                ended_at\n                delivered_at\n              }\n            }\n          }\n        }\n      }\n    "], ["\n      query memberShipCardDetails($memberId: String!) {\n        card_enrollment(where: { member_id: { _eq: $memberId } }) {\n          card_id\n          card {\n            title\n          }\n          member {\n            order_logs(where: { status: { _eq: \"SUCCESS\" } }) {\n              order_products(where: { product_id: { _ilike: \"Card%\" } }) {\n                product_id\n                ended_at\n                delivered_at\n              }\n            }\n          }\n        }\n      }\n    "]))), {
        variables: {
            memberId: memberId !== null && memberId !== void 0 ? memberId : '',
        },
    }), loading = _a.loading, memberShipCardDetails = _a.data;
    dayjs.extend(utc);
    dayjs.extend(timezone);
    var _b = useState([]), transformedMemberShipCardDetails = _b[0], setTransformedMemberShipCardDetails = _b[1];
    useEffect(function () {
        var _a;
        if (loading)
            return;
        var userTimezone = dayjs.tz.guess();
        var transFormatDate = function (date, target) {
            if (!date && target === 'endedAt')
                return 'Infinite Date';
            if (!date && target === 'deliveredAt')
                return 'Not Yet Delivered';
            if (!dayjs(date).isValid())
                return 'Invalid Date';
            return dayjs.utc(date).tz(userTimezone).format();
        };
        var filteredAndUniqueData = [];
        var cardIdToDatesMap = new Map();
        (_a = memberShipCardDetails === null || memberShipCardDetails === void 0 ? void 0 : memberShipCardDetails.card_enrollment) === null || _a === void 0 ? void 0 : _a.forEach(function (cardEnrollment) {
            var _a, _b;
            var cardId = cardEnrollment.card_id;
            var cardTitle = (_b = (_a = cardEnrollment.card) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : '';
            cardEnrollment.member.order_logs.forEach(function (orderLog) {
                orderLog.order_products.forEach(function (orderProduct) {
                    if (!orderProduct.product_id.endsWith(cardId))
                        return;
                    var ended_at = orderProduct.ended_at, delivered_at = orderProduct.delivered_at;
                    if (!cardIdToDatesMap.has(cardId)) {
                        cardIdToDatesMap.set(cardId, []);
                    }
                    var dateList = cardIdToDatesMap.get(cardId);
                    var dateString = "ended_at:".concat(ended_at, "-delivered_at:").concat(delivered_at); //Date unique key
                    if (!dateList.includes(dateString)) {
                        dateList.push(dateString);
                        filteredAndUniqueData.push({
                            id: cardId,
                            title: cardTitle,
                            ended_at: transFormatDate(ended_at, 'endedAt'),
                            delivered_at: transFormatDate(delivered_at, 'deliveredAt'),
                        });
                    }
                });
            });
        });
        setTransformedMemberShipCardDetails(filteredAndUniqueData);
    }, [loading, memberShipCardDetails]);
    return transformedMemberShipCardDetails;
};
var templateObject_1;
