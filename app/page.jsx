import Hero from "@/components/hero"
import EventDetails from "@/components/event-details"
import Gallery from "@/components/gallery"
import Videos from "@/components/videos"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventDetails />
      <Gallery />
      <Videos />
    </main>
  )
}
