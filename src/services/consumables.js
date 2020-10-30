import { Map } from "immutable";

const consumables = Map({
  beer: {
    src: require("../assets/images/limu.png").default,
    type: "limu",
    text: "Limu",
    positive: true,
    consume: (yali) =>
      yali.update("fullness", (f) => f + 1).update("alcohol", (a) => a + 10),
  },
  poop: {
    src: require("../assets/images/poop.png").default,
    type: "puuppa",
    text: "Puuppa",
    positive: true,
    consume: (yali) =>
      yali.update("fullness", (f) => f + 100).update("alcohol", (a) => a + 30),
  },
  maito: {
    src: require("../assets/images/maito.png").default,
    type: "maito",
    text: "Maito",
    positive: true,
    consume: (yali) =>
      yali.update("fullness", (f) => f + 50).update("alcohol", (a) => a + 50),
  },
  keksi: {
    src: require("../assets/images/keksi.png").default,
    type: "keksi",
    text: "Keksula",
    positive: false,
    consume: (yali) =>
      yali.update("fullness", (f) => f - 200).update("alcohol", (a) => a - 200),
  },
  chickenleg: {
    src: require("../assets/images/chickenleg.png").default,
    type: "chickenleg",
    text: "Kanankoipi",
    positive: true,
    consume: (yali) => yali.update("fullness", (f) => f + 15),
  },
  magnum: {
    src: require("../assets/images/magnum.png").default,
    type: "magnum",
    text: "Valkoinen Magnum",
    positive: true,
    consume: (yali) => yali.update("fullness", (f) => f + 33),
  },
  ohrapuuro: {
    src: require("../assets/images/ohrapuuro.png").default,
    type: "ohrapuuro",
    text: "Ohrapuuro",
    positive: false,
    consume: (yali) => yali.update("fullness", (f) => f - 25),
  },
  preschooler: {
    src: require("../assets/images/esikoululainen.jpg").default,
    type: "esikoululainen",
    text: "Esikoululainen",
    positive: true,
    consume: (yali) =>
      yali.update("fullness", (f) => f + 20).update("alcohol", (a) => a + 20),
  },
});

export default consumables;
