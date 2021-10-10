import { YaliState } from "../ducks/yali";

export type ConsumableType = {
  src: string;
  type: string;
  text: string;
  positive: boolean;
  consume: (yali: YaliState) => void;
};

const consumables = new Map<string, ConsumableType>();

consumables.set("beer", {
  src: require("../assets/images/limu.png").default,
  type: "limu",
  text: "Limu",
  positive: true,
  consume: (yali) => {
    yali.fullness = yali.fullness + 1;
    yali.hydration = yali.hydration + 10;
  }
});

consumables.set("poop", {
  src: require("../assets/images/poop.png").default,
  type: "puuppa",
  text: "Puuppa",
  positive: true,
  consume: (yali) => {
    yali.fullness = yali.fullness + 100;
    yali.hydration = yali.hydration + 30;
  }
});

consumables.set("maito", {
  src: require("../assets/images/maito.png").default,
  type: "maito",
  text: "Maito",
  positive: true,
  consume: (yali) => {
    yali.fullness = yali.fullness + 50;
    yali.hydration = yali.hydration + 50;
  }
});

consumables.set("keksi", {
  src: require("../assets/images/keksi.png").default,
  type: "keksi",
  text: "Keksula",
  positive: false,
  consume: (yali) => {
    yali.fullness = yali.fullness - 200;
    yali.hydration = yali.hydration - 200;
  }
});
consumables.set("chickenleg", {
  src: require("../assets/images/chickenleg.png").default,
  type: "chickenleg",
  text: "Kanankoipi",
  positive: true,
  consume: (yali) => {
    yali.fullness = yali.fullness + 15;
  }
});
consumables.set("magnum", {
  src: require("../assets/images/magnum.png").default,
  type: "magnum",
  text: "Valkoinen Magnum",
  positive: true,
  consume: (yali) => {
    yali.fullness = yali.fullness + 33;
  }
});

consumables.set("ohrapuuro", {
  src: require("../assets/images/ohrapuuro.png").default,
  type: "ohrapuuro",
  text: "Ohrapuuro",
  positive: false,
  consume: (yali) => {
    yali.fullness = yali.fullness - 25;
  }
});
consumables.set("preschooler", {
  src: require("../assets/images/esikoululainen.jpg").default,
  type: "esikoululainen",
  text: "Esikoululainen",
  positive: true,
  consume: (yali) => {
    yali.fullness = yali.fullness + 20;
    yali.hydration = yali.hydration + 20;
  }
});

export default consumables;
