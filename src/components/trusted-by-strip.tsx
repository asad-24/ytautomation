"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function TrustedByStrip() {
  const [isPaused, setIsPaused] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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
          Trusted by 100+ YouTubers
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
                className="shrink-0 w-36 h-24 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:border-purple-500/50 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(logo.src)}
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

      {/* Full-size image modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full size image"
              width={800}
              height={600}
              className="w-full h-auto object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
