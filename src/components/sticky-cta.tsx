"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { Phone } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 500, 1000, 1500, 2000],
    [
      "rgb(147, 51, 234)", // purple-600
      "rgb(124, 58, 237)", // purple-500
      "rgb(168, 85, 247)", // violet-500
      "rgb(236, 72, 153)", // pink-500
      "rgb(147, 51, 234)", // purple-600
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
        <Link
          href="https://wa.me/923187588853"
          target="_blank"
          rel="noopener noreferrer"
          id="book-call"
          className="group relative overflow-hidden bg-transparent hover:bg-transparent text-white border-0 shadow-none px-6 py-4 text-base rounded-full shadow-2xl backdrop-blur-xl inline-flex items-center justify-center z-20"
        >
          <span className="relative z-10 flex items-center gap-3 cursor-pointer">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">Contact Us</span>
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
      </motion.div>

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/50 z-"
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
