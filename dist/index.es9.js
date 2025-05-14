import { onError as c } from "./index.es30.js";
import { GraphQLWsLink as f } from "./index.es31.js";
import { OperationTypeNode as u } from "graphql";
import { createClient as d } from "graphql-ws";
import { ApolloClient as h } from "./index.es32.js";
import { InMemoryCache as P } from "./index.es33.js";
import { from as _ } from "./index.es34.js";
import { split as t } from "./index.es35.js";
import { getMainDefinition as a } from "./index.es36.js";
import p from "./index.es37.js";
import { HttpLink as L } from "./index.es38.js";
const N = (o) => c(({ graphQLErrors: r, networkError: e }) => {
  r && typeof window < "u" && (r.forEach(({ message: i, locations: m, path: l, extensions: n }) => {
    console.error(`[GraphQL error]: Message: ${i}, Location: ${m}, Path: ${l}`, n), n && n.code === "invalid-jwt" && (o?.["invalid-jwt"]?.(), setTimeout(() => window.location.assign("/"), 3e3));
  }), e && console.log(`[Network error]: ${JSON.stringify(e)}`));
}), s = (o, r) => new L({
  uri: o,
  headers: r.authToken ? {
    authorization: `Bearer ${r.authToken}`
  } : {
    "x-hasura-org-id": r.appId,
    "x-hasura-app-id": r.appId,
    "x-hasura-user-id": p(),
    "x-hasura-role": "anonymous"
  }
}), w = (o, r) => t(
  ({ query: e }) => {
    const i = a(e);
    return i.kind === "OperationDefinition" && i.operation === "subscription";
  },
  new f(
    d({
      url: String(process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT),
      connectionParams: {
        headers: r ? {
          authorization: `Bearer ${r}`
        } : {
          "x-hasura-org-id": o,
          "x-hasura-app-id": o,
          "x-hasura-user-id": p(),
          "x-hasura-role": "anonymous"
        }
      }
    })
  ),
  t(
    ({ query: e }) => {
      const i = a(e);
      return i.kind === "OperationDefinition" && i.operation === u.QUERY || !1;
    },
    t(
      ({ query: e }) => {
        const i = a(e);
        return i.kind === "OperationDefinition" && (i.name?.value.startsWith("Ph") || i.name?.value.startsWith("PH_")) || !1;
      },
      s(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken: r, appId: o }),
      s(process.env.NEXT_PUBLIC_GRAPHQL_RH_ENDPOINT, { authToken: r, appId: o })
    ),
    s(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken: r, appId: o })
  )
), y = (o, r) => new h({
  link: _([N(r), w(o.appId, o.authToken)]),
  cache: new P()
});
export {
  y as createApolloClient
};
//# sourceMappingURL=index.es9.js.map
