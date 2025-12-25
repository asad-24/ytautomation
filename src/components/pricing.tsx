"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { AddToCartModal } from "./add-to-cart-modal"
import { useState } from "react"

export function Pricing() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    planName: string
    planPrice: number
    planDescription: string
  }>({
    isOpen: false,
    planName: "",
    planPrice: 0,
    planDescription: "",
  })

  const openModal = (planName: string, planPrice: number, planDescription: string) => {
    setModalState({
      isOpen: true,
      planName,
      planPrice,
      planDescription,
    })
  }

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }))
  }

  const plans = [
    {
      name: "STARTER PACKAGE",
      description: "Ideal for beginners",
      originalPrice: 110,
      discountedPrice: 99,
      features: [
        "Profitable Niche Research",
        "Channel Setup (Logo, Banner)",
        "1 Best Quality Video (10-15 Mins Duration)",
        "High-quality thumbnail",
        "Cost: $99 (Limited Time – More Than 10% Discount Included)",
      ],
      gradient: "from-purple-500 to-purple-600",
      popular: false,
    },
    {
      name: "Standard",
      description: "Perfect for channels ready to step up their content game",
      originalPrice: 450,
      discountedPrice: 399,
      features: [
        "10 high-quality videos",
        "Duration 10-15 minutes",
        "Premium scripts",
        "Multiple voice over choices",
        "Advanced video editing",
        "High CTR thumbnails",
        "SEO services",
        "Unlimited Revisions",
      ],
      gradient: "from-purple-600 to-pink-600",
      popular: true,
    },
    {
      name: "Premium",
      description: "Your monthly solution for consistent growth",
      originalPrice: 800,
      discountedPrice: 699,
      features: [
        "15 high-quality videos",
        "Duration 10-15 minutes",
        "Premium scripts",
        "Multiple voice over choices",
        "Advanced video editing",
        "High CTR thumbnails",
        "SEO services",
        "Unlimited Revisions",
      ],
      gradient: "from-pink-600 to-purple-700",
      popular: false,
      recommended: true,
    },
    {
      name: "Seconds Commercial Ad",
      description: "Professional commercial advertisement",
      originalPrice: 250,
      discountedPrice: 200,
      features: [
        "Seconds Commercial Ad",
        "Voiceover",
        "Scriptwriting",
        "Cinematic Footages",
        "Text Overlay",
        "High Quality Editing",
        "Unlimited revisions",
      ],
      gradient: "from-red-600 to-red-700",
      popular: false,
    },
  ]

  const getPrice = (originalPrice: number, discountedPrice: number) => {
    return discountedPrice
  }

  return (
    <section id="pricing" className="py-8 px-4 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-600">
              Video Packages
            </span>
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto mb-8">
            Choose the package that fits your content needs. All packages include high-quality production and unlimited revisions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl hover:scale-105 hover:border-purple-500/50 transition-all duration-500 group hover:shadow-[0_0_50px_rgba(147,51,234,0.25)] overflow-visible ${
                plan.popular ? "lg:pb-12 border-purple-500/30" : ""
              }`}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-50">
                  <div className="flex items-center gap-2 px-2 w-40 py-3 h-12  bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-base font-bold shadow-[0_0_30px_rgba(147,51,234,0.8)] border-2 border-white/20">
                    <Sparkles className="h-5 w-5 animate-pulse" />
                    Most Popular
                  </div>
                </div>
              )}
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-50">
                  <div className="flex items-center gap-2 px-6 py-3 h-12 w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-base font-bold shadow-[0_0_30px_rgba(34,197,94,0.8)] border-2 border-white/20">
                    <Check className="h-5 w-5 animate-pulse" />
                    Recommended
                  </div>
                </div>
              )}
              <div className="relative z-10">
                {/* Plan header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">{plan.name}</h3>
                  <p className="text-sm text-white/60">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-white/50 line-through">
                        ${plan.originalPrice}
                      </span>
                      <span className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 to-green-500">
                        ${getPrice(plan.originalPrice, plan.discountedPrice)}
                      </span>
                    </div>
                    <span className="text-sm text-green-400 font-semibold">
                      Limited Time – More Than 10% Discount Included
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-purple-500 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(147,51,234,0.6)]" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => openModal(plan.name, getPrice(plan.originalPrice, plan.discountedPrice), plan.description)}
                  className={`w-full cursor-pointer transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-800"
                      : "backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-purple-500/50 text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-600/20"
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom pricing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 mb-4 text-base">
            Need a custom plan? Let's talk about your specific requirements.
          </p>
          <Button variant="outline" size="lg" asChild className="backdrop-blur-xl bg-white/5 border-white/20 hover:bg-white/10 hover:border-purple-500/50 text-white hover:text-purple-400 transition-all duration-300">
            <Link href="https://wa.me/923187588853" target="_blank" rel="noopener noreferrer">Contact Sales</Link>
          </Button>
        </motion.div>
      </div>

      {/* Add to Cart Modal */}
      <AddToCartModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        planName={modalState.planName}
        planPrice={modalState.planPrice}
        planDescription={modalState.planDescription}
      />
    </section>
  )
}
