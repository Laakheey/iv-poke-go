import { useEffect, useState } from 'react';
import { formatPokemonDisplayName, PokemonSpecies } from '../data/pokemon';
import { getTypeTheme, TypeIcon } from './TypeIcon';

interface PokemonPortraitProps {
  species: PokemonSpecies;
  size?: 'sm' | 'lg';
}

export function PokemonPortrait({ species, size = 'lg' }: PokemonPortraitProps) {
  const primary = getTypeTheme(species.types[0]);
  const secondary = getTypeTheme(species.types[1] ?? species.types[0]);

  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${species.spriteId}.png`;
  const spriteFallbackUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.spriteId}.png`;

  const [imgStage, setImgStage] = useState<'artwork' | 'sprite' | 'svg'>('artwork');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setImgStage('artwork');
    setLoaded(false);
  }, [species.id, species.spriteId]);

  const currentSrc =
    imgStage === 'artwork'
      ? artworkUrl
      : imgStage === 'sprite'
      ? spriteFallbackUrl
      : null;

  const handleImgError = () => {
    if (imgStage === 'artwork') {
      setImgStage('sprite');
    } else {
      setImgStage('svg');
    }
  };

  if (size === 'sm') {
    return (
      <div
        className="relative w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-white/10 overflow-hidden bg-slate-950"
        style={{
          background: `linear-gradient(135deg, ${primary.bgTint}, ${secondary.bgTint})`,
        }}
      >
        {currentSrc ? (
          <img
            src={currentSrc}
            alt={formatPokemonDisplayName(species)}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={handleImgError}
            className={`w-8 h-8 object-contain transition-opacity duration-150 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <TypeIcon type={species.types[0]} size={16} />
        )}
        {!loaded && currentSrc && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <TypeIcon type={species.types[0]} size={15} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border border-white/15 flex items-center justify-center shrink-0 overflow-hidden bg-slate-950/90"
      style={{
        boxShadow: `inset 0 0 32px ${primary.bgTint}`,
      }}
    >
      {/* Subtle Tactical Poké-reticle SVG */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="38" stroke={primary.hex} strokeWidth="2" fill="none" />
        <line x1="8" y1="50" x2="34" y2="50" stroke={secondary.hex} strokeWidth="2" />
        <line x1="66" y1="50" x2="92" y2="50" stroke={secondary.hex} strokeWidth="2" />
        <circle cx="50" cy="50" r="14" stroke={secondary.hex} strokeWidth="2" fill="none" />
      </svg>

      {currentSrc ? (
        <img
          src={currentSrc}
          alt={formatPokemonDisplayName(species)}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={handleImgError}
          className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.65)] transition-opacity duration-200 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1.5">
            <TypeIcon type={species.types[0]} size={30} />
            {species.types[1] && <TypeIcon type={species.types[1]} size={20} />}
          </div>
          <span className="mt-1.5 font-mono tabular-nums text-[11px] font-semibold text-slate-300">
            #{String(species.dex).padStart(3, '0')}
          </span>
        </div>
      )}

      {!loaded && currentSrc && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <TypeIcon type={species.types[0]} size={28} />
        </div>
      )}
    </div>
  );
}
