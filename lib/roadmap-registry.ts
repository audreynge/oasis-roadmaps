import type { BaseRoadmap } from "../types/roadmap"
import { VisualFrontendRoadmap } from "../roadmaps/visual-frontend-roadmap"
import { VisualBackendRoadmap } from "../roadmaps/visual-backend-roadmap"
import { VisualFullStackRoadmap } from "../roadmaps/visual-fullstack-roadmap"
import { VisualDataScienceRoadmap } from "../roadmaps/visual-data-science-roadmap"
import { VisualIOSRoadmap } from "../roadmaps/visual-ios-roadmap"

export class RoadmapRegistry {
  private static roadmaps: Map<string, () => BaseRoadmap> = new Map([
    ["frontend", () => new VisualFrontendRoadmap()],
    ["backend", () => new VisualBackendRoadmap()],
    ["fullstack", () => new VisualFullStackRoadmap()],
    ["data-science", () => new VisualDataScienceRoadmap()],
    ["ios", () => new VisualIOSRoadmap()],
  ])

  static getAllRoadmaps(): BaseRoadmap[] {
    return Array.from(this.roadmaps.values()).map((factory) => factory())
  }

  static getRoadmap(id: string): BaseRoadmap | null {
    const factory = this.roadmaps.get(id)
    return factory ? factory() : null
  }

  static registerRoadmap(id: string, factory: () => BaseRoadmap): void {
    this.roadmaps.set(id, factory)
  }

  static getRoadmapIds(): string[] {
    return Array.from(this.roadmaps.keys())
  }
}
