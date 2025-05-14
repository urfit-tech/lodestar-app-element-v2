import a from "./index.es113.js";
import p from "./index.es114.js";
import m from "./index.es115.js";
import i from "./index.es116.js";
import f from "./index.es117.js";
import l from "./index.es118.js";
import c from "./index.es119.js";
import d from "./index.es120.js";
import u from "./index.es121.js";
import { VERSION as x } from "./index.es122.js";
import C from "./index.es123.js";
import A from "./index.es124.js";
import E from "./index.es125.js";
import O from "./index.es126.js";
import S from "./index.es127.js";
import H from "./index.es128.js";
import T from "./index.es129.js";
function n(o) {
  const t = new m(o), e = p(m.prototype.request, t);
  return a.extend(e, m.prototype, t, { allOwnKeys: !0 }), a.extend(e, t, null, { allOwnKeys: !0 }), e.create = function(s) {
    return n(i(o, s));
  }, e;
}
const r = n(f);
r.Axios = m;
r.CanceledError = c;
r.CancelToken = d;
r.isCancel = u;
r.VERSION = x;
r.toFormData = C;
r.AxiosError = A;
r.Cancel = r.CanceledError;
r.all = function(t) {
  return Promise.all(t);
};
r.spread = E;
r.isAxiosError = O;
r.mergeConfig = i;
r.AxiosHeaders = S;
r.formToJSON = (o) => l(a.isHTMLForm(o) ? new FormData(o) : o);
r.getAdapter = H.getAdapter;
r.HttpStatusCode = T;
r.default = r;
export {
  r as default
};
//# sourceMappingURL=index.es24.js.map
