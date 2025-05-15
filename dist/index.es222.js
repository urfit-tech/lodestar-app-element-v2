import { __rest as J, __assign as A } from "./index.es65.js";
import { invariant as K } from "./index.es116.js";
import { maybe as U } from "./index.es142.js";
import "./index.es117.js";
import { serializeFetchParameter as O } from "./index.es218.js";
import { selectURI as W } from "./index.es221.js";
import { readMultipartBody as X, parseAndCheckHttpResponse as Y, handleError as Z } from "./index.es215.js";
import { checkFetcher as $ } from "./index.es220.js";
import { selectHttpOptionsAndBodyInternal as ee, defaultPrinter as re, fallbackHttpConfig as te } from "./index.es219.js";
import { rewriteURIForGET as ie } from "./index.es223.js";
import { ApolloLink as ne } from "./index.es66.js";
import { hasDirectives as D } from "./index.es118.js";
import { removeClientSetsFromDocument as oe } from "./index.es130.js";
import { fromError as h } from "./index.es224.js";
import { filterOperationVariables as ae } from "./index.es225.js";
import { getMainDefinition as se } from "./index.es36.js";
import { Observable as fe } from "./index.es67.js";
import "./index.es68.js";
var I = U(function() {
  return fetch;
}), Te = function(t) {
  t === void 0 && (t = {});
  var v = t.uri, G = v === void 0 ? "/graphql" : v, b = t.fetch, y = t.print, V = y === void 0 ? re : y, R = t.includeExtensions, S = t.preserveHeaderCase, L = t.useGETForQueries, g = t.includeUnusedVariables, M = g === void 0 ? !1 : g, f = J(t, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && $(b || I);
  var P = {
    http: { includeExtensions: R, preserveHeaderCase: S },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new ne(function(e) {
    var l = W(e, G), n = e.getContext(), u = {};
    if (n.clientAwareness) {
      var E = n.clientAwareness, q = E.name, x = E.version;
      q && (u["apollographql-client-name"] = q), x && (u["apollographql-client-version"] = x);
    }
    var j = A(A({}, u), n.headers), B = {
      http: n.http,
      options: n.fetchOptions,
      credentials: n.credentials,
      headers: j
    };
    if (D(["client"], e.query)) {
      var C = oe(e.query);
      if (!C)
        return h(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      e.query = C;
    }
    var _ = ee(e, V, te, P, B), i = _.options, s = _.body;
    s.variables && !M && (s.variables = ae(s.variables, e.query));
    var o;
    !i.signal && typeof AbortController < "u" && (o = new AbortController(), i.signal = o.signal);
    var Q = function(r) {
      return r.kind === "OperationDefinition" && r.operation === "mutation";
    }, k = function(r) {
      return r.kind === "OperationDefinition" && r.operation === "subscription";
    }, c = k(se(e.query)), d = D(["defer"], e.query);
    if (L && !e.query.definitions.some(Q) && (i.method = "GET"), d || c) {
      i.headers = i.headers || {};
      var p = "multipart/mixed;";
      c && d && globalThis.__DEV__ !== !1 && K.warn(38), c ? p += "boundary=graphql;subscriptionSpec=1.0,application/json" : d && (p += "deferSpec=20220824,application/json"), i.headers.accept = p;
    }
    if (i.method === "GET") {
      var F = ie(l, s), z = F.newURI, w = F.parseError;
      if (w)
        return h(w);
      l = z;
    } else
      try {
        i.body = O(s, "Payload");
      } catch (r) {
        return h(r);
      }
    return new fe(function(r) {
      var N = b || U(function() {
        return fetch;
      }) || I, T = r.next.bind(r);
      return N(l, i).then(function(a) {
        var m;
        e.setContext({ response: a });
        var H = (m = a.headers) === null || m === void 0 ? void 0 : m.get("content-type");
        return H !== null && /^multipart\/mixed/i.test(H) ? X(a, T) : Y(e)(a).then(T);
      }).then(function() {
        o = void 0, r.complete();
      }).catch(function(a) {
        o = void 0, Z(a, r);
      }), function() {
        o && o.abort();
      };
    });
  });
};
export {
  Te as createHttpLink
};
//# sourceMappingURL=index.es222.js.map
