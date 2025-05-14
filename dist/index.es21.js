import a from "./index.es71.js";
import p from "./index.es72.js";
import m from "./index.es73.js";
import i from "./index.es74.js";
import f from "./index.es75.js";
import l from "./index.es76.js";
import c from "./index.es77.js";
import d from "./index.es78.js";
import u from "./index.es79.js";
import { VERSION as x } from "./index.es80.js";
import C from "./index.es81.js";
import A from "./index.es82.js";
import E from "./index.es83.js";
import O from "./index.es84.js";
import S from "./index.es85.js";
import H from "./index.es86.js";
import T from "./index.es87.js";
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
