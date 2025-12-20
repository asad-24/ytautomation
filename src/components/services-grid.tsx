"use client"

import { motion } from "framer-motion"
import { Edit3, Zap, Mic, FileText, Image, TrendingUp } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ServicesGrid() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const services = [
    {
      icon: TrendingUp,
      title: "1. Niche Research",
      description: "Identification of profitable niches • Competitor & audience analysis",
      gradient: "from-purple-600 to-pink-600",
      highlights: ["Profitable niche identification", "Competitor analysis", "Audience research"],
    },
    {
      icon: FileText,
      title: "2. Content & Idea Research",
      description: "Viral topic discovery • High-CTR & high-retention content angles • Competitor performance breakdown • Evergreen + trending hybrid ideas",
      gradient: "from-purple-500 to-purple-600",
      highlights: ["Viral topics", "High-CTR angles", "Performance analysis"],
    },
    {
      icon: Edit3,
      title: "3. High-Retention Script Writing",
      description: "Engaging, story-driven scripts • Strong hooks and retention-focused structure • SEO-optimized and fact-checked writing • Tailored tone & style for your niche",
      gradient: "from-pink-600 to-purple-700",
      highlights: ["Story-driven scripts", "Strong hooks", "SEO-optimized"],
    },
    {
      icon: Mic,
      title: "4. Professional Voiceovers",
      description: "Studio-quality male & female voiceovers • US, UK, and Neutral accents available • Emotion-driven delivery for better retention",
      gradient: "from-purple-600 to-pink-600",
      highlights: ["Studio quality", "Multiple accents", "Emotion-driven"],
    },
    {
      icon: Zap,
      title: "5. Video Editing (Premium Quality)",
      description: "Fast-paced, engaging editing style • Stock footage and transitions • Background music & sound design • Optimized for maximum watch time",
      gradient: "from-purple-500 to-pink-500",
      highlights: ["Fast-paced editing", "Stock footage", "Sound design"],
    },
    {
      icon: Image,
      title: "6. Thumbnail Design (High CTR)",
      description: "Eye-catching, scroll-stopping designs • Strong emotions, bold text & clean layout • A/B tested hooks & visual psychology • Fully brand-consistent graphics",
      gradient: "from-pink-600 to-purple-700",
      highlights: ["Scroll-stopping designs", "A/B tested", "Brand-consistent"],
    },
    {
      icon: TrendingUp,
      title: "7. YouTube SEO Optimization",
      description: "Keyword research & metadata optimization • Title, description & tag optimization • Audience targeting & ranking strategy • Playlist & channel structure setup",
      gradient: "from-purple-600 to-pink-600",
      highlights: ["Keyword research", "Metadata optimization", "Ranking strategy"],
    },
    {
      icon: TrendingUp,
      title: "8. Growth Analysis & Performance Tracking",
      description: "Monthly analytics reports • Competitor benchmarking • Content performance insights • Growth strategy recommendations",
      gradient: "from-purple-500 to-purple-600",
      highlights: ["Analytics reports", "Benchmarking", "Strategy recommendations"],
    },
    {
      icon: Zap,
      title: "9. Channel Creation & Branding",
      description: "Complete YouTube channel setup • Professional logo & banner design • Branding guidelines (fonts, colors, style) • About section copywriting",
      gradient: "from-pink-600 to-purple-700",
      highlights: ["Complete setup", "Professional design", "Branding guidelines"],
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            YouTube Automation Services:{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-600">
              Step-by-Step
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Complete end-to-end YouTube automation solutions. From niche research to growth tracking—we handle everything.
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
              className="group relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="relative text-base text-white/90 leading-relaxed mb-4">{service.description}</p>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
