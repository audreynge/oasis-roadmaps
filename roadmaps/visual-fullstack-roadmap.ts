import { VisualRoadmap } from "../types/roadmap-node"
import type { RoadmapMetadata } from "../types/roadmap"

export class VisualFullStackRoadmap extends VisualRoadmap {
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
    // Traditional steps for compatibility
  }

  initializeVisualRoadmap(): void {
    this.visualData.width = 1200
    this.visualData.height = 1700

    // Start
    this.addNode(this.createNode("start", "START", "Begin your full stack journey", "start", { x: 600, y: 50 }, [], 0))

    // Row 1: Fundamentals
    this.addNode(
      this.createNode(
        "web-fundamentals",
        "Web Fundamentals",
        "How the web works",
        "topic",
        { x: 600, y: 140 },
        [
          this.createResource(
            "Web Fundamentals",
            "Understanding web basics",
            "https://web.dev/learn/",
            "Course",
            "Beginner",
            "10 hours",
          ),
        ],
        15,
      ),
    )

    // Row 2: Frontend Foundation
    this.addNode(
      this.createNode(
        "html-css",
        "HTML & CSS",
        "Frontend structure & styling",
        "skill",
        { x: 600, y: 230 },
        [
          this.createResource(
            "HTML & CSS Guide",
            "Learn HTML and CSS fundamentals",
            "https://developer.mozilla.org/en-US/docs/Learn",
            "Documentation",
            "Beginner",
            "30 hours",
          ),
        ],
        40,
      ),
    )

    // Row 3: JavaScript
    this.addNode(
      this.createNode(
        "javascript",
        "JavaScript",
        "Programming language",
        "skill",
        { x: 600, y: 320 },
        [
          this.createResource(
            "JavaScript Guide",
            "Learn JavaScript fundamentals",
            "https://javascript.info/",
            "Course",
            "Intermediate",
            "40 hours",
          ),
        ],
        50,
      ),
    )

    // Row 4: Version Control
    this.addNode(
      this.createNode(
        "git",
        "Git & GitHub",
        "Version control system",
        "tool",
        { x: 600, y: 410 },
        [
          this.createResource(
            "Git Handbook",
            "Learn version control",
            "https://guides.github.com/introduction/git-handbook/",
            "Documentation",
            "Beginner",
            "10 hours",
          ),
        ],
        15,
      ),
    )

    // Row 5: Frontend Framework
    this.addNode(
      this.createNode(
        "react",
        "React",
        "Frontend framework",
        "skill",
        { x: 600, y: 500 },
        [
          this.createResource(
            "React Documentation",
            "Learn React framework",
            "https://react.dev/learn",
            "Documentation",
            "Intermediate",
            "40 hours",
          ),
        ],
        50,
      ),
    )

    // Row 6: Backend Runtime
    this.addNode(
      this.createNode(
        "nodejs",
        "Node.js",
        "Server-side JavaScript",
        "skill",
        { x: 600, y: 590 },
        [
          this.createResource(
            "Node.js Guide",
            "Learn Node.js fundamentals",
            "https://nodejs.org/en/docs/guides/",
            "Documentation",
            "Intermediate",
            "25 hours",
          ),
        ],
        35,
      ),
    )

    // Row 7: Backend Framework
    this.addNode(
      this.createNode(
        "express",
        "Express.js",
        "Backend framework",
        "skill",
        { x: 600, y: 680 },
        [
          this.createResource(
            "Express.js Guide",
            "Learn Express framework",
            "https://expressjs.com/en/guide/",
            "Documentation",
            "Intermediate",
            "20 hours",
          ),
        ],
        30,
      ),
    )

    // Row 8: Database
    this.addNode(
      this.createNode(
        "databases",
        "Databases",
        "SQL & NoSQL databases",
        "skill",
        { x: 600, y: 770 },
        [
          this.createResource(
            "Database Fundamentals",
            "Learn database concepts",
            "https://www.postgresqltutorial.com/",
            "Course",
            "Intermediate",
            "30 hours",
          ),
        ],
        40,
      ),
    )

    // Row 9: API Development
    this.addNode(
      this.createNode(
        "rest-api",
        "REST APIs",
        "API development",
        "skill",
        { x: 600, y: 860 },
        [
          this.createResource(
            "REST API Guide",
            "Learn API development",
            "https://restfulapi.net/",
            "Article",
            "Intermediate",
            "12 hours",
          ),
        ],
        18,
      ),
    )

    // Row 10: Frontend-Backend Integration
    this.addNode(
      this.createNode(
        "api-integration",
        "API Integration",
        "Connect frontend & backend",
        "skill",
        { x: 600, y: 950 },
        [
          this.createResource(
            "API Integration Guide",
            "Learn to connect frontend and backend",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
            "Documentation",
            "Intermediate",
            "15 hours",
          ),
        ],
        25,
      ),
    )

    // Row 11: Authentication
    this.addNode(
      this.createNode(
        "authentication",
        "Authentication",
        "User login & security",
        "skill",
        { x: 600, y: 1040 },
        [
          this.createResource(
            "Authentication Guide",
            "Learn authentication patterns",
            "https://auth0.com/docs",
            "Documentation",
            "Intermediate",
            "18 hours",
          ),
        ],
        25,
      ),
    )

    // Row 12: Personal Access Tokens (NEW)
    this.addNode(
      this.createNode(
        "personal-access-tokens",
        "Personal Access Tokens",
        "API authentication & CI/CD",
        "skill",
        { x: 600, y: 1130 },
        [
          this.createResource(
            "GitHub Personal Access Tokens",
            "Learn to create and use PATs",
            "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",
            "Documentation",
            "Intermediate",
            "4 hours",
          ),
          this.createResource(
            "API Token Management",
            "Best practices for token security",
            "https://auth0.com/blog/a-look-at-the-latest-draft-for-oauth-token-exchange/",
            "Article",
            "Intermediate",
            "3 hours",
          ),
        ],
        8,
      ),
    )

    // Row 13: TypeScript
    this.addNode(
      this.createNode(
        "typescript",
        "TypeScript",
        "Type-safe JavaScript",
        "skill",
        { x: 600, y: 1220 },
        [
          this.createResource(
            "TypeScript Handbook",
            "Learn TypeScript",
            "https://www.typescriptlang.org/docs/",
            "Documentation",
            "Intermediate",
            "25 hours",
          ),
        ],
        35,
      ),
    )

    // Row 14: Testing
    this.addNode(
      this.createNode(
        "testing",
        "Testing",
        "Frontend & Backend testing",
        "skill",
        { x: 600, y: 1310 },
        [
          this.createResource(
            "Testing Guide",
            "Learn testing strategies",
            "https://testing-library.com/docs/",
            "Documentation",
            "Intermediate",
            "20 hours",
          ),
        ],
        30,
      ),
    )

    // Row 15: Deployment
    this.addNode(
      this.createNode(
        "deployment",
        "Deployment",
        "Cloud platforms & CI/CD",
        "skill",
        { x: 600, y: 1400 },
        [
          this.createResource(
            "Deployment Guide",
            "Learn deployment strategies",
            "https://vercel.com/docs",
            "Documentation",
            "Intermediate",
            "12 hours",
          ),
        ],
        18,
      ),
    )

    // Row 16: Advanced Topics (Optional)
    this.addNode(
      this.createNode(
        "performance",
        "Performance",
        "Optimization techniques",
        "optional",
        { x: 400, y: 1490 },
        [
          this.createResource(
            "Web Performance",
            "Learn optimization techniques",
            "https://web.dev/performance/",
            "Article",
            "Advanced",
            "18 hours",
          ),
        ],
        25,
      ),
    )

    this.addNode(
      this.createNode(
        "security",
        "Security",
        "Web security practices",
        "optional",
        { x: 600, y: 1490 },
        [
          this.createResource(
            "Web Security",
            "Learn security best practices",
            "https://owasp.org/www-project-web-security-testing-guide/",
            "Documentation",
            "Advanced",
            "20 hours",
          ),
        ],
        30,
      ),
    )

    this.addNode(
      this.createNode(
        "microservices",
        "Microservices",
        "Distributed architecture",
        "optional",
        { x: 800, y: 1490 },
        [
          this.createResource(
            "Microservices Guide",
            "Learn microservices architecture",
            "https://microservices.io/",
            "Article",
            "Advanced",
            "25 hours",
          ),
        ],
        35,
      ),
    )

    // End
    this.addNode(
      this.createNode(
        "end",
        "FULL STACK DEVELOPER",
        "You're now a full stack developer!",
        "end",
        { x: 600, y: 1580 },
        [],
        0,
      ),
    )

    // Clean linear connections
    this.addConnection({ from: "start", to: "web-fundamentals", type: "required" })
    this.addConnection({ from: "web-fundamentals", to: "html-css", type: "required" })
    this.addConnection({ from: "html-css", to: "javascript", type: "required" })
    this.addConnection({ from: "javascript", to: "git", type: "required" })
    this.addConnection({ from: "git", to: "react", type: "required" })
    this.addConnection({ from: "react", to: "nodejs", type: "required" })
    this.addConnection({ from: "nodejs", to: "express", type: "required" })
    this.addConnection({ from: "express", to: "databases", type: "required" })
    this.addConnection({ from: "databases", to: "rest-api", type: "required" })
    this.addConnection({ from: "rest-api", to: "api-integration", type: "required" })
    this.addConnection({ from: "api-integration", to: "authentication", type: "required" })
    this.addConnection({ from: "authentication", to: "personal-access-tokens", type: "required" })
    this.addConnection({ from: "personal-access-tokens", to: "typescript", type: "required" })
    this.addConnection({ from: "typescript", to: "testing", type: "required" })
    this.addConnection({ from: "testing", to: "deployment", type: "required" })
    this.addConnection({ from: "deployment", to: "performance", type: "optional" })
    this.addConnection({ from: "deployment", to: "security", type: "optional" })
    this.addConnection({ from: "deployment", to: "microservices", type: "optional" })
    this.addConnection({ from: "performance", to: "end", type: "optional" })
    this.addConnection({ from: "security", to: "end", type: "optional" })
    this.addConnection({ from: "microservices", to: "end", type: "optional" })
    this.addConnection({ from: "deployment", to: "end", type: "required" })
  }
}
