"use client"

import { useEffect, useState } from 'react';

interface SplineEmbedProps {
  sceneUrl: string;
}

// A very basic Spline embed component. For more control and features,
// consider using the official @splinetool/react-spline or @splinetool/runtime packages.
export function SplineEmbed({ sceneUrl }: SplineEmbedProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering on the server to prevent hydration issues
  }
  
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <iframe
        src={sceneUrl}
        title="Spline 3D Scene"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
