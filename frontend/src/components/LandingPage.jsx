import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
              Capture Your Thoughts, Anytime, Anywhere
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our intuitive note-taking app helps you organize your ideas, boost productivity, and never forget a
              brilliant thought again.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              to="/"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
              to="#"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}