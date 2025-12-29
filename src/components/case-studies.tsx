"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export function CaseStudies() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const channelImages = [
    {
      channel: "Channel 1",
      images: [
        "/Channel 1/The Auto Brain.jpeg",
        "/Channel 1/The Auto Brain (1).jpeg",
        "/Channel 1/The Auto Brain (2).jpeg",
      ]
    },
    {
      channel: "Channel 2",
      images: [
        "/CHANNEL 2/KNOW A BIT MORE (1).jpeg",
        "/CHANNEL 2/KNOW A BIT MORE (2).jpeg",
        "/CHANNEL 2/KNOW A BIT MORE (3).jpeg",
      ]
    },
    {
      channel: "Channel 3",
      images: [
        "/CHANNEL 3/rush for gold (1).jpeg",
        "/CHANNEL 3/rush for gold (2).jpeg",
        "/CHANNEL 3/rush for gold (3).jpeg",
      ]
    },
    {
      channel: "Achievements",
      images: [
        "/Achivements/1.jpeg",
        "/Achivements/2.jpeg",
        "/Achivements/3.jpeg",
        "/Achivements/4.jpeg",
        "/Achivements/5.jpeg",
        "/Achivements/6.jpeg",
        "/Achivements/7.jpeg",
        "/Achivements/8.jpeg",
        "/Achivements/9.jpeg",
        "/Achivements/10.jpeg",
        "/Achivements/11.jpeg",
        "/Achivements/12.jpeg",
        "/Achivements/13.jpeg",
        "/Achivements/14.jpeg",
        "/Achivements/15.jpeg",
        "/Achivements/16.jpeg",
        "/Achivements/17.jpeg",
      ]
    },
  ]

  const allImages = channelImages.flatMap((channel) =>
    channel.images.map((image, imageIndex) => ({
      image,
      channel: channel.channel,
      index: imageIndex
    }))
  )

  const rows = [
    allImages.slice(0, 9),
    allImages.slice(9, 18),
    allImages.slice(18)
  ]

  return (
    <section id="case-studies" className="py-24 px-4">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real Results,{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-600">
              Real Growth
            </span>
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            See how we've helped creators transform their channels.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-4 overflow-x-auto md:overflow-x-visible md:flex-wrap md:justify-center pb-4 md:pb-0">
              {row.map((item, itemIndex) => (
                
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (rowIndex * 9 + itemIndex) * 0.1,
                      duration: 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="relative w-40 h-40 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-200 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] group cursor-pointer flex-shrink-0"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.channel} thumbnail ${item.index + 1}`}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.div>
               
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
