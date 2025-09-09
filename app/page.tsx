import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RoadmapCard } from "../components/roadmap-card"
import { RoadmapRegistry } from "../lib/roadmap-registry"
import { ScrollToTop } from "../components/scroll-to-top"
import { ArrowRight, Map, BookOpen, Target, Users, Palmtree } from "lucide-react"

export default function RoadmapsPage() {
  const roadmaps = RoadmapRegistry.getAllRoadmaps()

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen oasis-yellow relative">

        <div className="container mx-auto px-4 md:py-20 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-16 h-16 oasis-green-dark rounded-2xl flex items-center justify-center shadow-lg">
                <Palmtree className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-oasis-green-dark drop-shadow-sm">
                Oasis Roadmaps
              </h1>
            </div>
            <p className="text-lg md:text-xl text-oasis-green-dark max-w-2xl mx-auto leading-relaxed">
              Step-by-step paths designed to guide your journey from beginner to expert.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <Card className="text-center bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 oasis-hero-gradient rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{roadmaps.length}</div>
                <div className="text-sm text-gray-600 font-medium">Learning Paths</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 oasis-orange rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">100+</div>
                <div className="text-sm text-gray-600 font-medium">Resources</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 oasis-yellow rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
                <div className="text-sm text-gray-600 font-medium">Skills</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">1000+</div>
                <div className="text-sm text-gray-600 font-medium">Learners</div>
              </CardContent>
            </Card>
          </div>

          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-oasis-green-dark mb-4 text-center drop-shadow-lg">
              Choose Your Learning Path
            </h2>
            <p className="text-oasis-green-dark text-center text-lg max-w-2xl mx-auto drop-shadow-md">
              Each roadmap is your personal guide through the tech landscape, with step-by-step guidance and practical projects.
            </p>
          </div>

          {/* Roadmaps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
            {roadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.getMetadata().id} roadmap={roadmap} />
            ))}
          </div>

          {/* Getting Started Section */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl max-w-3xl mx-auto rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-gray-800 text-center flex items-center justify-center gap-3">
                <Palmtree className="w-6 h-6 text-green-600" />
                Ready to Start Learning?
              </CardTitle>
              <CardDescription className="text-gray-700 text-center text-base">
                New to tech? We recommend starting with our Frontend Development roadmap to learn the fundamentals of web development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="oasis-hero-gradient hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto text-base font-semibold px-8 py-3 rounded-xl"
                >
                  <Link href="/roadmaps/frontend">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-green-400 text-green-700 hover:bg-green-50 hover:border-green-500 bg-white/80 backdrop-blur-sm transition-all duration-200 w-full sm:w-auto text-base font-semibold px-8 py-3 rounded-xl"
                >
                  <Link href="https://oasisneu.com/about">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tip Section */}
          <div className="text-center mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-0 shadow-lg max-w-2xl mx-auto">
            <div className="text-base text-gray-700">
              🌴 <strong>Pro Tip:</strong> Click on any node in the roadmap to discover resources and track your progress
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
