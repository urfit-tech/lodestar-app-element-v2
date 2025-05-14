import { __extends as h } from "./index.es63.js";
import "./index.es66.js";
import { iterateObserversSafely as f } from "./index.es136.js";
import { fixObservableSubclass as p } from "./index.es139.js";
import { Observable as l } from "./index.es65.js";
function c(i) {
  return i && typeof i.then == "function";
}
var m = (
  /** @class */
  function(i) {
    h(r, i);
    function r(s) {
      var e = i.call(this, function(t) {
        return e.addObserver(t), function() {
          return e.removeObserver(t);
        };
      }) || this;
      return e.observers = /* @__PURE__ */ new Set(), e.promise = new Promise(function(t, n) {
        e.resolve = t, e.reject = n;
      }), e.handlers = {
        next: function(t) {
          e.sub !== null && (e.latest = ["next", t], e.notify("next", t), f(e.observers, "next", t));
        },
        error: function(t) {
          var n = e.sub;
          n !== null && (n && setTimeout(function() {
            return n.unsubscribe();
          }), e.sub = null, e.latest = ["error", t], e.reject(t), e.notify("error", t), f(e.observers, "error", t));
        },
        complete: function() {
          var t = e, n = t.sub, u = t.sources, a = u === void 0 ? [] : u;
          if (n !== null) {
            var o = a.shift();
            o ? c(o) ? o.then(function(b) {
              return e.sub = b.subscribe(e.handlers);
            }, e.handlers.error) : e.sub = o.subscribe(e.handlers) : (n && setTimeout(function() {
              return n.unsubscribe();
            }), e.sub = null, e.latest && e.latest[0] === "next" ? e.resolve(e.latest[1]) : e.resolve(), e.notify("complete"), f(e.observers, "complete"));
          }
        }
      }, e.nextResultListeners = /* @__PURE__ */ new Set(), e.cancel = function(t) {
        e.reject(t), e.sources = [], e.handlers.complete();
      }, e.promise.catch(function(t) {
      }), typeof s == "function" && (s = [new l(s)]), c(s) ? s.then(function(t) {
        return e.start(t);
      }, e.handlers.error) : e.start(s), e;
    }
    return r.prototype.start = function(s) {
      this.sub === void 0 && (this.sources = Array.from(s), this.handlers.complete());
    }, r.prototype.deliverLastMessage = function(s) {
      if (this.latest) {
        var e = this.latest[0], t = s[e];
        t && t.call(s, this.latest[1]), this.sub === null && e === "next" && s.complete && s.complete();
      }
    }, r.prototype.addObserver = function(s) {
      this.observers.has(s) || (this.deliverLastMessage(s), this.observers.add(s));
    }, r.prototype.removeObserver = function(s) {
      this.observers.delete(s) && this.observers.size < 1 && this.handlers.complete();
    }, r.prototype.notify = function(s, e) {
      var t = this.nextResultListeners;
      t.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), t.forEach(function(n) {
        return n(s, e);
      }));
    }, r.prototype.beforeNext = function(s) {
      var e = !1;
      this.nextResultListeners.add(function(t, n) {
        e || (e = !0, s(t, n));
      });
    }, r;
  }(l)
);
p(m);
export {
  m as Concast
};
//# sourceMappingURL=index.es138.js.map
