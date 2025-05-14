import { makeUniqueId as f } from "./index.es209.js";
function s(r, t) {
  var i = f("stringifyForDisplay");
  return JSON.stringify(r, function(o, n) {
    return n === void 0 ? i : n;
  }, t).split(JSON.stringify(i)).join("<undefined>");
}
export {
  s as stringifyForDisplay
};
//# sourceMappingURL=index.es210.js.map
