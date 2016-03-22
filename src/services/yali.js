export const ITEM_TYPES = {
  CONSUMABLE: 'consumable'
};

export function calculateMood(yali) {

  let alcohol = yali.get('alcohol');
  let fullness = yali.get('fullness');

  return -100 + alcohol + fullness;

}

export function consume(yali, consumable) {

  switch (consumable) {

    case 'beer':
      return yali
        .update('alcohol', a => a + 10);

    case 'chickenleg':
      return yali
        .update('fullness', h => h + 20);

    default:
      return state;
  }
}
