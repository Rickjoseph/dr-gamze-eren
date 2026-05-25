// Hidden SVG defs reused by .glass-refract surfaces site-wide.
//
// The filter pipeline approximates Apple's Liquid Glass:
//   1. feTurbulence + Gaussian blur -> smooth noise displacement map
//   2. feDisplacementMap -> bends backdrop pixels (refraction)
//   3. feColorMatrix saturate -> vibrancy boost (the "spilled color")
//   4. feSpecularLighting -> bright surface highlight (the "light catching")
//   5. feComposite + feBlend -> mix specular highlight back onto refracted result
//
// Chromium is the only engine that supports SVG filters inside
// backdrop-filter, so other browsers fall back to the CSS-only glass.
export function GlassFilter() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed -z-10 h-0 w-0"
      width="0"
      height="0"
    >
      <defs>
        {/* Main backdrop-filter pipeline used by .glass-refract */}
        <filter
          id="glass-refraction"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          colorInterpolationFilters="sRGB"
        >
          {/* Step 1 — smooth low-frequency noise becomes the displacement vectors */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.009"
            numOctaves="2"
            seed="11"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2.5" result="smoothNoise" />

          {/* Step 2 — refraction. scale=42 = generous bend through the material */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="smoothNoise"
            scale="42"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />

          {/* Step 3 — bump saturation so background colours "spill" into the glass */}
          <feColorMatrix
            in="displaced"
            type="saturate"
            values="1.8"
            result="vibrant"
          />

          {/* Step 4 — specular lighting layer.
              elevation=60° gives a bright highlight skewed top-left.
              Source is the alpha of the displaced image so the highlight
              only lands on the glass shape itself. */}
          <feSpecularLighting
            in="vibrant"
            surfaceScale="3"
            specularConstant="0.8"
            specularExponent="60"
            lightingColor="#ffffff"
            result="specular"
          >
            <feDistantLight azimuth="135" elevation="60" />
          </feSpecularLighting>

          {/* Step 5 — mask the specular layer to the glass alpha, then blend
              it back over the displaced+saturated backdrop with screen mode */}
          <feComposite
            in="specular"
            in2="vibrant"
            operator="in"
            result="specularMasked"
          />
          <feBlend
            in="specularMasked"
            in2="vibrant"
            mode="screen"
          />
        </filter>

        {/* Stronger lens variant — used on hero/showcase surfaces only */}
        <filter
          id="glass-lensing"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.005 0.009"
            numOctaves="2"
            seed="3"
            result="lensNoise"
          />
          <feGaussianBlur in="lensNoise" stdDeviation="3" result="lensSmooth" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="lensSmooth"
            scale="64"
            xChannelSelector="R"
            yChannelSelector="G"
            result="lensDisplaced"
          />
          <feColorMatrix
            in="lensDisplaced"
            type="saturate"
            values="2.0"
          />
        </filter>
      </defs>
    </svg>
  );
}
