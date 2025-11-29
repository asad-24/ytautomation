"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function TrustedByStrip() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)

  // Duplicate logos array for seamless loop
  const logos = [
    "TechCrunch", "Wired", "Forbes", "The Verge", "Mashable",
    "Engadget", "CNET", "Ars Technica", "VentureBeat", "TechRadar"
  ]

  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-16 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-wider text-muted-foreground font-semibold"
        >
          Trusted by creators at
        </motion.p>
      </div>

      <div
        ref={scrollerRef}
        className="relative flex overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-8 pr-8"
          animate={{
            x: isPaused ? 0 : [0, -1920],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-24 glass rounded-xl flex items-center justify-center hover:glass-light dark:hover:glass-dark transition-all duration-300 hover:scale-105"
            >
              <span className="text-xl font-bold text-muted-foreground">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
