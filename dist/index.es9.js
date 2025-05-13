import { ApolloClient as f, InMemoryCache as u, from as m, split as t, HttpLink as d } from "@apollo/client";
import { onError as h } from "./index.es27.js";
import { GraphQLWsLink as P } from "./index.es28.js";
import { OperationTypeNode as _ } from "graphql";
import { createClient as L } from "graphql-ws";
import { getMainDefinition as a } from "./index.es29.js";
import l from "./index.es30.js";
const N = (i) => h(({ graphQLErrors: r, networkError: o }) => {
  r && typeof window < "u" && (r.forEach(({ message: e, locations: c, path: p, extensions: n }) => {
    console.error(`[GraphQL error]: Message: ${e}, Location: ${c}, Path: ${p}`, n), n && n.code === "invalid-jwt" && (i?.["invalid-jwt"]?.(), setTimeout(() => window.location.assign("/"), 3e3));
  }), o && console.log(`[Network error]: ${JSON.stringify(o)}`));
}), s = (i, r) => new d({
  uri: i,
  headers: r.authToken ? {
    authorization: `Bearer ${r.authToken}`
  } : {
    "x-hasura-org-id": r.appId,
    "x-hasura-app-id": r.appId,
    "x-hasura-user-id": l(),
    "x-hasura-role": "anonymous"
  }
}), w = (i, r) => t(
  ({ query: o }) => {
    const e = a(o);
    return e.kind === "OperationDefinition" && e.operation === "subscription";
  },
  new P(
    L({
      url: String(process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT),
      connectionParams: {
        headers: r ? {
          authorization: `Bearer ${r}`
        } : {
          "x-hasura-org-id": i,
          "x-hasura-app-id": i,
          "x-hasura-user-id": l(),
          "x-hasura-role": "anonymous"
        }
      }
    })
  ),
  t(
    ({ query: o }) => {
      const e = a(o);
      return e.kind === "OperationDefinition" && e.operation === _.QUERY || !1;
    },
    t(
      ({ query: o }) => {
        const e = a(o);
        return e.kind === "OperationDefinition" && (e.name?.value.startsWith("Ph") || e.name?.value.startsWith("PH_")) || !1;
      },
      s(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken: r, appId: i }),
      s(process.env.NEXT_PUBLIC_GRAPHQL_RH_ENDPOINT, { authToken: r, appId: i })
    ),
    s(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken: r, appId: i })
  )
), D = (i, r) => new f({
  link: m([N(r), w(i.appId, i.authToken)]),
  cache: new u()
});
export {
  D as createApolloClient
};
//# sourceMappingURL=index.es9.js.map
