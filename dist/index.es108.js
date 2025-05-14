var o, n;
function c() {
  if (n) return o;
  n = 1;
  var r = function(e, t) {
    Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "JsonWebTokenError", this.message = e, t && (this.inner = t);
  };
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, o = r, o;
}
export {
  c as __require
};
//# sourceMappingURL=index.es108.js.map
