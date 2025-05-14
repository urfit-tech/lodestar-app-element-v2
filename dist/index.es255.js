import { invariant as J } from "./index.es117.js";
import "./index.es118.js";
import { hasOwn as N } from "./index.es249.js";
import { isNonEmptyArray as h, isArray as l } from "./index.es131.js";
import { argumentsObjectFromField as w } from "./index.es126.js";
import { DeepMerger as C } from "./index.es133.js";
import { isNonNullObject as I } from "./index.es69.js";
var S = /* @__PURE__ */ Object.create(null);
function v(r) {
  var e = JSON.stringify(r);
  return S[e] || (S[e] = /* @__PURE__ */ Object.create(null));
}
function G(r) {
  var e = v(r);
  return e.keyFieldsFn || (e.keyFieldsFn = function(f, n) {
    var i = function(t, u) {
      return n.readField(u, t);
    }, o = n.keyObject = m(r, function(t) {
      var u = c(
        n.storeObject,
        t,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return u === void 0 && f !== n.storeObject && N.call(f, t[0]) && (u = c(f, t, b)), J(u !== void 0, 4, t.join("."), f), u;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(o));
  });
}
function H(r) {
  var e = v(r);
  return e.keyArgsFn || (e.keyArgsFn = function(f, n) {
    var i = n.field, o = n.variables, t = n.fieldName, u = m(r, function(a) {
      var s = a[0], d = s.charAt(0);
      if (d === "@") {
        if (i && h(i.directives)) {
          var A = s.slice(1), F = i.directives.find(function(E) {
            return E.name.value === A;
          }), O = F && w(F, o);
          return O && c(
            O,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            a.slice(1)
          );
        }
        return;
      }
      if (d === "$") {
        var g = s.slice(1);
        if (o && N.call(o, g)) {
          var y = a.slice(0);
          return y[0] = g, c(o, y);
        }
        return;
      }
      if (f)
        return c(f, a);
    }), p = JSON.stringify(u);
    return (f || p !== "{}") && (t += ":" + p), t;
  });
}
function m(r, e) {
  var f = new C();
  return k(r).reduce(function(n, i) {
    var o, t = e(i);
    if (t !== void 0) {
      for (var u = i.length - 1; u >= 0; --u)
        t = (o = {}, o[i[u]] = t, o);
      n = f.merge(n, t);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function k(r) {
  var e = v(r);
  if (!e.paths) {
    var f = e.paths = [], n = [];
    r.forEach(function(i, o) {
      l(i) ? (k(i).forEach(function(t) {
        return f.push(n.concat(t));
      }), n.length = 0) : (n.push(i), l(r[o + 1]) || (f.push(n.slice(0)), n.length = 0));
    });
  }
  return e.paths;
}
function b(r, e) {
  return r[e];
}
function c(r, e, f) {
  return f = f || b, j(e.reduce(function n(i, o) {
    return l(i) ? i.map(function(t) {
      return n(t, o);
    }) : i && f(i, o);
  }, r));
}
function j(r) {
  return I(r) ? l(r) ? r.map(j) : m(Object.keys(r).sort(), function(e) {
    return c(r, e);
  }) : r;
}
export {
  m as collectSpecifierPaths,
  c as extractKeyPath,
  k as getSpecifierPaths,
  H as keyArgsFnFromSpecifier,
  G as keyFieldsFnFromSpecifier
};
//# sourceMappingURL=index.es255.js.map
