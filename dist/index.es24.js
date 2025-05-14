import a from "./index.es123.js";
import p from "./index.es124.js";
import m from "./index.es125.js";
import i from "./index.es126.js";
import f from "./index.es127.js";
import l from "./index.es128.js";
import c from "./index.es129.js";
import d from "./index.es130.js";
import u from "./index.es131.js";
import { VERSION as x } from "./index.es132.js";
import C from "./index.es133.js";
import A from "./index.es134.js";
import E from "./index.es135.js";
import O from "./index.es136.js";
import S from "./index.es137.js";
import H from "./index.es138.js";
import T from "./index.es139.js";
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
