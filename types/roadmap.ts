/**
 * Shared roadmap types & helpers
 * All difficulty / resource “enum” values are now capital-case
 */

export type ResourceType = "Article" | "Video" | "Course" | "Documentation" | "Tool" | "Book"

export type ResourceDifficulty = "Beginner" | "Intermediate" | "Advanced"

export interface Resource {
  id: string
  title: string
  description: string
  url: string
  type: ResourceType
  difficulty: ResourceDifficulty
  estimatedTime?: string
}

export interface RoadmapStep {
  id: string
  title: string
  description: string
  resources: Resource[]
  prerequisites?: string[]
  skills: string[]
  /** still used for internal totals, even if we no longer display it */
  estimatedWeeks: number
}

export interface RoadmapMetadata {
  id: string
  title: string
  description: string
  icon: string
  color: string
  difficulty: ResourceDifficulty
  estimatedMonths: number
  prerequisites: string[]
}

/**
 * BaseRoadmap – all concrete roadmap classes extend this.
 */
export abstract class BaseRoadmap {
  protected metadata: RoadmapMetadata
  protected steps: RoadmapStep[] = []

  constructor(metadata: RoadmapMetadata) {
    this.metadata = metadata
  }

  /** subclasses must implement to populate `steps` */
  abstract initializeSteps(): void

  // ----------------- helpers & getters -----------------
  getMetadata(): RoadmapMetadata {
    return this.metadata
  }

  getSteps(): RoadmapStep[] {
    if (this.steps.length === 0) this.initializeSteps()
    return this.steps
  }

  /** sum of `estimatedWeeks` across all steps */
  getTotalEstimatedTime(): number {
    return this.getSteps().reduce((tot, s) => tot + s.estimatedWeeks, 0)
  }

  /** unique list of all skills taught in this roadmap */
  getSkillsLearned(): string[] {
    return [...new Set(this.getSteps().flatMap((step) => step.skills))]
  }

  // ----------------- protected helpers -----------------
  protected addStep(step: RoadmapStep): void {
    this.steps.push(step)
  }

  protected createResource(
    title: string,
    description: string,
    url: string,
    type: ResourceType,
    difficulty: ResourceDifficulty,
    estimatedTime?: string,
  ): Resource {
    return {
      id: `${this.metadata.id}-${title.toLowerCase().replace(/\s+/g, "-")}`,
      title,
      description,
      url,
      type,
      difficulty,
      estimatedTime,
    }
  }
}
