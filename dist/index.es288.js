import i from "./index.es118.js";
import m from "./index.es122.js";
import s from "./index.es132.js";
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
//# sourceMappingURL=index.es288.js.map
