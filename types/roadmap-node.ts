import type { Resource } from "./roadmap"
import { BaseRoadmap } from "./roadmap"

export interface RoadmapNode {
  id: string
  title: string
  description: string
  type: "start" | "topic" | "skill" | "milestone" | "optional" | "end"
  position: { x: number; y: number }
  resources: Resource[]
  dependencies?: string[]
  isCompleted?: boolean
  estimatedHours?: number
}

export interface RoadmapConnection {
  from: string
  to: string
  type: "required" | "optional" | "alternative"
}

export interface VisualRoadmapData {
  nodes: RoadmapNode[]
  connections: RoadmapConnection[]
  width: number
  height: number
}

export abstract class VisualRoadmap extends BaseRoadmap {
  protected visualData: VisualRoadmapData = {
    nodes: [],
    connections: [],
    width: 1200,
    height: 800,
  }

  abstract initializeVisualRoadmap(): void

  getVisualData(): VisualRoadmapData {
    if (this.visualData.nodes.length === 0) {
      this.initializeVisualRoadmap()
    }
    return this.visualData
  }

  protected addNode(node: RoadmapNode): void {
    this.visualData.nodes.push(node)
  }

  protected addConnection(connection: RoadmapConnection): void {
    this.visualData.connections.push(connection)
  }

  protected createNode(
    id: string,
    title: string,
    description: string,
    type: RoadmapNode["type"],
    position: { x: number; y: number },
    resources: Resource[] = [],
    estimatedHours?: number,
  ): RoadmapNode {
    return {
      id,
      title,
      description,
      type,
      position,
      resources,
      estimatedHours,
      isCompleted: false,
    }
  }
}
