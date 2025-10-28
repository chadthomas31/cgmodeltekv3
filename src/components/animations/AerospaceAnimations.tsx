"use client";

import { cn } from "@/lib/utils";

/**
 * Collection of aerospace-themed animations for CG ModelTek cards
 * Each animation is lightweight and uses CSS/SVG for optimal performance
 */

/**
 * Orbital paths animation - simulates satellite orbits
 */
export function OrbitalAnimation({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-full bg-gradient-to-br from-indigo-950 via-blue-950 to-black", className)}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="orbitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Central point (Earth/Hub) */}
        <circle cx="50" cy="50" r="3" fill="#60a5fa" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Orbital paths */}
        <ellipse
          cx="50"
          cy="50"
          rx="25"
          ry="15"
          fill="none"
          stroke="url(#orbitalGradient)"
          strokeWidth="0.3"
          opacity="0.5"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="20"
          fill="none"
          stroke="url(#orbitalGradient)"
          strokeWidth="0.3"
          opacity="0.4"
        />

        {/* Satellites/Objects */}
        <circle r="1.5" fill="#60a5fa">
          <animateMotion
            dur="12s"
            repeatCount="indefinite"
            path="M 50 50 m -25 0 a 25 15 0 1 0 50 0 a 25 15 0 1 0 -50 0"
          />
        </circle>
        <circle r="1" fill="#8b5cf6">
          <animateMotion
            dur="18s"
            repeatCount="indefinite"
            path="M 50 50 m -35 0 a 35 20 0 1 0 70 0 a 35 20 0 1 0 -70 0"
          />
        </circle>

        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100}
            cy={Math.random() * 100}
            r={Math.random() * 0.5 + 0.2}
            fill="white"
            opacity={Math.random() * 0.5 + 0.3}
          >
            <animate
              attributeName="opacity"
              values={`${Math.random() * 0.5};1;${Math.random() * 0.5}`}
              dur={`${Math.random() * 3 + 2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}

/**
 * Grid/Blueprint animation - technical CAD-style grid
 */
export function GridBlueprintAnimation({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-full bg-gradient-to-br from-blue-950 to-slate-950", className)}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="0.3"
            />
          </pattern>
          <pattern id="smallGrid" width="2" height="2" patternUnits="userSpaceOnUse">
            <path
              d="M 2 0 L 0 0 0 2"
              fill="none"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="0.1"
            />
          </pattern>
        </defs>

        {/* Grid backgrounds */}
        <rect width="100" height="100" fill="url(#smallGrid)" />
        <rect width="100" height="100" fill="url(#grid)" />

        {/* Scanning line */}
        <line x1="0" y1="30" x2="100" y2="30" stroke="#60a5fa" strokeWidth="0.5" opacity="0.7">
          <animate attributeName="y1" values="0;100;0" dur="8s" repeatCount="indefinite" />
          <animate attributeName="y2" values="0;100;0" dur="8s" repeatCount="indefinite" />
        </line>

        {/* Technical markers */}
        <circle cx="20" cy="20" r="0.8" fill="#60a5fa" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="80" r="0.8" fill="#60a5fa" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>

        {/* Corner brackets */}
        <g stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.6">
          <path d="M 5 10 L 5 5 L 10 5" />
          <path d="M 90 5 L 95 5 L 95 10" />
          <path d="M 95 90 L 95 95 L 90 95" />
          <path d="M 10 95 L 5 95 L 5 90" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Precision machining animation - rotating geometric shapes
 */
export function MachiningAnimation({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-black", className)}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="machineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Rotating hexagon (machined part) */}
        <g transform="translate(50 50)" filter="url(#glow)">
          <polygon
            points="0,-15 13,-7.5 13,7.5 0,15 -13,7.5 -13,-7.5"
            fill="none"
            stroke="url(#machineGradient)"
            strokeWidth="1"
            opacity="0.7"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="20s"
              repeatCount="indefinite"
            />
          </polygon>
          <polygon
            points="0,-10 8.7,-5 8.7,5 0,10 -8.7,5 -8.7,-5"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="0.5"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360"
              to="0"
              dur="15s"
              repeatCount="indefinite"
            />
          </polygon>
        </g>

        {/* Measurement lines */}
        <g stroke="#3b82f6" strokeWidth="0.3" opacity="0.4">
          <line x1="30" y1="50" x2="40" y2="50" strokeDasharray="1 1">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="60" y1="50" x2="70" y2="50" strokeDasharray="1 1">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin="1.5s" />
          </line>
        </g>

        {/* Precision indicators */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          const x = 50 + 25 * Math.cos((angle * Math.PI) / 180);
          const y = 50 + 25 * Math.sin((angle * Math.PI) / 180);
          return (
            <circle key={i} cx={x} cy={y} r="0.5" fill="#60a5fa" opacity="0.5">
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="4s"
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Digital waves animation - smooth flowing data visualization
 */
export function DigitalWavesAnimation({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-full bg-gradient-to-br from-cyan-950 via-blue-950 to-black", className)}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Flowing waves */}
        <path fill="url(#waveGradient)" opacity="0.4">
          <animate
            attributeName="d"
            values="M0 50 Q 25 30, 50 50 T 100 50 L 100 100 L 0 100 Z;
                    M0 50 Q 25 70, 50 50 T 100 50 L 100 100 L 0 100 Z;
                    M0 50 Q 25 30, 50 50 T 100 50 L 100 100 L 0 100 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>

        <path fill="url(#waveGradient)" opacity="0.3">
          <animate
            attributeName="d"
            values="M0 60 Q 25 40, 50 60 T 100 60 L 100 100 L 0 100 Z;
                    M0 60 Q 25 80, 50 60 T 100 60 L 100 100 L 0 100 Z;
                    M0 60 Q 25 40, 50 60 T 100 60 L 100 100 L 0 100 Z"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>

        {/* Floating data points */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={i}
            r="0.8"
            fill="#06b6d4"
            opacity="0.6"
          >
            <animate
              attributeName="cx"
              values={`${(i * 10) % 100};${((i * 10) + 100) % 100}`}
              dur={`${8 + i * 0.5}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${40 + (i * 3) % 20};${60 + (i * 3) % 20};${40 + (i * 3) % 20}`}
              dur={`${5 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
