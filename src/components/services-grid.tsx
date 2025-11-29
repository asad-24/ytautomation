"use client"

import { motion } from "framer-motion"
import { Edit3, Zap, Mic, FileText, Image, TrendingUp } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ServicesGrid() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const services = [
    {
      icon: Edit3,
      title: "Video Editing",
      description: "Professional editing with smooth transitions, color grading, and effects that keep viewers engaged.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline your workflow with custom automation tools. Save 20+ hours per week on repetitive tasks.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Mic,
      title: "Voiceover",
      description: "Studio-quality voiceovers from professional voice actors in multiple languages and styles.",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: FileText,
      title: "Scripts",
      description: "Engaging, SEO-optimized scripts that hook viewers and boost retention. Research included.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Image,
      title: "Thumbnails",
      description: "Eye-catching thumbnails designed to maximize CTR. A/B tested designs for best results.",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "SEO",
      description: "Optimize titles, descriptions, and tags to rank higher in YouTube search and suggestions.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  }

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-service YouTube solutions that help you create, optimize, and scale your content.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 glass-light dark:glass-dark rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold mb-3">{service.title}</h3>
              <p className="relative text-muted-foreground">{service.description}</p>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
