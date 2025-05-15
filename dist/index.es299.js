import { canUseAsyncIteratorSymbol as e } from "./index.es121.js";
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
//# sourceMappingURL=index.es299.js.map
