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
      gradient: "from-blue-500 to-cyan-500",
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
      gradient: "from-indigo-500 to-purple-500",
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
      gradient: "from-purple-500 to-pink-500",
      popular: false,
    },
  ]

  const getPrice = (monthlyPrice: number, annualPrice: number) => {
    return billingPeriod === "monthly" ? monthlyPrice : Math.round(annualPrice / 12)
  }

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple,{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. Cancel anytime, no questions asked.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 glass-light dark:glass-dark rounded-full">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                billingPeriod === "annual"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                -10%
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative p-8 glass-light dark:glass-dark rounded-3xl hover:scale-105 transition-all duration-300 ${
                plan.popular ? "lg:-mt-4 lg:pb-12" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
                    ${getPrice(plan.monthlyPrice, plan.annualPrice)}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {billingPeriod === "annual" && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Billed ${plan.annualPrice} annually
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 shadow-lg"
                    : "glass hover:glass-light dark:hover:glass-dark"
                }`}
                size="lg"
              >
                <Link href="#book-call">Get Started</Link>
              </Button>

              {/* Decorative gradient border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Custom pricing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom plan? Let's talk about your specific requirements.
          </p>
          <Button variant="outline" size="lg" asChild className="glass hover:glass-light dark:hover:glass-dark">
            <Link href="#book-call">Contact Sales</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
