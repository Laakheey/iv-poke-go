import { POKEMON_DEX, PogoPokemon } from './pokemonDex';

export type LeagueId = 'great' | 'ultra' | 'master';

export type PokemonSpecies = PogoPokemon;
export { POKEMON_DEX };

export interface LeagueConfig {
  id: LeagueId;
  name: string;
  shortName: string;
  cpCap: number;
  cpLabel: string;
  accentText: string;
  accentBorder: string;
  accentBg: string;
}

export const LEAGUES: Record<LeagueId, LeagueConfig> = {
  great: {
    id: 'great',
    name: 'Great League',
    shortName: 'Great',
    cpCap: 1500,
    cpLabel: '1500 CP',
    accentText: 'text-sky-400',
    accentBorder: 'border-sky-500/50',
    accentBg: 'bg-sky-500/10',
  },
  ultra: {
    id: 'ultra',
    name: 'Ultra League',
    shortName: 'Ultra',
    cpCap: 2500,
    cpLabel: '2500 CP',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-500/50',
    accentBg: 'bg-amber-500/10',
  },
  master: {
    id: 'master',
    name: 'Master League',
    shortName: 'Master',
    cpCap: Infinity,
    cpLabel: 'No CP Cap',
    accentText: 'text-purple-400',
    accentBorder: 'border-purple-500/50',
    accentBg: 'bg-purple-500/10',
  },
};

export function formatPokemonDisplayName(p: PogoPokemon): string {
  return p.form && p.form !== 'Mega' ? `${p.name} (${p.form})` : p.name;
}
