import { __require as d } from "./index.es166.js";
import { __require as E } from "./index.es167.js";
var i, c;
function A() {
  if (c) return i;
  c = 1;
  const m = d(), u = E(), l = {
    ec: ["ES256", "ES384", "ES512"],
    rsa: ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
    "rsa-pss": ["PS256", "PS384", "PS512"]
  }, p = {
    ES256: "prime256v1",
    ES384: "secp384r1",
    ES512: "secp521r1"
  };
  return i = function(e, t) {
    if (!e || !t) return;
    const r = t.asymmetricKeyType;
    if (!r) return;
    const s = l[r];
    if (!s)
      throw new Error(`Unknown key type "${r}".`);
    if (!s.includes(e))
      throw new Error(`"alg" parameter for "${r}" key type must be one of: ${s.join(", ")}.`);
    if (m)
      switch (r) {
        case "ec":
          const y = t.asymmetricKeyDetails.namedCurve, o = p[e];
          if (y !== o)
            throw new Error(`"alg" parameter "${e}" requires curve "${o}".`);
          break;
        case "rsa-pss":
          if (u) {
            const a = parseInt(e.slice(-3), 10), { hashAlgorithm: n, mgf1HashAlgorithm: f, saltLength: S } = t.asymmetricKeyDetails;
            if (n !== `sha${a}` || f !== n)
              throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${e}.`);
            if (S !== void 0 && S > a >> 3)
              throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${e}.`);
          }
          break;
      }
  }, i;
}
export {
  A as __require
};
//# sourceMappingURL=index.es81.js.map
