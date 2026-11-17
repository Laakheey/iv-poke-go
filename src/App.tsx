import { useEffect, useMemo, useState } from 'react';
import {
  Heart,
  Layers,
  Minus,
  Plus,
  Shield,
  SlidersHorizontal,
  Swords,
  Trophy,
} from 'lucide-react';
import { PokemonPortrait } from './components/PokemonPortrait';
import { PokemonSearchSelect } from './components/PokemonSearchSelect';
import { RankingsTable } from './components/RankingsTable';
import { ResilientImage } from './components/ResilientImage';
import { TypeIcon } from './components/TypeIcon';
import {
  formatPokemonDisplayName,
  LEAGUES,
  LeagueId,
  POKEMON_DEX,
  PokemonSpecies,
} from './data/pokemon';
import { evaluatePvpRankings, MaxLevelCap, TierTone } from './utils/pvpCalculator';

const BRAND_CREST_IMG = '/src/assets/images/brand_arena_crest_1794922601740.jpg';
const SPOTLIGHT_BG_IMG = '/src/assets/images/pokemon_spotlight_bg_1794922602585.jpg';

const LEAGUE_EMBLEMS: Record<LeagueId, string> = {
  great: '/src/assets/images/league_great_emblem_1794922601954.jpg',
  ultra: '/src/assets/images/league_ultra_emblem_1794922602996.jpg',
  master: '/src/assets/images/league_master_emblem_1794922603002.jpg',
};

const IV_FLOORS = [
  { value: 0, label: '0 · Wild' },
  { value: 1, label: '1 · Good Friend' },
  { value: 2, label: '2 · Great Friend' },
  { value: 3, label: '3 · Ultra Friend' },
  { value: 4, label: '4 · Weather Boost' },
  { value: 5, label: '5 · Best Friend' },
  { value: 6, label: '6 · Shadow Raid' },
  { value: 10, label: '10 · Raid / Egg / Research' },
  { value: 12, label: '12 · Lucky Trade' },
];

const TIER_TEXT_CLASSES: Record<TierTone, string> = {
  gold: 'text-amber-300',
  cyan: 'text-sky-300',
  emerald: 'text-emerald-300',
  slate: 'text-slate-300',
  rose: 'text-rose-400',
};

