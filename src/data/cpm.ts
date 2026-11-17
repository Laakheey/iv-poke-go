// Official Pokémon GO CP Multiplier (CPM) values for integer levels 1 through 51.
// Half-levels (e.g. 1.5, 2.5, ..., 50.5) are computed via the canonical Niantic formula:
// CPM(L + 0.5) = sqrt((CPM(L)^2 + CPM(L + 1)^2) / 2)

const INTEGER_CPM: Record<number, number> = {
  1: 0.094,
  2: 0.16639787,
  3: 0.21573247,
  4: 0.25572005,
  5: 0.29024988,
  6: 0.3210876,
  7: 0.34921268,
  8: 0.3752356,
  9: 0.39956728,
  10: 0.4225,
  11: 0.44310755,
  12: 0.46279839,
  13: 0.48168495,
  14: 0.49985844,
  15: 0.51739395,
  16: 0.53435433,
  17: 0.55080054,
  18: 0.56675452,
  19: 0.58227891,
  20: 0.5974,
  21: 0.61215729,
  22: 0.62656713,
  23: 0.64065295,
  24: 0.65443563,
  25: 0.667934,
  26: 0.68116492,
  27: 0.69414365,
  28: 0.70688421,
  29: 0.71939909,
  30: 0.7317,
  31: 0.73776948,
  32: 0.74378943,
  33: 0.74976104,
  34: 0.75568551,
  35: 0.76156384,
  36: 0.76739717,
  37: 0.7731865,
  38: 0.77893275,
  39: 0.784637,
  40: 0.7903,
  41: 0.7953,
  42: 0.8003,
  43: 0.8053,
  44: 0.8103,
  45: 0.8153,
  46: 0.8203,
  47: 0.8253,
  48: 0.8303,
  49: 0.8353,
  50: 0.8403,
  51: 0.8453,
};

export interface LevelCpmEntry {
  level: number;
  cpm: number;
}

export const LEVEL_CPM_LIST: LevelCpmEntry[] = (() => {
  const entries: LevelCpmEntry[] = [];
  for (let lvl = 1; lvl <= 50; lvl++) {
    const c1 = INTEGER_CPM[lvl];
    entries.push({ level: lvl, cpm: c1 });
    const c2 = INTEGER_CPM[lvl + 1];
    entries.push({
      level: lvl + 0.5,
      cpm: Math.sqrt((c1 * c1 + c2 * c2) / 2),
    });
  }
  entries.push({ level: 51, cpm: INTEGER_CPM[51] });
  return entries;
})();

export function getCpmForLevel(level: number): number {
  const index = Math.round((level - 1) * 2);
  return LEVEL_CPM_LIST[index]?.cpm ?? INTEGER_CPM[50];
}
