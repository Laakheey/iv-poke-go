export interface TypeStyle {
  hex: string;
  bgTint: string;
  textClass: string;
}

export const TYPE_THEMES: Record<string, TypeStyle> = {
  Normal: { hex: '#9ca3af', bgTint: 'rgba(156, 163, 175, 0.16)', textClass: 'text-slate-300' },
  Fire: { hex: '#f97316', bgTint: 'rgba(249, 115, 22, 0.18)', textClass: 'text-orange-300' },
  Water: { hex: '#38bdf8', bgTint: 'rgba(56, 189, 248, 0.18)', textClass: 'text-sky-300' },
  Electric: { hex: '#facc15', bgTint: 'rgba(250, 204, 21, 0.18)', textClass: 'text-amber-300' },
  Grass: { hex: '#4ade80', bgTint: 'rgba(74, 222, 128, 0.18)', textClass: 'text-emerald-300' },
  Ice: { hex: '#67e8f9', bgTint: 'rgba(103, 232, 249, 0.18)', textClass: 'text-cyan-200' },
  Fighting: { hex: '#ef4444', bgTint: 'rgba(239, 68, 68, 0.18)', textClass: 'text-rose-300' },
  Poison: { hex: '#c084fc', bgTint: 'rgba(192, 132, 252, 0.18)', textClass: 'text-purple-300' },
  Ground: { hex: '#d97706', bgTint: 'rgba(217, 119, 6, 0.2)', textClass: 'text-amber-300' },
  Flying: { hex: '#93c5fd', bgTint: 'rgba(147, 197, 253, 0.18)', textClass: 'text-blue-200' },
  Psychic: { hex: '#f472b6', bgTint: 'rgba(244, 114, 182, 0.18)', textClass: 'text-pink-300' },
  Bug: { hex: '#a3e635', bgTint: 'rgba(163, 230, 53, 0.18)', textClass: 'text-lime-300' },
  Rock: { hex: '#cbd5e1', bgTint: 'rgba(203, 213, 225, 0.16)', textClass: 'text-stone-300' },
  Ghost: { hex: '#818cf8', bgTint: 'rgba(129, 140, 248, 0.2)', textClass: 'text-indigo-300' },
  Dragon: { hex: '#60a5fa', bgTint: 'rgba(96, 165, 250, 0.2)', textClass: 'text-blue-300' },
  Dark: { hex: '#94a3b8', bgTint: 'rgba(148, 163, 184, 0.18)', textClass: 'text-slate-300' },
  Steel: { hex: '#cbd5e1', bgTint: 'rgba(203, 213, 225, 0.18)', textClass: 'text-slate-200' },
  Fairy: { hex: '#f9a8d4', bgTint: 'rgba(249, 168, 212, 0.18)', textClass: 'text-pink-200' },
};

export function getTypeTheme(type: string): TypeStyle {
  return TYPE_THEMES[type] ?? TYPE_THEMES.Normal;
}

interface TypeIconProps {
  type: string;
  size?: number;
  className?: string;
}

export function TypeIcon({ type, size = 14, className = '' }: TypeIconProps) {
  const { hex } = getTypeTheme(type);

  const renderGlyph = () => {
    switch (type) {
      case 'Water':
        return <path d="M12 3C12 3 6 10.5 6 14.5A6 6 0 0 0 18 14.5C18 10.5 12 3 12 3Z" fill={hex} />;
      case 'Fire':
        return <path d="M12.5 2.5C12.5 2.5 18 7.5 18 13A6 6 0 0 1 6 13C6 9.5 8.5 7 9.5 6C9.5 8.5 11 9.5 11 9.5C11 7 12.5 2.5 12.5 2.5Z" fill={hex} />;
      case 'Grass':
        return <path d="M19 5C11 5 6 9.5 6 16C6 17.5 6.5 18.5 7.5 19.5C14 19.5 19 14.5 19 5ZM9 16L15.5 9.5" stroke={hex} strokeWidth="2" strokeLinecap="round" fill={hex} fillOpacity="0.25" />;
      case 'Electric':
        return <path d="M13 2L5 13H11.5L10.5 22L19 10.5H12.5L13 2Z" fill={hex} />;
      case 'Ice':
        return <path d="M12 2V22M3.5 7L20.5 17M20.5 7L3.5 17M12 6L9.5 3.5M12 6L14.5 3.5M12 18L9.5 20.5M12 18L14.5 20.5" stroke={hex} strokeWidth="2" strokeLinecap="round" />;
      case 'Fighting':
        return <path d="M7 11V7A2 2 0 0 1 11 7V10M11 6V5A2 2 0 0 1 15 5V10M15 7A2 2 0 0 1 19 7V14A6 6 0 0 1 7 14V11Z" stroke={hex} strokeWidth="2" fill={hex} fillOpacity="0.25" />;
      case 'Poison':
        return (
          <>
            <circle cx="12" cy="11" r="6" fill={hex} fillOpacity="0.28" stroke={hex} strokeWidth="2" />
            <circle cx="10" cy="10.5" r="1.3" fill={hex} />
            <circle cx="14" cy="10.5" r="1.3" fill={hex} />
            <path d="M9.5 18H14.5" stroke={hex} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'Ground':
        return <path d="M3 18L9 7L14 14L17 10L21 18H3Z" fill={hex} />;
      case 'Flying':
        return <path d="M3 13C7 6 14 4 21 5C17 9 15 13 15 17C12 15 9 15 5 18C6 15 5 14 3 13Z" fill={hex} />;
      case 'Psychic':
        return (
          <>
            <path d="M3 12C6 7 18 7 21 12C18 17 6 17 3 12Z" stroke={hex} strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="3" fill={hex} />
          </>
        );
      case 'Bug':
        return (
          <>
            <ellipse cx="12" cy="13" rx="5" ry="6" fill={hex} fillOpacity="0.28" stroke={hex} strokeWidth="2" />
            <path d="M9 6L7 3M15 6L17 3M5 11H7M17 11H19M5 15H7M17 15H19" stroke={hex} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'Rock':
        return <path d="M7 4L17 5L21 12L16 20H7L3 13L7 4Z" fill={hex} fillOpacity="0.3" stroke={hex} strokeWidth="2" />;
      case 'Ghost':
        return <path d="M6 19V11A6 6 0 0 1 18 11V19L15 17L12 19L9 17L6 19ZM9.5 11A1 1 0 1 0 9.5 13A1 1 0 1 0 9.5 11ZM14.5 11A1 1 0 1 0 14.5 13A1 1 0 1 0 14.5 11Z" fill={hex} />;
      case 'Dragon':
        return <path d="M5 18L12 3L19 18L12 14L5 18Z" fill={hex} fillOpacity="0.35" stroke={hex} strokeWidth="2" strokeLinejoin="round" />;
      case 'Dark':
        return <path d="M16 4A8 8 0 1 0 16 20A6.5 6.5 0 1 1 16 4Z" fill={hex} />;
      case 'Steel':
        return (
          <>
            <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" fill={hex} fillOpacity="0.25" stroke={hex} strokeWidth="2" />
            <circle cx="12" cy="12" r="3" fill={hex} />
          </>
        );
      case 'Fairy':
        return <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill={hex} />;
      default:
        return <circle cx="12" cy="12" r="6.5" fill={hex} fillOpacity="0.25" stroke={hex} strokeWidth="2" />;
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      {renderGlyph()}
    </svg>
  );
}
