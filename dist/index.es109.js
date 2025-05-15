import "./index.es108.js";
import { canUseSymbol as i } from "./index.es179.js";
import { Observable as t } from "./index.es107.js";
function p(e) {
  function o(r) {
    Object.defineProperty(e, r, { value: t });
  }
  return i && Symbol.species && o(Symbol.species), o("@@species"), e;
}
export {
  p as fixObservableSubclass
};
//# sourceMappingURL=index.es109.js.map
