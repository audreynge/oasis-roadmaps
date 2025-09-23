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

    // Row 1: Frontend Foundation
    this.addNode(
      this.createNode(
        "html-css",
        "HTML & CSS",
        "Frontend structure & styling",
        "skill",
        { x: 600, y: 200 },
        [
          this.createResource(
            "HTML Guide",
            "Learn HTML fundamentals",
            "https://oasisneu.notion.site/HTML-Basics-179807275e4881638ff4f35f3c0556b3?pvs=23",
            "Documentation",
            "Beginner",
            "1 hour",
          ),
          this.createResource(
            "CSS Guide",
            "Learn CSS fundamentals",
            "https://oasisneu.notion.site/CSS-179807275e4881c8b4ecf68704c2a380?pvs=23",
            "Documentation",
            "Beginner",
            "2 hours",
          ),
        ],
        3,
      ),
    )

    // Row 3: JavaScript
    this.addNode(
      this.createNode(
        "javascript",
        "JavaScript",
        "Programming language of the web",
        "skill",
        { x: 600, y: 290 },
        [
          this.createResource(
            "JavaScript Guide",
            "Learn JavaScript fundamentals",
            "https://oasisneu.notion.site/JavaScript-179807275e48817ea69bc204e52417f3?pvs=23",
            "Course",
            "Beginner",
            "3 hours",
          ),
        ],
        3,
      ),
    )

    // Row 4: Version Control
    this.addNode(
      this.createNode(
        "git",
        "Git & GitHub",
        "Version control system",
        "skill",
        { x: 600, y: 380 },
        [
          this.createResource(
            "Git Handbook",
            "Learn version control",
            "https://oasisneu.notion.site/Version-Control-179807275e48811996f7dce1a0359a21?pvs=23",
            "Documentation",
            "Beginner",
            "1 hour",
          ),
        ],
        1,
      ),
    )

    // Row 5: Frontend Framework
    this.addNode(
      this.createNode(
        "react",
        "React",
        "Frontend framework",
        "skill",
        { x: 600, y: 470 },
        [
          this.createResource(
            "React Documentation",
            "Learn React framework",
            "https://oasisneu.notion.site/React-Basics-Setup-State-Props-179807275e4881a380ece2706395839b",
            "Documentation",
            "Intermediate",
            "4 hours",
          ),
        ],
        7,
      ),
    )

    // Row 6: Backend Runtime
    this.addNode(
      this.createNode(
        "nodejs",
        "Node.js",
        "Server-side JavaScript",
        "skill",
        { x: 600, y: 560 },
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
        { x: 600, y: 650 },
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
        { x: 600, y: 740 },
        [
          this.createResource(
            "SQL Basics",
            "Learn SQL basics",
            "https://oasisneu.notion.site/SQL-Basics-179807275e4881d0a20edd0971f0db55?pvs=23",
            "Course",
            "Beginner",
            "2 hours",
          ),
          this.createResource(
            "Supabase Basics",
            "Learn Supabase basics",
            "https://oasisneu.notion.site/Supabase-Basics-179807275e4881708546f6dffb987fe3?pvs=23",
            "Course",
            "Intermediate",
            "2 hours",
          ),
          this.createResource(
            "Query Practice",
            "Practice querying Supabase",
            "https://oasisneu.notion.site/Query-Practice-179807275e4881a89827e15a26dccd04?pvs=23",
            "Course",
            "Intermediate",
            "1 hour",
          ),
        ],
        5,
      ),
    )

    // Row 9: API Development
    this.addNode(
      this.createNode(
        "rest-api",
        "REST APIs",
        "API development",
        "skill",
        { x: 600, y: 830 },
        [
          this.createResource(
            "APIs 101",
            "Learn API development",
            "https://oasisneu.notion.site/APIs-101-179807275e4881c1b5ffeb5dcbd6eb12?pvs=23",
            "Course",
            "Intermediate",
            "2 hours",
          ),
          this.createResource(
            "Building a RESTful API",
            "Learn how to build a RESTful API",
            "https://oasisneu.notion.site/Building-A-RESTful-API-Oasis-Roster-179807275e488139a9a1f02fe4ff37ab?pvs=23",
            "Course",
            "Intermediate",
            "3 hours",
          ),
        ],
        5,
      ),
    )

    // Row 10: Frontend-Backend Integration
    this.addNode(
      this.createNode(
        "api-integration",
        "API Integration",
        "Connect frontend & backend",
        "skill",
        { x: 600, y: 920 },
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
        { x: 600, y: 1010 },
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
        { x: 600, y: 1100 },
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
        { x: 600, y: 1190 },
        [
          this.createResource(
            "TypeScript Handbook",
            "Learn TypeScript",
            "https://oasisneu.notion.site/TypeScript-179807275e48815e8acdc413110a90ea?pvs=23",
            "Documentation",
            "Intermediate",
            "2 hours",
          ),
        ],
        2,
      ),
    )

    // Row 14: Testing
    this.addNode(
      this.createNode(
        "testing",
        "Testing",
        "Frontend & Backend testing",
        "skill",
        { x: 600, y: 1280 },
        [
          this.createResource(
            "Unit Testing",
            "Learn unit testing with Jest",
            "https://testing-library.com/docs/",
            "Documentation",
            "Intermediate",
            "2 hours",
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
        "Deployment platforms",
        "topic",
        { x: 600, y: 1370 },
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

    // Row 16: Advanced Topics (Optional)
    this.addNode(
      this.createNode(
        "performance",
        "Performance",
        "Optimization techniques",
        "optional",
        { x: 400, y: 1460 },
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
        { x: 600, y: 1460 },
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
        { x: 800, y: 1460 },
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
        { x: 600, y: 1550 },
        [],
        0,
      ),
    )

    // Clean linear connections
    this.addConnection({ from: "start", to: "html-css", type: "required" })
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
