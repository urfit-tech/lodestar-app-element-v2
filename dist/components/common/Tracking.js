import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { equals } from 'ramda';
import React, { useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { useApp } from '../../contexts/AppContext';
import { useAuth } from '../../contexts/AuthContext';
import { useMemberShipCardDetails, useTracking } from '../../hooks/tracking';
var View = React.memo(function (_a) {
    var ignore = _a.ignore;
    var tracking = useTracking();
    var utmSource = useQueryParam('utm_source', StringParam)[0];
    var settings = useApp().settings;
    var currentMember = useAuth().currentMember;
    var memberShipCardDetails = useMemberShipCardDetails(currentMember === null || currentMember === void 0 ? void 0 : currentMember.id);
    var enabledCW = Boolean(Number(settings['tracking.cw.enabled']));
    useEffect(function () {
        tracking.view(currentMember, { ignore: ignore, utmSource: utmSource || '' }, memberShipCardDetails);
    }, [enabledCW, currentMember, tracking, utmSource, ignore, memberShipCardDetails]);
    return _jsx(_Fragment, {});
}, equals);
var Impression = React.memo(function (_a) {
    var resources = _a.resources, collection = _a.collection, ignore = _a.ignore;
    var tracking = useTracking();
    var utmSource = useQueryParam('utm_source', StringParam)[0];
    useEffect(function () {
        tracking.impress(resources, { collection: collection, ignore: ignore, utmSource: utmSource || '' });
    }, [collection, resources, tracking, utmSource, ignore]);
    return _jsx(_Fragment, {});
}, equals);
var Detail = React.memo(function (_a) {
    var resource = _a.resource, ignore = _a.ignore;
    var pageFrom = useQueryParam('pageFrom', StringParam)[0];
    var utmSource = useQueryParam('utm_source', StringParam)[0];
    var tracking = useTracking();
    useEffect(function () {
        tracking.detail(resource, { collection: pageFrom || undefined, ignore: ignore, utmSource: utmSource || '' });
    }, [pageFrom, utmSource, resource, tracking, ignore]);
    return _jsx(_Fragment, {});
}, equals);
var ViewCart = React.memo(function (_a) {
    var resources = _a.resources, onViewCart = _a.onViewCart, ignore = _a.ignore;
    var tracking = useTracking();
    var utmSource = useQueryParam('utm_source', StringParam)[0];
    useEffect(function () {
        tracking.viewCart(resources, { ignore: ignore, utmSource: utmSource || '' });
        onViewCart === null || onViewCart === void 0 ? void 0 : onViewCart();
    }, [onViewCart, resources, tracking, utmSource, ignore]);
    return _jsx(_Fragment, {});
}, equals);
var Purchase = React.memo(function (_a) {
    var orderId = _a.orderId, products = _a.products, discounts = _a.discounts, ignore = _a.ignore, onTracked = _a.onTracked;
    var tracking = useTracking();
    var utmSource = useQueryParam('utm_source', StringParam)[0];
    useEffect(function () {
        tracking.purchase(orderId, products, discounts, { ignore: ignore, utmSource: utmSource || '' });
        onTracked === null || onTracked === void 0 ? void 0 : onTracked();
    }, [discounts, utmSource, orderId, products, tracking, ignore]);
    return _jsx(_Fragment, {});
}, equals);
var Tracking = {
    View: View,
    Detail: Detail,
    Impression: Impression,
    ViewCart: ViewCart,
    Purchase: Purchase,
};
export default Tracking;
