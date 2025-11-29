"use client"

import { useEffect, useRef, ReactNode } from "react"
import { useLiquid } from "@/contexts/liquid-context"
import { LiquidThemeName } from "@/lib/liquid-themes"

type LiquidSectionProps = {
  children: ReactNode
  theme: LiquidThemeName
  id?: string
  className?: string
}

export function LiquidSection({ children, theme, id, className = "" }: LiquidSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { setActiveTheme } = useLiquid()

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setActiveTheme(theme)
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -20% 0px",
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [theme, setActiveTheme])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative ${className}`}
    >
      {children}
    </section>
  )
}
