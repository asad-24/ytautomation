"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export function Pricing() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for new creators",
      monthlyPrice: 499,
      annualPrice: 4490,
      features: [
        "2 videos per month",
        "Basic editing & color grading",
        "Thumbnail design",
        "SEO optimization",
        "Email support",
        "2 revisions per video",
      ],
      gradient: "from-red-500 to-red-600",
      popular: false,
    },
    {
      name: "Professional",
      description: "For growing channels",
      monthlyPrice: 999,
      annualPrice: 8990,
      features: [
        "5 videos per month",
        "Advanced editing & VFX",
        "Custom thumbnails",
        "Full SEO package",
        "Priority support",
        "Unlimited revisions",
        "Script writing",
        "Performance analytics",
      ],
      gradient: "from-red-600 to-red-700",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For established creators",
      monthlyPrice: 2499,
      annualPrice: 22490,
      features: [
        "Unlimited videos",
        "Dedicated editor team",
        "Full production suite",
        "Custom automation",
        "24/7 priority support",
        "Unlimited revisions",
        "Content strategy",
        "Multi-channel management",
        "Monthly strategy calls",
      ],
      gradient: "from-red-700 to-red-800",
      popular: false,
    },
  ]

  const getPrice = (monthlyPrice: number, annualPrice: number) => {
    return billingPeriod === "monthly" ? monthlyPrice : Math.round(annualPrice / 12)
  }

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple,{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-red-500 to-red-700">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. Cancel anytime, no questions asked.
          </p>

          {/* Simplified Billing Toggle */}
          <div className="inline-flex items-center gap-4">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-8 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-red-500 to-red-700 text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] scale-105 backdrop-blur-xl"
                  : "backdrop-blur-xl bg-white/5 border border-white/10 text-white/50 hover:text-white/80 hover:border-white/20"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-8 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 relative ${
                billingPeriod === "annual"
                  ? "bg-gradient-to-r from-red-500 to-red-700 text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] scale-105 backdrop-blur-xl"
                  : "backdrop-blur-xl bg-white/5 border border-white/10 text-white/50 hover:text-white/80 hover:border-white/20"
              }`}
            >
              Annual Billing
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full shadow-lg">
                Save 10%
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl hover:scale-105 hover:border-red-500/50 transition-all duration-500 group hover:shadow-[0_0_50px_rgba(239,68,68,0.25)] overflow-visible ${
                plan.popular ? "lg:pb-12 border-red-500/30" : ""
              }`}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-50">
                  <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full text-base font-bold shadow-[0_0_30px_rgba(239,68,68,0.8)] border-2 border-white/20">
                    <Sparkles className="h-5 w-5 animate-pulse" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="relative z-10">
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300">{plan.name}</h3>
                  <p className="text-sm text-white/60">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-red-500 to-red-700 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                      ${getPrice(plan.monthlyPrice, plan.annualPrice)}
                    </span>
                    <span className="text-white/60">/month</span>
                  </div>
                  {billingPeriod === "annual" && (
                    <p className="text-sm text-white/60 mt-2">
                      Billed ${plan.annualPrice} annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-red-500 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white border-0 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                      : "backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-red-500/50 text-white"
                  }`}
                  size="lg"
                >
                  <Link href="https://wa.me/923030249973" target="_blank" rel="noopener noreferrer">Get Started</Link>
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
          <p className="text-white/70 mb-4 text-lg">
            Need a custom plan? Let's talk about your specific requirements.
          </p>
          <Button variant="outline" size="lg" asChild className="backdrop-blur-xl bg-white/5 border-white/20 hover:bg-white/10 hover:border-red-500/50 text-white hover:text-red-400 transition-all duration-300">
            <Link href="https://wa.me/923030249973" target="_blank" rel="noopener noreferrer">Contact Sales</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
