"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function YoutubeBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Generate random bubbles
    const newBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100 + 100, // start below viewport
      size: Math.random() * 40 + 30, // 30-70px
      duration: Math.random() * 20 + 15, // 15-35s
      delay: Math.random() * 5,
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute"
          initial={{ 
            x: `${bubble.x}vw`, 
            y: `${bubble.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: [
              `${bubble.y}vh`,
              `${bubble.y - 20}vh`,
              `${bubble.y - 40}vh`,
              `${bubble.y - 60}vh`,
              `${bubble.y - 80}vh`,
              `${bubble.y - 120}vh`,
            ],
            x: [
              `${bubble.x}vw`,
              `${bubble.x + Math.sin(bubble.id) * 10}vw`,
              `${bubble.x - Math.sin(bubble.id) * 10}vw`,
              `${bubble.x + Math.sin(bubble.id) * 10}vw`,
              `${bubble.x - Math.sin(bubble.id) * 5}vw`,
              `${bubble.x}vw`,
            ],
            opacity: [0, 0.3, 0.4, 0.35, 0.25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: bubble.size,
            height: bubble.size,
          }}
        >
          {/* YouTube Play Button Icon */}
          <div className="relative w-full h-full">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-red-500/40 rounded-full blur-2xl" />
            
            {/* Main circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/70 to-red-700/70 rounded-full border-2 border-red-500/60 shadow-xl shadow-red-500/30 flex items-center justify-center">
              {/* Play button triangle */}
              <div 
                className="w-0 h-0 ml-1 drop-shadow-lg"
                style={{
                  borderLeft: `${bubble.size * 0.3}px solid rgba(255, 255, 255, 0.95)`,
                  borderTop: `${bubble.size * 0.18}px solid transparent`,
                  borderBottom: `${bubble.size * 0.18}px solid transparent`,
                }}
              />
            </div>

            {/* Inner shine */}
            <motion.div
              className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
