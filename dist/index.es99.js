import a from "./index.es97.js";
import f from "./index.es100.js";
var h = /* @__PURE__ */ a(function(o, i, e) {
  var t = {}, r;
  i = i || {}, e = e || {};
  for (r in i)
    f(r, i) && (t[r] = f(r, e) ? o(r, i[r], e[r]) : i[r]);
  for (r in e)
    f(r, e) && !f(r, t) && (t[r] = e[r]);
  return t;
});
export {
  h as default
};
//# sourceMappingURL=index.es99.js.map
