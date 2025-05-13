import a from "./index.es85.js";
import p from "./index.es86.js";
import m from "./index.es87.js";
import i from "./index.es88.js";
import f from "./index.es89.js";
import l from "./index.es90.js";
import c from "./index.es91.js";
import d from "./index.es92.js";
import u from "./index.es93.js";
import { VERSION as x } from "./index.es94.js";
import C from "./index.es95.js";
import A from "./index.es96.js";
import E from "./index.es97.js";
import O from "./index.es98.js";
import S from "./index.es99.js";
import H from "./index.es100.js";
import T from "./index.es101.js";
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
