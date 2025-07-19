import { BaseRoadmap, type RoadmapMetadata } from "../types/roadmap"

export class BackendRoadmap extends BaseRoadmap {
  constructor() {
    const metadata: RoadmapMetadata = {
      id: "backend",
      title: "Backend Development",
      description: "Build scalable server-side applications with Node.js, databases, and APIs",
      icon: "⚙️",
      color: "oasis-green",
      difficulty: "Intermediate",
      estimatedMonths: 8,
      prerequisites: ["JavaScript fundamentals", "Basic programming concepts"],
    }
    super(metadata)
  }

  initializeSteps(): void {
    this.addStep({
      id: "nodejs-fundamentals",
      title: "Node.js Fundamentals",
      description: "Learn server-side JavaScript and Node.js ecosystem",
      estimatedWeeks: 4,
      skills: ["Node.js", "NPM", "File System", "HTTP Module", "Event Loop"],
      resources: [
        this.createResource(
          "Node.js Official Docs",
          "Comprehensive Node.js documentation",
          "https://nodejs.org/en/docs/",
          "Documentation",
          "Beginner",
          "10-15 hours",
        ),
        this.createResource(
          "Node.js Design Patterns",
          "Advanced Node.js patterns and best practices",
          "https://www.nodejsdesignpatterns.com/",
          "Book",
          "Advanced",
          "30+ hours",
        ),
      ],
    })

    this.addStep({
      id: "express-apis",
      title: "Express.js & REST APIs",
      description: "Build RESTful APIs with Express.js framework",
      estimatedWeeks: 5,
      prerequisites: ["nodejs-fundamentals"],
      skills: ["Express.js", "REST APIs", "Middleware", "Routing", "Error Handling"],
      resources: [
        this.createResource(
          "Express.js Guide",
          "Official Express.js documentation and guides",
          "https://expressjs.com/en/guide/",
          "Documentation",
          "Beginner",
          "8-12 hours",
        ),
        this.createResource(
          "RESTful API Design",
          "Best practices for designing REST APIs",
          "https://restfulapi.net/",
          "Article",
          "Intermediate",
          "3-5 hours",
        ),
      ],
    })

    this.addStep({
      id: "databases",
      title: "Database Integration",
      description: "Work with SQL and NoSQL databases",
      estimatedWeeks: 6,
      prerequisites: ["express-apis"],
      skills: ["PostgreSQL", "MongoDB", "Database Design", "ORMs", "Query Optimization"],
      resources: [
        this.createResource(
          "PostgreSQL Tutorial",
          "Complete PostgreSQL tutorial",
          "https://www.postgresqltutorial.com/",
          "Course",
          "Beginner",
          "15-20 hours",
        ),
        this.createResource(
          "MongoDB University",
          "Free MongoDB courses and certifications",
          "https://university.mongodb.com/",
          "Course",
          "Beginner",
          "20-30 hours",
        ),
      ],
    })

    this.addStep({
      id: "authentication-security",
      title: "Authentication & Security",
      description: "Implement secure authentication and authorization",
      estimatedWeeks: 4,
      prerequisites: ["databases"],
      skills: ["JWT", "OAuth", "Password Hashing", "CORS", "Rate Limiting", "Input Validation"],
      resources: [
        this.createResource(
          "OWASP Security Guide",
          "Web application security best practices",
          "https://owasp.org/www-project-web-security-testing-guide/",
          "Documentation",
          "Intermediate",
          "10-15 hours",
        ),
        this.createResource(
          "JWT.io",
          "Learn about JSON Web Tokens",
          "https://jwt.io/introduction/",
          "Article",
          "Intermediate",
          "2-3 hours",
        ),
      ],
    })

    this.addStep({
      id: "deployment-devops",
      title: "Deployment & DevOps",
      description: "Deploy applications and learn DevOps practices",
      estimatedWeeks: 5,
      prerequisites: ["authentication-security"],
      skills: ["Docker", "AWS/Heroku", "CI/CD", "Monitoring", "Load Balancing", "Caching"],
      resources: [
        this.createResource(
          "Docker Getting Started",
          "Official Docker tutorial and documentation",
          "https://docs.docker.com/get-started/",
          "Documentation",
          "Intermediate",
          "5-8 hours",
        ),
        this.createResource(
          "AWS Free Tier",
          "Learn cloud deployment with AWS",
          "https://aws.amazon.com/free/",
          "Tool",
          "Intermediate",
          "10+ hours",
        ),
      ],
    })
  }
}
