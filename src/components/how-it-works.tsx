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
    <section id="process" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How It{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process to take your channel to the next level.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-20" />

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
                  <div className="glass-light dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover arrow */}
                    <div className="mt-4 flex items-center text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold mr-2">Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass-light dark:glass-dark border-4 border-background items-center justify-center z-10">
                  <CheckCircle2 className="h-8 w-8 text-indigo-500" />
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
