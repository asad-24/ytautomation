"use client"

import Link from "next/link"
import { Youtube, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Video Editing", href: "#services" },
        { label: "Automation", href: "#services" },
        { label: "Voiceover", href: "#services" },
        { label: "Scripts", href: "#services" },
        { label: "Thumbnails", href: "#services" },
        { label: "SEO", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "Our Work", href: "#work" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Contact", href: "#book-call" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ]

  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl">
                YT
              </div>
              <span className="font-bold text-xl">YT Services</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Professional YouTube services to scale your channel and maximize growth.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass hover:glass-light dark:hover:glass-dark flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 YT Services. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href="mailto:Leoytautomation@gmail.com" className="hover:text-foreground transition-colors">
              Leoytautomation@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
