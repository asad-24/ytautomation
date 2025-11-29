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
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
              Creators Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="glass-light dark:glass-dark rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-8 right-8 h-20 w-20 text-indigo-500/10" />

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].channel}
                  </div>
                  <div className="text-sm text-indigo-500 font-semibold">
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
              className="glass hover:glass-light dark:hover:glass-dark rounded-full"
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="glass hover:glass-light dark:hover:glass-dark rounded-full"
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
