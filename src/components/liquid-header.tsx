"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { useState, useRef } from "react"
import { useLiquid } from "@/contexts/liquid-context"
import { LiquidThemeName } from "@/lib/liquid-themes"

export function LiquidHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const { triggerRipple, setActiveTheme } = useLiquid()
  const { scrollY } = useScroll()

  const headerBlur = useTransform(scrollY, [0, 100], [8, 20])
  const headerOpacity = useTransform(scrollY, [0, 100], [0.7, 1])
  const headerBg = useTransform(scrollY, [0, 50], [0, 0.95])

  const navItems: { label: string; href: string; theme: LiquidThemeName }[] = [
    { label: "Services", href: "#services", theme: "services" },
    { label: "Our Work", href: "#work", theme: "hero" },
    { label: "Case Studies", href: "#case-studies", theme: "caseStudies" },
    { label: "Pricing", href: "#pricing", theme: "pricing" },
    { label: "Process", href: "#process", theme: "testimonials" },
  ]

  const handleNavClick = (e: React.MouseEvent, href: string, theme: LiquidThemeName) => {
    e.preventDefault()
    
    // Get click position relative to header
    const rect = headerRef.current?.getBoundingClientRect()
    if (rect) {
      const x = e.clientX
      const y = e.clientY
      triggerRipple(x, y)
    }

    // Change theme
    setActiveTheme(theme)

    // Smooth scroll
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)

    setMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <motion.nav
          style={{
            backdropFilter: `blur(${headerBlur}px)`,
          }}
          className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl border border-white/10"
        >
          {/* Solid Dark Background on Scroll */}
          <motion.div
            className="absolute inset-0 bg-black/95"
            style={{ opacity: headerBg }}
          />

          {/* Liquid Glass Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5"
            style={{ opacity: headerOpacity }}
          />

          {/* Subtle Glow Edge */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 dark:ring-white/10 pointer-events-none" />
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: "0 0 40px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          />

          {/* Content */}
          <div className="relative px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              onClick={(e) => {
                e.preventDefault()
                const rect = headerRef.current?.getBoundingClientRect()
                if (rect) {
                  triggerRipple(e.clientX, e.clientY)
                }
                setActiveTheme("hero")
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white text-xl shadow-lg"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-600/20 animate-pulse" />
                <span className="relative z-10">YT</span>
              </motion.div>
              <span className="font-bold text-lg hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
                YTAGENCY
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link href={item.href} onClick={(e) => handleNavClick(e, item.href, item.theme)}>
                    <Button
                      variant="ghost"
                      className="group relative overflow-hidden hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
                    >
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Liquid Hover Glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100"
                        initial={false}
                        whileHover={{
                          scale: [1, 1.2, 1],
                          transition: { duration: 0.6, repeat: Infinity },
                        }}
                      />

                      {/* Bubble Float */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400/40 rounded-full blur-sm"
                        animate={{
                          y: [-20, -40, -20],
                          x: [-5, 5, -5],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  asChild
                  className="hidden sm:flex relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <Link
                    href="https://wa.me/923030249973"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      const rect = headerRef.current?.getBoundingClientRect()
                      if (rect) {
                        triggerRipple(e.clientX, e.clientY)
                      }
                    }}
                  >
                    <span className="relative z-10">Book a Call</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-600/30"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </Link>
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-white/10 dark:hover:bg-white/5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 bg-black/95" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
              <div className="relative p-4 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.theme)}
                  >
                    <Button variant="ghost" className="w-full justify-start hover:bg-white/10 dark:hover:bg-white/5">
                      {item.label}
                    </Button>
                  </Link>
                ))}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                >
                  <Link
                    href="https://wa.me/923030249973"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      const rect = headerRef.current?.getBoundingClientRect()
                      if (rect) triggerRipple(e.clientX, e.clientY)
                      setMobileMenuOpen(false)
                    }}
                  >
                    Book a Call
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  )
}