export default function App() {
  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = canonicalUrl;
  }, []);
  const defaultSpecies = useMemo(
    () => POKEMON_DEX.find((p) => p.dex === 184 && !p.form) ?? POKEMON_DEX[0],
    []
  );

  const [species, setSpecies] = useState<PokemonSpecies>(defaultSpecies);
  const [activeLeague, setActiveLeague] = useState<LeagueId>('great');
  const [atkIv, setAtkIv] = useState<number>(0);
  const [defIv, setDefIv] = useState<number>(15);
  const [staIv, setStaIv] = useState<number>(15);
  const [maxLevel, setMaxLevel] = useState<MaxLevelCap>(50);
  const [ivFloor, setIvFloor] = useState<number>(0);

  const greatEval = useMemo(
    () => evaluatePvpRankings(species, 'great', atkIv, defIv, staIv, maxLevel, ivFloor),
    [species, atkIv, defIv, staIv, maxLevel, ivFloor]
  );
  const ultraEval = useMemo(
    () => evaluatePvpRankings(species, 'ultra', atkIv, defIv, staIv, maxLevel, ivFloor),
    [species, atkIv, defIv, staIv, maxLevel, ivFloor]
  );
  const masterEval = useMemo(
    () => evaluatePvpRankings(species, 'master', atkIv, defIv, staIv, maxLevel, ivFloor),
    [species, atkIv, defIv, staIv, maxLevel, ivFloor]
  );

  const leagueEvals = {
    great: greatEval,
    ultra: ultraEval,
    master: masterEval,
  };

  const activeEval = leagueEvals[activeLeague];

  const handleIvInput = (stat: 'atk' | 'def' | 'sta', raw: string) => {
    if (raw === '') {
      if (stat === 'atk') setAtkIv(0);
      else if (stat === 'def') setDefIv(0);
      else setStaIv(0);
      return;
    }
    const parsed = parseInt(raw, 10);
    if (Number.isNaN(parsed)) return;
    const clamped = Math.max(0, Math.min(15, parsed));
    if (stat === 'atk') setAtkIv(clamped);
    else if (stat === 'def') setDefIv(clamped);
    else setStaIv(clamped);
  };

  const handleStepIv = (stat: 'atk' | 'def' | 'sta', delta: number) => {
    if (stat === 'atk') setAtkIv((v) => Math.max(0, Math.min(15, v + delta)));
    else if (stat === 'def') setDefIv((v) => Math.max(0, Math.min(15, v + delta)));
    else setStaIv((v) => Math.max(0, Math.min(15, v + delta)));
  };

  const handleApplySpread = (a: number, d: number, s: number) => {
    setAtkIv(a);
    setDefIv(d);
    setStaIv(s);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col">
      {/* Top Bar (3-zone contract with brand emblem image) */}
      <header className="border-b border-slate-800 bg-[#090e1a]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-8">
          <div className="flex items-center gap-2.5 shrink-0">
            <ResilientImage
              src={BRAND_CREST_IMG}
              alt="GO Arena IV emblem"
              className="w-8 h-8 rounded-lg object-cover border border-white/15 shrink-0"
              fallbackLabel="IV"
            />
            <span className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0">
              GO Arena IV
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 whitespace-nowrap">
            <span>{POKEMON_DEX.length.toLocaleString()} Released Species</span>
            <span aria-hidden="true">·</span>
            <span>Great, Ultra &amp; Master League Rankings</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() =>
                handleApplySpread(
                  activeEval.best.atkIv,
                  activeEval.best.defIv,
                  activeEval.best.staIv
                )
              }
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>
                Load {LEAGUES[activeLeague].shortName} Rank #1 ({activeEval.best.atkIv}/
                {activeEval.best.defIv}/{activeEval.best.staIv})
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Section 1: Pokémon Spotlight Banner + Search & League Rules */}
        <section className="relative bg-[#0f172a] border border-slate-800 rounded-xl overflow-visible">
          {/* Atmospheric Arena Backdrop Image with Contrast Scrim */}
          <div className="relative rounded-t-xl overflow-hidden border-b border-slate-800">
            <ResilientImage
              src={SPOTLIGHT_BG_IMG}
              alt="Battle arena stadium backdrop"
              className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090e1a]/95 via-[#090e1a]/80 to-[#090e1a]/92 pointer-events-none" />

            <div className="relative z-10 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <PokemonPortrait species={species} size="lg" />

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="font-display text-2xl font-bold text-white tracking-tight truncate">
                      {formatPokemonDisplayName(species)}
                    </h1>
                    {species.form === 'Mega' && (
                      <span className="text-xs font-semibold text-amber-300 whitespace-nowrap">
                        · Mega Evolution
                      </span>
                    )}
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                    <span className="font-mono tabular-nums text-slate-400">
                      Pokédex #{species.dex}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <div className="inline-flex items-center gap-2.5">
                      {species.types.map((t, idx) => (
                        <span key={t} className="inline-flex items-center gap-1.5 font-medium">
                          {idx > 0 && <span className="text-slate-600">/</span>}
                          <TypeIcon type={t} size={14} />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Base Stats Readout with Icons */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 px-4 py-2.5 bg-slate-950/80 border border-white/10 rounded-lg shrink-0">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Swords className="w-3 h-3 text-rose-400" />
                    <span>Base ATK</span>
                  </div>
                  <div className="font-mono tabular-nums text-base font-bold text-white mt-0.5">
                    {species.atk}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Shield className="w-3 h-3 text-sky-400" />
                    <span>Base DEF</span>
                  </div>
                  <div className="font-mono tabular-nums text-base font-bold text-white mt-0.5">
                    {species.def}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Heart className="w-3 h-3 text-emerald-400" />
                    <span>Base STA</span>
                  </div>
                  <div className="font-mono tabular-nums text-base font-bold text-white mt-0.5">
                    {species.sta}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search & League Rules Controls */}
          <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
            <div className="lg:col-span-6">
              <PokemonSearchSelect selected={species} onSelect={setSpecies} />
            </div>

            <div className="lg:col-span-3">
              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span>Max Level Cap</span>
              </span>
              <div className="grid grid-cols-4 gap-1 p-0.5 bg-slate-900 border border-slate-800 rounded-lg">
                {([40, 41, 50, 51] as MaxLevelCap[]).map((cap) => (
                  <button
                    key={cap}
                    type="button"
                    onClick={() => setMaxLevel(cap)}
                    className={`py-2 text-xs font-mono tabular-nums rounded-md transition-colors cursor-pointer ${
                      maxLevel === cap
                        ? 'bg-slate-100 text-slate-950 font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <label
                htmlFor="iv-floor"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                <span>IV Floor</span>
              </label>
              <select
                id="iv-floor"
                value={ivFloor}
                onChange={(e) => setIvFloor(Number(e.target.value))}
                className="w-full px-3 py-2.5 text-xs font-medium text-white bg-slate-900 border border-slate-700/80 rounded-lg focus:outline-none focus:border-sky-400 cursor-pointer"
              >
                {IV_FLOORS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Section 2: Numeric IV Entry (iv4u style) */}
        <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="font-display text-base font-bold text-white">
                Individual Values (0–15)
              </h2>
              <p className="text-xs text-slate-400">
                Type numeric IVs directly or adjust with steppers and sliders.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleApplySpread(0, 15, 15)}
                className="px-2.5 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-700 rounded-md hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              >
                0/15/15
              </button>
              <button
                type="button"
                onClick={() => handleApplySpread(10, 10, 10)}
                className="px-2.5 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-700 rounded-md hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              >
                10/10/10
              </button>
              <button
                type="button"
                onClick={() => handleApplySpread(12, 12, 12)}
                className="px-2.5 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-700 rounded-md hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              >
                12/12/12
              </button>
              <button
                type="button"
                onClick={() => handleApplySpread(15, 15, 15)}
                className="px-2.5 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-700 rounded-md hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              >
                15/15/15
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(
              [
                {
                  key: 'atk',
                  label: 'Attack IV',
                  value: atkIv,
                  icon: <Swords className="w-4 h-4 text-rose-400" />,
                },
                {
                  key: 'def',
                  label: 'Defense IV',
                  value: defIv,
                  icon: <Shield className="w-4 h-4 text-sky-400" />,
                },
                {
                  key: 'sta',
                  label: 'Stamina IV',
                  value: staIv,
                  icon: <Heart className="w-4 h-4 text-emerald-400" />,
                },
              ] as const
            ).map((item) => (
              <div
                key={item.key}
                className="bg-slate-900/60 border border-slate-800 rounded-lg p-3.5 space-y-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <label
                    htmlFor={`iv-num-${item.key}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </label>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleStepIv(item.key, -1)}
                      aria-label={`Decrease ${item.label}`}
                      className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>

                    <input
                      id={`iv-num-${item.key}`}
                      type="number"
                      min={0}
                      max={15}
                      step={1}
                      value={item.value}
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => handleIvInput(item.key, e.target.value)}
                      className="no-spinner w-14 h-8 text-center font-mono tabular-nums text-base font-bold text-white bg-slate-950 border border-slate-600 rounded-md focus:outline-none focus:border-sky-400"
                    />

                    <button
                      type="button"
                      onClick={() => handleStepIv(item.key, 1)}
                      aria-label={`Increase ${item.label}`}
                      className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <input
                  type="range"
                  min={0}
                  max={15}
                  step={1}
                  value={item.value}
                  aria-label={`${item.label} slider`}
                  onChange={(e) => handleIvInput(item.key, e.target.value)}
                  className="iv-slider w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Great / Ultra / Master League Live Evaluation Strip with League Emblems */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['great', 'ultra', 'master'] as LeagueId[]).map((id) => {
            const cfg = LEAGUES[id];
            const ev = leagueEvals[id];
            const isActive = activeLeague === id;
            const { selected, best, tierLabel, tierTone } = ev;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveLeague(id)}
                className={`text-left p-4 rounded-xl border transition-colors cursor-pointer ${
                  isActive
                    ? `bg-[#111b33] ${cfg.accentBorder}`
                    : 'bg-[#0f172a] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <ResilientImage
                      src={LEAGUE_EMBLEMS[id]}
                      alt={`${cfg.name} emblem`}
                      className="w-12 h-12 rounded-lg object-cover border border-white/15 shrink-0"
                      fallbackLabel={cfg.shortName}
                    />
                    <div className="min-w-0">
                      <div className={`text-xs font-semibold ${cfg.accentText} truncate`}>
                        {cfg.name} · {cfg.cpLabel}
                      </div>
                      <div className="mt-0.5 flex items-baseline gap-1.5">
                        <span className="font-display text-2xl font-bold tabular-nums text-white">
                          Rank #{selected.rank}
                        </span>
                        <span className="font-mono tabular-nums text-xs text-slate-400">
                          / {selected.totalSpreads.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-mono tabular-nums text-lg font-bold text-white">
                      {selected.eligible ? `${selected.cp} CP` : 'Over Cap'}
                    </div>
                    <div className="font-mono tabular-nums text-xs text-slate-400">
                      Lv {selected.level}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className={`font-medium ${TIER_TEXT_CLASSES[tierTone]}`}>
                    {tierLabel}
                  </span>
                  <span className="font-mono tabular-nums font-semibold text-white">
                    {selected.statProdPct.toFixed(2)}% of #1
                  </span>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 grid grid-cols-4 gap-2 text-xs">
                  <div>
                    <div className="text-[11px] text-slate-500">ATK</div>
                    <div className="font-mono tabular-nums text-slate-200">
                      {selected.atk.toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">DEF</div>
                    <div className="font-mono tabular-nums text-slate-200">
                      {selected.def.toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">HP</div>
                    <div className="font-mono tabular-nums text-slate-200">
                      {selected.hp}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-slate-500">Best IV</div>
                    <div className="font-mono tabular-nums text-amber-300">
                      {best.atkIv}/{best.defIv}/{best.staIv}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </section>

        {/* Section 4: Active League Full Rankings Table */}
        <RankingsTable
          species={species}
          leagueId={activeLeague}
          maxLevel={maxLevel}
          ivFloor={ivFloor}
          allRanked={activeEval.allRanked}
          selectedAtk={atkIv}
          selectedDef={defIv}
          selectedSta={staIv}
          selectedRank={activeEval.selected.rank}
          onSelectSpread={handleApplySpread}
        />
      </main>
    </div>
  );
}
