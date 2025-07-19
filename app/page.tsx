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
      <div className="min-h-screen oasis-tropical-gradient relative overflow-hidden">
        {/* Animated Background Elements */}

        {/* Flying Birds */}
        <div className="birds-container">
          <div className="bird bird-1">
            <div className="bird-body"></div>
            <div className="wing wing-left"></div>
            <div className="wing wing-right"></div>
          </div>
          <div className="bird bird-2">
            <div className="bird-body"></div>
            <div className="wing wing-left"></div>
            <div className="wing wing-right"></div>
          </div>
          <div className="bird bird-3">
            <div className="bird-body"></div>
            <div className="wing wing-left"></div>
            <div className="wing wing-right"></div>
          </div>
        </div>

        {/* Floating Clouds */}
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>

        {/* Original Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 oasis-green opacity-20 organic-blob palm-sway"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 oasis-orange opacity-15 organic-blob-2 float-animation"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 oasis-yellow opacity-25 rounded-full"></div>

        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 oasis-hero-gradient rounded-2xl flex items-center justify-center shadow-xl palm-shadow">
                <Palmtree className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                Oasis Learning Roadmaps
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2 drop-shadow-md">
              Your tropical oasis for tech learning. Interactive paths designed to guide your journey from beginner to
              expert, with curated resources and clear progression.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
            <Card className="text-center bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl">
              <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6">
                <div className="w-10 h-10 md:w-14 md:h-14 oasis-hero-gradient rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg">
                  <Map className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800">{roadmaps.length}</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Learning Paths</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl">
              <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6">
                <div className="w-10 h-10 md:w-14 md:h-14 oasis-orange rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg">
                  <BookOpen className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800">100+</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Resources</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl">
              <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6">
                <div className="w-10 h-10 md:w-14 md:h-14 oasis-yellow rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg">
                  <Target className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800">50+</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Skills</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl">
              <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg">
                  <Users className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800">1000+</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Learners</div>
              </CardContent>
            </Card>
          </div>

          {/* Section Header */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center drop-shadow-lg">
              Choose Your Learning Adventure
            </h2>
            <p className="text-white/90 text-center mb-6 md:mb-8 text-sm md:text-base px-2 drop-shadow-md">
              Each roadmap is your personal guide through the tech jungle, with step-by-step guidance and practical
              projects.
            </p>
          </div>

          {/* Roadmaps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
            {roadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.getMetadata().id} roadmap={roadmap} />
            ))}
          </div>

          {/* Getting Started Section */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl max-w-4xl mx-auto rounded-3xl">
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle className="text-xl md:text-2xl text-gray-800 text-center flex items-center justify-center gap-2">
                <Palmtree className="w-6 h-6 text-green-600" />
                New to the Tech Oasis?
              </CardTitle>
              <CardDescription className="text-gray-700 text-center text-sm md:text-base">
                Not sure where to start your journey? We recommend beginning with our Frontend Development roadmap to
                learn the fundamentals of web development in our tropical learning environment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button
                  asChild
                  className="oasis-hero-gradient hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto text-base font-semibold px-8 py-3 rounded-2xl"
                >
                  <Link href="/roadmaps/frontend">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-green-400 text-green-700 hover:bg-green-50 hover:border-green-500 bg-white/80 backdrop-blur-sm transition-all duration-200 w-full sm:w-auto text-base font-semibold px-8 py-3 rounded-2xl"
                >
                  <Link href="https://oasisneu.com/about">Discover Oasis</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tip Section */}
          <div className="text-center mt-6 md:mt-8 p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-3xl border-0 shadow-xl">
            <div className="text-sm md:text-base text-gray-700">
              🌴 <strong>Pro Tip:</strong> Click on any node in the roadmap to discover resources and track your
              progress through your learning oasis
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
