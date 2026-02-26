"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingCart, Check } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"

interface AddToCartModalProps {
  isOpen: boolean
  onClose: () => void
  planName: string
  planPrice: number
  planDescription: string
}

export function AddToCartModal({ isOpen, onClose, planName, planPrice, planDescription }: AddToCartModalProps) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    // Simulate adding to cart
    setTimeout(() => {
      // Redirect to WhatsApp
      window.open(`https://wa.me/923140602566?text=Hi! I'm interested in the ${planName} package ($${planPrice}). Can we discuss the details?`, '_blank')
      onClose()
      setIsAdded(false)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-sm w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-[0_0_50px_rgba(147,51,234,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Header */}
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Add to Cart</h3>
              <p className="text-white/70 text-sm">Ready to get started with your video production?</p>
            </div>

            {/* Plan details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-4">
              <h4 className="text-lg font-bold text-white mb-2">{planName}</h4>
              <p className="text-white/70 text-sm mb-3">{planDescription}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 to-green-500">
                  ${planPrice}
                </span>
                <span className="text-sm text-green-400 font-semibold">
                  Limited Time Discount
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full py-3 text-base font-semibold transition-all duration-300 ${
                isAdded
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  : "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
              } text-white border-0 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]`}
            >
              {isAdded ? (
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 animate-pulse" />
                  Added to Cart! Redirecting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart & Continue to WhatsApp
                </div>
              )}
            </Button>

            {/* Footer text */}
            <p className="text-center text-white/50 text-sm mt-3">
              You'll be redirected to WhatsApp to complete your order
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}