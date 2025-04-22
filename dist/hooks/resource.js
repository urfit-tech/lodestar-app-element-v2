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
import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';
var composeResourceCollection = function (urns, data, withProducts) {
    if (withProducts === void 0) { withProducts = false; }
    var resources = (data === null || data === void 0 ? void 0 : data.resource.filter(function (v) { return v.id !== null; }).map(function (v) {
        var resourceUrn = v.id;
        var _a = resourceUrn.split(':'), resourceType = _a[1], resourceId = _a[2];
        return {
            urn: resourceUrn,
            id: resourceId,
            type: resourceType,
            title: v.name || '',
            owners: v.owners || [],
            price: v.price || 0,
            categories: v.categories || [],
            tags: v.tags || [],
            variants: v.variants || [],
            sku: v.sku || undefined,
            metaId: v.meta_id || undefined,
        };
    })) || [];
    var filteredResources = urns.map(function (urn) {
        var resourceData = resources.find(function (v) { return v.urn === urn; });
        return resourceData !== null && resourceData !== void 0 ? resourceData : null;
    });
    if (withProducts) {
        var resourceWithProducts = filteredResources.map(function (resource) {
            return resource
                ? __assign(__assign({}, resource), { products: resources.filter(function (r) { return r.metaId === resource.urn && r.urn !== resource.urn; }) }) : null;
        });
        return resourceWithProducts;
    }
    return filteredResources;
};
export var getResourceCollection = function (apolloClient, urns, withProductType) { return __awaiter(void 0, void 0, void 0, function () {
    var data, resourceCollection;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, apolloClient.query({
                    query: GET_RESOURCE_COLLECTION,
                    variables: { urns: urns },
                })];
            case 1:
                data = (_a.sent()).data;
                resourceCollection = composeResourceCollection(urns, data, withProductType);
                return [2 /*return*/, resourceCollection];
        }
    });
}); };
export var useResourceCollection = function (urns, withProducts) {
    if (withProducts === void 0) { withProducts = false; }
    var _a = useQuery(GET_RESOURCE_COLLECTION, {
        variables: { urns: urns },
    }), data = _a.data, loading = _a.loading;
    var resourceCollection = useMemo(function () { return composeResourceCollection(urns, data, withProducts); }, [data, urns, withProducts]);
    return {
        loading: loading,
        resourceCollection: resourceCollection,
    };
};
var GET_RESOURCE_COLLECTION = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GET_RESOURCE_COLLECTION($urns: [String!]!) {\n    resource(where: { _or: [{ id: { _in: $urns } }, { meta_id: { _in: $urns } }] }) {\n      id\n      name\n      price\n      categories\n      tags\n      variants\n      owners\n      sku\n      meta_id\n    }\n  }\n"], ["\n  query GET_RESOURCE_COLLECTION($urns: [String!]!) {\n    resource(where: { _or: [{ id: { _in: $urns } }, { meta_id: { _in: $urns } }] }) {\n      id\n      name\n      price\n      categories\n      tags\n      variants\n      owners\n      sku\n      meta_id\n    }\n  }\n"])));
var templateObject_1;
