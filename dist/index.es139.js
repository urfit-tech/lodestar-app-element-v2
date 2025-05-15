import "./index.es68.js";
import { canUseSymbol as i } from "./index.es121.js";
import { Observable as t } from "./index.es67.js";
function p(e) {
  function o(r) {
    Object.defineProperty(e, r, { value: t });
  }
  return i && Symbol.species && o(Symbol.species), o("@@species"), e;
}
export {
  p as fixObservableSubclass
};
//# sourceMappingURL=index.es139.js.map
