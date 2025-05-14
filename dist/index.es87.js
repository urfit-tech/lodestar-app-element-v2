import "./index.es59.js";
import { canUseSymbol as i } from "./index.es69.js";
import { Observable as t } from "./index.es58.js";
function p(e) {
  function o(r) {
    Object.defineProperty(e, r, { value: t });
  }
  return i && Symbol.species && o(Symbol.species), o("@@species"), e;
}
export {
  p as fixObservableSubclass
};
//# sourceMappingURL=index.es87.js.map
