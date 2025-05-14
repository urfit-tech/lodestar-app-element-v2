import { canUseAsyncIteratorSymbol as e } from "./index.es69.js";
function o(t) {
  var r = {
    next: function() {
      return t.read();
    }
  };
  return e && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
export {
  o as default
};
//# sourceMappingURL=index.es221.js.map
