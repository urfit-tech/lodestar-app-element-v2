import { __require as W } from "./index.es226.js";
import { __require as I } from "./index.es227.js";
import { __require as w } from "./index.es228.js";
import A from "./index.es83.js";
import { __require as F } from "./index.es229.js";
import { __require as k } from "./index.es230.js";
var n, d;
function M() {
  if (d) return n;
  d = 1;
  var u = W().Buffer, s = I(), y = w(), v = A, f = F(), b = k(), p = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function _(r) {
    return Object.prototype.toString.call(r) === "[object Object]";
  }
  function q(r) {
    if (_(r))
      return r;
    try {
      return JSON.parse(r);
    } catch {
      return;
    }
  }
  function o(r) {
    var e = r.split(".", 1)[0];
    return q(u.from(e, "base64").toString("binary"));
  }
  function S(r) {
    return r.split(".", 2).join(".");
  }
  function c(r) {
    return r.split(".")[2];
  }
  function J(r, e) {
    e = e || "utf8";
    var t = r.split(".")[1];
    return u.from(t, "base64").toString(e);
  }
  function h(r) {
    return p.test(r) && !!o(r);
  }
  function m(r, e, t) {
    if (!e) {
      var i = new Error("Missing algorithm parameter for jws.verify");
      throw i.code = "MISSING_ALGORITHM", i;
    }
    r = f(r);
    var g = c(r), O = S(r), V = y(e);
    return V.verify(O, g, t);
  }
  function l(r, e) {
    if (e = e || {}, r = f(r), !h(r))
      return null;
    var t = o(r);
    if (!t)
      return null;
    var i = J(r);
    return (t.typ === "JWT" || e.json) && (i = JSON.parse(i, e.encoding)), {
      header: t,
      payload: i,
      signature: c(r)
    };
  }
  function a(r) {
    r = r || {};
    var e = r.secret || r.publicKey || r.key, t = new s(e);
    this.readable = !0, this.algorithm = r.algorithm, this.encoding = r.encoding, this.secret = this.publicKey = this.key = t, this.signature = new s(r.signature), this.secret.once("close", function() {
      !this.signature.writable && this.readable && this.verify();
    }.bind(this)), this.signature.once("close", function() {
      !this.secret.writable && this.readable && this.verify();
    }.bind(this));
  }
  return b.inherits(a, v), a.prototype.verify = function() {
    try {
      var e = m(this.signature.buffer, this.algorithm, this.key.buffer), t = l(this.signature.buffer, this.encoding);
      return this.emit("done", e, t), this.emit("data", e), this.emit("end"), this.readable = !1, e;
    } catch (i) {
      this.readable = !1, this.emit("error", i), this.emit("close");
    }
  }, a.decode = l, a.isValid = h, a.verify = m, n = a, n;
}
export {
  M as __require
};
//# sourceMappingURL=index.es164.js.map
