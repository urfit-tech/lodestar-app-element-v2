import { useMemo as d } from "react";
import { gql as m } from "./index.es18.js";
import { useQuery as p } from "./index.es17.js";
const u = (o, t, s = !1) => {
  const n = t?.resource.filter((e) => e.id !== null).map((e) => {
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
  }) || [], i = o.map((e) => n.find((c) => c.urn === e) ?? null);
  return s ? i.map((r) => r ? {
    ...r,
    products: n.filter((c) => c.metaId === r.urn && c.urn !== r.urn)
  } : null) : i;
}, _ = async (o, t, s) => {
  const { data: n } = await o.query({
    query: a,
    variables: { urns: t }
  });
  return u(t, n, s);
}, E = (o, t = !1) => {
  const { data: s, loading: n } = p(
    a,
    {
      variables: { urns: o }
    }
  ), i = d(
    () => u(o, s, t),
    [s, o, t]
  );
  return {
    loading: n,
    resourceCollection: i
  };
}, a = m`
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
  E as useResourceCollection
};
//# sourceMappingURL=index.es13.js.map
