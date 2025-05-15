import { __extends as p } from "./index.es92.js";
var l = (
  /** @class */
  function(a) {
    p(i, a);
    function i(e, n, o, h) {
      var s, r = a.call(this, e) || this;
      if (r.message = e, r.path = n, r.query = o, r.variables = h, Array.isArray(r.path)) {
        r.missing = r.message;
        for (var t = r.path.length - 1; t >= 0; --t)
          r.missing = (s = {}, s[r.path[t]] = r.missing, s);
      } else
        r.missing = r.path;
      return r.__proto__ = i.prototype, r;
    }
    return i;
  }(Error)
);
export {
  l as MissingFieldError
};
//# sourceMappingURL=index.es172.js.map
