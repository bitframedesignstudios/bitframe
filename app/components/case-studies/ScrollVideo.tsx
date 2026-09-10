'use client';

import { useEffect, useRef } from 'react';

export function ScrollVideo({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let duration = 0;
    const onLoaded = () => {
      duration = video.duration;
    };
    video.addEventListener('loadedmetadata', onLoaded);

    const onScroll = () => {
      if (!duration) return;
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      video.currentTime = progress * duration;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden rounded-md bg-zinc-950">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}