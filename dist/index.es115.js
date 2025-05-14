import d from "./index.es113.js";
import U from "./index.es170.js";
import q from "./index.es171.js";
import R from "./index.es172.js";
import w from "./index.es116.js";
import A from "./index.es173.js";
import m from "./index.es174.js";
import T from "./index.es127.js";
const i = m.validators;
class k {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new q(),
      response: new q()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, e) {
    try {
      return await this._request(t, e);
    } catch (s) {
      if (s instanceof Error) {
        let l = {};
        Error.captureStackTrace ? Error.captureStackTrace(l) : l = new Error();
        const a = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? a && !String(s.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + a) : s.stack = a;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, e) {
    typeof t == "string" ? (e = e || {}, e.url = t) : e = t || {}, e = w(this.defaults, e);
    const { transitional: s, paramsSerializer: l, headers: a } = e;
    s !== void 0 && m.assertOptions(s, {
      silentJSONParsing: i.transitional(i.boolean),
      forcedJSONParsing: i.transitional(i.boolean),
      clarifyTimeoutError: i.transitional(i.boolean)
    }, !1), l != null && (d.isFunction(l) ? e.paramsSerializer = {
      serialize: l
    } : m.assertOptions(l, {
      encode: i.function,
      serialize: i.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), m.assertOptions(e, {
      baseUrl: i.spelling("baseURL"),
      withXsrfToken: i.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let f = a && d.merge(
      a.common,
      a[e.method]
    );
    a && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (r) => {
        delete a[r];
      }
    ), e.headers = T.concat(f, a);
    const h = [];
    let y = !0;
    this.interceptors.request.forEach(function(n) {
      typeof n.runWhen == "function" && n.runWhen(e) === !1 || (y = y && n.synchronous, h.unshift(n.fulfilled, n.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(n) {
      c.push(n.fulfilled, n.rejected);
    });
    let u, o = 0, p;
    if (!y) {
      const r = [R.bind(this), void 0];
      for (r.unshift.apply(r, h), r.push.apply(r, c), p = r.length, u = Promise.resolve(e); o < p; )
        u = u.then(r[o++], r[o++]);
      return u;
    }
    p = h.length;
    let b = e;
    for (o = 0; o < p; ) {
      const r = h[o++], n = h[o++];
      try {
        b = r(b);
      } catch (S) {
        n.call(this, S);
        break;
      }
    }
    try {
      u = R.call(this, b);
    } catch (r) {
      return Promise.reject(r);
    }
    for (o = 0, p = c.length; o < p; )
      u = u.then(c[o++], c[o++]);
    return u;
  }
  getUri(t) {
    t = w(this.defaults, t);
    const e = A(t.baseURL, t.url, t.allowAbsoluteUrls);
    return U(e, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  k.prototype[t] = function(e, s) {
    return this.request(w(s || {}, {
      method: t,
      url: e,
      data: (s || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function e(s) {
    return function(a, f, h) {
      return this.request(w(h || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: f
      }));
    };
  }
  k.prototype[t] = e(), k.prototype[t + "Form"] = e(!0);
});
export {
  k as default
};
//# sourceMappingURL=index.es115.js.map
