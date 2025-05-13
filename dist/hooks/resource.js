import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';
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
export const getResourceCollection = async (apolloClient, urns, withProductType) => {
    const { data } = await apolloClient.query({
        query: GET_RESOURCE_COLLECTION,
        variables: { urns },
    });
    const resourceCollection = composeResourceCollection(urns, data, withProductType);
    return resourceCollection;
};
export const useResourceCollection = (urns, withProducts = false) => {
    const { data, loading } = useQuery(GET_RESOURCE_COLLECTION, {
        variables: { urns },
    });
    const resourceCollection = useMemo(() => composeResourceCollection(urns, data, withProducts), [data, urns, withProducts]);
    return {
        loading,
        resourceCollection,
    };
};
const GET_RESOURCE_COLLECTION = gql `
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
