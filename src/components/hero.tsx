"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { useReducedMotion } from "@/hooks/use-in-view"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  }

  const floatingCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    }),
  }

  const floatingAnimation = prefersReducedMotion
    ? {}
    : {
        y: [0, -15, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as any,
        },
      }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-5 py-2.5 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-sm font-medium mb-4 text-white shadow-lg"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                Trusted by 100+ YouTubers
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
                  Scale Your
                </span>
                <br />
                <span className="text-white">YouTube Channel</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0"
            >
              Professional video editing, automation, and growth services that help creators
              focus on what matters most — creating amazing content.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-800 hover:to-pink-800 text-white border-0 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1 text-base px-6 py-4"
              >
                <Link href="https://wa.me/923030249973" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="group glass-light dark:glass-dark hover:scale-105 transition-all duration-300 text-base px-6 py-4"
              >
                <Link href="#work">
                  <Play className="mr-2 h-4 w-4" />
                  See Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { value: "50M+", label: "Views Generated" },
                { value: "100+", label: "Happy Clients" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {[
              {
                title: "Profitable Niches",
                description: "We start with proven niches and ideas backed by research, not assumptions.",
                gradient: "from-purple-700 to-pink-700",
                position: "top-4 left-8",
              },
              {
                title: "High-Retention Content System",
                description: "Our scripts, editing, and thumbnails are designed to keep viewers watching longer.",
                gradient: "from-purple-600 to-purple-700",
                position: "top-24 right-0",
              },
              {
                title: "End-to-End Automation",
                description: "From ideas to upload-ready videos, we handle the entire process for you.",
                gradient: "from-pink-700 to-purple-800",
                position: "bottom-40 left-0",
              },
              {
                title: "Consistent & Scalable Growth",
                description: "We focus on steady channel growth built for long-term results.",
                gradient: "from-purple-600 to-pink-600",
                position: "bottom-16 right-8",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={floatingCardVariants}
                animate={floatingAnimation}
                className={`absolute ${card.position} w-64 p-7 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20`}
                style={{
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                  {i + 1}
                </div>
                <h3 className="font-bold text-xl mb-2 text-white">{card.title}</h3>
                <p className="text-base text-white/70">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}
