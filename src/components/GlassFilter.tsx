// Hidden SVG defs reused by .glass-refract surfaces.
//
// Trimmed pipeline (perf-first):
//   1. feTurbulence + small blur -> noise displacement map
//   2. feDisplacementMap -> bends backdrop pixels (refraction)
//   3. feColorMatrix saturate -> vibrancy boost
//
// We dropped the expensive feSpecularLighting pass — the same specular
// effect is achieved much more cheaply by the CSS conic-gradient rim.
// Only Chromium honours SVG filters inside backdrop-filter; other
// browsers gracefully fall back to plain blur.
export function GlassFilter() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed -z-10 h-0 w-0"
      width="0"
      height="0"
    >
      <defs>
        <filter
          id="glass-refraction"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="11"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.5" result="smoothNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="smoothNoise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feColorMatrix
            in="displaced"
            type="saturate"
            values="1.6"
          />
        </filter>
      </defs>
    </svg>
  );
}
