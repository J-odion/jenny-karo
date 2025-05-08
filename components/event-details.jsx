"use client"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function EventDetails() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center  py-16">
      <div className="container px-4">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-navy md:text-5xl">Our Special Day</h2>

        {/* Details Section */}
        <div className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-navy">Event Details</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="mt-1 h-5 w-5 text-pink-600" />
                <div>
                  <h4 className="text-lg font-semibold text-navy">Date</h4>
                  <p className="text-gray-700">Saturday, June 07, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-pink-600" />
                <div>
                  <h4 className="text-lg font-semibold text-navy">Venue</h4>
                  <p className="text-gray-700">The Grand Ballroom</p>
                  <p className="text-gray-700">123 Wedding Lane, Celebration City</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-pink-600" />
                <div>
                  <h4 className="text-lg font-semibold text-navy">Time</h4>
                  <p className="text-gray-700">Ceremony: 2:00 PM</p>
                  <p className="text-gray-700">Reception: 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">
              <img src="/123.jpg" alt="Venue" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold">The Grand Ballroom</h3>
                <p>Where dreams come true</p>
              </div>
            </div>

            {/* Rotating elements */}
            <div className="absolute -left-4 -top-4 h-16 w-16 animate-spin-slow rounded-full border-4 border-gold opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 h-20 w-20 animate-bounce rounded-full border-4 border-pink-400 opacity-80"></div>
            <div className="absolute right-10 top-10 h-8 w-8  rounded-full bg-gold/30 opacity-80"></div>
            <div className="absolute -right-2 top-1/4 h-12 w-12 animate-bounce rounded-full bg-gold/30"></div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1 relative">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">
              <img
                src="/111.jpg"
                alt="Wedding Schedule"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
            </div>

            {/* Rotating elements */}
            <div className="absolute -right-4 -top-4 h-16 w-16 animate-bounce rounded-full border-4 border-gold opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 h-20 w-20 animate-bounce-reverse rounded-full border-4 border-pink-400 opacity-80"></div>
            <div className="absolute right-10 top-10 h-8 w-8  rounded-full bg-gold/30 opacity-80"></div>
            <div className="absolute -right-2 top-1/4 h-12 w-12 animate-bounce rounded-full bg-gold/30"></div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-navy">Schedule</h3>

            <div className="space-y-4">
              <div className="border-l-2 border-gold pl-4">
                <h4 className="text-lg font-semibold text-navy">1:30 PM</h4>
                <p className="text-gray-700">Guest Arrival</p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <h4 className="text-lg font-semibold text-navy">2:00 PM</h4>
                <p className="text-gray-700">Ceremony Begins</p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <h4 className="text-lg font-semibold text-navy">3:00 PM</h4>
                <p className="text-gray-700">Cocktail Hour</p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <h4 className="text-lg font-semibold text-navy">5:00 PM</h4>
                <p className="text-gray-700">Reception & Dinner</p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <h4 className="text-lg font-semibold text-navy">9:00 PM</h4>
                <p className="text-gray-700">Dancing & Celebration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seating Map Section */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-navy">Seating Arrangements</h3>

            <div className="space-y-4">
              <p className="text-gray-700">
                We've carefully arranged the seating to ensure everyone has a wonderful experience. The seating chart
                will be displayed at the venue entrance.
              </p>
              <p className="text-gray-700">
                Tables are arranged by family and friend groups. If you have any special seating requests, please
                contact us directly.
              </p>
              <button className="rounded-md bg-navy px-4 py-2 text-white transition-colors hover:bg-navy/80">
                View Full Map
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">
              <img
                src="/213.webp"
                alt="Seating Map"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
            </div>

            {/* Rotating elements */}
            <div className="absolute -left-4 -top-4 h-16 w-16 animate-spin-slow rounded-full border-4 border-gold opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 h-20 w-20 animate-bounce rounded-full border-4 border-pink-400 opacity-80"></div>
            <div className="absolute right-10 top-10 h-8 w-8  rounded-full bg-gold/30 opacity-80"></div>
            <div className="absolute -right-2 top-1/4 h-12 w-12 animate-bounce rounded-full bg-gold/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
