import { __require as b } from "./index.es197.js";
import { __require as q } from "./index.es198.js";
import { __require as _ } from "./index.es199.js";
import w from "./index.es77.js";
import { __require as K } from "./index.es200.js";
import { __require as j } from "./index.es201.js";
var o, l;
function H() {
  if (l) return o;
  l = 1;
  var m = b().Buffer, u = q(), v = _(), g = w, d = K(), t = j();
  function h(e, r) {
    return m.from(e, r).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function y(e, r, a) {
    a = a || "utf8";
    var s = h(d(e), "binary"), n = h(d(r), a);
    return t.format("%s.%s", s, n);
  }
  function c(e) {
    var r = e.header, a = e.payload, s = e.secret || e.privateKey, n = e.encoding, p = v(r.alg), f = y(r, a, n), S = p.sign(f, s);
    return t.format("%s.%s", f, S);
  }
  function i(e) {
    var r = e.secret || e.privateKey || e.key, a = new u(r);
    this.readable = !0, this.header = e.header, this.encoding = e.encoding, this.secret = this.privateKey = this.key = a, this.payload = new u(e.payload), this.secret.once("close", function() {
      !this.payload.writable && this.readable && this.sign();
    }.bind(this)), this.payload.once("close", function() {
      !this.secret.writable && this.readable && this.sign();
    }.bind(this));
  }
  return t.inherits(i, g), i.prototype.sign = function() {
    try {
      var r = c({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding
      });
      return this.emit("done", r), this.emit("data", r), this.emit("end"), this.readable = !1, r;
    } catch (a) {
      this.readable = !1, this.emit("error", a), this.emit("close");
    }
  }, i.sign = c, o = i, o;
}
export {
  H as __require
};
//# sourceMappingURL=index.es151.js.map
