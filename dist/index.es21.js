import a from "./index.es99.js";
import p from "./index.es100.js";
import m from "./index.es101.js";
import i from "./index.es102.js";
import f from "./index.es103.js";
import l from "./index.es104.js";
import c from "./index.es105.js";
import d from "./index.es106.js";
import u from "./index.es107.js";
import { VERSION as x } from "./index.es108.js";
import C from "./index.es109.js";
import A from "./index.es110.js";
import E from "./index.es111.js";
import O from "./index.es112.js";
import S from "./index.es113.js";
import H from "./index.es114.js";
import T from "./index.es115.js";
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
//# sourceMappingURL=index.es21.js.map
