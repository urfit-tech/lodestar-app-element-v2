import u from "./index.es105.js";
class c {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(r) {
      t = r;
    });
    const s = this;
    this.promise.then((n) => {
      if (!s._listeners) return;
      let r = s._listeners.length;
      for (; r-- > 0; )
        s._listeners[r](n);
      s._listeners = null;
    }), this.promise.then = (n) => {
      let r;
      const o = new Promise((i) => {
        s.subscribe(i), r = i;
      }).then(n);
      return o.cancel = function() {
        s.unsubscribe(r);
      }, o;
    }, e(function(r, o, i) {
      s.reason || (s.reason = new u(r, o, i), t(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), t = (s) => {
      e.abort(s);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new c(function(n) {
        e = n;
      }),
      cancel: e
    };
  }
}
export {
  c as default
};
//# sourceMappingURL=index.es106.js.map
