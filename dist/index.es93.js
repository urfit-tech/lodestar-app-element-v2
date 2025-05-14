import "./index.es57.js";
import { canUseSymbol as i } from "./index.es75.js";
import { Observable as t } from "./index.es56.js";
function p(e) {
  function o(r) {
    Object.defineProperty(e, r, { value: t });
  }
  return i && Symbol.species && o(Symbol.species), o("@@species"), e;
}
export {
  p as fixObservableSubclass
};
//# sourceMappingURL=index.es93.js.map
