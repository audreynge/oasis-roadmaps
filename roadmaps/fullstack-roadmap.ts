import { BaseRoadmap, type RoadmapMetadata } from "../types/roadmap"

export class FullStackRoadmap extends BaseRoadmap {
  constructor() {
    const metadata: RoadmapMetadata = {
      id: "fullstack",
      title: "Full Stack Development",
      description: "Complete web development with frontend, backend, and deployment",
      icon: "🚀",
      color: "oasis-orange",
      difficulty: "Intermediate",
      estimatedMonths: 10,
      prerequisites: ["Basic programming knowledge", "HTML/CSS basics"],
    }
    super(metadata)
  }

  initializeSteps(): void {
    this.addStep({
      id: "frontend-foundation",
      title: "Frontend Foundation",
      description: "Master React, TypeScript, and modern frontend development",
      estimatedWeeks: 8,
      skills: ["React", "TypeScript", "CSS", "JavaScript ES6+", "State Management"],
      resources: [
        this.createResource(
          "Full Stack Open",
          "University of Helsinki's full stack course",
          "https://fullstackopen.com/en/",
          "Course",
          "Beginner",
          "100+ hours",
        ),
        this.createResource(
          "React + TypeScript",
          "Complete guide to React with TypeScript",
          "https://react-typescript-cheatsheet.netlify.app/",
          "Article",
          "Intermediate",
          "5-8 hours",
        ),
      ],
    })

    this.addStep({
      id: "backend-foundation",
      title: "Backend Foundation",
      description: "Build APIs with Node.js, Express, and databases",
      estimatedWeeks: 8,
      prerequisites: ["frontend-foundation"],
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Authentication"],
      resources: [
        this.createResource(
          "Node.js Complete Guide",
          "Comprehensive Node.js and Express course",
          "https://nodejs.dev/learn",
          "Course",
          "Intermediate",
          "40-60 hours",
        ),
        this.createResource(
          "Database Design",
          "Learn database design principles",
          "https://www.lucidchart.com/pages/database-diagram/database-design",
          "Article",
          "Intermediate",
          "3-5 hours",
        ),
      ],
    })

    this.addStep({
      id: "fullstack-integration",
      title: "Full Stack Integration",
      description: "Connect frontend and backend, handle state management",
      estimatedWeeks: 6,
      prerequisites: ["backend-foundation"],
      skills: ["API Integration", "State Management", "Error Handling", "Loading States", "Form Handling"],
      resources: [
        this.createResource(
          "React Query",
          "Powerful data synchronization for React",
          "https://tanstack.com/query/latest",
          "Documentation",
          "Intermediate",
          "8-12 hours",
        ),
        this.createResource(
          "Axios HTTP Client",
          "Promise-based HTTP client for JavaScript",
          "https://axios-http.com/docs/intro",
          "Documentation",
          "Beginner",
          "2-3 hours",
        ),
      ],
    })

    this.addStep({
      id: "advanced-features",
      title: "Advanced Features",
      description: "Real-time features, testing, and performance optimization",
      estimatedWeeks: 6,
      prerequisites: ["fullstack-integration"],
      skills: ["WebSockets", "Testing", "Performance Optimization", "Caching", "Security"],
      resources: [
        this.createResource(
          "Socket.io",
          "Real-time bidirectional event-based communication",
          "https://socket.io/docs/v4/",
          "Documentation",
          "Intermediate",
          "5-8 hours",
        ),
        this.createResource(
          "Web Performance",
          "Complete guide to web performance optimization",
          "https://web.dev/performance/",
          "Article",
          "Advanced",
          "10-15 hours",
        ),
      ],
    })

    this.addStep({
      id: "deployment-production",
      title: "Deployment & Production",
      description: "Deploy full stack applications to production",
      estimatedWeeks: 4,
      prerequisites: ["advanced-features"],
      skills: ["Docker", "CI/CD", "Cloud Deployment", "Monitoring", "Environment Management"],
      resources: [
        this.createResource(
          "Vercel Deployment",
          "Deploy full stack apps with Vercel",
          "https://vercel.com/docs",
          "Documentation",
          "Beginner",
          "3-5 hours",
        ),
        this.createResource(
          "Railway Deployment",
          "Simple cloud deployment platform",
          "https://docs.railway.app/",
          "Documentation",
          "Beginner",
          "2-3 hours",
        ),
      ],
    })
  }
}
