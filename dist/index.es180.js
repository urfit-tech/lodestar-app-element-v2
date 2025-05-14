import b from "./index.es113.js";
import D from "./index.es233.js";
import L from "./index.es175.js";
import r from "./index.es124.js";
import v from "./index.es119.js";
import y from "./index.es234.js";
import O from "./index.es177.js";
import H from "./index.es127.js";
import { progressEventReducer as q } from "./index.es235.js";
import U from "./index.es236.js";
const N = typeof XMLHttpRequest < "u", Q = N && function(n) {
  return new Promise(function(A, s) {
    const t = U(n);
    let c = t.data;
    const E = H.from(t.headers).normalize();
    let { responseType: i, onUploadProgress: T, onDownloadProgress: R } = t, a, h, w, u, p;
    function g() {
      u && u(), p && p(), t.cancelToken && t.cancelToken.unsubscribe(a), t.signal && t.signal.removeEventListener("abort", a);
    }
    let e = new XMLHttpRequest();
    e.open(t.method.toUpperCase(), t.url, !0), e.timeout = t.timeout;
    function x() {
      if (!e)
        return;
      const o = H.from(
        "getAllResponseHeaders" in e && e.getAllResponseHeaders()
      ), d = {
        data: !i || i === "text" || i === "json" ? e.responseText : e.response,
        status: e.status,
        statusText: e.statusText,
        headers: o,
        config: n,
        request: e
      };
      D(function(m) {
        A(m), g();
      }, function(m) {
        s(m), g();
      }, d), e = null;
    }
    "onloadend" in e ? e.onloadend = x : e.onreadystatechange = function() {
      !e || e.readyState !== 4 || e.status === 0 && !(e.responseURL && e.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, e.onabort = function() {
      e && (s(new r("Request aborted", r.ECONNABORTED, n, e)), e = null);
    }, e.onerror = function() {
      s(new r("Network Error", r.ERR_NETWORK, n, e)), e = null;
    }, e.ontimeout = function() {
      let l = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const d = t.transitional || L;
      t.timeoutErrorMessage && (l = t.timeoutErrorMessage), s(new r(
        l,
        d.clarifyTimeoutError ? r.ETIMEDOUT : r.ECONNABORTED,
        n,
        e
      )), e = null;
    }, c === void 0 && E.setContentType(null), "setRequestHeader" in e && b.forEach(E.toJSON(), function(l, d) {
      e.setRequestHeader(d, l);
    }), b.isUndefined(t.withCredentials) || (e.withCredentials = !!t.withCredentials), i && i !== "json" && (e.responseType = t.responseType), R && ([w, p] = q(R, !0), e.addEventListener("progress", w)), T && e.upload && ([h, u] = q(T), e.upload.addEventListener("progress", h), e.upload.addEventListener("loadend", u)), (t.cancelToken || t.signal) && (a = (o) => {
      e && (s(!o || o.type ? new v(null, n, e) : o), e.abort(), e = null);
    }, t.cancelToken && t.cancelToken.subscribe(a), t.signal && (t.signal.aborted ? a() : t.signal.addEventListener("abort", a)));
    const f = y(t.url);
    if (f && O.protocols.indexOf(f) === -1) {
      s(new r("Unsupported protocol " + f + ":", r.ERR_BAD_REQUEST, n));
      return;
    }
    e.send(c || null);
  });
};
export {
  Q as default
};
//# sourceMappingURL=index.es180.js.map
