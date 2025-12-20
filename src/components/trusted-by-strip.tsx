"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function TrustedByStrip() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)

  // Trusted creator logos
  const logos = [
    { src: "/tenpics/1.png", alt: "Creator 1" },
    { src: "/tenpics/2.png", alt: "Creator 2" },
    { src: "/tenpics/3.png", alt: "Creator 3" },
    { src: "/tenpics/4.png", alt: "Creator 4" },
    { src: "/tenpics/5.png", alt: "Creator 5" },
    { src: "/tenpics/6.png", alt: "Creator 6" },
    { src: "/tenpics/7.png", alt: "Creator 7" },
    { src: "/tenpics/8.png", alt: "Creator 8" },
    { src: "/tenpics/9.png", alt: "Creator 9" },
    { src: "/tenpics/10.png", alt: "Creator 10" },
  ]

  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-16 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-wider text-white/80 font-semibold"
        >
          Trusted by 500+ YouTubers
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
              className="shrink-0 w-36 h-24 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:border-purple-500/50 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 192px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
