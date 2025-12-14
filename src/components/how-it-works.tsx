"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function HowItWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We discuss your channel, goals, and challenges. Understand your vision and content style.",
      icon: "📞",
    },
    {
      number: "02",
      title: "Strategy & Plan",
      description: "Custom content strategy with timeline, milestones, and clear deliverables.",
      icon: "📋",
    },
    {
      number: "03",
      title: "Production",
      description: "Our team works on your content with regular check-ins and revisions.",
      icon: "🎬",
    },
    {
      number: "04",
      title: "Delivery & Optimize",
      description: "Receive polished content, publish, and we optimize based on performance data.",
      icon: "🚀",
    },
  ]

  return (
    <section id="process" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How It{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-red-500 to-red-700">
              Works
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A simple, proven process to take your channel to the next level.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-700 opacity-30 rounded-full" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 lg:w-5/12">
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-red-500/50 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(239,68,68,0.2)] overflow-hidden">
                    {/* Gradient background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="text-6xl mb-6 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">{step.icon}</div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                          {step.number}
                        </span>
                        <h3 className="text-3xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">{step.title}</h3>
                      </div>
                      <p className="text-white/70 leading-relaxed text-base">
                        {step.description}
                      </p>

                      {/* Hover arrow */}
                      <div className="mt-6 flex items-center text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                        <span className="text-sm font-semibold mr-2">Learn more</span>
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full backdrop-blur-xl bg-red-600/20 border-4 border-red-500/30 items-center justify-center z-10 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                  <CheckCircle2 className="h-10 w-10 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                </div>

                {/* Spacer for other side */}
                <div className="hidden lg:block flex-1 w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
