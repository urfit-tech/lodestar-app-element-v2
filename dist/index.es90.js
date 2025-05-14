import r from "./index.es95.js";
import i from "./index.es84.js";
function l(o, t, e) {
  r.call(this, o ?? "canceled", r.ERR_CANCELED, t, e), this.name = "CanceledError";
}
i.inherits(l, r, {
  __CANCEL__: !0
});
export {
  l as default
};
//# sourceMappingURL=index.es90.js.map
