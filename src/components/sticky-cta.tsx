"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 500, 1000, 1500, 2000],
    [
      "rgb(99, 102, 241)", // indigo-500
      "rgb(139, 92, 246)", // violet-500
      "rgb(168, 85, 247)", // purple-500
      "rgb(217, 70, 239)", // fuchsia-500
      "rgb(236, 72, 153)", // pink-500
    ]
  )

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
    >
      <motion.div
        style={{ backgroundColor }}
        className="rounded-full shadow-2xl backdrop-blur-xl"
      >
        <Button
          asChild
          size="lg"
          className="group relative overflow-hidden bg-transparent hover:bg-transparent text-white border-0 shadow-none px-8 py-6 text-lg"
        >
          <Link href="#book-call" id="book-call">
            <span className="relative z-10 flex items-center gap-3">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Book a Free Call</span>
            </span>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            />
          </Link>
        </Button>
      </motion.div>

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.div>
  )
}
