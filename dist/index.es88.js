import i from "./index.es85.js";
import h from "./index.es99.js";
const c = (s) => s instanceof h ? { ...s } : s;
function C(s, a) {
  a = a || {};
  const u = {};
  function d(t, e, r, o) {
    return i.isPlainObject(t) && i.isPlainObject(e) ? i.merge.call({ caseless: o }, t, e) : i.isPlainObject(e) ? i.merge({}, e) : i.isArray(e) ? e.slice() : e;
  }
  function l(t, e, r, o) {
    if (i.isUndefined(e)) {
      if (!i.isUndefined(t))
        return d(void 0, t, r, o);
    } else return d(t, e, r, o);
  }
  function f(t, e) {
    if (!i.isUndefined(e))
      return d(void 0, e);
  }
  function n(t, e) {
    if (i.isUndefined(e)) {
      if (!i.isUndefined(t))
        return d(void 0, t);
    } else return d(void 0, e);
  }
  function m(t, e, r) {
    if (r in a)
      return d(t, e);
    if (r in s)
      return d(void 0, t);
  }
  const g = {
    url: f,
    method: f,
    data: f,
    baseURL: n,
    transformRequest: n,
    transformResponse: n,
    paramsSerializer: n,
    timeout: n,
    timeoutMessage: n,
    withCredentials: n,
    withXSRFToken: n,
    adapter: n,
    responseType: n,
    xsrfCookieName: n,
    xsrfHeaderName: n,
    onUploadProgress: n,
    onDownloadProgress: n,
    decompress: n,
    maxContentLength: n,
    maxBodyLength: n,
    beforeRedirect: n,
    transport: n,
    httpAgent: n,
    httpsAgent: n,
    cancelToken: n,
    socketPath: n,
    responseEncoding: n,
    validateStatus: m,
    headers: (t, e, r) => l(c(t), c(e), r, !0)
  };
  return i.forEach(Object.keys(Object.assign({}, s, a)), function(e) {
    const r = g[e] || l, o = r(s[e], a[e], e);
    i.isUndefined(o) && r !== m || (u[e] = o);
  }), u;
}
export {
  C as default
};
//# sourceMappingURL=index.es88.js.map
