import { Random } from "random-js";

let crypto;
if (typeof window !== "undefined") {
  crypto = require("random-js").browserCrypto;
} else {
  crypto = require("random-js").nodeCrypto;
}

const random = new Random(crypto);

export default random;
