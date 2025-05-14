import { print as i } from "graphql";
import { AutoCleanedWeakCache as n } from "./index.es74.js";
import { cacheSizes as o } from "./index.es75.js";
var t, p = Object.assign(function(e) {
  var r = t.get(e);
  return r || (r = i(e), t.set(e, r)), r;
}, {
  reset: function() {
    t = new n(
      o.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
p.reset();
export {
  p as print
};
//# sourceMappingURL=index.es52.js.map
