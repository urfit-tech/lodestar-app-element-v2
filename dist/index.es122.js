import t from "./index.es118.js";
import p from "./index.es129.js";
import u from "./index.es213.js";
import S from "./index.es128.js";
import h from "./index.es214.js";
import l from "./index.es215.js";
import O from "./index.es123.js";
function y(i, r, e) {
  if (t.isString(i))
    try {
      return (r || JSON.parse)(i), t.trim(i);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (e || JSON.stringify)(i);
}
const a = {
  transitional: u,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, e) {
    const n = e.getContentType() || "", s = n.indexOf("application/json") > -1, f = t.isObject(r);
    if (f && t.isHTMLForm(r) && (r = new FormData(r)), t.isFormData(r))
      return s ? JSON.stringify(O(r)) : r;
    if (t.isArrayBuffer(r) || t.isBuffer(r) || t.isStream(r) || t.isFile(r) || t.isBlob(r) || t.isReadableStream(r))
      return r;
    if (t.isArrayBufferView(r))
      return r.buffer;
    if (t.isURLSearchParams(r))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let o;
    if (f) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return h(r, this.formSerializer).toString();
      if ((o = t.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return S(
          o ? { "files[]": r } : r,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return f || s ? (e.setContentType("application/json", !1), y(r)) : r;
  }],
  transformResponse: [function(r) {
    const e = this.transitional || a.transitional, n = e && e.forcedJSONParsing, s = this.responseType === "json";
    if (t.isResponse(r) || t.isReadableStream(r))
      return r;
    if (r && t.isString(r) && (n && !this.responseType || s)) {
      const m = !(e && e.silentJSONParsing) && s;
      try {
        return JSON.parse(r);
      } catch (o) {
        if (m)
          throw o.name === "SyntaxError" ? p.from(o, p.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: l.classes.FormData,
    Blob: l.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
t.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  a.headers[i] = {};
});
export {
  a as default
};
//# sourceMappingURL=index.es122.js.map
