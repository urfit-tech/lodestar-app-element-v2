import { __require as n } from "./index.es204.js";
import h from "./index.es88.js";
import { __require as a } from "./index.es208.js";
var f, s;
function c() {
  if (s) return f;
  s = 1;
  var t = n().Buffer, u = h, o = a();
  function i(e) {
    if (this.buffer = null, this.writable = !0, this.readable = !0, !e)
      return this.buffer = t.alloc(0), this;
    if (typeof e.pipe == "function")
      return this.buffer = t.alloc(0), e.pipe(this), this;
    if (e.length || typeof e == "object")
      return this.buffer = e, this.writable = !1, process.nextTick(function() {
        this.emit("end", e), this.readable = !1, this.emit("close");
      }.bind(this)), this;
    throw new TypeError("Unexpected data type (" + typeof e + ")");
  }
  return o.inherits(i, u), i.prototype.write = function(r) {
    this.buffer = t.concat([this.buffer, t.from(r)]), this.emit("data", r);
  }, i.prototype.end = function(r) {
    r && this.write(r), this.emit("end", r), this.emit("close"), this.writable = !1, this.readable = !1;
  }, f = i, f;
}
export {
  c as __require
};
//# sourceMappingURL=index.es205.js.map
