import i from "./index.es71.js";
import m from "./index.es75.js";
import s from "./index.es85.js";
function h(f, t) {
  const o = this || m, r = t || o, n = s.from(r.headers);
  let a = r.data;
  return i.forEach(f, function(e) {
    a = e.call(o, a, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), a;
}
export {
  h as default
};
//# sourceMappingURL=index.es193.js.map
