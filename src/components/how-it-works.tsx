"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ArrowRight, Users, TrendingUp } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useState } from "react"

export function HowItWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [showBeginners, setShowBeginners] = useState(true)

  const beginnerSteps = [
    {
      number: "01",
      title: "Profitable Niche Selection",
      description: "We research and select a profitable niche for your channel. Then we guide you step by step from setup to publishing.",
      icon: "🎯",
    },
    {
      number: "02",
      title: "Channel Setup & Branding",
      description: "We create your channel, branding, and basic setup so it looks professional from day one.",
      icon: "🎨",
    },
    {
      number: "03",
      title: "Choose a Video Package",
      description: "After selecting a package from our pricing section or scheduling a call, you'll be connected with our team to share all the necessary details and specific requests for your video.",
      icon: "📦",
    },
    {
      number: "04",
      title: "Video Production",
      description: "After we get a good understanding of your channel and video needs, our team will start right away. Your video, including the script writing, voiceover, editing and the thumbnail, will be ready in 60-72 hours tops.",
      icon: "🎬",
    },
    {
      number: "05",
      title: "Approval + Delivery",
      description: "After we finish your video, you can ask for any changes you want. We'll make sure you're completely happy with the final result before delivery!",
      icon: "✅",
    },
    {
      number: "06",
      title: "Growth & Automation",
      description: "As we continue working together, the process becomes automated. You own the channel, we handle the work, and your channel grows consistently. Sit back and relax. We take care of everything while you focus on growth.",
      icon: "🚀",
    },
  ]

  const existingSteps = [
    {
      number: "01",
      title: "Channel Review",
      description: "We review your current channel, content, and performance to understand what needs improvement.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Choose a Video Package",
      description: "After selecting a package from our pricing section or scheduling a call, you'll be connected with our team to share all the necessary details and specific requests for your video.",
      icon: "📦",
    },
    {
      number: "03",
      title: "Content Planning",
      description: "We plan better video ideas and content direction based on your niche and goals.",
      icon: "📋",
    },
    {
      number: "04",
      title: "Video Production",
      description: "After we get a good understanding of your channel and video needs, our team will start right away. Your video, including the script writing, voiceover, editing and the thumbnail, will be ready in 60-72 hours tops.",
      icon: "🎬",
    },
    {
      number: "05",
      title: "Approval + Delivery",
      description: "After we finish your video, you can ask for any changes you want. We'll make sure you're completely happy with the final result before delivery!",
      icon: "✅",
    },
    {
      number: "06",
      title: "Growth & Automation",
      description: "As we continue working together, the process becomes automated. You own the channel, we handle the work, and your channel grows consistently. Sit back and relax. We take care of everything while you focus on growth.",
      icon: "🚀",
    },
  ]

  const renderSteps = (steps: any[], title: string, subtitle: string, icon: React.ReactNode) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          {icon}
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {title}
          </h3>
        </div>
        <p className="text-sm text-white/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line - hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-600 opacity-30 rounded-full" />

        <div className="space-y-6 lg:space-y-1">
          {steps.map((step, index) => (
            <motion.div
              key={`${title}-${step.number}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className="flex-1 lg:w-5/12">
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-3 hover:scale-105 hover:border-purple-500/50 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(147,51,234,0.2)] overflow-hidden">
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="text-2xl mb-2 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">{step.icon}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-600 drop-shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                        {step.number}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-300">{step.title}</h4>
                    </div>
                    <p className="text-white/70 leading-relaxed text-xs">
                      {step.description}
                    </p>

                    {/* Hover arrow */}
                    <div className="mt-3 flex items-center text-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <span className="text-xs font-semibold mr-2">Learn more</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full backdrop-blur-xl bg-purple-600/20 border-4 border-purple-500/30 items-center justify-center z-10 shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                <CheckCircle2 className="h-6 w-6 text-purple-500 drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]" />
              </div>

              {/* Spacer for other side */}
              <div className="hidden lg:block flex-1 w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="process" className="py-6 px-4 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl sm:text-3xl font-bold mb-3">
            Process
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            How It{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-600">
              Works…
            </span>
          </h3>
          <p className="text-sm text-white/70 max-w-2xl mx-auto mb-2">
            A simple and smooth process to scale your YouTube automation channel.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className={`text-sm font-semibold transition-colors duration-300 ${showBeginners ? 'text-white' : 'text-white/50'}`}>
              Beginners
            </span>
            <button
              onClick={() => setShowBeginners(!showBeginners)}
              className="relative w-16 h-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              <div className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transition-all duration-300 shadow-lg ${
                showBeginners ? 'left-1' : 'left-9'
              }`} />
            </button>
            <span className={`text-sm font-semibold transition-colors duration-300 ${!showBeginners ? 'text-white' : 'text-white/50'}`}>
              Existing Channels
            </span>
          </div>
        </motion.div>

        <div ref={ref} className="relative">
          <AnimatePresence mode="wait">
            {showBeginners ? (
              renderSteps(
                beginnerSteps,
                "For Beginners (Starting From Scratch)",
                "Perfect for creators who want to start their YouTube journey with professional help",
                <Users className="h-8 w-8 text-purple-500" />
              )
            ) : (
              renderSteps(
                existingSteps,
                "For Existing Channels",
                "Optimize and scale your current YouTube channel with our proven automation system",
                <TrendingUp className="h-8 w-8 text-purple-500" />
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
