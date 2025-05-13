import r from "./index.es96.js";
import i from "./index.es85.js";
function l(o, t, e) {
  r.call(this, o ?? "canceled", r.ERR_CANCELED, t, e), this.name = "CanceledError";
}
i.inherits(l, r, {
  __CANCEL__: !0
});
export {
  l as default
};
//# sourceMappingURL=index.es91.js.map
