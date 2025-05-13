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
    const baseProduct = {
        id: resource.id,
        type: convertProductType(resource.type, true),
        target: resource.metaId?.split(':')[2] || '',
        title: resource.title,
        item: resource.sku || null,
        url: window.location.href,
        authors: resource.owners,
        channels: {
            master: {
                id: resource.categories || [],
            },
        },
        keywords: resource?.tags?.join(options.separator) ||
            document.querySelector('meta[name="keywords"]')?.getAttribute('content') ||
            '',
        utm_source: utmSource || '',
    };
    switch (resource.type) {
        case 'program_content':
            return {
                ...baseProduct,
                id: (resource.metaId && resource.metaId.split(':')[2]) || '',
                title: resource.variants?.join(options.separator) || '',
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
export const useTracking = (trackingOptions = { separator: '|' }) => {
    const { settings, currencyId: appCurrencyId, id: appId } = useApp();
    const brand = settings['name'] || document.title;
    const enabledGA4 = Boolean(Number(settings['tracking.ga4.enabled']));
    const enabledCW = Boolean(Number(settings['tracking.cw.enabled']));
    const apolloClient = useApolloClient();
    const EC_ITEM_MAP_KEY_PREFIX = `ga.event.item`;
    // clear localStorage cache
    for (const key in localStorage) {
        if (key.startsWith(EC_ITEM_MAP_KEY_PREFIX) && key.endsWith('.expired_at')) {
            const itemId = key.split('.')[3];
            const expiredAt = dayjs(localStorage[key]);
            if (dayjs() > expiredAt) {
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
        const memberType = '會員';
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ memberData: null });
        window.dataLayer.push({
            event: 'cwData',
            memberData: {
                member_type: memberType,
                id: currentMember.options[appId]?.id || '',
                social_id: currentMember.options[appId]?.social_id || '',
                uid: currentMember.options[appId]?.uid || '',
                uuid: currentMember.options[appId]?.uuid || '',
                env: window.location.href.includes('local') ||
                    window.location.href.includes('dev') ||
                    window.location.href.includes('127.0.0.1')
                    ? 'develop'
                    : 'prod',
                email: currentMember.email,
                dmp_id: getCookie('__eruid'),
                salesforce_id: currentMember.options[appId]?.salesforce_id || '',
                utm_source: options?.utmSource,
                memberShipCardDetails,
            },
        });
    };
    const EECImpress = (resources, options) => {
        const impressionsWithProducts = resources.reduce((prev, curr, index) => {
            const flattenedResources = curr?.products?.filter(r => r?.type !== 'program_content') ?? [curr];
            const products = flattenedResources
                ?.map(product => product
                ? {
                    id: product.sku || product.id,
                    name: product.title,
                    price: product.price || 0,
                    brand,
                    category: product.categories?.join(trackingOptions.separator),
                    variant: uniq(product.owners?.map(member => member.name)).join(trackingOptions.separator),
                    quantity: 1, // TODO: use the inventory
                    list: options?.collection || convertPathName(window.location.pathname),
                    position: index + 1,
                }
                : null)
                .filter(notEmpty) || [];
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
                value: sum(impressionsWithProducts.map(impression => impression.price || 0)),
                ecommerce: {
                    type: 'ua',
                    currencyCode: appCurrencyId,
                    impressions: impressionsWithProducts,
                },
            });
        }
    };
    const CustomImpress = (resources, options) => {
        const cwProducts = resources.map(r => (r ? convertCwProduct(r, options?.utmSource) : null)).filter(notEmpty);
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
        const resourceOrProducts = resource.products?.filter(r => r?.type !== 'program_content') ?? [resource];
        const products = resourceOrProducts
            .map(resource => resource
            ? {
                id: resource.sku || resource.id,
                name: resource.title,
                price: resource.price,
                brand,
                category: resource.categories?.join(trackingOptions.separator),
                variant: uniq(resource.owners?.map(member => member.name)).join(trackingOptions.separator),
                position: options?.position,
            }
            : null)
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
                    actionField: { list: options?.collection || convertPathName(window.location.pathname) },
                    products,
                },
            },
        });
    };
    const EECDetail = async (resource, options) => {
        if (options?.ignore !== 'EEC') {
            const resourceOrProducts = resource.products?.filter(r => r?.type !== 'program_content') ?? [resource];
            const products = resourceOrProducts
                .map(resource => resource
                ? {
                    id: resource.sku || resource.id,
                    name: resource.title,
                    price: resource.price,
                    brand: settings['name'] || document.title,
                    category: resource.categories?.join(trackingOptions.separator),
                    variant: uniq(resource.owners?.map(member => member.name)).join(trackingOptions.separator),
                }
                : null)
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
                        actionField: { list: options?.collection || convertPathName(window.location.pathname) },
                        products,
                    },
                },
            });
        }
    };
    const CustomDetail = async (resource, options) => {
        const isProgramContent = resource.type === 'program_content';
        let products = resource.products?.filter(r => r?.type !== 'program_content');
        if (isProgramContent && resource.metaId) {
            const metaProducts = await getResourceCollection(apolloClient, [resource.metaId], true);
            products = metaProducts[0]?.products?.filter(p => p?.type === 'program_plan');
        }
        const targetResource = resource && convertCwProduct(resource, options?.utmSource);
        const subResources = products && products.filter(notEmpty).map(p => convertCwProduct(p, options?.utmSource));
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
                    direct: options?.direct,
                    products: [
                        {
                            id: resource.sku || resource.id,
                            name: resource.title,
                            price: resource.price,
                            brand,
                            category: resource.categories?.join(trackingOptions.separator),
                            variant: uniq(resource.owners?.map(member => member.name)).join(trackingOptions.separator),
                            quantity: options?.quantity || 1, // TODO: use the inventory
                        },
                    ],
                },
            },
        });
    };
    const EECRemoveFromCart = (resource, options) => {
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
                            category: resource.categories?.join(trackingOptions.separator),
                            variant: uniq(resource.owners?.map(member => member.name)).join(trackingOptions.separator),
                            quantity: options?.quantity || 1, // TODO: use the inventory
                        },
                    ],
                },
            },
        });
    };
    const EECCheckout = (resources, options) => {
        const ecProducts = resources
            .map(resource => resource
            ? {
                id: resource.sku || resource.id,
                name: resource.title,
                price: resource.price,
                brand,
                category: resource.categories?.join(trackingOptions.separator),
                variant: uniq(resource.owners?.map(member => member.name)).join(trackingOptions.separator),
                quantity: resource.options?.quantity || 1, // TODO: use the cart product
            }
            : null)
            .filter(notEmpty);
        if (ecProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
            ;
            window.dataLayer.push({
                event: 'checkout',
                label: resources.map(resource => resource.title).join('|'),
                value: sum(resources.map(resource => resource.price || 0)),
                ecommerce: {
                    type: 'ua',
                    currencyCode: appCurrencyId,
                    checkout: {
                        actionField: { step: options?.step || 1 },
                        products: ecProducts,
                    },
                },
            });
        }
    };
    const CustomCheckout = (resources, options) => {
        const cwProducts = resources
            .map(resource => (resource ? convertCwProduct(resource, options?.utmSource) : null))
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
    const EECAddPaymentInfo = (options) => {
        ;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
        ;
        window.dataLayer.push({
            event: 'checkoutOption',
            label: options?.gateway,
            value: 0,
            ecommerce: {
                type: 'ua',
                currencyCode: appCurrencyId,
                checkout_option: {
                    actionField: {
                        step: options?.step || 2,
                        option: `${options?.gateway || 'unknown'}.${options?.method || 'unknown'}`,
                    },
                },
            },
        });
    };
    const EECPurchase = (orderId, orderProducts, orderDiscounts, options) => {
        const ecProducts = orderProducts.map(product => ({
            id: product.sku || product.id,
            name: product.title,
            price: product.price,
            brand,
            category: product.categories?.join(trackingOptions.separator),
            variant: uniq(product.owners?.map(member => member.name)).join(trackingOptions.separator),
            quantity: product.quantity,
        })) || [];
        if (ecProducts.length > 0) {
            ;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
            ;
            window.dataLayer.push({
                event: 'purchase',
                label: orderProducts.map(orderProduct => orderProduct.title).join('|'),
                value: sum(orderProducts.map(orderProduct => orderProduct.price || 0)),
                ecommerce: {
                    type: 'ua',
                    currencyCode: appCurrencyId,
                    purchase: {
                        actionField: {
                            id: orderId,
                            affiliation: settings['name'] || document.title,
                            revenue: sum(orderProducts.map(v => v.price || 0)) - sum(orderDiscounts.map(v => v.price)),
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
                ...convertCwProduct(product, options?.utmSource),
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
            if (currentMember && enabledCW && options?.ignore !== 'CUSTOM')
                CustomView(currentMember, options, memberShipCardDetails);
        },
        impress: (resources, options) => {
            if (enabledCW && options?.ignore !== 'CUSTOM')
                CustomImpress(resources, options);
            if (options?.ignore !== 'EEC') {
                if (enabledGA4) {
                    const items = resources.reduce((prev, curr, index) => {
                        const flattenedResources = curr?.products?.filter(r => r?.type !== 'program_content') ?? [curr];
                        const products = flattenedResources
                            ?.map(product => {
                            const itemId = product?.sku || product?.id || '';
                            const cachedItem = dayjs() < dayjs(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
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
                                    item_category: product.categories?.join(trackingOptions.separator),
                                    index: index + 1,
                                    item_list_id: options?.collection || convertPathName(window.location.pathname),
                                    item_list_name: options?.collection || convertPathName(window.location.pathname),
                                    item_variant: uniq(product.owners?.map(member => member.name)).join(trackingOptions.separator),
                                }
                                : null;
                            // update localStorage cache
                            localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                            localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, dayjs().add(1, 'day').toString());
                            return item;
                        })
                            .filter(notEmpty) || [];
                        return [...prev, ...products];
                    }, []);
                    if (items.length > 0) {
                        ;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ ecommerce: null });
                        window.dataLayer.push({
                            event: 'view_item_list',
                            label: items.map(item => item.item_name).join('|'),
                            value: sum(items.map(item => item.price || 0)),
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
            if (options?.ignore !== 'EEC') {
                if (enabledGA4) {
                    const resourceOrProducts = resource.products?.filter(r => r?.type !== 'program_content') ?? [resource];
                    const items = resourceOrProducts
                        .map(resource => {
                        const itemId = resource?.sku || resource?.id || '';
                        const cachedItem = dayjs() < dayjs(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
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
                                item_category: resource.categories?.join(trackingOptions.separator),
                                index: options?.position,
                                item_variant: uniq(resource.owners?.map(member => member.name)).join(trackingOptions.separator),
                            }
                            : null;
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, dayjs().add(1, 'day').toString());
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
                            items,
                        },
                    });
                }
                else
                    EECClick(resource, options);
            }
        },
        detail: async (resource, options) => {
            if (enabledCW && options?.ignore !== 'CUSTOM')
                CustomDetail(resource, options);
            if (options?.ignore !== 'EEC') {
                if (enabledGA4) {
                    const resourceOrProducts = resource.products?.filter(r => r?.type !== 'program_content') ?? [resource];
                    const items = resourceOrProducts
                        .map(resource => {
                        const itemId = resource?.sku || resource?.id || '';
                        const cachedItem = dayjs() < dayjs(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
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
                                item_category: resource.categories?.join(trackingOptions.separator),
                                item_variant: uniq(resource.owners?.map(member => member.name)).join(trackingOptions.separator),
                            }
                            : null;
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, dayjs().add(1, 'day').toString());
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
                            items,
                        },
                    });
                }
                else
                    EECDetail(resource, options);
            }
        },
        addToCart: (resource, options) => {
            if (enabledGA4) {
                const itemId = resource.sku || resource.id;
                const cachedItem = dayjs() < dayjs(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                    ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                    : {};
                const item = {
                    ...cachedItem,
                    item_id: itemId,
                    item_name: resource.title,
                    price: resource.price,
                    quantity: options?.quantity || 1, // TODO: use the inventory
                    item_brand: brand,
                    item_category: resource.categories?.join(trackingOptions.separator),
                };
                // update localStorage cache
                localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, dayjs().add(1, 'day').toString());
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
            if (enabledGA4) {
                const itemId = resource.sku || resource.id;
                const cachedItem = dayjs() < dayjs(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                    ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                    : {};
                const item = {
                    ...cachedItem,
                    item_id: itemId,
                    item_name: resource.title,
                    price: resource.price,
                    quantity: options?.quantity || 1, // TODO: use the inventory
                    item_brand: brand,
                    item_category: resource.categories?.join(trackingOptions.separator),
                };
                // update localStorage cache
                localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, dayjs().add(1, 'day').toString());
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
            if (options?.ignore !== 'EEC') {
                if (enabledGA4) {
                    const items = resources
                        .map(resource => {
                        const itemId = resource.sku || resource.id;
                        const cachedItem = dayjs() < dayjs(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                            ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                            : {};
                        const item = resource
                            ? {
                                ...cachedItem,
                                item_id: itemId,
                                item_name: resource.title,
                                price: resource.price,
                                quantity: resource.options?.quantity || 1, // TODO: use the cart product
                                item_brand: brand,
                                item_category: resource.categories?.join(trackingOptions.separator),
                                item_variant: uniq(resource.owners?.map(member => member.name)).join(trackingOptions.separator),
                            }
                            : null;
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, dayjs().add(1, 'day').toString());
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
                            label: resources.map(resource => resource.title).join('|'),
                            value: sum(resources.map(resource => resource.price || 0)),
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: sum(resources.map(resource => resource.price || 0)),
                                items,
                            },
                        });
                    }
                }
            }
        },
        checkout: (resources, coupon, options) => {
            if (enabledCW && options?.ignore !== 'CUSTOM')
                CustomCheckout(resources, options);
            if (options?.ignore !== 'EEC') {
                if (enabledGA4) {
                    const items = resources
                        .map(resource => {
                        const itemId = resource.sku || resource.id;
                        const cachedItem = dayjs() < dayjs(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                            ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                            : {};
                        const item = resource
                            ? {
                                ...cachedItem,
                                item_id: itemId,
                                item_name: resource.title,
                                price: resource.price,
                                quantity: resource.options?.quantity || 1, // TODO: use the cart product
                                item_brand: brand,
                                item_category: resource.categories?.join(trackingOptions.separator),
                                item_variant: uniq(resource.owners?.map(member => member.name)).join(trackingOptions.separator),
                            }
                            : null;
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, dayjs().add(1, 'day').toString());
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
                            label: resources.map(resource => resource.title).join('|'),
                            value: sum(resources.map(resource => resource.price || 0)),
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: sum(resources.map(resource => resource.price || 0)),
                                coupon: coupon?.title || null,
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
            if (enabledCW && options?.ignore !== 'CUSTOM')
                CustomPurchase(orderId, orderProducts, orderDiscounts, options);
            if (options?.ignore !== 'EEC') {
                if (enabledGA4) {
                    const items = orderProducts.map(product => {
                        const itemId = product.sku || product.id;
                        const cachedItem = dayjs() < dayjs(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`))
                            ? JSON.parse(localStorage.getItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`) || '')
                            : {};
                        const item = {
                            ...cachedItem,
                            item_id: product.sku || product.id,
                            item_name: product.title,
                            price: product.price,
                            quantity: product.quantity,
                            item_brand: brand,
                            item_category: product.categories?.join(trackingOptions.separator),
                            item_variant: uniq(product.owners?.map(member => member.name)).join(trackingOptions.separator),
                        };
                        // update localStorage cache
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}`, JSON.stringify(item));
                        localStorage.setItem(`${EC_ITEM_MAP_KEY_PREFIX}.${itemId}.expired_at`, dayjs().add(1, 'day').toString());
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
                            value: sum(orderProducts.map(orderProduct => orderProduct.price || 0)),
                            ecommerce: {
                                type: 'ga4',
                                currency: appCurrencyId,
                                value: sum(orderProducts.map(v => v.price || 0)) - sum(orderDiscounts.map(v => v.price)),
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
export const useMemberShipCardDetails = (memberId) => {
    const { loading, data: memberShipCardDetails } = useQuery(gql `
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
            memberId: memberId ?? '',
        },
    });
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const [transformedMemberShipCardDetails, setTransformedMemberShipCardDetails] = useState([]);
    useEffect(() => {
        if (loading)
            return;
        const userTimezone = dayjs.tz.guess();
        const transFormatDate = (date, target) => {
            if (!date && target === 'endedAt')
                return 'Infinite Date';
            if (!date && target === 'deliveredAt')
                return 'Not Yet Delivered';
            if (!dayjs(date).isValid())
                return 'Invalid Date';
            return dayjs.utc(date).tz(userTimezone).format();
        };
        const filteredAndUniqueData = [];
        const cardIdToDatesMap = new Map();
        memberShipCardDetails?.card_enrollment?.forEach(cardEnrollment => {
            const cardId = cardEnrollment.card_id;
            const cardTitle = cardEnrollment.card?.title ?? '';
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
