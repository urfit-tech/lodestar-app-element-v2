import m from "./index.es135.js";
import c from "./index.es65.js";
import t from "./index.es136.js";
function _(e) {
  return function f(u, n, i) {
    switch (arguments.length) {
      case 0:
        return f;
      case 1:
        return t(u) ? f : c(function(r, o) {
          return e(u, r, o);
        });
      case 2:
        return t(u) && t(n) ? f : t(u) ? c(function(r, o) {
          return e(r, n, o);
        }) : t(n) ? c(function(r, o) {
          return e(u, r, o);
        }) : m(function(r) {
          return e(u, n, r);
        });
      default:
        return t(u) && t(n) && t(i) ? f : t(u) && t(n) ? c(function(r, o) {
          return e(r, o, i);
        }) : t(u) && t(i) ? c(function(r, o) {
          return e(r, n, o);
        }) : t(n) && t(i) ? c(function(r, o) {
          return e(u, r, o);
        }) : t(u) ? m(function(r) {
          return e(r, n, i);
        }) : t(n) ? m(function(r) {
          return e(u, r, i);
        }) : t(i) ? m(function(r) {
          return e(u, n, r);
        }) : e(u, n, i);
    }
  };
}
export {
  _ as default
};
//# sourceMappingURL=index.es67.js.map
