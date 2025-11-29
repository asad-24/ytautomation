"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { TrendingUp, Users, Eye, Clock } from "lucide-react"

export function CaseStudies() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const caseStudies = [
    {
      client: "TechGenius",
      niche: "Technology Reviews",
      metrics: [
        { label: "Views", from: 50000, to: 2000000, suffix: "", icon: Eye },
        { label: "Subscribers", from: 5000, to: 150000, suffix: "", icon: Users },
        { label: "Revenue", from: 500, to: 15000, suffix: "/mo", icon: TrendingUp },
        { label: "Time Saved", from: 0, to: 80, suffix: "hrs/mo", icon: Clock },
      ],
      timeframe: "6 months",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      client: "FitLife Pro",
      niche: "Fitness & Wellness",
      metrics: [
        { label: "Views", from: 30000, to: 1500000, suffix: "", icon: Eye },
        { label: "Subscribers", from: 8000, to: 200000, suffix: "", icon: Users },
        { label: "Revenue", from: 800, to: 22000, suffix: "/mo", icon: TrendingUp },
        { label: "Time Saved", from: 0, to: 60, suffix: "hrs/mo", icon: Clock },
      ],
      timeframe: "8 months",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="case-studies" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Real Results,{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
              Real Growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped creators transform their channels.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-12">
          {caseStudies.map((study, studyIndex) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: studyIndex * 0.2, duration: 0.6 }}
              className="glass-light dark:glass-dark rounded-3xl p-8 md:p-12 overflow-hidden relative"
            >
              {/* Background gradient */}
              <div className={`absolute top-0 right-0 w-1/2 h-full bg-linear-to-l ${study.gradient} opacity-5`} />

              {/* Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{study.client}</h3>
                    <p className="text-muted-foreground">{study.niche}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Timeframe</div>
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
                      {study.timeframe}
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6">
                {study.metrics.map((metric, metricIndex) => (
                  <MetricCard
                    key={metric.label}
                    metric={metric}
                    isInView={isInView}
                    delay={metricIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MetricCard({
  metric,
  isInView,
  delay,
}: {
  metric: {
    label: string
    from: number
    to: number
    suffix: string
    icon: React.ElementType
  }
  isInView: boolean
  delay: number
}) {
  const count = useMotionValue(metric.from)
  const rounded = useTransform(count, (latest) => {
    return latest >= 1000
      ? (latest / 1000).toFixed(1) + "K"
      : Math.round(latest).toString()
  })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const controls = animate(count, metric.to, {
        duration: 2,
        delay,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, count, metric.to, delay])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative p-6 glass rounded-xl hover:scale-105 transition-transform duration-300"
    >
      <metric.icon className="h-8 w-8 text-indigo-500 mb-3" />
      <div className="text-3xl font-bold mb-1">
        <motion.span>{rounded}</motion.span>
        {metric.suffix && <span className="text-lg">{metric.suffix}</span>}
      </div>
      <div className="text-sm text-muted-foreground">{metric.label}</div>

      {/* Arrow indicator */}
      <div className="absolute top-4 right-4">
        <TrendingUp className="h-5 w-5 text-green-500" />
      </div>
    </motion.div>
  )
}
