"use client";
import React, { useMemo } from "react";

const GridScan = ({
  linesColor = "#392e4e",
  lineThickness = 1,
  gridScale = 0.1,
  noiseIntensity = 0.01,
  scanOpacity = 0.4,
}) => {
  const uniqueId = useMemo(() => `grid-pattern-${Math.random().toString(36).substr(2, 9)}`, []);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <pattern
          id={uniqueId}
          width="50"
          height="43"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 50 43"
        >
          <path
            d="M25 1 L43 11 L43 32 L25 42 L7 32 L7 11 Z"
            fill="none"
            stroke={linesColor}
            strokeWidth={lineThickness}
          />
        </pattern>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={noiseIntensity}
            numOctaves="1"
            stitchTiles="stitch"
          />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="#0b1020" />
      <rect width="100%" height="100%" fill={`url(#${uniqueId})`} opacity={0.25} />
      <rect width="100%" height="100%" filter="url(#noise)" opacity={scanOpacity} />
    </svg>
  );
};

export default GridScan;