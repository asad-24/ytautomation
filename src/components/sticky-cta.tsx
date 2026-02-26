"use client"

import { Phone } from "lucide-react"
import Link from "next/link"

export function StickyCTA() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
      <div className="rounded-full shadow-2xl backdrop-blur-xl bg-purple-600">
        <Link
          href="https://wa.me/923140602566"
          target="_blank"
          rel="noopener noreferrer"
          id="book-call"
          className="group relative overflow-hidden bg-transparent hover:bg-transparent text-white border-0 shadow-none px-6 py-4 text-base rounded-full shadow-2xl backdrop-blur-xl inline-flex items-center justify-center"
        >
          <span className="relative z-10 flex items-center gap-3 cursor-pointer">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">Contact Us</span>
          </span>
        </Link>
      </div>
    </div>
  )
}
