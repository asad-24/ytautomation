"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function WorkGallery() {
  const [isPausedRow1, setIsPausedRow1] = useState(false)
  const [isPausedRow2, setIsPausedRow2] = useState(false)

  // First row images (moves left to right)
  const row1Images = [
    "/how/Untitled design (1).jpg",
    "/how/Untitled design (2).jpg",
    "/how/Untitled design (3).jpg",
    "/how/Untitled design (4).jpg",
    "/how/Untitled design (5).jpg",
    "/how/Untitled design (6).jpg",
    "/how/Untitled design (7).jpg",
    "/how/Untitled design (8).jpg",
    "/how/Untitled design (9).jpg",
    "/how/Untitled design (10).jpg",
    "/how/15.jpeg",
    "/how/17.jpeg",
    "/how/19.jpeg",
    "/how/7 habits killing your engine thumbnail.jpg",
  ]

  // Second row images (moves right to left)
  const row2Images = [
    "/how/Untitled design (11).jpg",
    "/how/Untitled design (12).jpg",
    "/how/Untitled design (13).jpg",
    "/how/Untitled design (14).jpg",
    "/how/Untitled design (15).jpg",
    "/how/Untitled design (16).jpg",
    "/how/Untitled design (17).jpg",
    "/how/Untitled design (18).jpg",
    "/how/Untitled design (19).jpg",
    "/how/Untitled design (20).jpg",
    "/how/STOP USING DISH SOAP & SPONGES THUMBNAIL.jpg",
    "/how/THUMBNAIL 2 (1).png",
    "/how/rich_l.webp",
    "/how/rrr.webp",
  ]

  // Duplicate arrays for seamless loop
  const duplicatedRow1 = [...row1Images, ...row1Images]
  const duplicatedRow2 = [...row2Images, ...row2Images]

  return (
    <>
      <section id="work" className="py-24 px-4">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Some of Our{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-600">
                Work!!
              </span>
            </h2>
            <p className="text-base text-white/70 max-w-2xl mx-auto">
              Take a look at some of our premium quality thumbnail designs and videos we've made for our clients!
            </p>
          </div>
        </div>

        {/* First Row - Left to Right */}
        <div 
          className="relative flex overflow-hidden mb-6"
          onMouseEnter={() => setIsPausedRow1(true)}
          onMouseLeave={() => setIsPausedRow1(false)}
        >
          <motion.div
            className="flex gap-6 pr-6"
            animate={{
              x: isPausedRow1 ? 0 : [0, -3360],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedRow1.map((image, index) => (
              <Link key={`row1-${index}`} href="https://drive.google.com/drive/folders/1JnhCMppSMNmna59w5wNW0VsniaQDmWus?usp=sharing" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="shrink-0 w-80 h-48 relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] group"
                  whileHover={{ y: -8 }}
                >
                <Image
                  src={image}
                  alt={`Work ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="320px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.div>
            </Link>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div 
          className="relative flex overflow-hidden"
          onMouseEnter={() => setIsPausedRow2(true)}
          onMouseLeave={() => setIsPausedRow2(false)}
        >
          <motion.div
            className="flex gap-6 pr-6"
            animate={{
              x: isPausedRow2 ? 0 : [-3360, 0],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedRow2.map((image, index) => (
              <Link key={`row2-${index}`} href="https://drive.google.com/drive/folders/1JnhCMppSMNmna59w5wNW0VsniaQDmWus?usp=sharing" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="shrink-0 w-80 h-48 relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] group"
                  whileHover={{ y: -8 }}
                >
                <Image
                  src={image}
                  alt={`Work ${row1Images.length + index + 1}`}
                  fill
                  className="object-cover"
                  sizes="320px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.div>
            </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
