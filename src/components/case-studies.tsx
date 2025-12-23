"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import { motion } from "framer-motion"

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
  ]

  return (
    <section id="case-studies" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        <div ref={ref} className="space-y-12">
          {/* Channel Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {channelImages.flatMap((channel) =>
              channel.images.map((image, imageIndex) => (
                <motion.div
                  key={`${channel.channel}-${imageIndex}`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (channelImages.indexOf(channel) * 3 + imageIndex) * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="relative aspect-video rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${channel.channel} thumbnail ${imageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Channel label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="backdrop-blur-xl bg-black/50 border border-white/20 rounded-xl px-3 py-2">
                      <p className="text-white text-sm font-semibold">{channel.channel}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
