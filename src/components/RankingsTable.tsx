import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { formatPokemonDisplayName, LEAGUES, LeagueId, PokemonSpecies } from '../data/pokemon';
import { IvSpreadResult, MaxLevelCap } from '../utils/pvpCalculator';

export type TableMode = 'top100' | 'nearby' | 'all';

interface RankingsTableProps {
  species: PokemonSpecies;
  leagueId: LeagueId;
  maxLevel: MaxLevelCap;
  ivFloor: number;
  allRanked: IvSpreadResult[];
  selectedAtk: number;
  selectedDef: number;
  selectedSta: number;
  selectedRank: number;
  onSelectSpread: (atk: number, def: number, sta: number) => void;
}

function formatStatProd(sp: number): string {
  return Math.round(sp).toLocaleString();
}

export function RankingsTable({
  species,
  leagueId,
  maxLevel,
  ivFloor,
  allRanked,
  selectedAtk,
  selectedDef,
  selectedSta,
  selectedRank,
  onSelectSpread,
}: RankingsTableProps) {
  const [tableMode, setTableMode] = useState<TableMode>('top100');
  const [ivFilter, setIvFilter] = useState('');
  const [page, setPage] = useState(0);
  const pageSize = 50;

  const league = LEAGUES[leagueId];

  const baseRows = useMemo(() => {
    const q = ivFilter.trim();
    if (q) {
      // Allow filtering by "0/15/15" or "0 15" or single rank "#12"
      if (q.startsWith('#')) {
        const targetRank = Number(q.slice(1));
        if (!Number.isNaN(targetRank) && targetRank > 0) {
          return allRanked.filter((r) => r.rank === targetRank);
        }
      }
      const tokens = q.split(/[\s/,]+/).filter(Boolean);
      return allRanked.filter((r) => {
        if (tokens.length === 1) {
          const val = Number(tokens[0]);
          if (!Number.isNaN(val)) {
            return r.atkIv === val || r.defIv === val || r.staIv === val;
          }
        }
        if (tokens.length === 2) {
          return r.atkIv === Number(tokens[0]) && r.defIv === Number(tokens[1]);
        }
        if (tokens.length >= 3) {
          return (
            r.atkIv === Number(tokens[0]) &&
            r.defIv === Number(tokens[1]) &&
            r.staIv === Number(tokens[2])
          );
        }
        return true;
      });
    }

    if (tableMode === 'top100') {
      return allRanked.slice(0, 100);
    }
    if (tableMode === 'nearby') {
      const idx = Math.max(0, selectedRank - 1);
      const start = Math.max(0, idx - 15);
      const end = Math.min(allRanked.length, start + 35);
      return allRanked.slice(start, end);
    }
    return allRanked;
  }, [allRanked, ivFilter, selectedRank, tableMode]);

  const totalPages = Math.max(1, Math.ceil(baseRows.length / pageSize));
  const safePage = Math.min(page, totalPages - 1);
  const pagedRows = useMemo(
    () => baseRows.slice(safePage * pageSize, (safePage + 1) * pageSize),
    [baseRows, safePage]
  );

  return (
    <section className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden">
      {/* Table Header & Controls */}
      <div className="px-4 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-base font-bold text-white">
            {formatPokemonDisplayName(species)} · {league.name} Rankings
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Max Level {maxLevel} · IV Floor {ivFloor} · {allRanked.length.toLocaleString()} combinations · Click any row to load IVs
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* IV Filter Input */}
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
            <input
              type="text"
              value={ivFilter}
              onChange={(e) => {
                setIvFilter(e.target.value);
                setPage(0);
              }}
              placeholder="Filter IV (e.g. 0/15/15 or #10)"
              className="w-48 pl-8 pr-3 py-1.5 text-xs font-mono text-white bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:border-sky-400"
            />
          </div>

          {/* Mode Tabs */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-900 border border-slate-800 rounded-lg">
            {(
              [
                { id: 'top100', label: 'Top 100' },
                { id: 'nearby', label: 'Nearby' },
                { id: 'all', label: 'All' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setTableMode(tab.id);
                  setIvFilter('');
                  setPage(0);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  tableMode === tab.id && !ivFilter
                    ? 'bg-sky-500 text-slate-950 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Data Grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
            <tr>
              <th className="py-2.5 px-3.5 font-medium whitespace-nowrap">Rank</th>
              <th className="py-2.5 px-3 font-medium text-right whitespace-nowrap">ATK IV</th>
              <th className="py-2.5 px-3 font-medium text-right whitespace-nowrap">DEF IV</th>
              <th className="py-2.5 px-3 font-medium text-right whitespace-nowrap">STA IV</th>
              <th className="py-2.5 px-3 font-medium text-right whitespace-nowrap">Level</th>
              <th className="py-2.5 px-3 font-medium text-right whitespace-nowrap">CP</th>
              <th className="py-2.5 px-3 font-medium text-right whitespace-nowrap">Eff. ATK</th>
              <th className="py-2.5 px-3 font-medium text-right whitespace-nowrap">Eff. DEF</th>
              <th className="py-2.5 px-3 font-medium text-right whitespace-nowrap">HP</th>
              <th className="py-2.5 px-3 font-medium text-right whitespace-nowrap">Stat Prod</th>
              <th className="py-2.5 px-3.5 font-medium text-right whitespace-nowrap">% of #1</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70 font-mono tabular-nums">
            {pagedRows.length === 0 ? (
              <tr>
                <td colSpan={11} className="py-8 text-center font-sans text-sm text-slate-400">
                  No IV spreads matched &ldquo;{ivFilter}&rdquo;.
                </td>
              </tr>
            ) : (
              pagedRows.map((row) => {
                const isSelected =
                  row.atkIv === selectedAtk &&
                  row.defIv === selectedDef &&
                  row.staIv === selectedSta;
                return (
                  <tr
                    key={`${row.atkIv}-${row.defIv}-${row.staIv}`}
                    onClick={() => onSelectSpread(row.atkIv, row.defIv, row.staIv)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-sky-500/15 text-white'
                        : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <td className="py-2.5 px-3.5 font-semibold text-white whitespace-nowrap">
                      #{row.rank}
                      {isSelected && (
                        <span className="ml-2 font-sans text-[11px] font-medium text-sky-400">
                          Selected
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-right">{row.atkIv}</td>
                    <td className="py-2.5 px-3 text-right">{row.defIv}</td>
                    <td className="py-2.5 px-3 text-right">{row.staIv}</td>
                    <td className="py-2.5 px-3 text-right text-slate-200">{row.level}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-white">
                      {row.eligible ? row.cp : 'Over Cap'}
                    </td>
                    <td className="py-2.5 px-3 text-right">{row.atk.toFixed(1)}</td>
                    <td className="py-2.5 px-3 text-right">{row.def.toFixed(1)}</td>
                    <td className="py-2.5 px-3 text-right">{row.hp}</td>
                    <td className="py-2.5 px-3 text-right text-slate-300">
                      {formatStatProd(row.statProduct)}
                    </td>
                    <td
                      className={`py-2.5 px-3.5 text-right font-semibold ${
                        row.rank === 1
                          ? 'text-amber-300'
                          : row.statProdPct >= 98
                          ? 'text-sky-300'
                          : 'text-slate-300'
                      }`}
                    >
                      {row.statProdPct.toFixed(2)}%
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer when browsing > 50 rows */}
      {totalPages > 1 && (
        <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono tabular-nums">
            Showing {safePage * pageSize + 1}–
            {Math.min(baseRows.length, (safePage + 1) * pageSize)} of {baseRows.length}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={safePage === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="px-2.5 py-1 rounded border border-slate-700 text-slate-200 disabled:opacity-40 hover:bg-slate-800 cursor-pointer disabled:cursor-default"
            >
              Prev
            </button>
            <span className="font-mono tabular-nums px-2 text-slate-300">
              {safePage + 1} / {totalPages}
            </span>
            <button
              type="button"
              disabled={safePage >= totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              className="px-2.5 py-1 rounded border border-slate-700 text-slate-200 disabled:opacity-40 hover:bg-slate-800 cursor-pointer disabled:cursor-default"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
