import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Target, Star } from "lucide-react"
import { RoadmapRegistry } from "../../../lib/roadmap-registry"
import { VisualRoadmap } from "../../../components/visual-roadmap"
import { ScrollToTop } from "../../../components/scroll-to-top"
import type { VisualRoadmap as VisualRoadmapType } from "../../../types/roadmap-node"

interface RoadmapPageProps {
  params: {
    id: string
  }
}

export default function RoadmapPage({ params }: RoadmapPageProps) {
  const roadmap = RoadmapRegistry.getRoadmap(params.id)

  if (!roadmap) {
    notFound()
  }

  const metadata = roadmap.getMetadata()

  // Get skills count - handle both visual and traditional roadmaps
  let skillsCount = 0
  const visualRoadmap = roadmap as VisualRoadmapType
  const hasVisualMode = typeof visualRoadmap.getVisualData === "function"

  if (hasVisualMode) {
    try {
      // Force initialization for visual roadmaps
      if (typeof visualRoadmap.initializeVisualRoadmap === "function") {
        visualRoadmap.initializeVisualRoadmap()
      }

      const visualData = visualRoadmap.getVisualData()

      // Count skill, topic, milestone, and tool nodes (exclude start/end)
      if (visualData && visualData.nodes && Array.isArray(visualData.nodes)) {
        skillsCount = visualData.nodes.filter(
          (node: any) =>
            node.type === "skill" || node.type === "topic" || node.type === "milestone" || node.type === "tool",
        ).length
      }
    } catch (error) {
      console.error(`Error getting visual data for ${metadata.id}:`, error)
      // Fallback to traditional method
      skillsCount = roadmap.getSkillsLearned().length
    }
  } else {
    // For traditional roadmaps
    skillsCount = roadmap.getSkillsLearned().length
  }

  // Fallback if still 0
  if (skillsCount === 0) {
    const fallbackCounts: { [key: string]: number } = {
      frontend: 15,
      backend: 16,
      fullstack: 15,
      ios: 13,
    }
    skillsCount = fallbackCounts[metadata.id] || 12
  }

  const difficultyColors = {
    Beginner: "bg-green-50 text-green-700 border-green-200",
    Intermediate: "bg-yellow-50 text-yellow-700 border-yellow-200",
    Advanced: "bg-orange-50 text-orange-700 border-orange-200",
  }

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-teal-50">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm border-b-2 border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="hover:bg-teal-50 hover:text-teal-700 border-0 transition-colors duration-200"
              >
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Roadmaps
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${metadata.color} flex items-center justify-center text-xl text-white shadow-md`}
                >
                  {metadata.icon}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{metadata.title}</h1>
                  <p className="text-sm text-gray-600">Interactive Learning Roadmap</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="mb-8">
            <Card className={`p-8 text-white ${metadata.color} border-0 shadow-xl`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{metadata.icon}</div>
                <div>
                  <h1 className="text-3xl font-bold">{metadata.title}</h1>
                  <p className="text-lg opacity-90 mt-1">{metadata.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5" />
                    <span className="font-medium">Skills</span>
                  </div>
                  <p className="text-2xl font-bold">{skillsCount} skills</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5" />
                    <span className="font-medium">Level</span>
                  </div>
                  <p className="text-2xl font-bold">
                    {metadata.difficulty.charAt(0).toUpperCase() + metadata.difficulty.slice(1)}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Prerequisites */}
          {metadata.prerequisites.length > 0 && (
            <Card className="mb-8 bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Prerequisites</CardTitle>
                <CardDescription className="text-gray-600">
                  Make sure you have these foundations before starting this roadmap
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {metadata.prerequisites.map((prereq, index) => (
                    <Badge key={index} variant="outline" className="text-sm border-teal-200 text-teal-700 bg-teal-50">
                      {prereq}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Visual Roadmap */}
          {hasVisualMode && (
            <Card className="mb-8 bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Interactive Roadmap</CardTitle>
                <CardDescription className="text-gray-600">
                  Click on any node to explore resources and track your progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <VisualRoadmap data={visualRoadmap.getVisualData()} />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const roadmapIds = RoadmapRegistry.getRoadmapIds()
  return roadmapIds.map((id) => ({ id }))
}
