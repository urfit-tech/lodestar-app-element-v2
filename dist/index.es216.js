import n from "./index.es141.js";
import l from "./index.es85.js";
import h from "./index.es243.js";
import c from "./index.es244.js";
import w from "./index.es137.js";
import C from "./index.es88.js";
import b from "./index.es99.js";
import S from "./index.es134.js";
const v = (s) => {
  const e = C({}, s);
  let { data: p, withXSRFToken: o, xsrfHeaderName: m, xsrfCookieName: f, headers: r, auth: t } = e;
  e.headers = r = b.from(r), e.url = S(w(e.baseURL, e.url, e.allowAbsoluteUrls), s.params, s.paramsSerializer), t && r.set(
    "Authorization",
    "Basic " + btoa((t.username || "") + ":" + (t.password ? unescape(encodeURIComponent(t.password)) : ""))
  );
  let i;
  if (l.isFormData(p)) {
    if (n.hasStandardBrowserEnv || n.hasStandardBrowserWebWorkerEnv)
      r.setContentType(void 0);
    else if ((i = r.getContentType()) !== !1) {
      const [a, ...d] = i ? i.split(";").map((u) => u.trim()).filter(Boolean) : [];
      r.setContentType([a || "multipart/form-data", ...d].join("; "));
    }
  }
  if (n.hasStandardBrowserEnv && (o && l.isFunction(o) && (o = o(e)), o || o !== !1 && h(e.url))) {
    const a = m && f && c.read(f);
    a && r.set(m, a);
  }
  return e;
};
export {
  v as default
};
//# sourceMappingURL=index.es216.js.map
