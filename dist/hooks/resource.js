"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResourceCollection = exports.getResourceCollection = void 0;
const client_1 = require("@apollo/client");
const react_1 = require("react");
const composeResourceCollection = (urns, data, withProducts = false) => {
    const resources = (data === null || data === void 0 ? void 0 : data.resource.filter(v => v.id !== null).map(v => {
        const resourceUrn = v.id;
        const [, resourceType, resourceId] = resourceUrn.split(':');
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
    const filteredResources = urns.map(urn => {
        const resourceData = resources.find(v => v.urn === urn);
        return resourceData !== null && resourceData !== void 0 ? resourceData : null;
    });
    if (withProducts) {
        const resourceWithProducts = filteredResources.map(resource => {
            return resource
                ? {
                    ...resource,
                    products: resources.filter(r => r.metaId === resource.urn && r.urn !== resource.urn),
                }
                : null;
        });
        return resourceWithProducts;
    }
    return filteredResources;
};
const getResourceCollection = async (apolloClient, urns, withProductType) => {
    const { data } = await apolloClient.query({
        query: GET_RESOURCE_COLLECTION,
        variables: { urns },
    });
    const resourceCollection = composeResourceCollection(urns, data, withProductType);
    return resourceCollection;
};
exports.getResourceCollection = getResourceCollection;
const useResourceCollection = (urns, withProducts = false) => {
    const { data, loading } = (0, client_1.useQuery)(GET_RESOURCE_COLLECTION, {
        variables: { urns },
    });
    const resourceCollection = (0, react_1.useMemo)(() => composeResourceCollection(urns, data, withProducts), [data, urns, withProducts]);
    return {
        loading,
        resourceCollection,
    };
};
exports.useResourceCollection = useResourceCollection;
const GET_RESOURCE_COLLECTION = (0, client_1.gql) `
  query GET_RESOURCE_COLLECTION($urns: [String!]!) {
    resource(where: { _or: [{ id: { _in: $urns } }, { meta_id: { _in: $urns } }] }) {
      id
      name
      price
      categories
      tags
      variants
      owners
      sku
      meta_id
    }
  }
`;
