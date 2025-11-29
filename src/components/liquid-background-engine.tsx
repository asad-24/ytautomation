"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { useLiquid } from "@/contexts/liquid-context"
import { liquidThemes } from "@/lib/liquid-themes"

export function LiquidBackgroundEngine() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const { activeTheme, ripples, isTransitioning } = useLiquid()
  const [useWebGL, setUseWebGL] = useState(true)
  const [mounted, setMounted] = useState(false)

  const currentTheme = liquidThemes[activeTheme]
  const isDark = theme === "dark"
  const themeColors = isDark ? currentTheme.dark : currentTheme.light

  useEffect(() => {
    setMounted(true)
    
    // Detect low-power devices
    const isLowPower = 
      /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator as any).deviceMemory < 4
    
    setUseWebGL(!isLowPower)
  }, [])

  useEffect(() => {
    if (!useWebGL || !canvasRef.current || !mounted) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener("resize", resize)

    // Liquid particle system
    class LiquidParticle {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      speedX: number
      speedY: number
      hue: number
      alpha: number

      constructor(x: number, y: number, hue: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 4 + 2
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15
        this.hue = hue
        this.alpha = Math.random() * 0.5 + 0.4
      }

      update(time: number, ripples: any[]) {
        // Natural flow
        const dx = this.x - this.baseX
        const dy = this.y - this.baseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance > 100) {
          this.x += (this.baseX - this.x) * 0.02
          this.y += (this.baseY - this.y) * 0.02
        } else {
          this.x += this.speedX + Math.sin(time * 0.0005 + this.baseX * 0.01) * 0.5
          this.y += this.speedY + Math.cos(time * 0.0005 + this.baseY * 0.01) * 0.5
        }

        // Ripple distortion
        ripples.forEach((ripple) => {
          const rdx = this.x - ripple.x
          const rdy = this.y - ripple.y
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy)
          const rippleAge = Date.now() - ripple.timestamp
          const rippleRadius = rippleAge * 0.5
          
          if (rdist < rippleRadius && rdist > rippleRadius - 100) {
            const force = (1 - (rippleAge / 1500)) * 5
            this.x += (rdx / rdist) * force
            this.y += (rdy / rdist) * force
          }
        })

        // Wrap around edges
        if (this.x < -50) this.x = window.innerWidth + 50
        if (this.x > window.innerWidth + 50) this.x = -50
        if (this.y < -50) this.y = window.innerHeight + 50
        if (this.y > window.innerHeight + 50) this.y = -50
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 4
        )
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, ${this.alpha})`)
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 60%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    let particles: LiquidParticle[] = []

    const initParticles = () => {
      particles = []
      const particleCount = 40
      const hues = isDark ? [190, 260, 320] : [190, 260, 320]

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const hue = hues[Math.floor(Math.random() * hues.length)]
        particles.push(new LiquidParticle(x, y, hue))
      }
    }

    initParticles()

    const animate = () => {
      time += 16

      // Clear with fade effect for pure black background
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(time, ripples)
        particle.draw(ctx)
      })

      // Draw connections between nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.strokeStyle = `rgba(150, 180, 255, ${
              0.3 * (1 - distance / 120)
            })`
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [useWebGL, mounted, isDark, ripples])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Layer 1: Base Gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTheme}-${isDark ? "dark" : "light"}-base`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${themeColors.base[0]} 0%, ${themeColors.base[1]} 50%, ${themeColors.base[2]} 100%)`,
          }}
        />
      </AnimatePresence>

      {/* Layer 2: Animated Blobs (CSS Fallback) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTheme}-${isDark ? "dark" : "light"}-blobs`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute top-[10%] left-[15%] w-96 h-96 rounded-full blur-3xl animate-blob"
            style={{ backgroundColor: themeColors.blobs[0] }}
          />
          <div className="absolute top-[30%] right-[20%] w-[32rem] h-[32rem] rounded-full blur-3xl animate-blob animation-delay-2000"
            style={{ backgroundColor: themeColors.blobs[1] }}
          />
          <div className="absolute bottom-[15%] left-[25%] w-[28rem] h-[28rem] rounded-full blur-3xl animate-blob animation-delay-4000"
            style={{ backgroundColor: themeColors.blobs[2] }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Layer 3: WebGL Canvas Enhancement */}
      {useWebGL && (
        <AnimatePresence>
          <motion.canvas
            ref={canvasRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pointer-events-none"
            style={{ mixBlendMode: "screen" }}
          />
        </AnimatePresence>
      )}

      {/* Layer 4: Shimmer Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTheme}-${isDark ? "dark" : "light"}-shine`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${themeColors.shine[0]} 0%, transparent 50%), radial-gradient(circle at 70% 80%, ${themeColors.shine[1]} 0%, transparent 60%)`,
            mixBlendMode: "screen",
          }}
        />
      </AnimatePresence>

      {/* Glow Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-800"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${themeColors.glow} 0%, transparent 70%)`,
          opacity: isTransitioning ? 0.5 : 0.35,
        }}
      />

      {/* Ripple Effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.timestamp}
            initial={{
              scale: 0,
              opacity: 0.8,
              x: ripple.x - 50,
              y: ripple.y - 50,
            }}
            animate={{
              scale: 8,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute w-24 h-24 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${themeColors.glow} 0%, transparent 70%)`,
              border: `2px solid ${themeColors.glow}`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Final Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />
    </div>
  )
}
