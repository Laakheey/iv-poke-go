import { useState } from 'react';
import { Shield } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel,
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-linear-to-br from-slate-800 to-slate-950 border border-slate-700/60 text-slate-400 ${className}`}
      >
        <div className="flex flex-col items-center gap-1">
          <Shield className="w-4 h-4 text-sky-400" />
          {fallbackLabel && (
            <span className="text-[10px] font-mono uppercase">{fallbackLabel}</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
