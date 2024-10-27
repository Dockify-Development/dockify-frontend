"use client"

import React, { useEffect, useState } from 'react'

export default function Background() {
  const [circles, setCircles] = useState<Array<{ cx: number, cy: number, r: number, opacity: number }>>([]);

  useEffect(() => {
    const generatedCircles = [...Array(20)].map(() => ({
      cx: Math.random() * 1000,
      cy: Math.random() * 1000,
      r: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.1
    }));
    setCircles(generatedCircles);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#0a0014] overflow-hidden">
      <svg
        viewBox="0 0 1000 2000"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[400%]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="25%" r="50%" fx="50%" fy="25%">
            <stop offset="0%" stopColor="#3a0069" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0a0014" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#20003d" />
            <stop offset="100%" stopColor="#3a0069" />
          </linearGradient>
          <linearGradient id="grad3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5a00a3" />
            <stop offset="100%" stopColor="#3a0069" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#grad1)" />

        {[...Array(10)].map((_, i) => (
          <g key={i}>
            <path
              d={`M${i * 200},0 Q${i * 200 + 100},${1000 + i * 50} ${i * 200 + 200},2000`}
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="2"
            >
              <animate
                attributeName="d"
                dur={`${20 + i * 5}s`}
                repeatCount="indefinite"
                values={`M${i * 200},0 Q${i * 200 + 100},${1000 + i * 50} ${i * 200 + 200},2000;
                         M${i * 200},0 Q${i * 200 + 150},${950 + i * 50} ${i * 200 + 200},2000;
                         M${i * 200},0 Q${i * 200 + 50},${1050 + i * 50} ${i * 200 + 200},2000;
                         M${i * 200},0 Q${i * 200 + 100},${1000 + i * 50} ${i * 200 + 200},2000`}
              />
            </path>
          </g>
        ))}

        <path
          d="M0,1400 Q250,1300 500,1400 T1000,1400 L1000,2000 L0,2000 Z"
          fill="url(#grad3)"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,1400 Q250,1300 500,1400 T1000,1400 L1000,2000 L0,2000 Z;
              M0,1400 Q250,1500 500,1400 T1000,1400 L1000,2000 L0,2000 Z;
              M0,1400 Q250,1300 500,1400 T1000,1400 L1000,2000 L0,2000 Z
            "
          />
        </path>

        {circles.map((circle, i) => (
          <circle
            key={i}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="#ffffff"
            opacity={circle.opacity}
          >
            <animate
              attributeName="opacity"
              dur={`${Math.random() * 5 + 2}s`}
              repeatCount="indefinite"
              values="0.1;0.4;0.1"
            />
          </circle>
        ))}
      </svg>
    </div>
  )
}