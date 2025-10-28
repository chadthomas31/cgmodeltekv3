"use client";

import { cn } from "@/lib/utils";

export type FlowAnimationProps = {
  color?: string;
  speed?: "slow" | "medium" | "fast";
  pattern?: "arrows" | "circles" | "waves";
  className?: string;
};

/**
 * CSS/SVG-based flowing animation
 * Lightweight and performant for multiple cards
 * Inspired by the "Flow" card on labs.google/fx
 */
export function FlowAnimation({
  color = "#3b82f6",
  speed = "medium",
  pattern = "arrows",
  className,
}: FlowAnimationProps) {
  const speedMap = {
    slow: "30s",
    medium: "20s",
    fast: "10s",
  };

  const animationDuration = speedMap[speed];

  return (
    <div className={cn("w-full h-full bg-gradient-to-br from-blue-950 to-black", className)}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Flowing gradient */}
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3">
              <animate
                attributeName="stop-opacity"
                values="0.3;0.7;0.3"
                dur={animationDuration}
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor={color} stopOpacity="0.5">
              <animate
                attributeName="stop-opacity"
                values="0.5;0.9;0.5"
                dur={animationDuration}
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor={color} stopOpacity="0.3">
              <animate
                attributeName="stop-opacity"
                values="0.3;0.7;0.3"
                dur={animationDuration}
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Flowing pattern */}
          <pattern id="flowPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {pattern === "arrows" && (
              <g fill="url(#flowGradient)">
                <path d="M 50 50 L 70 50 L 60 40 M 70 50 L 60 60" strokeWidth="2" stroke="url(#flowGradient)" fill="none">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    from="0 0"
                    to="200 200"
                    dur={animationDuration}
                    repeatCount="indefinite"
                  />
                </path>
                <path d="M 150 150 L 170 150 L 160 140 M 170 150 L 160 160" strokeWidth="2" stroke="url(#flowGradient)" fill="none">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    from="0 0"
                    to="200 200"
                    dur={animationDuration}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            )}
            {pattern === "circles" && (
              <g>
                <circle cx="50" cy="50" r="20" fill="url(#flowGradient)" opacity="0.6">
                  <animate
                    attributeName="r"
                    values="20;30;20"
                    dur={animationDuration}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="150" cy="150" r="25" fill="url(#flowGradient)" opacity="0.4">
                  <animate
                    attributeName="r"
                    values="25;35;25"
                    dur={animationDuration}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            )}
            {pattern === "waves" && (
              <g>
                <path
                  d="M 0 100 Q 50 80 100 100 T 200 100"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.5"
                >
                  <animate
                    attributeName="d"
                    values="M 0 100 Q 50 80 100 100 T 200 100;M 0 100 Q 50 120 100 100 T 200 100;M 0 100 Q 50 80 100 100 T 200 100"
                    dur={animationDuration}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            )}
          </pattern>
        </defs>

        {/* Animated background */}
        <rect width="100%" height="100%" fill="url(#flowPattern)" />

        {/* Floating elements */}
        <g opacity="0.6">
          <circle cx="20%" cy="30%" r="3" fill={color}>
            <animate
              attributeName="cy"
              values="30%;70%;30%"
              dur={animationDuration}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur={animationDuration}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="80%" cy="60%" r="4" fill={color}>
            <animate
              attributeName="cy"
              values="60%;20%;60%"
              dur={animationDuration}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.9;0.4"
              dur={animationDuration}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="50%" cy="80%" r="2" fill={color}>
            <animate
              attributeName="cy"
              values="80%;40%;80%"
              dur={animationDuration}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}
