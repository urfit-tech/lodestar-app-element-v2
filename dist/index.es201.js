import { __assign as n } from "./index.es54.js";
import { print as p } from "./index.es59.js";
var v = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, b = {
  // headers are case insensitive (https://stackoverflow.com/a/5259004)
  accept: "*/*",
  // The content-type header describes the type of the body of the request, and
  // so it typically only is sent with requests that actually have bodies. One
  // could imagine that Apollo Client would remove this header when constructing
  // a GET request (which has no body), but we historically have not done that.
  // This means that browsers will preflight all Apollo Client requests (even
  // GET requests). Apollo Server's CSRF prevention feature (introduced in
  // AS3.7) takes advantage of this fact and does not block requests with this
  // header. If you want to drop this header from GET requests, then you should
  // probably replace it with a `apollo-require-preflight` header, or servers
  // with CSRF prevention enabled might block your GET request. See
  // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
  // for more details.
  "content-type": "application/json"
}, h = {
  method: "POST"
}, m = {
  http: v,
  headers: b,
  options: h
}, H = function(t, s) {
  return s(t);
};
function x(t, s) {
  for (var o = [], a = 2; a < arguments.length; a++)
    o[a - 2] = arguments[a];
  var r = {}, e = {};
  o.forEach(function(i) {
    r = n(n(n({}, r), i.options), { headers: n(n({}, r.headers), i.headers) }), i.credentials && (r.credentials = i.credentials), e = n(n({}, e), i.http);
  }), r.headers && (r.headers = y(r.headers, e.preserveHeaderCase));
  var l = t.operationName, u = t.extensions, d = t.variables, f = t.query, c = { operationName: l, variables: d };
  return e.includeExtensions && (c.extensions = u), e.includeQuery && (c.query = s(f, p)), {
    options: r,
    body: c
  };
}
function y(t, s) {
  if (!s) {
    var o = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(t)).forEach(function(e) {
      o[e.toLowerCase()] = t[e];
    }), o;
  }
  var a = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(t)).forEach(function(e) {
    a[e.toLowerCase()] = {
      originalName: e,
      value: t[e]
    };
  });
  var r = /* @__PURE__ */ Object.create(null);
  return Object.keys(a).forEach(function(e) {
    r[a[e].originalName] = a[e].value;
  }), r;
}
export {
  H as defaultPrinter,
  m as fallbackHttpConfig,
  x as selectHttpOptionsAndBodyInternal
};
//# sourceMappingURL=index.es201.js.map
