import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target } from "lucide-react"
import type { RoadmapStep } from "../types/roadmap"
import { ResourceCard } from "./resource-card"

interface RoadmapStepProps {
  step: RoadmapStep
  stepNumber: number
  isCompleted?: boolean
}

export function RoadmapStepComponent({ step, stepNumber, isCompleted = false }: RoadmapStepProps) {
  return (
    <div className="relative">
      {/* Step connector line */}
      <div className="absolute left-6 top-16 w-0.5 h-full bg-border -z-10" />

      <Card className={`mb-8 ${isCompleted ? "border-green-500 bg-green-50" : ""}`}>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                isCompleted ? "bg-green-500 text-white" : "bg-primary text-primary-foreground"
              }`}
            >
              {isCompleted ? <CheckCircle className="w-6 h-6" /> : stepNumber}
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl">{step.title}</CardTitle>
              <CardDescription className="mt-1">{step.description}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Prerequisites */}
          {step.prerequisites && step.prerequisites.length > 0 && (
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-2">Prerequisites:</h4>
              <div className="flex flex-wrap gap-2">
                {step.prerequisites.map((prereq, index) => (
                  <Badge key={index} variant="outline">
                    {prereq}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Skills to learn */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4" />
              <h4 className="font-medium">Skills you'll learn:</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {step.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-3">Learning Resources:</h4>
            <div className="grid gap-4 md:grid-cols-2">
              {step.resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
