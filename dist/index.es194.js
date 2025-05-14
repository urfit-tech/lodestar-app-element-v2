import { __module as T } from "./index.es292.js";
import { __require as X } from "./index.es195.js";
import { __require as c } from "./index.es293.js";
var D;
function f() {
  return D ? T.exports : (D = 1, function(C, N) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: e,
      MAX_SAFE_BUILD_LENGTH: r,
      MAX_LENGTH: P
    } = X(), F = c();
    N = C.exports = {};
    const t = N.re = [], G = N.safeRe = [], E = N.src = [], n = N.safeSrc = [], I = N.t = {};
    let U = 0;
    const S = "[a-zA-Z0-9-]", M = [
      ["\\s", 1],
      ["\\d", P],
      [S, r]
    ], o = (O) => {
      for (const [L, A] of M)
        O = O.split(`${L}*`).join(`${L}{0,${A}}`).split(`${L}+`).join(`${L}{1,${A}}`);
      return O;
    }, R = (O, L, A) => {
      const s = o(L), $ = U++;
      F(O, $, L), I[O] = $, E[$] = L, n[$] = s, t[$] = new RegExp(L, A ? "g" : void 0), G[$] = new RegExp(s, A ? "g" : void 0);
    };
    R("NUMERICIDENTIFIER", "0|[1-9]\\d*"), R("NUMERICIDENTIFIERLOOSE", "\\d+"), R("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), R("MAINVERSION", `(${E[I.NUMERICIDENTIFIER]})\\.(${E[I.NUMERICIDENTIFIER]})\\.(${E[I.NUMERICIDENTIFIER]})`), R("MAINVERSIONLOOSE", `(${E[I.NUMERICIDENTIFIERLOOSE]})\\.(${E[I.NUMERICIDENTIFIERLOOSE]})\\.(${E[I.NUMERICIDENTIFIERLOOSE]})`), R("PRERELEASEIDENTIFIER", `(?:${E[I.NUMERICIDENTIFIER]}|${E[I.NONNUMERICIDENTIFIER]})`), R("PRERELEASEIDENTIFIERLOOSE", `(?:${E[I.NUMERICIDENTIFIERLOOSE]}|${E[I.NONNUMERICIDENTIFIER]})`), R("PRERELEASE", `(?:-(${E[I.PRERELEASEIDENTIFIER]}(?:\\.${E[I.PRERELEASEIDENTIFIER]})*))`), R("PRERELEASELOOSE", `(?:-?(${E[I.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${E[I.PRERELEASEIDENTIFIERLOOSE]})*))`), R("BUILDIDENTIFIER", `${S}+`), R("BUILD", `(?:\\+(${E[I.BUILDIDENTIFIER]}(?:\\.${E[I.BUILDIDENTIFIER]})*))`), R("FULLPLAIN", `v?${E[I.MAINVERSION]}${E[I.PRERELEASE]}?${E[I.BUILD]}?`), R("FULL", `^${E[I.FULLPLAIN]}$`), R("LOOSEPLAIN", `[v=\\s]*${E[I.MAINVERSIONLOOSE]}${E[I.PRERELEASELOOSE]}?${E[I.BUILD]}?`), R("LOOSE", `^${E[I.LOOSEPLAIN]}$`), R("GTLT", "((?:<|>)?=?)"), R("XRANGEIDENTIFIERLOOSE", `${E[I.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), R("XRANGEIDENTIFIER", `${E[I.NUMERICIDENTIFIER]}|x|X|\\*`), R("XRANGEPLAIN", `[v=\\s]*(${E[I.XRANGEIDENTIFIER]})(?:\\.(${E[I.XRANGEIDENTIFIER]})(?:\\.(${E[I.XRANGEIDENTIFIER]})(?:${E[I.PRERELEASE]})?${E[I.BUILD]}?)?)?`), R("XRANGEPLAINLOOSE", `[v=\\s]*(${E[I.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[I.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[I.XRANGEIDENTIFIERLOOSE]})(?:${E[I.PRERELEASELOOSE]})?${E[I.BUILD]}?)?)?`), R("XRANGE", `^${E[I.GTLT]}\\s*${E[I.XRANGEPLAIN]}$`), R("XRANGELOOSE", `^${E[I.GTLT]}\\s*${E[I.XRANGEPLAINLOOSE]}$`), R("COERCEPLAIN", `(^|[^\\d])(\\d{1,${e}})(?:\\.(\\d{1,${e}}))?(?:\\.(\\d{1,${e}}))?`), R("COERCE", `${E[I.COERCEPLAIN]}(?:$|[^\\d])`), R("COERCEFULL", E[I.COERCEPLAIN] + `(?:${E[I.PRERELEASE]})?(?:${E[I.BUILD]})?(?:$|[^\\d])`), R("COERCERTL", E[I.COERCE], !0), R("COERCERTLFULL", E[I.COERCEFULL], !0), R("LONETILDE", "(?:~>?)"), R("TILDETRIM", `(\\s*)${E[I.LONETILDE]}\\s+`, !0), N.tildeTrimReplace = "$1~", R("TILDE", `^${E[I.LONETILDE]}${E[I.XRANGEPLAIN]}$`), R("TILDELOOSE", `^${E[I.LONETILDE]}${E[I.XRANGEPLAINLOOSE]}$`), R("LONECARET", "(?:\\^)"), R("CARETTRIM", `(\\s*)${E[I.LONECARET]}\\s+`, !0), N.caretTrimReplace = "$1^", R("CARET", `^${E[I.LONECARET]}${E[I.XRANGEPLAIN]}$`), R("CARETLOOSE", `^${E[I.LONECARET]}${E[I.XRANGEPLAINLOOSE]}$`), R("COMPARATORLOOSE", `^${E[I.GTLT]}\\s*(${E[I.LOOSEPLAIN]})$|^$`), R("COMPARATOR", `^${E[I.GTLT]}\\s*(${E[I.FULLPLAIN]})$|^$`), R("COMPARATORTRIM", `(\\s*)${E[I.GTLT]}\\s*(${E[I.LOOSEPLAIN]}|${E[I.XRANGEPLAIN]})`, !0), N.comparatorTrimReplace = "$1$2$3", R("HYPHENRANGE", `^\\s*(${E[I.XRANGEPLAIN]})\\s+-\\s+(${E[I.XRANGEPLAIN]})\\s*$`), R("HYPHENRANGELOOSE", `^\\s*(${E[I.XRANGEPLAINLOOSE]})\\s+-\\s+(${E[I.XRANGEPLAINLOOSE]})\\s*$`), R("STAR", "(<|>)?=?\\s*\\*"), R("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), R("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }(T, T.exports), T.exports);
}
export {
  f as __require
};
//# sourceMappingURL=index.es194.js.map
