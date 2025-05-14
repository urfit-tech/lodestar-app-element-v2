import { __module as e } from "./index.es60.js";
var a = e.exports, u;
function i() {
  return u ? e.exports : (u = 1, function(_, o) {
    (function(n, r) {
      _.exports = r();
    })(a, function() {
      return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(n) {
        var r = ["th", "st", "nd", "rd"], t = n % 100;
        return "[" + n + (r[(t - 20) % 10] || r[t] || r[0]) + "]";
      } };
    });
  }(e), e.exports);
}
export {
  i as __require
};
//# sourceMappingURL=index.es59.js.map
