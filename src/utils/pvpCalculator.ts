import { getCpmForLevel, LEVEL_CPM_LIST } from '../data/cpm';
import { LEAGUES, LeagueId, PokemonSpecies } from '../data/pokemon';

export type MaxLevelCap = 40 | 41 | 50 | 51;

export interface IvSpreadResult {
  atkIv: number;
  defIv: number;
  staIv: number;
  level: number;
  cp: number;
  atk: number;
  def: number;
  hp: number;
  statProduct: number;
  rank: number;
  totalSpreads: number;
  statProdPct: number;
  eligible: boolean;
}

export type TierLabel =
  | 'Rank #1 Optimal'
  | 'Elite (Top 1%)'
  | 'Great (Top 5%)'
  | 'Solid (Top 15%)'
  | 'Standard'
  | 'Ineligible';

export type TierTone = 'gold' | 'cyan' | 'emerald' | 'slate' | 'rose';

export interface PvpEvaluation {
  selected: IvSpreadResult;
  best: IvSpreadResult;
  allRanked: IvSpreadResult[];
  tierLabel: TierLabel;
  tierTone: TierTone;
}

export function computeCp(
  baseAtk: number,
  baseDef: number,
  baseSta: number,
  atkIv: number,
  defIv: number,
  staIv: number,
  cpm: number
): number {
  const a = baseAtk + atkIv;
  const d = Math.sqrt(baseDef + defIv);
  const s = Math.sqrt(baseSta + staIv);
  const raw = Math.floor((a * d * s * cpm * cpm) / 10);
  return Math.max(10, raw);
}

export function computeStatsAtLevel(
  species: PokemonSpecies,
  atkIv: number,
  defIv: number,
  staIv: number,
  level: number
): { cp: number; atk: number; def: number; hp: number; statProduct: number } {
  const cpm = getCpmForLevel(level);
  const { atk: bAtk, def: bDef, sta: bSta } = species;
  const cp = computeCp(bAtk, bDef, bSta, atkIv, defIv, staIv, cpm);
  const atk = (bAtk + atkIv) * cpm;
  const def = (bDef + defIv) * cpm;
  const hp = Math.max(10, Math.floor((bSta + staIv) * cpm));
  const statProduct = atk * def * hp;
  return { cp, atk, def, hp, statProduct };
}

function findOptimalLevelForCap(
  species: PokemonSpecies,
  atkIv: number,
  defIv: number,
  staIv: number,
  cpCap: number,
  maxLevel: MaxLevelCap
): {
  level: number;
  cp: number;
  atk: number;
  def: number;
  hp: number;
  statProduct: number;
  eligible: boolean;
} {
  if (!Number.isFinite(cpCap)) {
    const stats = computeStatsAtLevel(species, atkIv, defIv, staIv, maxLevel);
    return { level: maxLevel, ...stats, eligible: true };
  }

  const maxIdx = Math.round((maxLevel - 1) * 2);
  let lo = 0;
  let hi = maxIdx;
  let bestIdx = -1;

  const { atk: bAtk, def: bDef, sta: bSta } = species;

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const entry = LEVEL_CPM_LIST[mid];
    const cp = computeCp(bAtk, bDef, bSta, atkIv, defIv, staIv, entry.cpm);
    if (cp <= cpCap) {
      bestIdx = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if (bestIdx === -1) {
    const lv1 = computeStatsAtLevel(species, atkIv, defIv, staIv, 1);
    return { level: 1, ...lv1, eligible: false };
  }

  const level = LEVEL_CPM_LIST[bestIdx].level;
  const stats = computeStatsAtLevel(species, atkIv, defIv, staIv, level);
  return { level, ...stats, eligible: true };
}

export function classifyTier(
  rank: number,
  totalSpreads: number,
  eligible: boolean
): { tierLabel: TierLabel; tierTone: TierTone } {
  if (!eligible) return { tierLabel: 'Ineligible', tierTone: 'rose' };
  if (rank === 1) return { tierLabel: 'Rank #1 Optimal', tierTone: 'gold' };
  const pctRank = (rank / totalSpreads) * 100;
  if (pctRank <= 1.2) return { tierLabel: 'Elite (Top 1%)', tierTone: 'cyan' };
  if (pctRank <= 5.0) return { tierLabel: 'Great (Top 5%)', tierTone: 'emerald' };
  if (pctRank <= 15.0) return { tierLabel: 'Solid (Top 15%)', tierTone: 'slate' };
  return { tierLabel: 'Standard', tierTone: 'slate' };
}

export function evaluatePvpRankings(
  species: PokemonSpecies,
  leagueId: LeagueId,
  atkIv: number,
  defIv: number,
  staIv: number,
  maxLevel: MaxLevelCap,
  ivFloor: number
): PvpEvaluation {
  const cpCap = LEAGUES[leagueId].cpCap;
  const clampedFloor = Math.max(0, Math.min(15, ivFloor));

  const spreads: IvSpreadResult[] = [];
  for (let a = clampedFloor; a <= 15; a++) {
    for (let d = clampedFloor; d <= 15; d++) {
      for (let s = clampedFloor; s <= 15; s++) {
        const res = findOptimalLevelForCap(species, a, d, s, cpCap, maxLevel);
        spreads.push({
          atkIv: a,
          defIv: d,
          staIv: s,
          level: res.level,
          cp: res.cp,
          atk: res.atk,
          def: res.def,
          hp: res.hp,
          statProduct: res.statProduct,
          rank: 0,
          totalSpreads: 0,
          statProdPct: 0,
          eligible: res.eligible,
        });
      }
    }
  }

  spreads.sort((x, y) => {
    if (x.eligible !== y.eligible) return x.eligible ? -1 : 1;
    if (Math.abs(y.statProduct - x.statProduct) > 1e-6) {
      return y.statProduct - x.statProduct;
    }
    if (y.cp !== x.cp) return y.cp - x.cp;
    if (y.hp !== x.hp) return y.hp - x.hp;
    return y.atk - x.atk;
  });

  const totalSpreads = spreads.length;
  const maxStatProd = spreads[0]?.statProduct || 1;

  let selectedResult: IvSpreadResult | null = null;

  for (let i = 0; i < spreads.length; i++) {
    const item = spreads[i];
    item.rank = i + 1;
    item.totalSpreads = totalSpreads;
    item.statProdPct = (item.statProduct / maxStatProd) * 100;

    if (item.atkIv === atkIv && item.defIv === defIv && item.staIv === staIv) {
      selectedResult = item;
    }
  }

  if (!selectedResult) {
    const res = findOptimalLevelForCap(species, atkIv, defIv, staIv, cpCap, maxLevel);
    let virtualRank = 1;
    for (let i = 0; i < spreads.length; i++) {
      if (spreads[i].statProduct > res.statProduct) {
        virtualRank++;
      } else {
        break;
      }
    }
    selectedResult = {
      atkIv,
      defIv,
      staIv,
      level: res.level,
      cp: res.cp,
      atk: res.atk,
      def: res.def,
      hp: res.hp,
      statProduct: res.statProduct,
      rank: virtualRank,
      totalSpreads,
      statProdPct: (res.statProduct / maxStatProd) * 100,
      eligible: res.eligible,
    };
  }

  const best = spreads[0];
  const { tierLabel, tierTone } = classifyTier(
    selectedResult.rank,
    totalSpreads,
    selectedResult.eligible
  );

  return {
    selected: selectedResult,
    best,
    allRanked: spreads,
    tierLabel,
    tierTone,
  };
}
