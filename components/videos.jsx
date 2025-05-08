"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Download } from "lucide-react"

// Sample video thumbnails - replace with actual wedding video thumbnails
const videoItems = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  thumbnail: "/2.jpg",
  title: `Wedding Video ${i + 1}`,
  duration: `${Math.floor(Math.random() * 5) + 1}:${Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, "0")}`,
}))

export default function Videos() {
  const containerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimeoutRef = useRef(null)

  const handleMouseEnter = () => {
    setIsPaused(true)
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
      pauseTimeoutRef.current = null
    }
  }

  const handleMouseLeave = () => {
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="min-h-[60vh] w-full bg-navy py-16">
      <div className="flex h-[60vh] flex-col items-center justify-center px-4">
        <h2 className="mb-8 font-serif text-4xl font-bold text-gold md:text-5xl">Our Special Moments</h2>
        <p className="mb-8 text-sm font-thin text-white md:text-xl">We have documented our fun moments as picture, join in the Celebration</p>
        <div className="w-full overflow-hidden">
          <div
            ref={containerRef}
            className="relative flex w-max gap-4 py-4"
            style={{
              animation: isPaused ? "none" : "scroll-right 60s linear infinite",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* First set of videos */}
            {videoItems.map((video) => (
              <div
                key={video.id}
                className="group relative h-64 w-80 flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-full w-full object-top object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-70"></div>
                {/* Rotating elements */}
                <div className="absolute right-10 top-10 h-8 w-8 animate-bounce rounded-full bg-gold/30 opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <p className="text-sm text-gray-300">{video.duration}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/40 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button className="rounded-full bg-white p-3 text-navy shadow-lg transition-transform hover:scale-110">
                      <Play size={24} />
                    </button>
                    <button className="rounded-full bg-white p-3 text-navy shadow-lg transition-transform hover:scale-110">
                      <Download size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless looping */}
            {videoItems.map((video) => (
              <div
                key={`dup-${video.id}`}
                className="group relative h-64 w-80 flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={video.thumbnail || "/1.jpg"}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-70"></div>
                {/* Rotating elements */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <p className="text-sm text-gray-300">{video.duration}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/40 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button className="rounded-full bg-white p-3 text-navy shadow-lg transition-transform hover:scale-110">
                      <Play size={24} />
                    </button>
                    <button className="rounded-full bg-white p-3 text-navy shadow-lg transition-transform hover:scale-110">
                      <Download size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
