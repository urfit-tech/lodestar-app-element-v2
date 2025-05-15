var l = (i, f) => () => (f || i((f = { exports: {} }).exports, f), f.exports);
import n from "./index.es280.js";
var d = l((r, o) => {
  var e;
  typeof self < "u" ? e = self : typeof window < "u" ? e = window : typeof global < "u" ? e = global : typeof o < "u" ? e = o : e = Function("return this")();
  n(e);
});
export default d();
//# sourceMappingURL=index.es190.js.map
