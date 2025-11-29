"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "./ui/button"

export function WorkGallery() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder work items
  const works = [
    {
      id: 1,
      title: "Tech Review Channel",
      category: "Editing & Automation",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      views: "2M+ views",
    },
    {
      id: 2,
      title: "Gaming Commentary",
      category: "Full Production",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      views: "5M+ views",
    },
    {
      id: 3,
      title: "Educational Series",
      category: "Scripts & Voiceover",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      views: "1.5M+ views",
    },
    {
      id: 4,
      title: "Lifestyle Vlog",
      category: "Editing & Thumbnails",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      views: "3M+ views",
    },
    {
      id: 5,
      title: "Music Production",
      category: "Full Production",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
      views: "4M+ views",
    },
    {
      id: 6,
      title: "Business Tips",
      category: "Scripts & SEO",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      views: "2.5M+ views",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return
    
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? works.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage((selectedImage + 1) % works.length)
    }
  }

  return (
    <>
      <section id="work" className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
                Best Work
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the results we've delivered for creators across different niches.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-video rounded-2xl overflow-hidden glass-light dark:glass-dark cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Thumbnail */}
                <div className="absolute inset-0">
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold text-indigo-400 mb-2">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {work.views}
                  </p>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/50 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={works[selectedImage].thumbnail}
                alt={works[selectedImage].title}
                fill
                className="object-contain rounded-lg"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-sm text-indigo-400 mb-1">
                  {works[selectedImage].category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {works[selectedImage].title}
                </h3>
                <p className="text-gray-300">{works[selectedImage].views}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
