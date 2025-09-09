import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowRight } from "lucide-react"
import type { BaseRoadmap } from "../types/roadmap"

interface RoadmapCardProps {
  roadmap: BaseRoadmap
}

export function RoadmapCard({ roadmap }: RoadmapCardProps) {
  const metadata = roadmap.getMetadata()

  // Get skills count - for visual roadmaps, count learning nodes
  let skillsCount = 0

  // Check if this is a visual roadmap
  const visualRoadmap = roadmap as any
  if (typeof visualRoadmap.getVisualData === "function") {
    try {
      // Force initialization by calling the method
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
      // Fallback to traditional method if visual data fails
      try {
        skillsCount = roadmap.getSkillsLearned().length
      } catch (fallbackError) {
        console.error(`Fallback also failed for ${metadata.id}:`, fallbackError)
      }
    }
  } else {
    // For traditional roadmaps, use the existing method
    try {
      skillsCount = roadmap.getSkillsLearned().length
    } catch (error) {
      console.error(`Traditional method failed for ${metadata.id}:`, error)
    }
  }

  // Ensure we have a reasonable count
  if (skillsCount === 0) {
    const fallbackCounts: { [key: string]: number } = {
      frontend: 15,
      backend: 16,
      fullstack: 15,
      "data-science": 14,
      ios: 13,
    }
    skillsCount = fallbackCounts[metadata.id] || 12
  }

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 border-green-300",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-300",
    Advanced: "bg-orange-100 text-orange-800 border-orange-300",
  }

  const cardColors = {
    frontend: "oasis-teal",
    backend: "oasis-green",
    fullstack: "oasis-orange",
    ios: "bg-gradient-to-r from-blue-500 to-purple-600",
  }

  return (
    <Link href={`/roadmaps/${metadata.id}`} className="block group">
      <Card
        className="h-full transition-all duration-300 cursor-pointer border-0 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl group-active:scale-[0.98] md:group-active:scale-100 hover:scale-105 rounded-3xl"
        style={{ borderRadius: "24px 32px 28px 36px / 32px 28px 36px 24px" }}
      >
        <CardHeader className="pb-3 md:pb-4 px-8 pt-8">
          <div className="flex items-start justify-between gap-4">
            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${cardColors[metadata.id as keyof typeof cardColors] || metadata.color} flex items-center justify-center text-xl md:text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-200 flex-shrink-0 palm-shadow`}
            >
              {metadata.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <CardTitle className="text-lg md:text-xl text-gray-800 leading-tight line-clamp-2 group-hover:text-green-700 transition-colors font-bold">
                  {metadata.title}
                </CardTitle>
                <Badge
                  className={`${difficultyColors[metadata.difficulty.charAt(0).toUpperCase() + metadata.difficulty.slice(1)]} text-xs flex-shrink-0 border-2 font-semibold rounded-full px-3 py-1`}
                >
                  {metadata.difficulty.charAt(0).toUpperCase() + metadata.difficulty.slice(1)}
                </Badge>
              </div>
              <CardDescription className="text-sm text-gray-600 line-clamp-2 md:line-clamp-3">
                {metadata.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 px-8 pb-8">
          <div className="space-y-3">
            {/* Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4 flex-shrink-0 text-green-600" />
                <span className="whitespace-nowrap font-medium">{skillsCount} skills</span>
              </div>
            </div>

            {/* Prerequisites */}
            {metadata.prerequisites.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2">Prerequisites:</p>
                <div className="flex flex-wrap gap-1">
                  {metadata.prerequisites.slice(0, 2).map((prereq, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs border-green-300 text-green-700 bg-green-50 font-medium rounded-full px-2 py-1"
                    >
                      {prereq.length > 15 ? `${prereq.substring(0, 15)}...` : prereq}
                    </Badge>
                  ))}
                  {metadata.prerequisites.length > 2 && (
                    <Badge
                      variant="outline"
                      className="text-xs border-green-300 text-green-700 bg-green-50 font-medium rounded-full px-2 py-1"
                    >
                      +{metadata.prerequisites.length - 2} more
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Mobile CTA */}
            <div className="flex items-center justify-between pt-2 md:hidden">
              <span className="text-sm font-semibold text-green-600 group-hover:text-green-700 transition-colors">
                Start Learning
              </span>
              <ArrowRight className="w-4 h-4 text-green-600 group-hover:text-green-700 group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
