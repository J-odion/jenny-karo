"use client"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function EventDetails() {
  return (
    <section className="flex w-full items-center justify-center  py-16 ">
      <div className="container px-4">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-navy md:text-5xl">Our Special Day</h2>

        {/* Details Section */}
        <div className="grid grid-cols-1 my-40 items-center gap-8 md:grid-cols-2">
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
                  <p className="text-gray-700">@Karisma Parks and Gardens</p>
                  <p className="text-gray-700">Femi Kila Streets, off Jabi-Sabojibi Road, Abuja</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-pink-600" />
                <div>
                  <h4 className="text-lg font-semibold text-navy">Time</h4>
                  <p className="text-gray-700">Reception: 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">
              <img src="/3142.jpeg" alt="Venue" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold">@Karisma Parks and Gardens</h3>
                {/* <p>Where dreams come true</p> */}
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
        <div className="mb-16 grid grid-cols-1 my-40 items-center gap-8 md:grid-cols-2">
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
                <h4 className="text-xs font-semibold text-navy">Musical interlude/opening prayers </h4>
                <p className="text-gray-700 text-xs">Recognition of guest </p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <h4 className="text-xs font-semibold text-navy">Groom’s family entrance</h4>
                <p className="text-gray-700 text-xs">Bride’s Family entrance</p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <h4 className="text-xs font-semibold text-navy">Groom’s first entrance with his guys </h4>
                <p className="text-gray-700 text-xs">Bride’s first entrance with her ladies both pink and blue asoebi ladies</p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <h4 className="font-semibold text-xs text-navy">Games  (while the couple change into their second outfit)</h4>
                <p className="text-gray-700 text-xs">Bride and groom dance with the both bridal and groom party back to the hall </p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <p className=" font-semibold text-navy text-xs">⁠Games | Toast | ⁠⁠first dance </p>
                <h4 className=" font-semibold text-navy text-xs">⁠⁠parents dance with the bride</h4>
                <p className="text-gray-700 text-xs"> ⁠mother and son dance </p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <p className="text-gray-700 text-xs"> ⁠couples and family dance  </p>
                <h4 className="text-xs font-semibold text-navy"> ⁠couples and well wishers</h4>
                <p className="text-gray-700 text-xs">⁠ ⁠couples and friends </p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <p className="text-gray-700 text-xs"> ⁠⁠vote of thank  </p>
                <h4 className="text-xs font-semibold text-navy"> ⁠⁠dance ( while we change to our after party outfit)</h4>
                <p className="text-gray-700 text-xs">⁠ dance in with the dancers and gorilla for the after party to lunch it </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seating Map Section */}
        <div className="grid grid-cols-1 my-40 items-center gap-8 md:grid-cols-2">
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
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px]">
              <img
                src="/sita.png"
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
