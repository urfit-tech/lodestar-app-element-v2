import r from "./index.es193.js";
import p from "./index.es79.js";
import o from "./index.es75.js";
import l from "./index.es77.js";
import a from "./index.es85.js";
import m from "./index.es86.js";
function d(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new l(null, e);
}
function q(e) {
  return d(e), e.headers = a.from(e.headers), e.data = r.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), m.getAdapter(e.adapter || o.adapter)(e).then(function(t) {
    return d(e), t.data = r.call(
      e,
      e.transformResponse,
      t
    ), t.headers = a.from(t.headers), t;
  }, function(t) {
    return p(t) || (d(e), t && t.response && (t.response.data = r.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = a.from(t.response.headers))), Promise.reject(t);
  });
}
export {
  q as default
};
//# sourceMappingURL=index.es119.js.map
