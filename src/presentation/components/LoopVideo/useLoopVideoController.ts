import { useEffect, useRef } from 'react';

export function useLoopVideoController() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    video.play().catch(() => undefined);
  }, []);

  return { videoRef };
}
