import e from "./index.es112.js";
var t = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function u(o) {
  return e(o).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(r, s, a) {
    return s > 0 && s + r.length !== a.length && r.search(t) > -1 && a.charAt(s - 2) !== ":" && (a.charAt(s + r.length) !== "-" || a.charAt(s - 1) === "-") && a.charAt(s - 1).search(/[^\s-]/) < 0 ? r.toLowerCase() : r.substr(1).search(/[A-Z]|\../) > -1 ? r : r.charAt(0).toUpperCase() + r.substr(1);
  });
}
export {
  u as default
};
//# sourceMappingURL=index.es191.js.map
