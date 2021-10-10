import { Random, browserCrypto, nodeCrypto } from "random-js";

let crypto;
if (typeof window !== "undefined") {
  crypto = browserCrypto;
} else {
  crypto = nodeCrypto;
}

const random = new Random(crypto);

export default random;
