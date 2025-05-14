import { VERSION as w } from "./index.es122.js";
import s from "./index.es124.js";
const l = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, t) => {
  l[n] = function(o) {
    return typeof o === n || "a" + (t < 1 ? "n " : " ") + n;
  };
});
const f = {};
l.transitional = function(t, i, o) {
  function a(r, e) {
    return "[Axios v" + w + "] Transitional option '" + r + "'" + e + (o ? ". " + o : "");
  }
  return (r, e, u) => {
    if (t === !1)
      throw new s(
        a(e, " has been removed" + (i ? " in " + i : "")),
        s.ERR_DEPRECATED
      );
    return i && !f[e] && (f[e] = !0, console.warn(
      a(
        e,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), t ? t(r, e, u) : !0;
  };
};
l.spelling = function(t) {
  return (i, o) => (console.warn(`${o} is likely a misspelling of ${t}`), !0);
};
function b(n, t, i) {
  if (typeof n != "object")
    throw new s("options must be an object", s.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let a = o.length;
  for (; a-- > 0; ) {
    const r = o[a], e = t[r];
    if (e) {
      const u = n[r], c = u === void 0 || e(u, r, n);
      if (c !== !0)
        throw new s("option " + r + " must be " + c, s.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new s("Unknown option " + r, s.ERR_BAD_OPTION);
  }
}
const m = {
  assertOptions: b,
  validators: l
};
export {
  m as default
};
//# sourceMappingURL=index.es174.js.map
