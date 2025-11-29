"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"
import { LiquidThemeName } from "@/lib/liquid-themes"

type RippleEffect = {
  x: number
  y: number
  timestamp: number
}

type LiquidContextType = {
  activeTheme: LiquidThemeName
  setActiveTheme: (theme: LiquidThemeName) => void
  triggerRipple: (x: number, y: number) => void
  ripples: RippleEffect[]
  isTransitioning: boolean
}

const LiquidContext = createContext<LiquidContextType | undefined>(undefined)

export function LiquidProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveThemeState] = useState<LiquidThemeName>("hero")
  const [ripples, setRipples] = useState<RippleEffect[]>([])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const setActiveTheme = useCallback((theme: LiquidThemeName) => {
    setIsTransitioning(true)
    setActiveThemeState(theme)
    
    // Reset transition flag after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }, [])

  const triggerRipple = useCallback((x: number, y: number) => {
    const newRipple: RippleEffect = {
      x,
      y,
      timestamp: Date.now(),
    }
    
    setRipples((prev) => [...prev, newRipple])
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.timestamp !== newRipple.timestamp))
    }, 1500)
  }, [])

  return (
    <LiquidContext.Provider
      value={{
        activeTheme,
        setActiveTheme,
        triggerRipple,
        ripples,
        isTransitioning,
      }}
    >
      {children}
    </LiquidContext.Provider>
  )
}

export function useLiquid() {
  const context = useContext(LiquidContext)
  if (!context) {
    throw new Error("useLiquid must be used within LiquidProvider")
  }
  return context
}
