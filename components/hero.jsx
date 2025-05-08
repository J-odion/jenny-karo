"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center w-full overflow-hidden top-0 pt-0 mt-0">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-4000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-top-[-20px] object-top"
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
            <div className="absolute inset-0 bg-navy/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-2 font-serif text-5xl font-bold md:text-9xl">Jennifer <br /> <span className="font-thin text-7xl">&</span> <br /> <span className="">Karo</span></h1>
        <p className="mb-8 text-xl md:text-2xl">Forever begins on June 07, 2025</p>
      </div>

      {/* Image Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-4">
        <button
          onClick={prevImage}
          className="rounded-full bg-gold/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-gold/40"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentImage ? "w-4 bg-gold" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextImage}
          className="rounded-full bg-gold/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-gold/40"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}
