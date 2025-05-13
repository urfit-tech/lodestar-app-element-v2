"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemberShipCardDetails = exports.useTracking = void 0;
const client_1 = require("@apollo/client");
const dayjs_1 = __importDefault(require("dayjs"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const ramda_1 = require("ramda");
const react_1 = require("react");
const AppContext_1 = require("../contexts/AppContext");
const helpers_1 = require("../helpers");
const resource_1 = require("./resource");
const util_1 = require("./util");
const convertProductType = (originalType, toMetaProduct = true) => {
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
const convertCwProduct = (resource, utmSource, options = { separator: '|' }) => {
    var _a, _b, _c, _d;
    const baseProduct = {
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
            return {
                ...baseProduct,
                id: (resource.metaId && resource.metaId.split(':')[2]) || '',
                title: ((_d = resource.variants) === null || _d === void 0 ? void 0 : _d.join(options.separator)) || '',
                content_id: resource.id,
                content_name: resource.title,
            };
        case 'post':
            return baseProduct;
        default:
            return {
                ...baseProduct,
                price: resource.price,
            };
    }
};
const useTracking = (trackingOptions = { separator: '|' }) => {
    const { settings, currencyId: appCurrencyId, id: appId } = (0, AppContext_1.useApp)();
    const brand = settings['name'] || document.title;
    const enabledGA4 = Boolean(Number(settings['tracking.ga4.enabled']));
    const enabledCW = Boolean(Number(settings['tracking.cw.enabled']));
    const apolloClient = (0, client_1.useApolloClient)();
    const EC_ITEM_MAP_KEY_PREFIX = `ga.event.item`;
    // clear localStorage cache
    for (const key in localStorage) {
        if (key.startsWith(EC_ITEM_MAP_KEY_PREFIX) && key.endsWith('.expired_at')) {
            const itemId = key.split('.')[3];
            const expiredAt = (0, dayjs_1.default)(localStorage[key]);
            if ((0, dayjs_1.default)() > expiredAt) {
                localStorage.removeItem(key);
                localStorage.removeItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`);
            }
        }
    }
    const UAview = (currentMember, options) => {
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
    const CustomView = (currentMember, options, memberShipCardDetails) => {
        var _a, _b, _c, _d, _e;
        const memberType = '會員';
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
                dmp_id: (0, util_1.getCookie)('__eruid'),
                salesforce_id: ((_e = currentMember.options[appId]) === null || _e === void 0 ? void 0 : _e.salesforce_id) || '',
                utm_source: options === null || options === void 0 ? void 0 : options.utmSource,
                memberShipCardDetails,
            },
        });
    };
    const EECImpress = (resources, options) => {
        const impressionsWithProducts = resources.reduce((prev, curr, index) => {
            var _a, _b;
            const flattenedResources = (_b = (_a = curr === null || curr === void 0 ? void 0 : curr.products) === null || _a === void 0 ? void 0 : _a.filter(r => (r === null || r === void 0 ? void 0 : r.type) !== 'program_content')) !== null && _b !== void 0 ? _b : [curr];
            const products = (flattenedResources === null || flattenedResources === void 0 ? void 0 : flattenedResources.map(product => {
                var _a, _b;
                return product
                    ? {
                        id: product.sku || product.id,
                        name: product.title,
                        price: product.price || 0,
                        brand,
                        category: (_a = product.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                        variant: (0, ramda_1.uniq)((_b = product.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                        quantity: 1, // TODO: use the inventory
                        list: (options === null || options === void 0 ? void 0 : options.collection) || (0, helpers_1.convertPathName)(window.location.pathname),
                        position: index + 1,
                    }
                    : null;
            }).filter(helpers_1.notEmpty)) || [];
            return [...prev, ...products];
        }, []);
        if (impressionsWithProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
            ;
            window.dataLayer.push({
                event: 'productImpression',
                label: impressionsWithProducts.map(impression => impression.name).join('|'),
                value: (0, ramda_1.sum)(impressionsWithProducts.map(impression => impression.price || 0)),
                ecommerce: {
                    type: 'ua',
                    currencyCode: appCurrencyId,
                    impressions: impressionsWithProducts,
                },
            });
        }
    };
    const CustomImpress = (resources, options) => {
        const cwProducts = resources.map(r => (r ? convertCwProduct(r, options === null || options === void 0 ? void 0 : options.utmSource) : null)).filter(helpers_1.notEmpty);
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
    const EECClick = (resource, options) => {
        var _a, _b;
        const resourceOrProducts = (_b = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(r => (r === null || r === void 0 ? void 0 : r.type) !== 'program_content')) !== null && _b !== void 0 ? _b : [resource];
        const products = resourceOrProducts
            .map(resource => {
            var _a, _b;
            return resource
                ? {
                    id: resource.sku || resource.id,
                    name: resource.title,
                    price: resource.price,
                    brand,
                    category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                    variant: (0, ramda_1.uniq)((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                    position: options === null || options === void 0 ? void 0 : options.position,
                }
                : null;
        })
            .filter(helpers_1.notEmpty);
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
                    actionField: { list: (options === null || options === void 0 ? void 0 : options.collection) || (0, helpers_1.convertPathName)(window.location.pathname) },
                    products,
                },
            },
        });
    };
    const EECDetail = async (resource, options) => {
        var _a, _b;
        if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
            const resourceOrProducts = (_b = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(r => (r === null || r === void 0 ? void 0 : r.type) !== 'program_content')) !== null && _b !== void 0 ? _b : [resource];
            const products = resourceOrProducts
                .map(resource => {
                var _a, _b;
                return resource
                    ? {
                        id: resource.sku || resource.id,
                        name: resource.title,
                        price: resource.price,
                        brand: settings['name'] || document.title,
                        category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                        variant: (0, ramda_1.uniq)((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                    }
                    : null;
            })
                .filter(helpers_1.notEmpty);
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
                        actionField: { list: (options === null || options === void 0 ? void 0 : options.collection) || (0, helpers_1.convertPathName)(window.location.pathname) },
                        products,
                    },
                },
            });
        }
    };
    const CustomDetail = async (resource, options) => {
        var _a, _b, _c;
        const isProgramContent = resource.type === 'program_content';
        let products = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(r => (r === null || r === void 0 ? void 0 : r.type) !== 'program_content');
        if (isProgramContent && resource.metaId) {
            const metaProducts = await (0, resource_1.getResourceCollection)(apolloClient, [resource.metaId], true);
            products = (_c = (_b = metaProducts[0]) === null || _b === void 0 ? void 0 : _b.products) === null || _c === void 0 ? void 0 : _c.filter(p => (p === null || p === void 0 ? void 0 : p.type) === 'program_plan');
        }
        const targetResource = resource && convertCwProduct(resource, options === null || options === void 0 ? void 0 : options.utmSource);
        const subResources = products && products.filter(helpers_1.notEmpty).map(p => convertCwProduct(p, options === null || options === void 0 ? void 0 : options.utmSource));
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ itemData: { products: null, program: null, article: null } });
        if (subResources) {
            ;
            window.dataLayer.push({
                event: 'cwData',
                itemData: {
                    products: subResources.map(r => ({ ...targetResource, ...r })),
                    program: { ...targetResource, ...subResources[0] },
                    article: { ...targetResource, ...subResources[0] },
                },
            });
            return;
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
    };
    const EECAddToCart = (resource, options) => {
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
                            brand,
                            category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                            variant: (0, ramda_1.uniq)((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                            quantity: (options === null || options === void 0 ? void 0 : options.quantity) || 1, // TODO: use the inventory
                        },
                    ],
                },
            },
        });
    };
    const EECRemoveFromCart = (resource, options) => {
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
                            variant: (0, ramda_1.uniq)((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                            quantity: (options === null || options === void 0 ? void 0 : options.quantity) || 1, // TODO: use the inventory
                        },
                    ],
                },
            },
        });
    };
    const EECCheckout = (resources, options) => {
        const ecProducts = resources
            .map(resource => {
            var _a, _b, _c;
            return resource
                ? {
                    id: resource.sku || resource.id,
                    name: resource.title,
                    price: resource.price,
                    brand,
                    category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                    variant: (0, ramda_1.uniq)((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                    quantity: ((_c = resource.options) === null || _c === void 0 ? void 0 : _c.quantity) || 1, // TODO: use the cart product
                }
                : null;
        })
            .filter(helpers_1.notEmpty);
        if (ecProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
            ;
            window.dataLayer.push({
                event: 'checkout',
                label: resources.map(resource => resource.title).join('|'),
                value: (0, ramda_1.sum)(resources.map(resource => resource.price || 0)),
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
    const CustomCheckout = (resources, options) => {
        const cwProducts = resources
            .map(resource => (resource ? convertCwProduct(resource, options === null || options === void 0 ? void 0 : options.utmSource) : null))
            .filter(helpers_1.notEmpty);
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
    const EECAddPaymentInfo = (options) => {
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
                        option: `${(options === null || options === void 0 ? void 0 : options.gateway) || 'unknown'}.${(options === null || options === void 0 ? void 0 : options.method) || 'unknown'}`,
                    },
                },
            },
        });
    };
    const EECPurchase = (orderId, orderProducts, orderDiscounts, options) => {
        const ecProducts = orderProducts.map(product => {
            var _a, _b;
            return ({
                id: product.sku || product.id,
                name: product.title,
                price: product.price,
                brand,
                category: (_a = product.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                variant: (0, ramda_1.uniq)((_b = product.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
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
                label: orderProducts.map(orderProduct => orderProduct.title).join('|'),
                value: (0, ramda_1.sum)(orderProducts.map(orderProduct => orderProduct.price || 0)),
                ecommerce: {
                    type: 'ua',
                    currencyCode: appCurrencyId,
                    purchase: {
                        actionField: {
                            id: orderId,
                            affiliation: settings['name'] || document.title,
                            revenue: (0, ramda_1.sum)(orderProducts.map(v => v.price || 0)) - (0, ramda_1.sum)(orderDiscounts.map(v => v.price)),
                            coupon: orderDiscounts.map(v => v.name).join(trackingOptions.separator),
                        },
                        products: ecProducts,
                    },
                },
            });
        }
    };
    const CustomPurchase = (orderId, orderProducts, orderDiscounts, options) => {
        const cwProducts = orderProducts.map(product => {
            return {
                ...convertCwProduct(product, options === null || options === void 0 ? void 0 : options.utmSource),
                order_number: orderId,
            };
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
        view: (currentMember, options, memberShipCardDetails) => {
            UAview(currentMember, options);
            if (currentMember && enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                CustomView(currentMember, options, memberShipCardDetails);
        },
        impress: (resources, options) => {
            if (enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                CustomImpress(resources, options);
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    const items = resources.reduce((prev, curr, index) => {
                        var _a, _b;
                        const flattenedResources = (_b = (_a = curr === null || curr === void 0 ? void 0 : curr.products) === null || _a === void 0 ? void 0 : _a.filter(r => (r === null || r === void 0 ? void 0 : r.type) !== 'program_content')) !== null && _b !== void 0 ? _b : [curr];
                        const products = (flattenedResources === null || flattenedResources === void 0 ? void 0 : flattenedResources.map(product => {
                            var _a, _b;
                            const itemId = (product === null || product === void 0 ? void 0 : product.sku) || (product === null || product === void 0 ? void 0 : product.id) || '';
                            const cachedItem = (0, dayjs_1.default)() < (0, dayjs_1.default)(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                                ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                                : {};
                            const item = product
                                ? {
                                    ...cachedItem,
                                    item_id: itemId,
                                    item_name: product.title,
                                    currency: appCurrencyId,
                                    price: product.price || 0,
                                    quantity: 1,
                                    item_brand: brand,
                                    item_category: (_a = product.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                                    index: index + 1,
                                    item_list_id: (options === null || options === void 0 ? void 0 : options.collection) || (0, helpers_1.convertPathName)(window.location.pathname),
                                    item_list_name: (options === null || options === void 0 ? void 0 : options.collection) || (0, helpers_1.convertPathName)(window.location.pathname),
                                    item_variant: (0, ramda_1.uniq)((_b = product.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                                }
                                : null;
                            // update localStorage cache
                            localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                            localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, (0, dayjs_1.default)().add(1, 'day').toString());
                            return item;
                        }).filter(helpers_1.notEmpty)) || [];
                        return [...prev, ...products];
                    }, []);
                    if (items.length > 0) {
                        ;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null });
                        window.dataLayer.push({
                            event: 'view_item_list',
                            label: items.map(item => item.item_name).join('|'),
                            value: (0, ramda_1.sum)(items.map(item => item.price || 0)),
                            ecommerce: {
                                type: 'ga4',
                                items,
                            },
                        });
                    }
                }
                else
                    EECImpress(resources, options);
            }
        },
        click: (resource, options) => {
            var _a, _b;
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    const resourceOrProducts = (_b = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(r => (r === null || r === void 0 ? void 0 : r.type) !== 'program_content')) !== null && _b !== void 0 ? _b : [resource];
                    const items = resourceOrProducts
                        .map(resource => {
                        var _a, _b;
                        const itemId = (resource === null || resource === void 0 ? void 0 : resource.sku) || (resource === null || resource === void 0 ? void 0 : resource.id) || '';
                        const cachedItem = (0, dayjs_1.default)() < (0, dayjs_1.default)(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                            ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                            : {};
                        const item = resource
                            ? {
                                ...cachedItem,
                                item_id: itemId,
                                item_name: resource.title,
                                currency: appCurrencyId,
                                price: resource.price || 0,
                                item_brand: brand,
                                item_category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                                index: options === null || options === void 0 ? void 0 : options.position,
                                item_variant: (0, ramda_1.uniq)((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                            }
                            : null;
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, (0, dayjs_1.default)().add(1, 'day').toString());
                        return item;
                    })
                        .filter(helpers_1.notEmpty);
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
                            items,
                        },
                    });
                }
                else
                    EECClick(resource, options);
            }
        },
        detail: async (resource, options) => {
            var _a, _b;
            if (enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                CustomDetail(resource, options);
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    const resourceOrProducts = (_b = (_a = resource.products) === null || _a === void 0 ? void 0 : _a.filter(r => (r === null || r === void 0 ? void 0 : r.type) !== 'program_content')) !== null && _b !== void 0 ? _b : [resource];
                    const items = resourceOrProducts
                        .map(resource => {
                        var _a, _b;
                        const itemId = (resource === null || resource === void 0 ? void 0 : resource.sku) || (resource === null || resource === void 0 ? void 0 : resource.id) || '';
                        const cachedItem = (0, dayjs_1.default)() < (0, dayjs_1.default)(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                            ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                            : {};
                        const item = resource
                            ? {
                                ...cachedItem,
                                item_id: itemId,
                                item_name: resource.title,
                                currency: appCurrencyId,
                                price: resource.price,
                                item_brand: brand,
                                item_category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                                item_variant: (0, ramda_1.uniq)((_b = resource.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                            }
                            : null;
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, (0, dayjs_1.default)().add(1, 'day').toString());
                        return item;
                    })
                        .filter(helpers_1.notEmpty);
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
                            items,
                        },
                    });
                }
                else
                    EECDetail(resource, options);
            }
        },
        addToCart: (resource, options) => {
            var _a;
            if (enabledGA4) {
                const itemId = resource.sku || resource.id;
                const cachedItem = (0, dayjs_1.default)() < (0, dayjs_1.default)(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                    ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                    : {};
                const item = {
                    ...cachedItem,
                    item_id: itemId,
                    item_name: resource.title,
                    price: resource.price,
                    quantity: (options === null || options === void 0 ? void 0 : options.quantity) || 1, // TODO: use the inventory
                    item_brand: brand,
                    item_category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                };
                // update localStorage cache
                localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, (0, dayjs_1.default)().add(1, 'day').toString());
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
        removeFromCart: (resource, options) => {
            var _a;
            if (enabledGA4) {
                const itemId = resource.sku || resource.id;
                const cachedItem = (0, dayjs_1.default)() < (0, dayjs_1.default)(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                    ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                    : {};
                const item = {
                    ...cachedItem,
                    item_id: itemId,
                    item_name: resource.title,
                    price: resource.price,
                    quantity: (options === null || options === void 0 ? void 0 : options.quantity) || 1, // TODO: use the inventory
                    item_brand: brand,
                    item_category: (_a = resource.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                };
                // update localStorage cache
                localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, (0, dayjs_1.default)().add(1, 'day').toString());
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
        viewCart: (resources, options) => {
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    const items = resources
                        .map(resource => {
                        var _a, _b, _c;
                        const itemId = resource.sku || resource.id;
                        const cachedItem = (0, dayjs_1.default)() < (0, dayjs_1.default)(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                            ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                            : {};
                        const item = resource
                            ? {
                                ...cachedItem,
                                item_id: itemId,
                                item_name: resource.title,
                                price: resource.price,
                                quantity: ((_a = resource.options) === null || _a === void 0 ? void 0 : _a.quantity) || 1, // TODO: use the cart product
                                item_brand: brand,
                                item_category: (_b = resource.categories) === null || _b === void 0 ? void 0 : _b.join(trackingOptions.separator),
                                item_variant: (0, ramda_1.uniq)((_c = resource.owners) === null || _c === void 0 ? void 0 : _c.map(member => member.name)).join(trackingOptions.separator),
                            }
                            : null;
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, (0, dayjs_1.default)().add(1, 'day').toString());
                        return item;
                    })
                        .filter(helpers_1.notEmpty);
                    if (items.length > 0) {
                        ;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
                        ;
                        window.dataLayer.push({
                            event: 'view_cart',
                            label: resources.map(resource => resource.title).join('|'),
                            value: (0, ramda_1.sum)(resources.map(resource => resource.price || 0)),
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: (0, ramda_1.sum)(resources.map(resource => resource.price || 0)),
                                items,
                            },
                        });
                    }
                }
            }
        },
        checkout: (resources, coupon, options) => {
            if (enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                CustomCheckout(resources, options);
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    const items = resources
                        .map(resource => {
                        var _a, _b, _c;
                        const itemId = resource.sku || resource.id;
                        const cachedItem = (0, dayjs_1.default)() < (0, dayjs_1.default)(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                            ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                            : {};
                        const item = resource
                            ? {
                                ...cachedItem,
                                item_id: itemId,
                                item_name: resource.title,
                                price: resource.price,
                                quantity: ((_a = resource.options) === null || _a === void 0 ? void 0 : _a.quantity) || 1, // TODO: use the cart product
                                item_brand: brand,
                                item_category: (_b = resource.categories) === null || _b === void 0 ? void 0 : _b.join(trackingOptions.separator),
                                item_variant: (0, ramda_1.uniq)((_c = resource.owners) === null || _c === void 0 ? void 0 : _c.map(member => member.name)).join(trackingOptions.separator),
                            }
                            : null;
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, (0, dayjs_1.default)().add(1, 'day').toString());
                        return item;
                    })
                        .filter(helpers_1.notEmpty);
                    if (items.length > 0) {
                        ;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
                        ;
                        window.dataLayer.push({
                            event: 'begin_checkout',
                            label: resources.map(resource => resource.title).join('|'),
                            value: (0, ramda_1.sum)(resources.map(resource => resource.price || 0)),
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: (0, ramda_1.sum)(resources.map(resource => resource.price || 0)),
                                coupon: (coupon === null || coupon === void 0 ? void 0 : coupon.title) || null,
                                items,
                            },
                        });
                    }
                }
                else
                    EECCheckout(resources, options);
            }
        },
        // TODO: add resource argument
        addPaymentInfo: (options) => {
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
        purchase: (orderId, orderProducts, orderDiscounts, options) => {
            if (enabledCW && (options === null || options === void 0 ? void 0 : options.ignore) !== 'CUSTOM')
                CustomPurchase(orderId, orderProducts, orderDiscounts, options);
            if ((options === null || options === void 0 ? void 0 : options.ignore) !== 'EEC') {
                if (enabledGA4) {
                    const items = orderProducts.map(product => {
                        var _a, _b;
                        const itemId = product.sku || product.id;
                        const cachedItem = (0, dayjs_1.default)() < (0, dayjs_1.default)(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                            ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                            : {};
                        const item = {
                            ...cachedItem,
                            item_id: product.sku || product.id,
                            item_name: product.title,
                            price: product.price,
                            quantity: product.quantity,
                            item_brand: brand,
                            item_category: (_a = product.categories) === null || _a === void 0 ? void 0 : _a.join(trackingOptions.separator),
                            item_variant: (0, ramda_1.uniq)((_b = product.owners) === null || _b === void 0 ? void 0 : _b.map(member => member.name)).join(trackingOptions.separator),
                        };
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, (0, dayjs_1.default)().add(1, 'day').toString());
                        return item;
                    }) || [];
                    if (items.length > 0) {
                        ;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
                        ;
                        window.dataLayer.push({
                            event: 'purchase',
                            label: orderProducts.map(orderProduct => orderProduct.title).join('|'),
                            value: (0, ramda_1.sum)(orderProducts.map(orderProduct => orderProduct.price || 0)),
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: (0, ramda_1.sum)(orderProducts.map(v => v.price || 0)) - (0, ramda_1.sum)(orderDiscounts.map(v => v.price)),
                                transaction_id: orderId,
                                coupon: orderDiscounts.map(v => v.name).join(trackingOptions.separator),
                                items,
                            },
                        });
                    }
                }
                else
                    EECPurchase(orderId, orderProducts, orderDiscounts, options);
            }
        },
        login: () => {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'login',
            });
        },
        register: (method, page) => {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'register',
                method,
                page,
            });
        },
    };
};
exports.useTracking = useTracking;
const useMemberShipCardDetails = (memberId) => {
    const { loading, data: memberShipCardDetails } = (0, client_1.useQuery)((0, client_1.gql) `
      query memberShipCardDetails($memberId: String!) {
        card_enrollment(where: { member_id: { _eq: $memberId } }) {
          card_id
          card {
            title
          }
          member {
            order_logs(where: { status: { _eq: "SUCCESS" } }) {
              order_products(where: { product_id: { _ilike: "Card%" } }) {
                product_id
                ended_at
                delivered_at
              }
            }
          }
        }
      }
    `, {
        variables: {
            memberId: memberId !== null && memberId !== void 0 ? memberId : '',
        },
    });
    dayjs_1.default.extend(utc_1.default);
    dayjs_1.default.extend(timezone_1.default);
    const [transformedMemberShipCardDetails, setTransformedMemberShipCardDetails] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        var _a;
        if (loading)
            return;
        const userTimezone = dayjs_1.default.tz.guess();
        const transFormatDate = (date, target) => {
            if (!date && target === 'endedAt')
                return 'Infinite Date';
            if (!date && target === 'deliveredAt')
                return 'Not Yet Delivered';
            if (!(0, dayjs_1.default)(date).isValid())
                return 'Invalid Date';
            return dayjs_1.default.utc(date).tz(userTimezone).format();
        };
        const filteredAndUniqueData = [];
        const cardIdToDatesMap = new Map();
        (_a = memberShipCardDetails === null || memberShipCardDetails === void 0 ? void 0 : memberShipCardDetails.card_enrollment) === null || _a === void 0 ? void 0 : _a.forEach(cardEnrollment => {
            var _a, _b;
            const cardId = cardEnrollment.card_id;
            const cardTitle = (_b = (_a = cardEnrollment.card) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : '';
            cardEnrollment.member.order_logs.forEach(orderLog => {
                orderLog.order_products.forEach(orderProduct => {
                    if (!orderProduct.product_id.endsWith(cardId))
                        return;
                    const { ended_at, delivered_at } = orderProduct;
                    if (!cardIdToDatesMap.has(cardId)) {
                        cardIdToDatesMap.set(cardId, []);
                    }
                    const dateList = cardIdToDatesMap.get(cardId);
                    const dateString = `ended_at:${ended_at}-delivered_at:${delivered_at}`; //Date unique key
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
exports.useMemberShipCardDetails = useMemberShipCardDetails;
