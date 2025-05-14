import n from "./index.es80.js";
import t from "./index.es81.js";
import { unsafeStringify as e } from "./index.es79.js";
function g(f, m, a) {
  if (n.randomUUID && !f)
    return n.randomUUID();
  f = f || {};
  const r = f.random ?? f.rng?.() ?? t();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e(r);
}
export {
  g as default
};
//# sourceMappingURL=index.es30.js.map
