import { invariant as c } from "./index.es70.js";
import "./index.es71.js";
import * as l from "./index.es207.js";
import { r as o } from "./index.es207.js";
import { canUseLayoutEffect as v } from "./index.es75.js";
var u = !1, h = "useSyncExternalStore", S = l[h], g = S || function(a, e, f) {
  var r = e();
  // DEVIATION: Using __DEV__
  globalThis.__DEV__ !== !1 && !u && // DEVIATION: Not using Object.is because we know our snapshots will never
  // be exotic primitive values like NaN, which is !== itself.
  r !== e() && (u = !0, globalThis.__DEV__ !== !1 && c.error(59));
  var s = o.useState({
    inst: { value: r, getSnapshot: e }
  }), t = s[0].inst, n = s[1];
  return v ? o.useLayoutEffect(function() {
    Object.assign(t, { value: r, getSnapshot: e }), i(t) && n({ inst: t });
  }, [a, r, e]) : Object.assign(t, { value: r, getSnapshot: e }), o.useEffect(function() {
    return i(t) && n({ inst: t }), a(function() {
      i(t) && n({ inst: t });
    });
  }, [a]), r;
};
function i(a) {
  var e = a.value, f = a.getSnapshot;
  try {
    return e !== f();
  } catch {
    return !0;
  }
}
export {
  g as useSyncExternalStore
};
//# sourceMappingURL=index.es209.js.map
