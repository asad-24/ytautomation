"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Pricing", href: "#pricing" },
    { label: "Process", href: "#process" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <nav className="glass-light dark:glass-dark rounded-2xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center font-bold text-white text-xl"
            >
              YT
            </motion.div>
            <span className="font-bold text-xl hidden sm:inline">YT Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="hover:glass transition-all duration-300"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button
              asChild
              className="hidden sm:flex bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="#book-call">Book a Call</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-2 glass-light dark:glass-dark rounded-2xl p-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white"
              >
                <Link href="#book-call" onClick={() => setMobileMenuOpen(false)}>
                  Book a Call
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
