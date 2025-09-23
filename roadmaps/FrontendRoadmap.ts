import type { RoadmapMetadata } from "../types/roadmap"
import { VisualRoadmap } from "../types/roadmap-node"

export class VisualFrontendRoadmap extends VisualRoadmap {
  constructor() {
    const metadata: RoadmapMetadata = {
      id: "frontend",
      title: "Frontend Development",
      description: "Master modern frontend development with React, TypeScript, and modern tooling",
      icon: "🎨",
      color: "oasis-teal",
      difficulty: "Beginner",
      estimatedMonths: 6,
      prerequisites: ["Basic programming knowledge"],
    }
    super(metadata)
  }

  initializeSteps(): void {
    // Traditional steps for compatibility
  }

  initializeVisualRoadmap(): void {
    this.visualData.width = 1200
    this.visualData.height = 1400

    // Start
    this.addNode(this.createNode("start", "START", "Begin your frontend journey", "start", { x: 600, y: 50 }, [], 0))

    // Row 1: Development Environment
    this.addNode(
      this.createNode(
        "vscode-setup",
        "VS Code Setup",
        "Install and configure your code editor",
        "skill",
        { x: 600, y: 140 },
        [
          this.createResource(
            "VS Code Installation",
            "Download and set up Visual Studio Code",
            "https://oasisneu.notion.site/Installing-Visual-Studio-Code-179807275e4881f79e82c00a75a73a44",
            "Documentation",
            "Beginner",
            "15 minutes",
          ),
          this.createResource(
            "Essential VS Code Extensions",
            "Must-have extensions for web development",
            "https://code.visualstudio.com/docs/editor/extension-marketplace",
            "Article",
            "Beginner",
            "15 minutes",
          ),
        ],
        0.5,
      ),
    )

    // Row 2: Web Fundamentals
    this.addNode(
      this.createNode(
        "web-fundamentals",
        "Web Fundamentals",
        "How the internet and web work",
        "topic",
        { x: 600, y: 230 },
        [
          this.createResource(
            "How the Web Works",
            "Understanding web fundamentals",
            "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
            "Article",
            "Beginner",
            "1 hour",
          ),
        ],
        1,
      ),
    )

    // Row 3: HTML
    this.addNode(
      this.createNode(
        "html",
        "HTML",
        "Structure and semantics",
        "skill",
        { x: 600, y: 320 },
        [
          this.createResource(
            "HTML Basics",
            "Learn HTML fundamentals",
            "https://oasisneu.notion.site/HTML-Basics-179807275e4881638ff4f35f3c0556b3?pvs=25",
            "Documentation",
            "Beginner",
            "1 hour",
          ),
        ],
        2,
      ),
    )

    // Row 4: CSS
    this.addNode(
      this.createNode(
        "css",
        "CSS",
        "Styling and basic layout",
        "skill",
        { x: 600, y: 410 },
        [
          this.createResource(
            "CSS",
            "Learn CSS fundamentals",
            "https://oasisneu.notion.site/CSS-179807275e4881c8b4ecf68704c2a380?pvs=25",
            "Documentation",
            "Beginner",
            "2 hours",
          ),
        ],
        2,
      ),
    )

    // Row 5: Advanced CSS Layout
    this.addNode(
      this.createNode(
        "css-flexbox",
        "Flexbox",
        "Flexible layouts",
        "topic",
        { x: 450, y: 500 },
        [
          this.createResource(
            "Flexbox Guide",
            "Complete guide to Flexbox",
            "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            "Article",
            "Intermediate",
            "2 hours",
          ),
        ],
        2,
      ),
    )

    this.addNode(
      this.createNode(
        "css-grid",
        "CSS Grid",
        "Grid layout system",
        "topic",
        { x: 750, y: 500 },
        [
          this.createResource(
            "CSS Grid Guide",
            "Complete guide to CSS Grid",
            "https://css-tricks.com/snippets/css/complete-guide-grid/",
            "Article",
            "Intermediate",
            "2 hours",
          ),
        ],
        2,
      ),
    )

    // Row 6: Responsive Design (Both paths converge)
    this.addNode(
      this.createNode(
        "responsive-design",
        "Responsive Design",
        "Mobile-first approach",
        "skill",
        { x: 600, y: 590 },
        [
          this.createResource(
            "Responsive Design",
            "Learn responsive web design",
            "https://web.dev/responsive-web-design-basics/",
            "Article",
            "Intermediate",
            "2 hours",
          ),
        ],
        3,
      ),
    )

    // Row 7: First Project Milestone
    this.addNode(
      this.createNode(
        "first-site",
        "Build Your First Site",
        "Create a responsive HTML/CSS website",
        "milestone",
        { x: 600, y: 680 },
        [
          this.createResource(
            "Web esssentials",
            "Step-by-step guide to your first website",
            "https://oasisneu.notion.site/Web-Essentials-HTML-CSS-JS-179807275e4881ac8b66e39e90dbf4b0?pvs=25",
            "Course",
            "Beginner",
            "3 hours",
          ),
        ],
        8,
      ),
    )

    // Row 8: Version Control
    this.addNode(
      this.createNode(
        "version-control",
        "Version Control",
        "Git & GitHub basics",
        "skill",
        { x: 600, y: 770 },
        [
          this.createResource(
            "Git Handbook",
            "Learn Git version control",
            "https://oasisneu.notion.site/Version-Control-179807275e48811996f7dce1a0359a21?pvs=25",
            "Documentation",
            "Beginner",
            "2 hours",
          ),
        ],
        2,
      ),
    )

    // Row 9: JavaScript Foundation
    this.addNode(
      this.createNode(
        "javascript",
        "JavaScript",
        "Programming language of the web",
        "skill",
        { x: 600, y: 860 },
        [
          this.createResource(
            "JavaScript Fundamentals",
            "Learn JavaScript from scratch",
            "https://oasisneu.notion.site/JavaScript-179807275e48817ea69bc204e52417f3?pvs=25",
            "Course",
            "Beginner",
            "3 hours",
          ),
          this.createResource(
            "JavaScript DOM Manipulation",
            "Learn to interact with HTML elements",
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
            "Documentation",
            "Intermediate",
            "2 hours",
          ),
        ],
        5,
      ),
    )

    // Row 10: REST APIs
    this.addNode(
      this.createNode(
        "rest-apis",
        "REST APIs",
        "Fetch data from servers",
        "skill",
        { x: 600, y: 950 },
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

    // Row 11: React Foundation
    this.addNode(
      this.createNode(
        "react-basics",
        "React Basics",
        "JavaScript library for UIs",
        "skill",
        { x: 600, y: 1040 },
        [
          this.createResource(
            "React Basics",
            "Learn React components and JSX",
            "https://oasisneu.notion.site/React-Basics-Setup-State-Props-179807275e4881a380ece2706395839b",
            "Documentation",
            "Intermediate",
            "4 hours",
          ),
        ],
        7,
      ),
    )

    // Row 12: TypeScript
    this.addNode(
      this.createNode(
        "typescript",
        "TypeScript",
        "Typed JavaScript",
        "skill",
        { x: 600, y: 1130 },
        [
          this.createResource(
            "TypeScript",
            "Learn TypeScript",
            "https://oasisneu.notion.site/TypeScript-179807275e48815e8acdc413110a90ea?pvs=25",
            "Documentation",
            "Intermediate",
            "2 hours",
          ),
        ],
        2,
      ),
    )

    // End
    this.addNode(
      this.createNode(
        "end",
        "FRONTEND DEVELOPER",
        "You're now a frontend developer!",
        "end",
        { x: 600, y: 1250 },
        [],
        0,
      ),
    )

    this.addConnection({ from: "start", to: "vscode-setup", type: "required" })
    this.addConnection({ from: "vscode-setup", to: "web-fundamentals", type: "required" })
    this.addConnection({ from: "web-fundamentals", to: "html", type: "required" })
    this.addConnection({ from: "html", to: "css", type: "required" })
    // CSS branches to both layout systems
    this.addConnection({ from: "css", to: "css-flexbox", type: "required" })
    this.addConnection({ from: "css", to: "css-grid", type: "required" })
    // Both converge to responsive design
    this.addConnection({ from: "css-flexbox", to: "responsive-design", type: "required" })
    this.addConnection({ from: "css-grid", to: "responsive-design", type: "required" })
    this.addConnection({ from: "responsive-design", to: "first-site", type: "required" })
    this.addConnection({ from: "first-site", to: "version-control", type: "required" })
    this.addConnection({ from: "version-control", to: "javascript", type: "required" })
    this.addConnection({ from: "javascript", to: "rest-apis", type: "required" })
    this.addConnection({ from: "rest-apis", to: "react-basics", type: "required" })
    this.addConnection({ from: "react-basics", to: "typescript", type: "required" })
    this.addConnection({ from: "typescript", to: "end", type: "required" })
  }
}
