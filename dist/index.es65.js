import o from "./index.es135.js";
import u from "./index.es136.js";
function s(e) {
  return function c(r, n) {
    switch (arguments.length) {
      case 0:
        return c;
      case 1:
        return u(r) ? c : o(function(t) {
          return e(r, t);
        });
      default:
        return u(r) && u(n) ? c : u(r) ? o(function(t) {
          return e(t, n);
        }) : u(n) ? o(function(t) {
          return e(r, t);
        }) : e(r, n);
    }
  };
}
export {
  s as default
};
//# sourceMappingURL=index.es65.js.map
