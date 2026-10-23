'use client';

import type { ILoopVideoProps } from './LoopVideoTypes';
import { useLoopVideoController } from './useLoopVideoController';

export function LoopVideo({ src, poster, label, className }: ILoopVideoProps) {
  const { videoRef } = useLoopVideoController();

  return (
    <video
      aria-label={label}
      className={className}
      loop
      muted
      playsInline
      poster={poster}
      preload='metadata'
      ref={videoRef}
    >
      <source src={src} type='video/mp4' />
    </video>
  );
}
