"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle, Circle, Clock, BookOpen } from "lucide-react"
import type { VisualRoadmapData, RoadmapNode, RoadmapConnection } from "../types/roadmap-node"
import { ResourceCard } from "./resource-card"

interface VisualRoadmapProps {
  data: VisualRoadmapData
  className?: string
}

export function VisualRoadmap({ data, className = "" }: VisualRoadmapProps) {
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null)
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set())

  const toggleNodeCompletion = (nodeId: string) => {
    const newCompleted = new Set(completedNodes)
    if (newCompleted.has(nodeId)) {
      newCompleted.delete(nodeId)
    } else {
      newCompleted.add(nodeId)
    }
    setCompletedNodes(newCompleted)
  }

  const getNodeTypeStyles = (type: RoadmapNode["type"], isCompleted: boolean) => {
    const baseStyles =
      "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"

    if (isCompleted) {
      return `${baseStyles} bg-green-500 text-white border-2 border-green-600 rounded-lg px-3 py-2 min-w-20 text-center shadow-md`
    }

    switch (type) {
      case "start":
        return `${baseStyles} bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold border-2 border-teal-700 shadow-lg hover:from-teal-600 hover:to-teal-700`
      case "end":
        return `${baseStyles} bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold border-2 border-purple-700 shadow-lg hover:from-purple-600 hover:to-purple-700`
      case "skill":
        return `${baseStyles} bg-white border-2 border-teal-400 rounded-lg px-3 py-2 min-w-20 text-center shadow-md hover:border-teal-500 hover:bg-teal-50 text-gray-800 font-medium`
      case "topic":
        return `${baseStyles} bg-teal-50 border-2 border-teal-300 rounded-lg px-3 py-2 min-w-20 text-center shadow-md hover:bg-teal-100 hover:border-teal-400 text-gray-700`
      case "optional":
        return `${baseStyles} bg-yellow-50 border-2 border-yellow-400 border-dashed rounded-lg px-3 py-2 min-w-20 text-center shadow-md hover:bg-yellow-100 hover:border-yellow-500 text-gray-700`
      case "milestone":
        return `${baseStyles} bg-orange-50 border-2 border-orange-400 rounded-lg px-3 py-2 min-w-20 text-center shadow-md hover:bg-orange-100 hover:border-orange-500 text-gray-700`
      default:
        return `${baseStyles} bg-gray-50 border-2 border-gray-300 rounded-lg px-3 py-2 min-w-20 text-center shadow-md hover:bg-gray-100 hover:border-gray-400 text-gray-700`
    }
  }

  const getConnectionPath = (from: RoadmapNode, to: RoadmapNode, type: RoadmapConnection["type"]) => {
    const strokeWidth = type === "required" ? 3 : 2
    const strokeDasharray = type === "optional" ? "8,4" : type === "alternative" ? "4,4" : "none"
    const stroke = type === "required" ? "#14b8a6" : type === "optional" ? "#f59e0b" : "#6b7280"

    return (
      <line
        key={`${from.id}-${to.id}`}
        x1={from.position.x}
        y1={from.position.y}
        x2={to.position.x}
        y2={to.position.y}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        opacity={0.8}
        className="transition-opacity hover:opacity-100"
      />
    )
  }

  const nodeMap = new Map(data.nodes.map((node) => [node.id, node]))

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-auto border-2 border-gray-200 rounded-xl bg-gradient-to-br from-blue-50 via-white to-teal-50 shadow-inner">
        <svg
          width={data.width}
          height={data.height}
          className="min-w-full min-h-full"
          viewBox={`0 0 ${data.width} ${data.height}`}
        >
          {/* Render connections */}
          {data.connections.map((connection) => {
            const fromNode = nodeMap.get(connection.from)
            const toNode = nodeMap.get(connection.to)
            if (!fromNode || !toNode) return null
            return getConnectionPath(fromNode, toNode, connection.type)
          })}
        </svg>

        {/* Render nodes */}
        {data.nodes.map((node) => {
          const isCompleted = completedNodes.has(node.id)
          return (
            <Dialog key={node.id}>
              <DialogTrigger asChild>
                <div
                  className={getNodeTypeStyles(node.type, isCompleted)}
                  style={{
                    left: node.position.x,
                    top: node.position.y,
                  }}
                  onClick={() => setSelectedNode(node)}
                >
                  <div className="flex items-center gap-2">
                    {node.type === "start" || node.type === "end" ? (
                      <span className="text-xs md:text-sm font-bold text-center leading-tight">
                        {node.type === "start" ? "START" : "END"}
                      </span>
                    ) : (
                      <>
                        {isCompleted ? (
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" />
                        ) : (
                          <Circle className="w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                        )}
                        <span className="text-xs md:text-sm font-medium text-center leading-tight">{node.title}</span>
                      </>
                    )}
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-xl text-gray-900">{node.title}</DialogTitle>
                    <div className="flex items-center gap-2">
                      {node.estimatedHours && (
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 border-teal-200 text-teal-700 bg-teal-50"
                        >
                          <Clock className="w-3 h-3" />
                          {node.estimatedHours}h
                        </Badge>
                      )}
                      <Badge
                        variant={node.type === "optional" ? "secondary" : "default"}
                        className={
                          node.type === "optional"
                            ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                            : "bg-teal-100 text-teal-800 border-teal-200"
                        }
                      >
                        {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <DialogDescription className="text-base text-gray-600">{node.description}</DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {node.resources && node.resources.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900">
                        <BookOpen className="w-4 h-4 text-teal-600" />
                        Learning Resources
                      </h4>
                      <div className="grid gap-3">
                        {node.resources.map((resource) => (
                          <ResourceCard key={resource.id} resource={resource} />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <Button
                      variant={isCompleted ? "outline" : "default"}
                      onClick={() => toggleNodeCompletion(node.id)}
                      className={`flex items-center gap-2 transition-all duration-200 ${
                        isCompleted
                          ? "border-2 border-green-300 text-green-700 bg-green-50 hover:bg-green-100 hover:border-green-400 hover:text-green-800"
                          : "bg-teal-600 hover:bg-teal-700 text-white border-0 shadow-sm hover:shadow-md"
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Mark as Incomplete
                        </>
                      ) : (
                        <>
                          <Circle className="w-4 h-4" />
                          Mark as Complete
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 bg-white rounded-xl border-2 border-gray-200 shadow-sm">
        <h4 className="font-semibold mb-3 text-gray-900">Legend</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border-2 border-teal-400 rounded"></div>
            <span className="text-gray-700">Core Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-teal-50 border-2 border-teal-300 rounded"></div>
            <span className="text-gray-700">Topics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-50 border-2 border-yellow-400 border-dashed rounded"></div>
            <span className="text-gray-700">Optional</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-gray-700">Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}
