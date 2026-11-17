import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { formatPokemonDisplayName, POKEMON_DEX, PokemonSpecies } from '../data/pokemon';

interface PokemonSearchSelectProps {
  selected: PokemonSpecies;
  onSelect: (pokemon: PokemonSpecies) => void;
}

export function PokemonSearchSelect({ selected, onSelect }: PokemonSearchSelectProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return POKEMON_DEX.slice(0, 80);
    }
    const cleanNum = q.startsWith('#') ? q.slice(1) : q;
    const results: PokemonSpecies[] = [];
    for (let i = 0; i < POKEMON_DEX.length; i++) {
      const p = POKEMON_DEX[i];
      const full = formatPokemonDisplayName(p).toLowerCase();
      const dexStr = String(p.dex);
      const typesStr = p.types.join(' ').toLowerCase();
      const formStr = (p.form ?? '').toLowerCase();

      if (
        full.includes(q) ||
        formStr.includes(q) ||
        typesStr.includes(q) ||
        (cleanNum.length > 0 && dexStr === cleanNum) ||
        dexStr.startsWith(cleanNum)
      ) {
        results.push(p);
        if (results.length >= 100) break;
      }
    }
    return results;
  }, [query]);

  useEffect(() => {
    setHighlightIndex(0);
  }, [query]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  useEffect(() => {
    if (!isOpen || !listRef.current) return;
    const item = listRef.current.children[highlightIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: 'nearest' });
  }, [highlightIndex, isOpen]);

  const handleChoose = (pokemon: PokemonSpecies) => {
    onSelect(pokemon);
    setQuery('');
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setIsOpen(true);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(0, i - 1));
    } else if (e.key === 'Enter' && isOpen && filtered[highlightIndex]) {
      e.preventDefault();
      handleChoose(filtered[highlightIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <label
        htmlFor="pokemon-search-input"
        className="block text-xs font-medium text-slate-400 mb-1.5"
      >
        Search Pokémon ({POKEMON_DEX.length.toLocaleString()} released species &amp; forms)
      </label>

      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
        <input
          ref={inputRef}
          id="pokemon-search-input"
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          value={isOpen ? query : `#${selected.dex} ${formatPokemonDisplayName(selected)}`}
          placeholder="Type name, #dex, form (Galarian, Mega, Origin), or type..."
          onFocus={() => {
            setIsOpen(true);
            setQuery('');
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          className="w-full pl-9 pr-16 py-2.5 text-sm font-medium text-white bg-slate-900 border border-slate-700/80 rounded-lg focus:outline-none focus:border-sky-400 transition-colors"
        />

        <div className="absolute right-2 flex items-center gap-1">
          {isOpen && query.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
              className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              if (isOpen) {
                setIsOpen(false);
              } else {
                setIsOpen(true);
                setQuery('');
                inputRef.current?.focus();
              }
            }}
            aria-label="Toggle Pokémon list"
            className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1.5 z-30 bg-[#0f172a] border border-slate-700 rounded-lg shadow-2xl overflow-hidden">
          <div className="px-3 py-1.5 text-[11px] text-slate-400 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <span>
              {query.trim()
                ? `Showing ${filtered.length}${filtered.length === 100 ? '+' : ''} matches`
                : 'Type to search all 1,092 released Pokémon & forms'}
            </span>
            <span className="font-mono">A / D / S</span>
          </div>

          {filtered.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-slate-400">
              No Pokémon matched &ldquo;{query}&rdquo;. Try a name, dex number, or form like &ldquo;Alolan&rdquo; or &ldquo;Mega&rdquo;.
            </div>
          ) : (
            <ul
              ref={listRef}
              role="listbox"
              className="max-h-72 overflow-y-auto divide-y divide-slate-800/70"
            >
              {filtered.map((p, idx) => {
                const isSelected = p.id === selected.id;
                const isHighlighted = idx === highlightIndex;
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onMouseEnter={() => setHighlightIndex(idx)}
                      onClick={() => handleChoose(p)}
                      className={`w-full px-3 py-2 flex items-center justify-between gap-3 text-left text-sm transition-colors cursor-pointer ${
                        isHighlighted
                          ? 'bg-sky-500/15 text-white'
                          : isSelected
                          ? 'bg-slate-800/70 text-sky-300'
                          : 'text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono tabular-nums text-xs text-slate-400 w-10 shrink-0">
                          #{p.dex}
                        </span>
                        <span className="font-medium truncate">
                          {formatPokemonDisplayName(p)}
                        </span>
                        <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">
                          {p.types.join(' / ')}
                        </span>
                      </div>
                      <span className="font-mono tabular-nums text-xs text-slate-400 shrink-0">
                        {p.atk} / {p.def} / {p.sta}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
