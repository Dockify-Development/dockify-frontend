"use client"

import React, { useEffect, useState, useCallback } from 'react'

export default function EnhancedInteractiveBackground() {
  const [circles, setCircles] = useState<Array<{ cx: number; cy: number; r: number; opacity: number }>>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const generatedCircles = [...Array(30)].map(() => ({
      cx: Math.random() * 1000,
      cy: Math.random() * 1000,
      r: Math.random() * 4 + 1,
      opacity: Math.random() * 0.3 + 0.1
    }))
    setCircles(generatedCircles)
  }, [])

  const handleMouseMove = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
    const svg = event.currentTarget
    const rect = svg.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 1000
    const y = ((event.clientY - rect.top) / rect.height) * 1000
    setMousePosition({ x, y })
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] bg-[#0a0014] overflow-hidden">
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-70"
        preserveAspectRatio="none"
        onMouseMove={handleMouseMove}
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
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

        {[...Array(5)].map((_, i) => (
          <g key={i}>
            <path
              d={`M${i * 200},0 Q${i * 200 + 100},${500 + i * 50} ${i * 200 + 200},1000`}
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="2"
              opacity="0.3"
            >
              <animate
                attributeName="d"
                dur={`${25 + i * 7}s`}
                repeatCount="indefinite"
                values={`M${i * 200},0 Q${i * 200 + 100},${500 + i * 50} ${i * 200 + 200},1000;
                         M${i * 200},0 Q${i * 200 + 180},${400 + i * 50} ${i * 200 + 200},1000;
                         M${i * 200},0 Q${i * 200 + 20},${600 + i * 50} ${i * 200 + 200},1000;
                         M${i * 200},0 Q${i * 200 + 100},${500 + i * 50} ${i * 200 + 200},1000`}
              />
            </path>
          </g>
        ))}

        <path
          d="M0,700 Q250,600 500,700 T1000,700 L1000,1000 L0,1000 Z"
          fill="url(#grad3)"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="30s"
            repeatCount="indefinite"
            values="
              M0,700 Q250,600 500,700 T1000,700 L1000,1000 L0,1000 Z;
              M0,700 Q250,800 500,650 T1000,750 L1000,1000 L0,1000 Z;
              M0,750 Q250,650 500,750 T1000,700 L1000,1000 L0,1000 Z;
              M0,700 Q250,600 500,700 T1000,700 L1000,1000 L0,1000 Z
            "
          />
        </path>

        <path
          d="M0,800 Q250,750 500,800 T1000,800 L1000,1000 L0,1000 Z"
          fill="url(#grad3)"
          opacity="0.3"
        >
          <animate
            attributeName="d"
            dur="25s"
            repeatCount="indefinite"
            values="
              M0,800 Q250,750 500,800 T1000,800 L1000,1000 L0,1000 Z;
              M0,820 Q250,870 500,780 T1000,830 L1000,1000 L0,1000 Z;
              M0,780 Q250,730 500,820 T1000,790 L1000,1000 L0,1000 Z;
              M0,800 Q250,750 500,800 T1000,800 L1000,1000 L0,1000 Z
            "
          />
        </path>

        {circles.map((circle, i) => {
          const dx = mousePosition.x - circle.cx
          const dy = mousePosition.y - circle.cy
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 100
          const scale = Math.max(0, 1 - distance / maxDistance)

          return (
            <circle
              key={i}
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r * (1 + scale)}
              fill="#ffffff"
              opacity={circle.opacity * (1 + scale)}
            >
              <animate
                attributeName="opacity"
                dur={`${Math.random() * 10 + 10}s`}
                repeatCount="indefinite"
                values={`${circle.opacity};${circle.opacity * 1.5};${circle.opacity}`}
                keyTimes="0;0.5;1"
                keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                calcMode="spline"
              />
              <animate
                attributeName="r"
                dur={`${Math.random() * 10 + 10}s`}
                repeatCount="indefinite"
                values={`${circle.r};${circle.r * 1.2};${circle.r}`}
                keyTimes="0;0.5;1"
                keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                calcMode="spline"
              />
            </circle>
          )
        })}
      </svg>
    </div>
  )
}