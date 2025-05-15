import a from "./index.es124.js";
import s from "./index.es129.js";
import m from "./index.es118.js";
const h = (e, t) => {
  const { length: l } = e = e ? e.filter(Boolean) : [];
  if (t || l) {
    let u = new AbortController(), f;
    const n = function(r) {
      if (!f) {
        f = !0, i();
        const o = r instanceof Error ? r : this.reason;
        u.abort(o instanceof s ? o : new a(o instanceof Error ? o.message : o));
      }
    };
    let c = t && setTimeout(() => {
      c = null, n(new s(`timeout ${t} of ms exceeded`, s.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (c && clearTimeout(c), c = null, e.forEach((r) => {
        r.unsubscribe ? r.unsubscribe(n) : r.removeEventListener("abort", n);
      }), e = null);
    };
    e.forEach((r) => r.addEventListener("abort", n));
    const { signal: b } = u;
    return b.unsubscribe = () => m.asap(i), b;
  }
};
export {
  h as default
};
//# sourceMappingURL=index.es297.js.map
