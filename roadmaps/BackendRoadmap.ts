import { VisualRoadmap } from "../types/roadmap-node"
import type { RoadmapMetadata } from "../types/roadmap"

export class VisualBackendRoadmap extends VisualRoadmap {
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
    // Traditional steps for compatibility
  }

  initializeVisualRoadmap(): void {
    this.visualData.width = 1200
    this.visualData.height = 1500

    // Start
    this.addNode(this.createNode("start", "START", "Begin your backend journey", "start", { x: 600, y: 50 }, [], 0))

    // Row 1: Internet Fundamentals
    this.addNode(
      this.createNode(
        "internet-basics",
        "Internet & HTTP",
        "How the internet works",
        "topic",
        { x: 600, y: 140 },
        [
          this.createResource(
            "HTTP Protocol",
            "Understanding HTTP fundamentals",
            "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            "Documentation",
            "Beginner",
            "6 hours",
          ),
        ],
        10,
      ),
    )

    // Row 2: Programming Language
    this.addNode(
      this.createNode(
        "javascript",
        "JavaScript",
        "Server-side JavaScript",
        "skill",
        { x: 600, y: 230 },
        [
          this.createResource(
            "JavaScript",
            "Deep dive into JavaScript",
            "https://oasisneu.notion.site/JavaScript-179807275e48817ea69bc204e52417f3?pvs=25",
            "Course",
            "Beginner",
            "2 hours",
          ),
        ],
        2,
      ),
    )

    // Row 3: Runtime
    this.addNode(
      this.createNode(
        "nodejs",
        "Node.js",
        "JavaScript runtime",
        "skill",
        { x: 600, y: 320 },
        [
          this.createResource(
            "Node.js Guide",
            "Learn Node.js fundamentals",
            "https://nodejs.org/en/docs/guides/",
            "Documentation",
            "Beginner",
            "20 hours",
          ),
        ],
        30,
      ),
    )

    // Row 4: Version Control
    this.addNode(
      this.createNode(
        "git",
        "Git & GitHub",
        "Version control",
        "skill",
        { x: 600, y: 410 },
        [
          this.createResource(
            "Git Handbook",
            "Learn Git version control",
            "https://oasisneu.notion.site/Oasis-Resources-Page-86e288dffdbd431faf13d9fa53e1ac4a?p=179807275e48811996f7dce1a0359a21&pm=c",
            "Documentation",
            "Beginner",
            "1 hour",
          ),
        ],
        1,
      ),
    )

    // Row 5: Web Framework
    this.addNode(
      this.createNode(
        "express",
        "Express.js",
        "Web framework for Node.js",
        "skill",
        { x: 600, y: 500 },
        [
          this.createResource(
            "Express.js Guide",
            "Learn Express.js framework",
            "https://expressjs.com/en/guide/",
            "Documentation",
            "Intermediate",
            "15 hours",
          ),
        ],
        25,
      ),
    )

    // Row 6: API Development
    this.addNode(
      this.createNode(
        "rest-api",
        "REST APIs",
        "Fetch data from servers",
        "skill",
        { x: 600, y: 590 },
        [
          this.createResource(
            "Building a RESTful API",
            "Understanding REST principles",
            "https://oasisneu.notion.site/Building-A-RESTful-API-Oasis-Roster-179807275e488139a9a1f02fe4ff37ab?pvs=25",
            "Article",
            "Intermediate",
            "3 hours",
          ),
        ],
        3,
      ),
    )

    // Row 7: Database Fundamentals
    this.addNode(
      this.createNode(
        "sql-basics",
        "SQL Basics",
        "Database fundamentals",
        "skill",
        { x: 600, y: 680 },
        [
          this.createResource(
            "SQL Tutorial",
            "Learn SQL fundamentals",
            "https://www.w3schools.com/sql/",
            "Course",
            "Beginner",
            "12 hours",
          ),
        ],
        18,
      ),
    )

    // Row 8: Database Choice
    this.addNode(
      this.createNode(
        "postgresql",
        "PostgreSQL",
        "Relational database",
        "skill",
        { x: 450, y: 770 },
        [
          this.createResource(
            "PostgreSQL Tutorial",
            "Learn PostgreSQL database",
            "https://www.postgresqltutorial.com/",
            "Course",
            "Intermediate",
            "20 hours",
          ),
        ],
        25,
      ),
    )

    this.addNode(
      this.createNode(
        "mongodb",
        "MongoDB",
        "NoSQL database",
        "skill",
        { x: 750, y: 770 },
        [
          this.createResource(
            "MongoDB University",
            "Learn MongoDB database",
            "https://university.mongodb.com/",
            "Course",
            "Intermediate",
            "18 hours",
          ),
        ],
        22,
      ),
    )

    // Row 9: Authentication & Security
    this.addNode(
      this.createNode(
        "authentication",
        "Authentication",
        "JWT, OAuth, Sessions",
        "skill",
        { x: 600, y: 860 },
        [
          this.createResource(
            "JWT Guide",
            "Learn JSON Web Tokens",
            "https://jwt.io/introduction/",
            "Article",
            "Intermediate",
            "8 hours",
          ),
        ],
        15,
      ),
    )

    // Row 10: Personal Access Tokens (NEW)
    this.addNode(
      this.createNode(
        "personal-access-tokens",
        "Personal Access Tokens",
        "API authentication & automation",
        "skill",
        { x: 600, y: 950 },
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
            "API Authentication Best Practices",
            "Secure API access with tokens",
            "https://auth0.com/blog/a-look-at-the-latest-draft-for-oauth-token-exchange/",
            "Article",
            "Intermediate",
            "3 hours",
          ),
          this.createResource(
            "Environment Variables Security",
            "Safely storing API tokens",
            "https://12factor.net/config",
            "Article",
            "Intermediate",
            "2 hours",
          ),
        ],
        10,
      ),
    )

    // Row 11: Testing
    this.addNode(
      this.createNode(
        "testing",
        "Testing",
        "Unit & Integration tests",
        "skill",
        { x: 600, y: 1040 },
        [
          this.createResource(
            "Jest Testing",
            "Learn testing with Jest",
            "https://jestjs.io/docs/getting-started",
            "Documentation",
            "Intermediate",
            "12 hours",
          ),
        ],
        18,
      ),
    )

    // Row 12: DevOps Basics
    this.addNode(
      this.createNode(
        "docker",
        "Docker",
        "Containerization",
        "skill",
        { x: 600, y: 1130 },
        [
          this.createResource(
            "Docker Tutorial",
            "Learn Docker containerization",
            "https://docs.docker.com/get-started/",
            "Documentation",
            "Intermediate",
            "12 hours",
          ),
        ],
        15,
      ),
    )

    // Row 13: Deployment
    this.addNode(
      this.createNode(
        "deployment",
        "Deployment",
        "Deployment platforms",
        "topic",
        { x: 600, y: 1220 },
        [
          this.createResource(
            "Netlify Deployment",
            "Learn how to deploy your app on Netlify",
            "https://oasisneu.notion.site/Deploy-your-site-179807275e4881e4bcc0e766119805fe",
            "Documentation",
            "Intermediate",
            "1 hour",
          ),
        ],
        1,
      ),
    )

    // End
    this.addNode(
      this.createNode("end", "BACKEND DEVELOPER", "You're now a backend developer!", "end", { x: 600, y: 1350 }, [], 0),
    )

    // Clean linear connections
    this.addConnection({ from: "start", to: "internet-basics", type: "required" })
    this.addConnection({ from: "internet-basics", to: "javascript", type: "required" })
    this.addConnection({ from: "javascript", to: "nodejs", type: "required" })
    this.addConnection({ from: "nodejs", to: "git", type: "required" })
    this.addConnection({ from: "git", to: "express", type: "required" })
    this.addConnection({ from: "express", to: "rest-api", type: "required" })
    this.addConnection({ from: "rest-api", to: "sql-basics", type: "required" })
    this.addConnection({ from: "sql-basics", to: "postgresql", type: "alternative" })
    this.addConnection({ from: "sql-basics", to: "mongodb", type: "alternative" })
    this.addConnection({ from: "postgresql", to: "authentication", type: "required" })
    this.addConnection({ from: "mongodb", to: "authentication", type: "required" })
    this.addConnection({ from: "authentication", to: "personal-access-tokens", type: "required" })
    this.addConnection({ from: "personal-access-tokens", to: "testing", type: "required" })
    this.addConnection({ from: "testing", to: "docker", type: "required" })
    this.addConnection({ from: "docker", to: "deployment", type: "required" })
    this.addConnection({ from: "deployment", to: "end", type: "required" })
  }
}
