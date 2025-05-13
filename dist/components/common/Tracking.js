import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { equals } from 'ramda';
import React, { useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { useApp } from '../../contexts/AppContext';
import { useAuth } from '../../contexts/AuthContext';
import { useMemberShipCardDetails, useTracking } from '../../hooks/tracking';
const View = React.memo(({ ignore }) => {
    const tracking = useTracking();
    const [utmSource] = useQueryParam('utm_source', StringParam);
    const { settings } = useApp();
    const { currentMember } = useAuth();
    const memberShipCardDetails = useMemberShipCardDetails(currentMember === null || currentMember === void 0 ? void 0 : currentMember.id);
    const enabledCW = Boolean(Number(settings['tracking.cw.enabled']));
    useEffect(() => {
        tracking.view(currentMember, { ignore, utmSource: utmSource || '' }, memberShipCardDetails);
    }, [enabledCW, currentMember, tracking, utmSource, ignore, memberShipCardDetails]);
    return _jsx(_Fragment, {});
}, equals);
const Impression = React.memo(({ resources, collection, ignore }) => {
    const tracking = useTracking();
    const [utmSource] = useQueryParam('utm_source', StringParam);
    useEffect(() => {
        tracking.impress(resources, { collection, ignore, utmSource: utmSource || '' });
    }, [collection, resources, tracking, utmSource, ignore]);
    return _jsx(_Fragment, {});
}, equals);
const Detail = React.memo(({ resource, ignore }) => {
    const [pageFrom] = useQueryParam('pageFrom', StringParam);
    const [utmSource] = useQueryParam('utm_source', StringParam);
    const tracking = useTracking();
    useEffect(() => {
        tracking.detail(resource, { collection: pageFrom || undefined, ignore, utmSource: utmSource || '' });
    }, [pageFrom, utmSource, resource, tracking, ignore]);
    return _jsx(_Fragment, {});
}, equals);
const ViewCart = React.memo(({ resources, onViewCart, ignore }) => {
    const tracking = useTracking();
    const [utmSource] = useQueryParam('utm_source', StringParam);
    useEffect(() => {
        tracking.viewCart(resources, { ignore, utmSource: utmSource || '' });
        onViewCart === null || onViewCart === void 0 ? void 0 : onViewCart();
    }, [onViewCart, resources, tracking, utmSource, ignore]);
    return _jsx(_Fragment, {});
}, equals);
const Purchase = React.memo(({ orderId, products, discounts, ignore, onTracked }) => {
    const tracking = useTracking();
    const [utmSource] = useQueryParam('utm_source', StringParam);
    useEffect(() => {
        tracking.purchase(orderId, products, discounts, { ignore, utmSource: utmSource || '' });
        onTracked === null || onTracked === void 0 ? void 0 : onTracked();
    }, [discounts, utmSource, orderId, products, tracking, ignore]);
    return _jsx(_Fragment, {});
}, equals);
const Tracking = {
    View,
    Detail,
    Impression,
    ViewCart,
    Purchase,
};
export default Tracking;
