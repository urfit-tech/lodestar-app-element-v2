import i from "./index.es316.js";
import m from "./index.es317.js";
import f from "./index.es84.js";
const h = (t, o, a = 3) => {
  let r = 0;
  const c = i(50, 250);
  return m((s) => {
    const n = s.loaded, e = s.lengthComputable ? s.total : void 0, l = n - r, d = c(l), p = n <= e;
    r = n;
    const u = {
      loaded: n,
      total: e,
      progress: e ? n / e : void 0,
      bytes: l,
      rate: d || void 0,
      estimated: d && e && p ? (e - n) / d : void 0,
      event: s,
      lengthComputable: e != null,
      [o ? "download" : "upload"]: !0
    };
    t(u);
  }, a);
}, v = (t, o) => {
  const a = t != null;
  return [(r) => o[0]({
    lengthComputable: a,
    total: t,
    loaded: r
  }), o[1]];
}, C = (t) => (...o) => f.asap(() => t(...o));
export {
  C as asyncDecorator,
  v as progressEventDecorator,
  h as progressEventReducer
};
//# sourceMappingURL=index.es287.js.map
