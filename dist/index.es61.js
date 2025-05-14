import { print as i } from "graphql";
import { registerGlobalCache as n } from "./index.es75.js";
import { AutoCleanedWeakCache as o } from "./index.es76.js";
import { cacheSizes as a } from "./index.es71.js";
var r, p = Object.assign(function(t) {
  var e = r.get(t);
  return e || (e = i(t), r.set(t, e)), e;
}, {
  reset: function() {
    r = new o(
      a.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
p.reset();
globalThis.__DEV__ !== !1 && n("print", function() {
  return r ? r.size : 0;
});
export {
  p as print
};
//# sourceMappingURL=index.es61.js.map
