import { makeUniqueId as f } from "./index.es144.js";
function y(t, i) {
  i === void 0 && (i = 0);
  var n = f("stringifyForDisplay");
  return JSON.stringify(t, function(o, r) {
    return r === void 0 ? n : r;
  }, i).split(JSON.stringify(n)).join("<undefined>");
}
export {
  y as stringifyForDisplay
};
//# sourceMappingURL=index.es145.js.map
