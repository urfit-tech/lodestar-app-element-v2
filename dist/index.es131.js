var y = function(u, o) {
  return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
  }, y(u, o);
};
function p(u, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
  y(u, o);
  function e() {
    this.constructor = u;
  }
  u.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e());
}
var h = function() {
  return h = Object.assign || function(o) {
    for (var e, r = 1, a = arguments.length; r < a; r++) {
      e = arguments[r];
      for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]);
    }
    return o;
  }, h.apply(this, arguments);
};
function _(u, o, e, r) {
  function a(t) {
    return t instanceof e ? t : new e(function(i) {
      i(t);
    });
  }
  return new (e || (e = Promise))(function(t, i) {
    function l(c) {
      try {
        n(r.next(c));
      } catch (f) {
        i(f);
      }
    }
    function s(c) {
      try {
        n(r.throw(c));
      } catch (f) {
        i(f);
      }
    }
    function n(c) {
      c.done ? t(c.value) : a(c.value).then(l, s);
    }
    n((r = r.apply(u, o || [])).next());
  });
}
function w(u, o) {
  var e = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, r, a, t, i;
  return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function l(n) {
    return function(c) {
      return s([n, c]);
    };
  }
  function s(n) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, n[0] && (e = 0)), e; ) try {
      if (r = 1, a && (t = n[0] & 2 ? a.return : n[0] ? a.throw || ((t = a.return) && t.call(a), 0) : a.next) && !(t = t.call(a, n[1])).done) return t;
      switch (a = 0, t && (n = [n[0] & 2, t.value]), n[0]) {
        case 0:
        case 1:
          t = n;
          break;
        case 4:
          return e.label++, { value: n[1], done: !1 };
        case 5:
          e.label++, a = n[1], n = [0];
          continue;
        case 7:
          n = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (t = e.trys, !(t = t.length > 0 && t[t.length - 1]) && (n[0] === 6 || n[0] === 2)) {
            e = 0;
            continue;
          }
          if (n[0] === 3 && (!t || n[1] > t[0] && n[1] < t[3])) {
            e.label = n[1];
            break;
          }
          if (n[0] === 6 && e.label < t[1]) {
            e.label = t[1], t = n;
            break;
          }
          if (t && e.label < t[2]) {
            e.label = t[2], e.ops.push(n);
            break;
          }
          t[2] && e.ops.pop(), e.trys.pop();
          continue;
      }
      n = o.call(u, e);
    } catch (c) {
      n = [6, c], a = 0;
    } finally {
      r = t = 0;
    }
    if (n[0] & 5) throw n[1];
    return { value: n[0] ? n[1] : void 0, done: !0 };
  }
}
function d(u, o, e) {
  if (e || arguments.length === 2) for (var r = 0, a = o.length, t; r < a; r++)
    (t || !(r in o)) && (t || (t = Array.prototype.slice.call(o, 0, r)), t[r] = o[r]);
  return u.concat(t || Array.prototype.slice.call(o));
}
export {
  h as __assign,
  _ as __awaiter,
  p as __extends,
  w as __generator,
  d as __spreadArray
};
//# sourceMappingURL=index.es131.js.map
