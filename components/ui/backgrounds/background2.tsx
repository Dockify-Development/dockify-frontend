"use client"

import React, { useState, useEffect, useCallback } from 'react'

export default function MajesticBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D0A4E" />
            <stop offset="100%" stopColor="#120426" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="0" y="0" width="1440" height="1024" fill="url(#gradient)" />
        <g fill="#4A0E82" opacity="0.3" filter="url(#glow)">
          <path d={`M0,128L48,154.7C96,181,192,235,288,250.7C384,267,480,245,576,234.7C672,224,768,224,864,213.3C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z`}>
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values={`
                M0,128L48,154.7C96,181,192,235,288,250.7C384,267,480,245,576,234.7C672,224,768,224,864,213.3C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z;
                M0,${160 + mousePosition.y * 50}L48,${181.3 + mousePosition.x * 50}C96,${203 + mousePosition.y * 50},192,${245 + mousePosition.x * 50},288,${261.3 + mousePosition.y * 50}C384,${277 + mousePosition.x * 50},480,${267 + mousePosition.y * 50},576,${240 + mousePosition.x * 50}C672,${213 + mousePosition.y * 50},768,${171 + mousePosition.x * 50},864,${176 + mousePosition.y * 50}C960,${181 + mousePosition.x * 50},1056,${235 + mousePosition.y * 50},1152,${240 + mousePosition.x * 50}C1248,${245 + mousePosition.y * 50},1344,${203 + mousePosition.x * 50},1392,${181.3 + mousePosition.y * 50}L1440,${160 + mousePosition.x * 50}L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z;
                M0,128L48,154.7C96,181,192,235,288,250.7C384,267,480,245,576,234.7C672,224,768,224,864,213.3C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z
              `}
            />
          </path>
        </g>
        <g fill="#3C0C6A" opacity="0.5" filter="url(#glow)">
          <path d={`M0,320L48,309.3C96,299,192,277,288,272C384,267,480,277,576,277.3C672,277,768,267,864,245.3C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z`}>
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values={`
                M0,320L48,309.3C96,299,192,277,288,272C384,267,480,277,576,277.3C672,277,768,267,864,245.3C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z;
                M0,${352 + mousePosition.y * 30}L48,${341.3 + mousePosition.x * 30}C96,${331 + mousePosition.y * 30},192,${309 + mousePosition.x * 30},288,${304 + mousePosition.y * 30}C384,${299 + mousePosition.x * 30},480,${309 + mousePosition.y * 30},576,${309.3 + mousePosition.x * 30}C672,${309 + mousePosition.y * 30},768,${299 + mousePosition.x * 30},864,${277.3 + mousePosition.y * 30}C960,${256 + mousePosition.x * 30},1056,${224 + mousePosition.y * 30},1152,${224 + mousePosition.x * 30}C1248,${224 + mousePosition.y * 30},1344,${256 + mousePosition.x * 30},1392,${272 + mousePosition.y * 30}L1440,${288 + mousePosition.x * 30}L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z;
                M0,320L48,309.3C96,299,192,277,288,272C384,267,480,277,576,277.3C672,277,768,267,864,245.3C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z
              `}
            />
          </path>
        </g>
        <g fill="#2D0A4E" opacity="0.7" filter="url(#glow)">
          <path d={`M0,512L48,501.3C96,491,192,469,288,469.3C384,469,480,491,576,496C672,501,768,491,864,465.3C960,440,1056,400,1152,394.7C1248,389,1344,419,1392,434.7L1440,450.7L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z`}>
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values={`
                M0,512L48,501.3C96,491,192,469,288,469.3C384,469,480,491,576,496C672,501,768,491,864,465.3C960,440,1056,400,1152,394.7C1248,389,1344,419,1392,434.7L1440,450.7L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z;
                M0,${544 + mousePosition.y * 20}L48,${533.3 + mousePosition.x * 20}C96,${523 + mousePosition.y * 20},192,${501 + mousePosition.x * 20},288,${501.3 + mousePosition.y * 20}C384,${501 + mousePosition.x * 20},480,${523 + mousePosition.y * 20},576,${528 + mousePosition.x * 20}C672,${533 + mousePosition.y * 20},768,${523 + mousePosition.x * 20},864,${497.3 + mousePosition.y * 20}C960,${472 + mousePosition.x * 20},1056,${432 + mousePosition.y * 20},1152,${426.7 + mousePosition.x * 20}C1248,${421 + mousePosition.y * 20},1344,${451 + mousePosition.x * 20},1392,${466.7 + mousePosition.y * 20}L1440,${482.7 + mousePosition.x * 20}L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z;
                M0,512L48,501.3C96,491,192,469,288,469.3C384,469,480,491,576,496C672,501,768,491,864,465.3C960,440,1056,400,1152,394.7C1248,389,1344,419,1392,434.7L1440,450.7L1440,1024L1392,1024C1344,1024,1248,1024,1152,1024C1056,1024,960,1024,864,1024C768,1024,672,1024,576,1024C480,1024,384,1024,288,1024C192,1024,96,1024,48,1024L0,1024Z
              `}
            />
          </path>
        </g>
      </svg>
    </div>
  )
}