import { __awaiter as k, __assign as ge, __generator as W, __spreadArray as oe } from "./index.es47.js";
var ce = "3.4.2";
function I(e, n) {
  return new Promise(function(t) {
    return setTimeout(t, e, n);
  });
}
function be(e, n) {
  n === void 0 && (n = 1 / 0);
  var t = window.requestIdleCallback;
  return t ? new Promise(function(r) {
    return t.call(window, function() {
      return r();
    }, { timeout: n });
  }) : I(Math.min(e, n));
}
function ue(e) {
  return !!e && typeof e.then == "function";
}
function Q(e, n) {
  try {
    var t = e();
    ue(t) ? t.then(function(r) {
      return n(!0, r);
    }, function(r) {
      return n(!1, r);
    }) : n(!0, t);
  } catch (r) {
    n(!1, r);
  }
}
function K(e, n, t) {
  return t === void 0 && (t = 16), k(this, void 0, void 0, function() {
    var r, o, i, a;
    return W(this, function(c) {
      switch (c.label) {
        case 0:
          r = Array(e.length), o = Date.now(), i = 0, c.label = 1;
        case 1:
          return i < e.length ? (r[i] = n(e[i], i), a = Date.now(), a >= o + t ? (o = a, [4, I(0)]) : [3, 3]) : [3, 4];
        case 2:
          c.sent(), c.label = 3;
        case 3:
          return ++i, [3, 1];
        case 4:
          return [2, r];
      }
    });
  });
}
function Y(e) {
  e.then(void 0, function() {
  });
}
function Z(e, n) {
  e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535], n = [n[0] >>> 16, n[0] & 65535, n[1] >>> 16, n[1] & 65535];
  var t = [0, 0, 0, 0];
  return t[3] += e[3] + n[3], t[2] += t[3] >>> 16, t[3] &= 65535, t[2] += e[2] + n[2], t[1] += t[2] >>> 16, t[2] &= 65535, t[1] += e[1] + n[1], t[0] += t[1] >>> 16, t[1] &= 65535, t[0] += e[0] + n[0], t[0] &= 65535, [t[0] << 16 | t[1], t[2] << 16 | t[3]];
}
function C(e, n) {
  e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535], n = [n[0] >>> 16, n[0] & 65535, n[1] >>> 16, n[1] & 65535];
  var t = [0, 0, 0, 0];
  return t[3] += e[3] * n[3], t[2] += t[3] >>> 16, t[3] &= 65535, t[2] += e[2] * n[3], t[1] += t[2] >>> 16, t[2] &= 65535, t[2] += e[3] * n[2], t[1] += t[2] >>> 16, t[2] &= 65535, t[1] += e[1] * n[3], t[0] += t[1] >>> 16, t[1] &= 65535, t[1] += e[2] * n[2], t[0] += t[1] >>> 16, t[1] &= 65535, t[1] += e[3] * n[1], t[0] += t[1] >>> 16, t[1] &= 65535, t[0] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0], t[0] &= 65535, [t[0] << 16 | t[1], t[2] << 16 | t[3]];
}
function R(e, n) {
  return n %= 64, n === 32 ? [e[1], e[0]] : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n | e[0] >>> 32 - n] : (n -= 32, [e[1] << n | e[0] >>> 32 - n, e[0] << n | e[1] >>> 32 - n]);
}
function S(e, n) {
  return n %= 64, n === 0 ? e : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n] : [e[1] << n - 32, 0];
}
function h(e, n) {
  return [e[0] ^ n[0], e[1] ^ n[1]];
}
function _(e) {
  return e = h(e, [0, e[0] >>> 1]), e = C(e, [4283543511, 3981806797]), e = h(e, [0, e[0] >>> 1]), e = C(e, [3301882366, 444984403]), e = h(e, [0, e[0] >>> 1]), e;
}
function ye(e, n) {
  e = e || "", n = n || 0;
  var t = e.length % 16, r = e.length - t, o = [0, n], i = [0, n], a = [0, 0], c = [0, 0], s = [2277735313, 289559509], l = [1291169091, 658871167], u;
  for (u = 0; u < r; u = u + 16)
    a = [
      e.charCodeAt(u + 4) & 255 | (e.charCodeAt(u + 5) & 255) << 8 | (e.charCodeAt(u + 6) & 255) << 16 | (e.charCodeAt(u + 7) & 255) << 24,
      e.charCodeAt(u) & 255 | (e.charCodeAt(u + 1) & 255) << 8 | (e.charCodeAt(u + 2) & 255) << 16 | (e.charCodeAt(u + 3) & 255) << 24
    ], c = [
      e.charCodeAt(u + 12) & 255 | (e.charCodeAt(u + 13) & 255) << 8 | (e.charCodeAt(u + 14) & 255) << 16 | (e.charCodeAt(u + 15) & 255) << 24,
      e.charCodeAt(u + 8) & 255 | (e.charCodeAt(u + 9) & 255) << 8 | (e.charCodeAt(u + 10) & 255) << 16 | (e.charCodeAt(u + 11) & 255) << 24
    ], a = C(a, s), a = R(a, 31), a = C(a, l), o = h(o, a), o = R(o, 27), o = Z(o, i), o = Z(C(o, [0, 5]), [0, 1390208809]), c = C(c, l), c = R(c, 33), c = C(c, s), i = h(i, c), i = R(i, 31), i = Z(i, o), i = Z(C(i, [0, 5]), [0, 944331445]);
  switch (a = [0, 0], c = [0, 0], t) {
    case 15:
      c = h(c, S([0, e.charCodeAt(u + 14)], 48));
    // fallthrough
    case 14:
      c = h(c, S([0, e.charCodeAt(u + 13)], 40));
    // fallthrough
    case 13:
      c = h(c, S([0, e.charCodeAt(u + 12)], 32));
    // fallthrough
    case 12:
      c = h(c, S([0, e.charCodeAt(u + 11)], 24));
    // fallthrough
    case 11:
      c = h(c, S([0, e.charCodeAt(u + 10)], 16));
    // fallthrough
    case 10:
      c = h(c, S([0, e.charCodeAt(u + 9)], 8));
    // fallthrough
    case 9:
      c = h(c, [0, e.charCodeAt(u + 8)]), c = C(c, l), c = R(c, 33), c = C(c, s), i = h(i, c);
    // fallthrough
    case 8:
      a = h(a, S([0, e.charCodeAt(u + 7)], 56));
    // fallthrough
    case 7:
      a = h(a, S([0, e.charCodeAt(u + 6)], 48));
    // fallthrough
    case 6:
      a = h(a, S([0, e.charCodeAt(u + 5)], 40));
    // fallthrough
    case 5:
      a = h(a, S([0, e.charCodeAt(u + 4)], 32));
    // fallthrough
    case 4:
      a = h(a, S([0, e.charCodeAt(u + 3)], 24));
    // fallthrough
    case 3:
      a = h(a, S([0, e.charCodeAt(u + 2)], 16));
    // fallthrough
    case 2:
      a = h(a, S([0, e.charCodeAt(u + 1)], 8));
    // fallthrough
    case 1:
      a = h(a, [0, e.charCodeAt(u)]), a = C(a, s), a = R(a, 31), a = C(a, l), o = h(o, a);
  }
  return o = h(o, [0, e.length]), i = h(i, [0, e.length]), o = Z(o, i), i = Z(i, o), o = _(o), i = _(i), o = Z(o, i), i = Z(i, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8);
}
function we(e) {
  var n;
  return ge({ name: e.name, message: e.message, stack: (n = e.stack) === null || n === void 0 ? void 0 : n.split(`
`) }, e);
}
function Le(e, n) {
  for (var t = 0, r = e.length; t < r; ++t)
    if (e[t] === n)
      return !0;
  return !1;
}
function Se(e, n) {
  return !Le(e, n);
}
function E(e) {
  return parseInt(e);
}
function x(e) {
  return parseFloat(e);
}
function F(e, n) {
  return typeof e == "number" && isNaN(e) ? n : e;
}
function V(e) {
  return e.reduce(function(n, t) {
    return n + (t ? 1 : 0);
  }, 0);
}
function se(e, n) {
  if (n === void 0 && (n = 1), Math.abs(n) >= 1)
    return Math.round(e / n) * n;
  var t = 1 / n;
  return Math.round(e * t) / t;
}
function Ce(e) {
  for (var n, t, r = "Unexpected syntax '".concat(e, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(e), i = o[1] || void 0, a = {}, c = /([.:#][\w-]+|\[.+?\])/gi, s = function(v, p) {
    a[v] = a[v] || [], a[v].push(p);
  }; ; ) {
    var l = c.exec(o[2]);
    if (!l)
      break;
    var u = l[0];
    switch (u[0]) {
      case ".":
        s("class", u.slice(1));
        break;
      case "#":
        s("id", u.slice(1));
        break;
      case "[": {
        var f = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u);
        if (f)
          s(f[1], (t = (n = f[4]) !== null && n !== void 0 ? n : f[5]) !== null && t !== void 0 ? t : "");
        else
          throw new Error(r);
        break;
      }
      default:
        throw new Error(r);
    }
  }
  return [i, a];
}
function q(e) {
  return e && typeof e == "object" && "message" in e ? e : { message: e };
}
function xe(e) {
  return typeof e != "function";
}
function Ve(e, n) {
  var t = new Promise(function(r) {
    var o = Date.now();
    Q(e.bind(null, n), function() {
      for (var i = [], a = 0; a < arguments.length; a++)
        i[a] = arguments[a];
      var c = Date.now() - o;
      if (!i[0])
        return r(function() {
          return { error: q(i[1]), duration: c };
        });
      var s = i[1];
      if (xe(s))
        return r(function() {
          return { value: s, duration: c };
        });
      r(function() {
        return new Promise(function(l) {
          var u = Date.now();
          Q(s, function() {
            for (var f = [], v = 0; v < arguments.length; v++)
              f[v] = arguments[v];
            var p = c + Date.now() - u;
            if (!f[0])
              return l({ error: q(f[1]), duration: p });
            l({ value: f[1], duration: p });
          });
        });
      });
    });
  });
  return Y(t), function() {
    return t.then(function(o) {
      return o();
    });
  };
}
function Fe(e, n, t) {
  var r = Object.keys(e).filter(function(i) {
    return Se(t, i);
  }), o = K(r, function(i) {
    return Ve(e[i], n);
  });
  return Y(o), function() {
    return k(this, void 0, void 0, function() {
      var a, c, s, l, u;
      return W(this, function(f) {
        switch (f.label) {
          case 0:
            return [4, o];
          case 1:
            return a = f.sent(), [4, K(a, function(v) {
              var p = v();
              return Y(p), p;
            })];
          case 2:
            return c = f.sent(), [
              4,
              Promise.all(c)
              // Keeping the component keys order the same as the source keys order
            ];
          case 3:
            for (s = f.sent(), l = {}, u = 0; u < r.length; ++u)
              l[r[u]] = s[u];
            return [2, l];
        }
      });
    });
  };
}
function le() {
  var e = window, n = navigator;
  return V([
    "MSCSSMatrix" in e,
    "msSetImmediate" in e,
    "msIndexedDB" in e,
    "msMaxTouchPoints" in n,
    "msPointerEnabled" in n
  ]) >= 4;
}
function ke() {
  var e = window, n = navigator;
  return V(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in n, "msSaveBlob" in n]) >= 3 && !le();
}
function O() {
  var e = window, n = navigator;
  return V([
    "webkitPersistentStorage" in n,
    "webkitTemporaryStorage" in n,
    n.vendor.indexOf("Google") === 0,
    "webkitResolveLocalFileSystemURL" in e,
    "BatteryManager" in e,
    "webkitMediaStream" in e,
    "webkitSpeechGrammar" in e
  ]) >= 5;
}
function X() {
  var e = window, n = navigator;
  return V([
    "ApplePayError" in e,
    "CSSPrimitiveValue" in e,
    "Counter" in e,
    n.vendor.indexOf("Apple") === 0,
    "getStorageUpdates" in n,
    "WebKitMediaKeys" in e
  ]) >= 4;
}
function U() {
  var e = window;
  return V([
    "safari" in e,
    !("DeviceMotionEvent" in e),
    !("ongestureend" in e),
    !("standalone" in navigator)
  ]) >= 3;
}
function We() {
  var e, n, t = window;
  return V([
    "buildID" in navigator,
    "MozAppearance" in ((n = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && n !== void 0 ? n : {}),
    "onmozfullscreenchange" in t,
    "mozInnerScreenX" in t,
    "CSSMozDocumentRule" in t,
    "CanvasCaptureMediaStream" in t
  ]) >= 4;
}
function Ze() {
  var e = window;
  return V([
    !("MediaSettingsRange" in e),
    "RTCEncodedAudioFrame" in e,
    "" + e.Intl == "[object Intl]",
    "" + e.Reflect == "[object Reflect]"
  ]) >= 3;
}
function Me() {
  var e = window;
  return V([
    "DOMRectList" in e,
    "RTCPeerConnectionIceEvent" in e,
    "SVGGeometryElement" in e,
    "ontransitioncancel" in e
  ]) >= 3;
}
function Re() {
  if (navigator.platform === "iPad")
    return !0;
  var e = screen, n = e.width / e.height;
  return V([
    "MediaSource" in window,
    !!Element.prototype.webkitRequestFullscreen,
    // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
    n > 0.65 && n < 1.53
  ]) >= 2;
}
function Ae() {
  var e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null;
}
function Ge() {
  var e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e);
}
function fe() {
  var e = O(), n = We();
  if (!e && !n)
    return !1;
  var t = window;
  return V([
    "onorientationchange" in t,
    "orientation" in t,
    e && !("SharedWorker" in t),
    n && /android/i.test(navigator.appVersion)
  ]) >= 2;
}
function Ie() {
  var e = window, n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!n)
    return -2;
  if (Ye())
    return -1;
  var t = 4500, r = 5e3, o = new n(1, r, 44100), i = o.createOscillator();
  i.type = "triangle", i.frequency.value = 1e4;
  var a = o.createDynamicsCompressor();
  a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = 0.25, i.connect(a), a.connect(o.destination), i.start(0);
  var c = Xe(o), s = c[0], l = c[1], u = s.then(function(f) {
    return je(f.getChannelData(0).subarray(t));
  }, function(f) {
    if (f.name === "timeout" || f.name === "suspended")
      return -3;
    throw f;
  });
  return Y(u), function() {
    return l(), u;
  };
}
function Ye() {
  return X() && !U() && !Me();
}
function Xe(e) {
  var n = 3, t = 500, r = 500, o = 5e3, i = function() {
  }, a = new Promise(function(c, s) {
    var l = !1, u = 0, f = 0;
    e.oncomplete = function(g) {
      return c(g.renderedBuffer);
    };
    var v = function() {
      setTimeout(function() {
        return s($(
          "timeout"
          /* InnerErrorName.Timeout */
        ));
      }, Math.min(r, f + o - Date.now()));
    }, p = function() {
      try {
        var g = e.startRendering();
        switch (ue(g) && Y(g), e.state) {
          case "running":
            f = Date.now(), l && v();
            break;
          // Sometimes the audio context doesn't start after calling `startRendering` (in addition to the cases where
          // audio context doesn't start at all). A known case is starting an audio context when the browser tab is in
          // background on iPhone. Retries usually help in this case.
          case "suspended":
            document.hidden || u++, l && u >= n ? s($(
              "suspended"
              /* InnerErrorName.Suspended */
            )) : setTimeout(p, t);
            break;
        }
      } catch (y) {
        s(y);
      }
    };
    p(), i = function() {
      l || (l = !0, f > 0 && v());
    };
  });
  return [a, i];
}
function je(e) {
  for (var n = 0, t = 0; t < e.length; ++t)
    n += Math.abs(e[t]);
  return n;
}
function $(e) {
  var n = new Error(e);
  return n.name = e, n;
}
function de(e, n, t) {
  var r, o, i;
  return t === void 0 && (t = 50), k(this, void 0, void 0, function() {
    var a, c;
    return W(this, function(s) {
      switch (s.label) {
        case 0:
          a = document, s.label = 1;
        case 1:
          return a.body ? [3, 3] : [4, I(t)];
        case 2:
          return s.sent(), [3, 1];
        case 3:
          c = a.createElement("iframe"), s.label = 4;
        case 4:
          return s.trys.push([4, , 10, 11]), [4, new Promise(function(l, u) {
            var f = !1, v = function() {
              f = !0, l();
            }, p = function(b) {
              f = !0, u(b);
            };
            c.onload = v, c.onerror = p;
            var g = c.style;
            g.setProperty("display", "block", "important"), g.position = "absolute", g.top = "0", g.left = "0", g.visibility = "hidden", n && "srcdoc" in c ? c.srcdoc = n : c.src = "about:blank", a.body.appendChild(c);
            var y = function() {
              var b, w;
              f || (((w = (b = c.contentWindow) === null || b === void 0 ? void 0 : b.document) === null || w === void 0 ? void 0 : w.readyState) === "complete" ? v() : setTimeout(y, 10));
            };
            y();
          })];
        case 5:
          s.sent(), s.label = 6;
        case 6:
          return !((o = (r = c.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || o === void 0) && o.body ? [3, 8] : [4, I(t)];
        case 7:
          return s.sent(), [3, 6];
        case 8:
          return [4, e(c, c.contentWindow)];
        case 9:
          return [2, s.sent()];
        case 10:
          return (i = c.parentNode) === null || i === void 0 || i.removeChild(c), [
            7
            /*endfinally*/
          ];
        case 11:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function Pe(e) {
  for (var n = Ce(e), t = n[0], r = n[1], o = document.createElement(t ?? "div"), i = 0, a = Object.keys(r); i < a.length; i++) {
    var c = a[i], s = r[c].join(" ");
    c === "style" ? Te(o.style, s) : o.setAttribute(c, s);
  }
  return o;
}
function Te(e, n) {
  for (var t = 0, r = n.split(";"); t < r.length; t++) {
    var o = r[t], i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
    if (i) {
      var a = i[1], c = i[2], s = i[4];
      e.setProperty(a, c, s || "");
    }
  }
}
var He = "mmMwWLliI0O&1", De = "48px", A = ["monospace", "sans-serif", "serif"], ee = [
  // This is android-specific font from "Roboto" family
  "sans-serif-thin",
  "ARNO PRO",
  "Agency FB",
  "Arabic Typesetting",
  "Arial Unicode MS",
  "AvantGarde Bk BT",
  "BankGothic Md BT",
  "Batang",
  "Bitstream Vera Sans Mono",
  "Calibri",
  "Century",
  "Century Gothic",
  "Clarendon",
  "EUROSTILE",
  "Franklin Gothic",
  "Futura Bk BT",
  "Futura Md BT",
  "GOTHAM",
  "Gill Sans",
  "HELV",
  "Haettenschweiler",
  "Helvetica Neue",
  "Humanst521 BT",
  "Leelawadee",
  "Letter Gothic",
  "Levenim MT",
  "Lucida Bright",
  "Lucida Sans",
  "Menlo",
  "MS Mincho",
  "MS Outlook",
  "MS Reference Specialty",
  "MS UI Gothic",
  "MT Extra",
  "MYRIAD PRO",
  "Marlett",
  "Meiryo UI",
  "Microsoft Uighur",
  "Minion Pro",
  "Monotype Corsiva",
  "PMingLiU",
  "Pristina",
  "SCRIPTINA",
  "Segoe UI Light",
  "Serifa",
  "SimHei",
  "Small Fonts",
  "Staccato222 BT",
  "TRAJAN PRO",
  "Univers CE 55 Medium",
  "Vrinda",
  "ZWAdobeF"
];
function Je() {
  return de(function(e, n) {
    var t = n.document, r = t.body;
    r.style.fontSize = De;
    var o = t.createElement("div"), i = {}, a = {}, c = function(y) {
      var b = t.createElement("span"), w = b.style;
      return w.position = "absolute", w.top = "0", w.left = "0", w.fontFamily = y, b.textContent = He, o.appendChild(b), b;
    }, s = function(y, b) {
      return c("'".concat(y, "',").concat(b));
    }, l = function() {
      return A.map(c);
    }, u = function() {
      for (var y = {}, b = function(j) {
        y[j] = A.map(function(H) {
          return s(j, H);
        });
      }, w = 0, M = ee; w < M.length; w++) {
        var T = M[w];
        b(T);
      }
      return y;
    }, f = function(y) {
      return A.some(function(b, w) {
        return y[w].offsetWidth !== i[b] || y[w].offsetHeight !== a[b];
      });
    }, v = l(), p = u();
    r.appendChild(o);
    for (var g = 0; g < A.length; g++)
      i[A[g]] = v[g].offsetWidth, a[A[g]] = v[g].offsetHeight;
    return ee.filter(function(y) {
      return f(p[y]);
    });
  });
}
function ze() {
  var e = navigator.plugins;
  if (e) {
    for (var n = [], t = 0; t < e.length; ++t) {
      var r = e[t];
      if (r) {
        for (var o = [], i = 0; i < r.length; ++i) {
          var a = r[i];
          o.push({
            type: a.type,
            suffixes: a.suffixes
          });
        }
        n.push({
          name: r.name,
          description: r.description,
          mimeTypes: o
        });
      }
    }
    return n;
  }
}
function Ne() {
  var e = !1, n, t, r = Be(), o = r[0], i = r[1];
  if (!Ee(o, i))
    n = t = "";
  else {
    e = Oe(i), Ue(o, i);
    var a = D(o), c = D(o);
    a !== c ? n = t = "unstable" : (t = a, Qe(o, i), n = D(o));
  }
  return { winding: e, geometry: n, text: t };
}
function Be() {
  var e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")];
}
function Ee(e, n) {
  return !!(n && e.toDataURL);
}
function Oe(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd");
}
function Ue(e, n) {
  e.width = 240, e.height = 60, n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(100, 1, 62, 20), n.fillStyle = "#069", n.font = '11pt "Times New Roman"';
  var t = "Cwm fjordbank gly ".concat(
    "😃"
    /* 😃 */
  );
  n.fillText(t, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(t, 4, 45);
}
function Qe(e, n) {
  e.width = 122, e.height = 110, n.globalCompositeOperation = "multiply";
  for (var t = 0, r = [
    ["#f2f", 40, 40],
    ["#2ff", 80, 40],
    ["#ff2", 60, 80]
  ]; t < r.length; t++) {
    var o = r[t], i = o[0], a = o[1], c = o[2];
    n.fillStyle = i, n.beginPath(), n.arc(a, c, 40, 0, Math.PI * 2, !0), n.closePath(), n.fill();
  }
  n.fillStyle = "#f9c", n.arc(60, 60, 60, 0, Math.PI * 2, !0), n.arc(60, 60, 20, 0, Math.PI * 2, !0), n.fill("evenodd");
}
function D(e) {
  return e.toDataURL();
}
function Ke() {
  var e = navigator, n = 0, t;
  e.maxTouchPoints !== void 0 ? n = E(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (n = e.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), t = !0;
  } catch {
    t = !1;
  }
  var r = "ontouchstart" in window;
  return {
    maxTouchPoints: n,
    touchEvent: t,
    touchStart: r
  };
}
function _e() {
  return navigator.oscpu;
}
function qe() {
  var e = navigator, n = [], t = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (t !== void 0 && n.push([t]), Array.isArray(e.languages))
    O() && Ze() || n.push(e.languages);
  else if (typeof e.languages == "string") {
    var r = e.languages;
    r && n.push(r.split(","));
  }
  return n;
}
function $e() {
  return window.screen.colorDepth;
}
function en() {
  return F(x(navigator.deviceMemory), void 0);
}
function nn() {
  var e = screen, n = function(r) {
    return F(E(r), null);
  }, t = [n(e.width), n(e.height)];
  return t.sort().reverse(), t;
}
var tn = 2500, rn = 10, P, J;
function an() {
  if (J === void 0) {
    var e = function() {
      var n = N();
      B(n) ? J = setTimeout(e, tn) : (P = n, J = void 0);
    };
    e();
  }
}
function on() {
  var e = this;
  return an(), function() {
    return k(e, void 0, void 0, function() {
      var n;
      return W(this, function(t) {
        switch (t.label) {
          case 0:
            return n = N(), B(n) ? P ? [2, oe([], P, !0)] : Ae() ? [4, Ge()] : [3, 2] : [3, 2];
          case 1:
            t.sent(), n = N(), t.label = 2;
          case 2:
            return B(n) || (P = n), [2, n];
        }
      });
    });
  };
}
function cn() {
  var e = this, n = on();
  return function() {
    return k(e, void 0, void 0, function() {
      var t, r;
      return W(this, function(o) {
        switch (o.label) {
          case 0:
            return [4, n()];
          case 1:
            return t = o.sent(), r = function(i) {
              return i === null ? null : se(i, rn);
            }, [2, [r(t[0]), r(t[1]), r(t[2]), r(t[3])]];
        }
      });
    });
  };
}
function N() {
  var e = screen;
  return [
    F(x(e.availTop), null),
    F(x(e.width) - x(e.availWidth) - F(x(e.availLeft), 0), null),
    F(x(e.height) - x(e.availHeight) - F(x(e.availTop), 0), null),
    F(x(e.availLeft), null)
  ];
}
function B(e) {
  for (var n = 0; n < 4; ++n)
    if (e[n])
      return !1;
  return !0;
}
function un() {
  return F(E(navigator.hardwareConcurrency), void 0);
}
function sn() {
  var e, n = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (n) {
    var t = new n().resolvedOptions().timeZone;
    if (t)
      return t;
  }
  var r = -ln();
  return "UTC".concat(r >= 0 ? "+" : "").concat(Math.abs(r));
}
function ln() {
  var e = (/* @__PURE__ */ new Date()).getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    x(new Date(e, 0, 1).getTimezoneOffset()),
    x(new Date(e, 6, 1).getTimezoneOffset())
  );
}
function fn() {
  try {
    return !!window.sessionStorage;
  } catch {
    return !0;
  }
}
function dn() {
  try {
    return !!window.localStorage;
  } catch {
    return !0;
  }
}
function vn() {
  if (!(le() || ke()))
    try {
      return !!window.indexedDB;
    } catch {
      return !0;
    }
}
function mn() {
  return !!window.openDatabase;
}
function hn() {
  return navigator.cpuClass;
}
function pn() {
  var e = navigator.platform;
  return e === "MacIntel" && X() && !U() ? Re() ? "iPad" : "iPhone" : e;
}
function gn() {
  return navigator.vendor || "";
}
function bn() {
  for (var e = [], n = 0, t = [
    // Blink and some browsers on iOS
    "chrome",
    // Safari on macOS
    "safari",
    // Chrome on iOS (checked in 85 on 13 and 87 on 14)
    "__crWeb",
    "__gCrWeb",
    // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
    "yandex",
    // Yandex Browser on iOS (checked in 21.2 on 14)
    "__yb",
    "__ybro",
    // Firefox on iOS (checked in 32 on 14)
    "__firefox__",
    // Edge on iOS (checked in 46 on 14)
    "__edgeTrackingPreventionStatistics",
    "webkit",
    // Opera Touch on iOS (checked in 2.6 on 14)
    "oprt",
    // Samsung Internet on Android (checked in 11.1)
    "samsungAr",
    // UC Browser on Android (checked in 12.10 and 13.0)
    "ucweb",
    "UCShellJava",
    // Puffin on Android (checked in 9.0)
    "puffinDevice"
    // UC on iOS and Opera on Android have no specific global variables
    // Edge for Android isn't checked
  ]; n < t.length; n++) {
    var r = t[n], o = window[r];
    o && typeof o == "object" && e.push(r);
  }
  return e.sort();
}
function yn() {
  var e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    var n = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", n;
  } catch {
    return !1;
  }
}
function wn() {
  var e = atob;
  return {
    abpIndo: [
      "#Iklan-Melayang",
      "#Kolom-Iklan-728",
      "#SidebarIklan-wrapper",
      '[title="ALIENBOLA" i]',
      e("I0JveC1CYW5uZXItYWRz")
    ],
    abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [
      ".mainostila",
      e("LnNwb25zb3JpdA=="),
      ".ylamainos",
      e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")
    ],
    adBlockPersian: [
      "#navbar_notice_50",
      ".kadr",
      'TABLE[width="140px"]',
      "#divAgahi",
      e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")
    ],
    adBlockWarningRemoval: [
      "#adblock-honeypot",
      ".adblocker-root",
      ".wp_adblock_detect",
      e("LmhlYWRlci1ibG9ja2VkLWFk"),
      e("I2FkX2Jsb2NrZXI=")
    ],
    adGuardAnnoyances: [
      ".hs-sosyal",
      "#cookieconsentdiv",
      'div[class^="app_gdpr"]',
      ".as-oil",
      '[data-cypress="soft-push-notification-modal"]'
    ],
    adGuardBase: [
      ".BetterJsPopOverlay",
      e("I2FkXzMwMFgyNTA="),
      e("I2Jhbm5lcmZsb2F0MjI="),
      e("I2NhbXBhaWduLWJhbm5lcg=="),
      e("I0FkLUNvbnRlbnQ=")
    ],
    adGuardChinese: [
      e("LlppX2FkX2FfSA=="),
      e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
      "#widget-quan",
      e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),
      e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")
    ],
    adGuardFrench: [
      "#pavePub",
      e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
      ".mobile_adhesion",
      ".widgetadv",
      e("LmFkc19iYW4=")
    ],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: [
      "#kauli_yad_1",
      e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
      e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
      e("LmFkZ29vZ2xl"),
      e("Ll9faXNib29zdFJldHVybkFk")
    ],
    adGuardMobile: [
      e("YW1wLWF1dG8tYWRz"),
      e("LmFtcF9hZA=="),
      'amp-embed[type="24smi"]',
      "#mgid_iframe1",
      e("I2FkX2ludmlld19hcmVh")
    ],
    adGuardRussian: [
      e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
      e("LnJlY2xhbWE="),
      'div[id^="smi2adblock"]',
      e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
      "#psyduckpockeball"
    ],
    adGuardSocial: [
      e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
      e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
      ".etsy-tweet",
      "#inlineShare",
      ".popup-social"
    ],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: [
      "#qoo-counter",
      e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
      e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
      e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
      "#top100counter"
    ],
    adGuardTurkish: [
      "#backkapat",
      e("I3Jla2xhbWk="),
      e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
      e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
      e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")
    ],
    bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [
      ".yb-floorad",
      e("LndpZGdldF9wb19hZHNfd2lkZ2V0"),
      e("LnRyYWZmaWNqdW5reS1hZA=="),
      ".textad_headline",
      e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")
    ],
    easyListChina: [
      e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
      e("LmZyb250cGFnZUFkdk0="),
      "#taotaole",
      "#aafoot.top_box",
      ".cfa_popup"
    ],
    easyListCookie: [
      ".ezmob-footer",
      ".cc-CookieWarning",
      "[data-cookie-number]",
      e("LmF3LWNvb2tpZS1iYW5uZXI="),
      ".sygnal24-gdpr-modal-wrap"
    ],
    easyListCzechSlovak: [
      "#onlajny-stickers",
      e("I3Jla2xhbW5pLWJveA=="),
      e("LnJla2xhbWEtbWVnYWJvYXJk"),
      ".sklik",
      e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")
    ],
    easyListDutch: [
      e("I2FkdmVydGVudGll"),
      e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
      ".adstekst",
      e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
      "#semilo-lrectangle"
    ],
    easyListGermany: [
      "#SSpotIMPopSlider",
      e("LnNwb25zb3JsaW5rZ3J1ZW4="),
      e("I3dlcmJ1bmdza3k="),
      e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),
      e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")
    ],
    easyListItaly: [
      e("LmJveF9hZHZfYW5udW5jaQ=="),
      ".sb-box-pubbliredazionale",
      e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")
    ],
    easyListLithuania: [
      e("LnJla2xhbW9zX3RhcnBhcw=="),
      e("LnJla2xhbW9zX251b3JvZG9z"),
      e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
      e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
      e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")
    ],
    estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [
      ".open.pushModal",
      "#issuem-leaky-paywall-articles-zero-remaining-nag",
      "#sovrn_container",
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      ".BlockNag__Card"
    ],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [
      e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
      e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
      "article.category-samarbete",
      e("ZGl2LmhvbGlkQWRz"),
      "ul.adsmodern"
    ],
    greekAdBlock: [
      e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
      e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
      e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
      "DIV.agores300",
      "TABLE.advright"
    ],
    hungarian: [
      "#cemp_doboz",
      ".optimonk-iframe-container",
      e("LmFkX19tYWlu"),
      e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
      "#hirdetesek_box"
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      ".ModuleTemplateCookieIndicator",
      ".o--cookies--container",
      "#cookies-policy-sticky",
      "#stickyCookieBar"
    ],
    icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [
      e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),
      e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")
    ],
    listKr: [
      e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
      e("I2xpdmVyZUFkV3JhcHBlcg=="),
      e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
      e("aW5zLmZhc3R2aWV3LWFk"),
      ".revenue_unit_item.dable"
    ],
    listeAr: [
      e("LmdlbWluaUxCMUFk"),
      ".right-and-left-sponsers",
      e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
      e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
      e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")
    ],
    listeFr: [
      e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
      e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
      e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
      ".site-pub-interstitiel",
      'div[id^="crt-"][data-criteo-id]'
    ],
    officialPolish: [
      "#ceneo-placeholder-ceneo-12",
      e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
      e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),
      e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
      e("ZGl2I3NrYXBpZWNfYWQ=")
    ],
    ro: [
      e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),
      e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
      'a[href^="/url/"]'
    ],
    ruAd: [
      e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
      e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
      e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
      "#pgeldiz",
      ".yandex-rtb-block"
    ],
    thaiAds: [
      "a[href*=macau-uta-popup]",
      e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
      e("LmFkczMwMHM="),
      ".bumq",
      ".img-kosana"
    ],
    webAnnoyancesUltralist: [
      "#mod-social-share-2",
      "#social-tools",
      e("LmN0cGwtZnVsbGJhbm5lcg=="),
      ".zergnet-recommend",
      ".yt.btn-link.btn-md.btn"
    ]
  };
}
function Ln(e) {
  var n = e === void 0 ? {} : e, t = n.debug;
  return k(this, void 0, void 0, function() {
    var r, o, i, a, c, s;
    return W(this, function(l) {
      switch (l.label) {
        case 0:
          return Sn() ? (r = wn(), o = Object.keys(r), i = (s = []).concat.apply(s, o.map(function(u) {
            return r[u];
          })), [4, Cn(i)]) : [2, void 0];
        case 1:
          return a = l.sent(), t && xn(r, a), c = o.filter(function(u) {
            var f = r[u], v = V(f.map(function(p) {
              return a[p];
            }));
            return v > f.length * 0.6;
          }), c.sort(), [2, c];
      }
    });
  });
}
function Sn() {
  return X() || fe();
}
function Cn(e) {
  var n;
  return k(this, void 0, void 0, function() {
    var t, r, o, i, s, a, c, s;
    return W(this, function(l) {
      switch (l.label) {
        case 0:
          for (t = document, r = t.createElement("div"), o = new Array(e.length), i = {}, ne(r), s = 0; s < e.length; ++s)
            a = Pe(e[s]), a.tagName === "DIALOG" && a.show(), c = t.createElement("div"), ne(c), c.appendChild(a), r.appendChild(c), o[s] = a;
          l.label = 1;
        case 1:
          return t.body ? [3, 3] : [4, I(50)];
        case 2:
          return l.sent(), [3, 1];
        case 3:
          t.body.appendChild(r);
          try {
            for (s = 0; s < e.length; ++s)
              o[s].offsetParent || (i[e[s]] = !0);
          } finally {
            (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
          }
          return [2, i];
      }
    });
  });
}
function ne(e) {
  e.style.setProperty("display", "block", "important");
}
function xn(e, n) {
  for (var t = "DOM blockers debug:\n```", r = 0, o = Object.keys(e); r < o.length; r++) {
    var i = o[r];
    t += `
`.concat(i, ":");
    for (var a = 0, c = e[i]; a < c.length; a++) {
      var s = c[a];
      t += `
  `.concat(n[s] ? "🚫" : "➡️", " ").concat(s);
    }
  }
  console.log("".concat(t, "\n```"));
}
function Vn() {
  for (var e = 0, n = ["rec2020", "p3", "srgb"]; e < n.length; e++) {
    var t = n[e];
    if (matchMedia("(color-gamut: ".concat(t, ")")).matches)
      return t;
  }
}
function Fn() {
  if (te("inverted"))
    return !0;
  if (te("none"))
    return !1;
}
function te(e) {
  return matchMedia("(inverted-colors: ".concat(e, ")")).matches;
}
function kn() {
  if (re("active"))
    return !0;
  if (re("none"))
    return !1;
}
function re(e) {
  return matchMedia("(forced-colors: ".concat(e, ")")).matches;
}
var Wn = 100;
function Zn() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var e = 0; e <= Wn; ++e)
      if (matchMedia("(max-monochrome: ".concat(e, ")")).matches)
        return e;
    throw new Error("Too high value");
  }
}
function Mn() {
  if (G("no-preference"))
    return 0;
  if (G("high") || G("more"))
    return 1;
  if (G("low") || G("less"))
    return -1;
  if (G("forced"))
    return 10;
}
function G(e) {
  return matchMedia("(prefers-contrast: ".concat(e, ")")).matches;
}
function Rn() {
  if (ae("reduce"))
    return !0;
  if (ae("no-preference"))
    return !1;
}
function ae(e) {
  return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches;
}
function An() {
  if (ie("high"))
    return !0;
  if (ie("standard"))
    return !1;
}
function ie(e) {
  return matchMedia("(dynamic-range: ".concat(e, ")")).matches;
}
var d = Math, L = function() {
  return 0;
};
function Gn() {
  var e = d.acos || L, n = d.acosh || L, t = d.asin || L, r = d.asinh || L, o = d.atanh || L, i = d.atan || L, a = d.sin || L, c = d.sinh || L, s = d.cos || L, l = d.cosh || L, u = d.tan || L, f = d.tanh || L, v = d.exp || L, p = d.expm1 || L, g = d.log1p || L, y = function(m) {
    return d.pow(d.PI, m);
  }, b = function(m) {
    return d.log(m + d.sqrt(m * m - 1));
  }, w = function(m) {
    return d.log(m + d.sqrt(m * m + 1));
  }, M = function(m) {
    return d.log((1 + m) / (1 - m)) / 2;
  }, T = function(m) {
    return d.exp(m) - 1 / d.exp(m) / 2;
  }, j = function(m) {
    return (d.exp(m) + 1 / d.exp(m)) / 2;
  }, H = function(m) {
    return d.exp(m) - 1;
  }, he = function(m) {
    return (d.exp(2 * m) - 1) / (d.exp(2 * m) + 1);
  }, pe = function(m) {
    return d.log(1 + m);
  };
  return {
    acos: e(0.12312423423423424),
    acosh: n(1e308),
    acoshPf: b(1e154),
    asin: t(0.12312423423423424),
    asinh: r(1),
    asinhPf: w(1),
    atanh: o(0.5),
    atanhPf: M(0.5),
    atan: i(0.5),
    sin: a(-1e300),
    sinh: c(1),
    sinhPf: T(1),
    cos: s(10.000000000123),
    cosh: l(1),
    coshPf: j(1),
    tan: u(-1e300),
    tanh: f(1),
    tanhPf: he(1),
    exp: v(1),
    expm1: p(1),
    expm1Pf: H(1),
    log1p: g(10),
    log1pPf: pe(10),
    powPI: y(-100)
  };
}
var In = "mmMwWLliI0fiflO&1", z = {
  /**
   * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
   * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
   */
  default: [],
  /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
  apple: [{ font: "-apple-system-body" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  serif: [{ fontFamily: "serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  sans: [{ fontFamily: "sans-serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  mono: [{ fontFamily: "monospace" }],
  /**
   * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
   * The height can be 0 in Chrome on a retina display.
   */
  min: [{ fontSize: "1px" }],
  /** Tells one OS from another in desktop Chrome. */
  system: [{ fontFamily: "system-ui" }]
};
function Yn() {
  return Xn(function(e, n) {
    for (var t = {}, r = {}, o = 0, i = Object.keys(z); o < i.length; o++) {
      var a = i[o], c = z[a], s = c[0], l = s === void 0 ? {} : s, u = c[1], f = u === void 0 ? In : u, v = e.createElement("span");
      v.textContent = f, v.style.whiteSpace = "nowrap";
      for (var p = 0, g = Object.keys(l); p < g.length; p++) {
        var y = g[p], b = l[y];
        b !== void 0 && (v.style[y] = b);
      }
      t[a] = v, n.appendChild(e.createElement("br")), n.appendChild(v);
    }
    for (var w = 0, M = Object.keys(z); w < M.length; w++) {
      var a = M[w];
      r[a] = t[a].getBoundingClientRect().width;
    }
    return r;
  });
}
function Xn(e, n) {
  return n === void 0 && (n = 4e3), de(function(t, r) {
    var o = r.document, i = o.body, a = i.style;
    a.width = "".concat(n, "px"), a.webkitTextSizeAdjust = a.textSizeAdjust = "none", O() ? i.style.zoom = "".concat(1 / r.devicePixelRatio) : X() && (i.style.zoom = "reset");
    var c = o.createElement("div");
    return c.textContent = oe([], Array(n / 20 << 0), !0).map(function() {
      return "word";
    }).join(" "), i.appendChild(c), e(o, i);
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}
function jn() {
  var e, n = document.createElement("canvas"), t = (e = n.getContext("webgl")) !== null && e !== void 0 ? e : n.getContext("experimental-webgl");
  if (t && "getExtension" in t) {
    var r = t.getExtension("WEBGL_debug_renderer_info");
    if (r)
      return {
        vendor: (t.getParameter(r.UNMASKED_VENDOR_WEBGL) || "").toString(),
        renderer: (t.getParameter(r.UNMASKED_RENDERER_WEBGL) || "").toString()
      };
  }
}
function Pn() {
  return navigator.pdfViewerEnabled;
}
function Tn() {
  var e = new Float32Array(1), n = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], n[3];
}
var Hn = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: Je,
  domBlockers: Ln,
  fontPreferences: Yn,
  audio: Ie,
  screenFrame: cn,
  osCpu: _e,
  languages: qe,
  colorDepth: $e,
  deviceMemory: en,
  screenResolution: nn,
  hardwareConcurrency: un,
  timezone: sn,
  sessionStorage: fn,
  localStorage: dn,
  indexedDB: vn,
  openDatabase: mn,
  cpuClass: hn,
  platform: pn,
  plugins: ze,
  canvas: Ne,
  touchSupport: Ke,
  vendor: gn,
  vendorFlavors: bn,
  cookiesEnabled: yn,
  colorGamut: Vn,
  invertedColors: Fn,
  forcedColors: kn,
  monochrome: Zn,
  contrast: Mn,
  reducedMotion: Rn,
  hdr: An,
  math: Gn,
  videoCard: jn,
  pdfViewerEnabled: Pn,
  architecture: Tn
};
function Dn(e) {
  return Fe(Hn, e, []);
}
var Jn = "$ if upgrade to Pro: https://fpjs.dev/pro";
function zn(e) {
  var n = Nn(e), t = Bn(n);
  return { score: n, comment: Jn.replace(/\$/g, "".concat(t)) };
}
function Nn(e) {
  if (fe())
    return 0.4;
  if (X())
    return U() ? 0.5 : 0.3;
  var n = e.platform.value || "";
  return /^Win/.test(n) ? 0.6 : /^Mac/.test(n) ? 0.5 : 0.7;
}
function Bn(e) {
  return se(0.99 + 0.01 * e, 1e-4);
}
function En(e) {
  for (var n = "", t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
    var o = r[t], i = e[o], a = i.error ? "error" : JSON.stringify(i.value);
    n += "".concat(n ? "|" : "").concat(o.replace(/([:|\\])/g, "\\$1"), ":").concat(a);
  }
  return n;
}
function ve(e) {
  return JSON.stringify(e, function(n, t) {
    return t instanceof Error ? we(t) : t;
  }, 2);
}
function me(e) {
  return ye(En(e));
}
function On(e) {
  var n, t = zn(e);
  return {
    get visitorId() {
      return n === void 0 && (n = me(this.components)), n;
    },
    set visitorId(r) {
      n = r;
    },
    confidence: t,
    components: e,
    version: ce
  };
}
function Un(e) {
  return e === void 0 && (e = 50), be(e, e * 2);
}
function Qn(e, n) {
  var t = Date.now();
  return {
    get: function(r) {
      return k(this, void 0, void 0, function() {
        var o, i, a;
        return W(this, function(c) {
          switch (c.label) {
            case 0:
              return o = Date.now(), [4, e()];
            case 1:
              return i = c.sent(), a = On(i), (n || r?.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(a.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(o - t, `
visitorId: `).concat(a.visitorId, `
components: `).concat(ve(i), "\n```")), [2, a];
          }
        });
      });
    }
  };
}
function Kn() {
  if (!(window.__fpjs_d_m || Math.random() >= 1e-3))
    try {
      var e = new XMLHttpRequest();
      e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(ce, "/npm-monitoring"), !0), e.send();
    } catch (n) {
      console.error(n);
    }
}
function _n(e) {
  var n = e === void 0 ? {} : e, t = n.delayFallback, r = n.debug, o = n.monitoring, i = o === void 0 ? !0 : o;
  return k(this, void 0, void 0, function() {
    var a;
    return W(this, function(c) {
      switch (c.label) {
        case 0:
          return i && Kn(), [4, Un(t)];
        case 1:
          return c.sent(), a = Dn({ debug: r }), [2, Qn(a, r)];
      }
    });
  });
}
var $n = { load: _n, hashComponents: me, componentsToDebugString: ve };
export {
  ve as componentsToDebugString,
  $n as default,
  Ae as getFullscreenElement,
  on as getScreenFrame,
  me as hashComponents,
  fe as isAndroid,
  O as isChromium,
  U as isDesktopSafari,
  ke as isEdgeHTML,
  We as isGecko,
  le as isTrident,
  X as isWebKit,
  _n as load,
  Fe as loadSources,
  Un as prepareForSources,
  Hn as sources,
  de as withIframe
};
//# sourceMappingURL=index.es32.js.map
