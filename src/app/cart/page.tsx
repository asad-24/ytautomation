"use client"

import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

function CartContent() {
  const searchParams = useSearchParams()
  const planName = searchParams.get('plan') || 'Unknown Plan'
  const planPrice = searchParams.get('price') || '0'
  const planDescription = searchParams.get('description') || 'No description available'
  const featuresParam = searchParams.get('features')
  const planFeatures = featuresParam ? JSON.parse(featuresParam) : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_0_50px_rgba(147,51,234,0.3)]"
      >
        <div className="text-center mb-6">
          <ShoppingCart className="h-16 w-16 text-purple-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Your Cart</h1>
          <p className="text-white/70">Review your selected package</p>
        </div>

        <div className="bg-white/5 rounded-2xl p-4 mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">{planName}</h2>
          <p className="text-white/70 text-sm mb-3">{planDescription}</p>
          {planFeatures.length > 0 && (
            <div className="mb-4">
              <h3 className="text-white font-medium mb-2">What's Included:</h3>
              <ul className="space-y-1">
                {planFeatures.map((feature: string, index: number) => (
                  <li key={index} className="text-white/80 text-sm flex items-center">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-3xl font-bold text-green-400">${planPrice}</p>
        </div>

        <div className="space-y-4">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            size="lg"
          >
            <Link
              href={`https://wa.me/923187588853?text=Hi! I'm interested in the ${planName} package ($${planPrice}). Can we discuss the details?`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Proceed to Checkout
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full backdrop-blur-xl bg-white/5 border-white/20 hover:bg-white/10 text-white"
            size="lg"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Packages
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default function CartPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartContent />
    </Suspense>
  )
}