import n from "./index.es124.js";
import l from "./index.es71.js";
import h from "./index.es232.js";
import c from "./index.es233.js";
import w from "./index.es120.js";
import C from "./index.es74.js";
import b from "./index.es85.js";
import S from "./index.es117.js";
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
//# sourceMappingURL=index.es201.js.map
