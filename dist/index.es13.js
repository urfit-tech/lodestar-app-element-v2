import { gql as d, useQuery as m } from "@apollo/client";
import { useMemo as p } from "react";
const u = (t, o, s = !1) => {
  const n = o?.resource.filter((e) => e.id !== null).map((e) => {
    const r = e.id, [, c, l] = r.split(":");
    return {
      urn: r,
      id: l,
      type: c,
      title: e.name || "",
      owners: e.owners || [],
      price: e.price || 0,
      categories: e.categories || [],
      tags: e.tags || [],
      variants: e.variants || [],
      sku: e.sku || void 0,
      metaId: e.meta_id || void 0
    };
  }) || [], i = t.map((e) => n.find((c) => c.urn === e) ?? null);
  return s ? i.map((r) => r ? {
    ...r,
    products: n.filter((c) => c.metaId === r.urn && c.urn !== r.urn)
  } : null) : i;
}, _ = async (t, o, s) => {
  const { data: n } = await t.query({
    query: a,
    variables: { urns: o }
  });
  return u(o, n, s);
}, f = (t, o = !1) => {
  const { data: s, loading: n } = m(
    a,
    {
      variables: { urns: t }
    }
  ), i = p(
    () => u(t, s, o),
    [s, t, o]
  );
  return {
    loading: n,
    resourceCollection: i
  };
}, a = d`
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
export {
  _ as getResourceCollection,
  f as useResourceCollection
};
//# sourceMappingURL=index.es13.js.map
