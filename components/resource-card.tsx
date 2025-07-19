import { ExternalLink, Clock, BookOpen, Video, FileText, PenTool, Book } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Resource } from "../types/roadmap"

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const typeIcons = {
    Article: FileText,
    Video: Video,
    Course: BookOpen,
    Documentation: Book,
    Tool: PenTool,
    Book: Book,
  } as const

  const typeColors = {
    Article: "bg-blue-50 text-blue-700 border-blue-200",
    Video: "bg-red-50 text-red-700 border-red-200",
    Course: "bg-green-50 text-green-700 border-green-200",
    Documentation: "bg-purple-50 text-purple-700 border-purple-200",
    Tool: "bg-orange-50 text-orange-700 border-orange-200",
    Book: "bg-indigo-50 text-indigo-700 border-indigo-200",
  }

  const difficultyColors = {
    Beginner: "bg-green-50 text-green-700 border-green-200",
    Intermediate: "bg-yellow-50 text-yellow-700 border-yellow-200",
    Advanced: "bg-red-50 text-red-700 border-red-200",
  }

  const IconComponent = typeIcons[resource.type] ?? FileText

  return (
    <Card className="h-full border-2 border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-200 bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <IconComponent className="w-5 h-5 text-gray-600" />
            <Badge
              className={`${typeColors[resource.type.charAt(0).toUpperCase() + resource.type.slice(1)]} border text-xs`}
            >
              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
            </Badge>
          </div>
          <Badge
            className={`${difficultyColors[resource.difficulty.charAt(0).toUpperCase() + resource.difficulty.slice(1)]} border text-xs`}
          >
            {resource.difficulty.charAt(0).toUpperCase() + resource.difficulty.slice(1)}
          </Badge>
        </div>
        <CardTitle className="text-lg text-gray-900 leading-tight">{resource.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          {resource.estimatedTime && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{resource.estimatedTime}</span>
            </div>
          )}
          <Button
            asChild
            size="sm"
            className="ml-auto bg-teal-600 hover:bg-teal-700 text-white border-0 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              View
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
