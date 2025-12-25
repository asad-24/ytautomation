"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "./ui/button"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Tech Reviewer",
      channel: "TechGenius",
      subscribers: "150K",
      content: "The team transformed my channel completely. The editing quality is cinema-level, and the automation tools saved me countless hours. My views increased by 400% in just 6 months!",
      avatar: "AR",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Fitness Coach",
      channel: "FitLife Pro",
      subscribers: "200K",
      content: "Best investment I've made in my channel. The thumbnails alone increased my CTR by 60%. The team understands YouTube algorithm perfectly and delivers consistently.",
      avatar: "SJ",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Gaming Creator",
      channel: "GameMaster",
      subscribers: "500K",
      content: "Working with this team feels like having a professional studio at my disposal. They handle everything from editing to SEO, letting me focus purely on creating content.",
      avatar: "MC",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Educational Content",
      channel: "LearnWithEmma",
      subscribers: "180K",
      content: "The script writing and voiceover services are incredible. They helped me find my unique voice and style. My audience engagement has never been better!",
      avatar: "EW",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 px-4 overflow-hidden relative">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-600">
              Creators Say
            </span>
          </h2>
          <p className="text-base text-white/70">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-200 hover:shadow-[0_0_50px_rgba(147,51,234,0.2)]">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 h-16 w-16 text-purple-500/20 drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]" />

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-500 drop-shadow-[0_0_6px_rgba(147,51,234,0.6)]" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl leading-relaxed mb-6 text-white/90">
                "{testimonials[activeIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-lg text-white">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-white/60">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].channel}
                  </div>
                  <div className="text-sm text-purple-500 font-semibold drop-shadow-[0_0_4px_rgba(147,51,234,0.4)]">
                    {testimonials[activeIndex].subscribers} Subscribers
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="backdrop-blur-xl bg-white/5 border-white/20 hover:bg-white/10 hover:border-purple-500/50 rounded-full text-white hover:text-purple-400 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-purple-500 to-pink-600 shadow-[0_0_10px_rgba(147,51,234,0.6)]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="backdrop-blur-xl bg-white/5 border-white/20 hover:bg-white/10 hover:border-purple-500/50 rounded-full text-white hover:text-purple-400 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
