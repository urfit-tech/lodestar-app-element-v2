import { maybe as n } from "./index.es191.js";
const r = n(function() {
  return globalThis;
}) || n(function() {
  return window;
}) || n(function() {
  return self;
}) || n(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
n(function() {
  return n.constructor("return this")();
});
export {
  r as default
};
//# sourceMappingURL=index.es94.js.map
